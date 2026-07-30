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
/* /admin.jsx?v=c18d0971 */
(function(){
const { useState: useA, useEffect: useAE, useCallback: useAC, useMemo: useAM } = React;
const A_CONFIGURED = typeof window.SUPABASE_URL === "string" && window.SUPABASE_URL.indexOf("YOUR-") === -1 && typeof window.SUPABASE_ANON_KEY === "string" && window.SUPABASE_ANON_KEY.indexOf("YOUR-") === -1;
const asb = A_CONFIGURED && window.supabase ? window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY) : null;
const won = (n) => (n || 0).toLocaleString("ko-KR") + "\uC6D0";
const ymd = (s) => s ? new Date(s).toLocaleDateString("ko-KR") : "-";
const STATUS = {
  pending: { label: "\uC811\uC218", cls: "is-pending" },
  visited: { label: "\uBC29\uBB38", cls: "is-visited" },
  activated: { label: "\uAC1C\uD1B5 \uC644\uB8CC", cls: "is-activated" },
  rejected: { label: "\uCDE8\uC18C", cls: "is-rejected" }
};
function AdminHeader({ onLogout, email }) {
  return /* @__PURE__ */ React.createElement("header", { className: "partner-header" }, /* @__PURE__ */ React.createElement("div", { className: "container partner-header__inner" }, /* @__PURE__ */ React.createElement("a", { href: "/", className: "brand", "aria-label": "\uACF5\uC77C\uBAA8\uBC14\uC77C \uD648" }, /* @__PURE__ */ React.createElement("span", { className: "brand-logo", style: { width: 34, height: 34, display: "grid", placeItems: "center" } }, /* @__PURE__ */ React.createElement("img", { src: "assets/logo.png", alt: "\uACF5\uC77C\uBAA8\uBC14\uC77C", style: { width: "100%", height: "100%", objectFit: "contain" } })), /* @__PURE__ */ React.createElement("span", { className: "brand-text" }, /* @__PURE__ */ React.createElement("strong", null, "\uACF5\uC77C\uBAA8\uBC14\uC77C"), /* @__PURE__ */ React.createElement("small", null, "ADMIN"))), onLogout && /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-sm", onClick: onLogout }, "\uB85C\uADF8\uC544\uC6C3")));
}
function AdminApp() {
  const [ready, setReady] = useA(false);
  const [session, setSession] = useA(null);
  const [isAdmin, setIsAdmin] = useA(false);
  const [partners, setPartners] = useA([]);
  const [refs, setRefs] = useA([]);
  const [q, setQ] = useA("");
  const [busy, setBusy] = useA(false);
  const [tab, setTab] = useA("referrals");
  const [adminId, setAdminId] = useA("");
  const [adminPw, setAdminPw] = useA("");
  const [loginErr, setLoginErr] = useA("");
  const load = useAC(async (uid) => {
    const { data: me } = await asb.from("partners").select("is_admin").eq("id", uid).single();
    const admin = !!(me && me.is_admin);
    setIsAdmin(admin);
    if (!admin) return;
    const { data: ps } = await asb.from("partners").select("*");
    const { data: rs } = await asb.from("referrals").select("*").order("created_at", { ascending: false });
    setPartners(ps || []);
    setRefs(rs || []);
  }, []);
  useAE(() => {
    if (!asb) {
      setReady(true);
      return;
    }
    asb.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (data.session) load(data.session.user.id).finally(() => setReady(true));
      else setReady(true);
    });
    const { data: sub } = asb.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      setBusy(false);
      if (s) load(s.user.id);
      else {
        setIsAdmin(false);
        setPartners([]);
        setRefs([]);
      }
    });
    return () => sub.subscription.unsubscribe();
  }, [load]);
  const partnerById = useAM(() => {
    const m = {};
    partners.forEach((p) => {
      m[p.id] = p;
    });
    return m;
  }, [partners]);
  const isComplete = (p) => !!(p && p.name && p.name.trim() && p.phone && p.phone.trim());
  const activePartners = useAM(() => partners.filter(isComplete), [partners]);
  const stats = useAM(() => {
    const m = {};
    activePartners.forEach((p) => {
      m[p.id] = { p, total: 0, activated: 0, reward: 0, unpaid: 0 };
    });
    refs.forEach((r) => {
      const s = m[r.partner_id];
      if (!s) return;
      s.total++;
      if (r.status === "activated") {
        s.activated++;
        s.reward += r.reward_amount || 0;
        if (!r.reward_paid) s.unpaid += r.reward_amount || 0;
      }
    });
    return Object.values(m).sort((a, b) => b.activated - a.activated || b.total - a.total);
  }, [activePartners, refs]);
  const totals = useAM(() => {
    let act = 0, reward = 0, unpaid = 0, pend = 0;
    refs.forEach((r) => {
      if (r.status === "activated") {
        act++;
        reward += r.reward_amount || 0;
        if (!r.reward_paid) unpaid += r.reward_amount || 0;
      } else if (r.status === "pending" || r.status === "visited") pend++;
    });
    return { act, reward, unpaid, pend, partners: activePartners.length };
  }, [refs, activePartners]);
  const filtered = useAM(() => {
    const t = q.trim().toLowerCase();
    if (!t) return refs;
    return refs.filter((r) => {
      const p = partnerById[r.partner_id] || {};
      return [r.referred_name, r.referred_phone, p.name, p.phone, p.referral_code].filter(Boolean).some((v) => String(v).toLowerCase().includes(t));
    });
  }, [refs, q, partnerById]);
  const update = async (id, patch) => {
    setBusy(true);
    const { error } = await asb.from("referrals").update(patch).eq("id", id);
    if (error) alert("\uC218\uC815 \uC624\uB958: " + error.message);
    else if (session) await load(session.user.id);
    setBusy(false);
  };
  const activate = (r) => update(r.id, { status: "activated", activated_at: (/* @__PURE__ */ new Date()).toISOString() });
  const setStatus = (r, status) => update(r.id, { status });
  const togglePaid = (r) => update(r.id, { reward_paid: !r.reward_paid });
  const loginPassword = async (e) => {
    if (e) e.preventDefault();
    if (!adminId.trim() || !adminPw) {
      setLoginErr("\uC544\uC774\uB514\uC640 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.");
      return;
    }
    setBusy(true);
    setLoginErr("");
    const email = adminId.trim() + "@01mobile.co.kr";
    const { error } = await asb.auth.signInWithPassword({ email, password: adminPw });
    if (error) {
      setLoginErr("\uC544\uC774\uB514 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
      setBusy(false);
    } else {
      setAdminPw("");
      setBusy(false);
    }
  };
  const logout = async () => {
    await asb.auth.signOut();
  };
  if (!asb) return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AdminHeader, null), /* @__PURE__ */ React.createElement("div", { className: "partner-shell" }, /* @__PURE__ */ React.createElement("div", { className: "partner-card partner-card--notice" }, /* @__PURE__ */ React.createElement("h2", null, "\uC124\uC815 \uD544\uC694"), /* @__PURE__ */ React.createElement("p", null, "supabase-config.js \uC124\uC815\uC774 \uD544\uC694\uD569\uB2C8\uB2E4."))));
  if (!ready) return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AdminHeader, null), /* @__PURE__ */ React.createElement("div", { className: "partner-shell" }, /* @__PURE__ */ React.createElement("div", { className: "partner-loading" }, "\uBD88\uB7EC\uC624\uB294 \uC911\u2026")));
  if (!session) return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AdminHeader, null), /* @__PURE__ */ React.createElement("div", { className: "partner-shell" }, /* @__PURE__ */ React.createElement("form", { className: "partner-card partner-login", onSubmit: loginPassword }, /* @__PURE__ */ React.createElement("div", { className: "partner-ico-lg" }, /* @__PURE__ */ React.createElement(Icon, { name: "shield", size: 28 })), /* @__PURE__ */ React.createElement("h1", null, "\uAD00\uB9AC\uC790 \uB85C\uADF8\uC778"), /* @__PURE__ */ React.createElement("p", null, "\uB9E4\uC7A5 \uAD00\uB9AC\uC790 \uC804\uC6A9 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("div", { className: "field", style: { textAlign: "left", marginBottom: 12 } }, /* @__PURE__ */ React.createElement("label", { htmlFor: "ad-id" }, "\uC544\uC774\uB514"), /* @__PURE__ */ React.createElement(
    "input",
    {
      id: "ad-id",
      className: "input",
      autoComplete: "username",
      value: adminId,
      onChange: (e) => setAdminId(e.target.value),
      placeholder: "\uC544\uC774\uB514"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "field", style: { textAlign: "left", marginBottom: 16 } }, /* @__PURE__ */ React.createElement("label", { htmlFor: "ad-pw" }, "\uBE44\uBC00\uBC88\uD638"), /* @__PURE__ */ React.createElement(
    "input",
    {
      id: "ad-pw",
      type: "password",
      className: "input",
      autoComplete: "current-password",
      value: adminPw,
      onChange: (e) => setAdminPw(e.target.value),
      placeholder: "\uBE44\uBC00\uBC88\uD638"
    }
  )), loginErr && /* @__PURE__ */ React.createElement("div", { className: "partner-err", style: { marginBottom: 12 } }, loginErr), /* @__PURE__ */ React.createElement("button", { type: "submit", className: "btn btn-primary btn-lg", style: { width: "100%" }, disabled: busy }, busy ? "\uB85C\uADF8\uC778 \uC911\u2026" : "\uB85C\uADF8\uC778"), /* @__PURE__ */ React.createElement("a", { href: "/", className: "partner-back" }, "\u2190 \uB9E4\uC7A5 \uD648\uC73C\uB85C"))));
  if (!isAdmin) return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AdminHeader, { onLogout: logout }), /* @__PURE__ */ React.createElement("div", { className: "partner-shell" }, /* @__PURE__ */ React.createElement("div", { className: "partner-card partner-card--notice" }, /* @__PURE__ */ React.createElement("div", { className: "partner-ico-lg" }, /* @__PURE__ */ React.createElement(Icon, { name: "shield", size: 26 })), /* @__PURE__ */ React.createElement("h2", null, "\uAD00\uB9AC\uC790 \uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"), /* @__PURE__ */ React.createElement("p", null, "\uC774 \uACC4\uC815\uC740 \uC544\uC9C1 \uAD00\uB9AC\uC790\uB85C \uC9C0\uC815\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. Supabase\uC5D0\uC11C \uC544\uB798 \uC0AC\uC6A9\uC790\uB97C \uAD00\uB9AC\uC790\uB85C \uC9C0\uC815\uD55C \uB4A4 \uC0C8\uB85C\uACE0\uCE68\uD558\uC138\uC694."), /* @__PURE__ */ React.createElement("div", { className: "admin-uid" }, "\uB0B4 \uC0AC\uC6A9\uC790 ID: ", /* @__PURE__ */ React.createElement("code", null, session.user.id)), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, marginTop: 14 } }, "Supabase \u2192 Table Editor \u2192 ", /* @__PURE__ */ React.createElement("b", null, "partners"), " \u2192 \uC704 ID \uD589 \u2192 ", /* @__PURE__ */ React.createElement("b", null, "is_admin"), " \uCCB4\uD06C (true)"), /* @__PURE__ */ React.createElement("a", { href: "/", className: "btn btn-primary" }, "\uD648\uC73C\uB85C"))));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AdminHeader, { onLogout: logout }), /* @__PURE__ */ React.createElement("div", { className: "admin-wrap" }, /* @__PURE__ */ React.createElement("div", { className: "admin-head" }, /* @__PURE__ */ React.createElement("h1", null, "\uAD00\uB9AC\uC790 \uB300\uC2DC\uBCF4\uB4DC"), /* @__PURE__ */ React.createElement("p", null, "\uCD94\uCC9C\xB7\uAC1C\uD1B5 \uD604\uD669\uACFC \uD30C\uD2B8\uB108 \uC2E4\uC801\uC744 \uAD00\uB9AC\uD569\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement("div", { className: "admin-kpis" }, /* @__PURE__ */ React.createElement("div", { className: "admin-kpi" }, /* @__PURE__ */ React.createElement("div", { className: "l" }, "\uAC1C\uD1B5 \uC644\uB8CC"), /* @__PURE__ */ React.createElement("div", { className: "v" }, totals.act, /* @__PURE__ */ React.createElement("small", null, "\uAC74"))), /* @__PURE__ */ React.createElement("div", { className: "admin-kpi" }, /* @__PURE__ */ React.createElement("div", { className: "l" }, "\uC9C4\uD589 \uC911"), /* @__PURE__ */ React.createElement("div", { className: "v" }, totals.pend, /* @__PURE__ */ React.createElement("small", null, "\uAC74"))), /* @__PURE__ */ React.createElement("div", { className: "admin-kpi" }, /* @__PURE__ */ React.createElement("div", { className: "l" }, "\uB204\uC801 \uB9AC\uC6CC\uB4DC"), /* @__PURE__ */ React.createElement("div", { className: "v" }, won(totals.reward))), /* @__PURE__ */ React.createElement("div", { className: "admin-kpi admin-kpi--warn" }, /* @__PURE__ */ React.createElement("div", { className: "l" }, "\uBBF8\uC9C0\uAE09 \uB9AC\uC6CC\uB4DC"), /* @__PURE__ */ React.createElement("div", { className: "v" }, won(totals.unpaid))), /* @__PURE__ */ React.createElement("div", { className: "admin-kpi" }, /* @__PURE__ */ React.createElement("div", { className: "l" }, "\uD30C\uD2B8\uB108 \uC218"), /* @__PURE__ */ React.createElement("div", { className: "v" }, totals.partners, /* @__PURE__ */ React.createElement("small", null, "\uBA85")))), /* @__PURE__ */ React.createElement("div", { className: "admin-tabs" }, /* @__PURE__ */ React.createElement("button", { className: tab === "referrals" ? "on" : "", onClick: () => setTab("referrals") }, "\uCD94\uCC9C \uB0B4\uC5ED"), /* @__PURE__ */ React.createElement("button", { className: tab === "partners" ? "on" : "", onClick: () => setTab("partners") }, "\uD30C\uD2B8\uB108 \uC2E4\uC801"), /* @__PURE__ */ React.createElement("button", { className: "admin-refresh", onClick: () => session && load(session.user.id), disabled: busy }, "\uC0C8\uB85C\uACE0\uCE68")), tab === "referrals" && /* @__PURE__ */ React.createElement("div", { className: "admin-panel" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      className: "input admin-search",
      placeholder: "\uACE0\uAC1D\uBA85\xB7\uC804\uD654\uBC88\uD638\xB7\uCD94\uCC9C\uC778\xB7\uCD94\uCC9C\uCF54\uB4DC \uAC80\uC0C9",
      value: q,
      onChange: (e) => setQ(e.target.value)
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "admin-table-wrap" }, /* @__PURE__ */ React.createElement("table", { className: "admin-table" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "\uB4F1\uB85D\uC77C"), /* @__PURE__ */ React.createElement("th", null, "\uCD94\uCC9C\uC778"), /* @__PURE__ */ React.createElement("th", null, "\uC18C\uAC1C\uBC1B\uC740 \uBD84"), /* @__PURE__ */ React.createElement("th", null, "\uC5F0\uB77D\uCC98"), /* @__PURE__ */ React.createElement("th", null, "\uBA54\uBAA8"), /* @__PURE__ */ React.createElement("th", null, "\uC0C1\uD0DC"), /* @__PURE__ */ React.createElement("th", null, "\uB9AC\uC6CC\uB4DC"), /* @__PURE__ */ React.createElement("th", null, "\uCC98\uB9AC"))), /* @__PURE__ */ React.createElement("tbody", null, filtered.length === 0 && /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", { colSpan: "8", className: "admin-empty" }, "\uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.")), filtered.map((r) => {
    const p = partnerById[r.partner_id] || {};
    const st = STATUS[r.status] || STATUS.pending;
    return /* @__PURE__ */ React.createElement("tr", { key: r.id }, /* @__PURE__ */ React.createElement("td", { className: "nowrap" }, ymd(r.created_at)), /* @__PURE__ */ React.createElement("td", null, p.name || "-", /* @__PURE__ */ React.createElement("div", { className: "admin-sub" }, p.referral_code)), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("b", null, r.referred_name), r.source === "link" && /* @__PURE__ */ React.createElement("span", { className: "admin-link-tag" }, "\uB9C1\uD06C")), /* @__PURE__ */ React.createElement("td", { className: "nowrap" }, r.referred_phone || "-"), /* @__PURE__ */ React.createElement("td", { className: "admin-memo" }, r.memo || "-"), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("span", { className: "partner-badge " + st.cls }, st.label)), /* @__PURE__ */ React.createElement("td", { className: "nowrap" }, r.status === "activated" ? /* @__PURE__ */ React.createElement(React.Fragment, null, won(r.reward_amount), /* @__PURE__ */ React.createElement("div", { className: "admin-sub" }, r.reward_paid ? "\uC9C0\uAE09\uC644\uB8CC" : "\uBBF8\uC9C0\uAE09")) : "-"), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("div", { className: "admin-actions" }, r.status !== "activated" && /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary btn-sm", disabled: busy, onClick: () => activate(r) }, "\uAC1C\uD1B5\uD655\uC815"), r.status === "pending" && /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-sm", disabled: busy, onClick: () => setStatus(r, "visited") }, "\uBC29\uBB38"), r.status === "activated" && /* @__PURE__ */ React.createElement("button", { className: "btn btn-soft btn-sm", disabled: busy, onClick: () => togglePaid(r) }, r.reward_paid ? "\uC9C0\uAE09\uCDE8\uC18C" : "\uC9C0\uAE09\uC644\uB8CC"), r.status !== "rejected" && r.status !== "activated" && /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-sm admin-del", disabled: busy, onClick: () => setStatus(r, "rejected") }, "\uCDE8\uC18C"))));
  }))))), tab === "partners" && /* @__PURE__ */ React.createElement("div", { className: "admin-panel" }, /* @__PURE__ */ React.createElement("div", { className: "admin-table-wrap" }, /* @__PURE__ */ React.createElement("table", { className: "admin-table" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "\uD30C\uD2B8\uB108"), /* @__PURE__ */ React.createElement("th", null, "\uC5F0\uB77D\uCC98"), /* @__PURE__ */ React.createElement("th", null, "\uCD94\uCC9C\uCF54\uB4DC"), /* @__PURE__ */ React.createElement("th", null, "\uCD1D \uCD94\uCC9C"), /* @__PURE__ */ React.createElement("th", null, "\uAC1C\uD1B5"), /* @__PURE__ */ React.createElement("th", null, "\uB204\uC801 \uB9AC\uC6CC\uB4DC"), /* @__PURE__ */ React.createElement("th", null, "\uBBF8\uC9C0\uAE09"))), /* @__PURE__ */ React.createElement("tbody", null, stats.length === 0 && /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", { colSpan: "7", className: "admin-empty" }, "\uD30C\uD2B8\uB108\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")), stats.map((s) => /* @__PURE__ */ React.createElement("tr", { key: s.p.id }, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("b", null, s.p.name || "-")), /* @__PURE__ */ React.createElement("td", { className: "nowrap" }, s.p.phone || "-"), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("code", null, s.p.referral_code)), /* @__PURE__ */ React.createElement("td", null, s.total), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("b", null, s.activated)), /* @__PURE__ */ React.createElement("td", { className: "nowrap" }, won(s.reward)), /* @__PURE__ */ React.createElement("td", { className: "nowrap" }, s.unpaid > 0 ? /* @__PURE__ */ React.createElement("b", { style: { color: "#C0392B" } }, won(s.unpaid)) : "-"))))))), /* @__PURE__ */ React.createElement("p", { className: "admin-foot" }, "\uAC1C\uD1B5\uD655\uC815\uC744 \uB204\uB974\uBA74 \uD574\uB2F9 \uD30C\uD2B8\uB108 \uB300\uC2DC\uBCF4\uB4DC\uC5D0 \uC989\uC2DC \uBC18\uC601\uB418\uBA70, \uB9AC\uC6CC\uB4DC(\uAE30\uBCF8 5\uB9CC\uC6D0)\uAC00 \uC801\uB9BD\uB429\uB2C8\uB2E4.")));
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(AdminApp, null));

/* 전역 노출 */
if (typeof AdminHeader !== "undefined") globalThis.AdminHeader = AdminHeader;
if (typeof AdminApp !== "undefined") globalThis.AdminApp = AdminApp;
})();