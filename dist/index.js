/* /components.jsx?v=8b7843ca */
(function(){
const { useState, useEffect, useRef } = React;
const Icon = ({ name, size = 22, stroke = 1.6 }) => {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "phone":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" }));
    case "calendar":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M16 2v4M8 2v4M3 10h18" }));
    case "chat":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }));
    case "check":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("path", { d: "M20 6 9 17l-5-5" }));
    case "arrow":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("path", { d: "M5 12h14M13 5l7 7-7 7" }));
    case "menu":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("path", { d: "M4 6h16M4 12h16M4 18h16" }));
    case "close":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("path", { d: "M18 6 6 18M6 6l12 12" }));
    case "shield":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" }), /* @__PURE__ */ React.createElement("path", { d: "m9 12 2 2 4-4" }));
    case "users":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }), /* @__PURE__ */ React.createElement("circle", { cx: "9", cy: "7", r: "4" }), /* @__PURE__ */ React.createElement("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" }));
    case "pin":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("path", { d: "M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "10", r: "3" }));
    case "spark":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("path", { d: "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" }));
    case "wallet":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("path", { d: "M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" }), /* @__PURE__ */ React.createElement("path", { d: "M16 14h5v-4h-5a2 2 0 0 0 0 4Z" }));
    case "wifi":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("path", { d: "M5 13a10 10 0 0 1 14 0M2 9a14 14 0 0 1 20 0M8.5 16.5a5 5 0 0 1 7 0" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "20", r: "1.2", fill: "currentColor" }));
    case "tv":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("rect", { x: "2", y: "4", width: "20", height: "14", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M8 22h8" }));
    case "family":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("circle", { cx: "9", cy: "8", r: "3" }), /* @__PURE__ */ React.createElement("circle", { cx: "17", cy: "9", r: "2.2" }), /* @__PURE__ */ React.createElement("path", { d: "M3 21v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1M16 21v-1a3 3 0 0 1 3-3h.5a2.5 2.5 0 0 1 2.5 2.5V21" }));
    case "compare":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("path", { d: "M3 6h18M3 12h12M3 18h6" }));
    case "pkg":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }), /* @__PURE__ */ React.createElement("path", { d: "m3.3 7 8.7 5 8.7-5M12 22V12" }));
    case "easy":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("path", { d: "M9.1 9.2a3 3 0 0 1 5.8 1c0 2-3 2.6-3 4.3" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "17.4", r: "0.6", fill: "currentColor", stroke: "none" }));
    case "doc":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }), /* @__PURE__ */ React.createElement("path", { d: "M14 2v6h6M8 13h8M8 17h6" }));
    case "phoneShape":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("rect", { x: "6", y: "2", width: "12", height: "20", rx: "3" }), /* @__PURE__ */ React.createElement("path", { d: "M11 18h2" }));
    case "fold":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "3", width: "8", height: "18", rx: "2" }), /* @__PURE__ */ React.createElement("rect", { x: "13", y: "3", width: "8", height: "18", rx: "2" }));
    case "senior":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "7", r: "3.5" }), /* @__PURE__ */ React.createElement("path", { d: "M5 21a7 7 0 0 1 14 0" }));
    case "data":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("path", { d: "M3 17V9M9 17V5M15 17v-9M21 17V11" }));
    case "tag":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("path", { d: "M20 12 12 4H4v8l8 8 8-8z" }), /* @__PURE__ */ React.createElement("circle", { cx: "8", cy: "8", r: "1.4", fill: "currentColor" }));
    case "clock":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }), /* @__PURE__ */ React.createElement("path", { d: "M12 7v5l3 2" }));
    case "copy":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" }));
    case "map":
      return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("path", { d: "m21 4-7 3-7-3-5 3v13l5-3 7 3 7-3 5 3V7Z" }), /* @__PURE__ */ React.createElement("path", { d: "M7 4v13M14 7v13" }));
    case "kakao":
      return /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, /* @__PURE__ */ React.createElement("path", { d: "M12 3C6.5 3 2 6.5 2 10.8c0 2.7 1.8 5.1 4.6 6.5l-1 3.6c-.1.3.3.6.6.4l4.3-2.8c.5.1 1 .1 1.5.1 5.5 0 10-3.5 10-7.8S17.5 3 12 3Z" }));
    case "naver":
      return /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, /* @__PURE__ */ React.createElement("path", { d: "M5 4h4l6 9V4h4v16h-4l-6-9v9H5z" }));
    default:
      return null;
  }
};
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
const Reveal = ({ children, delay = 0, as = "div", ...rest }) => {
  const ref = useReveal();
  const Tag = as;
  return /* @__PURE__ */ React.createElement(Tag, { ref, className: "reveal " + (rest.className || ""), style: { transitionDelay: delay + "ms", ...rest.style }, ...rest }, children);
};
function Header({ onCTA, base = "" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = [
    { id: "intro", label: "\uB9E4\uC7A5\uC18C\uAC1C" },
    { id: "products", label: "\uD310\uB9E4\uC0C1\uD488" },
    { id: "plans", label: "\uC694\uAE08\uC0C1\uB2F4" },
    { id: "bundle", label: "\uC778\uD130\uB137/TV \uACB0\uD569" },
    { href: "/used", label: "\uC911\uACE0\uD3F0" },
    { href: "/guides", label: "\uAC00\uC774\uB4DC" },
    { id: "reward", label: "\uC9C0\uC778\uCD94\uCC9C" },
    { id: "booking", label: "\uBC29\uBB38\uC608\uC57D" }
  ];
  const linkOf = (it) => it.href ? it.href : base + "#" + it.id;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("header", { className: "header" + (scrolled ? " scrolled" : "") }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("a", { href: base || "#top", className: "brand", "aria-label": "\uACF5\uC77C\uBAA8\uBC14\uC77C \uD648" }, /* @__PURE__ */ React.createElement("span", { className: "brand-text" }, /* @__PURE__ */ React.createElement("strong", null, "\uACF5\uC77C\uBAA8\uBC14\uC77C"))), /* @__PURE__ */ React.createElement("nav", { className: "nav", "aria-label": "\uC8FC\uC694 \uBA54\uB274" }, /* @__PURE__ */ React.createElement("ul", null, items.map(
    (it) => /* @__PURE__ */ React.createElement("li", { key: it.label }, /* @__PURE__ */ React.createElement("a", { href: linkOf(it) }, it.label))
  ))), /* @__PURE__ */ React.createElement("div", { className: "header-cta" }, /* @__PURE__ */ React.createElement("button", { className: "menu-btn", onClick: () => setOpen((o) => !o), "aria-label": "\uBA54\uB274 \uC5F4\uAE30" }, /* @__PURE__ */ React.createElement(Icon, { name: open ? "close" : "menu", size: 20 })), /* @__PURE__ */ React.createElement("a", { href: base + "#booking", className: "btn btn-primary btn-sm", style: { height: 44, padding: "0 18px", fontSize: 14 } }, "\uC0C1\uB2F4 \uC608\uC57D\uD558\uAE30")))), /* @__PURE__ */ React.createElement("div", { className: "mobile-menu" + (open ? " open" : ""), onClick: () => setOpen(false) }, items.map(
    (it) => /* @__PURE__ */ React.createElement("a", { key: it.label, href: linkOf(it) }, it.label)
  ), /* @__PURE__ */ React.createElement("a", { href: base + "#booking", className: "btn btn-primary" }, "\uC0C1\uB2F4 \uC608\uC57D\uD558\uAE30")));
}
Object.assign(window, { Icon, Reveal, useReveal, Header });

/* 전역 노출 */
if (typeof useReveal !== "undefined") globalThis.useReveal = useReveal;
if (typeof Header !== "undefined") globalThis.Header = Header;
})();
/* /sections-promo.jsx?v=53b93e89 */
(function(){
const { useState: useStateP, useEffect: useEffectP, useRef: useRefP } = React;
const PROMO = {
  key: "foldable8-preorder",
  // 닫기 상태 저장 키 (프로모션이 바뀌면 키도 바꾼다)
  bar: "\uAC24\uB7ED\uC2DC \uD3F4\uB354\uBE14 8 \uC2DC\uB9AC\uC988 \uC0AC\uC804\uC608\uC57D \uC811\uC218 \uC911",
  title: "\uAC24\uB7ED\uC2DC \uD3F4\uB354\uBE14 8 \uC2DC\uB9AC\uC988",
  titleBold: "\uC0AC\uC804\uC608\uC57D \uC811\uC218 \uC911",
  lead: "\uD3F4\uB4DC8 \uC6B8\uD2B8\uB77C \xB7 \uD3F4\uB4DC8 \xB7 \uD50C\uB9BD8. \uB9C8\uC7A5\uC5ED \uACF5\uC77C\uBAA8\uBC14\uC77C\uC5D0\uC11C \uC0AC\uC804\uC608\uC57D\uC744 \uBC1B\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uAE30\uAE30\uC640 \uC694\uAE08\uC81C, \uC4F0\uB358 \uD3F0 \uB9E4\uC785\uAE4C\uC9C0 \uD55C \uBC88\uC5D0 \uC815\uB9AC\uD574 \uB4DC\uB9BD\uB2C8\uB2E4.",
  points: [
    "\uC138 \uBAA8\uB378 \uC2E4\uBB3C \uBE44\uAD50 \uC0C1\uB2F4 \u2014 \uC5B4\uB5A4 \uAC8C \uB9DE\uB294\uC9C0 \uAC19\uC774 \uBD05\uB2C8\uB2E4",
    "\uC4F0\uB358 \uD3F0 \uB9E4\uC785\uAC00\uB97C \uBBF8\uB9AC \uD655\uC778\uD558\uACE0 \uCC28\uC561\uC73C\uB85C \uACC4\uC0B0",
    "\uC778\uD130\uB137\xB7\uAC00\uC871 \uACB0\uD569\uAE4C\uC9C0 \uB123\uC5B4 \uC6D4 \uB0A9\uBD80\uC561 \uBC94\uC704 \uC0B0\uCD9C"
  ],
  note: "\uC9C0\uC6D0\uAE08\xB7\uD560\uC778 \uC870\uAC74\uC740 \uD1B5\uC2E0\uC0AC \uC815\uCC45\uACFC \uAC00\uC785 \uC720\uD615\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4. \uCD5C\uC885 \uC870\uAC74\uC740 \uB9E4\uC7A5 \uC0C1\uB2F4\uC5D0\uC11C \uD655\uC815\uB429\uB2C8\uB2E4.",
  video: "/assets/foldable8-preorder.webm"
};
function PromoBar() {
  const [open, setOpen] = useStateP(false);
  useEffectP(() => {
    try {
      setOpen(localStorage.getItem("promo_off_" + PROMO.key) !== "1");
    } catch (e) {
      setOpen(true);
    }
  }, []);
  if (!open) return null;
  const close = () => {
    setOpen(false);
    try {
      localStorage.setItem("promo_off_" + PROMO.key, "1");
    } catch (e) {
    }
  };
  return /* @__PURE__ */ React.createElement("div", { className: "promo-bar", role: "region", "aria-label": "\uC0AC\uC804\uC608\uC57D \uC548\uB0B4" }, /* @__PURE__ */ React.createElement(
    "a",
    {
      className: "promo-bar__link",
      href: "#preorder",
      onClick: () => window.gmTrack && window.gmTrack("promo_bar_click", { promo: PROMO.key })
    },
    /* @__PURE__ */ React.createElement("span", { className: "promo-bar__dot", "aria-hidden": "true" }),
    /* @__PURE__ */ React.createElement("b", null, PROMO.bar),
    /* @__PURE__ */ React.createElement("span", { className: "promo-bar__go" }, "\uC790\uC138\uD788 ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 13 }))
  ), /* @__PURE__ */ React.createElement("button", { className: "promo-bar__x", onClick: close, "aria-label": "\uC54C\uB9BC \uB2EB\uAE30" }, /* @__PURE__ */ React.createElement(Icon, { name: "close", size: 15 })));
}
function PreorderSection() {
  const vRef = useRefP(null);
  const [playing, setPlaying] = useStateP(false);
  useEffectP(() => {
    const v = vRef.current;
    if (!v || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          v.play().then(() => setPlaying(true)).catch(() => {
          });
        } else {
          v.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  const book = () => window.gmTrack && window.gmTrack("preorder_cta", { promo: PROMO.key });
  return /* @__PURE__ */ React.createElement("section", { className: "section preorder", id: "preorder" }, /* @__PURE__ */ React.createElement("div", { className: "container preorder__grid" }, /* @__PURE__ */ React.createElement(Reveal, { className: "preorder__tx" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), "PRE-ORDER"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, /* @__PURE__ */ React.createElement("span", { className: "h-thin" }, PROMO.title), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "h-bold" }, PROMO.titleBold)), /* @__PURE__ */ React.createElement("p", { className: "section-sub" }, PROMO.lead), /* @__PURE__ */ React.createElement("ul", { className: "preorder__list" }, PROMO.points.map((p) => /* @__PURE__ */ React.createElement("li", { key: p }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 15 }), /* @__PURE__ */ React.createElement("span", null, p)))), /* @__PURE__ */ React.createElement("div", { className: "preorder__cta" }, /* @__PURE__ */ React.createElement("a", { href: "#booking", className: "btn btn-primary btn-lg", onClick: book }, "\uC0AC\uC804\uC608\uC57D \uC0C1\uB2F4 \uC2E0\uCCAD ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 16 })), /* @__PURE__ */ React.createElement("a", { href: "tel:01079329779", className: "btn btn-ghost btn-lg" }, "\uC804\uD654\uB85C \uBB38\uC758")), /* @__PURE__ */ React.createElement("p", { className: "preorder__note" }, PROMO.note)), /* @__PURE__ */ React.createElement(Reveal, { delay: 100, className: "preorder__media" }, /* @__PURE__ */ React.createElement("div", { className: "preorder__video" }, /* @__PURE__ */ React.createElement(
    "video",
    {
      ref: vRef,
      src: PROMO.video,
      muted: true,
      loop: true,
      playsInline: true,
      preload: "auto",
      "aria-label": "\uAC24\uB7ED\uC2DC \uD3F4\uB354\uBE14 8 \uC2DC\uB9AC\uC988 \uC0AC\uC804\uC608\uC57D \uC548\uB0B4 \uC601\uC0C1"
    }
  ), !playing && /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "preorder__play",
      "aria-label": "\uC601\uC0C1 \uC7AC\uC0DD",
      onClick: () => {
        const v = vRef.current;
        if (v) v.play().then(() => setPlaying(true)).catch(() => {
        });
      }
    },
    "\u25B6"
  )))));
}

