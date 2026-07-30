/* ==========================================================================
   기종별 중고 매입 시세 페이지 생성 — "아이폰16 프로 매입가" 같은 롱테일 대응
   실행: node tools/build-used-pages.mjs

   ⚠️ 얇은 중복 페이지를 양산하지 않는다. 시세표만 있는 페이지는 색인 가치가 없고
   오히려 사이트 품질 신호를 깎는다. 그래서:
     - 자주 찾는 인기 기종만 생성한다(전체 68종 중 선별)
     - 각 페이지에 기종별 고유 정보(세대·감가 요인·체크포인트)를 담는다
     - 등급표 + 기종별 FAQ + 가이드/중고 허브로 가는 내부링크를 붙인다
   ========================================================================== */
import { writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE, BRAND, NAP } from "./site.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const esc = (s) => String(s).replace(/&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escAttr = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
const won = (n) => n.toLocaleString("ko-KR") + "원";
const range = (r) => (r ? `${won(r.min)} ~ ${won(r.max)}` : "매장 문의");

/* catalog-data.js 는 브라우저 전역 스크립트라 import 할 수 없다 — 정규식으로 읽는다.
   (스키마를 바꾸면 여기 파서도 같이 봐야 한다) */
const { readFile } = await import("node:fs/promises");
const catalog = await readFile(join(ROOT, "catalog-data.js"), "utf8");
const USED_PRICE_DATE = /USED_PRICE_DATE = '([^']+)'/.exec(catalog)[1];
const buyback = [];
const re = /\{ model: '([^']+)', deviceId: [^,]+,\s*range: \{ A: (null|\{[^}]+\}), B: (null|\{[^}]+\}), C: (null|\{[^}]+\}) \} \}/g;
for (const m of catalog.matchAll(re)) {
  const parse = (t) => (t === "null" ? null : JSON.parse(t.replace(/(\w+):/g, '"$1":')));
  buyback.push({ model: m[1], A: parse(m[2]), B: parse(m[3]), C: parse(m[4]) });
}

/* 페이지를 만들 인기 기종 + 기종별 고유 정보 (얇은 페이지 방지) */
const PICKS = {
  "아이폰 17 프로 맥스": { slug: "iphone-17-pro-max", year: 2024, note: "출시가 높은 만큼 상태에 따른 금액 차이도 큽니다. 대화면이라 액정 모서리 찍힘과 카메라 렌즈 스크래치를 특히 봅니다." },
  "아이폰 17 프로": { slug: "iphone-17-pro", year: 2024, note: "티타늄 프레임이라 모서리 눌림 자국이 남기 쉽습니다. 프레임 상태가 등급에 반영됩니다." },
  "아이폰 17": { slug: "iphone-17", year: 2024, note: "수요가 꾸준해 시세가 비교적 안정적인 편입니다. 배터리 성능 수치가 등급을 가르는 핵심입니다." },
  "아이폰 16 프로 맥스": { slug: "iphone-16-pro-max", year: 2023, note: "신모델 출시 이후 시세가 한 차례 내려간 구간입니다. 파실 계획이라면 시점을 앞당기는 편이 유리할 수 있습니다." },
  "아이폰 16 프로": { slug: "iphone-16-pro", year: 2023, note: "중고 수요가 많은 모델이라 상태가 좋으면 비교적 잘 받는 편입니다." },
  "아이폰 16": { slug: "iphone-16", year: 2023, note: "기본형은 색상별 선호 차이가 있어 인기 색상이 소폭 유리한 경우가 있습니다." },
  "아이폰 15": { slug: "iphone-15", year: 2022, note: "출시 3년 차에 접어들어 배터리 성능이 등급을 크게 가릅니다. 80% 아래면 감가 폭이 커집니다." },
  "아이폰 14": { slug: "iphone-14", year: 2021, note: "세컨드폰·자녀폰 수요가 있어 B급 이하도 거래가 되는 편입니다." },
  "아이폰 13": { slug: "iphone-13", year: 2020, note: "연식이 있어 배터리 교체 이력과 사설 수리 여부가 금액에 크게 반영됩니다." },
  "갤럭시 S26 울트라": { slug: "galaxy-s26-ultra", year: 2026, note: "최신 플래그십이라 상태가 좋으면 높게 형성됩니다. S펜 포함 여부를 확인합니다." },
  "갤럭시 S25 울트라": { slug: "galaxy-s25-ultra", year: 2025, note: "S펜 분실이 감가 요인입니다. 대화면이라 액정 상태 비중이 큽니다." },
  "갤럭시 S24 울트라": { slug: "galaxy-s24-ultra", year: 2024, note: "중고 수요가 꾸준한 모델입니다. 화면 잔상(번인) 여부를 함께 확인합니다." },
  "갤럭시 S24": { slug: "galaxy-s24", year: 2024, note: "컴팩트 플래그십으로 세컨드폰 수요가 있습니다. 배터리 성능이 관건입니다." },
  "갤럭시 S23": { slug: "galaxy-s23", year: 2023, note: "연식이 쌓여 배터리와 잔상 여부에 따라 등급이 갈립니다." },
  "갤럭시 Z 폴드7": { slug: "galaxy-z-fold7", year: 2025, note: "폴더블은 접힘부(힌지) 상태와 내부 화면 주름·들뜸이 핵심 점검 항목입니다. 방수 이력도 봅니다." },
  "갤럭시 Z 플립7": { slug: "galaxy-z-flip7", year: 2025, note: "커버 디스플레이 기스와 힌지 유격을 확인합니다. 접었을 때 틈이 벌어지면 감가됩니다." },
};

