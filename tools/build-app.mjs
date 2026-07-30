/* ==========================================================================
   JSX 사전 컴파일 — 브라우저에서 Babel standalone(약 3.1MB)을 걷어낸다.
   실행: node tools/build-app.mjs

   왜: 지금은 브라우저가 매 방문마다 Babel을 내려받아 JSX를 실시간 컴파일한다.
   3.1MB 다운로드 + 메인스레드 컴파일이라 Core Web Vitals(LCP·TBT)에 직격이다.
   빌드 시점에 한 번 컴파일해 두면 그 비용이 전부 사라진다.

   설계:
   - 이 프로젝트의 .jsx는 모듈이 아니라 '전역 스크립트'다(import/export 없음).
     그래서 번들러가 아니라 파일별 트랜스폼 후 순서대로 이어붙이는 방식을 쓴다.
     로드 순서가 곧 의존 순서이므로 HTML에 적힌 순서를 그대로 따른다.
   - 산출물은 dist/<페이지>.js 하나. HTML의 text/babel 스크립트들을 이걸로 교체한다.
   - 원본 .jsx는 그대로 둔다(수정은 계속 .jsx에서 하고 배포 전 이 빌더를 돌린다).
   ========================================================================== */
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");

/* esbuild 해석 — 전역 설치본까지 시도 (ESM은 NODE_PATH를 무시한다) */
async function loadEsbuild() {
  for (const c of ["esbuild", "/opt/node22/lib/node_modules/esbuild/lib/main.js"]) {
    try { return (await import(c)).default ?? (await import(c)); } catch (_) {}
  }
  return null;
}
const esbuild = await loadEsbuild();

const PAGES = ["index.html", "used/index.html", "devices.html", "partner.html", "admin.html"];

/* HTML에서 text/babel 스크립트 목록을 순서대로 뽑는다 */
const BABEL_TAG = /<script type="text\/babel" src="([^"]+)"><\/script>\s*/g;

/* 첫 실행은 HTML의 text/babel 태그에서 소스 목록을 뽑고, 그 목록을 매니페스트에 남긴다.
   두 번째 실행부터는 HTML에 태그가 없으므로 매니페스트를 읽는다 — 이게 없으면
   .jsx를 고쳐도 재빌드가 안 되고 조용히 옛 번들이 배포된다. */
const MANIFEST = join(DIST, "manifest.json");
let manifest = {};
try { manifest = JSON.parse(await readFile(MANIFEST, "utf8")); } catch (_) {}

let built = 0;
await mkdir(DIST, { recursive: true });

for (const rel of PAGES) {
  const htmlPath = join(ROOT, rel);
  let html;
  try { html = await readFile(htmlPath, "utf8"); } catch (_) { continue; }

  const fromHtml = [...html.matchAll(BABEL_TAG)].map((m) => m[1]);
  const srcs = fromHtml.length ? fromHtml : (manifest[rel] || []);
  if (!srcs.length) continue;
  manifest[rel] = srcs;

  /* 각 JSX를 개별 트랜스폼 후 순서대로 연결 — 전역 스코프 의존을 그대로 보존한다.
     IIFE로 감싸지 않는 이유: 파일들이 서로의 최상위 함수/상수를 전역으로 참조한다. */
  const parts = [];
  for (const src of srcs) {
    const p = join(ROOT, src.replace(/^\//, "").split("?")[0]);
    const code = await readFile(p, "utf8");
    let out;
    if (esbuild) {
      out = (await esbuild.transform(code, { loader: "jsx", target: "es2018", format: "iife" })).code;
    } else {
      /* esbuild가 없으면 npx로 폴백 (오프라인이면 여기서 실패해야 한다 — 조용히 넘기지 않는다) */
      out = execFileSync("npx", ["--yes", "esbuild", "--loader=jsx", "--target=es2018"],
        { input: code, encoding: "utf8", maxBuffer: 64e6 });
    }
    /* 각 파일을 IIFE로 격리한다 — 원래 <script> 태그별로 스코프가 나뉘어 있었고,
       여러 파일이 같은 이름(예: const { useState } = React)을 최상위에 선언하기 때문.
       그대로 이어붙이면 "Identifier has already been declared"로 페이지가 죽는다(게이트가 잡음).
       대신 최상위 function 선언은 전역에 노출해야 다른 파일이 참조할 수 있다. */
    const fns = [...code.matchAll(/^function\s+([A-Za-z_$][\w$]*)\s*\(/gm)].map((m) => m[1]);
    const expose = fns.length
      ? `\n/* 전역 노출 */\n${fns.map((f) => `if (typeof ${f} !== "undefined") globalThis.${f} = ${f};`).join("\n")}`
      : "";
    parts.push(`/* ${src} */\n(function(){\n${out}${expose}\n})();`);
  }

  const bundleName = rel.replace(/\.html$/, "").replace(/\//g, "-") + ".js";
  await writeFile(join(DIST, bundleName), parts.join("\n"), "utf8");

  /* HTML 교체는 첫 전환 때만 — 이미 번들을 참조하고 있으면 건드리지 않는다 */
  if (fromHtml.length) {
    let next = html.replace(BABEL_TAG, "");
    next = next.replace(/\s*<script defer src="https:\/\/unpkg\.com\/@babel\/standalone[^"]*"[^>]*><\/script>/g, "");
    next = next.replace(/<\/body>/, `<script defer src="/dist/${bundleName}"></script>\n</body>`);
    await writeFile(htmlPath, next, "utf8");
  }

  const bytes = parts.join("\n").length;
  console.log(`${rel.padEnd(18)} JSX ${String(srcs.length).padStart(2)}개 → /dist/${bundleName} (${(bytes / 1024).toFixed(0)}KB)`);
  built++;
}

await writeFile(MANIFEST, JSON.stringify(manifest, null, 2), "utf8");

if (!built) {
  console.log("변경 없음 — 이미 컴파일된 상태이거나 text/babel 스크립트가 없다.");
} else {
  console.log(`\n${built}개 페이지 컴파일 완료. Babel standalone(약 3.1MB) 제거됨.`);
}
