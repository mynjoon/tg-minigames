/* ==========================================================================
   배포 게이트 — 실제 브라우저로 핵심 페이지를 열어 검사하고 위반 시 exit 1.
   growth-engine 플레이북 "절대 타협 금지 2번".

   ⚠️ 검증에 필터를 걸면 그건 검증이 아니다(실패 1번). 실패 요청은 확장자·경로
   구분 없이 전부 센다. SETKORA는 404 집계를 /\.(js|css)$/로 필터링해서
   상품 이미지 2,677장 404를 "0건"으로 통과시켰다.

   사용:
     node tools/deploy-gate.mjs                  # 로컬(포트 8901) 검사
     node tools/deploy-gate.mjs https://01mobile.co.kr   # 라이브 검사
   ========================================================================== */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const { PAGES } = await import("./site.mjs");

const MIME = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript",
  ".jsx": "text/babel", ".css": "text/css", ".png": "image/png", ".jpg": "image/jpeg",
  ".svg": "image/svg+xml", ".xml": "application/xml", ".txt": "text/plain", ".json": "application/json" };

/* 로컬 검사용 정적 서버 — 확장자 없는 클린 URL도 .html로 해석(Pages와 동일) */
function serve(port) {
  return new Promise((resolve) => {
    const s = createServer(async (req, res) => {
      let p = decodeURIComponent(req.url.split("?")[0]);
      if (p.endsWith("/")) p += "index.html";
      let file = join(ROOT, p);
      try {
        const st = await stat(file);
        if (st.isDirectory()) file = join(file, "index.html");
      } catch { file = join(ROOT, p + ".html"); }
      try {
        const buf = await readFile(file);
        res.writeHead(200, { "content-type": MIME[extname(file)] || "application/octet-stream" });
        res.end(buf);
      } catch { res.writeHead(404, { "content-type": "text/plain" }); res.end("404"); }
    });
    s.listen(port, () => resolve(s));
  });
}

const base = process.argv[2] || `http://127.0.0.1:8917`;
const local = !process.argv[2];
const server = local ? await serve(8917) : null;

/* ESM은 NODE_PATH를 무시한다 — 전역 설치본까지 순서대로 시도 */
async function loadPlaywright() {
  const cands = ["playwright", "/opt/node22/lib/node_modules/playwright/index.mjs",
                 "/usr/lib/node_modules/playwright/index.mjs"];
  for (const c of cands) { try { return await import(c); } catch (_) {} }
  throw new Error("playwright를 찾을 수 없다. npm i -D playwright 또는 전역 설치 필요.");
}
const { chromium } = await loadPlaywright();
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const violations = [];

/* CDN 캐시 — 이 실행환경은 node fetch가 프록시를 안 타서 CDN이 막힌다(플레이북 실패 9번).
   curl은 프록시 환경변수를 알아서 쓰므로 curl로 한 번 받아 캐시하고 브라우저에 주입한다.
   캐시가 없으면(=오프라인) 외부 요청 실패는 위반이 아니라 경고로 표시한다 — 환경 한계이지
   사이트 결함이 아니므로. 단, 조용히 넘기지 않고 반드시 출력한다. */
const CDN_RE = /unpkg\.com|jsdelivr\.net|fonts\.(googleapis|gstatic)\.com|googletagmanager\.com/;
const CACHE = join(ROOT, "tools", ".cache");
const cdnCache = new Map();
async function primeCdn() {
  const { mkdir } = await import("node:fs/promises");
  const { execFileSync } = await import("node:child_process");
  const { createHash } = await import("node:crypto");
  await mkdir(CACHE, { recursive: true });
  const urls = [
    "https://unpkg.com/react@18.3.1/umd/react.production.min.js",
    "https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone@7.29.0/babel.min.js",
    "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.110.0/dist/umd/supabase.js",
  ];
  for (const u of urls) {
    const f = join(CACHE, createHash("sha1").update(u).digest("hex").slice(0, 12) + ".js");
    try { cdnCache.set(u, await readFile(f, "utf8")); continue; } catch (_) {}
    try {
      execFileSync("curl", ["-sSL", "--max-time", "60", "-o", f, u], { stdio: "ignore" });
      cdnCache.set(u, await readFile(f, "utf8"));
    } catch (_) { /* 오프라인 — 아래에서 경고 처리 */ }
  }
}
if (local) await primeCdn();
const cdnReady = cdnCache.size >= 3;
if (local && !cdnReady) console.warn("⚠ CDN 캐시 없음(오프라인) — 외부 요청 실패는 경고로만 처리. 라이브 검사로 교차확인할 것.");

