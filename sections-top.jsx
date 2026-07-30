/* global React, Icon, Reveal */

const { useState, useEffect, useRef } = React;

// ---------- Interactive Ripple ----------
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
        x, y, born: now,
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
    const onLeave = () => {pointer.current.active = false;};
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
      const W = canvas.width / dpr,H = canvas.height / dpr;
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

  return <canvas ref={canvasRef} className="hero-ripple" aria-hidden="true" />;
}

// ---------- Hero ----------
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
    const onLeave = () => { target.x = 0.5; target.y = 0.5; if (!rafId) loop(); };
    const loop = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      if (spotRef.current) {
        spotRef.current.style.setProperty("--mx", (current.x * 100) + "%");
        spotRef.current.style.setProperty("--my", (current.y * 100) + "%");
      }
      if (auroraRef.current) {
        const tx = (current.x - 0.5) * 30;
        const ty = (current.y - 0.5) * 24;
        auroraRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      }
      if (Math.abs(target.x - current.x) > 0.0005 || Math.abs(target.y - current.y) > 0.0005) {
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

  return (
    <section className="hero hero--apple" id="top" ref={heroRef}>
      <div className="hero-aurora" aria-hidden="true" ref={auroraRef}>
        <span className="blob b1"></span>
        <span className="blob b2"></span>
        <span className="blob b3"></span>
        <span className="blob b4"></span>
      </div>
      <div className="hero-spotlight" aria-hidden="true" ref={spotRef}></div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal>
            <div className="hero-status" aria-label="영업시간 내 상담 가능">
              <span className="hero-status__pulse" aria-hidden="true">
                <span className="hero-status__pulse-ring"></span>
                <span className="hero-status__pulse-dot"></span>
              </span>
              <span className="hero-status__label">영업시간 내 상담 가능 (월–토 10–20시)</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1>
              <span className="h1-thin">통신비는 줄이고,</span>
              <br />
              <span className="h1-bold">최신폰은 그대로.</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="hero-sub">
              검색해도, 비교해도 안 나옵니다. <b style={{ color: "var(--ink-headline)", fontWeight: 600 }}>매장에서만 열리는 조건</b>이 따로 있으니까요.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="hero-cta hero-cta--apple">
              <a href="#booking" className="apple-link apple-link--primary">
                <span>5초 만에 상담 예약</span> <span className="chev">›</span>
              </a>
              <a href="#products" className="apple-link">
                <span>라인업 둘러보기</span> <span className="chev">›</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="hero-meta">
              <div><b>최대 −10만원</b>월 절감 · 상담 사례 기준</div>
              <div><b>3사 통합</b>한 자리 비교</div>
              <div><b>0원 강매</b>안 사도 OK</div>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="hero-ticker" aria-hidden="true">
              <div className="hero-ticker__track">
                <span>이런 상담을 합니다</span>
                <span aria-hidden="true">·</span>
                <span>iPhone 17 Pro 개통 상담</span>
                <span aria-hidden="true">·</span>
                <span>4회선 가족결합 상담</span>
                <span aria-hidden="true">·</span>
                <span>인터넷·TV 결합 상담</span>
                <span aria-hidden="true">·</span>
                <span>Galaxy S26 번호이동 상담</span>
                <span aria-hidden="true">·</span>
                <span>효도폰 요금제 상담</span>
                <span aria-hidden="true">·</span>
                {/* duplicate for infinite loop */}
                <span>이런 상담을 합니다</span>
                <span aria-hidden="true">·</span>
                <span>iPhone 17 Pro 개통 상담</span>
                <span aria-hidden="true">·</span>
                <span>4회선 가족결합 상담</span>
                <span aria-hidden="true">·</span>
                <span>인터넷·TV 결합 상담</span>
                <span aria-hidden="true">·</span>
                <span>Galaxy S26 번호이동 상담</span>
                <span aria-hidden="true">·</span>
                <span>효도폰 요금제 상담</span>
                <span aria-hidden="true">·</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="hero-visual">
          <div className="hero-stage">
            <div className="phone-mock">
              <div className="phone-screen">
                <div className="phone-notch" />
                <div className="phone-status">
                  <span>9:41</span>
                  <span>● ● ●</span>
                </div>
                <div className="phone-body">
                  <div className="phone-card primary">
                    <div className="label" style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <img src="assets/logo.png" alt="" style={{ width: 14, height: 14, filter: "brightness(0) invert(1)", opacity: 0.9 }} />
                      오늘의 맞춤 상담
                    </div>
                    <div className="value">기기변경 + 결합할인</div>
                  </div>
                  <div className="phone-row">
                    <div className="phone-card">
                      <div className="label">데이터</div>
                      <div className="value">분석<small>완료</small></div>
                    </div>
                    <div className="phone-card">
                      <div className="label">결합</div>
                      <div className="value">가족<small>4회선</small></div>
                    </div>
                  </div>
                  <div className="phone-bar">
                    요금제 비교 <Icon name="arrow" size={14} />
                  </div>
                  <div className="phone-bar">
                    인터넷·TV 점검 <Icon name="arrow" size={14} />
                  </div>
                  <div className="phone-bar" style={{ background: "var(--blue)", color: "#fff" }}>
                    상담 예약하기 <Icon name="calendar" size={14} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="float-card fc-1">
            <span className="ico"><Icon name="users" size={18} /></span>
            1:1 맞춤 상담
          </div>
          <div className="float-card fc-2">
            <span className="ico"><Icon name="compare" size={18} /></span>
            요금제 비교 안내
          </div>
          <div className="float-card fc-3">
            <span className="ico"><Icon name="phone" size={18} /></span>
            기기변경·번호이동
          </div>
          <div className="float-card fc-4">
            <span className="ico"><Icon name="wifi" size={18} /></span>
            인터넷·TV 결합
          </div>
        </Reveal>
      </div>
    </section>);

}

