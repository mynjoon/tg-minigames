/* ==========================================================================
   IndexNow 색인 핑 — 새 페이지·갱신 페이지를 검색엔진에 즉시 알린다.
   실행: node tools/indexnow-ping.mjs              (사이트맵 전체)
         node tools/indexnow-ping.mjs /used /guides  (특정 경로만)

   IndexNow는 Bing·네이버·Yandex·Seznam이 공유하는 표준이다. 구글은 참여하지 않으므로
   구글은 서치콘솔 색인 요청으로 따로 처리한다.

   growth-engine 플레이북 실측 기록: 네이버는 대량 제출도 전량 200, Bing은 배치가
   몰리면 429(레이트리밋)가 난다. **Bing 429는 정상 범위**이고 주간 루틴에서 재핑한다.
   외부 호출은 curl로 한다 — node fetch가 프록시를 안 탄다(실패 9번).
   ========================================================================== */
import { readFile, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { SITE, HOST } from "./site.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/* 키는 도메인 루트에 <key>.txt 로 호스팅돼야 소유 증명이 된다.
   도메인에서 결정론적으로 파생해 재생성해도 같은 값이 나오게 한다. */
const KEY = createHash("sha256").update("indexnow:" + HOST).digest("hex").slice(0, 32);
const KEY_FILE = join(ROOT, `${KEY}.txt`);
await writeFile(KEY_FILE, KEY, "utf8");
console.log(`키 파일: /${KEY}.txt`);

/* 제출 URL 목록 */
let urls = process.argv.slice(2).map((p) => (p.startsWith("http") ? p : SITE + p));
if (!urls.length) {
  const sm = await readFile(join(ROOT, "sitemap.xml"), "utf8");
  urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}
console.log(`제출 대상 ${urls.length}건\n`);

const ENDPOINTS = [
  ["네이버", "https://searchadvisor.naver.com/indexnow"],
  ["Bing",  "https://www.bing.com/indexnow"],
];

/* IndexNow 일괄 제출은 한 번에 최대 10,000건이지만, 응답 진단이 쉽도록 배치를 나눈다 */
const BATCH = 100;
for (const [name, endpoint] of ENDPOINTS) {
  let ok = 0, rate = 0, fail = 0;
  for (let i = 0; i < urls.length; i += BATCH) {
    const body = JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `${SITE}/${KEY}.txt`,
      urlList: urls.slice(i, i + BATCH),
    });
    let code = "000";
    try {
      code = execFileSync("curl", [
        "-sS", "--max-time", "40", "-o", "/dev/null", "-w", "%{http_code}",
        "-X", "POST", endpoint,
        "-H", "Content-Type: application/json; charset=utf-8",
        "-d", body,
      ], { encoding: "utf8" }).trim();
    } catch (e) { code = "ERR"; }
    if (code === "200" || code === "202") ok++;
    else if (code === "429") rate++;
    else fail++;
    console.log(`  ${name} 배치 ${Math.floor(i / BATCH) + 1}: ${code}`);
  }
  const note = rate ? ` · 429 ${rate}건(레이트리밋 — 주간 루틴에서 재핑)` : "";
  console.log(`${name}: 성공 ${ok}${note}${fail ? ` · 실패 ${fail}` : ""}\n`);
}

console.log("※ 구글은 IndexNow에 참여하지 않는다 — 서치콘솔에서 사이트맵 재제출/색인 요청으로 처리할 것.");
