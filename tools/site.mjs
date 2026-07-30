/* 사이트 상수 — 단일 소스. 도메인·브랜드·매장정보가 바뀌면 여기만 고친다.
   (growth-engine 플레이북 0단계: SETKORA는 각 파일에 const SITE를 박아둬서
    도메인 변경 시 8개 파일을 만져야 했다. 처음부터 뽑아둔다.) */

export const SITE = "https://01mobile.co.kr";  // 슬래시 없이 끝
export const HOST = "01mobile.co.kr";           // IndexNow·필터용
export const BRAND = "공일모바일";               // og:site_name·JSON-LD publisher
export const LANGS = ["ko"];                    // 다국어 확장 시 여기부터

/* NAP — 사업자등록·네이버 플레이스·사이트 푸터가 글자 그대로 일치해야 한다.
   불일치는 로컬 SEO 신뢰 신호를 깬다(플레이북 5절). 변경 시 플레이스도 같이 고칠 것. */
export const NAP = {
  name: "공일모바일",
  tel: "010-7932-9779",
  telHref: "tel:01079329779",
  street: "마장로 305 1층",
  locality: "성동구",
  region: "서울특별시",
  country: "KR",
  geo: { lat: 37.5666671, lng: 127.0433283 },
  hours: "월–토 10:00–20:00 · 일요일 휴무",
  placeUrl: "https://map.naver.com/p/entry/place/2051361364",
  placeShort: "https://naver.me/FHOAX0ay",
  reviewUrl: "https://m.place.naver.com/place/2051361364/review/visitor",
};

/* 배포 게이트·SEO 체크가 검사하는 페이지 목록 */
export const PAGES = [
  { path: "/", must: ["#root", "#booking"], minLinks: 5 },
  { path: "/devices", must: ["#root"], minLinks: 3 },
  { path: "/used", must: ["#root"], minLinks: 3 },
  { path: "/privacy", must: [], minLinks: 1 },
];