// ---------- Trust section ----------
function TrustSection() {
  const items = [
  { icon: "easy", title: "복잡한 조건을 쉽게 설명",
    text: "통신사, 요금제, 할인 조건을 고객이 이해하기 쉽게 정리해서 안내합니다." },
  { icon: "users", title: "고객 상황별 맞춤 상담",
    text: "무조건 비싼 요금제가 아니라 사용 패턴, 가족 결합, 인터넷 이용 여부까지 고려합니다." },
  { icon: "pin", title: "방문하기 쉬운 위치",
    text: "마장역 2번 출구 도보 1분, 부담 없이 들러 상담받을 수 있습니다." },
  { icon: "shield", title: "상담부터 개통까지 한 번에",
    text: "기기 선택, 요금제 비교, 결합 상담, 개통 진행까지 한 번에 도와드립니다." }];

  return (
    <section className="section" id="why">
      <div className="container">
        <Reveal>
          <span className="eyebrow"><span className="dot" />WHY US</span>
          <h2 className="section-title">
            <span className="h-thin">왜 다들 여기로 오는가.</span><br />
            <span className="h-bold">5분만 들어보세요.</span>
          </h2>
          <p className="section-sub">
            싸기만 한 매장은 많습니다. 정직하고, 끝까지 책임지는 매장은 흔치 않습니다. <b style={{ color: "var(--ink-headline)", fontWeight: 600 }}>그 차이가, 매달 통신비를 가릅니다.</b>
          </p>
        </Reveal>

        <div className="trust-grid">
          {items.map((it, i) =>
          <Reveal key={it.title} delay={i * 80}>
              <article className="trust-card">
                <div className="trust-icon"><Icon name={it.icon} size={26} /></div>
                <span className="trust-num">0{i + 1}</span>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </article>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

// ---------- Products ----------
const PRODUCT_SPECS = {
  "iPhone 시리즈": {
    note: "Apple 공식 사양 기준 · 출고가는 256GB 기준 참고용이며, 매장 단독 조건은 방문 시 안내드립니다.",
    rows: [
    ["디스플레이", "6.3\" Super Retina XDR\n120Hz ProMotion", "6.3\" Super Retina XDR\n120Hz ProMotion", "6.9\" Super Retina XDR\n120Hz ProMotion", "6.5\" Super Retina XDR\n120Hz · Always-On"],
    ["프로세서", "A19", "A19 Pro", "A19 Pro", "A19 Pro"],
    ["메모리 · 저장", "8GB / 256·512GB·1TB", "12GB / 256GB ~ 2TB", "12GB / 256GB ~ 2TB", "12GB / 256·512GB·1TB"],
    ["후면 카메라", "48MP 듀얼\n광각 + 초광각", "48MP 트리플\n+ 5× 망원", "48MP 트리플\n+ 5× 망원", "48MP 듀얼"],
    ["배터리", "영상 최대 27시간", "영상 최대 33시간", "영상 최대 39시간", "영상 최대 27시간"],
    ["특징", "기본기에 충실한\n메인 모델", "프로 등급 카메라 ·\n티타늄 프레임", "최대 화면 · 최장 배터리\n프로 등급 카메라", "두께 5.6mm · 165g\n초경량 디자인"],
    ["출고가", "1,287,000원~", "1,782,000원~", "1,980,000원~", "1,584,000원~"],
    ["매장 구매가", "방문 시 공개", "방문 시 공개", "방문 시 공개", "방문 시 공개"]],

    variants: [
    { name: "iPhone 17", img: "assets/iphone-17.png" },
    { name: "iPhone 17 Pro", img: "assets/iphone-17-pro.png" },
    { name: "iPhone 17 Pro Max", img: "assets/iphone-17-pro-max.png" },
    { name: "iPhone Air", img: "assets/iphone-air.png" }]

  },
  "Galaxy S 시리즈": {
    note: "삼성 공식 사양 기준 · 출고가는 256GB 기준 참고용이며, 매장 단독 조건은 방문 시 안내드립니다.",
    rows: [
    ["디스플레이", "6.2\" Dynamic AMOLED 2X\n120Hz FHD+", "6.7\" Dynamic AMOLED 2X\n120Hz QHD+", "6.9\" Dynamic AMOLED 2X\n120Hz QHD+"],
    ["프로세서", "Snapdragon 8 Elite\nfor Galaxy", "Snapdragon 8 Elite\nfor Galaxy", "Snapdragon 8 Elite\nfor Galaxy"],
    ["메모리 · 저장", "12GB / 256·512GB", "12GB / 256·512GB·1TB", "12GB / 256·512GB·1TB"],
    ["후면 카메라", "50MP 트리플\n광각+초광각+3× 망원", "50MP 트리플", "200MP 쿼드\n+ 3×·5× 듀얼 망원"],
    ["배터리", "4,000mAh", "4,900mAh", "5,000mAh · S펜 내장"],
    ["특징", "콤팩트 플래그십", "큰 화면 + 긴 배터리", "최상위 카메라 · S펜"],
    ["출고가", "1,254,000원~", "1,452,000원~", "1,797,400원~"],
    ["매장 구매가", "방문 시 공개", "방문 시 공개", "방문 시 공개"]],

    variants: [
    { name: "Galaxy S26", img: "assets/galaxy-s26.png" },
    { name: "Galaxy S26+", img: "assets/galaxy-s26-plus.png" },
    { name: "Galaxy S26 Ultra", img: "assets/galaxy-s26-ultra.png" }]

  },
  "Galaxy Fold / Flip": {
    note: "삼성 공식 사양 기준 · 출고가는 256GB 기준 참고용이며, 매장 단독 조건은 방문 시 안내드립니다.",
    rows: [
    ["디스플레이", "메인 8.0\" (2504×2256)\n커버 6.5\" (2520×1080)", "메인 7.6\" 4:3 (2448×1848)\n커버 5.5\" (1972×1248)", "메인 6.9\" FHD+ LTPO\n커버 Flex Window"],
    ["프로세서", "Snapdragon 8 Elite\nGen 5 for Galaxy", "Snapdragon 8 Elite\nGen 5 for Galaxy", "Snapdragon 8 Elite Gen 5\n/ Exynos 2600 (지역별)"],
    ["저장 용량", "256 · 512GB", "256 · 512GB", "256 · 512GB"],
    ["후면 카메라", "200MP 광각 + 50MP 초광각\n+ 10MP 망원", "50MP 광각(F1.8)\n+ 50MP 초광각(F1.9)", "50MP 광각\n+ 12MP 초광각"],
    ["배터리 · 무게", "5,000mAh · 215g", "4,800mAh · 201g", "4,174mAh(정격)"],
    ["특징", "폴드의 정점 —\n8형 대화면 · 200MP", "꽉 찬 4:3 화면 ·\n역대 최경량 폴드", "주름 개선 힌지 ·\nFlex Window 활용"],
    ["출고가", "2,577,300원~", "2,278,100원~", "1,683,000원~"],
    ["매장 구매가", "방문 시 공개", "방문 시 공개"]],

    variants: [
    { name: "Galaxy Fold8 Ultra", img: "assets/galaxy-fold8-ultra-violet.png" },
    { name: "Galaxy Fold8", img: "assets/galaxy-fold8-lavender.png" },
    { name: "Galaxy Flip8", img: "assets/galaxy-flip8-graphite.png" }]

  },
  "효도폰 / 실속폰": {
    note: "라인업은 시기에 따라 달라질 수 있으며, 정확한 재고·조건은 매장 방문 시 안내드립니다.",
    rows: [
    ["디스플레이", "3.8\" 폴더형 LCD", "6.7\" HD+ LCD"],
    ["프로세서", "보급형 칩셋", "보급형 칩셋"],
    ["메모리 · 저장", "2GB / 32GB", "4·6GB / 64·128GB"],
    ["후면 카메라", "800만", "5,000만급"],
    ["배터리", "1,950mAh", "5,000mAh"],
    ["특징", "폴더형 · 큰 버튼\n부모님께 추천", "큰 화면 · 가성비\n학생 · 세컨폰"],
    ["출고가", "237,600원~", "319,000원~"],
    ["매장 구매가", "방문 시 공개", "방문 시 공개"]],

    variants: [
    { name: "삼성 스타일 폴더2", img: "assets/galaxy-style-folder2.png" },
    { name: "Galaxy A17", img: "assets/galaxy-a17.png" }]

  }
};

function ProductsSection() {
  const tabs = ["전체", "iPhone", "Galaxy", "효도폰·실속폰"];
  const [active, setActive] = useState("전체");
  const [openSpec, setOpenSpec] = useState(null);

  const products = [
  { cat: "iPhone", name: "iPhone 시리즈",
    feat: "프리미엄 라인업",
    desc: "깔끔한 디자인과 안정적인 사용성을 원하는 고객에게 추천드립니다.",
    target: "기본기를 중요하게 생각하는 분", icon: "phoneShape" },
  { cat: "Galaxy", name: "Galaxy S 시리즈",
    feat: "고성능 카메라·퍼포먼스",
    desc: "고성능 카메라와 빠른 성능을 원하는 고객에게 추천드립니다.",
    target: "사진·게임·업무 모두 활용하는 분", icon: "spark" },
  { cat: "Galaxy", name: "Galaxy Fold / Flip",
    feat: "폴더블 프리미엄",
    desc: "프리미엄 디자인과 차별화된 사용성을 원하는 고객에게 추천드립니다.",
    target: "남다른 기기 경험을 원하는 분", icon: "fold" },
  { cat: "효도폰·실속폰", name: "효도폰 / 실속폰",
    feat: "부담 없는 라인업",
    desc: "부모님, 학생, 세컨폰 용도로 부담 없이 사용하기 좋은 모델을 상담드립니다.",
    target: "가성비·간편함이 우선인 분", icon: "senior" }];


  const visible = active === "전체" ? products : products.filter((p) => p.cat === active);

  return (
    <section className="section products-section" id="products">
      <div className="container">
        <Reveal>
          <div className="products-head">
            <div>
              <span className="eyebrow"><span className="dot" />LINEUP</span>
              <h2 className="section-title">
                <span className="h-thin">광고엔 없는 조건.</span><br />
                <span className="h-bold">매장에만 있습니다.</span>
              </h2>
              <p className="section-sub">
                같은 모델, 같은 통신사라도 매장 조건에 따라 가격이 갈립니다. <b style={{ color: "var(--ink-headline)", fontWeight: 600 }}>조건에 따라 100만원 가까이 차이 날 수 있습니다.</b>
              </p>
            </div>
            <div className="product-tabs" role="tablist">
              {tabs.map((t) =>
              <button key={t}
              className={active === t ? "active" : ""}
              onClick={() => setActive(t)}
              role="tab" aria-selected={active === t}>
                  {t}
                </button>
              )}
            </div>
          </div>
        </Reveal>

        <div className="products-grid">
          {visible.map((p, i) =>
          <Reveal key={p.name} delay={i * 70}>
              <article
              className="product-card product-card--clickable"
              onClick={() => setOpenSpec(p.name)}
              onKeyDown={(e) => {if (e.key === "Enter" || e.key === " ") {e.preventDefault();setOpenSpec(p.name);}}}
              role="button"
              tabIndex={0}
              aria-label={`${p.name} 스펙 보기`}>
                <div className="product-image">
                  <PhoneArt model={p.icon} />
                  <span className="product-spec-hint">
                    <Icon name="check" size={11} /> 스펙 보기
                  </span>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{p.name}</h3>
                  <div className="product-feat">{p.feat}</div>
                  <p className="product-desc">{p.desc}</p>
                  <span className="product-target">
                    <Icon name="check" size={12} /> {p.target}
                  </span>
                  <div className="product-price">
                    <span><b>가격</b> · 상담 후 조건 안내</span>
                    <a
                    href="#booking"
                    className="product-cta"
                    onClick={(e) => e.stopPropagation()}>상담 문의 <Icon name="arrow" size={14} /></a>
                  </div>
                </div>
              </article>
            </Reveal>
          )}
        </div>
      </div>
      {openSpec && <SpecModal productName={openSpec} onClose={() => setOpenSpec(null)} />}
    </section>);

}

// ---------- Spec Modal ----------
function SpecModal({ productName, onClose }) {
  const data = PRODUCT_SPECS[productName];
  const [activeVariant, setActiveVariant] = useState(0);

  useEffect(() => {
    const onKey = (e) => {if (e.key === "Escape") onClose();};
    document.addEventListener("keydown", onKey);
    // iOS-safe scroll lock: freeze the page in place (overflow:hidden alone
    // doesn't stop touch scroll on iOS Safari, which caused the background to
    // jump when scrolling up inside the modal).
    const body = document.body;
    const scrollY = window.scrollY;
    const prev = {
      position: body.style.position, top: body.style.top,
      left: body.style.left, right: body.style.right,
      width: body.style.width, overflow: body.style.overflow,
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
      // Restore scroll instantly. The page sets `scroll-behavior: smooth`,
      // which would otherwise animate this jump and look janky on close.
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

  return (
    <div className="spec-modal" onClick={onClose} role="dialog" aria-modal="true" aria-label={`${productName} 상세 스펙`}>
      <div className="spec-modal__sheet" onClick={(e) => e.stopPropagation()}>
        <button className="spec-modal__close" onClick={onClose} aria-label="닫기">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <div className="spec-modal__header">
          <div className="spec-modal__eyebrow">
            <span className="dot" />LINEUP · 상세 스펙
          </div>
          <h3 className="spec-modal__title">{productName}</h3>
          <p className="spec-modal__note">{data.note}</p>
        </div>

        {/* Variant tabs on mobile */}
        <div className="spec-modal__tabs" role="tablist">
          {variants.map((v, i) =>
          <button
            key={v.name}
            className={"spec-modal__tab" + (activeVariant === i ? " active" : "")}
            onClick={() => setActiveVariant(i)}
            role="tab"
            aria-selected={activeVariant === i}>
              {v.name}
            </button>
          )}
        </div>

        {/* Desktop: full comparison table */}
        <div className="spec-modal__table-wrap">
          <table className="spec-table">
            <thead>
              <tr>
                <th aria-hidden="true"></th>
                {variants.map((v) =>
                <th key={v.name}>
                    <div className="spec-table__head">
                      <div className="spec-table__phone">
                        <img src={v.img} alt={v.name} loading="lazy" />
                      </div>
                      <div className="spec-table__name">{v.name}</div>
                    </div>
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row) => {
                const isStore = row[0] === "매장 구매가";
                const isMsrp = row[0] === "출고가";
                const cls = isStore ? "spec-row--store" : isMsrp ? "spec-row--msrp" : "";
                return (
                  <tr key={row[0]} className={cls}>
                    <th scope="row">
                      {isStore && <span className="spec-lock" aria-hidden="true">🔒</span>}
                      {row[0]}
                    </th>
                    {Array.from({ length: cols }).map((_, ci) =>
                    <td key={ci}>{row[ci + 1]}</td>
                    )}
                  </tr>);

              })}
            </tbody>
          </table>
        </div>

        {/* Mobile: single-variant card view */}
        <div className="spec-modal__mobile">
          <div className="spec-mobile__head">
            <div className="spec-mobile__phone">
              <img src={variants[activeVariant].img} alt={variants[activeVariant].name} />
            </div>
            <div className="spec-mobile__name">{variants[activeVariant].name}</div>
          </div>
          <dl className="spec-mobile__list">
            {data.rows.map((row) => {
              const isStore = row[0] === "매장 구매가";
              const isMsrp = row[0] === "출고가";
              const cls = isStore ? "spec-mobile__row spec-row--store" : isMsrp ? "spec-mobile__row spec-row--msrp" : "spec-mobile__row";
              return (
                <div className={cls} key={row[0]}>
                  <dt>
                    {isStore && <span className="spec-lock" aria-hidden="true">🔒</span>}
                    {row[0]}
                  </dt>
                  <dd>{row[activeVariant + 1]}</dd>
                </div>);

            })}
          </dl>
        </div>

        <div className="spec-modal__tease">
          <span className="spec-modal__tease-pin" aria-hidden="true">📍</span>
          <div>
            <b>광고에 올릴 수 없는 매장 단독가</b>
            <span>직접 방문하시면 바로 안내드립니다. 통신사·결합 조건에 따라 출고가보다 크게 낮아집니다.</span>
          </div>
        </div>
        <div className="spec-modal__footer">
          <a href="#booking" className="btn btn-primary" onClick={onClose}>
            이 모델로 상담 받기 <Icon name="arrow" size={14} />
          </a>
          <a href="tel:01079329779" className="btn btn-ghost spec-modal__call">
            <Icon name="phone" size={14} /> 010-7932-9779
          </a>
        </div>
      </div>
    </div>);

}

function PhoneArt({ model }) {
  if (model === "spark") return <GalaxyArt />;
  if (model === "fold") return <FoldArt />;
  if (model === "senior") return <SeniorArt />;
  return <IPhoneArt />;
}

function IPhoneArt() {
  return (
    <div className="phone-art phone-art--photo">
      <div className="iphone-stack">
        <img src="assets/iphone-17.png" alt="iPhone 17" className="iphone-stack__back iphone-stack__left" />
        <img src="assets/iphone-17-pro.png" alt="iPhone 17 Pro" className="iphone-stack__back iphone-stack__right" />
        <img src="assets/iphone-air.png" alt="iPhone Air" className="iphone-stack__front" />
      </div>
    </div>);
}

function IPhoneArtSvg_unused() {
  return (
    <div className="phone-art">
      <svg viewBox="0 0 140 220" xmlns="http://www.w3.org/2000/svg" aria-label="iPhone">
        <defs>
          <linearGradient id="ip-frame" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#6E7785" />
            <stop offset="0.45" stopColor="#2E343F" />
            <stop offset="1" stopColor="#454C58" />
          </linearGradient>
          <linearGradient id="ip-screen" x1="0.1" x2="0.9" y1="0" y2="1">
            <stop offset="0" stopColor="#0B1640" />
            <stop offset="0.55" stopColor="#1A2F66" />
            <stop offset="1" stopColor="#3B1B60" />
          </linearGradient>
          <radialGradient id="ip-glow" cx="0.3" cy="0.25" r="0.8">
            <stop offset="0" stopColor="#FFB59E" stopOpacity="0.55" />
            <stop offset="0.4" stopColor="#7B6BFF" stopOpacity="0.35" />
            <stop offset="1" stopColor="#0B1640" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ip-glare" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0.18" />
            <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <filter id="ip-shadow" x="-30%" y="-10%" width="160%" height="130%">
            <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#0E2A6B" floodOpacity="0.18" />
          </filter>
        </defs>
        {/* floor reflection */}
        <ellipse cx="70" cy="212" rx="44" ry="4" fill="#0E2A6B" opacity="0.10" />
        {/* body */}
        <rect x="14" y="6" width="112" height="200" rx="22" fill="url(#ip-frame)" filter="url(#ip-shadow)" />
        {/* chrome edge highlight */}
        <rect x="14.5" y="6.5" width="111" height="199" rx="21.5" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="0.6" />
        <rect x="15.5" y="7.5" width="109" height="197" rx="20.5" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="0.5" />
        {/* screen */}
        <rect x="19" y="11" width="102" height="190" rx="17" fill="url(#ip-screen)" />
        <rect x="19" y="11" width="102" height="190" rx="17" fill="url(#ip-glow)" />
        <rect x="19" y="11" width="102" height="190" rx="17" fill="url(#ip-glare)" opacity="0.6" />
        {/* dynamic island */}
        <rect x="56" y="17" width="28" height="8.5" rx="4.25" fill="#000" />
        <circle cx="79.5" cy="21.25" r="1.6" fill="#0A1428" />
        <circle cx="79.5" cy="21.25" r="0.6" fill="#1F3A8A" opacity="0.7" />
        {/* time text */}
        <text x="70" y="48" textAnchor="middle" fontFamily="-apple-system, SF Pro Display, system-ui" fontSize="22" fontWeight="600" fill="#fff" opacity="0.95">9:41</text>
        {/* side buttons */}
        <rect x="13" y="36" width="1.5" height="9" rx="0.5" fill="rgba(0,0,0,0.5)" />
        <rect x="13" y="54" width="1.5" height="22" rx="0.5" fill="rgba(0,0,0,0.5)" />
        <rect x="13" y="80" width="1.5" height="22" rx="0.5" fill="rgba(0,0,0,0.5)" />
        <rect x="125.5" y="60" width="1.5" height="30" rx="0.5" fill="rgba(0,0,0,0.5)" />
      </svg>
    </div>);

}

function GalaxyArt() {
  return (
    <div className="phone-art phone-art--photo">
      <div className="iphone-stack galaxy-stack">
        <img src="assets/galaxy-s26-ultra.png" alt="Galaxy S26 Ultra" className="iphone-stack__back iphone-stack__left" />
        <img src="assets/galaxy-s26-plus.png" alt="Galaxy S26+" className="iphone-stack__back iphone-stack__right" />
        <img src="assets/galaxy-s26.png" alt="Galaxy S26" className="iphone-stack__front" />
      </div>
    </div>);
}

function GalaxyArtSvg_unused() {
  return (
    <div className="phone-art">
      <svg viewBox="0 0 140 220" xmlns="http://www.w3.org/2000/svg" aria-label="Galaxy">
        <defs>
          <linearGradient id="gx-frame" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#3D3550" />
            <stop offset="0.5" stopColor="#1B1530" />
            <stop offset="1" stopColor="#2A2240" />
          </linearGradient>
          <linearGradient id="gx-screen" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#0F0826" />
            <stop offset="0.6" stopColor="#1F1448" />
            <stop offset="1" stopColor="#3B1F70" />
          </linearGradient>
          <radialGradient id="gx-glow" cx="0.7" cy="0.8" r="0.7">
            <stop offset="0" stopColor="#7C5BFF" stopOpacity="0.6" />
            <stop offset="0.5" stopColor="#4361EE" stopOpacity="0.3" />
            <stop offset="1" stopColor="#0F0826" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="gx-glare" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0.16" />
            <stop offset="0.4" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <filter id="gx-shadow" x="-30%" y="-10%" width="160%" height="130%">
            <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#1A0E4D" floodOpacity="0.18" />
          </filter>
        </defs>
        <ellipse cx="70" cy="212" rx="44" ry="4" fill="#1A0E4D" opacity="0.12" />
        {/* body */}
        <rect x="14" y="6" width="112" height="200" rx="18" fill="url(#gx-frame)" filter="url(#gx-shadow)" />
        <rect x="14.5" y="6.5" width="111" height="199" rx="17.5" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.6" />
        {/* screen — minimal bezel */}
        <rect x="17" y="9" width="106" height="194" rx="15" fill="url(#gx-screen)" />
        <rect x="17" y="9" width="106" height="194" rx="15" fill="url(#gx-glow)" />
        <rect x="17" y="9" width="106" height="194" rx="15" fill="url(#gx-glare)" opacity="0.55" />
        {/* punch hole camera */}
        <circle cx="70" cy="18" r="2.6" fill="#000" />
        <circle cx="70" cy="18" r="1.3" fill="#0E1430" />
        <circle cx="69.4" cy="17.4" r="0.5" fill="#3D5BFF" opacity="0.7" />
        {/* time */}
        <text x="70" y="55" textAnchor="middle" fontFamily="Samsung Sharp Sans, -apple-system, system-ui" fontSize="22" fontWeight="600" fill="#fff" opacity="0.95">9:41</text>
        {/* side buttons */}
        <rect x="125.5" y="50" width="1.5" height="14" rx="0.5" fill="rgba(0,0,0,0.5)" />
        <rect x="125.5" y="70" width="1.5" height="26" rx="0.5" fill="rgba(0,0,0,0.5)" />
      </svg>
    </div>);

}

function FoldArt() {
  return (
    <div className="phone-art phone-art--photo">
      <div className="iphone-stack fold-stack">
        <img src="assets/galaxy-fold8-ultra-violet.png" alt="Galaxy Fold8 Ultra" className="iphone-stack__back iphone-stack__left" />
        <img src="assets/galaxy-flip8-graphite.png" alt="Galaxy Flip8" className="iphone-stack__front" />
      </div>
    </div>);
}

function FoldArtSvg_unused() {
  return (
    <div className="phone-art">
      <svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" aria-label="Galaxy Fold">
        <defs>
          <linearGradient id="fd-frame" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#4A5165" />
            <stop offset="0.5" stopColor="#1F2535" />
            <stop offset="1" stopColor="#2D3447" />
          </linearGradient>
          <linearGradient id="fd-screen-l" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#0B1640" />
            <stop offset="1" stopColor="#1F2F66" />
          </linearGradient>
          <linearGradient id="fd-screen-r" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#1A2658" />
            <stop offset="1" stopColor="#3D1F70" />
          </linearGradient>
          <radialGradient id="fd-glow" cx="0.5" cy="0.6" r="0.7">
            <stop offset="0" stopColor="#7B6BFF" stopOpacity="0.45" />
            <stop offset="1" stopColor="#0B1640" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="fd-crease" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="rgba(255,255,255,0.06)" />
            <stop offset="0.5" stopColor="rgba(0,0,0,0.45)" />
            <stop offset="1" stopColor="rgba(255,255,255,0.06)" />
          </linearGradient>
          <filter id="fd-shadow" x="-20%" y="-10%" width="140%" height="130%">
            <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#0E2A6B" floodOpacity="0.2" />
          </filter>
        </defs>
        <ellipse cx="110" cy="190" rx="80" ry="4" fill="#0E2A6B" opacity="0.10" />
        {/* full body — opened */}
        <rect x="12" y="14" width="196" height="172" rx="12" fill="url(#fd-frame)" filter="url(#fd-shadow)" />
        <rect x="12.5" y="14.5" width="195" height="171" rx="11.5" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.6" />
        {/* left screen */}
        <rect x="17" y="19" width="91" height="162" rx="8" fill="url(#fd-screen-l)" />
        <rect x="17" y="19" width="91" height="162" rx="8" fill="url(#fd-glow)" opacity="0.7" />
        {/* right screen */}
        <rect x="112" y="19" width="91" height="162" rx="8" fill="url(#fd-screen-r)" />
        <rect x="112" y="19" width="91" height="162" rx="8" fill="url(#fd-glow)" opacity="0.7" />
        {/* hinge crease */}
        <rect x="108" y="19" width="4" height="162" fill="url(#fd-crease)" />
        {/* punch hole on right screen */}
        <circle cx="158" cy="28" r="2.2" fill="#000" />
        {/* app icons hint on left */}
        <g opacity="0.85">
          <rect x="32" y="40" width="14" height="14" rx="3.5" fill="#FF7A59" />
          <rect x="52" y="40" width="14" height="14" rx="3.5" fill="#5BD08A" />
          <rect x="72" y="40" width="14" height="14" rx="3.5" fill="#FFD15B" />
          <rect x="32" y="60" width="14" height="14" rx="3.5" fill="#5B9BFF" />
          <rect x="52" y="60" width="14" height="14" rx="3.5" fill="#C56BFF" />
          <rect x="72" y="60" width="14" height="14" rx="3.5" fill="#FF6B9D" />
        </g>
        {/* widget on right */}
        <rect x="125" y="100" width="65" height="40" rx="6" fill="rgba(255,255,255,0.10)" />
        <rect x="131" y="108" width="22" height="3" rx="1.5" fill="rgba(255,255,255,0.55)" />
        <rect x="131" y="116" width="40" height="2.5" rx="1.25" fill="rgba(255,255,255,0.30)" />
        <rect x="131" y="123" width="34" height="2.5" rx="1.25" fill="rgba(255,255,255,0.30)" />
        <rect x="131" y="130" width="28" height="2.5" rx="1.25" fill="rgba(255,255,255,0.30)" />
      </svg>
    </div>);

}

function SeniorArt() {
  return (
    <div className="phone-art phone-art--photo">
      <div className="iphone-stack senior-stack">
        <img src="assets/senior-phone.png" alt="실속폰" className="iphone-stack__front" />
      </div>
    </div>);
}

function SeniorArtSvg_unused() {
  return (
    <div className="phone-art">
      <svg viewBox="0 0 140 220" xmlns="http://www.w3.org/2000/svg" aria-label="효도폰">
        <defs>
          <linearGradient id="sr-frame" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#F6F8FC" />
            <stop offset="0.5" stopColor="#D8DEEA" />
            <stop offset="1" stopColor="#E4E9F2" />
          </linearGradient>
          <linearGradient id="sr-screen" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#FCFDFF" />
            <stop offset="1" stopColor="#EAF1FB" />
          </linearGradient>
          <filter id="sr-shadow" x="-30%" y="-10%" width="160%" height="130%">
            <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#1A3A8A" floodOpacity="0.14" />
          </filter>
        </defs>
        <ellipse cx="70" cy="212" rx="44" ry="4" fill="#1A3A8A" opacity="0.10" />
        {/* body */}
        <rect x="14" y="6" width="112" height="200" rx="22" fill="url(#sr-frame)" filter="url(#sr-shadow)" />
        <rect x="14.5" y="6.5" width="111" height="199" rx="21.5" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="0.6" />
        {/* screen — light, easy to see */}
        <rect x="20" y="22" width="100" height="140" rx="10" fill="url(#sr-screen)" />
        <rect x="20" y="22" width="100" height="140" rx="10" fill="none" stroke="rgba(0,108,255,0.10)" strokeWidth="0.6" />
        {/* large clear time */}
        <text x="70" y="55" textAnchor="middle" fontFamily="-apple-system, system-ui" fontSize="20" fontWeight="700" fill="#0E2A6B">10:24</text>
        <text x="70" y="70" textAnchor="middle" fontFamily="-apple-system, system-ui" fontSize="9" fontWeight="500" fill="#5C6B85">화요일</text>
        {/* big buttons - call / message */}
        <g>
          <rect x="28" y="82" width="36" height="32" rx="8" fill="#006CFF" />
          <path d="M 38 92 L 46 92 L 48 96 L 46 100 L 50 104 L 54 102 L 56 110 L 50 110 Q 38 110 38 92 Z" fill="#fff" opacity="0.95" transform="translate(-1, 0)" />
          <text x="46" y="124" textAnchor="middle" fontFamily="-apple-system" fontSize="7" fontWeight="600" fill="#0E2A6B">전화</text>

          <rect x="76" y="82" width="36" height="32" rx="8" fill="#5BD08A" />
          <rect x="84" y="91" width="20" height="14" rx="2" fill="#fff" />
          <path d="M 88 105 L 88 110 L 93 105 Z" fill="#fff" />
          <text x="94" y="124" textAnchor="middle" fontFamily="-apple-system" fontSize="7" fontWeight="600" fill="#0E2A6B">메시지</text>
        </g>
        {/* large button row */}
        <g>
          <rect x="28" y="135" width="36" height="20" rx="6" fill="#EAF2FF" stroke="#B7CFFF" strokeWidth="0.6" />
          <text x="46" y="148" textAnchor="middle" fontFamily="-apple-system" fontSize="8" fontWeight="700" fill="#006CFF">카카오</text>
          <rect x="76" y="135" width="36" height="20" rx="6" fill="#EAF2FF" stroke="#B7CFFF" strokeWidth="0.6" />
          <text x="94" y="148" textAnchor="middle" fontFamily="-apple-system" fontSize="8" fontWeight="700" fill="#006CFF">사진</text>
        </g>
        {/* home indicator pill (physical home button hint) */}
        <circle cx="70" cy="183" r="11" fill="#fff" stroke="rgba(0,0,0,0.12)" strokeWidth="0.8" />
        <rect x="65" y="181" width="10" height="4" rx="2" fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth="0.8" />
      </svg>
    </div>);

}

Object.assign(window, { Hero, TrustSection, ProductsSection });