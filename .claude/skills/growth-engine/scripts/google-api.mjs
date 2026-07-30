/* 구글 API(GA4 Data · Search Console) 호출 헬퍼 — 서비스 계정 JSON 하나로 토큰 발급부터 조회까지.

   왜 저장소에 있나: 이 로직은 매 세션 다시 쓰게 되는데, 세 가지 함정이 있어서 처음 쓰면 반드시 막힌다.
     ① 액세스 토큰은 약 1시간 만료 → 세션 중간에 조용히 401이 난다. 매 호출마다 새로 받는다.
     ② node fetch 는 프록시 환경변수를 안 타서 에이전트 환경에서 막힌다 → curl 로 호출한다.
        프록시 포트는 동적이므로 절대 하드코딩하지 않는다(curl 이 환경변수를 알아서 쓴다).
     ③ 에이전트 프록시가 응답을 여러 번 이어붙여 보내는 버그가 있어 JSON.parse 가 깨진다
        → 첫 균형 객체만 잘라서 파싱한다.
   ④ GSC 사이트 식별자는 추측하면 403 이 난다. sites 를 먼저 조회해서 실제 값을 쓴다
      (도메인 속성은 sc-domain:example.com, URL 접두어 속성은 https://example.com/ 로 서로 다르다).

   사용:
     node google-api.mjs <서비스계정.json> gsc-sites
     node google-api.mjs <서비스계정.json> gsc-pages <siteUrl> [시작일 종료일]
     node google-api.mjs <서비스계정.json> ga4-report <propertyId> <디멘션,디멘션> [지표,지표] [시작 종료]

   예:
     node google-api.mjs sa.json gsc-pages "https://example.com/" 2026-07-01 2026-07-30
     node google-api.mjs sa.json ga4-report 546150728 landingPage sessions,activeUsers 28daysAgo today

   서비스 계정에 각 콘솔에서 권한을 먼저 부여해야 한다(GA4: 속성 뷰어, GSC: 사이트 사용자). */
import { readFileSync } from "node:fs";
import { createSign } from "node:crypto";
import { execFileSync } from "node:child_process";

const SCOPES = {
  ga4: "https://www.googleapis.com/auth/analytics.readonly",
  gsc: "https://www.googleapis.com/auth/webmasters.readonly",
};

/* 프록시가 응답을 중복 전송해도 첫 객체만 취한다 — 중괄호 깊이로 균형점을 찾는다 */
export function parseFirstJson(text) {
  const start = text.indexOf("{");
  if (start < 0) throw new Error("JSON 응답이 아니다: " + text.slice(0, 200));
  let depth = 0;
  for (let i = start; i < text.length; i++) {
    if (text[i] === "{") depth++;
    else if (text[i] === "}" && --depth === 0) return JSON.parse(text.slice(start, i + 1));
  }
  throw new Error("JSON 이 잘려서 왔다: " + text.slice(0, 200));
}

const curl = (args) => execFileSync("curl", ["-sS", "--max-time", "60", ...args], { encoding: "utf8", maxBuffer: 64e6 });

/* 서비스 계정 → 액세스 토큰. 만료가 1시간이라 캐시하지 않고 필요할 때마다 받는다 */
export function accessToken(saPath, scopeKey) {
  const key = JSON.parse(readFileSync(saPath, "utf8"));
  const now = Math.floor(Date.now() / 1000);
  const b64 = (o) => Buffer.from(JSON.stringify(o)).toString("base64url");
  const input = b64({ alg: "RS256", typ: "JWT" }) + "." +
    b64({ iss: key.client_email, scope: SCOPES[scopeKey], aud: key.token_uri, iat: now, exp: now + 3600 });
  const jwt = input + "." + createSign("RSA-SHA256").update(input).sign(key.private_key).toString("base64url");
  const out = parseFirstJson(curl([
    "-X", "POST", key.token_uri,
    "-d", "grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer",
    "--data-urlencode", "assertion=" + jwt,
  ]));
  if (!out.access_token) throw new Error("토큰 교환 실패: " + JSON.stringify(out).slice(0, 300));
  return out.access_token;
}

