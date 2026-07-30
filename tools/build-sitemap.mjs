/* 사이트맵 생성 — 페이지 목록이 늘 때 손으로 고치지 않도록 도구화.
   실행: node tools/build-sitemap.mjs   (배포 전 build-guides 다음에 돌린다) */
import { writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE } from "./site.mjs";
import { GUIDES } from "./guides-data.mjs";
/* 기종별 시세 페이지 목록은 빌더가 export 한다 (빌더를 먼저 돌릴 것) */
const { USED_PAGES } = await import("./build-used-pages.mjs");

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const TODAY = process.env.SITEMAP_DATE || new Date().toISOString().slice(0, 10);

/* priority는 구글이 무시하지만 네이버·빙은 참고한다. 전환 페이지를 높게. */
const urls = [
  { loc: "/", pri: "1.0", freq: "weekly" },
  { loc: "/used", pri: "0.9", freq: "daily" },      // 시세가 자주 바뀐다
  { loc: "/devices", pri: "0.9", freq: "weekly" },
  { loc: "/guides", pri: "0.7", freq: "weekly" },
  ...GUIDES.map((g) => ({ loc: `/guides/${g.slug}`, pri: "0.8", freq: "monthly", lastmod: g.updated })),
  ...USED_PAGES.map((u) => ({ loc: `/used/${u.slug}`, pri: "0.8", freq: "weekly" })),
  { loc: "/privacy", pri: "0.3", freq: "yearly" },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${SITE}${u.loc}</loc>
    <lastmod>${u.lastmod || TODAY}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.pri}</priority>
  </url>`).join("\n")}
</urlset>
`;
await writeFile(join(ROOT, "sitemap.xml"), xml, "utf8");
console.log(`sitemap.xml — URL ${urls.length}개`);
