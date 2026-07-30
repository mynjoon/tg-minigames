/* global React, Icon, Reveal */
// ==========================================================
// PROMO — 갤럭시 폴더블 8 시리즈 사전예약 안내
// 상단 알림바(닫기 가능) + 영상 포함 프로모션 섹션.
//
// ⚠️ 가드레일: 사전예약 '접수 중' 사실만 알린다. 지원금·최저가·확정 금액을
//    약속하지 않는다. 조건은 항상 "상담에서 확정" 구조를 유지한다.
// ==========================================================

const { useState: useStateP, useEffect: useEffectP, useRef: useRefP } = React;

const PROMO = {
  key: "foldable8-preorder",           // 닫기 상태 저장 키 (프로모션이 바뀌면 키도 바꾼다)
  bar: "갤럭시 폴더블 8 시리즈 사전예약 접수 중",
  title: "갤럭시 폴더블 8 시리즈",
  titleBold: "사전예약 접수 중",
  lead:
    "폴드8 울트라 · 폴드8 · 플립8. 마장역 공일모바일에서 사전예약을 받고 있습니다. " +
    "기기와 요금제, 쓰던 폰 매입까지 한 번에 정리해 드립니다.",
  points: [
    "세 모델 실물 비교 상담 — 어떤 게 맞는지 같이 봅니다",
    "쓰던 폰 매입가를 미리 확인하고 차액으로 계산",
    "인터넷·가족 결합까지 넣어 월 납부액 범위 산출",
  ],
  note: "지원금·할인 조건은 통신사 정책과 가입 유형에 따라 달라집니다. 최종 조건은 매장 상담에서 확정됩니다.",
  video: "/assets/foldable8-preorder.webm",
  poster: "/assets/galaxy-fold8-lavender.png",
};

/* ---------- 상단 알림바 ---------- */
function PromoBar() {
  const [open, setOpen] = useStateP(false);
  useEffectP(() => {
    try { setOpen(localStorage.getItem("promo_off_" + PROMO.key) !== "1"); }
    catch (e) { setOpen(true); }
  }, []);
  if (!open) return null;
  const close = () => {
    setOpen(false);
    try { localStorage.setItem("promo_off_" + PROMO.key, "1"); } catch (e) {}
  };
  return (
    <div className="promo-bar" role="region" aria-label="사전예약 안내">
      <a
        className="promo-bar__link"
        href="#preorder"
        onClick={() => window.gmTrack && window.gmTrack("promo_bar_click", { promo: PROMO.key })}>
        <span className="promo-bar__dot" aria-hidden="true" />
        <b>{PROMO.bar}</b>
        <span className="promo-bar__go">자세히 <Icon name="arrow" size={13} /></span>
      </a>
      <button className="promo-bar__x" onClick={close} aria-label="알림 닫기">
        <Icon name="close" size={15} />
      </button>
    </div>
  );
}

/* ---------- 프로모션 섹션 ---------- */
function PreorderSection() {
  const vRef = useRefP(null);
  const [playing, setPlaying] = useStateP(false);

  /* 화면에 들어올 때만 재생 — 데이터·배터리 절약, 벗어나면 정지 */
  useEffectP(() => {
    const v = vRef.current;
    if (!v || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { v.play().then(() => setPlaying(true)).catch(() => {}); }
        else { v.pause(); setPlaying(false); }
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const book = () => window.gmTrack && window.gmTrack("preorder_cta", { promo: PROMO.key });

  return (
    <section className="section preorder" id="preorder">
      <div className="container preorder__grid">
        <Reveal className="preorder__tx">
          <span className="eyebrow"><span className="dot" />PRE-ORDER</span>
          <h2 className="section-title">
            <span className="h-thin">{PROMO.title}</span><br />
            <span className="h-bold">{PROMO.titleBold}</span>
          </h2>
          <p className="section-sub">{PROMO.lead}</p>
          <ul className="preorder__list">
            {PROMO.points.map((p) => (
              <li key={p}><Icon name="check" size={15} /><span>{p}</span></li>
            ))}
          </ul>
          <div className="preorder__cta">
            <a href="#booking" className="btn btn-primary btn-lg" onClick={book}>
              사전예약 상담 신청 <Icon name="arrow" size={16} />
            </a>
            <a href="tel:01079329779" className="btn btn-ghost btn-lg">전화로 문의</a>
          </div>
          <p className="preorder__note">{PROMO.note}</p>
        </Reveal>

        <Reveal delay={100} className="preorder__media">
          <div className="preorder__video">
            <video
              ref={vRef}
              src={PROMO.video}
              poster={PROMO.poster}
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="갤럭시 폴더블 8 시리즈 사전예약 안내 영상"
            />
            {!playing &&
              <button
                className="preorder__play"
                aria-label="영상 재생"
                onClick={() => { const v = vRef.current; if (v) v.play().then(() => setPlaying(true)).catch(() => {}); }}>
                ▶
              </button>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