/* 전역 노출 */
if (typeof PromoBar !== "undefined") globalThis.PromoBar = PromoBar;
if (typeof PreorderSection !== "undefined") globalThis.PreorderSection = PreorderSection;
})();
/* /sections-top.jsx?v=6faca5bb */
(function(){
const { useState, useEffect, useRef } = React;
function InteractiveRipple() {
  const canvasRef = useRef(null);
  const ripples = useRef([]);
  const lastSpawn = useRef(0);
  const pointer = useRef({ x: -9999, y: -9999, active: false });
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const parent = canvas.parentElement;
    const resize = () => {
      const r = parent.getBoundingClientRect();
      canvas.width = r.width * dpr;
      canvas.height = r.height * dpr;
      canvas.style.width = r.width + "px";
      canvas.style.height = r.height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);
    const spawn = (x, y, strong) => {
      const now = performance.now();
      if (!strong && now - lastSpawn.current < 70) return;
      lastSpawn.current = now;
      ripples.current.push({
        x,
        y,
        born: now,
        maxR: strong ? 280 : 170,
        maxLife: strong ? 1400 : 1050,
        hue: 205 + Math.random() * 30
      });
      if (ripples.current.length > 36) ripples.current.shift();
    };
    const getXY = (e) => {
      const r = canvas.getBoundingClientRect();
      const cx = e.touches ? e.touches[0].clientX : e.clientX;
      const cy = e.touches ? e.touches[0].clientY : e.clientY;
      return { x: cx - r.left, y: cy - r.top };
    };
    const onMove = (e) => {
      const p = getXY(e);
      pointer.current = { ...p, active: true };
      spawn(p.x, p.y, false);
    };
    const onLeave = () => {
      pointer.current.active = false;
    };
    const onDown = (e) => {
      const p = getXY(e);
      spawn(p.x, p.y, true);
      spawn(p.x, p.y, true);
    };
    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    parent.addEventListener("mousedown", onDown);
    parent.addEventListener("touchmove", onMove, { passive: true });
    parent.addEventListener("touchstart", onDown, { passive: true });
    let raf;
    const tick = () => {
      const now = performance.now();
      const W = canvas.width / dpr, H = canvas.height / dpr;
      ctx.clearRect(0, 0, W, H);
      if (pointer.current.active) {
        const { x, y } = pointer.current;
        const g = ctx.createRadialGradient(x, y, 0, x, y, 130);
        g.addColorStop(0, "rgba(0, 108, 255, 0.10)");
        g.addColorStop(1, "rgba(0, 108, 255, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, 130, 0, Math.PI * 2);
        ctx.fill();
      }
      ripples.current = ripples.current.filter((rp) => {
        const t = (now - rp.born) / rp.maxLife;
        if (t >= 1) return false;
        const eased = 1 - Math.pow(1 - t, 3);
        const r = eased * rp.maxR;
        const alpha = (1 - t) * 0.45;
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, r, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${rp.hue}, 100%, 60%, ${alpha})`;
        ctx.lineWidth = 1.4;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, r * 0.62, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${rp.hue + 15}, 100%, 70%, ${alpha * 0.6})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        return true;
      });
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
      parent.removeEventListener("mousedown", onDown);
      parent.removeEventListener("touchmove", onMove);
      parent.removeEventListener("touchstart", onDown);
    };
  }, []);
  return /* @__PURE__ */ React.createElement("canvas", { ref: canvasRef, className: "hero-ripple", "aria-hidden": "true" });
}
function Hero() {
  const heroRef = useRef(null);
  const spotRef = useRef(null);
  const auroraRef = useRef(null);
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || matchMedia("(hover: none)").matches) return;
    let rafId = null;
    let target = { x: 0.5, y: 0.5 };
    let current = { x: 0.5, y: 0.5 };
    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      target.x = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
      target.y = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
      if (!rafId) loop();
    };
    const onLeave = () => {
      target.x = 0.5;
      target.y = 0.5;
      if (!rafId) loop();
    };
    const loop = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      if (spotRef.current) {
        spotRef.current.style.setProperty("--mx", current.x * 100 + "%");
        spotRef.current.style.setProperty("--my", current.y * 100 + "%");
      }
      if (auroraRef.current) {
        const tx = (current.x - 0.5) * 30;
        const ty = (current.y - 0.5) * 24;
        auroraRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      }
      if (Math.abs(target.x - current.x) > 5e-4 || Math.abs(target.y - current.y) > 5e-4) {
        rafId = requestAnimationFrame(loop);
      } else {
        rafId = null;
      }
    };
    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    return () => {
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
  return /* @__PURE__ */ React.createElement("section", { className: "hero hero--apple", id: "top", ref: heroRef }, /* @__PURE__ */ React.createElement("div", { className: "hero-aurora", "aria-hidden": "true", ref: auroraRef }, /* @__PURE__ */ React.createElement("span", { className: "blob b1" }), /* @__PURE__ */ React.createElement("span", { className: "blob b2" }), /* @__PURE__ */ React.createElement("span", { className: "blob b3" }), /* @__PURE__ */ React.createElement("span", { className: "blob b4" })), /* @__PURE__ */ React.createElement("div", { className: "hero-spotlight", "aria-hidden": "true", ref: spotRef }), /* @__PURE__ */ React.createElement("div", { className: "container hero-grid" }, /* @__PURE__ */ React.createElement("div", { className: "hero-copy" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "hero-status", "aria-label": "\uC601\uC5C5\uC2DC\uAC04 \uB0B4 \uC0C1\uB2F4 \uAC00\uB2A5" }, /* @__PURE__ */ React.createElement("span", { className: "hero-status__pulse", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", { className: "hero-status__pulse-ring" }), /* @__PURE__ */ React.createElement("span", { className: "hero-status__pulse-dot" })), /* @__PURE__ */ React.createElement("span", { className: "hero-status__label" }, "\uC601\uC5C5\uC2DC\uAC04 \uB0B4 \uC0C1\uB2F4 \uAC00\uB2A5 (\uC6D4\u2013\uD1A0 10\u201320\uC2DC)"))), /* @__PURE__ */ React.createElement(Reveal, { delay: 80 }, /* @__PURE__ */ React.createElement("h1", null, /* @__PURE__ */ React.createElement("span", { className: "h1-thin" }, "\uD1B5\uC2E0\uBE44\uB294 \uC904\uC774\uACE0,"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "h1-bold" }, "\uCD5C\uC2E0\uD3F0\uC740 \uADF8\uB300\uB85C."))), /* @__PURE__ */ React.createElement(Reveal, { delay: 140 }, /* @__PURE__ */ React.createElement("p", { className: "hero-sub" }, "\uAC80\uC0C9\uD574\uB3C4, \uBE44\uAD50\uD574\uB3C4 \uC548 \uB098\uC635\uB2C8\uB2E4. ", /* @__PURE__ */ React.createElement("b", { style: { color: "var(--ink-headline)", fontWeight: 600 } }, "\uB9E4\uC7A5\uC5D0\uC11C\uB9CC \uC5F4\uB9AC\uB294 \uC870\uAC74"), "\uC774 \uB530\uB85C \uC788\uC73C\uB2C8\uAE4C\uC694.")), /* @__PURE__ */ React.createElement(Reveal, { delay: 260 }, /* @__PURE__ */ React.createElement("div", { className: "hero-cta hero-cta--apple" }, /* @__PURE__ */ React.createElement("a", { href: "#booking", className: "apple-link apple-link--primary" }, /* @__PURE__ */ React.createElement("span", null, "5\uCD08 \uB9CC\uC5D0 \uC0C1\uB2F4 \uC608\uC57D"), " ", /* @__PURE__ */ React.createElement("span", { className: "chev" }, "\u203A")), /* @__PURE__ */ React.createElement("a", { href: "#products", className: "apple-link" }, /* @__PURE__ */ React.createElement("span", null, "\uB77C\uC778\uC5C5 \uB458\uB7EC\uBCF4\uAE30"), " ", /* @__PURE__ */ React.createElement("span", { className: "chev" }, "\u203A")))), /* @__PURE__ */ React.createElement(Reveal, { delay: 340 }, /* @__PURE__ */ React.createElement("div", { className: "hero-meta" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("b", null, "\uCD5C\uB300 \u221210\uB9CC\uC6D0"), "\uC6D4 \uC808\uAC10 \xB7 \uC0C1\uB2F4 \uC0AC\uB840 \uAE30\uC900"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("b", null, "3\uC0AC \uD1B5\uD569"), "\uD55C \uC790\uB9AC \uBE44\uAD50"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("b", null, "0\uC6D0 \uAC15\uB9E4"), "\uC548 \uC0AC\uB3C4 OK"))), /* @__PURE__ */ React.createElement(Reveal, { delay: 420 }, /* @__PURE__ */ React.createElement("div", { className: "hero-ticker", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("div", { className: "hero-ticker__track" }, /* @__PURE__ */ React.createElement("span", null, "\uC774\uB7F0 \uC0C1\uB2F4\uC744 \uD569\uB2C8\uB2E4"), /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\xB7"), /* @__PURE__ */ React.createElement("span", null, "iPhone 17 Pro \uAC1C\uD1B5 \uC0C1\uB2F4"), /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\xB7"), /* @__PURE__ */ React.createElement("span", null, "4\uD68C\uC120 \uAC00\uC871\uACB0\uD569 \uC0C1\uB2F4"), /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\xB7"), /* @__PURE__ */ React.createElement("span", null, "\uC778\uD130\uB137\xB7TV \uACB0\uD569 \uC0C1\uB2F4"), /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\xB7"), /* @__PURE__ */ React.createElement("span", null, "Galaxy S26 \uBC88\uD638\uC774\uB3D9 \uC0C1\uB2F4"), /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\xB7"), /* @__PURE__ */ React.createElement("span", null, "\uD6A8\uB3C4\uD3F0 \uC694\uAE08\uC81C \uC0C1\uB2F4"), /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\xB7"), /* @__PURE__ */ React.createElement("span", null, "\uC774\uB7F0 \uC0C1\uB2F4\uC744 \uD569\uB2C8\uB2E4"), /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\xB7"), /* @__PURE__ */ React.createElement("span", null, "iPhone 17 Pro \uAC1C\uD1B5 \uC0C1\uB2F4"), /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\xB7"), /* @__PURE__ */ React.createElement("span", null, "4\uD68C\uC120 \uAC00\uC871\uACB0\uD569 \uC0C1\uB2F4"), /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\xB7"), /* @__PURE__ */ React.createElement("span", null, "\uC778\uD130\uB137\xB7TV \uACB0\uD569 \uC0C1\uB2F4"), /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\xB7"), /* @__PURE__ */ React.createElement("span", null, "Galaxy S26 \uBC88\uD638\uC774\uB3D9 \uC0C1\uB2F4"), /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\xB7"), /* @__PURE__ */ React.createElement("span", null, "\uD6A8\uB3C4\uD3F0 \uC694\uAE08\uC81C \uC0C1\uB2F4"), /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\xB7"))))), /* @__PURE__ */ React.createElement(Reveal, { delay: 120, className: "hero-visual" }, /* @__PURE__ */ React.createElement("div", { className: "hero-stage" }, /* @__PURE__ */ React.createElement("div", { className: "phone-mock" }, /* @__PURE__ */ React.createElement("div", { className: "phone-screen" }, /* @__PURE__ */ React.createElement("div", { className: "phone-notch" }), /* @__PURE__ */ React.createElement("div", { className: "phone-status" }, /* @__PURE__ */ React.createElement("span", null, "9:41"), /* @__PURE__ */ React.createElement("span", null, "\u25CF \u25CF \u25CF")), /* @__PURE__ */ React.createElement("div", { className: "phone-body" }, /* @__PURE__ */ React.createElement("div", { className: "phone-card primary" }, /* @__PURE__ */ React.createElement("div", { className: "label", style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement("img", { src: "assets/logo.png", alt: "", style: { width: 14, height: 14, filter: "brightness(0) invert(1)", opacity: 0.9 } }), "\uC624\uB298\uC758 \uB9DE\uCDA4 \uC0C1\uB2F4"), /* @__PURE__ */ React.createElement("div", { className: "value" }, "\uAE30\uAE30\uBCC0\uACBD + \uACB0\uD569\uD560\uC778")), /* @__PURE__ */ React.createElement("div", { className: "phone-row" }, /* @__PURE__ */ React.createElement("div", { className: "phone-card" }, /* @__PURE__ */ React.createElement("div", { className: "label" }, "\uB370\uC774\uD130"), /* @__PURE__ */ React.createElement("div", { className: "value" }, "\uBD84\uC11D", /* @__PURE__ */ React.createElement("small", null, "\uC644\uB8CC"))), /* @__PURE__ */ React.createElement("div", { className: "phone-card" }, /* @__PURE__ */ React.createElement("div", { className: "label" }, "\uACB0\uD569"), /* @__PURE__ */ React.createElement("div", { className: "value" }, "\uAC00\uC871", /* @__PURE__ */ React.createElement("small", null, "4\uD68C\uC120")))), /* @__PURE__ */ React.createElement("div", { className: "phone-bar" }, "\uC694\uAE08\uC81C \uBE44\uAD50 ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 14 })), /* @__PURE__ */ React.createElement("div", { className: "phone-bar" }, "\uC778\uD130\uB137\xB7TV \uC810\uAC80 ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 14 })), /* @__PURE__ */ React.createElement("div", { className: "phone-bar", style: { background: "var(--blue)", color: "#fff" } }, "\uC0C1\uB2F4 \uC608\uC57D\uD558\uAE30 ", /* @__PURE__ */ React.createElement(Icon, { name: "calendar", size: 14 })))))), /* @__PURE__ */ React.createElement("div", { className: "float-card fc-1" }, /* @__PURE__ */ React.createElement("span", { className: "ico" }, /* @__PURE__ */ React.createElement(Icon, { name: "users", size: 18 })), "1:1 \uB9DE\uCDA4 \uC0C1\uB2F4"), /* @__PURE__ */ React.createElement("div", { className: "float-card fc-2" }, /* @__PURE__ */ React.createElement("span", { className: "ico" }, /* @__PURE__ */ React.createElement(Icon, { name: "compare", size: 18 })), "\uC694\uAE08\uC81C \uBE44\uAD50 \uC548\uB0B4"), /* @__PURE__ */ React.createElement("div", { className: "float-card fc-3" }, /* @__PURE__ */ React.createElement("span", { className: "ico" }, /* @__PURE__ */ React.createElement(Icon, { name: "phone", size: 18 })), "\uAE30\uAE30\uBCC0\uACBD\xB7\uBC88\uD638\uC774\uB3D9"), /* @__PURE__ */ React.createElement("div", { className: "float-card fc-4" }, /* @__PURE__ */ React.createElement("span", { className: "ico" }, /* @__PURE__ */ React.createElement(Icon, { name: "wifi", size: 18 })), "\uC778\uD130\uB137\xB7TV \uACB0\uD569"))));
}
function TrustSection() {
  const items = [
    {
      icon: "easy",
      title: "\uBCF5\uC7A1\uD55C \uC870\uAC74\uC744 \uC27D\uAC8C \uC124\uBA85",
      text: "\uD1B5\uC2E0\uC0AC, \uC694\uAE08\uC81C, \uD560\uC778 \uC870\uAC74\uC744 \uACE0\uAC1D\uC774 \uC774\uD574\uD558\uAE30 \uC27D\uAC8C \uC815\uB9AC\uD574\uC11C \uC548\uB0B4\uD569\uB2C8\uB2E4."
    },
    {
      icon: "users",
      title: "\uACE0\uAC1D \uC0C1\uD669\uBCC4 \uB9DE\uCDA4 \uC0C1\uB2F4",
      text: "\uBB34\uC870\uAC74 \uBE44\uC2FC \uC694\uAE08\uC81C\uAC00 \uC544\uB2C8\uB77C \uC0AC\uC6A9 \uD328\uD134, \uAC00\uC871 \uACB0\uD569, \uC778\uD130\uB137 \uC774\uC6A9 \uC5EC\uBD80\uAE4C\uC9C0 \uACE0\uB824\uD569\uB2C8\uB2E4."
    },
    {
      icon: "pin",
      title: "\uBC29\uBB38\uD558\uAE30 \uC26C\uC6B4 \uC704\uCE58",
      text: "\uB9C8\uC7A5\uC5ED 2\uBC88 \uCD9C\uAD6C \uB3C4\uBCF4 1\uBD84, \uBD80\uB2F4 \uC5C6\uC774 \uB4E4\uB7EC \uC0C1\uB2F4\uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
    },
    {
      icon: "shield",
      title: "\uC0C1\uB2F4\uBD80\uD130 \uAC1C\uD1B5\uAE4C\uC9C0 \uD55C \uBC88\uC5D0",
      text: "\uAE30\uAE30 \uC120\uD0DD, \uC694\uAE08\uC81C \uBE44\uAD50, \uACB0\uD569 \uC0C1\uB2F4, \uAC1C\uD1B5 \uC9C4\uD589\uAE4C\uC9C0 \uD55C \uBC88\uC5D0 \uB3C4\uC640\uB4DC\uB9BD\uB2C8\uB2E4."
    }
  ];
  return /* @__PURE__ */ React.createElement("section", { className: "section", id: "why" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), "WHY US"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, /* @__PURE__ */ React.createElement("span", { className: "h-thin" }, "\uC65C \uB2E4\uB4E4 \uC5EC\uAE30\uB85C \uC624\uB294\uAC00."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "h-bold" }, "5\uBD84\uB9CC \uB4E4\uC5B4\uBCF4\uC138\uC694.")), /* @__PURE__ */ React.createElement("p", { className: "section-sub" }, "\uC2F8\uAE30\uB9CC \uD55C \uB9E4\uC7A5\uC740 \uB9CE\uC2B5\uB2C8\uB2E4. \uC815\uC9C1\uD558\uACE0, \uB05D\uAE4C\uC9C0 \uCC45\uC784\uC9C0\uB294 \uB9E4\uC7A5\uC740 \uD754\uCE58 \uC54A\uC2B5\uB2C8\uB2E4. ", /* @__PURE__ */ React.createElement("b", { style: { color: "var(--ink-headline)", fontWeight: 600 } }, "\uADF8 \uCC28\uC774\uAC00, \uB9E4\uB2EC \uD1B5\uC2E0\uBE44\uB97C \uAC00\uB985\uB2C8\uB2E4."))), /* @__PURE__ */ React.createElement("div", { className: "trust-grid" }, items.map(
    (it, i) => /* @__PURE__ */ React.createElement(Reveal, { key: it.title, delay: i * 80 }, /* @__PURE__ */ React.createElement("article", { className: "trust-card" }, /* @__PURE__ */ React.createElement("div", { className: "trust-icon" }, /* @__PURE__ */ React.createElement(Icon, { name: it.icon, size: 26 })), /* @__PURE__ */ React.createElement("span", { className: "trust-num" }, "0", i + 1), /* @__PURE__ */ React.createElement("h3", null, it.title), /* @__PURE__ */ React.createElement("p", null, it.text)))
  ))));
}
const PRODUCT_SPECS = {
  "iPhone \uC2DC\uB9AC\uC988": {
    note: "Apple \uACF5\uC2DD \uC0AC\uC591 \uAE30\uC900 \xB7 \uCD9C\uACE0\uAC00\uB294 256GB \uAE30\uC900 \uCC38\uACE0\uC6A9\uC774\uBA70, \uB9E4\uC7A5 \uB2E8\uB3C5 \uC870\uAC74\uC740 \uBC29\uBB38 \uC2DC \uC548\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4.",
    rows: [
      ["\uB514\uC2A4\uD50C\uB808\uC774", '6.3" Super Retina XDR\n120Hz ProMotion', '6.3" Super Retina XDR\n120Hz ProMotion', '6.9" Super Retina XDR\n120Hz ProMotion', '6.5" Super Retina XDR\n120Hz \xB7 Always-On'],
      ["\uD504\uB85C\uC138\uC11C", "A19", "A19 Pro", "A19 Pro", "A19 Pro"],
      ["\uBA54\uBAA8\uB9AC \xB7 \uC800\uC7A5", "8GB / 256\xB7512GB\xB71TB", "12GB / 256GB ~ 2TB", "12GB / 256GB ~ 2TB", "12GB / 256\xB7512GB\xB71TB"],
      ["\uD6C4\uBA74 \uCE74\uBA54\uB77C", "48MP \uB4C0\uC5BC\n\uAD11\uAC01 + \uCD08\uAD11\uAC01", "48MP \uD2B8\uB9AC\uD50C\n+ 5\xD7 \uB9DD\uC6D0", "48MP \uD2B8\uB9AC\uD50C\n+ 5\xD7 \uB9DD\uC6D0", "48MP \uB4C0\uC5BC"],
      ["\uBC30\uD130\uB9AC", "\uC601\uC0C1 \uCD5C\uB300 27\uC2DC\uAC04", "\uC601\uC0C1 \uCD5C\uB300 33\uC2DC\uAC04", "\uC601\uC0C1 \uCD5C\uB300 39\uC2DC\uAC04", "\uC601\uC0C1 \uCD5C\uB300 27\uC2DC\uAC04"],
      ["\uD2B9\uC9D5", "\uAE30\uBCF8\uAE30\uC5D0 \uCDA9\uC2E4\uD55C\n\uBA54\uC778 \uBAA8\uB378", "\uD504\uB85C \uB4F1\uAE09 \uCE74\uBA54\uB77C \xB7\n\uD2F0\uD0C0\uB284 \uD504\uB808\uC784", "\uCD5C\uB300 \uD654\uBA74 \xB7 \uCD5C\uC7A5 \uBC30\uD130\uB9AC\n\uD504\uB85C \uB4F1\uAE09 \uCE74\uBA54\uB77C", "\uB450\uAED8 5.6mm \xB7 165g\n\uCD08\uACBD\uB7C9 \uB514\uC790\uC778"],
      ["\uCD9C\uACE0\uAC00", "1,287,000\uC6D0~", "1,782,000\uC6D0~", "1,980,000\uC6D0~", "1,584,000\uC6D0~"],
      ["\uB9E4\uC7A5 \uAD6C\uB9E4\uAC00", "\uBC29\uBB38 \uC2DC \uACF5\uAC1C", "\uBC29\uBB38 \uC2DC \uACF5\uAC1C", "\uBC29\uBB38 \uC2DC \uACF5\uAC1C", "\uBC29\uBB38 \uC2DC \uACF5\uAC1C"]
    ],
    variants: [
      { name: "iPhone 17", img: "assets/iphone-17.webp" },
      { name: "iPhone 17 Pro", img: "assets/iphone-17-pro.webp" },
      { name: "iPhone 17 Pro Max", img: "assets/iphone-17-pro-max.webp" },
      { name: "iPhone Air", img: "assets/iphone-air.webp" }
    ]
  },
  "Galaxy S \uC2DC\uB9AC\uC988": {
    note: "\uC0BC\uC131 \uACF5\uC2DD \uC0AC\uC591 \uAE30\uC900 \xB7 \uCD9C\uACE0\uAC00\uB294 256GB \uAE30\uC900 \uCC38\uACE0\uC6A9\uC774\uBA70, \uB9E4\uC7A5 \uB2E8\uB3C5 \uC870\uAC74\uC740 \uBC29\uBB38 \uC2DC \uC548\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4.",
    rows: [
      ["\uB514\uC2A4\uD50C\uB808\uC774", '6.2" Dynamic AMOLED 2X\n120Hz FHD+', '6.7" Dynamic AMOLED 2X\n120Hz QHD+', '6.9" Dynamic AMOLED 2X\n120Hz QHD+'],
      ["\uD504\uB85C\uC138\uC11C", "Snapdragon 8 Elite\nfor Galaxy", "Snapdragon 8 Elite\nfor Galaxy", "Snapdragon 8 Elite\nfor Galaxy"],
      ["\uBA54\uBAA8\uB9AC \xB7 \uC800\uC7A5", "12GB / 256\xB7512GB", "12GB / 256\xB7512GB\xB71TB", "12GB / 256\xB7512GB\xB71TB"],
      ["\uD6C4\uBA74 \uCE74\uBA54\uB77C", "50MP \uD2B8\uB9AC\uD50C\n\uAD11\uAC01+\uCD08\uAD11\uAC01+3\xD7 \uB9DD\uC6D0", "50MP \uD2B8\uB9AC\uD50C", "200MP \uCFFC\uB4DC\n+ 3\xD7\xB75\xD7 \uB4C0\uC5BC \uB9DD\uC6D0"],
      ["\uBC30\uD130\uB9AC", "4,000mAh", "4,900mAh", "5,000mAh \xB7 S\uD39C \uB0B4\uC7A5"],
      ["\uD2B9\uC9D5", "\uCF64\uD329\uD2B8 \uD50C\uB798\uADF8\uC2ED", "\uD070 \uD654\uBA74 + \uAE34 \uBC30\uD130\uB9AC", "\uCD5C\uC0C1\uC704 \uCE74\uBA54\uB77C \xB7 S\uD39C"],
      ["\uCD9C\uACE0\uAC00", "1,254,000\uC6D0~", "1,452,000\uC6D0~", "1,797,400\uC6D0~"],
      ["\uB9E4\uC7A5 \uAD6C\uB9E4\uAC00", "\uBC29\uBB38 \uC2DC \uACF5\uAC1C", "\uBC29\uBB38 \uC2DC \uACF5\uAC1C", "\uBC29\uBB38 \uC2DC \uACF5\uAC1C"]
    ],
    variants: [
      { name: "Galaxy S26", img: "assets/galaxy-s26.webp" },
      { name: "Galaxy S26+", img: "assets/galaxy-s26-plus.webp" },
      { name: "Galaxy S26 Ultra", img: "assets/galaxy-s26-ultra.webp" }
    ]
  },
  "Galaxy Fold / Flip": {
    note: "\uC0BC\uC131 \uACF5\uC2DD \uC0AC\uC591 \uAE30\uC900 \xB7 \uCD9C\uACE0\uAC00\uB294 256GB \uAE30\uC900 \uCC38\uACE0\uC6A9\uC774\uBA70, \uB9E4\uC7A5 \uB2E8\uB3C5 \uC870\uAC74\uC740 \uBC29\uBB38 \uC2DC \uC548\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4.",
    rows: [
      ["\uB514\uC2A4\uD50C\uB808\uC774", '\uBA54\uC778 8.0" (2504\xD72256)\n\uCEE4\uBC84 6.5" (2520\xD71080)', '\uBA54\uC778 7.6" 4:3 (2448\xD71848)\n\uCEE4\uBC84 5.5" (1972\xD71248)', '\uBA54\uC778 6.9" FHD+ LTPO\n\uCEE4\uBC84 Flex Window'],
      ["\uD504\uB85C\uC138\uC11C", "Snapdragon 8 Elite\nGen 5 for Galaxy", "Snapdragon 8 Elite\nGen 5 for Galaxy", "Snapdragon 8 Elite Gen 5\n/ Exynos 2600 (\uC9C0\uC5ED\uBCC4)"],
      ["\uC800\uC7A5 \uC6A9\uB7C9", "256 \xB7 512GB", "256 \xB7 512GB", "256 \xB7 512GB"],
      ["\uD6C4\uBA74 \uCE74\uBA54\uB77C", "200MP \uAD11\uAC01 + 50MP \uCD08\uAD11\uAC01\n+ 10MP \uB9DD\uC6D0", "50MP \uAD11\uAC01(F1.8)\n+ 50MP \uCD08\uAD11\uAC01(F1.9)", "50MP \uAD11\uAC01\n+ 12MP \uCD08\uAD11\uAC01"],
      ["\uBC30\uD130\uB9AC \xB7 \uBB34\uAC8C", "5,000mAh \xB7 215g", "4,800mAh \xB7 201g", "4,174mAh(\uC815\uACA9)"],
      ["\uD2B9\uC9D5", "\uD3F4\uB4DC\uC758 \uC815\uC810 \u2014\n8\uD615 \uB300\uD654\uBA74 \xB7 200MP", "\uAF49 \uCC2C 4:3 \uD654\uBA74 \xB7\n\uC5ED\uB300 \uCD5C\uACBD\uB7C9 \uD3F4\uB4DC", "\uC8FC\uB984 \uAC1C\uC120 \uD78C\uC9C0 \xB7\nFlex Window \uD65C\uC6A9"],
      ["\uCD9C\uACE0\uAC00", "2,577,300\uC6D0~", "2,278,100\uC6D0~", "1,683,000\uC6D0~"],
      ["\uB9E4\uC7A5 \uAD6C\uB9E4\uAC00", "\uBC29\uBB38 \uC2DC \uACF5\uAC1C", "\uBC29\uBB38 \uC2DC \uACF5\uAC1C"]
    ],
    variants: [
      { name: "Galaxy Fold8 Ultra", img: "assets/galaxy-fold8-ultra-violet.webp" },
      { name: "Galaxy Fold8", img: "assets/galaxy-fold8-lavender.webp" },
      { name: "Galaxy Flip8", img: "assets/galaxy-flip8-graphite.webp" }
    ]
  },
  "\uD6A8\uB3C4\uD3F0 / \uC2E4\uC18D\uD3F0": {
    note: "\uB77C\uC778\uC5C5\uC740 \uC2DC\uAE30\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC73C\uBA70, \uC815\uD655\uD55C \uC7AC\uACE0\xB7\uC870\uAC74\uC740 \uB9E4\uC7A5 \uBC29\uBB38 \uC2DC \uC548\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4.",
    rows: [
      ["\uB514\uC2A4\uD50C\uB808\uC774", '3.8" \uD3F4\uB354\uD615 LCD', '6.7" HD+ LCD'],
      ["\uD504\uB85C\uC138\uC11C", "\uBCF4\uAE09\uD615 \uCE69\uC14B", "\uBCF4\uAE09\uD615 \uCE69\uC14B"],
      ["\uBA54\uBAA8\uB9AC \xB7 \uC800\uC7A5", "2GB / 32GB", "4\xB76GB / 64\xB7128GB"],
      ["\uD6C4\uBA74 \uCE74\uBA54\uB77C", "800\uB9CC", "5,000\uB9CC\uAE09"],
      ["\uBC30\uD130\uB9AC", "1,950mAh", "5,000mAh"],
      ["\uD2B9\uC9D5", "\uD3F4\uB354\uD615 \xB7 \uD070 \uBC84\uD2BC\n\uBD80\uBAA8\uB2D8\uAED8 \uCD94\uCC9C", "\uD070 \uD654\uBA74 \xB7 \uAC00\uC131\uBE44\n\uD559\uC0DD \xB7 \uC138\uCEE8\uD3F0"],
      ["\uCD9C\uACE0\uAC00", "237,600\uC6D0~", "319,000\uC6D0~"],
      ["\uB9E4\uC7A5 \uAD6C\uB9E4\uAC00", "\uBC29\uBB38 \uC2DC \uACF5\uAC1C", "\uBC29\uBB38 \uC2DC \uACF5\uAC1C"]
    ],
    variants: [
      { name: "\uC0BC\uC131 \uC2A4\uD0C0\uC77C \uD3F4\uB3542", img: "assets/galaxy-style-folder2.webp" },
      { name: "Galaxy A17", img: "assets/galaxy-a17.webp" }
    ]
  }
};
function ProductsSection() {
  const tabs = ["\uC804\uCCB4", "iPhone", "Galaxy", "\uD6A8\uB3C4\uD3F0\xB7\uC2E4\uC18D\uD3F0"];
  const [active, setActive] = useState("\uC804\uCCB4");
  const [openSpec, setOpenSpec] = useState(null);
  const products = [
    {
      cat: "iPhone",
      name: "iPhone \uC2DC\uB9AC\uC988",
      feat: "\uD504\uB9AC\uBBF8\uC5C4 \uB77C\uC778\uC5C5",
      desc: "\uAE54\uB054\uD55C \uB514\uC790\uC778\uACFC \uC548\uC815\uC801\uC778 \uC0AC\uC6A9\uC131\uC744 \uC6D0\uD558\uB294 \uACE0\uAC1D\uC5D0\uAC8C \uCD94\uCC9C\uB4DC\uB9BD\uB2C8\uB2E4.",
      target: "\uAE30\uBCF8\uAE30\uB97C \uC911\uC694\uD558\uAC8C \uC0DD\uAC01\uD558\uB294 \uBD84",
      icon: "phoneShape"
    },
    {
      cat: "Galaxy",
      name: "Galaxy S \uC2DC\uB9AC\uC988",
      feat: "\uACE0\uC131\uB2A5 \uCE74\uBA54\uB77C\xB7\uD37C\uD3EC\uBA3C\uC2A4",
      desc: "\uACE0\uC131\uB2A5 \uCE74\uBA54\uB77C\uC640 \uBE60\uB978 \uC131\uB2A5\uC744 \uC6D0\uD558\uB294 \uACE0\uAC1D\uC5D0\uAC8C \uCD94\uCC9C\uB4DC\uB9BD\uB2C8\uB2E4.",
      target: "\uC0AC\uC9C4\xB7\uAC8C\uC784\xB7\uC5C5\uBB34 \uBAA8\uB450 \uD65C\uC6A9\uD558\uB294 \uBD84",
      icon: "spark"
    },
    {
      cat: "Galaxy",
      name: "Galaxy Fold / Flip",
      feat: "\uD3F4\uB354\uBE14 \uD504\uB9AC\uBBF8\uC5C4",
      desc: "\uD504\uB9AC\uBBF8\uC5C4 \uB514\uC790\uC778\uACFC \uCC28\uBCC4\uD654\uB41C \uC0AC\uC6A9\uC131\uC744 \uC6D0\uD558\uB294 \uACE0\uAC1D\uC5D0\uAC8C \uCD94\uCC9C\uB4DC\uB9BD\uB2C8\uB2E4.",
      target: "\uB0A8\uB2E4\uB978 \uAE30\uAE30 \uACBD\uD5D8\uC744 \uC6D0\uD558\uB294 \uBD84",
      icon: "fold"
    },
    {
      cat: "\uD6A8\uB3C4\uD3F0\xB7\uC2E4\uC18D\uD3F0",
      name: "\uD6A8\uB3C4\uD3F0 / \uC2E4\uC18D\uD3F0",
      feat: "\uBD80\uB2F4 \uC5C6\uB294 \uB77C\uC778\uC5C5",
      desc: "\uBD80\uBAA8\uB2D8, \uD559\uC0DD, \uC138\uCEE8\uD3F0 \uC6A9\uB3C4\uB85C \uBD80\uB2F4 \uC5C6\uC774 \uC0AC\uC6A9\uD558\uAE30 \uC88B\uC740 \uBAA8\uB378\uC744 \uC0C1\uB2F4\uB4DC\uB9BD\uB2C8\uB2E4.",
      target: "\uAC00\uC131\uBE44\xB7\uAC04\uD3B8\uD568\uC774 \uC6B0\uC120\uC778 \uBD84",
      icon: "senior"
    }
  ];
  const visible = active === "\uC804\uCCB4" ? products : products.filter((p) => p.cat === active);
  return /* @__PURE__ */ React.createElement("section", { className: "section products-section", id: "products" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "products-head" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), "LINEUP"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, /* @__PURE__ */ React.createElement("span", { className: "h-thin" }, "\uAD11\uACE0\uC5D4 \uC5C6\uB294 \uC870\uAC74."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "h-bold" }, "\uB9E4\uC7A5\uC5D0\uB9CC \uC788\uC2B5\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement("p", { className: "section-sub" }, "\uAC19\uC740 \uBAA8\uB378, \uAC19\uC740 \uD1B5\uC2E0\uC0AC\uB77C\uB3C4 \uB9E4\uC7A5 \uC870\uAC74\uC5D0 \uB530\uB77C \uAC00\uACA9\uC774 \uAC08\uB9BD\uB2C8\uB2E4. ", /* @__PURE__ */ React.createElement("b", { style: { color: "var(--ink-headline)", fontWeight: 600 } }, "\uC870\uAC74\uC5D0 \uB530\uB77C 100\uB9CC\uC6D0 \uAC00\uAE4C\uC774 \uCC28\uC774 \uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4."))), /* @__PURE__ */ React.createElement("div", { className: "product-tabs", role: "tablist" }, tabs.map(
    (t) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: t,
        className: active === t ? "active" : "",
        onClick: () => setActive(t),
        role: "tab",
        "aria-selected": active === t
      },
      t
    )
  )))), /* @__PURE__ */ React.createElement("div", { className: "products-grid" }, visible.map(
    (p, i) => /* @__PURE__ */ React.createElement(Reveal, { key: p.name, delay: i * 70 }, /* @__PURE__ */ React.createElement(
      "article",
      {
        className: "product-card product-card--clickable",
        onClick: () => setOpenSpec(p.name),
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpenSpec(p.name);
          }
        },
        role: "button",
        tabIndex: 0,
        "aria-label": `${p.name} \uC2A4\uD399 \uBCF4\uAE30`
      },
      /* @__PURE__ */ React.createElement("div", { className: "product-image" }, /* @__PURE__ */ React.createElement(PhoneArt, { model: p.icon }), /* @__PURE__ */ React.createElement("span", { className: "product-spec-hint" }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 11 }), " \uC2A4\uD399 \uBCF4\uAE30")),
      /* @__PURE__ */ React.createElement("div", { className: "product-info" }, /* @__PURE__ */ React.createElement("h3", { className: "product-name" }, p.name), /* @__PURE__ */ React.createElement("div", { className: "product-feat" }, p.feat), /* @__PURE__ */ React.createElement("p", { className: "product-desc" }, p.desc), /* @__PURE__ */ React.createElement("span", { className: "product-target" }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 12 }), " ", p.target), /* @__PURE__ */ React.createElement("div", { className: "product-price" }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("b", null, "\uAC00\uACA9"), " \xB7 \uC0C1\uB2F4 \uD6C4 \uC870\uAC74 \uC548\uB0B4"), /* @__PURE__ */ React.createElement(
        "a",
        {
          href: "#booking",
          className: "product-cta",
          onClick: (e) => e.stopPropagation()
        },
        "\uC0C1\uB2F4 \uBB38\uC758 ",
        /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 14 })
      )))
    ))
  ))), openSpec && /* @__PURE__ */ React.createElement(SpecModal, { productName: openSpec, onClose: () => setOpenSpec(null) }));
}
function SpecModal({ productName, onClose }) {
  const data = PRODUCT_SPECS[productName];
  const [activeVariant, setActiveVariant] = useState(0);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const body = document.body;
    const scrollY = window.scrollY;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow
    };
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      const html = document.documentElement;
      const prevBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollY);
      html.style.scrollBehavior = prevBehavior;
    };
  }, [onClose]);
  if (!data) return null;
  const variants = data.variants || [];
  const cols = variants.length;
  return /* @__PURE__ */ React.createElement("div", { className: "spec-modal", onClick: onClose, role: "dialog", "aria-modal": "true", "aria-label": `${productName} \uC0C1\uC138 \uC2A4\uD399` }, /* @__PURE__ */ React.createElement("div", { className: "spec-modal__sheet", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("button", { className: "spec-modal__close", onClick: onClose, "aria-label": "\uB2EB\uAE30" }, /* @__PURE__ */ React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M5 5L15 15M15 5L5 15", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round" }))), /* @__PURE__ */ React.createElement("div", { className: "spec-modal__header" }, /* @__PURE__ */ React.createElement("div", { className: "spec-modal__eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), "LINEUP \xB7 \uC0C1\uC138 \uC2A4\uD399"), /* @__PURE__ */ React.createElement("h3", { className: "spec-modal__title" }, productName), /* @__PURE__ */ React.createElement("p", { className: "spec-modal__note" }, data.note)), /* @__PURE__ */ React.createElement("div", { className: "spec-modal__tabs", role: "tablist" }, variants.map(
    (v, i) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: v.name,
        className: "spec-modal__tab" + (activeVariant === i ? " active" : ""),
        onClick: () => setActiveVariant(i),
        role: "tab",
        "aria-selected": activeVariant === i
      },
      v.name
    )
  )), /* @__PURE__ */ React.createElement("div", { className: "spec-modal__table-wrap" }, /* @__PURE__ */ React.createElement("table", { className: "spec-table" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", { "aria-hidden": "true" }), variants.map(
    (v) => /* @__PURE__ */ React.createElement("th", { key: v.name }, /* @__PURE__ */ React.createElement("div", { className: "spec-table__head" }, /* @__PURE__ */ React.createElement("div", { className: "spec-table__phone" }, /* @__PURE__ */ React.createElement("img", { src: v.img, alt: v.name, loading: "lazy" })), /* @__PURE__ */ React.createElement("div", { className: "spec-table__name" }, v.name)))
  ))), /* @__PURE__ */ React.createElement("tbody", null, data.rows.map((row) => {
    const isStore = row[0] === "\uB9E4\uC7A5 \uAD6C\uB9E4\uAC00";
    const isMsrp = row[0] === "\uCD9C\uACE0\uAC00";
    const cls = isStore ? "spec-row--store" : isMsrp ? "spec-row--msrp" : "";
    return /* @__PURE__ */ React.createElement("tr", { key: row[0], className: cls }, /* @__PURE__ */ React.createElement("th", { scope: "row" }, isStore && /* @__PURE__ */ React.createElement("span", { className: "spec-lock", "aria-hidden": "true" }, "\u{1F512}"), row[0]), Array.from({ length: cols }).map(
      (_, ci) => /* @__PURE__ */ React.createElement("td", { key: ci }, row[ci + 1])
    ));
  })))), /* @__PURE__ */ React.createElement("div", { className: "spec-modal__mobile" }, /* @__PURE__ */ React.createElement("div", { className: "spec-mobile__head" }, /* @__PURE__ */ React.createElement("div", { className: "spec-mobile__phone" }, /* @__PURE__ */ React.createElement("img", { src: variants[activeVariant].img, alt: variants[activeVariant].name })), /* @__PURE__ */ React.createElement("div", { className: "spec-mobile__name" }, variants[activeVariant].name)), /* @__PURE__ */ React.createElement("dl", { className: "spec-mobile__list" }, data.rows.map((row) => {
    const isStore = row[0] === "\uB9E4\uC7A5 \uAD6C\uB9E4\uAC00";
    const isMsrp = row[0] === "\uCD9C\uACE0\uAC00";
    const cls = isStore ? "spec-mobile__row spec-row--store" : isMsrp ? "spec-mobile__row spec-row--msrp" : "spec-mobile__row";
    return /* @__PURE__ */ React.createElement("div", { className: cls, key: row[0] }, /* @__PURE__ */ React.createElement("dt", null, isStore && /* @__PURE__ */ React.createElement("span", { className: "spec-lock", "aria-hidden": "true" }, "\u{1F512}"), row[0]), /* @__PURE__ */ React.createElement("dd", null, row[activeVariant + 1]));
  }))), /* @__PURE__ */ React.createElement("div", { className: "spec-modal__tease" }, /* @__PURE__ */ React.createElement("span", { className: "spec-modal__tease-pin", "aria-hidden": "true" }, "\u{1F4CD}"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("b", null, "\uAD11\uACE0\uC5D0 \uC62C\uB9B4 \uC218 \uC5C6\uB294 \uB9E4\uC7A5 \uB2E8\uB3C5\uAC00"), /* @__PURE__ */ React.createElement("span", null, "\uC9C1\uC811 \uBC29\uBB38\uD558\uC2DC\uBA74 \uBC14\uB85C \uC548\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4. \uD1B5\uC2E0\uC0AC\xB7\uACB0\uD569 \uC870\uAC74\uC5D0 \uB530\uB77C \uCD9C\uACE0\uAC00\uBCF4\uB2E4 \uD06C\uAC8C \uB0AE\uC544\uC9D1\uB2C8\uB2E4."))), /* @__PURE__ */ React.createElement("div", { className: "spec-modal__footer" }, /* @__PURE__ */ React.createElement("a", { href: "#booking", className: "btn btn-primary", onClick: onClose }, "\uC774 \uBAA8\uB378\uB85C \uC0C1\uB2F4 \uBC1B\uAE30 ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 14 })), /* @__PURE__ */ React.createElement("a", { href: "tel:01079329779", className: "btn btn-ghost spec-modal__call" }, /* @__PURE__ */ React.createElement(Icon, { name: "phone", size: 14 }), " 010-7932-9779"))));
}
function PhoneArt({ model }) {
  if (model === "spark") return /* @__PURE__ */ React.createElement(GalaxyArt, null);
  if (model === "fold") return /* @__PURE__ */ React.createElement(FoldArt, null);
  if (model === "senior") return /* @__PURE__ */ React.createElement(SeniorArt, null);
  return /* @__PURE__ */ React.createElement(IPhoneArt, null);
}
function IPhoneArt() {
  return /* @__PURE__ */ React.createElement("div", { className: "phone-art phone-art--photo" }, /* @__PURE__ */ React.createElement("div", { className: "iphone-stack" }, /* @__PURE__ */ React.createElement("img", { src: "assets/iphone-17.webp", alt: "iPhone 17", className: "iphone-stack__back iphone-stack__left" }), /* @__PURE__ */ React.createElement("img", { src: "assets/iphone-17-pro.webp", alt: "iPhone 17 Pro", className: "iphone-stack__back iphone-stack__right" }), /* @__PURE__ */ React.createElement("img", { src: "assets/iphone-air.webp", alt: "iPhone Air", className: "iphone-stack__front" })));
}
function IPhoneArtSvg_unused() {
  return /* @__PURE__ */ React.createElement("div", { className: "phone-art" }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 140 220", xmlns: "http://www.w3.org/2000/svg", "aria-label": "iPhone" }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "ip-frame", x1: "0", x2: "0", y1: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0", stopColor: "#6E7785" }), /* @__PURE__ */ React.createElement("stop", { offset: "0.45", stopColor: "#2E343F" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#454C58" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "ip-screen", x1: "0.1", x2: "0.9", y1: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0", stopColor: "#0B1640" }), /* @__PURE__ */ React.createElement("stop", { offset: "0.55", stopColor: "#1A2F66" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#3B1B60" })), /* @__PURE__ */ React.createElement("radialGradient", { id: "ip-glow", cx: "0.3", cy: "0.25", r: "0.8" }, /* @__PURE__ */ React.createElement("stop", { offset: "0", stopColor: "#FFB59E", stopOpacity: "0.55" }), /* @__PURE__ */ React.createElement("stop", { offset: "0.4", stopColor: "#7B6BFF", stopOpacity: "0.35" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#0B1640", stopOpacity: "0" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "ip-glare", x1: "0", x2: "1", y1: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0", stopColor: "#fff", stopOpacity: "0.18" }), /* @__PURE__ */ React.createElement("stop", { offset: "0.5", stopColor: "#fff", stopOpacity: "0" })), /* @__PURE__ */ React.createElement("filter", { id: "ip-shadow", x: "-30%", y: "-10%", width: "160%", height: "130%" }, /* @__PURE__ */ React.createElement("feDropShadow", { dx: "0", dy: "10", stdDeviation: "10", floodColor: "#0E2A6B", floodOpacity: "0.18" }))), /* @__PURE__ */ React.createElement("ellipse", { cx: "70", cy: "212", rx: "44", ry: "4", fill: "#0E2A6B", opacity: "0.10" }), /* @__PURE__ */ React.createElement("rect", { x: "14", y: "6", width: "112", height: "200", rx: "22", fill: "url(#ip-frame)", filter: "url(#ip-shadow)" }), /* @__PURE__ */ React.createElement("rect", { x: "14.5", y: "6.5", width: "111", height: "199", rx: "21.5", fill: "none", stroke: "rgba(255,255,255,0.22)", strokeWidth: "0.6" }), /* @__PURE__ */ React.createElement("rect", { x: "15.5", y: "7.5", width: "109", height: "197", rx: "20.5", fill: "none", stroke: "rgba(0,0,0,0.35)", strokeWidth: "0.5" }), /* @__PURE__ */ React.createElement("rect", { x: "19", y: "11", width: "102", height: "190", rx: "17", fill: "url(#ip-screen)" }), /* @__PURE__ */ React.createElement("rect", { x: "19", y: "11", width: "102", height: "190", rx: "17", fill: "url(#ip-glow)" }), /* @__PURE__ */ React.createElement("rect", { x: "19", y: "11", width: "102", height: "190", rx: "17", fill: "url(#ip-glare)", opacity: "0.6" }), /* @__PURE__ */ React.createElement("rect", { x: "56", y: "17", width: "28", height: "8.5", rx: "4.25", fill: "#000" }), /* @__PURE__ */ React.createElement("circle", { cx: "79.5", cy: "21.25", r: "1.6", fill: "#0A1428" }), /* @__PURE__ */ React.createElement("circle", { cx: "79.5", cy: "21.25", r: "0.6", fill: "#1F3A8A", opacity: "0.7" }), /* @__PURE__ */ React.createElement("text", { x: "70", y: "48", textAnchor: "middle", fontFamily: "-apple-system, SF Pro Display, system-ui", fontSize: "22", fontWeight: "600", fill: "#fff", opacity: "0.95" }, "9:41"), /* @__PURE__ */ React.createElement("rect", { x: "13", y: "36", width: "1.5", height: "9", rx: "0.5", fill: "rgba(0,0,0,0.5)" }), /* @__PURE__ */ React.createElement("rect", { x: "13", y: "54", width: "1.5", height: "22", rx: "0.5", fill: "rgba(0,0,0,0.5)" }), /* @__PURE__ */ React.createElement("rect", { x: "13", y: "80", width: "1.5", height: "22", rx: "0.5", fill: "rgba(0,0,0,0.5)" }), /* @__PURE__ */ React.createElement("rect", { x: "125.5", y: "60", width: "1.5", height: "30", rx: "0.5", fill: "rgba(0,0,0,0.5)" })));
}
function GalaxyArt() {
  return /* @__PURE__ */ React.createElement("div", { className: "phone-art phone-art--photo" }, /* @__PURE__ */ React.createElement("div", { className: "iphone-stack galaxy-stack" }, /* @__PURE__ */ React.createElement("img", { src: "assets/galaxy-s26-ultra.webp", alt: "Galaxy S26 Ultra", className: "iphone-stack__back iphone-stack__left" }), /* @__PURE__ */ React.createElement("img", { src: "assets/galaxy-s26-plus.webp", alt: "Galaxy S26+", className: "iphone-stack__back iphone-stack__right" }), /* @__PURE__ */ React.createElement("img", { src: "assets/galaxy-s26.webp", alt: "Galaxy S26", className: "iphone-stack__front" })));
}
function GalaxyArtSvg_unused() {
  return /* @__PURE__ */ React.createElement("div", { className: "phone-art" }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 140 220", xmlns: "http://www.w3.org/2000/svg", "aria-label": "Galaxy" }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "gx-frame", x1: "0", x2: "0", y1: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0", stopColor: "#3D3550" }), /* @__PURE__ */ React.createElement("stop", { offset: "0.5", stopColor: "#1B1530" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#2A2240" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "gx-screen", x1: "0", x2: "1", y1: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0", stopColor: "#0F0826" }), /* @__PURE__ */ React.createElement("stop", { offset: "0.6", stopColor: "#1F1448" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#3B1F70" })), /* @__PURE__ */ React.createElement("radialGradient", { id: "gx-glow", cx: "0.7", cy: "0.8", r: "0.7" }, /* @__PURE__ */ React.createElement("stop", { offset: "0", stopColor: "#7C5BFF", stopOpacity: "0.6" }), /* @__PURE__ */ React.createElement("stop", { offset: "0.5", stopColor: "#4361EE", stopOpacity: "0.3" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#0F0826", stopOpacity: "0" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "gx-glare", x1: "0", x2: "1", y1: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0", stopColor: "#fff", stopOpacity: "0.16" }), /* @__PURE__ */ React.createElement("stop", { offset: "0.4", stopColor: "#fff", stopOpacity: "0" })), /* @__PURE__ */ React.createElement("filter", { id: "gx-shadow", x: "-30%", y: "-10%", width: "160%", height: "130%" }, /* @__PURE__ */ React.createElement("feDropShadow", { dx: "0", dy: "10", stdDeviation: "10", floodColor: "#1A0E4D", floodOpacity: "0.18" }))), /* @__PURE__ */ React.createElement("ellipse", { cx: "70", cy: "212", rx: "44", ry: "4", fill: "#1A0E4D", opacity: "0.12" }), /* @__PURE__ */ React.createElement("rect", { x: "14", y: "6", width: "112", height: "200", rx: "18", fill: "url(#gx-frame)", filter: "url(#gx-shadow)" }), /* @__PURE__ */ React.createElement("rect", { x: "14.5", y: "6.5", width: "111", height: "199", rx: "17.5", fill: "none", stroke: "rgba(255,255,255,0.18)", strokeWidth: "0.6" }), /* @__PURE__ */ React.createElement("rect", { x: "17", y: "9", width: "106", height: "194", rx: "15", fill: "url(#gx-screen)" }), /* @__PURE__ */ React.createElement("rect", { x: "17", y: "9", width: "106", height: "194", rx: "15", fill: "url(#gx-glow)" }), /* @__PURE__ */ React.createElement("rect", { x: "17", y: "9", width: "106", height: "194", rx: "15", fill: "url(#gx-glare)", opacity: "0.55" }), /* @__PURE__ */ React.createElement("circle", { cx: "70", cy: "18", r: "2.6", fill: "#000" }), /* @__PURE__ */ React.createElement("circle", { cx: "70", cy: "18", r: "1.3", fill: "#0E1430" }), /* @__PURE__ */ React.createElement("circle", { cx: "69.4", cy: "17.4", r: "0.5", fill: "#3D5BFF", opacity: "0.7" }), /* @__PURE__ */ React.createElement("text", { x: "70", y: "55", textAnchor: "middle", fontFamily: "Samsung Sharp Sans, -apple-system, system-ui", fontSize: "22", fontWeight: "600", fill: "#fff", opacity: "0.95" }, "9:41"), /* @__PURE__ */ React.createElement("rect", { x: "125.5", y: "50", width: "1.5", height: "14", rx: "0.5", fill: "rgba(0,0,0,0.5)" }), /* @__PURE__ */ React.createElement("rect", { x: "125.5", y: "70", width: "1.5", height: "26", rx: "0.5", fill: "rgba(0,0,0,0.5)" })));
}
function FoldArt() {
  return /* @__PURE__ */ React.createElement("div", { className: "phone-art phone-art--photo" }, /* @__PURE__ */ React.createElement("div", { className: "iphone-stack fold-stack" }, /* @__PURE__ */ React.createElement("img", { src: "assets/galaxy-fold8-ultra-violet.webp", alt: "Galaxy Fold8 Ultra", className: "iphone-stack__back iphone-stack__left" }), /* @__PURE__ */ React.createElement("img", { src: "assets/galaxy-flip8-graphite.webp", alt: "Galaxy Flip8", className: "iphone-stack__front" })));
}
function FoldArtSvg_unused() {
  return /* @__PURE__ */ React.createElement("div", { className: "phone-art" }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 220 200", xmlns: "http://www.w3.org/2000/svg", "aria-label": "Galaxy Fold" }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "fd-frame", x1: "0", x2: "0", y1: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0", stopColor: "#4A5165" }), /* @__PURE__ */ React.createElement("stop", { offset: "0.5", stopColor: "#1F2535" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#2D3447" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "fd-screen-l", x1: "0", x2: "1", y1: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0", stopColor: "#0B1640" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#1F2F66" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "fd-screen-r", x1: "0", x2: "1", y1: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0", stopColor: "#1A2658" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#3D1F70" })), /* @__PURE__ */ React.createElement("radialGradient", { id: "fd-glow", cx: "0.5", cy: "0.6", r: "0.7" }, /* @__PURE__ */ React.createElement("stop", { offset: "0", stopColor: "#7B6BFF", stopOpacity: "0.45" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#0B1640", stopOpacity: "0" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "fd-crease", x1: "0", x2: "0", y1: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0", stopColor: "rgba(255,255,255,0.06)" }), /* @__PURE__ */ React.createElement("stop", { offset: "0.5", stopColor: "rgba(0,0,0,0.45)" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "rgba(255,255,255,0.06)" })), /* @__PURE__ */ React.createElement("filter", { id: "fd-shadow", x: "-20%", y: "-10%", width: "140%", height: "130%" }, /* @__PURE__ */ React.createElement("feDropShadow", { dx: "0", dy: "10", stdDeviation: "10", floodColor: "#0E2A6B", floodOpacity: "0.2" }))), /* @__PURE__ */ React.createElement("ellipse", { cx: "110", cy: "190", rx: "80", ry: "4", fill: "#0E2A6B", opacity: "0.10" }), /* @__PURE__ */ React.createElement("rect", { x: "12", y: "14", width: "196", height: "172", rx: "12", fill: "url(#fd-frame)", filter: "url(#fd-shadow)" }), /* @__PURE__ */ React.createElement("rect", { x: "12.5", y: "14.5", width: "195", height: "171", rx: "11.5", fill: "none", stroke: "rgba(255,255,255,0.18)", strokeWidth: "0.6" }), /* @__PURE__ */ React.createElement("rect", { x: "17", y: "19", width: "91", height: "162", rx: "8", fill: "url(#fd-screen-l)" }), /* @__PURE__ */ React.createElement("rect", { x: "17", y: "19", width: "91", height: "162", rx: "8", fill: "url(#fd-glow)", opacity: "0.7" }), /* @__PURE__ */ React.createElement("rect", { x: "112", y: "19", width: "91", height: "162", rx: "8", fill: "url(#fd-screen-r)" }), /* @__PURE__ */ React.createElement("rect", { x: "112", y: "19", width: "91", height: "162", rx: "8", fill: "url(#fd-glow)", opacity: "0.7" }), /* @__PURE__ */ React.createElement("rect", { x: "108", y: "19", width: "4", height: "162", fill: "url(#fd-crease)" }), /* @__PURE__ */ React.createElement("circle", { cx: "158", cy: "28", r: "2.2", fill: "#000" }), /* @__PURE__ */ React.createElement("g", { opacity: "0.85" }, /* @__PURE__ */ React.createElement("rect", { x: "32", y: "40", width: "14", height: "14", rx: "3.5", fill: "#FF7A59" }), /* @__PURE__ */ React.createElement("rect", { x: "52", y: "40", width: "14", height: "14", rx: "3.5", fill: "#5BD08A" }), /* @__PURE__ */ React.createElement("rect", { x: "72", y: "40", width: "14", height: "14", rx: "3.5", fill: "#FFD15B" }), /* @__PURE__ */ React.createElement("rect", { x: "32", y: "60", width: "14", height: "14", rx: "3.5", fill: "#5B9BFF" }), /* @__PURE__ */ React.createElement("rect", { x: "52", y: "60", width: "14", height: "14", rx: "3.5", fill: "#C56BFF" }), /* @__PURE__ */ React.createElement("rect", { x: "72", y: "60", width: "14", height: "14", rx: "3.5", fill: "#FF6B9D" })), /* @__PURE__ */ React.createElement("rect", { x: "125", y: "100", width: "65", height: "40", rx: "6", fill: "rgba(255,255,255,0.10)" }), /* @__PURE__ */ React.createElement("rect", { x: "131", y: "108", width: "22", height: "3", rx: "1.5", fill: "rgba(255,255,255,0.55)" }), /* @__PURE__ */ React.createElement("rect", { x: "131", y: "116", width: "40", height: "2.5", rx: "1.25", fill: "rgba(255,255,255,0.30)" }), /* @__PURE__ */ React.createElement("rect", { x: "131", y: "123", width: "34", height: "2.5", rx: "1.25", fill: "rgba(255,255,255,0.30)" }), /* @__PURE__ */ React.createElement("rect", { x: "131", y: "130", width: "28", height: "2.5", rx: "1.25", fill: "rgba(255,255,255,0.30)" })));
}
function SeniorArt() {
  return /* @__PURE__ */ React.createElement("div", { className: "phone-art phone-art--photo" }, /* @__PURE__ */ React.createElement("div", { className: "iphone-stack senior-stack" }, /* @__PURE__ */ React.createElement("img", { src: "assets/senior-phone.webp", alt: "\uC2E4\uC18D\uD3F0", className: "iphone-stack__front" })));
}
function SeniorArtSvg_unused() {
  return /* @__PURE__ */ React.createElement("div", { className: "phone-art" }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 140 220", xmlns: "http://www.w3.org/2000/svg", "aria-label": "\uD6A8\uB3C4\uD3F0" }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "sr-frame", x1: "0", x2: "0", y1: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0", stopColor: "#F6F8FC" }), /* @__PURE__ */ React.createElement("stop", { offset: "0.5", stopColor: "#D8DEEA" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#E4E9F2" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "sr-screen", x1: "0", x2: "0", y1: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0", stopColor: "#FCFDFF" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#EAF1FB" })), /* @__PURE__ */ React.createElement("filter", { id: "sr-shadow", x: "-30%", y: "-10%", width: "160%", height: "130%" }, /* @__PURE__ */ React.createElement("feDropShadow", { dx: "0", dy: "10", stdDeviation: "10", floodColor: "#1A3A8A", floodOpacity: "0.14" }))), /* @__PURE__ */ React.createElement("ellipse", { cx: "70", cy: "212", rx: "44", ry: "4", fill: "#1A3A8A", opacity: "0.10" }), /* @__PURE__ */ React.createElement("rect", { x: "14", y: "6", width: "112", height: "200", rx: "22", fill: "url(#sr-frame)", filter: "url(#sr-shadow)" }), /* @__PURE__ */ React.createElement("rect", { x: "14.5", y: "6.5", width: "111", height: "199", rx: "21.5", fill: "none", stroke: "rgba(0,0,0,0.08)", strokeWidth: "0.6" }), /* @__PURE__ */ React.createElement("rect", { x: "20", y: "22", width: "100", height: "140", rx: "10", fill: "url(#sr-screen)" }), /* @__PURE__ */ React.createElement("rect", { x: "20", y: "22", width: "100", height: "140", rx: "10", fill: "none", stroke: "rgba(0,108,255,0.10)", strokeWidth: "0.6" }), /* @__PURE__ */ React.createElement("text", { x: "70", y: "55", textAnchor: "middle", fontFamily: "-apple-system, system-ui", fontSize: "20", fontWeight: "700", fill: "#0E2A6B" }, "10:24"), /* @__PURE__ */ React.createElement("text", { x: "70", y: "70", textAnchor: "middle", fontFamily: "-apple-system, system-ui", fontSize: "9", fontWeight: "500", fill: "#5C6B85" }, "\uD654\uC694\uC77C"), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("rect", { x: "28", y: "82", width: "36", height: "32", rx: "8", fill: "#006CFF" }), /* @__PURE__ */ React.createElement("path", { d: "M 38 92 L 46 92 L 48 96 L 46 100 L 50 104 L 54 102 L 56 110 L 50 110 Q 38 110 38 92 Z", fill: "#fff", opacity: "0.95", transform: "translate(-1, 0)" }), /* @__PURE__ */ React.createElement("text", { x: "46", y: "124", textAnchor: "middle", fontFamily: "-apple-system", fontSize: "7", fontWeight: "600", fill: "#0E2A6B" }, "\uC804\uD654"), /* @__PURE__ */ React.createElement("rect", { x: "76", y: "82", width: "36", height: "32", rx: "8", fill: "#5BD08A" }), /* @__PURE__ */ React.createElement("rect", { x: "84", y: "91", width: "20", height: "14", rx: "2", fill: "#fff" }), /* @__PURE__ */ React.createElement("path", { d: "M 88 105 L 88 110 L 93 105 Z", fill: "#fff" }), /* @__PURE__ */ React.createElement("text", { x: "94", y: "124", textAnchor: "middle", fontFamily: "-apple-system", fontSize: "7", fontWeight: "600", fill: "#0E2A6B" }, "\uBA54\uC2DC\uC9C0")), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("rect", { x: "28", y: "135", width: "36", height: "20", rx: "6", fill: "#EAF2FF", stroke: "#B7CFFF", strokeWidth: "0.6" }), /* @__PURE__ */ React.createElement("text", { x: "46", y: "148", textAnchor: "middle", fontFamily: "-apple-system", fontSize: "8", fontWeight: "700", fill: "#006CFF" }, "\uCE74\uCE74\uC624"), /* @__PURE__ */ React.createElement("rect", { x: "76", y: "135", width: "36", height: "20", rx: "6", fill: "#EAF2FF", stroke: "#B7CFFF", strokeWidth: "0.6" }), /* @__PURE__ */ React.createElement("text", { x: "94", y: "148", textAnchor: "middle", fontFamily: "-apple-system", fontSize: "8", fontWeight: "700", fill: "#006CFF" }, "\uC0AC\uC9C4")), /* @__PURE__ */ React.createElement("circle", { cx: "70", cy: "183", r: "11", fill: "#fff", stroke: "rgba(0,0,0,0.12)", strokeWidth: "0.8" }), /* @__PURE__ */ React.createElement("rect", { x: "65", y: "181", width: "10", height: "4", rx: "2", fill: "none", stroke: "rgba(0,0,0,0.25)", strokeWidth: "0.8" })));
}
Object.assign(window, { Hero, TrustSection, ProductsSection });

/* 전역 노출 */
if (typeof InteractiveRipple !== "undefined") globalThis.InteractiveRipple = InteractiveRipple;
if (typeof Hero !== "undefined") globalThis.Hero = Hero;
if (typeof TrustSection !== "undefined") globalThis.TrustSection = TrustSection;
if (typeof ProductsSection !== "undefined") globalThis.ProductsSection = ProductsSection;
if (typeof SpecModal !== "undefined") globalThis.SpecModal = SpecModal;
if (typeof PhoneArt !== "undefined") globalThis.PhoneArt = PhoneArt;
if (typeof IPhoneArt !== "undefined") globalThis.IPhoneArt = IPhoneArt;
if (typeof IPhoneArtSvg_unused !== "undefined") globalThis.IPhoneArtSvg_unused = IPhoneArtSvg_unused;
if (typeof GalaxyArt !== "undefined") globalThis.GalaxyArt = GalaxyArt;
if (typeof GalaxyArtSvg_unused !== "undefined") globalThis.GalaxyArtSvg_unused = GalaxyArtSvg_unused;
if (typeof FoldArt !== "undefined") globalThis.FoldArt = FoldArt;
if (typeof FoldArtSvg_unused !== "undefined") globalThis.FoldArtSvg_unused = FoldArtSvg_unused;
if (typeof SeniorArt !== "undefined") globalThis.SeniorArt = SeniorArt;
if (typeof SeniorArtSvg_unused !== "undefined") globalThis.SeniorArtSvg_unused = SeniorArtSvg_unused;
})();
/* /showcase.jsx?v=5391dbfc */
(function(){
const { useState: useStateS, useEffect: useEffectS, useRef: useRefS, useMemo: useMemoS } = React;
const COLOR_HEX = {
  "\uBE14\uB799": "#1c1c1f",
  "\uD654\uC774\uD2B8": "#f4f4f2",
  "\uBE14\uB8E8": "#4f7bb8",
  "\uADF8\uB9B0": "#9bb89e",
  "\uB77C\uBCA4\uB354": "#c8b8d4",
  "\uC138\uC774\uC9C0": "#a8b59a",
  "\uBBF8\uC2A4\uD2B8 \uBE14\uB8E8": "#9fb6c8",
  "\uC2E4\uBC84": "#d8d8da",
  "\uB525 \uBE14\uB8E8": "#1f3358",
  "\uCF54\uC2A4\uBBF9 \uC624\uB80C\uC9C0": "#d4501f",
  "\uC2A4\uD398\uC774\uC2A4 \uBE14\uB799": "#1a1a1e",
  "\uC2A4\uCE74\uC774 \uBE14\uB8E8": "#b9d4e6",
  "\uB77C\uC774\uD2B8 \uACE8\uB4DC": "#e8d7b5",
  "\uD074\uB77C\uC6B0\uB4DC \uD654\uC774\uD2B8": "#f0eee9",
  "\uCC28\uCF5C \uBE14\uB799": "#2a2a2e",
  "\uD551\uD06C \uACE8\uB4DC": "#d8b4a8",
  "\uCF54\uBC1C\uD2B8 \uBC14\uC774\uC62C\uB81B": "#4a3a6e",
  "\uBE14\uB799": "#1a1a1e",
  "\uC2E4\uBC84 \uC250\uB3C4\uC6B0": "#b8b8be",
  "\uD2F0\uD0C0\uB284 \uC2E4\uBC84": "#c0c0c2",
  "\uD2F0\uD0C0\uB284 \uBE14\uB799": "#2a2a2e",
  "\uD2F0\uD0C0\uB284 \uADF8\uB808\uC774": "#6d6e72",
  "\uD2F0\uD0C0\uB284 \uD654\uC774\uD2B8": "#ebebe8",
  "\uC81C\uC774\uB4DC \uADF8\uB9B0": "#6d8472",
  "\uBE14\uB8E8 \uC100\uB3C4": "#5a6f88",
  "\uC2E4\uBC84 \uC100\uB3C4": "#a8aab0",
  "\uCF54\uB784 \uB808\uB4DC": "#c46862",
  "\uC81C\uD2B8\uBE14\uB799": "#1a1a1e",
  "\uBBFC\uD2B8": "#aac9b6",
  "\uD551\uD06C": "#e2a8b2",
  "\uADF8\uB77C\uD30C\uC774\uD2B8": "#3a3a3e",
  "\uD06C\uB9BC": "#f0e9da",
  "\uD53C\uC2A4\uD0C0\uCE58\uC624": "#cbd5a8",
  "\uBC14\uC774\uC62C\uB81B \uC250\uB3C4\uC6B0": "#4a3b52",
  "\uADF8\uB9B0 \uC250\uB3C4\uC6B0": "#3f4a41"
};
const SHOWCASE = {
  iPhone: {
    label: "iPhone",
    eyebrow: "Apple iPhone 17 \uC2DC\uB9AC\uC988",
    models: [
      {
        id: "iphone-17",
        name: "iPhone 17",
        tagline: "\uAE30\uBCF8\uAE30\uC5D0 \uCDA9\uC2E4\uD55C \uBA54\uC778 \uBAA8\uB378.",
        img: "assets/iphone-17-lavender.webp",
        priceFrom: "1,287,000",
        spec: [["\uB514\uC2A4\uD50C\uB808\uC774", "6.3\u2033 Super Retina XDR"], ["\uD504\uB85C\uC138\uC11C", "A19"], ["\uCE74\uBA54\uB77C", "48MP \uB4C0\uC5BC"], ["\uBC30\uD130\uB9AC", "\uC601\uC0C1 27\uC2DC\uAC04"]],
        colors: ["\uB77C\uBCA4\uB354", "\uC138\uC774\uC9C0", "\uBBF8\uC2A4\uD2B8 \uBE14\uB8E8", "\uD654\uC774\uD2B8", "\uBE14\uB799"],
        colorImages: { "\uB77C\uBCA4\uB354": "assets/iphone-17-lavender.webp" },
        productKey: "iPhone \uC2DC\uB9AC\uC988"
      },
      {
        id: "iphone-17-pro",
        name: "iPhone 17 Pro",
        tagline: "\uD504\uB85C \uB4F1\uAE09 \uCE74\uBA54\uB77C, \uD2F0\uD0C0\uB284 \uD504\uB808\uC784.",
        img: "assets/iphone-17-pro.webp",
        priceFrom: "1,782,000",
        spec: [["\uB514\uC2A4\uD50C\uB808\uC774", "6.3\u2033 ProMotion 120Hz"], ["\uD504\uB85C\uC138\uC11C", "A19 Pro"], ["\uCE74\uBA54\uB77C", "48MP \uD2B8\uB9AC\uD50C + 5\xD7 \uB9DD\uC6D0"], ["\uBC30\uD130\uB9AC", "\uC601\uC0C1 33\uC2DC\uAC04"]],
        colors: ["\uC2E4\uBC84", "\uB525 \uBE14\uB8E8", "\uCF54\uC2A4\uBBF9 \uC624\uB80C\uC9C0"],
        productKey: "iPhone \uC2DC\uB9AC\uC988"
      },
      {
        id: "iphone-17-pro-max",
        name: "iPhone 17 Pro Max",
        tagline: "\uAC00\uC7A5 \uD070 \uD654\uBA74, \uAC00\uC7A5 \uAE34 \uBC30\uD130\uB9AC.",
        img: "assets/iphone-17-pro-max.webp",
        priceFrom: "1,980,000",
        spec: [["\uB514\uC2A4\uD50C\uB808\uC774", "6.9\u2033 ProMotion 120Hz"], ["\uD504\uB85C\uC138\uC11C", "A19 Pro"], ["\uCE74\uBA54\uB77C", "48MP \uD2B8\uB9AC\uD50C + 5\xD7 \uB9DD\uC6D0"], ["\uBC30\uD130\uB9AC", "\uC601\uC0C1 39\uC2DC\uAC04"]],
        colors: ["\uC2E4\uBC84", "\uB525 \uBE14\uB8E8", "\uCF54\uC2A4\uBBF9 \uC624\uB80C\uC9C0"],
        productKey: "iPhone \uC2DC\uB9AC\uC988"
      },
      {
        id: "iphone-air",
        name: "iPhone Air",
        tagline: "\uB450\uAED8 5.6mm, 165g. \uCD08\uACBD\uB7C9.",
        img: "assets/iphone-air.webp",
        priceFrom: "1,584,000",
        spec: [["\uB514\uC2A4\uD50C\uB808\uC774", "6.5\u2033 Super Retina XDR"], ["\uD504\uB85C\uC138\uC11C", "A19 Pro"], ["\uCE74\uBA54\uB77C", "48MP \uB4C0\uC5BC"], ["\uBC30\uD130\uB9AC", "\uC601\uC0C1 27\uC2DC\uAC04"]],
        colors: ["\uC2A4\uCE74\uC774 \uBE14\uB8E8", "\uB77C\uC774\uD2B8 \uACE8\uB4DC", "\uD074\uB77C\uC6B0\uB4DC \uD654\uC774\uD2B8", "\uC2A4\uD398\uC774\uC2A4 \uBE14\uB799"],
        productKey: "iPhone \uC2DC\uB9AC\uC988"
      },
      {
        id: "iphone-17e",
        name: "iPhone 17e",
        tagline: "\uD569\uB9AC\uC801 \uAC00\uACA9, \uD575\uC2EC\uB9CC \uB2F4\uC740 \uBAA8\uB378.",
        img: "assets/iphone-17e.webp",
        priceFrom: "850,000",
        spec: [["\uB514\uC2A4\uD50C\uB808\uC774", "6.1\u2033 Liquid Retina"], ["\uD504\uB85C\uC138\uC11C", "A19"], ["\uCE74\uBA54\uB77C", "48MP \uC2F1\uAE00"], ["\uBC30\uD130\uB9AC", "\uC601\uC0C1 22\uC2DC\uAC04"]],
        colors: ["\uD654\uC774\uD2B8", "\uBE14\uB799", "\uD551\uD06C"],
        productKey: "iPhone \uC2DC\uB9AC\uC988"
      }
    ]
  },
  Galaxy: {
    label: "Galaxy",
    eyebrow: "Samsung Galaxy \uB77C\uC778\uC5C5",
    models: [
      {
        id: "galaxy-s26-ultra",
        name: "Galaxy S26 Ultra",
        tagline: "200MP \uCE74\uBA54\uB77C, S\uD39C \uB0B4\uC7A5.",
        img: "assets/galaxy-s26-ultra.webp",
        priceFrom: "1,797,400",
        spec: [["\uB514\uC2A4\uD50C\uB808\uC774", "6.9\u2033 QHD+ 120Hz"], ["\uD504\uB85C\uC138\uC11C", "Snapdragon 8 Elite"], ["\uCE74\uBA54\uB77C", "200MP \uCFFC\uB4DC"], ["\uBC30\uD130\uB9AC", "5,000mAh"]],
        colors: ["\uCF54\uBC1C\uD2B8 \uBC14\uC774\uC62C\uB81B", "\uC2A4\uCE74\uC774 \uBE14\uB8E8", "\uBE14\uB799", "\uD654\uC774\uD2B8"],
        productKey: "Galaxy S \uC2DC\uB9AC\uC988"
      },
      {
        id: "galaxy-s26-plus",
        name: "Galaxy S26+",
        tagline: "\uD55C \uC190\uC5D0 \uC7A1\uD788\uB294 \uD504\uB9AC\uBBF8\uC5C4.",
        img: "assets/galaxy-s26-plus.webp",
        priceFrom: "1,452,000",
        spec: [["\uB514\uC2A4\uD50C\uB808\uC774", "6.7\u2033 QHD+ 120Hz"], ["\uD504\uB85C\uC138\uC11C", "Snapdragon 8 Elite"], ["\uCE74\uBA54\uB77C", "50MP \uD2B8\uB9AC\uD50C"], ["\uBC30\uD130\uB9AC", "4,900mAh"]],
        colors: ["\uCF54\uBC1C\uD2B8 \uBC14\uC774\uC62C\uB81B", "\uC2A4\uCE74\uC774 \uBE14\uB8E8", "\uBE14\uB799", "\uD654\uC774\uD2B8"],
        productKey: "Galaxy S \uC2DC\uB9AC\uC988"
      },
      {
        id: "galaxy-s26",
        name: "Galaxy S26",
        tagline: "\uCF64\uD329\uD2B8 \uD50C\uB798\uADF8\uC2ED.",
        img: "assets/galaxy-s26.webp",
        priceFrom: "1,254,000",
        spec: [["\uB514\uC2A4\uD50C\uB808\uC774", "6.2\u2033 FHD+ 120Hz"], ["\uD504\uB85C\uC138\uC11C", "Snapdragon 8 Elite"], ["\uCE74\uBA54\uB77C", "50MP \uD2B8\uB9AC\uD50C"], ["\uBC30\uD130\uB9AC", "4,000mAh"]],
        colors: ["\uCF54\uBC1C\uD2B8 \uBC14\uC774\uC62C\uB81B", "\uC2A4\uCE74\uC774 \uBE14\uB8E8", "\uBE14\uB799", "\uD654\uC774\uD2B8"],
        productKey: "Galaxy S \uC2DC\uB9AC\uC988"
      },
      {
        id: "galaxy-zfold8-ultra",
        name: "Galaxy Fold8 Ultra",
        tagline: "8\uD615 \uB300\uD654\uBA74\uACFC 200MP \u2014 \uD3F4\uB4DC\uC758 \uC815\uC810.",
        img: "assets/galaxy-fold8-ultra-violet.webp",
        priceFrom: "2,577,300",
        spec: [["\uB514\uC2A4\uD50C\uB808\uC774", "\uBA54\uC778 8.0\u2033 (2504\xD72256)"], ["\uD504\uB85C\uC138\uC11C", "Snapdragon 8 Elite Gen 5"], ["\uCE74\uBA54\uB77C", "200MP \uD2B8\uB9AC\uD50C + 10MP \uB9DD\uC6D0"], ["\uBC30\uD130\uB9AC", "5,000mAh \xB7 215g"]],
        colors: ["\uADF8\uB77C\uD30C\uC774\uD2B8", "\uD06C\uB9BC", "\uBC14\uC774\uC62C\uB81B \uC250\uB3C4\uC6B0", "\uADF8\uB9B0 \uC250\uB3C4\uC6B0"],
        productKey: "Galaxy Fold / Flip"
      },
      {
        id: "galaxy-zfold8",
        name: "Galaxy Fold8",
        tagline: "\uAF49 \uCC2C 4:3 \uD654\uBA74, \uC5ED\uB300 \uAC00\uC7A5 \uAC00\uBCBC\uC6B4 \uD3F4\uB4DC.",
        img: "assets/galaxy-fold8-lavender.webp",
        priceFrom: "2,278,100",
        spec: [["\uB514\uC2A4\uD50C\uB808\uC774", "\uBA54\uC778 7.6\u2033 4:3 \uBE44\uC728"], ["\uD504\uB85C\uC138\uC11C", "Snapdragon 8 Elite Gen 5"], ["\uCE74\uBA54\uB77C", "50MP \uB4C0\uC5BC"], ["\uBC30\uD130\uB9AC", "4,800mAh \xB7 201g"]],
        colors: ["\uADF8\uB77C\uD30C\uC774\uD2B8", "\uD06C\uB9BC", "\uB77C\uBCA4\uB354", "\uD53C\uC2A4\uD0C0\uCE58\uC624"],
        productKey: "Galaxy Fold / Flip"
      },
      {
        id: "galaxy-zflip8",
        name: "Galaxy Flip8",
        tagline: "\uC8FC\uB984\uC744 \uC9C0\uC6B4 \uCEF4\uD329\uD2B8 \uD3F4\uB4DC.",
        img: "assets/galaxy-flip8-graphite.webp",
        priceFrom: "1,683,000",
        spec: [["\uB514\uC2A4\uD50C\uB808\uC774", "\uBA54\uC778 6.9\u2033 FHD+ LTPO"], ["\uD504\uB85C\uC138\uC11C", "Snapdragon 8 Elite Gen 5"], ["\uCE74\uBA54\uB77C", "50MP \uB4C0\uC5BC"], ["\uBC30\uD130\uB9AC", "4,174mAh(\uC815\uACA9)"]],
        colors: ["\uADF8\uB77C\uD30C\uC774\uD2B8", "\uD06C\uB9BC", "\uD551\uD06C", "\uBBFC\uD2B8"],
        productKey: "Galaxy Fold / Flip"
      }
    ]
  }
};
function LineupShowcase() {
  const [brand, setBrand] = useStateS("iPhone");
  const [modelIdx, setModelIdx] = useStateS(0);
  const [colorIdx, setColorIdx] = useStateS(0);
  const [openSpec, setOpenSpec] = useStateS(null);
  const stageRef = useRefS(null);
  const [tilt, setTilt] = useStateS({ x: 0, y: 0 });
  const models = SHOWCASE[brand].models;
  const model = models[Math.min(modelIdx, models.length - 1)];
  const color = model.colors[Math.min(colorIdx, model.colors.length - 1)];
  const tint = COLOR_HEX[color] || "#5a7eb8";
  useEffectS(() => {
    setModelIdx(0);
    setColorIdx(0);
  }, [brand]);
  useEffectS(() => {
    setColorIdx(0);
  }, [modelIdx]);
  useEffectS(() => {
    const el = stageRef.current;
    if (!el) return;
    if (matchMedia("(hover: none)").matches) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      setTilt({ x, y });
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  const [gyroActive, setGyroActive] = useStateS(false);
  const [gyroStatus, setGyroStatus] = useStateS("idle");
  const [isTouch, setIsTouch] = useStateS(false);
  const gyroAttemptedRef = useRefS(false);
  useEffectS(() => {
    const touch = matchMedia("(hover: none) and (pointer: coarse)").matches || "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasSensor = "DeviceOrientationEvent" in window;
    setIsTouch(touch && hasSensor && !reduce);
  }, []);
  useEffectS(() => {
    if (!gyroActive) return;
    let baseline = null;
    let baselineSamples = 0;
    const BASELINE_N = 6;
    let target = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };
    let rafId = null;
    let running = true;
    const loop = () => {
      if (!running) return;
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;
      setTilt({ x: current.x, y: current.y });
      if (Math.abs(target.x - current.x) > 2e-3 || Math.abs(target.y - current.y) > 2e-3) {
        rafId = requestAnimationFrame(loop);
      } else {
        current.x = target.x;
        current.y = target.y;
        setTilt({ x: current.x, y: current.y });
        rafId = null;
      }
    };
    const kick = () => {
      if (running && rafId == null) rafId = requestAnimationFrame(loop);
    };
    const getAngle = () => {
      if (screen.orientation && typeof screen.orientation.angle === "number") return screen.orientation.angle;
      if (typeof window.orientation === "number") return window.orientation;
      return 0;
    };
    const handler = (e) => {
      if (e.gamma == null || e.beta == null) return;
      if (baselineSamples < BASELINE_N) {
        if (!baseline) baseline = { gamma: e.gamma, beta: e.beta };
        else {
          baseline.gamma = (baseline.gamma * baselineSamples + e.gamma) / (baselineSamples + 1);
          baseline.beta = (baseline.beta * baselineSamples + e.beta) / (baselineSamples + 1);
        }
        baselineSamples++;
        return;
      }
      const angle = getAngle();
      const landscape = angle === 90 || angle === -90 || angle === 270;
      const dg = e.gamma - baseline.gamma;
      const db = e.beta - baseline.beta;
      let rawX = landscape ? db : dg;
      let rawY = landscape ? -dg : db;
      if (angle === -90 || angle === 270) rawX = -rawX;
      target.x = Math.max(-1, Math.min(1, rawX / 10));
      target.y = Math.max(-1, Math.min(1, rawY / 10));
      kick();
    };
    const onOrientationChange = () => {
      baseline = null;
      baselineSamples = 0;
    };
    window.addEventListener("deviceorientation", handler, true);
    window.addEventListener("orientationchange", onOrientationChange);
    if (screen.orientation) screen.orientation.addEventListener("change", onOrientationChange);
    rafId = requestAnimationFrame(loop);
    return () => {
      running = false;
      window.removeEventListener("deviceorientation", handler, true);
      window.removeEventListener("orientationchange", onOrientationChange);
      if (screen.orientation) screen.orientation.removeEventListener("change", onOrientationChange);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [gyroActive]);
  const tryEnableGyro = async () => {
    if (gyroActive || gyroAttemptedRef.current) return;
    if (typeof window === "undefined") return;
    if (!("DeviceOrientationEvent" in window)) {
      setGyroStatus("unsupported");
      return;
    }
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gyroAttemptedRef.current = true;
    try {
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        const state = await DeviceOrientationEvent.requestPermission();
        if (state !== "granted") {
          setGyroStatus("denied");
          gyroAttemptedRef.current = false;
          return;
        }
      }
      setGyroActive(true);
      setGyroStatus("on");
    } catch (e) {
      setGyroStatus("denied");
      gyroAttemptedRef.current = false;
    }
  };
  return /* @__PURE__ */ React.createElement("section", { className: "section showcase-section", id: "showcase" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "showcase-head" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), "SHOWCASE"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, /* @__PURE__ */ React.createElement("span", { className: "h-thin" }, "\uAD11\uACE0\uC5D0\uC11C \uBCF8 \uADF8 \uBAA8\uB378."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "h-bold" }, "\uB9E4\uC7A5\uC5D0\uC120 \uC5B4\uB5BB\uAC8C \uB2E4\uB978\uC9C0.")), /* @__PURE__ */ React.createElement("p", { className: "section-sub" }, "\uAE30\uAE30\uB97C \uACE0\uB974\uACE0, \uC0C9\uC0C1\uC744 \uBCF4\uACE0, \uC0AC\uC591\uC744 \uBE44\uAD50\uD558\uC138\uC694. \uC870\uAC74\uC740 \uB9E4\uC7A5\uC5D0\uC11C \uC9C1\uC811 \uC548\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("div", { className: "showcase-brands", role: "tablist", "aria-label": "\uBE0C\uB79C\uB4DC \uC120\uD0DD" }, Object.keys(SHOWCASE).map((b) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: b,
      role: "tab",
      "aria-selected": brand === b,
      className: "showcase-brand" + (brand === b ? " is-active" : ""),
      onClick: () => {
        setBrand(b);
        tryEnableGyro();
      }
    },
    SHOWCASE[b].label
  ))), isTouch && /* @__PURE__ */ React.createElement("div", { className: "showcase-gyro" }, gyroStatus === "on" ? /* @__PURE__ */ React.createElement("span", { className: "showcase-gyro__on" }, /* @__PURE__ */ React.createElement("span", { className: "showcase-gyro__dot" }), " \uD3F0\uC744 \uC88C\uC6B0\uB85C \uAE30\uC6B8\uC5EC\uBCF4\uC138\uC694") : /* @__PURE__ */ React.createElement("span", { className: "showcase-gyro__caption" }, "\uD654\uBA74 \uC18D \uD3F0\uC744 \uD130\uCE58\uD558\uBA74 \uAE30\uC6B8\uAE30 \uD6A8\uACFC\uAC00 \uCF1C\uC9D1\uB2C8\uB2E4", gyroStatus === "denied" && /* @__PURE__ */ React.createElement("em", { className: "showcase-gyro__hint" }, " \xB7 \uC124\uC815\uC5D0\uC11C \uBAA8\uC158 \uD5C8\uC6A9 \uD544\uC694")))), /* @__PURE__ */ React.createElement("div", { className: "showcase-stage", ref: stageRef, onClick: tryEnableGyro, onTouchStart: tryEnableGyro }, /* @__PURE__ */ React.createElement("div", { className: "showcase-stage__halo", style: {
    background: `radial-gradient(circle at 50% 50%, ${tint}66 0%, ${tint}1a 32%, transparent 62%)`
  } }), /* @__PURE__ */ React.createElement("div", { className: "showcase-stage__phone-wrap", style: {
    transform: `translate3d(${tilt.x * -18}px, ${tilt.y * -10}px, 0) rotateX(${tilt.y * -12}deg) rotateY(${tilt.x * 18}deg)`,
    "--gx": tilt.x,
    "--gy": tilt.y,
    "--gmag": Math.min(1, Math.hypot(tilt.x, tilt.y)),
    "--phone-img": `url("${model.colorImages && model.colorImages[color] || model.img}")`
  } }, SHOWCASE[brand].models.map((m, i) => {
    const activeImg = i === modelIdx && m.colorImages && m.colorImages[color] || m.img;
    return /* @__PURE__ */ React.createElement(
      "img",
      {
        key: m.id,
        src: activeImg,
        alt: m.name,
        className: "showcase-phone" + (i === modelIdx ? " is-active" : ""),
        loading: i === 0 ? "eager" : "lazy"
      }
    );
  }), /* @__PURE__ */ React.createElement("div", { className: "showcase-glare", "aria-hidden": "true" })), /* @__PURE__ */ React.createElement("div", { className: "showcase-stage__mark", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", null, SHOWCASE[brand].eyebrow))), /* @__PURE__ */ React.createElement("div", { className: "showcase-info" }, /* @__PURE__ */ React.createElement("div", { className: "showcase-info__left" }, /* @__PURE__ */ React.createElement("div", { className: "showcase-info__model-name" }, model.name), /* @__PURE__ */ React.createElement("div", { className: "showcase-info__tag" }, model.tagline), model.colors.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "showcase-info__color" }, /* @__PURE__ */ React.createElement("span", { className: "showcase-info__color-label-static" }, "\uC0C9\uC0C1 \u2014 ", /* @__PURE__ */ React.createElement("strong", null, color)), /* @__PURE__ */ React.createElement("div", { className: "showcase-color-toggle", role: "radiogroup", "aria-label": "\uC0C9\uC0C1 \uC120\uD0DD" }, model.colors.map((c, i) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: c,
      type: "button",
      role: "radio",
      "aria-checked": i === colorIdx,
      title: c,
      className: "showcase-swatch" + (i === colorIdx ? " is-active" : ""),
      onClick: () => {
        setColorIdx(i);
        tryEnableGyro();
      }
    },
    /* @__PURE__ */ React.createElement("span", { className: "showcase-swatch__dot", style: { background: COLOR_HEX[c] || "#999" } }),
    /* @__PURE__ */ React.createElement("span", { className: "showcase-swatch__name" }, c)
  ))))), /* @__PURE__ */ React.createElement("div", { className: "showcase-info__right" }, /* @__PURE__ */ React.createElement("dl", { className: "showcase-spec" }, model.spec.map(([k, v]) => /* @__PURE__ */ React.createElement("div", { key: k, className: "showcase-spec__row" }, /* @__PURE__ */ React.createElement("dt", null, k), /* @__PURE__ */ React.createElement("dd", null, v)))), /* @__PURE__ */ React.createElement("div", { className: "showcase-actions" }, /* @__PURE__ */ React.createElement("div", { className: "showcase-price" }, /* @__PURE__ */ React.createElement("span", { className: "showcase-price__label" }, "\uCD9C\uACE0\uAC00"), /* @__PURE__ */ React.createElement("span", { className: "showcase-price__from" }, "\u20A9", model.priceFrom, "~"), /* @__PURE__ */ React.createElement("span", { className: "showcase-price__hint" }, "\uB9E4\uC7A5 \uB2E8\uB3C5 \uC870\uAC74 \uBC29\uBB38 \uC2DC \uC548\uB0B4")), /* @__PURE__ */ React.createElement("div", { className: "showcase-buttons" }, /* @__PURE__ */ React.createElement("button", { className: "apple-link", onClick: () => setOpenSpec(model.productKey) }, "\uC804\uCCB4 \uC2A4\uD399 \uBCF4\uAE30 ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 13 })), /* @__PURE__ */ React.createElement("a", { className: "apple-link apple-link--accent", href: "#booking" }, "\uC0C1\uB2F4 \uC608\uC57D\uD558\uAE30 ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 13 })))))), /* @__PURE__ */ React.createElement("div", { className: "showcase-rail", role: "tablist", "aria-label": "\uBAA8\uB378 \uC120\uD0DD" }, models.map((m, i) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: m.id,
      role: "tab",
      "aria-selected": modelIdx === i,
      className: "showcase-rail__item" + (modelIdx === i ? " is-active" : ""),
      onClick: () => {
        setModelIdx(i);
        tryEnableGyro();
      }
    },
    /* @__PURE__ */ React.createElement("span", { className: "showcase-rail__thumb" }, /* @__PURE__ */ React.createElement("img", { src: m.img, alt: "", loading: "lazy" })),
    /* @__PURE__ */ React.createElement("span", { className: "showcase-rail__name" }, m.name),
    /* @__PURE__ */ React.createElement("span", { className: "showcase-rail__price" }, "\u20A9", m.priceFrom, "~")
  )))), openSpec && /* @__PURE__ */ React.createElement(SpecModal, { productName: openSpec, onClose: () => setOpenSpec(null) }));
}
window.LineupShowcase = LineupShowcase;

/* 전역 노출 */
if (typeof LineupShowcase !== "undefined") globalThis.LineupShowcase = LineupShowcase;
})();
/* /sections-mid.jsx?v=b7833e94 */
(function(){
function PlansSection() {
  const items = [
    { ic: "data", t: "\uB370\uC774\uD130 \uC0AC\uC6A9\uB7C9 \uBD84\uC11D", s: "\uC6D4 \uD3C9\uADE0 \uC0AC\uC6A9\uB7C9\uC744 \uAE30\uC900\uC73C\uB85C \uC801\uC815 \uAD6C\uAC04\uC744 \uC548\uB0B4" },
    { ic: "family", t: "\uAC00\uC871 \uACB0\uD569 \uAC00\uB2A5 \uC5EC\uBD80 \uD655\uC778", s: "\uD68C\uC120 \uC218\xB7\uC5F0\uB839\uB300\xB7\uD1B5\uC2E0\uC0AC\uB97C \uD568\uAED8 \uC810\uAC80" },
    { ic: "wifi", t: "\uC778\uD130\uB137/TV \uACB0\uD569 \uD560\uC778 \uC548\uB0B4", s: "\uAE30\uC874 \uC57D\uC815\uACFC \uC2E0\uADDC \uACB0\uD569 \uC870\uAC74 \uBE44\uAD50" },
    { ic: "compare", t: "\uAE30\uAE30\uBCC0\uACBD/\uBC88\uD638\uC774\uB3D9 \uBE44\uAD50", s: "\uAC01 \uC2DC\uB098\uB9AC\uC624\uBCC4 \uC6D4 \uB0A9\uBD80\uAE08 \uCC28\uC774 \uC815\uB9AC" },
    { ic: "wallet", t: "\uC6D4 \uB0A9\uBD80\uAE08 \uAE30\uC900 \uC0C1\uB2F4", s: "\uAE30\uAE30\uAC12+\uC694\uAE08\uC81C \uD569\uC0B0 \uAE30\uC900\uC73C\uB85C \uC548\uB0B4" }
  ];
  return /* @__PURE__ */ React.createElement("section", { className: "section", id: "plans" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), "AI PLANS")), /* @__PURE__ */ React.createElement("div", { className: "plan-grid" }, /* @__PURE__ */ React.createElement(Reveal, { className: "plan-text" }, /* @__PURE__ */ React.createElement("h3", null, "AI\uAC00 \uC218\uBC31 \uAC00\uC9C0 \uC870\uD569\uC744 \uBE44\uAD50\uD574,", /* @__PURE__ */ React.createElement("br", null), "\uAC00\uC7A5 \uC800\uB834\uD55C \uC694\uAE08\uC744 \uCC3E\uC544\uB4DC\uB9BD\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("p", null, "\uD734\uB300\uD3F0\uC5D0\uC11C \uC9C4\uC9DC \uC911\uC694\uD55C \uAC74 \uAE30\uAE30\uAC12\uC774 \uC544\uB2C8\uB77C \uB9E4\uB2EC \uB098\uAC00\uB294 \uD1B5\uC2E0\uBE44\uC785\uB2C8\uB2E4. \uACF5\uC77C\uBAA8\uBC14\uC77C\uC740 ", /* @__PURE__ */ React.createElement("b", { style: { color: "var(--ink-headline)", fontWeight: 600 } }, "AI \uC694\uAE08 \uBD84\uC11D \uC0C1\uB2F4"), "\uC73C\uB85C \uD1B5\uC2E0\uC0AC\xB7\uC694\uAE08\uC81C\xB7\uACB0\uD569\xB7\uC57D\uC815 \uC870\uAC74\uC744 \uAD50\uCC28 \uBD84\uC11D\uD574 ", /* @__PURE__ */ React.createElement("b", { style: { color: "var(--ink-headline)", fontWeight: 600 } }, "\uC218\uBC31 \uAC00\uC9C0 \uC870\uD569"), "\uC744 \uBE44\uAD50\uD558\uACE0, \uADF8\uC911 \uACE0\uAC1D\uB2D8\uAED8 \uAC00\uC7A5 \uC800\uB834\uD55C \uC870\uD569\uC744 \uCC3E\uC544\uB4DC\uB9BD\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("div", { className: "plan-engine" }, /* @__PURE__ */ React.createElement("div", { className: "plan-engine__item" }, /* @__PURE__ */ React.createElement("div", { className: "plan-engine__ico" }, /* @__PURE__ */ React.createElement(Icon, { name: "chat", size: 18 })), /* @__PURE__ */ React.createElement("div", { className: "plan-engine__tx" }, /* @__PURE__ */ React.createElement("span", { className: "plan-engine__tag" }, "\uC0C1\uB2F4 \uBCF4\uC870"), /* @__PURE__ */ React.createElement("b", null, "LLM \uAE30\uBC18 \uC0C1\uB2F4 AI"), /* @__PURE__ */ React.createElement("span", { className: "plan-engine__desc" }, "\uACE0\uAC1D\uB2D8\uC758 \uC0AC\uC6A9 \uD328\uD134\xB7\uD1B5\uC2E0 \uC0C1\uD669\uC744 \uB300\uD654\uB85C \uC774\uD574\uD558\uACE0 \uC815\uB9AC\uD569\uB2C8\uB2E4."))), /* @__PURE__ */ React.createElement("div", { className: "plan-engine__plus" }, "+"), /* @__PURE__ */ React.createElement("div", { className: "plan-engine__item" }, /* @__PURE__ */ React.createElement("div", { className: "plan-engine__ico" }, /* @__PURE__ */ React.createElement(Icon, { name: "spark", size: 18 })), /* @__PURE__ */ React.createElement("div", { className: "plan-engine__tx" }, /* @__PURE__ */ React.createElement("span", { className: "plan-engine__tag" }, "\uC694\uAE08 \uCD5C\uC801\uD654"), /* @__PURE__ */ React.createElement("b", null, "\uB8F0 \uAE30\uBC18 \uCD5C\uC801\uD654 \uC5D4\uC9C4"), /* @__PURE__ */ React.createElement("span", { className: "plan-engine__desc" }, "\uD1B5\uC2E0\uC0AC \uC694\uAE08\xB7\uD560\uC778 \uADDC\uCE59\uC744 \uC801\uC6A9\uD574 \uAC00\uC7A5 \uC800\uB834\uD55C \uC870\uD569\uC744 \uACC4\uC0B0\uD569\uB2C8\uB2E4.")))), /* @__PURE__ */ React.createElement("div", { className: "plan-stats" }, /* @__PURE__ */ React.createElement("div", { className: "plan-stat" }, /* @__PURE__ */ React.createElement("div", { className: "v" }, "\uC218\uBC31 \uAC00\uC9C0"), /* @__PURE__ */ React.createElement("div", { className: "l" }, "AI \uC694\uAE08 \uC870\uD569 \uBE44\uAD50")), /* @__PURE__ */ React.createElement("div", { className: "plan-stat" }, /* @__PURE__ */ React.createElement("div", { className: "v" }, "\uCD5C\uC800\uAC00"), /* @__PURE__ */ React.createElement("div", { className: "l" }, "\uB9DE\uCDA4 \uC870\uD569 \uCD94\uCC9C")))), /* @__PURE__ */ React.createElement(Reveal, { delay: 120 }, /* @__PURE__ */ React.createElement("div", { className: "checklist-card" }, /* @__PURE__ */ React.createElement("div", { className: "checklist-head" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "t" }, "\uC0C1\uB2F4 \uCCB4\uD06C\uB9AC\uC2A4\uD2B8"), /* @__PURE__ */ React.createElement("div", { className: "v" }, "\uD55C \uBC88\uC5D0 \uC810\uAC80\uD569\uB2C8\uB2E4")), /* @__PURE__ */ React.createElement("div", { className: "badge" }, "FREE")), /* @__PURE__ */ React.createElement("div", { className: "checklist-body" }, items.map(
    (it, i) => /* @__PURE__ */ React.createElement("div", { className: "check-row", key: it.t }, /* @__PURE__ */ React.createElement("div", { className: "tick" }, /* @__PURE__ */ React.createElement(Icon, { name: it.ic, size: 14 })), /* @__PURE__ */ React.createElement("div", { className: "tx" }, /* @__PURE__ */ React.createElement("b", null, it.t), /* @__PURE__ */ React.createElement("span", null, it.s)), /* @__PURE__ */ React.createElement("div", { className: "arrow" }, /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 16 })))
  )))))));
}
function BundleSection() {
  const cards = [
    { ic: "wifi", t: "\uC778\uD130\uB137 \uC2E0\uADDC\uAC00\uC785 \uC0C1\uB2F4", s: "\uD604\uC7AC \uC0AC\uC6A9 \uC911\uC778 \uD1B5\uC2E0\uC0AC\uC640 \uC57D\uC815 \uC0C1\uD0DC\uB97C \n\uD568\uAED8 \uC810\uAC80\uD569\uB2C8\uB2E4." },
    { ic: "tv", t: "TV \uACB0\uD569 \uC0C1\uB2F4", s: "\uC14B\uD1B1\uBC15\uC2A4, IPTV \uC635\uC158\uACFC \uACB0\uD569 \uC2DC \uD560\uC778 \uAC00\uB2A5\uC131\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4." },
    { ic: "family", t: "\uAC00\uC871\uACB0\uD569 \uD560\uC778 \uC0C1\uB2F4", s: "\uAC00\uC871 \uD68C\uC120 \uC218\uC640 \uC5F0\uB839\uB300\uB97C \uAE30\uC900\uC73C\uB85C \n\uACB0\uD569 \uD6A8\uACFC\uB97C \uBE44\uAD50\uD569\uB2C8\uB2E4." },
    { ic: "doc", t: "\uAE30\uC874 \uD1B5\uC2E0\uBE44 \uC810\uAC80", s: "\uD604\uC7AC \uB0A9\uBD80 \uB0B4\uC5ED\uC744 \uAE30\uC900\uC73C\uB85C \n\uC808\uAC10 \uAC00\uB2A5 \uD56D\uBAA9\uC744 \uC815\uB9AC\uD569\uB2C8\uB2E4." }
  ];
  return /* @__PURE__ */ React.createElement("section", { className: "section bundle-section", id: "bundle" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), "BUNDLE"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, /* @__PURE__ */ React.createElement("span", { className: "h-thin" }, "\uC9C4\uC9DC \uC190\uD574\uB294 \uD734\uB300\uD3F0\uAC12\uC774 \uC544\uB2D9\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "h-bold" }, "\uB9E4\uB2EC \uC0C8\uB294 \uD1B5\uC2E0\uBE44\uC785\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement("p", { className: "section-sub" }, "\uD734\uB300\uD3F0, \uC778\uD130\uB137, TV\uB97C \uBB36\uC73C\uBA74 \uB9E4\uB2EC \uD1B5\uC2E0\uBE44\uAC00 \uB2E4\uC2DC \uC9DC\uC9D1\uB2C8\uB2E4. \uAC00\uC871 \uD68C\uC120\uAE4C\uC9C0 \uD569\uCE58\uBA74 1\uB144\uC5D0 100\uB9CC\uC6D0 \uAC00\uAE4C\uC774 \uCC28\uC774 \uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement("div", { className: "bundle-grid" }, cards.map(
    (c, i) => /* @__PURE__ */ React.createElement(Reveal, { key: c.t, delay: i * 70 }, /* @__PURE__ */ React.createElement("article", { className: "bundle-card" }, /* @__PURE__ */ React.createElement("div", { className: "ico" }, /* @__PURE__ */ React.createElement(Icon, { name: c.ic, size: 22 })), /* @__PURE__ */ React.createElement("h4", null, c.t), /* @__PURE__ */ React.createElement("p", { style: { whiteSpace: "pre-line" } }, c.s), /* @__PURE__ */ React.createElement("a", { href: "#booking", className: "more" }, "\uC0C1\uB2F4\uBC1B\uAE30 ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 14 }))))
  )), /* @__PURE__ */ React.createElement(Reveal, { delay: 120 }, /* @__PURE__ */ React.createElement("div", { className: "bundle-cta-card" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, "\uC9C0\uAE08 \uD1B5\uC2E0\uBE44, \uC815\uB9D0 \uD569\uB9AC\uC801\uC77C\uAE4C\uC694?"), /* @__PURE__ */ React.createElement("p", null, "\uD604\uC7AC \uB0A9\uBD80 \uB0B4\uC5ED\uACFC \uAC00\uC871 \uAD6C\uC131\uC744 \uAE30\uC900\uC73C\uB85C \uACB0\uD569\xB7\uD560\uC778 \uAC00\uB2A5 \uC5EC\uBD80\uB97C \uC810\uAC80\uD574 \uB4DC\uB9BD\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement("a", { href: "#booking", className: "btn btn-primary btn-lg", style: { background: "#fff", color: "var(--blue-deep)" } }, "\uD1B5\uC2E0\uBE44 \uC810\uAC80 \uC0C1\uB2F4\uBC1B\uAE30 ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 16 }))))));
}
function RewardSection() {
  const steps = [
    { n: "01", ic: "users", t: "\uB0B4 \uCD94\uCC9C \uB9C1\uD06C \uACF5\uC720", s: "\uD30C\uD2B8\uB108 \uD398\uC774\uC9C0\uC5D0\uC11C \uBC1C\uAE09\uBC1B\uC740 \uB0B4 \uCD94\uCC9C \uB9C1\uD06C\uB97C \uAC00\uC871\xB7\uCE5C\uAD6C\uC5D0\uAC8C \uBCF4\uB0C5\uB2C8\uB2E4." },
    { n: "02", ic: "phone", t: "\uB9C1\uD06C\uB85C \uC2E0\uCCAD\xB7\uAC1C\uD1B5", s: "\uC18C\uAC1C\uBC1B\uC740 \uBD84\uC774 \uB9C1\uD06C\uB85C \uC2E0\uCCAD\uD558\uBA74 \uCD94\uCC9C\uC774 \uC790\uB3D9\uC73C\uB85C \uC811\uC218\uB418\uACE0, \uAC1C\uD1B5\uC774 \uD655\uC778\uB418\uBA74 \uB9E4\uC7A5\uC5D0\uC11C \uD655\uC815\uD569\uB2C8\uB2E4." },
    { n: "03", ic: "wallet", t: "1\uAC74\uB2F9 5\uB9CC\uC6D0 \uB9AC\uC6CC\uB4DC", s: "\uCD94\uCC9C\uD558\uC2E0 \uC9C0\uC778\uC774 \uAC1C\uD1B5\uD558\uBA74 1\uAC74\uB2F9 5\uB9CC\uC6D0\uC744 \uB4DC\uB9BD\uB2C8\uB2E4." }
  ];
  return /* @__PURE__ */ React.createElement("section", { className: "section reward-section", id: "reward" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), "REWARD"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, /* @__PURE__ */ React.createElement("span", { className: "h-thin" }, "\uC88B\uC740 \uACF3\uC740, \uB098\uB204\uACE0 \uC2F6\uC73C\uB2C8\uAE4C."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "h-bold" }, "\uC18C\uAC1C 1\uAC74\uB2F9, 5\uB9CC\uC6D0.")), /* @__PURE__ */ React.createElement("p", { className: "section-sub" }, "\uC9C1\uC811 \uC18C\uAC1C\uD574 \uC8FC\uC2E0 \uC9C0\uC778\uC774 \uAC1C\uD1B5\uD558\uBA74 ", /* @__PURE__ */ React.createElement("b", { style: { color: "var(--ink-headline)", fontWeight: 600 } }, "\uCD94\uCC9C 1\uAC74\uB2F9 5\uB9CC\uC6D0"), "\uC744 \uB4DC\uB9BD\uB2C8\uB2E4. \uBD80\uB2F4 \uC5C6\uC774 \uC18C\uAC1C\uB9CC \uD558\uC154\uB3C4, \uCC28\uACE1\uCC28\uACE1 \uC313\uC785\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement("div", { className: "reward-grid" }, steps.map(
    (s, i) => /* @__PURE__ */ React.createElement(Reveal, { key: s.n, delay: i * 80 }, /* @__PURE__ */ React.createElement("article", { className: "reward-card" }, /* @__PURE__ */ React.createElement("span", { className: "reward-num" }, s.n), /* @__PURE__ */ React.createElement("div", { className: "reward-ico" }, /* @__PURE__ */ React.createElement(Icon, { name: s.ic, size: 24 })), /* @__PURE__ */ React.createElement("h3", null, s.t), /* @__PURE__ */ React.createElement("p", null, s.s)))
  )), /* @__PURE__ */ React.createElement(Reveal, { delay: 120 }, /* @__PURE__ */ React.createElement("div", { className: "reward-cta-card" }, /* @__PURE__ */ React.createElement("div", { className: "reward-cta-text" }, /* @__PURE__ */ React.createElement("div", { className: "reward-cta-tag" }, "\uD30C\uD2B8\uB108 \uB9AC\uC6CC\uB4DC \uD504\uB85C\uADF8\uB7A8"), /* @__PURE__ */ React.createElement("h3", null, "\uAFB8\uC900\uD788 \uC18C\uAC1C\uD558\uBA74 ", /* @__PURE__ */ React.createElement("span", { className: "reward-income" }, "\uC6D4 150\uB9CC\uC6D0+*"), /* @__PURE__ */ React.createElement("br", null), "\uBD80\uC218\uC785\uB3C4 \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("p", null, "\uAC1C\uD1B5 1\uAC74\uB2F9 5\uB9CC\uC6D0. \uD55C \uB2EC\uC5D0 30\uAC74\uC774\uBA74 \uC6D4 150\uB9CC\uC6D0\uC785\uB2C8\uB2E4. \uCE74\uCE74\uC624\uD1A1\uC73C\uB85C \uAC04\uD3B8\uD558\uAC8C \uC2DC\uC791\uD558\uACE0, \uB0B4 \uCD94\uCC9C \uD604\uD669\uACFC \uB204\uC801 \uB9AC\uC6CC\uB4DC\uB97C \uD30C\uD2B8\uB108 \uD398\uC774\uC9C0\uC5D0\uC11C \uD655\uC778\uD558\uC138\uC694. ", /* @__PURE__ */ React.createElement("span", { className: "reward-income-note" }, "*\uC218\uC785\uC740 \uCD94\uCC9C\xB7\uAC1C\uD1B5 \uAC74\uC218\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4."))), /* @__PURE__ */ React.createElement("div", { className: "reward-cta-actions" }, /* @__PURE__ */ React.createElement("a", { href: "/partner", className: "btn btn-kakao btn-lg reward-kakao-btn" }, /* @__PURE__ */ React.createElement(Icon, { name: "chat", size: 18 }), " \uCE74\uCE74\uC624\uB85C \uD30C\uD2B8\uB108 \uC2DC\uC791"), /* @__PURE__ */ React.createElement("a", { href: "#booking", className: "reward-cta-sub" }, "\uBA3C\uC800 \uC0C1\uB2F4\uBC1B\uAE30 ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 14 }))))), /* @__PURE__ */ React.createElement(Reveal, { delay: 160 }, /* @__PURE__ */ React.createElement("div", { className: "reward-must-link" }, /* @__PURE__ */ React.createElement(Icon, { name: "spark", size: 16 }), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("b", null, "\uAF2D \uB0B4 \uCD94\uCC9C \uB9C1\uD06C\uB97C \uD1B5\uD574 \uC2E0\uCCAD\uD574\uC57C \uB9AC\uC6CC\uB4DC\uAC00 \uC801\uB9BD\uB429\uB2C8\uB2E4."), " \uB9C1\uD06C \uC5C6\uC774 \uBC29\uBB38\xB7\uC2E0\uCCAD\uD55C \uACBD\uC6B0\uC5D0\uB294 \uCD94\uCC9C\uC774 \uC790\uB3D9\uC73C\uB85C \uC9D1\uACC4\uB418\uC9C0 \uC54A\uC544 \uB9AC\uC6CC\uB4DC \uB300\uC0C1\uC5D0\uC11C \uC81C\uC678\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement("p", { className: "reward-notice" }, "*\uB9AC\uC6CC\uB4DC\uB294 \uB9E4\uC7A5\uC5D0\uC11C \uAC1C\uD1B5 \uC644\uB8CC\uB97C \uD655\uC778\uD55C \uAC74\uC5D0 \uD55C\uD574 \uC9C0\uAE09\uB418\uBA70, \uAC1C\uD1B5 \uCDE8\uC18C\xB7\uCCA0\uD68C \uC2DC \uC9C0\uAE09\uB418\uC9C0 \uC54A\uAC70\uB098 \uD658\uC218\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB9AC\uC6CC\uB4DC \uAE08\uC561\xB7\uC9C0\uAE09 \uC870\uAC74\uC740 \uD1B5\uC2E0\uC0AC \uC815\uCC45 \uBC0F \uAD00\uB828 \uBC95\uB839\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC73C\uBA70, \uC815\uD655\uD55C \uB0B4\uC6A9\uC740 \uB9E4\uC7A5 \uC0C1\uB2F4 \uC2DC \uC548\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4. \uCD94\uCC9C \uC2DC \uC18C\uAC1C\uBC1B\uB294 \uBD84\uC758 \uB3D9\uC758 \uC5C6\uC774 \uC5F0\uB77D\uCC98\uB97C \uC81C\uACF5\uD558\uC9C0 \uC54A\uB3C4\uB85D \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4."))));
}
Object.assign(window, { PlansSection, BundleSection, RewardSection });

/* 전역 노출 */
if (typeof PlansSection !== "undefined") globalThis.PlansSection = PlansSection;
if (typeof BundleSection !== "undefined") globalThis.BundleSection = BundleSection;
if (typeof RewardSection !== "undefined") globalThis.RewardSection = RewardSection;
})();
/* /sections-bottom.jsx?v=523af4c3 */
(function(){
const { useState: useStateB } = React;
function kakaoChat() {
  const u = typeof window !== "undefined" && window.KAKAO_CHANNEL_URL || "";
  return u && u.indexOf("YOUR-") === -1 ? u : "";
}
const PAGE_BASE = /(?:^|\/)(index\.html)?$/.test(location.pathname) ? "" : "./";
const MODEL_COLORS = {
  "iPhone 17": ["\uB77C\uBCA4\uB354", "\uC138\uC774\uC9C0", "\uBBF8\uC2A4\uD2B8 \uBE14\uB8E8", "\uD654\uC774\uD2B8", "\uBE14\uB799"],
  "iPhone 17 Pro": ["\uC2E4\uBC84", "\uB525 \uBE14\uB8E8", "\uCF54\uC2A4\uBBF9 \uC624\uB80C\uC9C0"],
  "iPhone 17 Pro Max": ["\uC2E4\uBC84", "\uB525 \uBE14\uB8E8", "\uCF54\uC2A4\uBBF9 \uC624\uB80C\uC9C0"],
  "iPhone Air": ["\uC2A4\uCE74\uC774 \uBE14\uB8E8", "\uB77C\uC774\uD2B8 \uACE8\uB4DC", "\uD074\uB77C\uC6B0\uB4DC \uD654\uC774\uD2B8", "\uC2A4\uD398\uC774\uC2A4 \uBE14\uB799"],
  "iPhone 17e": ["\uD654\uC774\uD2B8", "\uBE14\uB799", "\uD551\uD06C"],
  "Galaxy S26": ["\uCF54\uBC1C\uD2B8 \uBC14\uC774\uC62C\uB81B", "\uC2A4\uCE74\uC774 \uBE14\uB8E8", "\uBE14\uB799", "\uD654\uC774\uD2B8"],
  "Galaxy S26+": ["\uCF54\uBC1C\uD2B8 \uBC14\uC774\uC62C\uB81B", "\uC2A4\uCE74\uC774 \uBE14\uB8E8", "\uBE14\uB799", "\uD654\uC774\uD2B8"],
  "Galaxy S26 Ultra": ["\uCF54\uBC1C\uD2B8 \uBC14\uC774\uC62C\uB81B", "\uC2A4\uCE74\uC774 \uBE14\uB8E8", "\uBE14\uB799", "\uD654\uC774\uD2B8"],
  "Galaxy Fold8 Ultra": ["\uADF8\uB77C\uD30C\uC774\uD2B8", "\uD06C\uB9BC", "\uBC14\uC774\uC62C\uB81B \uC250\uB3C4\uC6B0", "\uADF8\uB9B0 \uC250\uB3C4\uC6B0"],
  "Galaxy Fold8": ["\uADF8\uB77C\uD30C\uC774\uD2B8", "\uD06C\uB9BC", "\uB77C\uBCA4\uB354", "\uD53C\uC2A4\uD0C0\uCE58\uC624"],
  "Galaxy Flip8": ["\uADF8\uB77C\uD30C\uC774\uD2B8", "\uD06C\uB9BC", "\uD551\uD06C", "\uBBFC\uD2B8"],
  "\uC0BC\uC131 \uC2A4\uD0C0\uC77C \uD3F4\uB3542": ["\uBE14\uB799"],
  "Galaxy A17": ["\uB77C\uC774\uD2B8 \uBE14\uB8E8", "\uBE14\uB799", "\uB77C\uC774\uD2B8 \uADF8\uB9B0"],
  "\uAE30\uD0C0 / \uCD94\uCC9C \uBD80\uD0C1": [],
  "\uC544\uC9C1 \uBBF8\uC815": []
};
function BookingSection() {
  const topics = ["\uD3F4\uB354\uBE148 \uC0AC\uC804\uC608\uC57D", "\uAE30\uAE30\uBCC0\uACBD", "\uBC88\uD638\uC774\uB3D9", "\uC2E0\uADDC\uAC00\uC785", "\uC778\uD130\uB137/TV \uACB0\uD569", "\uC694\uAE08\uC81C \uC0C1\uB2F4", "\uBD80\uBAA8\uB2D8/\uAC00\uC871\uD3F0"];
  const [form, setForm] = useStateB({
    name: "",
    phone: "",
    birth: "",
    carrier: "",
    topics: [],
    model: "",
    capacity: "",
    color: "",
    date: "",
    note: "",
    consent: false
  });
  const [submitted, setSubmitted] = useStateB(false);
  const [sending, setSending] = useStateB(false);
  const [errors, setErrors] = useStateB({});
  const pad2 = (n) => String(n).padStart(2, "0");
  const _now = /* @__PURE__ */ new Date();
  const todayStr = _now.getFullYear() + "-" + pad2(_now.getMonth() + 1) + "-" + pad2(_now.getDate());
  const toggleTopic = (t) => {
    setForm((f) => ({ ...f, topics: f.topics.includes(t) ? f.topics.filter((x) => x !== t) : [...f.topics, t] }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (sending || submitted) return;
    const errs = {};
    if (!form.name.trim()) errs.name = "\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.";
    if (!form.phone.trim()) errs.phone = "\uC5F0\uB77D\uCC98\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.";
    if (!form.consent) errs.consent = "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1\xB7\uC774\uC6A9\uC5D0 \uB3D9\uC758\uD574\uC8FC\uC138\uC694.";
    setErrors(errs);
    if (Object.keys(errs).length) {
      const firstId = errs.name ? "bk-name" : errs.phone ? "bk-phone" : "bk-consent";
      const el = typeof document !== "undefined" ? document.getElementById(firstId) : null;
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.focus({ preventScroll: true });
      }
      return;
    }
    let refCode = "";
    try {
      refCode = localStorage.getItem("referralCode") || "";
      const refAt = localStorage.getItem("referralAt") || "";
      if (refCode && refAt && Date.now() - new Date(refAt).getTime() > 30 * 24 * 60 * 60 * 1e3) {
        localStorage.removeItem("referralCode");
        localStorage.removeItem("referralAt");
        refCode = "";
      }
    } catch (e2) {
    }
    const timeEl = typeof document !== "undefined" ? document.getElementById("bk-time") : null;
    const payload = {
      ...form,
      time: timeEl ? timeEl.value : "",
      topics: form.topics,
      referralCode: refCode,
      submittedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    const url = typeof window !== "undefined" && window.BOOKING_WEBHOOK_URL || "";
    setSending(true);
    if (url && url.indexOf("YOUR-") === -1) {
      try {
        const res = await fetch(url, {
          method: "POST",
          mode: "cors",
          body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error("HTTP " + res.status);
      } catch (err) {
        setSending(false);
        if (window.gmTrack) window.gmTrack("booking_error", { where: "webhook" });
        setErrors({ submit: "\uC77C\uC2DC\uC801\uC778 \uC624\uB958\uB85C \uC811\uC218\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC2DC\uAC70\uB098 010-7932-9779\uB85C \uC804\uD654 \uC8FC\uC138\uC694." });
        return;
      }
    }
    if (window.gmTrack) window.gmTrack("booking_submit", { topics: (form.topics || []).join("|"), model: form.model || "" });
    if (refCode && typeof window !== "undefined" && window.supabase && window.SUPABASE_URL && window.SUPABASE_URL.indexOf("YOUR-") === -1) {
      try {
        const sb = window.__sbClient || (window.__sbClient = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY));
        sb.rpc("submit_referral", {
          p_code: refCode,
          p_name: form.name,
          p_phone: form.phone,
          p_memo: "\uC6F9 \uC2E0\uCCAD" + (form.model ? " \xB7 " + form.model : "") + (form.note ? " \xB7 " + form.note : "")
        }).then(() => {
        }, () => {
        });
      } catch (err) {
      }
    }
    if (refCode) {
      try {
        localStorage.removeItem("referralCode");
        localStorage.removeItem("referralAt");
      } catch (e3) {
      }
    }
    setSubmitted(true);
  };
  const bullets = [
    { n: "01", t: "\uC9C0\uAE08 \uC4F0\uC2DC\uB294 \uC870\uAC74 \uC810\uAC80", s: "\uD604\uC7AC \uC57D\uC815\xB7\uD1B5\uC2E0\uC0AC\xB7\uC6D4 \uC694\uAE08\uC744 \uBA3C\uC800 \uD30C\uC545\uD569\uB2C8\uB2E4" },
    { n: "02", t: "\uD544\uC694\uD55C \uAC74\uC9C0 \uD655\uC778", s: "\uC0AC\uC9C4\xB7\uC601\uC0C1\xB7\uAC8C\uC784\xB7\uBD80\uBAA8\uB2D8\uC6A9 \u2014 \uC6A9\uB3C4\uBCC4\uB85C \uB9DE\uCDB0\uB4DC\uB9BD\uB2C8\uB2E4" },
    { n: "03", t: "\uC6D4 \uB0A9\uBD80\uC561 \uC720\uC9C0 \uC2DC\uBBAC\uB808\uC774\uC158", s: "\uC9C0\uAE08\uACFC \uAC19\uC740 \uB3C8\uC73C\uB85C \uC5B4\uB5A4 \uC870\uD569\uC774 \uAC00\uB2A5\uD55C\uC9C0 \uACC4\uC0B0\uB4DC\uB9BD\uB2C8\uB2E4" },
    { n: "04", t: "\uD544\uC694 \uC2DC\uB9CC \uAC1C\uD1B5", s: "\uC124\uBA85\uB9CC \uB4E3\uACE0 \uAC00\uC154\uB3C4 \uAD1C\uCC2E\uC2B5\uB2C8\uB2E4. \uAC15\uC694\xB7\uAD8C\uC720\uB294 \uC5C6\uC2B5\uB2C8\uB2E4." }
  ];
  return /* @__PURE__ */ React.createElement("section", { className: "section booking-section", id: "booking" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), "BOOKING"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, /* @__PURE__ */ React.createElement("span", { className: "h-thin" }, "\uC18D\uC73C\uB85C \uACB0\uC815\uD558\uC138\uC694."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "h-bold" }, "\uB9D0\uC740 \uC800\uD76C\uAC00 \uC815\uB9AC\uD574\uB4DC\uB9B4\uAC8C\uC694.")), /* @__PURE__ */ React.createElement("p", { className: "section-sub" }, "\u201C\uC774 \uD3F0\uC774 \uB098\uD55C\uD14C \uB9DE\uB098?\u201D \xB7 \u201C\uB9E4\uB2EC \uC5BC\uB9C8\uC529 \uB098\uAC00\uC57C \uC801\uC815\uC774\uC9C0?\u201D \xB7 \u201C\uC9C0\uAE08 \uBC14\uAFD4\uB3C4 \uC190\uD574\uB294 \uC548 \uBCFC\uAE4C?\u201D \uACE0\uAC1D\uB2D8\uC774 \uB9C9\uC5F0\uD558\uAC8C \uACE0\uBBFC\uD558\uB294 \uADF8 \uC9C8\uBB38\uB4E4\uC744, \uC218\uCE58\xB7\uC870\uAC74\uC73C\uB85C \uBA3C\uC800 \uC815\uB9AC\uD574\uB4DC\uB9BD\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement("div", { className: "booking-grid" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("aside", { className: "booking-side" }, /* @__PURE__ */ React.createElement("div", { className: "booking-highlight" }, /* @__PURE__ */ React.createElement("div", { className: "booking-highlight__tag" }, "\uAC00\uC7A5 \uB9CE\uC774 \uB4E3\uB294 \uC9C8\uBB38"), /* @__PURE__ */ React.createElement("h4", null, "\uC624\uB798\uB41C \uD3F0\uC744 \uCD5C\uC2E0\uD3F0\uC73C\uB85C \uBC14\uAFD4\uB3C4,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "\uC6D4 \uC694\uAE08\uC774 \uADF8\uB300\uB85C\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement("p", null, "\uAE30\uAE30\uAC12\xB7\uACF5\uC2DC\uC9C0\uC6D0\uAE08\xB7\uC120\uD0DD\uC57D\uC815\xB7\uC694\uAE08\uC81C \uC870\uD569\uC744 \uB2E4\uC2DC \uC9DC\uBA74, \uC774\uBBF8 \uB0B4\uACE0 \uACC4\uC2E0 \uAE08\uC561\uACFC \uBE44\uC2B7\uD55C \uC218\uC900\uC73C\uB85C\uB3C4 \uCD5C\uC2E0 \uAE30\uAE30\uB85C \uBC14\uAFC0 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAD11\uACE0 \uC18D \uAC00\uACA9\uC774 \uC544\uB2C8\uB77C, \uC9C0\uAE08 \uACE0\uAC1D\uB2D8\uC758 \uC2E4\uC81C \uC870\uAC74\uC73C\uB85C \uACC4\uC0B0\uD574 \uB4DC\uB9BD\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement("h3", null, "\uC608\uC57D\uD558\uBA74 \uB2EC\uB77C\uC9C0\uB294 4\uB2E8\uACC4"), /* @__PURE__ */ React.createElement("p", null, "\uBC29\uBB38 \uC804 \uACE0\uAC1D\uB2D8 \uC0C1\uD669\uC744 \uBA3C\uC800 \uC815\uB9AC\uD574 \uB450\uBA74, \uB9E4\uC7A5\uC5D0\uC11C\uB294 \uC124\uBA85 \uB300\uC2E0 \uD310\uB2E8\uB9CC \uD558\uC2DC\uBA74 \uB429\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("div", { className: "booking-bullets" }, bullets.map(
    (b) => /* @__PURE__ */ React.createElement("div", { className: "booking-bullet", key: b.n }, /* @__PURE__ */ React.createElement("span", { className: "n" }, b.n), /* @__PURE__ */ React.createElement("b", { className: "bullet-t" }, b.t), /* @__PURE__ */ React.createElement("span", { className: "bullet-s" }, b.s))
  )))), /* @__PURE__ */ React.createElement(Reveal, { delay: 120 }, /* @__PURE__ */ React.createElement("form", { className: "booking-form", onSubmit, noValidate: true }, /* @__PURE__ */ React.createElement("div", { className: "form-row two" }, /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", { htmlFor: "bk-name" }, "\uC774\uB984", /* @__PURE__ */ React.createElement("span", { className: "req" }, "*")), /* @__PURE__ */ React.createElement(
    "input",
    {
      id: "bk-name",
      className: "input",
      placeholder: "\uC131\uD568\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
      value: form.name,
      onChange: (e) => setForm((f) => ({ ...f, name: e.target.value })),
      "aria-invalid": !!errors.name
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", { htmlFor: "bk-phone" }, "\uC5F0\uB77D\uCC98", /* @__PURE__ */ React.createElement("span", { className: "req" }, "*")), /* @__PURE__ */ React.createElement(
    "input",
    {
      id: "bk-phone",
      className: "input",
      placeholder: "010-0000-0000",
      inputMode: "tel",
      value: form.phone,
      onChange: (e) => setForm((f) => ({ ...f, phone: e.target.value })),
      "aria-invalid": !!errors.phone
    }
  ))), /* @__PURE__ */ React.createElement("div", { className: "form-row two", style: { marginTop: 18 } }, /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", { htmlFor: "bk-birth" }, "\uC0DD\uB144\uC6D4\uC77C"), /* @__PURE__ */ React.createElement(
    "input",
    {
      id: "bk-birth",
      type: "date",
      className: "input",
      value: form.birth,
      onChange: (e) => setForm((f) => ({ ...f, birth: e.target.value }))
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", { htmlFor: "bk-carrier" }, "\uD604\uC7AC \uC0AC\uC6A9 \uD1B5\uC2E0\uC0AC"), /* @__PURE__ */ React.createElement(
    "select",
    {
      id: "bk-carrier",
      className: "select",
      value: form.carrier,
      onChange: (e) => setForm((f) => ({ ...f, carrier: e.target.value }))
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "\uC120\uD0DD\uD574\uC8FC\uC138\uC694"),
    /* @__PURE__ */ React.createElement("option", null, "SKT"),
    /* @__PURE__ */ React.createElement("option", null, "KT"),
    /* @__PURE__ */ React.createElement("option", null, "LG U+"),
    /* @__PURE__ */ React.createElement("option", null, "\uC54C\uB730\uD3F0 (MVNO)"),
    /* @__PURE__ */ React.createElement("option", null, "\uC798 \uBAA8\uB974\uACA0\uC5B4\uC694")
  ))), /* @__PURE__ */ React.createElement("div", { className: "field", style: { marginTop: 18 } }, /* @__PURE__ */ React.createElement("label", null, "\uC0C1\uB2F4 \uD76C\uB9DD \uD56D\uBAA9 ", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--ink-400)", fontWeight: 400 } }, "(\uC911\uBCF5 \uC120\uD0DD \uAC00\uB2A5)")), /* @__PURE__ */ React.createElement("div", { className: "chip-grid" }, topics.map(
    (t) => /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        key: t,
        className: "chip" + (form.topics.includes(t) ? " on" : ""),
        onClick: () => toggleTopic(t)
      },
      t
    )
  ))), /* @__PURE__ */ React.createElement("div", { className: "field", style: { marginTop: 22 } }, /* @__PURE__ */ React.createElement("label", null, "\uAD00\uC2EC \uC788\uB294 \uAE30\uC885\xB7\uC6A9\uB7C9\xB7\uC0C9\uC0C1", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--ink-mute)", fontWeight: 400, marginLeft: 6, fontSize: 12.5 } }, "(\uBBF8\uC815\uC774\uC154\uB3C4 \uAD1C\uCC2E\uC544\uC694)")), /* @__PURE__ */ React.createElement("div", { className: "form-row three", style: { marginTop: 8 } }, /* @__PURE__ */ React.createElement(
    "select",
    {
      className: "select",
      value: form.model,
      onChange: (e) => setForm((f) => ({ ...f, model: e.target.value, color: "" })),
      "aria-label": "\uAD00\uC2EC \uAE30\uC885"
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "\uAE30\uC885 \uC120\uD0DD"),
    /* @__PURE__ */ React.createElement("optgroup", { label: "iPhone" }, /* @__PURE__ */ React.createElement("option", null, "iPhone 17"), /* @__PURE__ */ React.createElement("option", null, "iPhone 17 Pro"), /* @__PURE__ */ React.createElement("option", null, "iPhone 17 Pro Max"), /* @__PURE__ */ React.createElement("option", null, "iPhone Air"), /* @__PURE__ */ React.createElement("option", null, "iPhone 17e")),
    /* @__PURE__ */ React.createElement("optgroup", { label: "Galaxy S" }, /* @__PURE__ */ React.createElement("option", null, "Galaxy S26"), /* @__PURE__ */ React.createElement("option", null, "Galaxy S26+"), /* @__PURE__ */ React.createElement("option", null, "Galaxy S26 Ultra")),
    /* @__PURE__ */ React.createElement("optgroup", { label: "Galaxy Z" }, /* @__PURE__ */ React.createElement("option", null, "Galaxy Fold8 Ultra"), /* @__PURE__ */ React.createElement("option", null, "Galaxy Fold8"), /* @__PURE__ */ React.createElement("option", null, "Galaxy Flip8")),
    /* @__PURE__ */ React.createElement("optgroup", { label: "\uD6A8\uB3C4\uD3F0\xB7\uC2E4\uC18D\uD3F0" }, /* @__PURE__ */ React.createElement("option", null, "\uC0BC\uC131 \uC2A4\uD0C0\uC77C \uD3F4\uB3542"), /* @__PURE__ */ React.createElement("option", null, "Galaxy A17"), /* @__PURE__ */ React.createElement("option", null, "\uAE30\uD0C0 / \uCD94\uCC9C \uBD80\uD0C1")),
    /* @__PURE__ */ React.createElement("option", null, "\uC544\uC9C1 \uBBF8\uC815")
  ), /* @__PURE__ */ React.createElement(
    "select",
    {
      className: "select",
      value: form.capacity,
      onChange: (e) => setForm((f) => ({ ...f, capacity: e.target.value })),
      "aria-label": "\uC6A9\uB7C9"
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "\uC6A9\uB7C9 \uC120\uD0DD"),
    /* @__PURE__ */ React.createElement("option", null, "128GB"),
    /* @__PURE__ */ React.createElement("option", null, "256GB"),
    /* @__PURE__ */ React.createElement("option", null, "512GB"),
    /* @__PURE__ */ React.createElement("option", null, "1TB"),
    /* @__PURE__ */ React.createElement("option", null, "2TB"),
    /* @__PURE__ */ React.createElement("option", null, "\uC544\uC9C1 \uBBF8\uC815")
  ), /* @__PURE__ */ React.createElement(
    "select",
    {
      className: "select",
      value: form.color,
      onChange: (e) => setForm((f) => ({ ...f, color: e.target.value })),
      "aria-label": "\uC0C9\uC0C1",
      disabled: !form.model || MODEL_COLORS[form.model] && MODEL_COLORS[form.model].length === 0
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, !form.model ? "\uBA3C\uC800 \uAE30\uC885\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694" : MODEL_COLORS[form.model] && MODEL_COLORS[form.model].length === 0 ? "\uB9E4\uC7A5\uC5D0\uC11C \uCD94\uCC9C \uC548\uB0B4" : "\uC0C9\uC0C1 \uC120\uD0DD"),
    (MODEL_COLORS[form.model] || []).map(
      (c) => /* @__PURE__ */ React.createElement("option", { key: c }, c)
    ),
    form.model && MODEL_COLORS[form.model] && MODEL_COLORS[form.model].length > 0 && /* @__PURE__ */ React.createElement("option", null, "\uC0C9\uC0C1 \uBBF8\uC815")
  )), /* @__PURE__ */ React.createElement("div", { className: "field-hint" }, "\uC815\uD655\uD55C \uBAA8\uB378\uBA85\xB7\uC7AC\uACE0\uB294 \uB9E4\uC7A5\uC5D0\uC11C \uD655\uC778 \uD6C4 \uC548\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement("div", { className: "form-row two", style: { marginTop: 18 } }, /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", { htmlFor: "bk-date" }, "\uD76C\uB9DD \uBC29\uBB38 \uB0A0\uC9DC"), /* @__PURE__ */ React.createElement(
    "input",
    {
      id: "bk-date",
      type: "date",
      className: "input",
      min: todayStr,
      value: form.date,
      onChange: (e) => {
        const v = e.target.value;
        if (v && (/* @__PURE__ */ new Date(v + "T00:00:00")).getDay() === 0) {
          setForm((f) => ({ ...f, date: "" }));
          setErrors((er) => ({ ...er, date: "\uC77C\uC694\uC77C\uC740 \uC815\uAE30 \uD734\uBB34\uC785\uB2C8\uB2E4" }));
          return;
        }
        setForm((f) => ({ ...f, date: v }));
        setErrors((er) => ({ ...er, date: "" }));
      }
    }
  ), errors.date && /* @__PURE__ */ React.createElement("div", { className: "field-error", role: "alert" }, errors.date), /* @__PURE__ */ React.createElement("div", { className: "field-hint" }, "\uC601\uC5C5\uC2DC\uAC04: \uC6D4\u2013\uD1A0 \uC624\uC804 10:00 \u2013 \uC624\uD6C4 8:00 \xB7 \uC77C\uC694\uC77C \uD734\uBB34")), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", { htmlFor: "bk-time" }, "\uD76C\uB9DD \uC2DC\uAC04\uB300"), /* @__PURE__ */ React.createElement("select", { id: "bk-time", className: "select", defaultValue: "" }, /* @__PURE__ */ React.createElement("option", { value: "", disabled: true }, "\uC120\uD0DD\uD574\uC8FC\uC138\uC694"), /* @__PURE__ */ React.createElement("option", null, "\uC624\uC804 (10:00 ~ 12:00)"), /* @__PURE__ */ React.createElement("option", null, "\uC624\uD6C4 1 (13:00 ~ 15:00)"), /* @__PURE__ */ React.createElement("option", null, "\uC624\uD6C4 2 (15:00 ~ 18:00)"), /* @__PURE__ */ React.createElement("option", null, "\uC800\uB141 (18:00 \uC774\uD6C4)")))), /* @__PURE__ */ React.createElement("div", { className: "field", style: { marginTop: 18 } }, /* @__PURE__ */ React.createElement("label", { htmlFor: "bk-note" }, "\uBB38\uC758 \uB0B4\uC6A9"), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      id: "bk-note",
      className: "textarea",
      rows: "4",
      placeholder: "\uD604\uC7AC \uC0AC\uC6A9 \uC911\uC778 \uAE30\uAE30, \uD1B5\uC2E0\uC0AC, \uAC00\uC871 \uACB0\uD569 \uC5EC\uBD80 \uB4F1\uC744 \uC801\uC5B4\uC8FC\uC2DC\uBA74 \uB354 \uC815\uD655\uD558\uAC8C \uC548\uB0B4\uB4DC\uB9B4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
      value: form.note,
      onChange: (e) => setForm((f) => ({ ...f, note: e.target.value }))
    }
  )), /* @__PURE__ */ React.createElement("label", { className: "consent" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      id: "bk-consent",
      type: "checkbox",
      checked: form.consent,
      "aria-invalid": !!errors.consent,
      onChange: (e) => setForm((f) => ({ ...f, consent: e.target.checked }))
    }
  ), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("b", null, "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1\xB7\uC774\uC6A9\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4. (\uD544\uC218)"), /* @__PURE__ */ React.createElement("br", null), "\uC218\uC9D1 \uD56D\uBAA9: \uC774\uB984\xB7\uC5F0\uB77D\uCC98\xB7\uC0DD\uB144\uC6D4\uC77C \uB4F1 \uC785\uB825\uD558\uC2E0 \uC815\uBCF4 \xB7 \uC774\uC6A9 \uBAA9\uC801: \uC0C1\uB2F4 \uC608\uC57D \uC811\uC218 \uBC0F \uD68C\uC2E0 \xB7 \uBCF4\uC720 \uAE30\uAC04: \uC0C1\uB2F4 \uC644\uB8CC \uD6C4 3\uAC1C\uC6D4. \uB3D9\uC758\uB97C \uAC70\uBD80\uD558\uC2E4 \uC218 \uC788\uC73C\uB098, \uC774 \uACBD\uC6B0 \uC0C1\uB2F4 \uC608\uC57D \uC811\uC218\uAC00 \uC81C\uD55C\uB429\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740", /* @__PURE__ */ React.createElement("a", { href: "/privacy", target: "_blank", rel: "noopener noreferrer" }, "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68"), "\uC5D0\uC11C \uD655\uC778\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")), (errors.name || errors.phone || errors.consent || errors.submit) && /* @__PURE__ */ React.createElement("div", { className: "form-error", role: "alert", style: { color: "#C0392B", fontSize: 13.5, marginTop: 10, fontWeight: 500 } }, errors.name || errors.phone || errors.consent || errors.submit), submitted && /* @__PURE__ */ React.createElement("div", { className: "form-success" }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 18 }), " \uC608\uC57D\uC774 \uC811\uC218\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uBE60\uB974\uAC8C \uD68C\uC2E0\uB4DC\uB9B4\uAC8C\uC694."), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "submit",
      className: "btn btn-primary btn-lg",
      style: { width: "100%", marginTop: 22 },
      disabled: sending || submitted
    },
    sending && !submitted ? "\uC811\uC218 \uC911\u2026" : /* @__PURE__ */ React.createElement(React.Fragment, null, "\uC0C1\uB2F4 \uC608\uC57D \uB0A8\uAE30\uAE30 ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 16 }))
  ))))));
}
function IntroSection() {
  const tags = ["\uBD80\uB2F4 \uC5C6\uB294 \uC0C1\uB2F4", "\uC774\uD574\uD558\uAE30 \uC26C\uC6B4 \uC124\uBA85", "\uACE0\uAC1D \uC0C1\uD669\uC5D0 \uB9DE\uCD98 \uC548\uB0B4", "\uBC29\uBB38 \uC804 \uC608\uC57D \uAC00\uB2A5"];
  return /* @__PURE__ */ React.createElement("section", { className: "section intro-section", id: "intro" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), "STORE"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, /* @__PURE__ */ React.createElement("span", { className: "h-thin" }, "\uC0AC\uC9C4\uBCF4\uB2E4 \uB354 \uC194\uC9C1\uD55C \uACF3."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "h-bold" }, "\uC9C1\uC811 \uC640\uC11C \uBCF4\uC138\uC694."))), /* @__PURE__ */ React.createElement("div", { className: "intro-grid" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "intro-image intro-image--photo" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "assets/store-exterior.jpg",
      alt: "\uACF5\uC77C\uBAA8\uBC14\uC77C \uB9E4\uC7A5 \uC678\uAD00",
      width: "1448",
      height: "1086",
      loading: "lazy",
      decoding: "async"
    }
  ))), /* @__PURE__ */ React.createElement(Reveal, { delay: 120, className: "intro-text" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), "OUR APPROACH"), /* @__PURE__ */ React.createElement("h3", null, "\uD310\uB9E4\uAC00 \uC544\uB2C8\uB77C, \uC810\uAC80\uBD80\uD130 \uC2DC\uC791\uD569\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("p", null, "\uACF5\uC77C\uBAA8\uBC14\uC77C\uC740 \uACE0\uAC1D\uC774 \uBCF5\uC7A1\uD55C \uD1B5\uC2E0 \uC870\uAC74\uC744 \uC27D\uAC8C \uC774\uD574\uD558\uACE0 \uC120\uD0DD\uD560 \uC218 \uC788\uB3C4\uB85D \uB3D5\uB294", /* @__PURE__ */ React.createElement("b", null, " \uC0C1\uB2F4 \uC911\uC2EC \uB9E4\uC7A5"), "\uC785\uB2C8\uB2E4. \uB2E8\uC21C\uD788 \uD310\uB9E4\uB9CC \uD558\uB294 \uACF3\uC774 \uC544\uB2C8\uB77C, \uACE0\uAC1D\uB2D8\uC758 \uC0AC\uC6A9 \uD328\uD134\uACFC \uD1B5\uC2E0\uBE44 \uAD6C\uC870\uB97C \uD568\uAED8 \uC810\uAC80\uD574 \uB354 \uD569\uB9AC\uC801\uC778 \uC120\uD0DD\uC744 \uB3C4\uC640\uB4DC\uB9BD\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("div", { className: "intro-tags" }, tags.map((t) => /* @__PURE__ */ React.createElement("span", { className: "intro-tag", key: t }, t)))))));
}
function LocationSection() {
  const [copied, setCopied] = useStateB(false);
  const address = "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC131\uB3D9\uAD6C \uB9C8\uC7A5\uB85C 305 1\uCE35 \uACF5\uC77C\uBAA8\uBC14\uC77C";
  const onCopy = () => {
    var _a;
    (_a = navigator.clipboard) == null ? void 0 : _a.writeText(address).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }).catch(() => {
    });
  };
  const hours = [
    { d: "\uC6D4\u2013\uD1A0", h: "\uC624\uC804 10:00 \u2013 \uC624\uD6C4 8:00" },
    { d: "\uC77C\uC694\uC77C", h: "\uD734\uBB34 (\uC815\uAE30 \uD734\uBB34\uC77C)", off: true }
  ];
  return /* @__PURE__ */ React.createElement("section", { className: "section", id: "location" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), "LOCATION"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, "\uC624\uC2DC\uB294 \uAE38"), /* @__PURE__ */ React.createElement("p", { className: "section-sub" }, "\uB9C8\uC7A5\uC5ED 2\uBC88 \uCD9C\uAD6C \uB3C4\uBCF4 \uC57D 1\uBD84 \uAC70\uB9AC. \uCC98\uC74C \uC624\uC154\uB3C4 \uC27D\uAC8C \uCC3E\uC73C\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement("div", { className: "location-grid" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("a", { href: "https://naver.me/FHOAX0ay", target: "_blank", rel: "noopener noreferrer", className: "map-card map-card--link map-card--photo", "aria-label": "\uB124\uC774\uBC84 \uC9C0\uB3C4\uC5D0\uC11C \uACF5\uC77C\uBAA8\uBC14\uC77C \uB9C8\uC7A5\uC5ED\uC810 \uBCF4\uAE30" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "assets/store-map.webp",
      alt: "\uACF5\uC77C\uBAA8\uBC14\uC77C \uB9C8\uC7A5\uC5ED\uC810 \uC704\uCE58 \uC57D\uB3C4",
      className: "map-photo",
      width: "1149",
      height: "829",
      loading: "lazy",
      decoding: "async"
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "map-cta" }, /* @__PURE__ */ React.createElement(Icon, { name: "map", size: 14 }), /* @__PURE__ */ React.createElement("span", null, "\uB124\uC774\uBC84 \uC9C0\uB3C4\uC5D0\uC11C \uAE38\uCC3E\uAE30"), /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 14 })))), /* @__PURE__ */ React.createElement(Reveal, { delay: 120, className: "location-info" }, /* @__PURE__ */ React.createElement("div", { className: "info-card" }, /* @__PURE__ */ React.createElement("div", { className: "ttl" }, "\uB9E4\uC7A5 \uC8FC\uC18C"), /* @__PURE__ */ React.createElement("div", { className: "val" }, address, /* @__PURE__ */ React.createElement("small", null, "\uB9C8\uC7A5\uC5ED 2\uBC88 \uCD9C\uAD6C \uB3C4\uBCF4 \uC57D 1\uBD84 \uAC70\uB9AC"))), /* @__PURE__ */ React.createElement("div", { className: "info-card actions" }, /* @__PURE__ */ React.createElement("button", { className: "info-action", onClick: onCopy }, /* @__PURE__ */ React.createElement(Icon, { name: "copy", size: 18, className: "ic" }), copied ? "\uC8FC\uC18C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4" : "\uC8FC\uC18C \uBCF5\uC0AC\uD558\uAE30", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 16 }))), /* @__PURE__ */ React.createElement("a", { className: "info-action", href: "tel:01079329779" }, /* @__PURE__ */ React.createElement(Icon, { name: "phone", size: 18, className: "ic" }), "\uC804\uD654\uD558\uAE30", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 16 }))), /* @__PURE__ */ React.createElement("a", { className: "info-action", href: "https://m.place.naver.com/place/2051361364/review/visitor", target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement(Icon, { name: "naver", size: 18, className: "ic" }), "\uB124\uC774\uBC84 \uB9AC\uBDF0 \uB0A8\uAE30\uAE30", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 16 }))), /* @__PURE__ */ React.createElement("a", { className: "info-action", href: "https://naver.me/FHOAX0ay", target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement(Icon, { name: "map", size: 18, className: "ic" }), "\uB124\uC774\uBC84 \uC9C0\uB3C4\uC5D0\uC11C \uBCF4\uAE30", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 16 })))), /* @__PURE__ */ React.createElement("div", { className: "info-card" }, /* @__PURE__ */ React.createElement("div", { className: "ttl" }, /* @__PURE__ */ React.createElement(Icon, { name: "clock", size: 12, style: { display: "inline-block", verticalAlign: -2 } }), " \uC601\uC5C5\uC2DC\uAC04"), /* @__PURE__ */ React.createElement("div", { className: "hours-list" }, hours.map(
    (h) => /* @__PURE__ */ React.createElement("div", { className: "hour-row", key: h.d }, /* @__PURE__ */ React.createElement("span", { className: "d" }, h.d), /* @__PURE__ */ React.createElement("span", { className: "h " + (h.off ? "off" : "") }, h.h))
  )))))));
}
function CTASection() {
  return /* @__PURE__ */ React.createElement("section", { className: "cta-section" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "cta-card" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), "CONTACT"), /* @__PURE__ */ React.createElement("h2", null, /* @__PURE__ */ React.createElement("span", { className: "h-thin", style: { color: "rgb(150, 150, 158)" } }, "\uC624\uB798\uB41C \uD3F0\uC744 \uCD5C\uC2E0\uD3F0\uC73C\uB85C."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "h-bold", style: { color: "rgb(255, 255, 255)" } }, "\uC694\uAE08\uC740, \uADF8\uB300\uB85C.")), /* @__PURE__ */ React.createElement("p", null, "\uAE30\uAE30\uBCC0\uACBD \xB7 \uBC88\uD638\uC774\uB3D9 \xB7 \uC694\uAE08\uC81C \xB7 \uC778\uD130\uB137\xB7TV \uACB0\uD569\uAE4C\uC9C0 \uD55C \uBC88\uC5D0. \uAC15\uC694 \uC5C6\uC774, \uBD80\uB2F4 \uC5C6\uC774."), /* @__PURE__ */ React.createElement("div", { className: "cta-buttons" }, /* @__PURE__ */ React.createElement("a", { href: PAGE_BASE + "#booking", className: "btn btn-primary btn-lg" }, /* @__PURE__ */ React.createElement(Icon, { name: "calendar", size: 18 }), " \uC0C1\uB2F4 \uC608\uC57D\uD558\uAE30"), /* @__PURE__ */ React.createElement("a", { href: "tel:01079329779", className: "btn btn-ghost btn-lg" }, /* @__PURE__ */ React.createElement(Icon, { name: "phone", size: 18 }), " \uC804\uD654 \uBB38\uC758\uD558\uAE30"), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: kakaoChat() || "#",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "btn btn-kakao btn-lg",
      onClick: (e) => {
        if (!kakaoChat()) e.preventDefault();
      }
    },
    /* @__PURE__ */ React.createElement(Icon, { name: "chat", size: 18 }),
    " \uCE74\uCE74\uC624\uD1A1 \uBB38\uC758\uD558\uAE30"
  ))))));
}
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", { className: "footer" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "footer-grid" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", { href: PAGE_BASE + "#top", className: "brand", style: { color: "#fff" } }, /* @__PURE__ */ React.createElement("span", { className: "brand-logo footer-logo" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "assets/logo.png",
      alt: "\uACF5\uC77C\uBAA8\uBC14\uC77C \uB85C\uACE0",
      width: "44",
      height: "44",
      loading: "lazy",
      decoding: "async"
    }
  )), /* @__PURE__ */ React.createElement("span", { className: "brand-text" }, /* @__PURE__ */ React.createElement("strong", { style: { color: "#fff" } }, "\uACF5\uC77C\uBAA8\uBC14\uC77C"), /* @__PURE__ */ React.createElement("small", { style: { color: "rgba(255,255,255,0.55)" } }, "01 MOBILE"))), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 16, color: "#8A95AB", maxWidth: 380 } }, "\uBCF5\uC7A1\uD55C \uD734\uB300\uD3F0 \uAD6C\uB9E4\uB97C \uAC00\uC7A5 \uC27D\uACE0 \uD22C\uBA85\uD558\uAC8C \uC548\uB0B4\uD558\uB294 \uB3D9\uB124 \uD504\uB9AC\uBBF8\uC5C4 \uC0C1\uB2F4 \uB9E4\uC7A5."), /* @__PURE__ */ React.createElement("div", { className: "footer-info-line", style: { marginTop: 14 } }, /* @__PURE__ */ React.createElement("span", null, "\uC8FC\uC18C"), " \uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC131\uB3D9\uAD6C \uB9C8\uC7A5\uB85C 305 1\uCE35 \uACF5\uC77C\uBAA8\uBC14\uC77C"), /* @__PURE__ */ React.createElement("div", { className: "footer-info-line" }, /* @__PURE__ */ React.createElement("span", null, "\uB300\uD45C\uBC88\uD638"), " 010-7932-9779"), /* @__PURE__ */ React.createElement("div", { className: "footer-info-line" }, /* @__PURE__ */ React.createElement("span", null, "\uC0AC\uC5C5\uC790\uC815\uBCF4"), " \uC0C1\uD638: \uACF5\uC77C\uBAA8\uBC14\uC77C \xB7 \uB300\uD45C: \uACFD\uC0C1\uD6A8 \xB7 \uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638: 847-75-00504"), /* @__PURE__ */ React.createElement("div", { className: "footer-precon" }, /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "https://ictmarket.or.kr:8443/precon/pop_CertIcon.do?PRECON_REQ_ID=PRE0000201702",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "\uC774\uB3D9\uD1B5\uC2E0 \uC0AC\uC804\uC2B9\uB099\uC11C \uD655\uC778"
    },
    /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "https://ictmarket.or.kr:8443/getCertIcon.do?cert_icon=KP26061713822W001",
        alt: "\uC774\uB3D9\uD1B5\uC2E0 \uD310\uB9E4\uC810 \uC0AC\uC804\uC2B9\uB099 \uB9C8\uD06C",
        width: "56",
        height: "56",
        loading: "lazy",
        decoding: "async",
        style: { cursor: "pointer" },
        onError: (e) => {
          e.currentTarget.style.display = "none";
        }
      }
    )
  ))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h5", null, "\uC0C1\uB2F4 \uAC00\uB2A5 \uD56D\uBAA9"), /* @__PURE__ */ React.createElement("ul", { className: "footer-list" }, /* @__PURE__ */ React.createElement("li", null, "\uAE30\uAE30\uBCC0\uACBD \xB7 \uBC88\uD638\uC774\uB3D9 \xB7 \uC2E0\uADDC\uAC00\uC785"), /* @__PURE__ */ React.createElement("li", null, "\uC694\uAE08\uC81C \uBE44\uAD50 \uC0C1\uB2F4"), /* @__PURE__ */ React.createElement("li", null, "\uC54C\uB730\uD3F0 \xB7 \uC720\uC2EC/eSIM \uC0C1\uB2F4"), /* @__PURE__ */ React.createElement("li", null, "\uC778\uD130\uB137 \xB7 TV \uACB0\uD569 \uC0C1\uB2F4"), /* @__PURE__ */ React.createElement("li", null, "\uAC00\uC871 \uACB0\uD569 / \uD1B5\uC2E0\uBE44 \uC810\uAC80"), /* @__PURE__ */ React.createElement("li", null, "\uC911\uACE0\uD3F0 \uD310\uB9E4 \xB7 \uB9E4\uC785"), /* @__PURE__ */ React.createElement("li", null, "\uD6A8\uB3C4\uD3F0 \xB7 \uC2E4\uC18D\uD3F0 \uC548\uB0B4"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h5", null, "\uBC14\uB85C\uAC00\uAE30"), /* @__PURE__ */ React.createElement("ul", { className: "footer-list" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: PAGE_BASE + "#booking" }, "\uBC29\uBB38 \uC0C1\uB2F4 \uC608\uC57D")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: PAGE_BASE + "#products" }, "\uD310\uB9E4 \uC0C1\uD488")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "/devices" }, "\uAE30\uAE30 \uC804\uCCB4\uBCF4\uAE30")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "/used" }, "\uC911\uACE0\uD3F0 \uD310\uB9E4\xB7\uB9E4\uC785")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "/guides" }, "\uAC1C\uD1B5\xB7\uC911\uACE0\uD3F0 \uAC00\uC774\uB4DC")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: PAGE_BASE + "#location" }, "\uC624\uC2DC\uB294 \uAE38")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "/privacy" }, "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68"))))), /* @__PURE__ */ React.createElement("div", { className: "footer-bottom" }, /* @__PURE__ */ React.createElement("span", null, "\xA9 2026 \uACF5\uC77C\uBAA8\uBC14\uC77C. All rights reserved."), /* @__PURE__ */ React.createElement("span", null, "\uBCF8 \uC0AC\uC774\uD2B8\uB294 \uD569\uBC95\uC801 \uD1B5\uC2E0 \uC0C1\uB2F4\uC744 \uC704\uD55C \uC548\uB0B4 \uD398\uC774\uC9C0\uC774\uBA70, \uBAA8\uB4E0 \uAC00\uACA9\xB7\uD560\uC778 \uC870\uAC74\uC740 \uC0C1\uB2F4 \uD6C4 \uC548\uB0B4\uB429\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("a", { href: "/admin", className: "footer-admin-link" }, "\uAD00\uB9AC\uC790"))));
}
function MobileActionBar() {
  return /* @__PURE__ */ React.createElement("nav", { className: "bottom-bar", "aria-label": "\uBE60\uB978 \uC0C1\uB2F4 \uBA54\uB274" }, /* @__PURE__ */ React.createElement("a", { href: "tel:01079329779" }, /* @__PURE__ */ React.createElement(Icon, { name: "phone", size: 18 }), " \uC804\uD654"), /* @__PURE__ */ React.createElement("a", { href: PAGE_BASE + "#booking", className: "primary" }, /* @__PURE__ */ React.createElement(Icon, { name: "calendar", size: 18 }), " \uC608\uC57D"), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: kakaoChat() || "#",
      className: "kakao",
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: (e) => {
        if (!kakaoChat()) e.preventDefault();
      }
    },
    /* @__PURE__ */ React.createElement(Icon, { name: "chat", size: 18 }),
    " \uCE74\uD1A1"
  ));
}
Object.assign(window, { BookingSection, IntroSection, LocationSection, CTASection, Footer, MobileActionBar });

/* 전역 노출 */
if (typeof kakaoChat !== "undefined") globalThis.kakaoChat = kakaoChat;
if (typeof BookingSection !== "undefined") globalThis.BookingSection = BookingSection;
if (typeof IntroSection !== "undefined") globalThis.IntroSection = IntroSection;
if (typeof LocationSection !== "undefined") globalThis.LocationSection = LocationSection;
if (typeof CTASection !== "undefined") globalThis.CTASection = CTASection;
if (typeof Footer !== "undefined") globalThis.Footer = Footer;
if (typeof MobileActionBar !== "undefined") globalThis.MobileActionBar = MobileActionBar;
})();
/* /app.jsx?v=f630d8f6 */
(function(){
const { useEffect: useEffectA, useState: useStateA } = React;
function ScrollToTop() {
  const [visible, setVisible] = useStateA(false);
  useEffectA(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "scroll-top" + (visible ? " is-visible" : ""),
      "aria-label": "\uB9E8 \uC704\uB85C",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" })
    },
    /* @__PURE__ */ React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("polyline", { points: "18 15 12 9 6 15" }))
  );
}
function ScrollProgress() {
  const [p, setP] = useStateA(0);
  useEffectA(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      setP(Math.min(1, Math.max(0, scrolled)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ React.createElement("div", { className: "scroll-progress", style: { transform: `scaleX(${p})` }, "aria-hidden": "true" });
}
function useReferralCapture() {
  useEffectA(() => {
    try {
      const REFERRAL_TTL = 30 * 24 * 60 * 60 * 1e3;
      const at = localStorage.getItem("referralAt");
      if (at && Date.now() - new Date(at).getTime() > REFERRAL_TTL) {
        localStorage.removeItem("referralCode");
        localStorage.removeItem("referralAt");
      }
      const code = new URLSearchParams(location.search).get("ref");
      if (code) {
        localStorage.setItem("referralCode", code);
        localStorage.setItem("referralAt", (/* @__PURE__ */ new Date()).toISOString());
      }
    } catch (e) {
    }
  }, []);
}
function App() {
  useReferralCapture();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ScrollProgress, null), /* @__PURE__ */ React.createElement(PromoBar, null), /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(Hero, null), /* @__PURE__ */ React.createElement(PreorderSection, null), /* @__PURE__ */ React.createElement(TrustSection, null), /* @__PURE__ */ React.createElement(LineupShowcase, null), /* @__PURE__ */ React.createElement(ProductsSection, null), /* @__PURE__ */ React.createElement(PlansSection, null), /* @__PURE__ */ React.createElement(BundleSection, null), /* @__PURE__ */ React.createElement(RewardSection, null), /* @__PURE__ */ React.createElement(BookingSection, null), /* @__PURE__ */ React.createElement(IntroSection, null), /* @__PURE__ */ React.createElement(LocationSection, null), /* @__PURE__ */ React.createElement(CTASection, null)), /* @__PURE__ */ React.createElement(Footer, null), /* @__PURE__ */ React.createElement(ScrollToTop, null), /* @__PURE__ */ React.createElement(MobileActionBar, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));

/* 전역 노출 */
if (typeof ScrollToTop !== "undefined") globalThis.ScrollToTop = ScrollToTop;
if (typeof ScrollProgress !== "undefined") globalThis.ScrollProgress = ScrollProgress;
if (typeof useReferralCapture !== "undefined") globalThis.useReferralCapture = useReferralCapture;
if (typeof App !== "undefined") globalThis.App = App;
})();