const GRADES = [
  ["A급 (상)", "A", "기스 거의 없음 · 기능 정상 · 배터리 성능 기준 충족"],
  ["B급 (중)", "B", "생활기스 있음 · 기능 정상 · 배터리 86~90%"],
  ["C급 (하)", "C", "기스 많음 · 사용감 큼 (잔상·찍힘 등 추가 감가)"],
];

const items = buyback.filter((b) => PICKS[b.model]).map((b) => ({ ...b, ...PICKS[b.model] }));

const page = (it, others) => {
  const title = `${it.model} 중고 매입 시세`;
  const seoTitle = `${it.model} 중고 매입가 — 등급별 예상 시세 | ${BRAND}`;
  const desc = `${it.model} 중고 매입 예상 범위를 등급(A/B/C)별로 공개합니다. 최종 금액은 매장에서 상태 확인 후 확정됩니다.`;
  const url = `${SITE}/used/${it.slug}`;
  return `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<title>${escAttr(seoTitle)}</title>
<meta name="description" content="${escAttr(desc)}" />
<link rel="canonical" href="${url}" />
<link rel="icon" type="image/png" href="/assets/logo.png" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="${BRAND}" />
<meta property="og:title" content="${escAttr(seoTitle)}" />
<meta property="og:description" content="${escAttr(desc)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${SITE}/assets/og-image.jpg" />
<meta property="og:locale" content="ko_KR" />
<meta name="twitter:card" content="summary_large_image" />
<script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage", "@id": url, name: seoTitle, description: desc, inLanguage: "ko",
      dateModified: USED_PRICE_DATE,
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".g-intro", ".g-faq"] },
      isPartOf: { "@type": "WebSite", name: BRAND, url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "중고폰 매입", item: `${SITE}/used` },
        { "@type": "ListItem", position: 3, name: it.model, item: url },
      ],
    },
    {
      "@type": "Service", name: `${it.model} 중고 매입`, serviceType: "휴대폰 중고 매입",
      areaServed: ["성동구", "마장동", "왕십리"],
      provider: {
        "@type": "MobilePhoneStore", name: BRAND, telephone: "+82-10-7932-9779",
        address: { "@type": "PostalAddress", streetAddress: NAP.street, addressLocality: NAP.locality, addressRegion: NAP.region, addressCountry: "KR" },
      },
      description: desc,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: `${it.model} 매입가는 얼마인가요?`,
          acceptedAnswer: { "@type": "Answer", text: `등급에 따라 A급 ${range(it.A)}, B급 ${range(it.B)}, C급 ${range(it.C)} 범위로 예상합니다. ${USED_PRICE_DATE} 기준이며 시세는 매일 달라질 수 있습니다. 최종 매입가는 매장에서 기기 상태를 확인한 뒤 확정됩니다.` } },
        { "@type": "Question", name: `${it.model}은 어떤 점을 주로 보나요?`,
          acceptedAnswer: { "@type": "Answer", text: it.note } },
        { "@type": "Question", name: "팔 때 무엇을 준비해야 하나요?",
          acceptedAnswer: { "@type": "Answer", text: "신분증(본인 확인용), 가능하면 박스·충전기를 함께 가져오세요. 데이터 백업은 미리 해두시고, 계정 해제와 초기화는 매장에서 함께 진행할 수 있습니다." } },
      ],
    },
  ],
}, null, 2)}
</script>
<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
<link rel="stylesheet" href="/guides/guide.css" />
<script defer src="/analytics-config.js"></script>
<script defer src="/track.js"></script>
</head>
<body>
<header class="g-header">
  <a class="g-brand" href="/"><img src="/assets/logo.png" alt="${BRAND}" width="34" height="34" /><span>${BRAND}</span></a>
  <a class="g-call" href="${NAP.telHref}">${NAP.tel}</a>
</header>
<main class="g-main">
  <nav class="g-crumbs" aria-label="위치"><a href="/">홈</a> › <a href="/used">중고폰</a> › <span>${esc(it.model)}</span></nav>
  <article>
    <h1>${esc(title)}</h1>
    <p class="g-updated">기준일 ${USED_PRICE_DATE} · 시세는 매일 달라질 수 있습니다</p>
    <p class="g-intro">
      ${esc(it.model)}(${it.year}년 출시)의 <b>등급별 예상 매입 범위</b>입니다.
      아래 금액은 확정가가 아니라 예상 범위이며, 최종 매입가는 매장에서 배터리 성능과 외관·기능을 확인한 뒤 확정됩니다.
    </p>

    <h2>등급별 예상 매입 범위</h2>
    <div class="g-tablewrap"><table>
      <thead><tr><th>등급</th><th>예상 범위</th><th>기준</th></tr></thead>
      <tbody>${GRADES.map(([label, k, std]) =>
        `<tr><td><b>${label}</b></td><td class="g-price">${range(it[k])}</td><td>${std}</td></tr>`).join("")}
      </tbody>
    </table></div>

    <h2>${esc(it.model)}에서 특히 보는 것</h2>
    <p>${esc(it.note)}</p>
    <ul>
      <li><b>배터리 성능</b> — 설정에서 확인되는 최대 성능 수치가 등급을 가르는 핵심입니다</li>
      <li><b>외관</b> — 액정 기스, 모서리 찍힘, 뒷판 상태</li>
      <li><b>기능</b> — 카메라·스피커·마이크·충전 포트·생체인식 정상 작동</li>
      <li><b>구성품</b> — 박스·충전기가 있으면 가산되는 경우가 있습니다</li>
    </ul>

    <h2>파는 순서</h2>
    <ul>
      <li>데이터를 백업합니다 (사진·연락처·메시지)</li>
      <li>계정을 해제합니다 — 아이폰은 '나의 찾기' 끄기, 갤럭시는 삼성 계정 로그아웃 (매장에서 함께 가능)</li>
      <li>신분증을 지참해 방문하시면 상태 확인 후 최종가를 안내드립니다</li>
      <li>동의하시면 그 자리에서 정산합니다</li>
    </ul>

    <section class="g-faq">
      <h2>자주 묻는 질문</h2>
      <details><summary>${esc(it.model)} 매입가는 얼마인가요?</summary><p>등급에 따라 A급 ${range(it.A)}, B급 ${range(it.B)}, C급 ${range(it.C)} 범위로 예상합니다. ${USED_PRICE_DATE} 기준이며 시세는 매일 달라질 수 있습니다. 최종 매입가는 매장에서 확정됩니다.</p></details>
      <details><summary>액정이 깨졌는데도 매입되나요?</summary><p>가능한 경우가 많습니다. 파손 정도에 따라 감가되며 수리비를 감안한 금액으로 안내드립니다. 방문 전에 사진과 함께 문의해 주셔도 됩니다.</p></details>
      <details><summary>배터리를 갈고 파는 게 이득인가요?</summary><p>대부분은 교체 비용이 매입가 상승분보다 큽니다. 자세한 판단 기준은 <a href="/guides/battery-and-resale">배터리와 중고 시세 가이드</a>를 참고하세요.</p></details>
    </section>
  </article>

  <section class="g-cta">
    <h2>${esc(it.model)} 매입 상담 신청</h2>
    <p>마장역 2번 출구 도보 1분 · 월–토 10:00–20:00</p>
    <div class="g-cta__row">
      <a class="g-btn g-btn--primary" href="/used#consult">상담 신청하기</a>
      <a class="g-btn" href="${NAP.telHref}">전화 ${NAP.tel}</a>
    </div>
  </section>

  <nav class="g-related" aria-label="다른 기종">
    <h2>다른 기종 시세</h2>
    <ul>${others.map((o) => `<li><a href="/used/${o.slug}">${esc(o.model)} 매입 시세</a></li>`).join("")}</ul>
    <p style="margin-top:12px"><a href="/used">전체 기종 매입가 계산기 →</a></p>
  </nav>
</main>
<footer class="g-footer">
  <p><a href="/">${BRAND}</a> · ${esc(NAP.region)} ${esc(NAP.locality)} ${esc(NAP.street)} · <a href="${NAP.telHref}">${NAP.tel}</a></p>
  <p class="g-note">표기 금액은 모델·등급 기준 예상 범위이며 확정가가 아닙니다. 최종 매입가는 매장에서 기기 상태 확인 후 확정됩니다.</p>
  <p><a href="/used">중고폰 매입·판매</a> · <a href="/guides">가이드</a> · <a href="/devices">기기 전체보기</a> · <a href="/privacy">개인정보처리방침</a></p>
</footer>
</body>
</html>`;
};

await mkdir(join(ROOT, "used"), { recursive: true });
for (let i = 0; i < items.length; i++) {
  /* 관련 링크를 앞에서 slice 하면 뒤쪽 기종이 인바운드 0이 된다(실패 3번).
     현재 항목 다음 순번부터 회전시켜 뽑아 모든 기종이 링크를 받게 한다. */
  const others = Array.from({ length: 5 }, (_, k) => items[(i + 1 + k) % items.length]).filter((o) => o.slug !== items[i].slug);
  await writeFile(join(ROOT, "used", `${items[i].slug}.html`), page(items[i], others), "utf8");
}
console.log(`기종별 시세 페이지 ${items.length}개 생성 (기준일 ${USED_PRICE_DATE})`);
export const USED_PAGES = items.map((i) => ({ slug: i.slug, model: i.model }));
