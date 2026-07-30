/* ==========================================================================
   가이드 빌더 — guides-data.mjs → 정적 HTML(+Article/FAQPage/Breadcrumb JSON-LD)
   실행: node tools/build-guides.mjs

   설계 의도:
   - 본문을 HTML에 baked 한다. JS 없이 크롤링·AI 인용이 가능해야 한다
     (React/Babel 렌더 페이지는 크롤러·AI가 본문을 못 읽는 경우가 있다).
   - 경로는 전부 루트 절대경로(/guides/...). 상대경로는 depth 2에서 전멸한다
     (growth-engine 실패 2번 — 이 가이드들이 정확히 depth 2다).
   - 모든 가이드는 상호 내부링크 + 허브 링크를 갖는다. 인바운드 0이면 색인되지 않는다(실패 3번).
   ========================================================================== */
import { writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE, BRAND, NAP } from "./site.mjs";
import { GUIDES } from "./guides-data.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const esc = (s) => String(s).replace(/&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escAttr = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
/* 본문은 의도적으로 인라인 태그(<b>, <a>)를 허용한다 — 데이터는 우리가 쓴다 */
const rich = (s) => String(s);

const HEAD = (g) => `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<title>${escAttr(g.seoTitle)} | ${BRAND}</title>
<meta name="description" content="${escAttr(g.desc)}" />
<link rel="canonical" href="${SITE}/guides/${g.slug}" />
<link rel="icon" type="image/png" href="/assets/logo.png" />

<meta property="og:type" content="article" />
<meta property="og:site_name" content="${BRAND}" />
<meta property="og:title" content="${escAttr(g.seoTitle)}" />
<meta property="og:description" content="${escAttr(g.desc)}" />
<meta property="og:url" content="${SITE}/guides/${g.slug}" />
<meta property="og:image" content="${SITE}/assets/og-image.jpg" />
<meta property="og:locale" content="ko_KR" />
<meta name="twitter:card" content="summary_large_image" />
<meta property="article:modified_time" content="${g.updated}" />

<script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: g.seoTitle,
      description: g.desc,
      inLanguage: "ko",
      datePublished: g.updated,
      dateModified: g.updated,
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/guides/${g.slug}` },
      image: `${SITE}/assets/og-image.jpg`,
      author: { "@type": "Organization", name: BRAND, url: SITE },
      publisher: {
        "@type": "Organization", name: BRAND, url: SITE,
        logo: { "@type": "ImageObject", url: `${SITE}/assets/logo.png` },
      },
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".g-intro", ".g-faq"] },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "가이드", item: `${SITE}/guides` },
        { "@type": "ListItem", position: 3, name: g.title, item: `${SITE}/guides/${g.slug}` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: g.faq.map((f) => ({
        "@type": "Question", name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
}, null, 2)}
</script>

<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
<link rel="stylesheet" href="/guides/guide.css" />
<script defer src="/analytics-config.js"></script>
<script defer src="/track.js"></script>
</head>`;

const CHROME_TOP = `<body>
<header class="g-header">
  <a class="g-brand" href="/"><img src="/assets/logo.png" alt="${BRAND}" width="34" height="34" /><span>${BRAND}</span></a>
  <a class="g-call" href="${NAP.telHref}">${NAP.tel}</a>
</header>`;

const footer = (g) => {
  const others = GUIDES.filter((x) => x.slug !== g.slug);
  return `
<section class="g-cta">
  <h2>${esc(g.cta.text)}</h2>
  <p>마장역 2번 출구 도보 1분 · 월–토 10:00–20:00</p>
  <div class="g-cta__row">
    <a class="g-btn g-btn--primary" href="${g.cta.href}">방문 예약하기</a>
    <a class="g-btn" href="${NAP.telHref}">전화 ${NAP.tel}</a>
  </div>
</section>

<nav class="g-related" aria-label="다른 가이드">
  <h2>다른 가이드</h2>
  <ul>${others.map((o) => `<li><a href="/guides/${o.slug}">${esc(o.title)}</a></li>`).join("")}</ul>
</nav>

<footer class="g-footer">
  <p><a href="/">${BRAND}</a> · ${esc(NAP.region)} ${esc(NAP.locality)} ${esc(NAP.street)} · <a href="${NAP.telHref}">${NAP.tel}</a></p>
  <p class="g-note">표기된 금액은 예상 범위이며, 통신사·요금제·가입 유형·기기 상태에 따라 달라집니다. 최종 조건은 매장 상담에서 확정됩니다.</p>
  <p><a href="/devices">기기 전체보기</a> · <a href="/used">중고폰 매입·판매</a> · <a href="/guides">가이드</a> · <a href="/privacy">개인정보처리방침</a></p>
</footer>
</body>
</html>`;
};

function renderSection(s) {
  let out = `<h2>${esc(s.h)}</h2>`;
  if (s.p) out += s.p.map((t) => `<p>${rich(t)}</p>`).join("");
  if (s.list) out += `<ul>${s.list.map((t) => `<li>${rich(t)}</li>`).join("")}</ul>`;
  if (s.table) {
    out += `<div class="g-tablewrap"><table><thead><tr>${s.table.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>`;
    out += `<tbody>${s.table.rows.map((r) => `<tr>${r.map((c) => `<td>${rich(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  }
  return out;
}

const page = (g) => `${HEAD(g)}
${CHROME_TOP}
<main class="g-main">
  <nav class="g-crumbs" aria-label="위치"><a href="/">홈</a> › <a href="/guides">가이드</a> › <span>${esc(g.title)}</span></nav>
  <article>
    <h1>${esc(g.title)}</h1>
    <p class="g-updated">최종 업데이트 ${g.updated}</p>
    <p class="g-intro">${rich(g.intro)}</p>
    ${g.sections.map(renderSection).join("\n    ")}
    <section class="g-faq">
      <h2>자주 묻는 질문</h2>
      ${g.faq.map((f) => `<details><summary>${esc(f.q)}</summary><p>${rich(f.a)}</p></details>`).join("\n      ")}
    </section>
  </article>
${footer(g)}`;

/* ── 허브 ── */
const hub = `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<title>휴대폰 개통·중고폰 가이드 | ${BRAND} 마장역점</title>
<meta name="description" content="번호이동과 기기변경 비교, 중고폰 매입 등급, 자급제 조합까지 — 결정에 필요한 것만 정리한 가이드." />
<link rel="canonical" href="${SITE}/guides" />
<link rel="icon" type="image/png" href="/assets/logo.png" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="${BRAND}" />
<meta property="og:title" content="휴대폰 개통·중고폰 가이드 | ${BRAND}" />
<meta property="og:description" content="번호이동·기기변경 비교, 중고폰 매입 등급, 자급제 조합 가이드." />
<meta property="og:url" content="${SITE}/guides" />
<meta property="og:image" content="${SITE}/assets/og-image.jpg" />
<meta property="og:locale" content="ko_KR" />
<script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: `${BRAND} 가이드`,
      url: `${SITE}/guides`,
      inLanguage: "ko",
      about: "휴대폰 개통·번호이동·중고폰 매입",
      isPartOf: { "@type": "WebSite", name: BRAND, url: SITE },
    },
    {
      "@type": "ItemList",
      itemListElement: GUIDES.map((g, i) => ({
        "@type": "ListItem", position: i + 1, name: g.title, url: `${SITE}/guides/${g.slug}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "가이드", item: `${SITE}/guides` },
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
${CHROME_TOP}
<main class="g-main">
  <nav class="g-crumbs" aria-label="위치"><a href="/">홈</a> › <span>가이드</span></nav>
  <h1>휴대폰, 결정하기 전에 읽는 가이드</h1>
  <p class="g-intro">번호이동과 기기변경 중 뭐가 유리한지, 중고폰은 얼마를 받을 수 있는지 — 매장에서 자주 받는 질문을 정리했습니다.</p>
  <ul class="g-cards">
    ${GUIDES.map((g) => `<li><a href="/guides/${g.slug}">
      <h2>${esc(g.title)}</h2>
      <p>${esc(g.desc)}</p>
      <span class="g-more">읽어보기 →</span>
    </a></li>`).join("\n    ")}
  </ul>
</main>
<footer class="g-footer">
  <p><a href="/">${BRAND}</a> · ${esc(NAP.region)} ${esc(NAP.locality)} ${esc(NAP.street)} · <a href="${NAP.telHref}">${NAP.tel}</a></p>
  <p class="g-note">표기된 금액은 예상 범위이며 최종 조건은 매장 상담에서 확정됩니다.</p>
  <p><a href="/devices">기기 전체보기</a> · <a href="/used">중고폰 매입·판매</a> · <a href="/privacy">개인정보처리방침</a></p>
</footer>
</body>
</html>`;

await mkdir(join(ROOT, "guides"), { recursive: true });
for (const g of GUIDES) {
  await writeFile(join(ROOT, "guides", `${g.slug}.html`), page(g), "utf8");
  console.log("생성:", `/guides/${g.slug}`);
}
await writeFile(join(ROOT, "guides", "index.html"), hub, "utf8");
console.log("생성: /guides (허브)");
console.log(`\n총 ${GUIDES.length}편 + 허브 1개`);