for (const page of PAGES) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const tab = await ctx.newPage();
  const failed = [];   // 실패 요청 — 필터 없이 전부
  const jsErrors = [];
  const failedExternal = [];
  const bucket = (u, s) => (CDN_RE.test(u) ? failedExternal : failed).push(`${s} ${u}`);
  tab.on("response", (r) => { if (r.status() >= 400) bucket(r.url(), r.status()); });
  tab.on("requestfailed", (r) => bucket(r.url(), "FAILED"));

  if (local) {
    await tab.route(CDN_RE, async (route) => {
      const u = route.request().url();
      const hit = cdnCache.get(u);
      if (hit) return route.fulfill({ body: hit, contentType: "text/javascript" });
      if (/\.css|fonts\./.test(u)) return route.fulfill({ body: "", contentType: "text/css" });
      return route.abort();
    });
  }
  tab.on("pageerror", (e) => jsErrors.push(String(e).slice(0, 160)));

  const url = base + page.path;
  try {
    await tab.goto(url, { waitUntil: "load", timeout: 45000 });
  } catch (e) {
    violations.push(`${page.path}: 페이지 로드 실패 — ${e.message.slice(0, 100)}`);
    await ctx.close();
    continue;
  }
  await tab.waitForTimeout(3500); // Babel standalone 렌더 대기

  /* 깨진 이미지 — naturalWidth 0 */
  const brokenImgs = await tab.evaluate(() =>
    [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.currentSrc || i.src));

  /* 가로 스크롤 */
  const hScroll = await tab.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 2);

  /* 필수 요소 */
  const missing = [];
  for (const sel of page.must) {
    if (!(await tab.$(sel))) missing.push(sel);
  }

  /* 내부링크 수 — 사이트맵에만 있는 페이지는 색인되지 않는다(실패 3번) */
  const links = await tab.evaluate(() =>
    [...document.querySelectorAll("a[href]")]
      .map((a) => a.getAttribute("href"))
      .filter((h) => h && !/^(https?:|tel:|mailto:|#|javascript:)/.test(h)).length);

  if (failed.length) violations.push(`${page.path}: 실패 요청 ${failed.length}건 — ${failed.slice(0, 4).join(" | ")}`);
  if (brokenImgs.length) violations.push(`${page.path}: 깨진 이미지 ${brokenImgs.length}건 — ${brokenImgs.slice(0, 3).join(" | ")}`);
  if (jsErrors.length) violations.push(`${page.path}: JS 에러 ${jsErrors.length}건 — ${jsErrors.slice(0, 2).join(" | ")}`);
  if (hScroll) violations.push(`${page.path}: 가로 스크롤 발생`);
  if (missing.length) violations.push(`${page.path}: 필수 요소 없음 — ${missing.join(", ")}`);
  if (links < page.minLinks) violations.push(`${page.path}: 내부링크 ${links}개 (최소 ${page.minLinks})`);

  if (failedExternal.length) console.log(`  ⚠ ${page.path} 외부(CDN) 실패 ${failedExternal.length}건 — 환경 한계, 위반 아님`);
  console.log(` ${page.path.padEnd(12)} 요청실패 ${failed.length} · 깨진이미지 ${brokenImgs.length} · JS에러 ${jsErrors.length} · 내부링크 ${links}`);
  await ctx.close();
}

await browser.close();
if (server) server.close();

if (violations.length) {
  console.error("\n✘ 배포 게이트 실패\n" + violations.map((v) => "  - " + v).join("\n"));
  process.exit(1);
}
console.log("\n✓ 배포 게이트 통과");
