/* ==========================================================================
   측정 계층 — 공일모바일
   growth-engine 플레이북 실패 4·12번의 방지장치를 처음부터 담았다.

   ① 자동화·내부 접속을 분석 로드 "전에" 차단한다.
      매장 사업은 사장님이 자기 페이지를 하루에도 여러 번 열어보므로,
      필터가 없으면 지표가 아니라 노이즈가 된다.
      ⚠️ 일반어(bot|spider|crawl)를 UA 정규식에 넣지 말 것 — CUBOT 같은
      실제 단말 브랜드에 걸려 진짜 방문자를 지운다. 자동화 도구 이름만 좁게 잡는다.
   ② 큐 시밍 — 추적 함수가 아직 없으면 이벤트를 쌓아두고 준비되면 흘려보낸다.
      스크립트 로드 순서에 흔들리지 않는다.
   ③ tel: 클릭을 이벤트로 잡는다. 매장에서 전화가 최대 전환 경로인데
      안 잡으면 가장 큰 채널이 지표에서 통째로 빠진다.
      링크마다 핸들러를 다는 대신 document 위임 — 나중에 추가되는 링크도 자동 포함.

   GA4 측정 ID는 analytics-config.js 슬롯에서 읽는다. 비어 있어도 이 파일은
   정상 동작하며(큐에만 쌓임) ID를 넣는 순간부터 전송된다.
   ========================================================================== */
(function () {
  "use strict";

  var OPT_OUT_KEY = "gm_track_off";
  var q = (window.gmTrackQueue = window.gmTrackQueue || []);

  /* ---------- ① 제외 판정 ---------- */
  function isAutomation() {
    if (navigator.webdriver === true) return true; // Playwright/Selenium/Puppeteer
    // 자동화·측정도구 이름만 좁게. 일반어 금지(CUBOT 오차단).
    return /Headless|Lighthouse|PTST|Playwright|Puppeteer|GTmetrix/i.test(navigator.userAgent);
  }

  function isOptedOut() {
    try {
      var p = new URLSearchParams(location.search);
      if (p.get("gm_track") === "off") localStorage.setItem(OPT_OUT_KEY, "1");
      if (p.get("gm_track") === "on") localStorage.removeItem(OPT_OUT_KEY);
      return localStorage.getItem(OPT_OUT_KEY) === "1";
    } catch (e) { return false; }
  }

  var EXCLUDED = isAutomation() || isOptedOut();
  window.gmTrackExcluded = EXCLUDED;

  /* ---------- ② 전송 + 큐 시밍 ---------- */
  function send(name, params) {
    if (EXCLUDED) return;
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params || {});
    } else {
      q.push([name, params || {}]); // 아직 준비 전 — 쌓아둔다
      if (q.length > 200) q.shift();
    }
  }
  window.gmTrack = send;

  function flush() {
    if (EXCLUDED || typeof window.gtag !== "function") return;
    while (q.length) { var e = q.shift(); window.gtag("event", e[0], e[1]); }
  }
  window.gmTrackFlush = flush;

  /* ---------- GA4 로더 (ID가 있을 때만) ---------- */
  function loadGa4() {
    var id = window.GA4_MEASUREMENT_ID;
    if (EXCLUDED || !id || id.indexOf("G-") !== 0) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", id, { send_page_view: true });
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
    s.onload = flush;
    document.head.appendChild(s);
  }

  /* ---------- ③ 클릭 위임 — 전환 채널 자동 집계 ---------- */
  function label(el) {
    return (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 40);
  }

  document.addEventListener("click", function (ev) {
    var a = ev.target && ev.target.closest ? ev.target.closest("a,button") : null;
    if (!a) return;
    var href = (a.getAttribute && a.getAttribute("href")) || "";

    // 전화 — 매장 최대 전환 채널
    if (href.indexOf("tel:") === 0) {
      send("call_click", { channel: "tel", location: a.className || "", label: label(a) });
      return;
    }
    // 카카오 채널 상담
    if (/pf\.kakao\.com|open\.kakao\.com/.test(href)) {
      send("kakao_click", { channel: "kakao", label: label(a) });
      return;
    }
    // 네이버 지도·리뷰
    if (/naver\.me|map\.naver\.com|place\.naver\.com/.test(href)) {
      send("naver_click", { channel: /review/.test(href) ? "review" : "map", label: label(a) });
      return;
    }
    // 예약 폼으로 이동하는 CTA
    if (href.indexOf("#booking") !== -1) {
      send("booking_cta", { label: label(a) });
    }
  }, true);

  /* ---------- 예약·상담 폼 결과는 각 폼에서 gmTrack()으로 호출 ---------- */

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadGa4);
  } else {
    loadGa4();
  }
})();
