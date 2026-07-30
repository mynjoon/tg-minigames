/* ==========================================================================
   라이브 SEO 회귀 감지 — 일일 헬스체크용. 통과는 조용히, 실패만 보고.
   growth-engine 플레이북 1단계 최소 세트.

   외부 요청은 curl로 한다 — 이 실행환경은 node fetch가 프록시를 안 탄다(실패 9번).
   프록시가 응답을 중복 전송하는 버그도 있어 본문 길이가 아니라 '포함 여부'로 판정한다.

   사용: node tools/seo-check.mjs [베이스URL]
   ========================================================================== */
import { execFileSync } from "node:child_process";
import { NAP, SITE } from "./site.mjs";

const BASE = (process.argv[2] || SITE).replace(/\/$/, "");
const fails = [];
const notes = [];

const get = (path) => {
  try {
    return execFileSync("curl", ["-sSL", "--max-time", "30", `${BASE}${path}?cb=${Date.now()}`],
      { encoding: "utf8", maxBuffer: 32e6 });
  } catch (e) { return ""; }
};

/* 페이지별 필수 요소 — 하나라도 빠지면 색인·표시가 조용히 나빠진다 */
const CHECKS = [
  { path: "/", must: [
    `<link rel="canonical" href="${SITE}/"`,
    '"@type": "MobilePhoneStore"',
    NAP.tel.replace(/-/g, "-"),          // 전화번호 노출(NAP)
    'naver-site-verification',            // 네이버 소유확인
    'og:image',
    'track.js',                           // 측정 계층 로드
  ]},
  { path: "/devices", must: [`<link rel="canonical" href="${SITE}/devices"`, '"BreadcrumbList"', 'og:title'] },
  { path: "/used", must: [`<link rel="canonical" href="${SITE}/used"`, '"FAQPage"', '"Service"', '<noscript>'] },
  { path: "/privacy", must: [`<link rel="canonical" href="${SITE}/privacy"`] },
];

for (const c of CHECKS) {
  const html = get(c.path);
  if (!html) { fails.push(`${c.path}: 응답 없음`); continue; }
  const missing = c.must.filter((m) => !html.includes(m));
  if (missing.length) fails.push(`${c.path}: 누락 — ${missing.join(" / ")}`);
}

/* robots·사이트맵·AI 파일 */
const robots = get("/robots.txt");
if (!robots.includes("Sitemap:")) fails.push("robots.txt: Sitemap 지시자 없음");
for (const bot of ["GPTBot", "ClaudeBot", "PerplexityBot", "Yeti"]) {
  if (!robots.includes(bot)) fails.push(`robots.txt: ${bot} 허용 누락`);
}

const sitemap = get("/sitemap.xml");
const locs = (sitemap.match(/<loc>/g) || []).length;
if (locs < 4) fails.push(`sitemap.xml: URL ${locs}개 (최소 4)`);
/* 사이트맵의 URL이 실제로 200인지 — 사이트맵에 죽은 URL이 있으면 크롤 예산을 태운다 */
for (const m of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const u = m[1];
  let code = "";
  try {
    code = execFileSync("curl", ["-sSL", "-o", "/dev/null", "-w", "%{http_code}", "--max-time", "25", u],
      { encoding: "utf8" }).trim();
  } catch (e) { code = "ERR"; }
  if (code !== "200") fails.push(`sitemap URL ${code}: ${u}`);
}

for (const f of ["/llms.txt", "/llms-full.txt"]) {
  if (!get(f).includes("공일모바일")) fails.push(`${f}: 내용 없음/변조`);
}

/* NAP 일관성 — 사이트 푸터와 site.mjs 상수가 어긋나면 로컬 SEO 신뢰가 깨진다 */
const home = get("/");
for (const [k, v] of [["주소", NAP.street], ["지역", NAP.locality], ["전화", NAP.tel]]) {
  if (!home.includes(v)) notes.push(`NAP ${k} "${v}" 가 홈에서 안 보임 — 플레이스와 대조 필요`);
}

if (notes.length) console.log("· 참고\n" + notes.map((n) => "  - " + n).join("\n"));
if (fails.length) {
  console.error(`✘ SEO 회귀 ${fails.length}건\n` + fails.map((f) => "  - " + f).join("\n"));
  process.exit(1);
}
console.log("✓ SEO 체크 통과 (canonical·스키마·robots·사이트맵·AI파일·NAP)");
