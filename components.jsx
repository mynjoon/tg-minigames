/* global React */
const { useState, useEffect, useRef } = React;

// ---------- Icon set ----------
const Icon = ({ name, size = 22, stroke = 1.6 }) => {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "phone":return <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>;
    case "calendar":return <svg {...common}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>;
    case "chat":return <svg {...common}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
    case "check":return <svg {...common}><path d="M20 6 9 17l-5-5" /></svg>;
    case "arrow":return <svg {...common}><path d="M5 12h14M13 5l7 7-7 7" /></svg>;
    case "menu":return <svg {...common}><path d="M4 6h16M4 12h16M4 18h16" /></svg>;
    case "close":return <svg {...common}><path d="M18 6 6 18M6 6l12 12" /></svg>;
    case "shield":return <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg>;
    case "users":return <svg {...common}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
    case "pin":return <svg {...common}><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
    case "spark":return <svg {...common}><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /></svg>;
    case "wallet":return <svg {...common}><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" /><path d="M16 14h5v-4h-5a2 2 0 0 0 0 4Z" /></svg>;
    case "wifi":return <svg {...common}><path d="M5 13a10 10 0 0 1 14 0M2 9a14 14 0 0 1 20 0M8.5 16.5a5 5 0 0 1 7 0" /><circle cx="12" cy="20" r="1.2" fill="currentColor" /></svg>;
    case "tv":return <svg {...common}><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 22h8" /></svg>;
    case "family":return <svg {...common}><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.2" /><path d="M3 21v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1M16 21v-1a3 3 0 0 1 3-3h.5a2.5 2.5 0 0 1 2.5 2.5V21" /></svg>;
    case "compare":return <svg {...common}><path d="M3 6h18M3 12h12M3 18h6" /></svg>;
    case "pkg":return <svg {...common}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5M12 22V12" /></svg>;
    case "easy":return <svg {...common}><circle cx="12" cy="12" r="10" /><path d="M9.1 9.2a3 3 0 0 1 5.8 1c0 2-3 2.6-3 4.3" /><circle cx="12" cy="17.4" r="0.6" fill="currentColor" stroke="none" /></svg>;
    case "doc":return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h6" /></svg>;
    case "phoneShape":return <svg {...common}><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M11 18h2" /></svg>;
    case "fold":return <svg {...common}><rect x="3" y="3" width="8" height="18" rx="2" /><rect x="13" y="3" width="8" height="18" rx="2" /></svg>;
    case "senior":return <svg {...common}><circle cx="12" cy="7" r="3.5" /><path d="M5 21a7 7 0 0 1 14 0" /></svg>;
    case "data":return <svg {...common}><path d="M3 17V9M9 17V5M15 17v-9M21 17V11" /></svg>;
    case "tag":return <svg {...common}><path d="M20 12 12 4H4v8l8 8 8-8z" /><circle cx="8" cy="8" r="1.4" fill="currentColor" /></svg>;
    case "clock":return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
    case "copy":return <svg {...common}><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>;
    case "map":return <svg {...common}><path d="m21 4-7 3-7-3-5 3v13l5-3 7 3 7-3 5 3V7Z" /><path d="M7 4v13M14 7v13" /></svg>;
    case "kakao":return <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M12 3C6.5 3 2 6.5 2 10.8c0 2.7 1.8 5.1 4.6 6.5l-1 3.6c-.1.3.3.6.6.4l4.3-2.8c.5.1 1 .1 1.5.1 5.5 0 10-3.5 10-7.8S17.5 3 12 3Z" /></svg>;
    case "naver":return <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M5 4h4l6 9V4h4v16h-4l-6-9v9H5z" /></svg>;
    default:return null;
  }
};

// ---------- Reveal-on-scroll ----------
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {if (e.isIntersecting) {el.classList.add("in");io.disconnect();}});
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

const Reveal = ({ children, delay = 0, as = "div", ...rest }) => {
  const ref = useReveal();
  const Tag = as;
  return (
    <Tag ref={ref} className={"reveal " + (rest.className || "")} style={{ transitionDelay: delay + "ms", ...rest.style }} {...rest}>
      {children}
    </Tag>);

};

// ---------- Header ----------
// base: 서브페이지(used.html 등)에서 "./"를 넘기면 홈 섹션 앵커가 "./#plans"처럼 홈으로 연결된다.
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
  { id: "intro", label: "매장소개" },
  { id: "products", label: "판매상품" },
  { id: "plans", label: "요금상담" },
  { id: "bundle", label: "인터넷/TV 결합" },
  { href: "finder.html", label: "요금제 찾기" },
  { href: "used.html", label: "중고폰" },
  { id: "reward", label: "지인추천" },
  { id: "booking", label: "방문예약" }];

  const linkOf = (it) => it.href ? it.href : base + "#" + it.id;

  return (
    <>
      <header className={"header" + (scrolled ? " scrolled" : "")}>
        <div className="container">
          <a href={base || "#top"} className="brand" aria-label="공일모바일 홈">
            <span className="brand-text"><strong>공일모바일</strong></span>
          </a>

          <nav className="nav" aria-label="주요 메뉴">
            <ul>
              {items.map((it) =>
              <li key={it.label}><a href={linkOf(it)}>{it.label}</a></li>
              )}
            </ul>
          </nav>

          <div className="header-cta">
            <button className="menu-btn" onClick={() => setOpen((o) => !o)} aria-label="메뉴 열기">
              <Icon name={open ? "close" : "menu"} size={20} />
            </button>
            <a href={base + "#booking"} className="btn btn-primary btn-sm" style={{ height: 44, padding: "0 18px", fontSize: 14 }}>
              상담 예약하기
            </a>
          </div>
        </div>
      </header>

      <div className={"mobile-menu" + (open ? " open" : "")} onClick={() => setOpen(false)}>
        {items.map((it) =>
        <a key={it.label} href={linkOf(it)}>{it.label}</a>
        )}
        <a href={base + "#booking"} className="btn btn-primary">상담 예약하기</a>
      </div>
    </>);

}

Object.assign(window, { Icon, Reveal, useReveal, Header });