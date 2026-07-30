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
    { href: "used.html", label: "\uC911\uACE0\uD3F0" },
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
  ), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("b", null, "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1\xB7\uC774\uC6A9\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4. (\uD544\uC218)"), /* @__PURE__ */ React.createElement("br", null), "\uC218\uC9D1 \uD56D\uBAA9: \uC774\uB984\xB7\uC5F0\uB77D\uCC98\xB7\uC0DD\uB144\uC6D4\uC77C \uB4F1 \uC785\uB825\uD558\uC2E0 \uC815\uBCF4 \xB7 \uC774\uC6A9 \uBAA9\uC801: \uC0C1\uB2F4 \uC608\uC57D \uC811\uC218 \uBC0F \uD68C\uC2E0 \xB7 \uBCF4\uC720 \uAE30\uAC04: \uC0C1\uB2F4 \uC644\uB8CC \uD6C4 3\uAC1C\uC6D4. \uB3D9\uC758\uB97C \uAC70\uBD80\uD558\uC2E4 \uC218 \uC788\uC73C\uB098, \uC774 \uACBD\uC6B0 \uC0C1\uB2F4 \uC608\uC57D \uC811\uC218\uAC00 \uC81C\uD55C\uB429\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740", /* @__PURE__ */ React.createElement("a", { href: "privacy.html", target: "_blank", rel: "noopener noreferrer" }, "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68"), "\uC5D0\uC11C \uD655\uC778\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")), (errors.name || errors.phone || errors.consent || errors.submit) && /* @__PURE__ */ React.createElement("div", { className: "form-error", role: "alert", style: { color: "#C0392B", fontSize: 13.5, marginTop: 10, fontWeight: 500 } }, errors.name || errors.phone || errors.consent || errors.submit), submitted && /* @__PURE__ */ React.createElement("div", { className: "form-success" }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 18 }), " \uC608\uC57D\uC774 \uC811\uC218\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uBE60\uB974\uAC8C \uD68C\uC2E0\uB4DC\uB9B4\uAC8C\uC694."), /* @__PURE__ */ React.createElement(
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
      src: "assets/store-map.png",
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
  ))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h5", null, "\uC0C1\uB2F4 \uAC00\uB2A5 \uD56D\uBAA9"), /* @__PURE__ */ React.createElement("ul", { className: "footer-list" }, /* @__PURE__ */ React.createElement("li", null, "\uAE30\uAE30\uBCC0\uACBD \xB7 \uBC88\uD638\uC774\uB3D9 \xB7 \uC2E0\uADDC\uAC00\uC785"), /* @__PURE__ */ React.createElement("li", null, "\uC694\uAE08\uC81C \uBE44\uAD50 \uC0C1\uB2F4"), /* @__PURE__ */ React.createElement("li", null, "\uC54C\uB730\uD3F0 \xB7 \uC720\uC2EC/eSIM \uC0C1\uB2F4"), /* @__PURE__ */ React.createElement("li", null, "\uC778\uD130\uB137 \xB7 TV \uACB0\uD569 \uC0C1\uB2F4"), /* @__PURE__ */ React.createElement("li", null, "\uAC00\uC871 \uACB0\uD569 / \uD1B5\uC2E0\uBE44 \uC810\uAC80"), /* @__PURE__ */ React.createElement("li", null, "\uC911\uACE0\uD3F0 \uD310\uB9E4 \xB7 \uB9E4\uC785"), /* @__PURE__ */ React.createElement("li", null, "\uD6A8\uB3C4\uD3F0 \xB7 \uC2E4\uC18D\uD3F0 \uC548\uB0B4"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h5", null, "\uBC14\uB85C\uAC00\uAE30"), /* @__PURE__ */ React.createElement("ul", { className: "footer-list" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: PAGE_BASE + "#booking" }, "\uBC29\uBB38 \uC0C1\uB2F4 \uC608\uC57D")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: PAGE_BASE + "#products" }, "\uD310\uB9E4 \uC0C1\uD488")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "devices.html" }, "\uAE30\uAE30 \uC804\uCCB4\uBCF4\uAE30")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "used.html" }, "\uC911\uACE0\uD3F0 \uD310\uB9E4\xB7\uB9E4\uC785")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "/guides" }, "\uAC1C\uD1B5\xB7\uC911\uACE0\uD3F0 \uAC00\uC774\uB4DC")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: PAGE_BASE + "#location" }, "\uC624\uC2DC\uB294 \uAE38")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "privacy.html" }, "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68"))))), /* @__PURE__ */ React.createElement("div", { className: "footer-bottom" }, /* @__PURE__ */ React.createElement("span", null, "\xA9 2026 \uACF5\uC77C\uBAA8\uBC14\uC77C. All rights reserved."), /* @__PURE__ */ React.createElement("span", null, "\uBCF8 \uC0AC\uC774\uD2B8\uB294 \uD569\uBC95\uC801 \uD1B5\uC2E0 \uC0C1\uB2F4\uC744 \uC704\uD55C \uC548\uB0B4 \uD398\uC774\uC9C0\uC774\uBA70, \uBAA8\uB4E0 \uAC00\uACA9\xB7\uD560\uC778 \uC870\uAC74\uC740 \uC0C1\uB2F4 \uD6C4 \uC548\uB0B4\uB429\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("a", { href: "admin.html", className: "footer-admin-link" }, "\uAD00\uB9AC\uC790"))));
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
/* /used.jsx?v=adb657c7 */
(function(){
const { useState: useStateU, useMemo: useMemoU, useEffect: useEffectU } = React;
function UsPriceNote() {
  return /* @__PURE__ */ React.createElement("div", { className: "us-note" }, /* @__PURE__ */ React.createElement(Icon, { name: "shield", size: 18 }), /* @__PURE__ */ React.createElement("span", null, PRICE_NOTE, " \uC911\uACE0 \uC2DC\uC138\uB294 \uB9E4\uC77C \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4."));
}
function BuybackCalc() {
  const [modelIdx, setModelIdx] = useStateU(0);
  const [grade, setGrade] = useStateU("A");
  const entry = USED_BUYBACK[modelIdx];
  const gradeInfo = useMemoU(
    () => USED_GRADES.find((g) => g.key === grade) || USED_GRADES[0],
    [grade]
  );
  const range = entry.range[grade];
  return /* @__PURE__ */ React.createElement("div", { className: "us-calc-card" }, /* @__PURE__ */ React.createElement("div", { className: "us-calc-controls" }, /* @__PURE__ */ React.createElement("div", { className: "us-field" }, /* @__PURE__ */ React.createElement("label", { className: "us-field__label", htmlFor: "us-model" }, "1. \uBAA8\uB378 \uC120\uD0DD"), /* @__PURE__ */ React.createElement(
    "select",
    {
      id: "us-model",
      className: "select",
      value: modelIdx,
      onChange: (e) => setModelIdx(Number(e.target.value))
    },
    USED_BUYBACK.map(
      (row, i) => /* @__PURE__ */ React.createElement("option", { key: row.model, value: i }, row.model)
    )
  )), /* @__PURE__ */ React.createElement("div", { className: "us-field" }, /* @__PURE__ */ React.createElement("span", { className: "us-field__label", id: "us-grade-label" }, "2. \uC0C1\uD0DC \uB4F1\uAE09 \uC120\uD0DD"), /* @__PURE__ */ React.createElement("div", { className: "us-grade-btns", role: "group", "aria-labelledby": "us-grade-label" }, USED_GRADES.map(
    (g) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: g.key,
        type: "button",
        className: "us-grade-btn" + (grade === g.key ? " on" : ""),
        "aria-pressed": grade === g.key,
        onClick: () => setGrade(g.key)
      },
      /* @__PURE__ */ React.createElement("span", { className: "us-grade-btn__key" }, g.key),
      /* @__PURE__ */ React.createElement("span", { className: "us-grade-btn__tx" }, /* @__PURE__ */ React.createElement("b", null, g.label), /* @__PURE__ */ React.createElement("span", null, g.desc)),
      grade === g.key && /* @__PURE__ */ React.createElement("span", { className: "us-grade-btn__check" }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 15 }))
    )
  )))), /* @__PURE__ */ React.createElement("div", { className: "us-calc-result" }, /* @__PURE__ */ React.createElement("div", { className: "us-result__label" }, "\uC608\uC0C1 \uB9E4\uC785 \uBC94\uC704"), /* @__PURE__ */ React.createElement("div", { className: "us-result__pick" }, entry.model, " \xB7 ", gradeInfo.label), /* @__PURE__ */ React.createElement("div", { className: "us-result__val", "aria-live": "polite" }, wonRange(range)), /* @__PURE__ */ React.createElement("div", { className: "us-result__fixed", role: "note" }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 14 }), /* @__PURE__ */ React.createElement("span", null, "\uC2E4\uC81C \uB9E4\uC785\uAC00\uB294 \uB9E4\uC7A5\uC5D0\uC11C \uAE30\uAE30 \uC0C1\uD0DC \uD655\uC778 \uD6C4 \uD655\uC815\uB429\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement("div", { className: "us-result__actions" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: "btn btn-primary btn-lg",
      onClick: () => goConsult("sell", entry.model + " \xB7 " + gradeInfo.label + " \xB7 \uC608\uC0C1 " + wonRange(range))
    },
    /* @__PURE__ */ React.createElement(Icon, { name: "calendar", size: 17 }),
    " \uB9E4\uC785 \uC0C1\uB2F4 \uC2E0\uCCAD\uD558\uAE30"
  ), /* @__PURE__ */ React.createElement("a", { href: "#grades", className: "us-result__sub" }, "\uB4F1\uAE09 \uAE30\uC900 \uBA3C\uC800 \uBCF4\uAE30 ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 14 })))));
}
const MODEL_PAGES = [
  ["\uC544\uC774\uD3F0 17 \uD504\uB85C \uB9E5\uC2A4", "iphone-17-pro-max"],
  ["\uC544\uC774\uD3F0 17 \uD504\uB85C", "iphone-17-pro"],
  ["\uC544\uC774\uD3F0 17", "iphone-17"],
  ["\uC544\uC774\uD3F0 16 \uD504\uB85C \uB9E5\uC2A4", "iphone-16-pro-max"],
  ["\uC544\uC774\uD3F0 16 \uD504\uB85C", "iphone-16-pro"],
  ["\uC544\uC774\uD3F0 16", "iphone-16"],
  ["\uC544\uC774\uD3F0 15", "iphone-15"],
  ["\uC544\uC774\uD3F0 14", "iphone-14"],
  ["\uC544\uC774\uD3F0 13", "iphone-13"],
  ["\uAC24\uB7ED\uC2DC S26 \uC6B8\uD2B8\uB77C", "galaxy-s26-ultra"],
  ["\uAC24\uB7ED\uC2DC S25 \uC6B8\uD2B8\uB77C", "galaxy-s25-ultra"],
  ["\uAC24\uB7ED\uC2DC S24 \uC6B8\uD2B8\uB77C", "galaxy-s24-ultra"],
  ["\uAC24\uB7ED\uC2DC S24", "galaxy-s24"],
  ["\uAC24\uB7ED\uC2DC S23", "galaxy-s23"],
  ["\uAC24\uB7ED\uC2DC Z \uD3F4\uB4DC7", "galaxy-z-fold7"],
  ["\uAC24\uB7ED\uC2DC Z \uD50C\uB9BD7", "galaxy-z-flip7"]
];
function UsedModelLinks() {
  return /* @__PURE__ */ React.createElement("section", { className: "section", style: { paddingTop: 0 } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("h2", { className: "section-title", style: { fontSize: 22, marginBottom: 6 } }, /* @__PURE__ */ React.createElement("span", { className: "h-bold" }, "\uAE30\uC885\uBCC4 \uC0C1\uC138 \uC2DC\uC138")), /* @__PURE__ */ React.createElement("p", { className: "section-sub", style: { marginBottom: 18 } }, "\uC790\uC8FC \uCC3E\uB294 \uAE30\uC885\uC740 \uB4F1\uAE09\uBCC4 \uC2DC\uC138\uC640 \uC810\uAC80 \uD3EC\uC778\uD2B8\uB97C \uB530\uB85C \uC815\uB9AC\uD574 \uB450\uC5C8\uC2B5\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement(Reveal, { delay: 60 }, /* @__PURE__ */ React.createElement("div", { className: "us-modellinks" }, MODEL_PAGES.map(
    ([name, slug]) => /* @__PURE__ */ React.createElement("a", { key: slug, href: "/used/" + slug }, name, " \uB9E4\uC785 \uC2DC\uC138")
  )))));
}
const USED_FAQ = [
  [
    "\uC911\uACE0\uD3F0 \uB9E4\uC785\uAC00\uB294 \uC5B4\uB5BB\uAC8C \uC815\uD574\uC9C0\uB098\uC694?",
    "\uBAA8\uB378\xB7\uB4F1\uAE09(A/B/C) \uAE30\uC900 \uC608\uC0C1 \uBC94\uC704\uB97C \uC0AC\uC774\uD2B8\uC5D0 \uACF5\uAC1C\uD558\uACE0, \uCD5C\uC885 \uB9E4\uC785\uAC00\uB294 \uB9E4\uC7A5\uC5D0\uC11C \uAE30\uAE30 \uC0C1\uD0DC(\uBC30\uD130\uB9AC \uC131\uB2A5\xB7\uAE30\uC2A4\xB7\uD30C\uC190 \uC5EC\uBD80)\uB97C \uD655\uC778\uD55C \uB4A4 \uD655\uC815\uD569\uB2C8\uB2E4. \uC2DC\uC138\uB294 \uB9E4\uC77C \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
  ],
  [
    "\uB4F1\uAE09\uC740 \uC5B4\uB5BB\uAC8C \uB098\uB258\uB098\uC694?",
    "A\uAE09\uC740 \uAE30\uC2A4\uAC00 \uAC70\uC758 \uC5C6\uACE0 \uBC30\uD130\uB9AC \uC131\uB2A5 \uAE30\uC900\uC744 \uCDA9\uC871\uD55C \uAE30\uAE30, B\uAE09\uC740 \uC0DD\uD65C\uAE30\uC2A4\uAC00 \uC788\uACE0 \uBC30\uD130\uB9AC 86~90%\uC778 \uAE30\uAE30, C\uAE09\uC740 \uAE30\uC2A4\uAC00 \uB9CE\uAC70\uB098 \uC0AC\uC6A9\uAC10\uC774 \uD070 \uAE30\uAE30\uC785\uB2C8\uB2E4. \uD30C\uC190\xB7\uC794\uC0C1\uC740 \uBCC4\uB3C4 \uAC10\uAC00\uB429\uB2C8\uB2E4."
  ],
  [
    "\uD314\uB7EC \uAC08 \uB54C \uBB58 \uC900\uBE44\uD558\uBA74 \uB418\uB098\uC694?",
    "\uBCF8\uC778 \uD655\uC778\uC744 \uC704\uD55C \uC2E0\uBD84\uC99D\uC744 \uC9C0\uCC38\uD574 \uC8FC\uC138\uC694(\uC628\uB77C\uC778\uC73C\uB85C\uB294 \uBC1B\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4). \uAE30\uAE30 \uCD08\uAE30\uD654\xB7\uACC4\uC815 \uD574\uC81C\uB294 \uB9E4\uC7A5\uC5D0\uC11C \uD568\uAED8 \uC9C4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
  ],
  [
    "\uC911\uACE0\uD3F0 \uAD6C\uB9E4\uB3C4 \uAC00\uB2A5\uD55C\uAC00\uC694?",
    "\uC7AC\uACE0\uB294 \uC785\uACE0 \uC0C1\uD669\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4. \uD398\uC774\uC9C0\uC758 \uC0C1\uB2F4 \uD3FC\uC5D0 \uC6D0\uD558\uB294 \uBAA8\uB378\xB7\uC6A9\uB7C9\xB7\uC0C9\uC0C1\uC744 \uB0A8\uACA8 \uC8FC\uC2DC\uBA74 \uC7AC\uACE0\uC640 \uC0C1\uD0DC\uB97C \uD655\uC778\uD574 \uC5F0\uB77D\uB4DC\uB9BD\uB2C8\uB2E4."
  ]
];
function UsedFaqSection() {
  return /* @__PURE__ */ React.createElement("section", { className: "section", id: "faq" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), "FAQ"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, /* @__PURE__ */ React.createElement("span", { className: "h-thin" }, "\uC790\uC8FC \uBB3B\uB294"), " ", /* @__PURE__ */ React.createElement("span", { className: "h-bold" }, "\uC9C8\uBB38"))), /* @__PURE__ */ React.createElement(Reveal, { delay: 60 }, /* @__PURE__ */ React.createElement("div", { className: "us-faq" }, USED_FAQ.map(
    ([q, a]) => /* @__PURE__ */ React.createElement("details", { className: "us-faq__item", key: q }, /* @__PURE__ */ React.createElement("summary", null, q), /* @__PURE__ */ React.createElement("p", null, a))
  )))));
}
function goConsult(type, model) {
  window.dispatchEvent(new CustomEvent("used-consult-prefill", { detail: { type, model } }));
  const el = document.getElementById("consult");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
function UsedConsultSection() {
  const [type, setType] = useStateU("sell");
  const [form, setForm] = useStateU({ name: "", phone: "", model: "", note: "", consent: false });
  const [sending, setSending] = useStateU(false);
  const [submitted, setSubmitted] = useStateU(false);
  const [error, setError] = useStateU("");
  useEffectU(() => {
    const onPrefill = (e) => {
      const d = e.detail || {};
      if (d.type) setType(d.type);
      if (d.model) setForm((f2) => ({ ...f2, model: d.model }));
    };
    window.addEventListener("used-consult-prefill", onPrefill);
    return () => window.removeEventListener("used-consult-prefill", onPrefill);
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (sending || submitted) return;
    if (!form.name.trim() || !form.phone.trim()) {
      setError("\uC774\uB984\uACFC \uC5F0\uB77D\uCC98\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.");
      return;
    }
    if (!form.consent) {
      setError("\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1\xB7\uC774\uC6A9\uC5D0 \uB3D9\uC758\uD574\uC8FC\uC138\uC694.");
      return;
    }
    setError("");
    let refCode = "";
    try {
      refCode = localStorage.getItem("referralCode") || "";
      const refAt = localStorage.getItem("referralAt") || "";
      if (refCode && refAt && Date.now() - new Date(refAt).getTime() > 30 * 24 * 60 * 60 * 1e3) refCode = "";
    } catch (e2) {
    }
    const label = type === "sell" ? "\uC911\uACE0\uD3F0 \uD310\uB9E4(\uB9E4\uC785)" : "\uC911\uACE0\uD3F0 \uAD6C\uB9E4";
    const payload = {
      name: form.name,
      phone: form.phone,
      birth: "",
      carrier: "",
      topics: [label],
      model: form.model,
      capacity: "",
      color: "",
      date: "",
      time: "",
      note: form.note,
      consent: true,
      referralCode: refCode,
      source: "used-page",
      submittedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    const url = typeof window !== "undefined" && window.BOOKING_WEBHOOK_URL || "";
    setSending(true);
    if (url && url.indexOf("YOUR-") === -1) {
      try {
        const res = await fetch(url, { method: "POST", mode: "cors", body: JSON.stringify(payload) });
        if (!res.ok) throw new Error("HTTP " + res.status);
      } catch (err) {
        setSending(false);
        setError("\uC77C\uC2DC\uC801\uC778 \uC624\uB958\uB85C \uC811\uC218\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC2DC\uAC70\uB098 010-7932-9779\uB85C \uC804\uD654 \uC8FC\uC138\uC694.");
        return;
      }
    }
    if (window.gmTrack) window.gmTrack("used_consult_submit", { kind: type, model: form.model || "" });
    setSubmitted(true);
  };
  const f = (k) => (e) => setForm((prev) => ({ ...prev, [k]: e.target.value }));
  return /* @__PURE__ */ React.createElement("section", { className: "section", id: "consult" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), "CONSULT"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, /* @__PURE__ */ React.createElement("span", { className: "h-thin" }, "\uC911\uACE0\uD3F0 \uC0C1\uB2F4,"), " ", /* @__PURE__ */ React.createElement("span", { className: "h-bold" }, "\uC5EC\uAE30\uC11C \uBC14\uB85C \uC811\uC218\uD558\uC138\uC694")), /* @__PURE__ */ React.createElement("p", { className: "section-sub" }, "\uB0A8\uACA8\uC8FC\uC2DC\uBA74 \uD655\uC778 \uD6C4 \uBC14\uB85C \uC5F0\uB77D\uB4DC\uB9BD\uB2C8\uB2E4. \uBC29\uBB38 \uC804\uC5D0 \uC608\uC0C1\uAC00\xB7\uC7AC\uACE0\uB97C \uBBF8\uB9AC \uD655\uC778\uD574 \uB4DC\uB824\uC694.")), /* @__PURE__ */ React.createElement(Reveal, { delay: 80 }, /* @__PURE__ */ React.createElement("form", { className: "us-consult", onSubmit, noValidate: true }, /* @__PURE__ */ React.createElement("div", { className: "us-consult__type" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "chip" + (type === "sell" ? " on" : ""), onClick: () => setType("sell") }, "\uB0B4 \uD3F0 \uD314\uAE30 (\uB9E4\uC785)"), /* @__PURE__ */ React.createElement("button", { type: "button", className: "chip" + (type === "buy" ? " on" : ""), onClick: () => setType("buy") }, "\uC911\uACE0\uD3F0 \uAD6C\uB9E4")), /* @__PURE__ */ React.createElement("div", { className: "us-consult__row" }, /* @__PURE__ */ React.createElement("input", { className: "input", placeholder: "\uC774\uB984 *", value: form.name, onChange: f("name"), autoComplete: "name" }), /* @__PURE__ */ React.createElement("input", { className: "input", type: "tel", placeholder: "\uC5F0\uB77D\uCC98 *", value: form.phone, onChange: f("phone"), autoComplete: "tel" })), /* @__PURE__ */ React.createElement(
    "input",
    {
      className: "input",
      placeholder: type === "sell" ? "\uBAA8\uB378 \xB7 \uC0C1\uD0DC (\uC704 \uACC4\uC0B0\uAE30\uC5D0\uC11C \uC790\uB3D9 \uC785\uB825\uB3FC\uC694)" : "\uCC3E\uB294 \uBAA8\uB378 \xB7 \uC6A9\uB7C9 \xB7 \uC0C9\uC0C1",
      value: form.model,
      onChange: f("model")
    }
  ), /* @__PURE__ */ React.createElement("textarea", { className: "textarea", rows: 3, placeholder: "\uB0A8\uAE30\uC2E4 \uB9D0\uC500 (\uC120\uD0DD)", value: form.note, onChange: f("note") }), /* @__PURE__ */ React.createElement("label", { className: "us-consult__consent" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "checkbox",
      checked: form.consent,
      onChange: (e) => setForm((prev) => ({ ...prev, consent: e.target.checked }))
    }
  ), /* @__PURE__ */ React.createElement("span", null, "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1\xB7\uC774\uC6A9\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ React.createElement("a", { href: "privacy.html", target: "_blank", rel: "noopener noreferrer" }, "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68"), "\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.")), error && /* @__PURE__ */ React.createElement("div", { className: "us-consult__err", role: "alert" }, error), submitted ? /* @__PURE__ */ React.createElement("div", { className: "us-consult__ok", role: "status" }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 16 }), " \uC811\uC218\uB410\uC5B4\uC694! \uD655\uC778 \uD6C4 \uBC14\uB85C \uC5F0\uB77D\uB4DC\uB9B4\uAC8C\uC694.") : /* @__PURE__ */ React.createElement("button", { type: "submit", className: "btn btn-primary btn-lg", disabled: sending, style: { width: "100%" } }, sending ? "\uC811\uC218 \uC911\u2026" : "\uC0C1\uB2F4 \uC2E0\uCCAD\uD558\uAE30")))));
}
function UsedPage() {
  const usedDevices = useMemoU(
    () => DEVICES.filter((d) => d.channels.includes("used")),
    []
  );
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, { base: "./" }), /* @__PURE__ */ React.createElement("main", { id: "top" }, /* @__PURE__ */ React.createElement("section", { className: "us-hero" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), "USED"), /* @__PURE__ */ React.createElement("h1", { className: "section-title" }, /* @__PURE__ */ React.createElement("span", { className: "h-thin" }, "\uC911\uACE0\uD3F0,"), /* @__PURE__ */ React.createElement("span", { className: "h-bold" }, "\uD314 \uB54C\uB3C4 \uC0B4 \uB54C\uB3C4 \uD22C\uBA85\uD558\uAC8C")), /* @__PURE__ */ React.createElement("p", { className: "section-sub" }, "\uC4F0\uB358 \uD3F0\uC740 \uACF5\uAC1C\uB41C \uB4F1\uAE09 \uAE30\uC900\uB300\uB85C \uB9E4\uC785\uD558\uACE0, \uC911\uACE0\uD3F0\uC740 \uB9E4\uC7A5\uC5D0\uC11C \uC0C1\uD0DC\uB97C \uD568\uAED8 \uD655\uC778\uD558\uACE0 \uD310\uB9E4\uD569\uB2C8\uB2E4. \uC608\uC0C1 \uBC94\uC704\uB97C \uBA3C\uC800 \uBCF4\uC5EC\uB4DC\uB9AC\uACE0, \uCD5C\uC885 \uC870\uAC74\uC740 \uC0C1\uB2F4\uC5D0\uC11C \uD22C\uBA85\uD558\uAC8C \uC548\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement("div", { className: "us-sample", role: "note" }, /* @__PURE__ */ React.createElement(Icon, { name: "clock", size: 15 }), /* @__PURE__ */ React.createElement("span", null, "\uB9E4\uC785 \uC608\uC0C1\uAC00 \uAE30\uC900\uC77C ", USED_PRICE_DATE, " \xB7 \uC2DC\uC138\uC5D0 \uB530\uB77C \uB9E4\uC77C \uBCC0\uB3D9\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. ", USED_NOTE)))), /* @__PURE__ */ React.createElement("section", { className: "us-calc", id: "buyback" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), "BUYBACK"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, /* @__PURE__ */ React.createElement("span", { className: "h-thin" }, "\uBAA8\uB378\uACFC \uC0C1\uD0DC\uB9CC \uACE0\uB974\uBA74,"), /* @__PURE__ */ React.createElement("span", { className: "h-bold" }, "\uC608\uC0C1 \uB9E4\uC785 \uBC94\uC704\uAC00 \uBC14\uB85C \uBCF4\uC785\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement("p", { className: "section-sub" }, "\uC815\uD655\uD55C \uAE08\uC561\uC740 \uAE30\uAE30 \uC0C1\uD0DC\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9C0\uAE30 \uB54C\uBB38\uC5D0, \uBD80\uD480\uB9AC\uC9C0 \uC54A\uACE0 \uBC94\uC704\uB85C \uBA3C\uC800 \uC548\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement(Reveal, { delay: 100 }, /* @__PURE__ */ React.createElement(BuybackCalc, null)), /* @__PURE__ */ React.createElement(UsPriceNote, null))), /* @__PURE__ */ React.createElement("section", { className: "section", id: "grades" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), "GRADE"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, /* @__PURE__ */ React.createElement("span", { className: "h-thin" }, "\uAC10\uC73C\uB85C \uB9E4\uAE30\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("span", { className: "h-bold" }, "\uB124 \uAC00\uC9C0 \uB4F1\uAE09, \uAC19\uC740 \uAE30\uC900.")), /* @__PURE__ */ React.createElement("p", { className: "section-sub" }, "\uB204\uAC00 \uC624\uC154\uB3C4 \uAC19\uC740 \uAE30\uC900\uC73C\uB85C \uD655\uC778\uD569\uB2C8\uB2E4. \uB4F1\uAE09\uC740 \uB9E4\uC7A5\uC5D0\uC11C \uAE30\uAE30 \uC0C1\uD0DC\uB97C \uD568\uAED8 \uBCF4\uBA70 \uC815\uD569\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement("div", { className: "us-grade-grid" }, USED_GRADES.map(
    (g, i) => /* @__PURE__ */ React.createElement(Reveal, { key: g.key, delay: i * 70 }, /* @__PURE__ */ React.createElement("article", { className: "us-grade-card" }, /* @__PURE__ */ React.createElement("div", { className: "us-grade-card__key" }, g.key), /* @__PURE__ */ React.createElement("h3", null, g.label), /* @__PURE__ */ React.createElement("p", null, g.desc)))
  )))), /* @__PURE__ */ React.createElement("section", { className: "section", id: "price-table" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), "PRICE RANGE"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, /* @__PURE__ */ React.createElement("span", { className: "h-thin" }, "\uBAA8\uB378\uBCC4 \uB9E4\uC785 \uC608\uC0C1 \uBC94\uC704,"), /* @__PURE__ */ React.createElement("span", { className: "h-bold" }, "\uD45C\uB85C \uD55C\uB208\uC5D0.")), /* @__PURE__ */ React.createElement("p", { className: "section-sub" }, "\uBAA8\uB4E0 \uAE08\uC561\uC740 \uC608\uC0C1 \uBC94\uC704\uC785\uB2C8\uB2E4. \uD45C\uC5D0 \uC5C6\uB294 \uBAA8\uB378\uB3C4 \uB9E4\uC7A5\uC5D0\uC11C \uD655\uC778\uD574 \uB4DC\uB9BD\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement(Reveal, { delay: 80 }, /* @__PURE__ */ React.createElement("div", { className: "us-table-hint", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 13 }), " \uC606\uC73C\uB85C \uBC00\uBA74 \uC804\uCCB4 \uB4F1\uAE09\uC774 \uBCF4\uC785\uB2C8\uB2E4"), /* @__PURE__ */ React.createElement("div", { className: "us-table-wrap", role: "region", "aria-label": "\uBAA8\uB378\uBCC4 \uB4F1\uAE09 \uB9E4\uC785 \uC608\uC0C1 \uBC94\uC704\uD45C", tabIndex: 0 }, /* @__PURE__ */ React.createElement("table", { className: "us-table" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", { scope: "col" }, "\uBAA8\uB378"), USED_GRADES.map(
    (g) => /* @__PURE__ */ React.createElement("th", { scope: "col", key: g.key }, g.key, "\uAE09")
  ))), /* @__PURE__ */ React.createElement("tbody", null, USED_BUYBACK.map(
    (row) => /* @__PURE__ */ React.createElement("tr", { key: row.model }, /* @__PURE__ */ React.createElement("th", { scope: "row" }, row.model), USED_GRADES.map(
      (g) => /* @__PURE__ */ React.createElement("td", { key: g.key }, wonRange(row.range[g.key]))
    ))
  ))))), /* @__PURE__ */ React.createElement(UsPriceNote, null))), /* @__PURE__ */ React.createElement("section", { className: "section", id: "buy-used" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), "BUY USED"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, /* @__PURE__ */ React.createElement("span", { className: "h-thin" }, "\uC911\uACE0\uD3F0 \uAD6C\uB9E4\uB3C4,"), /* @__PURE__ */ React.createElement("span", { className: "h-bold" }, "\uC0C1\uD0DC\uB97C \uBCF4\uACE0 \uACB0\uC815\uD558\uC138\uC694.")), /* @__PURE__ */ React.createElement("p", { className: "section-sub" }, "\uC544\uB798 \uBAA8\uB378\uC758 \uC911\uACE0 \uC7AC\uACE0\uB97C \uCDE8\uAE09\uD569\uB2C8\uB2E4. \uC911\uACE0 \uC7AC\uACE0\uB294 \uC785\uACE0 \uC0C1\uD669\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBC29\uBB38 \uC804\uC5D0 \uC608\uC57D\uD574 \uC8FC\uC2DC\uBA74 \uC7AC\uACE0 \uC5EC\uBD80\uB97C \uBBF8\uB9AC \uD655\uC778\uD574 \uB4DC\uB9BD\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement("div", { className: "us-buy-grid" }, usedDevices.map(
    (d, i) => /* @__PURE__ */ React.createElement(Reveal, { key: d.id, delay: Math.min(i, 5) * 60 }, /* @__PURE__ */ React.createElement("article", { className: "us-buy-card" }, /* @__PURE__ */ React.createElement("div", { className: "us-buy-card__imgwrap" }, /* @__PURE__ */ React.createElement("img", { src: d.img, alt: d.name, loading: "lazy", decoding: "async" })), /* @__PURE__ */ React.createElement("h3", { className: "us-buy-card__name" }, d.name), /* @__PURE__ */ React.createElement("div", { className: "us-buy-card__meta" }, d.network, " \xB7 ", d.storages.join(" / ")), /* @__PURE__ */ React.createElement("div", { className: "us-buy-card__ask" }, /* @__PURE__ */ React.createElement(Icon, { name: "tag", size: 13 }), " \uC7AC\uACE0\xB7\uAC00\uACA9 \uB9E4\uC7A5 \uBB38\uC758")))
  )), /* @__PURE__ */ React.createElement(Reveal, { delay: 100 }, /* @__PURE__ */ React.createElement("div", { className: "us-buy-cta" }, /* @__PURE__ */ React.createElement("div", { className: "us-buy-cta__tx" }, /* @__PURE__ */ React.createElement("h3", null, "\uCC3E\uB294 \uC911\uACE0\uD3F0\uC774 \uC788\uC73C\uC2E0\uAC00\uC694?"), /* @__PURE__ */ React.createElement("p", null, "\uBAA8\uB378\xB7\uC6A9\uB7C9\xB7\uC0C9\uC0C1\uC744 \uB0A8\uACA8 \uC8FC\uC2DC\uBA74 \uC7AC\uACE0\uC640 \uC0C1\uD0DC\uB97C \uD655\uC778\uD574 \uC548\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement("button", { type: "button", className: "btn btn-primary btn-lg", onClick: () => goConsult("buy", "") }, "\uC911\uACE0 \uAD6C\uB9E4 \uC0C1\uB2F4 \uC2E0\uCCAD ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 16 })))))), /* @__PURE__ */ React.createElement(UsedModelLinks, null), /* @__PURE__ */ React.createElement(UsedFaqSection, null), /* @__PURE__ */ React.createElement("section", { className: "section", style: { paddingTop: 0 } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "us-note" }, /* @__PURE__ */ React.createElement(Icon, { name: "doc", size: 18 }), /* @__PURE__ */ React.createElement("span", null, "\uD314\uAE30 \uC804\uC5D0 \uC900\uBE44\uD560 \uAC83\uC774 \uAD81\uAE08\uD558\uB2E4\uBA74", " ", /* @__PURE__ */ React.createElement("a", { href: "/guides/used-phone-trade-in", style: { textDecoration: "underline" } }, "\uC911\uACE0\uD3F0 \uB9E4\uC785 \uB4F1\uAE09\xB7\uC2DC\uC138 \uAC00\uC774\uB4DC"), "\uB97C, \uAE30\uAE30 \uAD50\uCCB4\uB97C \uACE0\uBBFC \uC911\uC774\uB77C\uBA74", " ", /* @__PURE__ */ React.createElement("a", { href: "/guides/number-transfer-vs-upgrade", style: { textDecoration: "underline" } }, "\uBC88\uD638\uC774\uB3D9 vs \uAE30\uAE30\uBCC0\uACBD \uBE44\uAD50"), "\uB97C \uCC38\uACE0\uD558\uC138\uC694.")))), /* @__PURE__ */ React.createElement(UsedConsultSection, null)), /* @__PURE__ */ React.createElement(CTASection, null), /* @__PURE__ */ React.createElement(Footer, null), /* @__PURE__ */ React.createElement(MobileActionBar, null), /* @__PURE__ */ React.createElement("style", null, `
        .us-hero {
          padding: calc(var(--header-h) + 64px) 0 clamp(48px, 6vw, 72px);
          background: linear-gradient(180deg, var(--bg-soft), var(--bg));
        }
        .us-hero .section-title { margin-bottom: 12px; }
        .us-hero .section-sub { margin-bottom: 0; }

        .us-sample {
          display: inline-flex; align-items: center; gap: 8px;
          margin-top: 20px; padding: 10px 16px;
          background: var(--blue-soft); color: var(--blue-deep);
          border: 1px solid rgba(0, 108, 255, 0.16);
          border-radius: var(--radius-sm);
          font-size: 13.5px; font-weight: 500; letter-spacing: -0.01em;
        }
        .us-sample svg { flex: none; }

        /* \u2500\u2500 \uACC4\uC0B0\uAE30 \u2500\u2500 */
        .us-calc { padding: 8px 0 clamp(72px, 8vw, 110px); }

        .us-calc-card {
          display: grid; grid-template-columns: 1.08fr 0.92fr;
          background: #fff; border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
          overflow: hidden;
        }
        .us-calc-controls { padding: clamp(22px, 3vw, 32px); display: flex; flex-direction: column; gap: 22px; }

        .us-field__label {
          display: block; font-size: 13px; font-weight: 600;
          color: var(--ink-600); letter-spacing: -0.01em; margin-bottom: 8px;
        }

        .us-grade-btns { display: flex; flex-direction: column; gap: 8px; }
        .us-grade-btn {
          display: flex; align-items: center; gap: 12px; width: 100%;
          padding: 12px 14px; text-align: left; cursor: pointer;
          background: #fff; border: 1.5px solid var(--line);
          border-radius: var(--radius-sm);
          transition: border-color .16s ease, background .16s ease, box-shadow .16s ease;
          font: inherit; color: inherit;
        }
        .us-grade-btn:hover { border-color: var(--blue); }
        .us-grade-btn.on {
          border-color: var(--blue); background: var(--blue-soft);
          box-shadow: 0 0 0 3px rgba(0, 108, 255, 0.10);
        }
        .us-grade-btn__key {
          flex: none; width: 38px; height: 38px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%; background: var(--surface-mute, #F5F5F7);
          font-family: var(--font-en); font-size: 16px; font-weight: 700;
          color: var(--ink-600);
        }
        .us-grade-btn.on .us-grade-btn__key { background: var(--blue); color: #fff; }
        .us-grade-btn__tx { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
        .us-grade-btn__tx b {
          font-size: 14.5px; font-weight: 700; color: var(--ink-headline);
          letter-spacing: -0.015em;
        }
        .us-grade-btn__tx span { font-size: 12.5px; color: var(--ink-500); letter-spacing: -0.01em; }
        .us-grade-btn__check { margin-left: auto; flex: none; color: var(--blue); display: flex; }

        .us-calc-result {
          padding: clamp(22px, 3vw, 32px);
          background: var(--blue-soft);
          border-left: 1px solid rgba(0, 108, 255, 0.14);
          display: flex; flex-direction: column; justify-content: center;
        }
        .us-result__label {
          font-family: var(--font-en); font-size: 12px; font-weight: 600;
          letter-spacing: 0.08em; color: var(--blue); text-transform: uppercase;
        }
        .us-result__pick { margin-top: 8px; font-size: 13.5px; color: var(--ink-600); letter-spacing: -0.01em; }
        .us-result__val {
          margin-top: 6px;
          font-size: clamp(24px, 3.4vw, 34px); font-weight: 800;
          color: var(--ink-headline); letter-spacing: -0.03em;
          font-variant-numeric: tabular-nums; word-break: keep-all;
        }
        .us-result__fixed {
          display: flex; align-items: flex-start; gap: 7px;
          margin-top: 14px; font-size: 13px; font-weight: 500;
          color: var(--blue-deep); line-height: 1.55;
        }
        .us-result__fixed svg { flex: none; margin-top: 3px; }
        .us-result__actions { margin-top: 20px; display: flex; flex-direction: column; align-items: flex-start; gap: 12px; }
        .us-result__actions .btn { width: 100%; justify-content: center; }
        .us-result__sub {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 13.5px; font-weight: 600; color: var(--ink-600);
        }
        .us-result__sub:hover { color: var(--blue); }

        .us-note {
          display: flex; align-items: flex-start; gap: 10px;
          margin-top: 28px; padding: 16px 18px;
          background: var(--bg-soft); border: 1px solid var(--line);
          border-radius: var(--radius-sm);
          font-size: 13.5px; color: var(--ink-600); line-height: 1.6;
        }
        .us-note svg { flex: none; color: var(--blue); margin-top: 2px; }

        /* \u2500\u2500 \uB4F1\uAE09 \uCE74\uB4DC \u2500\u2500 */
        .us-grade-grid {
          display: grid; gap: 16px;
          grid-template-columns: repeat(4, 1fr);
        }
        .us-grade-grid .reveal { height: 100%; }
        .us-grade-card {
          height: 100%;
          background: #fff; border: 1px solid var(--line);
          border-radius: var(--radius-md); padding: 24px 22px;
          box-shadow: var(--shadow-xs);
        }
        .us-grade-card__key {
          width: 46px; height: 46px; margin-bottom: 16px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%; background: var(--blue-soft); color: var(--blue-deep);
          font-family: var(--font-en); font-size: 19px; font-weight: 700;
        }
        .us-grade-card h3 {
          margin: 0 0 6px; font-size: 16.5px; font-weight: 700;
          color: var(--ink-headline); letter-spacing: -0.02em;
        }
        .us-grade-card p { margin: 0; font-size: 13.5px; color: var(--ink-500); line-height: 1.6; }

        /* \u2500\u2500 \uBC94\uC704\uD45C \u2500\u2500 */
        .us-table-hint {
          display: none; align-items: center; gap: 5px;
          font-size: 12.5px; color: var(--ink-500); margin-bottom: 10px;
        }
        .us-table-hint svg { transform: scaleX(-1); }
        .us-table-wrap {
          overflow-x: auto; -webkit-overflow-scrolling: touch;
          border: 1px solid var(--line); border-radius: var(--radius-md);
          background: #fff; box-shadow: var(--shadow-xs);
        }
        .us-table {
          width: 100%; min-width: 720px; border-collapse: collapse;
          font-size: 13.5px; letter-spacing: -0.01em;
        }
        .us-table th, .us-table td {
          padding: 13px 16px; text-align: right; white-space: nowrap;
          border-bottom: 1px solid var(--line);
          font-variant-numeric: tabular-nums;
        }
        .us-table thead th {
          background: var(--bg-soft); color: var(--ink-600);
          font-size: 12.5px; font-weight: 600; letter-spacing: 0;
        }
        .us-table th[scope="row"], .us-table thead th:first-child {
          text-align: left; font-weight: 600; color: var(--ink-headline);
          position: sticky; left: 0; background: #fff;
          box-shadow: inset -1px 0 0 var(--line);
        }
        .us-table thead th:first-child { background: var(--bg-soft); }
        .us-table tbody tr:last-child th, .us-table tbody tr:last-child td { border-bottom: none; }
        .us-table tbody tr:hover td { background: var(--bg-soft); }

        /* \u2500\u2500 \uC911\uACE0 \uAD6C\uB9E4 \u2500\u2500 */
        .us-buy-grid {
          display: grid; gap: 16px;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        }
        .us-buy-grid .reveal { height: 100%; }
        .us-buy-card {
          height: 100%; display: flex; flex-direction: column;
          background: #fff; border: 1px solid var(--line);
          border-radius: var(--radius-md); padding: 16px;
          box-shadow: var(--shadow-xs);
          transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
        }
        .us-buy-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
          border-color: var(--line-strong);
        }
        .us-buy-card__imgwrap {
          height: 150px; display: flex; align-items: center; justify-content: center;
          background: var(--surface-mute, #F5F5F7); border-radius: var(--radius-sm);
          margin-bottom: 12px;
        }
        .us-buy-card__imgwrap img { max-height: 126px; max-width: 74%; object-fit: contain; }
        .us-buy-card__name {
          margin: 0 0 2px; font-size: 15.5px; font-weight: 700;
          color: var(--ink-headline); letter-spacing: -0.02em;
        }
        .us-buy-card__meta { font-size: 12.5px; color: var(--ink-500); }
        .us-buy-card__ask {
          margin-top: auto; padding-top: 12px;
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 12.5px; font-weight: 600; color: var(--blue-deep);
        }
        .us-buy-card__ask svg { flex: none; }

        .us-buy-cta {
          margin-top: 28px; padding: clamp(24px, 3vw, 32px);
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; flex-wrap: wrap;
          background: var(--blue-soft); border: 1px solid rgba(0, 108, 255, 0.14);
          border-radius: var(--radius-lg);
        }
        .us-buy-cta__tx h3 {
          margin: 0; font-size: 21px; font-weight: 700;
          color: var(--ink-headline); letter-spacing: -0.02em;
        }
        .us-buy-cta__tx p { margin: 6px 0 0; font-size: 14.5px; color: var(--ink-600); }
        .us-buy-cta .btn { flex: none; }

        /* \u2500\u2500 \uBC18\uC751\uD615 \u2500\u2500 */
        @media (max-width: 860px) {
          .us-calc-card { grid-template-columns: 1fr; }
          .us-calc-result { border-left: none; border-top: 1px solid rgba(0, 108, 255, 0.14); }
          .us-grade-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .us-hero { padding-top: calc(var(--header-h) + 44px); }
          .us-table-hint { display: inline-flex; }
          .us-buy-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px; }
          .us-buy-card { padding: 13px; }
          .us-buy-card__imgwrap { height: 118px; }
          .us-buy-card__imgwrap img { max-height: 98px; }
          .us-buy-cta .btn { width: 100%; }
        }
        @media (max-width: 480px) {
          .us-grade-grid { grid-template-columns: 1fr; }
        }
        .us-modellinks { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 8px; }
        .us-modellinks a {
          display: block; padding: 13px 16px; border: 1px solid var(--line, #e5e8eb);
          border-radius: 12px; background: #fff; font-size: 14.5px; font-weight: 600;
          color: var(--ink-700, #333d4b); transition: border-color .15s, transform .15s;
        }
        .us-modellinks a:hover { border-color: var(--accent, #006CFF); color: var(--accent, #006CFF); transform: translateY(-1px); }
        .us-faq { max-width: 720px; display: grid; gap: 10px; }
        .us-faq__item { background: var(--panel, #fff); border: 1px solid var(--line, #e5e8eb); border-radius: 14px; padding: 0 18px; }
        .us-faq__item summary { cursor: pointer; font-weight: 700; font-size: 15.5px; padding: 16px 0; list-style: none; }
        .us-faq__item summary::-webkit-details-marker { display: none; }
        .us-faq__item summary::before { content: "Q. "; color: var(--accent, #2b5bf0); font-weight: 800; }
        .us-faq__item p { margin: 0; padding: 0 0 16px; color: var(--ink-600, #4b5563); font-size: 14.5px; line-height: 1.65; }
        .us-consult {
          max-width: 640px; display: grid; gap: 12px;
          background: var(--panel, #fff); border: 1px solid var(--line, #e5e8eb);
          border-radius: 20px; padding: 26px 24px; box-shadow: 0 8px 28px rgba(17,24,39,.06);
        }
        .us-consult__type { display: flex; gap: 8px; margin-bottom: 4px; }
        .us-consult__row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .us-consult__consent { display: flex; gap: 9px; align-items: flex-start; font-size: 13.5px; color: var(--ink-600, #4b5563); }
        .us-consult__consent input { width: 17px; height: 17px; margin-top: 2px; }
        .us-consult__consent a { text-decoration: underline; }
        .us-consult__err { border-radius: 12px; padding: 12px 14px; background: #FDEDEE; color: #d6455f; font-size: 14px; font-weight: 600; }
        .us-consult__ok { border-radius: 12px; padding: 14px 16px; background: #E6F6EF; color: #067a52; font-size: 15px; font-weight: 700; display: flex; gap: 8px; align-items: center; }
        @media (max-width: 640px) { .us-consult__row { grid-template-columns: 1fr; } }
      `));
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(UsedPage, null));

/* 전역 노출 */
if (typeof UsPriceNote !== "undefined") globalThis.UsPriceNote = UsPriceNote;
if (typeof BuybackCalc !== "undefined") globalThis.BuybackCalc = BuybackCalc;
if (typeof UsedModelLinks !== "undefined") globalThis.UsedModelLinks = UsedModelLinks;
if (typeof UsedFaqSection !== "undefined") globalThis.UsedFaqSection = UsedFaqSection;
if (typeof goConsult !== "undefined") globalThis.goConsult = goConsult;
if (typeof UsedConsultSection !== "undefined") globalThis.UsedConsultSection = UsedConsultSection;
if (typeof UsedPage !== "undefined") globalThis.UsedPage = UsedPage;
})();