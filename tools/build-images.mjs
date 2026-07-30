/* ==========================================================================
   제품 렌더 이미지 → WebP 변환 + 참조 갱신
   실행: node tools/build-images.mjs

   왜 WebP인가: 이 렌더들은 넓은 그라디언트 면이라 PNG가 비효율적이다(장당 300~450KB).
   앞서 팔레트 양자화(색 수 축소)를 시도했다가 라벤더 그라디언트에 밴딩이 생겨 되돌렸다.
   WebP q92는 육안 차이 없이 90% 이상 줄어든다(평균 픽셀 오차 2.1/255, 실측).

   변환하지 않는 것 — 호환성이 용량보다 중요한 자산:
     logo.png       : JSON-LD publisher.logo·파비콘. 스키마 소비자가 webp를 못 읽는 경우가 있다
     og-image.jpg   : 카카오·페북 등 공유 미리보기. WebP 지원이 고르지 않다
     store-exterior.jpg : JSON-LD image
   ========================================================================== */
import { readFile, writeFile, unlink, readdir } from "node:fs/promises";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const KEEP = new Set(["logo.png", "og-image.jpg", "store-exterior.jpg"]);
const QUALITY = 92;

async function loadSharpOrPil() {
  try { return { sharp: (await import("sharp")).default }; } catch (_) {}
  return { python: true };
}
const engine = await loadSharpOrPil();

const files = (await readdir(join(ROOT, "assets")))
  .filter((f) => /\.(png|jpg|jpeg)$/i.test(f) && !KEEP.has(f));

if (!files.length) { console.log("변환 대상 없음 (이미 WebP)"); process.exit(0); }

/* 변환 — sharp가 없으면 Pillow로 (이 환경은 Pillow가 있다) */
let before = 0, after = 0;
const { execFileSync } = await import("node:child_process");
if (engine.python) {
  const py = `
from PIL import Image
import os, sys
q = ${QUALITY}
for name in sys.argv[1:]:
    p = os.path.join("${join(ROOT, "assets")}", name)
    im = Image.open(p)
    im = im.convert("RGBA") if im.mode in ("RGBA", "LA", "P") else im.convert("RGB")
    out = os.path.splitext(p)[0] + ".webp"
    im.save(out, "WEBP", quality=q, method=6)
    print(f"{name}\\t{os.path.getsize(p)}\\t{os.path.getsize(out)}")
`;
  const res = execFileSync("python3", ["-c", py, ...files], { encoding: "utf8" });
  for (const line of res.trim().split("\n")) {
    const [, b, a] = line.split("\t");
    before += +b; after += +a;
  }
} else {
  for (const f of files) {
    const src = join(ROOT, "assets", f);
    const dst = src.replace(/\.(png|jpg|jpeg)$/i, ".webp");
    const buf = await readFile(src);
    before += buf.length;
    await engine.sharp(buf).webp({ quality: QUALITY, effort: 6 }).toFile(dst);
    after += (await readFile(dst)).length;
  }
}

/* 참조 갱신 — 코드·데이터·빌더가 뱉는 경로 전부 */
const TARGETS = [
  ...(await readdir(ROOT)).filter((f) => /\.(html|jsx|js)$/.test(f)),
  ...(await readdir(join(ROOT, "tools"))).map((f) => join("tools", f)).filter((f) => f.endsWith(".mjs")),
];
let touched = 0;
for (const rel of TARGETS) {
  const p = join(ROOT, rel);
  let s;
  try { s = await readFile(p, "utf8"); } catch (_) { continue; }
  let next = s;
  for (const f of files) {
    const webp = f.replace(/\.(png|jpg|jpeg)$/i, ".webp");
    next = next.split(`assets/${f}`).join(`assets/${webp}`);
  }
  if (next !== s) { await writeFile(p, next, "utf8"); touched++; }
}

/* 원본 삭제 — 참조가 없어진 뒤에 지운다 */
for (const f of files) await unlink(join(ROOT, "assets", f));

console.log(`WebP 변환 ${files.length}개 · ${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB (${100 - Math.round(after * 100 / before)}% 감소)`);
console.log(`참조 갱신 ${touched}개 파일 · 유지: ${[...KEEP].join(", ")}`);
