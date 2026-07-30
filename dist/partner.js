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
/* /partner.jsx?v=135b777a */
(function(){
const { useState: useP, useEffect: usePE, useCallback: usePC } = React;
const CONFIGURED = typeof window.SUPABASE_URL === "string" && window.SUPABASE_URL.indexOf("YOUR-PROJECT") === -1 && typeof window.SUPABASE_ANON_KEY === "string" && window.SUPABASE_ANON_KEY.indexOf("YOUR-ANON") === -1;
const sb = CONFIGURED && window.supabase ? window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY) : null;
const won = (n) => (n || 0).toLocaleString("ko-KR") + "\uC6D0";
function PartnerHeader({ session, onLogout }) {
  return /* @__PURE__ */ React.createElement("header", { className: "partner-header" }, /* @__PURE__ */ React.createElement("div", { className: "container partner-header__inner" }, /* @__PURE__ */ React.createElement("a", { href: "/", className: "brand", "aria-label": "\uACF5\uC77C\uBAA8\uBC14\uC77C \uD648" }, /* @__PURE__ */ React.createElement("span", { className: "brand-logo" }, /* @__PURE__ */ React.createElement("img", { src: "assets/logo.png", alt: "\uACF5\uC77C\uBAA8\uBC14\uC77C" })), /* @__PURE__ */ React.createElement("span", { className: "brand-text" }, /* @__PURE__ */ React.createElement("strong", null, "\uACF5\uC77C\uBAA8\uBC14\uC77C"), /* @__PURE__ */ React.createElement("small", null, "PARTNER"))), session && /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-sm", onClick: onLogout }, "\uB85C\uADF8\uC544\uC6C3")));
}
function SetupNotice() {
  return /* @__PURE__ */ React.createElement("div", { className: "partner-shell" }, /* @__PURE__ */ React.createElement("div", { className: "partner-card partner-card--notice" }, /* @__PURE__ */ React.createElement("div", { className: "partner-ico-lg" }, /* @__PURE__ */ React.createElement(Icon, { name: "doc", size: 26 })), /* @__PURE__ */ React.createElement("h2", null, "\uC124\uC815\uC774 \uD544\uC694\uD569\uB2C8\uB2E4"), /* @__PURE__ */ React.createElement("p", null, "\uD30C\uD2B8\uB108 \uD398\uC774\uC9C0\uB97C \uC791\uB3D9\uC2DC\uD0A4\uB824\uBA74 ", /* @__PURE__ */ React.createElement("code", null, "supabase-config.js"), "\uC5D0 Supabase \uD504\uB85C\uC81D\uD2B8 URL\uACFC anon \uD0A4\uB97C \uC785\uB825\uD558\uACE0, \uCE74\uCE74\uC624 \uB85C\uADF8\uC778 \uC5F0\uB3D9\uC744 \uB9C8\uCCD0\uC57C \uD569\uB2C8\uB2E4. \uC790\uC138\uD55C \uC808\uCC28\uB294 ", /* @__PURE__ */ React.createElement("b", null, "PARTNER_SETUP.md"), "\uB97C \uCC38\uACE0\uD558\uC138\uC694."), /* @__PURE__ */ React.createElement("a", { href: "/", className: "btn btn-primary" }, "\uD648\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30")));
}
const IN_APP_RE = /instagram|fbav|fban|fb_iab|kakaotalk|naver\(inapp|line\//i;
const isInApp = () => IN_APP_RE.test(navigator.userAgent);
function openExternalBrowser() {
  const url = location.href.split("#")[0];
  const ua = navigator.userAgent;
  if (/kakaotalk/i.test(ua)) {
    location.href = "kakaotalk://web/openExternal?url=" + encodeURIComponent(url);
    return;
  }
  if (/android/i.test(ua)) {
    location.href = "intent://" + url.replace(/^https?:\/\//, "") + "#Intent;scheme=https;action=android.intent.action.VIEW;end";
    return;
  }
  const fallback = () => alert("\uC624\uB978\uCABD \uC704 \u22EF \uBA54\uB274\uC5D0\uC11C '\uC678\uBD80 \uBE0C\uB77C\uC6B0\uC800\uB85C \uC5F4\uAE30'\uB97C \uB20C\uB7EC\uC8FC\uC138\uC694.");
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => alert("\uB9C1\uD06C\uB97C \uBCF5\uC0AC\uD588\uC5B4\uC694!\n\uC0AC\uD30C\uB9AC(\uB610\uB294 \uD06C\uB86C)\uB97C \uC5F4\uACE0 \uC8FC\uC18C\uCC3D\uC5D0 \uBD99\uC5EC\uB123\uC5B4 \uC8FC\uC138\uC694.")).catch(fallback);
  } else fallback();
}
function LoginView({ onKakao, busy }) {
  return /* @__PURE__ */ React.createElement("div", { className: "partner-shell" }, /* @__PURE__ */ React.createElement("div", { className: "partner-card partner-login" }, /* @__PURE__ */ React.createElement("div", { className: "partner-ico-lg" }, /* @__PURE__ */ React.createElement(Icon, { name: "users", size: 28 })), /* @__PURE__ */ React.createElement("h1", null, "\uD30C\uD2B8\uB108 \uB9AC\uC6CC\uB4DC"), /* @__PURE__ */ React.createElement("p", null, "\uCE74\uCE74\uC624\uB85C \uB85C\uADF8\uC778\uD558\uACE0 \uB0B4 \uCD94\uCC9C \uD604\uD669\uACFC \uB204\uC801 \uB9AC\uC6CC\uB4DC\uB97C", /* @__PURE__ */ React.createElement("br", null), "\uD55C\uB208\uC5D0 \uD655\uC778\uD558\uC138\uC694."), /* @__PURE__ */ React.createElement("button", { className: "btn btn-kakao btn-lg partner-kakao", onClick: onKakao, disabled: busy }, /* @__PURE__ */ React.createElement(Icon, { name: "chat", size: 18 }), " ", busy ? "\uC774\uB3D9 \uC911\u2026" : "\uCE74\uCE74\uC624\uB85C \uB85C\uADF8\uC778"), isInApp() && /* @__PURE__ */ React.createElement("small", { style: { display: "block", marginTop: 10, color: "#8b95a1", fontSize: 12.5, lineHeight: 1.6 } }, "\uB85C\uADF8\uC778\uC774 \uC548 \uB418\uBA74", " ", /* @__PURE__ */ React.createElement("a", { href: "#", onClick: (e) => {
    e.preventDefault();
    openExternalBrowser();
  }, style: { textDecoration: "underline", color: "#6b7684" } }, "\uC678\uBD80 \uBE0C\uB77C\uC6B0\uC800\uB85C \uC5F4\uAE30"), " ", "\uB610\uB294 \uC624\uB978\uCABD \uC704 \u22EF \uBA54\uB274\uB97C \uC774\uC6A9\uD574 \uC8FC\uC138\uC694."), /* @__PURE__ */ React.createElement("a", { href: "/", className: "partner-back" }, "\u2190 \uB9E4\uC7A5 \uD648\uC73C\uB85C")));
}
function RegisterView({ initialName, onSave, busy }) {
  const [name, setName] = useP(initialName || "");
  const [phone, setPhone] = useP("");
  const [consent, setConsent] = useP(false);
  const [err, setErr] = useP("");
  const submit = (e) => {
    e.preventDefault();
    if (!name.trim()) return setErr("\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.");
    if (!phone.trim()) return setErr("\uC5F0\uB77D\uCC98\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.");
    if (!consent) return setErr("\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1\xB7\uC774\uC6A9\uC5D0 \uB3D9\uC758\uD574\uC8FC\uC138\uC694.");
    setErr("");
    onSave({ name: name.trim(), phone: phone.trim(), consent: true });
  };
  return /* @__PURE__ */ React.createElement("div", { className: "partner-shell" }, /* @__PURE__ */ React.createElement("form", { className: "partner-card partner-register", onSubmit: submit, noValidate: true }, /* @__PURE__ */ React.createElement("h2", null, "\uD30C\uD2B8\uB108 \uC815\uBCF4 \uB4F1\uB85D"), /* @__PURE__ */ React.createElement("p", { className: "partner-sub" }, "\uB9AC\uC6CC\uB4DC \uC9C0\uAE09\uC744 \uC704\uD574 \uAE30\uBCF8 \uC815\uBCF4\uB97C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694."), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", { htmlFor: "p-name" }, "\uC774\uB984", /* @__PURE__ */ React.createElement("span", { className: "req" }, "*")), /* @__PURE__ */ React.createElement(
    "input",
    {
      id: "p-name",
      className: "input",
      value: name,
      onChange: (e) => setName(e.target.value),
      placeholder: "\uC131\uD568"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "field", style: { marginTop: 16 } }, /* @__PURE__ */ React.createElement("label", { htmlFor: "p-phone" }, "\uC5F0\uB77D\uCC98", /* @__PURE__ */ React.createElement("span", { className: "req" }, "*")), /* @__PURE__ */ React.createElement(
    "input",
    {
      id: "p-phone",
      className: "input",
      value: phone,
      inputMode: "tel",
      onChange: (e) => setPhone(e.target.value),
      placeholder: "010-0000-0000"
    }
  )), /* @__PURE__ */ React.createElement("label", { className: "consent", style: { marginTop: 18 } }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: consent, onChange: (e) => setConsent(e.target.checked) }), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("b", null, "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1\xB7\uC774\uC6A9\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4. (\uD544\uC218)"), /* @__PURE__ */ React.createElement("br", null), "\uC218\uC9D1 \uD56D\uBAA9: \uC774\uB984, \uC5F0\uB77D\uCC98 \xB7 \uBAA9\uC801: \uD30C\uD2B8\uB108 \uB9AC\uC6CC\uB4DC \uC815\uC0B0 \xB7 \uBCF4\uC720: \uC815\uC0B0 \uC644\uB8CC \uD6C4 \uAD00\uB828 \uBC95\uB839 \uAE30\uAC04. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ React.createElement("a", { href: "/privacy", target: "_blank", rel: "noopener noreferrer" }, "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68"), "\uC744 \uCC38\uACE0\uD558\uC138\uC694.")), err && /* @__PURE__ */ React.createElement("div", { className: "partner-err" }, err), /* @__PURE__ */ React.createElement("button", { type: "submit", className: "btn btn-primary btn-lg", style: { width: "100%", marginTop: 18 }, disabled: busy }, busy ? "\uC800\uC7A5 \uC911\u2026" : "\uB4F1\uB85D\uD558\uACE0 \uC2DC\uC791\uD558\uAE30")));
}
function Dashboard({ profile, referrals, onRefresh, busy }) {
  const [copied, setCopied] = useP(false);
  const link = `${location.origin}/?ref=${profile.referral_code}`;
  const stats = referrals.reduce((a, r) => {
    if (r.status === "activated") {
      a.activated++;
      a.reward += r.reward_amount;
      if (r.reward_paid) a.paid += r.reward_amount;
    } else if (r.status === "pending" || r.status === "visited") a.open++;
    return a;
  }, { activated: 0, open: 0, reward: 0, paid: 0 });
  const copy = () => {
    const done = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(link).then(done).catch(() => fallbackCopy(link, done));
    } else {
      fallbackCopy(link, done);
    }
  };
  const fallbackCopy = (text, onOk) => {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, text.length);
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      if (ok) onOk();
      else prompt("\uC544\uB798 \uB9C1\uD06C\uB97C \uAE38\uAC8C \uB20C\uB7EC \uBCF5\uC0AC\uD558\uC138\uC694:", text);
    } catch (e) {
      prompt("\uC544\uB798 \uB9C1\uD06C\uB97C \uAE38\uAC8C \uB20C\uB7EC \uBCF5\uC0AC\uD558\uC138\uC694:", text);
    }
  };
  const STATUS = {
    pending: { label: "\uC811\uC218", cls: "is-pending" },
    visited: { label: "\uBC29\uBB38", cls: "is-visited" },
    activated: { label: "\uAC1C\uD1B5 \uC644\uB8CC", cls: "is-activated" },
    rejected: { label: "\uCDE8\uC18C", cls: "is-rejected" }
  };
  return /* @__PURE__ */ React.createElement("div", { className: "partner-shell partner-dash" }, /* @__PURE__ */ React.createElement("div", { className: "partner-greet" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), "MY REWARD"), /* @__PURE__ */ React.createElement("h1", null, profile.name || "\uD30C\uD2B8\uB108", "\uB2D8, \uC548\uB155\uD558\uC138\uC694."), /* @__PURE__ */ React.createElement("p", null, "\uC18C\uAC1C\uD574 \uC8FC\uC2E0 \uBD84\uC774 \uAC1C\uD1B5\uD558\uBA74 \uB9AC\uC6CC\uB4DC\uAC00 \uC801\uB9BD\uB429\uB2C8\uB2E4. \uAE08\uC561\xB7\uC9C0\uAE09\uC740 \uB9E4\uC7A5\uC5D0\uC11C \uD655\uC815\uD569\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement("div", { className: "partner-stats" }, /* @__PURE__ */ React.createElement("div", { className: "partner-stat" }, /* @__PURE__ */ React.createElement("div", { className: "l" }, "\uB204\uC801 \uB9AC\uC6CC\uB4DC"), /* @__PURE__ */ React.createElement("div", { className: "v" }, won(stats.reward)), /* @__PURE__ */ React.createElement("div", { className: "s" }, "\uC9C0\uAE09 \uC644\uB8CC ", won(stats.paid))), /* @__PURE__ */ React.createElement("div", { className: "partner-stat" }, /* @__PURE__ */ React.createElement("div", { className: "l" }, "\uAC1C\uD1B5 \uC644\uB8CC"), /* @__PURE__ */ React.createElement("div", { className: "v" }, stats.activated, /* @__PURE__ */ React.createElement("small", null, "\uAC74"))), /* @__PURE__ */ React.createElement("div", { className: "partner-stat" }, /* @__PURE__ */ React.createElement("div", { className: "l" }, "\uC9C4\uD589 \uC911"), /* @__PURE__ */ React.createElement("div", { className: "v" }, stats.open, /* @__PURE__ */ React.createElement("small", null, "\uAC74")))), /* @__PURE__ */ React.createElement("div", { className: "partner-link-card" }, /* @__PURE__ */ React.createElement("div", { className: "partner-link-head" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "t" }, "\uB0B4 \uCD94\uCC9C \uB9C1\uD06C"), /* @__PURE__ */ React.createElement("div", { className: "code" }, "\uCD94\uCC9C\uCF54\uB4DC ", /* @__PURE__ */ React.createElement("b", null, profile.referral_code))), /* @__PURE__ */ React.createElement("button", { className: "btn btn-soft btn-sm", onClick: copy }, /* @__PURE__ */ React.createElement(Icon, { name: "copy", size: 14 }), " ", copied ? "\uBCF5\uC0AC\uB428" : "\uB9C1\uD06C \uBCF5\uC0AC")), /* @__PURE__ */ React.createElement("div", { className: "partner-link-url" }, link)), /* @__PURE__ */ React.createElement("div", { className: "partner-list-head" }, /* @__PURE__ */ React.createElement("h2", null, "\uB0B4 \uCD94\uCC9C \uB0B4\uC5ED"), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-sm", onClick: onRefresh, disabled: busy }, "\uC0C8\uB85C\uACE0\uCE68")), referrals.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "partner-empty" }, "\uC544\uC9C1 \uCD94\uCC9C \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC704\uC758 \uB0B4 \uCD94\uCC9C \uB9C1\uD06C\uB97C \uC9C0\uC778\uC5D0\uAC8C \uACF5\uC720\uD574\uBCF4\uC138\uC694.") : /* @__PURE__ */ React.createElement("div", { className: "partner-list" }, referrals.map((r) => {
    const st = STATUS[r.status] || STATUS.pending;
    return /* @__PURE__ */ React.createElement("div", { className: "partner-row", key: r.id }, /* @__PURE__ */ React.createElement("div", { className: "partner-row__main" }, /* @__PURE__ */ React.createElement("b", null, r.referred_name), r.memo && /* @__PURE__ */ React.createElement("span", { className: "partner-row__memo" }, r.memo), /* @__PURE__ */ React.createElement("span", { className: "partner-row__date" }, new Date(r.created_at).toLocaleDateString("ko-KR"))), /* @__PURE__ */ React.createElement("div", { className: "partner-row__right" }, /* @__PURE__ */ React.createElement("span", { className: "partner-badge " + st.cls }, st.label), r.status === "activated" && /* @__PURE__ */ React.createElement("span", { className: "partner-row__reward" }, won(r.reward_amount), r.reward_paid ? " \uC9C0\uAE09" : " \uC608\uC815")));
  })), /* @__PURE__ */ React.createElement("p", { className: "partner-foot-note" }, "\uB9AC\uC6CC\uB4DC \uAE08\uC561\xB7\uC9C0\uAE09 \uC870\uAC74\uC740 \uD1B5\uC2E0\uC0AC \uC815\uCC45 \uBC0F \uAD00\uB828 \uBC95\uB839\uC5D0 \uB530\uB77C \uB9E4\uC7A5\uC5D0\uC11C \uD655\uC815\uD569\uB2C8\uB2E4. \uC18C\uAC1C\uBC1B\uB294 \uBD84\uC758 \uC5F0\uB77D\uCC98\uB294 \uC0AC\uC804 \uB3D9\uC758\uB97C \uBC1B\uC740 \uACBD\uC6B0\uC5D0\uB9CC \uC785\uB825\uD574\uC8FC\uC138\uC694."), /* @__PURE__ */ React.createElement("div", { className: "partner-warn" }, /* @__PURE__ */ React.createElement("b", null, "\u26A0\uFE0F \uBD80\uC815 \uCD94\uCC9C \uACBD\uACE0"), /* @__PURE__ */ React.createElement("br", null), "\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uBC88\uD638 \uC785\uB825, \uAC1C\uD1B5 \uC758\uC0AC\uAC00 \uC5C6\uB294 \uC0AC\uB78C\uC758 \uD5C8\uC704\xB7\uBC18\uBCF5 \uB4F1\uB85D \uB4F1", /* @__PURE__ */ React.createElement("b", null, " \uC545\uC758\uC801\uC778 \uBD80\uC815 \uCD94\uCC9C"), "\uC774 \uD655\uC778\uB420 \uACBD\uC6B0, \uC0AC\uC804 \uD1B5\uBCF4 \uC5C6\uC774 ", /* @__PURE__ */ React.createElement("b", null, "\uB9AC\uC6CC\uB4DC \uC9C0\uAE09\uC774 \uAC70\uBD80"), "\uB418\uACE0", /* @__PURE__ */ React.createElement("b", null, " \uD30C\uD2B8\uB108 \uC790\uACA9\uC774 \uC601\uAD6C \uBC15\uD0C8"), "\uB429\uB2C8\uB2E4. \uACE0\uC758\uC801\xB7\uC870\uC9C1\uC801 \uBD80\uC815 \uD589\uC704\uB85C \uB9E4\uC7A5\uC5D0 \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0", /* @__PURE__ */ React.createElement("b", null, " \uBBFC\xB7\uD615\uC0AC\uC0C1 \uBC95\uC801 \uCC45\uC784"), "\uC744 \uBB3C\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4."));
}
function PartnerApp() {
  const [ready, setReady] = useP(false);
  const [session, setSession] = useP(null);
  const [profile, setProfile] = useP(null);
  const [referrals, setReferrals] = useP([]);
  const [busy, setBusy] = useP(false);
  const loadData = usePC(async (uid) => {
    const { data: prof } = await sb.from("partners").select("*").eq("id", uid).single();
    setProfile(prof || null);
    const { data: refs } = await sb.from("referrals").select("*").eq("partner_id", uid).order("created_at", { ascending: false });
    setReferrals(refs || []);
  }, []);
  usePE(() => {
    if (!sb) {
      setReady(true);
      return;
    }
    sb.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (data.session) loadData(data.session.user.id).finally(() => setReady(true));
      else setReady(true);
    });
    const { data: sub } = sb.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      if (s) loadData(s.user.id);
      else {
        setProfile(null);
        setReferrals([]);
      }
    });
    return () => sub.subscription.unsubscribe();
  }, [loadData]);
  const loginKakao = async () => {
    setBusy(true);
    const { error } = await sb.auth.signInWithOAuth({
      provider: "kakao",
      options: { redirectTo: location.origin + location.pathname }
    });
    if (error) {
      alert("\uB85C\uADF8\uC778 \uC624\uB958: " + error.message);
      setBusy(false);
    }
  };
  const logout = async () => {
    await sb.auth.signOut();
  };
  const saveProfile = async ({ name, phone, consent }) => {
    setBusy(true);
    const { error } = await sb.from("partners").update({ name, phone, consent }).eq("id", session.user.id);
    if (error) alert("\uC800\uC7A5 \uC624\uB958: " + error.message);
    else await loadData(session.user.id);
    setBusy(false);
  };
  if (!sb) return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PartnerHeader, { session: null }), /* @__PURE__ */ React.createElement(SetupNotice, null));
  if (!ready) return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PartnerHeader, { session: null }), /* @__PURE__ */ React.createElement("div", { className: "partner-shell" }, /* @__PURE__ */ React.createElement("div", { className: "partner-loading" }, "\uBD88\uB7EC\uC624\uB294 \uC911\u2026")));
  if (!session) return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PartnerHeader, { session: null }), /* @__PURE__ */ React.createElement(LoginView, { onKakao: loginKakao, busy }));
  const needsProfile = !profile || !profile.consent || !profile.name || !profile.phone;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PartnerHeader, { session, onLogout: logout }), needsProfile ? /* @__PURE__ */ React.createElement(RegisterView, { initialName: profile && profile.name, onSave: saveProfile, busy }) : /* @__PURE__ */ React.createElement(
    Dashboard,
    {
      profile,
      referrals,
      onRefresh: () => loadData(session.user.id),
      busy
    }
  ));
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(PartnerApp, null));

/* 전역 노출 */
if (typeof PartnerHeader !== "undefined") globalThis.PartnerHeader = PartnerHeader;
if (typeof SetupNotice !== "undefined") globalThis.SetupNotice = SetupNotice;
if (typeof openExternalBrowser !== "undefined") globalThis.openExternalBrowser = openExternalBrowser;
if (typeof LoginView !== "undefined") globalThis.LoginView = LoginView;
if (typeof RegisterView !== "undefined") globalThis.RegisterView = RegisterView;
if (typeof Dashboard !== "undefined") globalThis.Dashboard = Dashboard;
if (typeof PartnerApp !== "undefined") globalThis.PartnerApp = PartnerApp;
})();