const api = (url, token, body) => {
  const res = parseFirstJson(curl(body
    ? ["-X", "POST", url, "-H", "Authorization: Bearer " + token, "-H", "Content-Type: application/json", "-d", JSON.stringify(body)]
    : [url, "-H", "Authorization: Bearer " + token]));
  if (res.error) throw new Error(`API 오류 ${res.error.code}: ${res.error.message}`);
  return res;
};

export const gscSites = (sa) =>
  api("https://searchconsole.googleapis.com/webmasters/v3/sites", accessToken(sa, "gsc")).siteEntry || [];

export const gscQuery = (sa, siteUrl, body) =>
  api(`https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
    accessToken(sa, "gsc"), body);

export const ga4Report = (sa, propertyId, body) =>
  api(`https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`, accessToken(sa, "ga4"), body);

/* ── CLI ────────────────────────────────────────────────────────────────── */
if (import.meta.url === `file://${process.argv[1]}`) {
  const [sa, cmd, ...rest] = process.argv.slice(2);
  if (!sa || !cmd) {
    console.error("사용: node google-api.mjs <서비스계정.json> <gsc-sites|gsc-pages|ga4-report> [인자...]");
    process.exit(1);
  }
  const pad = (v, n) => String(v).padStart(n);

  if (cmd === "gsc-sites") {
    for (const s of gscSites(sa)) console.log(`${s.permissionLevel.padEnd(16)} ${s.siteUrl}`);

  } else if (cmd === "gsc-pages") {
    const [siteUrl, startDate = "28daysAgo", endDate = "today"] = rest;
    if (!siteUrl) throw new Error("siteUrl 필요 — 먼저 gsc-sites 로 정확한 값을 확인하라");
    /* GSC 는 상대 날짜를 안 받는다 — 숫자 일수로 환산한다 */
    const iso = (d) => d.toISOString().slice(0, 10);
    const rel = (s) => {
      const m = /^(\d+)daysAgo$/.exec(s);
      if (s === "today") return iso(new Date());
      if (m) return iso(new Date(Date.now() - Number(m[1]) * 864e5));
      return s;
    };
    const r = gscQuery(sa, siteUrl, { startDate: rel(startDate), endDate: rel(endDate), dimensions: ["page"], rowLimit: 100 });
    const rows = r.rows || [];
    for (const x of rows) console.log(`${pad(x.impressions, 6)}노출 ${pad(x.clicks, 4)}클릭  ${x.keys[0]}`);
    console.log(`\n페이지 ${rows.length}개 · 총노출 ${rows.reduce((a, x) => a + x.impressions, 0)} · 총클릭 ${rows.reduce((a, x) => a + x.clicks, 0)}`);
    if (!rows.length) console.log("노출 0 — 색인이 안 됐을 가능성. 내부링크 고아와 사이트맵을 먼저 의심하라(failure-lessons.md 3번).");

  } else if (cmd === "ga4-report") {
    const [propertyId, dims, mets = "sessions", startDate = "28daysAgo", endDate = "today"] = rest;
    if (!propertyId || !dims) throw new Error("사용: ga4-report <propertyId> <디멘션,…> [지표,…] [시작 종료]");
    const r = ga4Report(sa, propertyId, {
      dateRanges: [{ startDate, endDate }],
      dimensions: dims.split(",").map((name) => ({ name })),
      metrics: mets.split(",").map((name) => ({ name })),
      orderBys: [{ metric: { metricName: mets.split(",")[0] }, desc: true }],
      limit: 100,
    });
    for (const x of r.rows || []) console.log(x.metricValues.map((m) => pad(m.value, 7)).join(" ") + "  " + x.dimensionValues.map((d) => d.value).join(" / "));
    console.log(`\n행 ${(r.rows || []).length}개  (지표 순서: ${mets})`);
    console.log("※ 자동화·본인 접속이 제외된 숫자인지 확인하라 — 아니면 결론이 뒤집힌다(failure-lessons.md 4번).");

  } else {
    throw new Error("알 수 없는 명령: " + cmd);
  }
}
