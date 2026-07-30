/* global React, Icon, Reveal */
const { useState: useStateB } = React;

// 카카오톡 채널 채팅 URL (booking-config.js의 window.KAKAO_CHANNEL_URL)
function kakaoChat() {
  const u = (typeof window !== "undefined" && window.KAKAO_CHANNEL_URL) || "";
  return (u && u.indexOf("YOUR-") === -1) ? u : "";
}

// 서브페이지(devices.html 등)에서 홈 전용 앵커(#booking 등)를 홈으로 연결하기 위한 접두사
const PAGE_BASE = /(?:^|\/)(index\.html)?$/.test(location.pathname) ? "" : "./";

// ---------- Color map per model ----------
const MODEL_COLORS = {
  "iPhone 17": ["라벤더", "세이지", "미스트 블루", "화이트", "블랙"],
  "iPhone 17 Pro": ["실버", "딥 블루", "코스믹 오렌지"],
  "iPhone 17 Pro Max": ["실버", "딥 블루", "코스믹 오렌지"],
  "iPhone Air": ["스카이 블루", "라이트 골드", "클라우드 화이트", "스페이스 블랙"],
  "iPhone 17e": ["화이트", "블랙", "핑크"],
  "Galaxy S26": ["코발트 바이올렛", "스카이 블루", "블랙", "화이트"],
  "Galaxy S26+": ["코발트 바이올렛", "스카이 블루", "블랙", "화이트"],
  "Galaxy S26 Ultra": ["코발트 바이올렛", "스카이 블루", "블랙", "화이트"],
  "Galaxy Z Fold8 Ultra": ["그라파이트", "크림", "바이올렛 쉐도우", "그린 쉐도우"],
  "Galaxy Z Fold8": ["그라파이트", "크림", "라벤더", "피스타치오"],
  "Galaxy Z Flip8": ["그라파이트", "크림", "핑크", "민트"],
  "삼성 스타일 폴더2": ["블랙"],
  "Galaxy A17": ["라이트 블루", "블랙", "라이트 그린"],
  "기타 / 추천 부탁": [],
  "아직 미정": []
};

// ---------- Booking ----------
function BookingSection() {
  const topics = ["기기변경", "번호이동", "신규가입", "인터넷/TV 결합", "요금제 상담", "부모님/가족폰"];
  const [form, setForm] = useStateB({
    name: "", phone: "", birth: "", carrier: "", topics: [],
    model: "", capacity: "", color: "",
    date: "", note: "", consent: false
  });
  const [submitted, setSubmitted] = useStateB(false);
  const [sending, setSending] = useStateB(false);
  const [errors, setErrors] = useStateB({});

  // 희망 방문 날짜 min 값 (오늘, 로컬 기준 YYYY-MM-DD)
  const pad2 = (n) => String(n).padStart(2, "0");
  const _now = new Date();
  const todayStr = _now.getFullYear() + "-" + pad2(_now.getMonth() + 1) + "-" + pad2(_now.getDate());

  const toggleTopic = (t) => {
    setForm((f) => ({ ...f, topics: f.topics.includes(t) ? f.topics.filter((x) => x !== t) : [...f.topics, t] }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (sending || submitted) return; // 연타 중복 제출 방지
    const errs = {};
    if (!form.name.trim()) errs.name = "이름을 입력해주세요.";
    if (!form.phone.trim()) errs.phone = "연락처를 입력해주세요.";
    if (!form.consent) errs.consent = "개인정보 수집·이용에 동의해주세요.";
    setErrors(errs);
    if (Object.keys(errs).length) {
      // 첫 번째 오류(aria-invalid) 필드로 스크롤 + 포커스
      const firstId = errs.name ? "bk-name" : errs.phone ? "bk-phone" : "bk-consent";
      const el = typeof document !== "undefined" ? document.getElementById(firstId) : null;
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.focus({ preventScroll: true });
      }
      return;
    }

    // 초대링크로 들어온 경우 저장해둔 추천코드 (app.jsx useReferralCapture)
    // 저장된 지 30일이 지난 코드는 만료 처리하고 사용하지 않는다
    let refCode = "";
    try {
      refCode = localStorage.getItem("referralCode") || "";
      const refAt = localStorage.getItem("referralAt") || "";
      if (refCode && refAt && Date.now() - new Date(refAt).getTime() > 30 * 24 * 60 * 60 * 1000) {
        localStorage.removeItem("referralCode");
        localStorage.removeItem("referralAt");
        refCode = "";
      }
    } catch (e2) {}

    // 1) 구글 시트 저장 + 카카오 알림 (Google Apps Script 웹앱으로 전송)
    const timeEl = typeof document !== "undefined" ? document.getElementById("bk-time") : null;
    const payload = {
      ...form,
      time: timeEl ? timeEl.value : "",
      topics: form.topics,
      referralCode: refCode,
      submittedAt: new Date().toISOString()
    };
    const url = (typeof window !== "undefined" && window.BOOKING_WEBHOOK_URL) || "";
    setSending(true); // 성공 후에도 재활성화하지 않음 (중복 제출 방지)
    if (url && url.indexOf("YOUR-") === -1) {
      try {
        // Apps Script는 Content-Type 헤더를 명시하지 않은 단순 POST에만 CORS 응답을 주므로 headers를 넣지 않는다
        const res = await fetch(url, {
          method: "POST",
          mode: "cors",
          body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error("HTTP " + res.status);
      } catch (err) {
        // 실패 시 접수 완료로 처리하지 않고 재시도 안내
        setSending(false);
        if (window.gmTrack) window.gmTrack("booking_error", { where: "webhook" });
        setErrors({ submit: "일시적인 오류로 접수하지 못했어요. 잠시 후 다시 시도하시거나 010-7932-9779로 전화 주세요." });
        return;
      }
    }

    if (window.gmTrack) window.gmTrack("booking_submit", { topics: (form.topics || []).join("|"), model: form.model || "" });

    // 2) 초대링크 추천코드가 있으면 → Supabase에 추천 자동 등록 (관리자 페이지에 집계)
    if (refCode && typeof window !== "undefined" && window.supabase &&
        window.SUPABASE_URL && window.SUPABASE_URL.indexOf("YOUR-") === -1) {
      try {
        const sb = window.__sbClient ||
          (window.__sbClient = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY));
        sb.rpc("submit_referral", {
          p_code: refCode,
          p_name: form.name,
          p_phone: form.phone,
          p_memo: "웹 신청" + (form.model ? " · " + form.model : "") + (form.note ? " · " + form.note : "")
        }).then(() => {}, () => {});
      } catch (err) {/* 추천 등록 실패해도 예약 접수는 유지 */}
    }

    // 접수 성공 → 추천코드는 1회만 귀속되도록 삭제
    if (refCode) {
      try {
        localStorage.removeItem("referralCode");
        localStorage.removeItem("referralAt");
      } catch (e3) {}
    }
    setSubmitted(true);
  };

  const bullets = [
  { n: "01", t: "지금 쓰시는 조건 점검", s: "현재 약정·통신사·월 요금을 먼저 파악합니다" },
  { n: "02", t: "필요한 건지 확인", s: "사진·영상·게임·부모님용 — 용도별로 맞춰드립니다" },
  { n: "03", t: "월 납부액 유지 시뮬레이션", s: "지금과 같은 돈으로 어떤 조합이 가능한지 계산드립니다" },
  { n: "04", t: "필요 시만 개통", s: "설명만 듣고 가셔도 괜찮습니다. 강요·권유는 없습니다." }];


  return (
    <section className="section booking-section" id="booking">
      <div className="container">
        <Reveal>
          <span className="eyebrow"><span className="dot" />BOOKING</span>
          <h2 className="section-title">
            <span className="h-thin">속으로 결정하세요.</span><br />
            <span className="h-bold">말은 저희가 정리해드릴게요.</span>
          </h2>
          <p className="section-sub">
            “이 폰이 나한테 맞나?” · “매달 얼마씩 나가야 적정이지?” · “지금 바꿔도 손해는 안 볼까?”
            고객님이 막연하게 고민하는 그 질문들을, 수치·조건으로 먼저 정리해드립니다.
          </p>
        </Reveal>

        <div className="booking-grid">
          <Reveal>
            <aside className="booking-side">
              <div className="booking-highlight">
                <div className="booking-highlight__tag">가장 많이 듣는 질문</div>
                <h4>오래된 폰을 최신폰으로 바꿔도,<br />
                <span>월 요금이 그대로일 수 있습니다.</span></h4>
                <p>기기값·공시지원금·선택약정·요금제 조합을 다시 짜면,
                  이미 내고 계신 금액과 비슷한 수준으로도 최신 기기로 바꿀 수 있습니다.
                  광고 속 가격이 아니라, 지금 고객님의 실제 조건으로 계산해 드립니다.</p>
              </div>
              <h3>예약하면 달라지는 4단계</h3>
              <p>방문 전 고객님 상황을 먼저 정리해 두면,
매장에서는 설명 대신 판단만 하시면 됩니다.</p>
              <div className="booking-bullets">
                {bullets.map((b) => <div className="booking-bullet" key={b.n}>
                    <span className="n">{b.n}</span>
                    <b className="bullet-t">{b.t}</b>
                    <span className="bullet-s">{b.s}</span>
                  </div>
                )}
              </div>
            </aside>
          </Reveal>

          <Reveal delay={120}>
            <form className="booking-form" onSubmit={onSubmit} noValidate>
              <div className="form-row two">
                <div className="field">
                  <label htmlFor="bk-name">이름<span className="req">*</span></label>
                  <input id="bk-name" className="input" placeholder="성함을 입력해주세요"
                  value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  aria-invalid={!!errors.name} />
                </div>
                <div className="field">
                  <label htmlFor="bk-phone">연락처<span className="req">*</span></label>
                  <input id="bk-phone" className="input" placeholder="010-0000-0000" inputMode="tel"
                  value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  aria-invalid={!!errors.phone} />
                </div>
              </div>

              <div className="form-row two" style={{ marginTop: 18 }}>
                <div className="field">
                  <label htmlFor="bk-birth">생년월일</label>
                  <input id="bk-birth" type="date" className="input"
                  value={form.birth} onChange={(e) => setForm((f) => ({ ...f, birth: e.target.value }))} />
                </div>
                <div className="field">
                  <label htmlFor="bk-carrier">현재 사용 통신사</label>
                  <select id="bk-carrier" className="select"
                  value={form.carrier} onChange={(e) => setForm((f) => ({ ...f, carrier: e.target.value }))}>
                    <option value="">선택해주세요</option>
                    <option>SKT</option>
                    <option>KT</option>
                    <option>LG U+</option>
                    <option>알뜰폰 (MVNO)</option>
                    <option>잘 모르겠어요</option>
                  </select>
                </div>
              </div>

              <div className="field" style={{ marginTop: 18 }}>
                <label>상담 희망 항목 <span style={{ color: "var(--ink-400)", fontWeight: 400 }}>(중복 선택 가능)</span></label>
                <div className="chip-grid">
                  {topics.map((t) =>
                  <button type="button" key={t}
                  className={"chip" + (form.topics.includes(t) ? " on" : "")}
                  onClick={() => toggleTopic(t)}>
                      {t}
                    </button>
                  )}
                </div>
              </div>

              <div className="field" style={{ marginTop: 22 }}>
                <label>
                  관심 있는 기종·용량·색상
                  <span style={{ color: "var(--ink-mute)", fontWeight: 400, marginLeft: 6, fontSize: 12.5 }}>
                    (미정이셔도 괜찮아요)
                  </span>
                </label>
                <div className="form-row three" style={{ marginTop: 8 }}>
                  <select className="select"
                    value={form.model}
                    onChange={(e) => setForm((f) => ({ ...f, model: e.target.value, color: "" }))}
                    aria-label="관심 기종">
                    <option value="">기종 선택</option>
                    <optgroup label="iPhone">
                      <option>iPhone 17</option>
                      <option>iPhone 17 Pro</option>
                      <option>iPhone 17 Pro Max</option>
                      <option>iPhone Air</option>
                      <option>iPhone 17e</option>
                    </optgroup>
                    <optgroup label="Galaxy S">
                      <option>Galaxy S26</option>
                      <option>Galaxy S26+</option>
                      <option>Galaxy S26 Ultra</option>
                    </optgroup>
                    <optgroup label="Galaxy Z">
                      <option>Galaxy Z Fold8 Ultra</option>
                      <option>Galaxy Z Fold8</option>
                      <option>Galaxy Z Flip8</option>
                    </optgroup>
                    <optgroup label="효도폰·실속폰">
                      <option>삼성 스타일 폴더2</option>
                      <option>Galaxy A17</option>
                      <option>기타 / 추천 부탁</option>
                    </optgroup>
                    <option>아직 미정</option>
                  </select>
                  <select className="select"
                    value={form.capacity}
                    onChange={(e) => setForm((f) => ({ ...f, capacity: e.target.value }))}
                    aria-label="용량">
                    <option value="">용량 선택</option>
                    <option>128GB</option>
                    <option>256GB</option>
                    <option>512GB</option>
                    <option>1TB</option>
                    <option>2TB</option>
                    <option>아직 미정</option>
                  </select>
                  <select className="select"
                    value={form.color}
                    onChange={(e) => setForm((f) => ({ ...f, color: e.target.value }))}
                    aria-label="색상"
                    disabled={!form.model || (MODEL_COLORS[form.model] && MODEL_COLORS[form.model].length === 0)}>
                    <option value="">
                      {!form.model
                        ? "먼저 기종을 선택해주세요"
                        : (MODEL_COLORS[form.model] && MODEL_COLORS[form.model].length === 0)
                          ? "매장에서 추천 안내"
                          : "색상 선택"}
                    </option>
                    {(MODEL_COLORS[form.model] || []).map((c) =>
                      <option key={c}>{c}</option>
                    )}
                    {form.model && MODEL_COLORS[form.model] && MODEL_COLORS[form.model].length > 0 &&
                      <option>색상 미정</option>
                    }
                  </select>
                </div>
                <div className="field-hint">
                  정확한 모델명·재고는 매장에서 확인 후 안내드립니다.
                </div>
              </div>

              <div className="form-row two" style={{ marginTop: 18 }}>
                <div className="field">
                  <label htmlFor="bk-date">희망 방문 날짜</label>
                  <input id="bk-date" type="date" className="input" min={todayStr}
                  value={form.date} onChange={(e) => {
                    const v = e.target.value;
                    // 일요일은 정기 휴무 → 선택 차단
                    if (v && new Date(v + "T00:00:00").getDay() === 0) {
                      setForm((f) => ({ ...f, date: "" }));
                      setErrors((er) => ({ ...er, date: "일요일은 정기 휴무입니다" }));
                      return;
                    }
                    setForm((f) => ({ ...f, date: v }));
                    setErrors((er) => ({ ...er, date: "" }));
                  }} />
                  {errors.date &&
                  <div className="field-error" role="alert">{errors.date}</div>
                  }
                  <div className="field-hint">영업시간: 월–토 오전 10:00 – 오후 8:00 · 일요일 휴무</div>
                </div>
                <div className="field">
                  <label htmlFor="bk-time">희망 시간대</label>
                  <select id="bk-time" className="select" defaultValue="">
                    <option value="" disabled>선택해주세요</option>
                    <option>오전 (10:00 ~ 12:00)</option>
                    <option>오후 1 (13:00 ~ 15:00)</option>
                    <option>오후 2 (15:00 ~ 18:00)</option>
                    <option>저녁 (18:00 이후)</option>
                  </select>
                </div>
              </div>

              <div className="field" style={{ marginTop: 18 }}>
                <label htmlFor="bk-note">문의 내용</label>
                <textarea id="bk-note" className="textarea" rows="4"
                placeholder="현재 사용 중인 기기, 통신사, 가족 결합 여부 등을 적어주시면 더 정확하게 안내드릴 수 있습니다."
                value={form.note} onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))} />
              </div>

              <label className="consent">
                <input id="bk-consent" type="checkbox" checked={form.consent}
                aria-invalid={!!errors.consent}
                onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))} />
                <span>
                  <b>개인정보 수집·이용에 동의합니다. (필수)</b><br />
                  수집 항목: 이름·연락처·생년월일 등 입력하신 정보 · 이용 목적: 상담 예약 접수 및 회신 · 보유 기간: 상담 완료 후 3개월.
                  동의를 거부하실 수 있으나, 이 경우 상담 예약 접수가 제한됩니다. 자세한 내용은
                  <a href="privacy.html" target="_blank" rel="noopener noreferrer">개인정보처리방침</a>에서 확인하실 수 있습니다.
                </span>
              </label>

              {(errors.name || errors.phone || errors.consent || errors.submit) &&
              <div className="form-error" role="alert" style={{ color: "#C0392B", fontSize: 13.5, marginTop: 10, fontWeight: 500 }}>
                  {errors.name || errors.phone || errors.consent || errors.submit}
                </div>
              }

              {submitted &&
              <div className="form-success">
                  <Icon name="check" size={18} /> 예약이 접수되었습니다. 빠르게 회신드릴게요.
                </div>
              }

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", marginTop: 22 }}
              disabled={sending || submitted}>
                {sending && !submitted
                  ? "접수 중…"
                  : <>상담 예약 남기기 <Icon name="arrow" size={16} /></>}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>);

}

// ---------- Intro ----------
function IntroSection() {
  const tags = ["부담 없는 상담", "이해하기 쉬운 설명", "고객 상황에 맞춘 안내", "방문 전 예약 가능"];
  return (
    <section className="section intro-section" id="intro">
      <div className="container">
        <Reveal>
          <span className="eyebrow"><span className="dot" />STORE</span>
          <h2 className="section-title">
            <span className="h-thin">사진보다 더 솔직한 곳.</span><br />
            <span className="h-bold">직접 와서 보세요.</span>
          </h2>
        </Reveal>

        <div className="intro-grid">
          <Reveal>
            <div className="intro-image intro-image--photo">
              <img src="assets/store-exterior.jpg" alt="공일모바일 매장 외관"
              width="1448" height="1086" loading="lazy" decoding="async" />
            </div>
          </Reveal>

          <Reveal delay={120} className="intro-text">
            <span className="eyebrow"><span className="dot" />OUR APPROACH</span>
            <h3>판매가 아니라, 점검부터 시작합니다.</h3>
            <p>
              공일모바일은 고객이 복잡한 통신 조건을 쉽게 이해하고 선택할 수 있도록 돕는
              <b> 상담 중심 매장</b>입니다. 단순히 판매만 하는 곳이 아니라,
              고객님의 사용 패턴과 통신비 구조를 함께 점검해 더 합리적인 선택을 도와드립니다.
            </p>
            <div className="intro-tags">
              {tags.map((t) => <span className="intro-tag" key={t}>{t}</span>)}
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}

// ---------- Location ----------
function LocationSection() {
  const [copied, setCopied] = useStateB(false);
  const address = "서울특별시 성동구 마장로 305 1층 공일모바일";

  const onCopy = () => {
    navigator.clipboard?.writeText(address).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }).catch(() => {});
  };

  const hours = [
  { d: "월–토", h: "오전 10:00 – 오후 8:00" },
  { d: "일요일", h: "휴무 (정기 휴무일)", off: true }];


  return (
    <section className="section" id="location">
      <div className="container">
        <Reveal>
          <span className="eyebrow"><span className="dot" />LOCATION</span>
          <h2 className="section-title">오시는 길</h2>
          <p className="section-sub">마장역 2번 출구 도보 약 1분 거리. 처음 오셔도 쉽게 찾으실 수 있습니다.</p>
        </Reveal>

        <div className="location-grid">
          <Reveal>
            <a href="https://naver.me/FHOAX0ay" target="_blank" rel="noopener noreferrer" className="map-card map-card--link map-card--photo" aria-label="네이버 지도에서 공일모바일 마장역점 보기">
              <img src="assets/store-map.png" alt="공일모바일 마장역점 위치 약도" className="map-photo"
              width="1149" height="829" loading="lazy" decoding="async" />
              <div className="map-cta">
                <Icon name="map" size={14} />
                <span>네이버 지도에서 길찾기</span>
                <Icon name="arrow" size={14} />
              </div>
            </a>
          </Reveal>

          <Reveal delay={120} className="location-info">
            <div className="info-card">
              <div className="ttl">매장 주소</div>
              <div className="val">
                {address}
                <small>마장역 2번 출구 도보 약 1분 거리</small>
              </div>
            </div>

            <div className="info-card actions">
              <button className="info-action" onClick={onCopy}>
                <Icon name="copy" size={18} className="ic" />
                {copied ? "주소가 복사되었습니다" : "주소 복사하기"}
                <span className="arrow"><Icon name="arrow" size={16} /></span>
              </button>
              <a className="info-action" href="tel:01079329779">
                <Icon name="phone" size={18} className="ic" />
                전화하기
                <span className="arrow"><Icon name="arrow" size={16} /></span>
              </a>
              <a className="info-action" href="https://m.place.naver.com/place/2051361364/review/visitor" target="_blank" rel="noopener noreferrer">
                <Icon name="naver" size={18} className="ic" />
                네이버 리뷰 남기기
                <span className="arrow"><Icon name="arrow" size={16} /></span>
              </a>
              <a className="info-action" href="https://naver.me/FHOAX0ay" target="_blank" rel="noopener noreferrer">
                <Icon name="map" size={18} className="ic" />
                네이버 지도에서 보기
                <span className="arrow"><Icon name="arrow" size={16} /></span>
              </a>
            </div>

            <div className="info-card">
              <div className="ttl"><Icon name="clock" size={12} style={{ display: "inline-block", verticalAlign: -2 }} /> 영업시간</div>
              <div className="hours-list">
                {hours.map((h) =>
                <div className="hour-row" key={h.d}>
                    <span className="d">{h.d}</span>
                    <span className={"h " + (h.off ? "off" : "")}>{h.h}</span>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}

// ---------- Bottom CTA ----------
function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <Reveal>
          <div className="cta-card">
            <span className="eyebrow"><span className="dot" />CONTACT</span>
            <h2>
              <span className="h-thin" style={{ color: "rgb(150, 150, 158)" }}>오래된 폰을 최신폰으로.</span><br />
              <span className="h-bold" style={{ color: "rgb(255, 255, 255)" }}>요금은, 그대로.</span>
            </h2>
            <p>기기변경 · 번호이동 · 요금제 · 인터넷·TV 결합까지 한 번에. 강요 없이, 부담 없이.</p>
            <div className="cta-buttons">
              <a href={PAGE_BASE + "#booking"} className="btn btn-primary btn-lg">
                <Icon name="calendar" size={18} /> 상담 예약하기
              </a>
              <a href="tel:01079329779" className="btn btn-ghost btn-lg">
                <Icon name="phone" size={18} /> 전화 문의하기
              </a>
              <a href={kakaoChat() || "#"} target="_blank" rel="noopener noreferrer"
                className="btn btn-kakao btn-lg"
                onClick={(e) => { if (!kakaoChat()) e.preventDefault(); }}>
                <Icon name="chat" size={18} /> 카카오톡 문의하기
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href={PAGE_BASE + "#top"} className="brand" style={{ color: "#fff" }}>
              <span className="brand-logo footer-logo"><img src="assets/logo.png" alt="공일모바일 로고"
              width="44" height="44" loading="lazy" decoding="async" /></span>
              <span className="brand-text">
                <strong style={{ color: "#fff" }}>공일모바일</strong>
                <small style={{ color: "rgba(255,255,255,0.55)" }}>01 MOBILE</small>
              </span>
            </a>
            <p style={{ marginTop: 16, color: "#8A95AB", maxWidth: 380 }}>복잡한 휴대폰 구매를 가장 쉽고 투명하게 안내하는
동네 프리미엄 상담 매장.
            </p>
            <div className="footer-info-line" style={{ marginTop: 14 }}>
              <span>주소</span> 서울특별시 성동구 마장로 305 1층 공일모바일
            </div>
            <div className="footer-info-line">
              <span>대표번호</span> 010-7932-9779
            </div>
            <div className="footer-info-line">
              <span>사업자정보</span> 상호: 공일모바일 · 대표: 곽상효 · 사업자등록번호: 847-75-00504
            </div>
            <div className="footer-precon">
              <a
                href="https://ictmarket.or.kr:8443/precon/pop_CertIcon.do?PRECON_REQ_ID=PRE0000201702"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="이동통신 사전승낙서 확인">
                <img
                  src="https://ictmarket.or.kr:8443/getCertIcon.do?cert_icon=KP26061713822W001"
                  alt="이동통신 판매점 사전승낙 마크"
                  width="56" height="56"
                  loading="lazy" decoding="async"
                  style={{ cursor: "pointer" }}
                  onError={(e) => { e.currentTarget.style.display = "none"; }} />
              </a>
            </div>
          </div>

          <div>
            <h5>상담 가능 항목</h5>
            <ul className="footer-list">
              <li>기기변경 · 번호이동 · 신규가입</li>
              <li>요금제 비교 상담</li>
              <li>알뜰폰 · 유심/eSIM 상담</li>
              <li>인터넷 · TV 결합 상담</li>
              <li>가족 결합 / 통신비 점검</li>
              <li>중고폰 판매 · 매입</li>
              <li>효도폰 · 실속폰 안내</li>
            </ul>
          </div>

          <div>
            <h5>바로가기</h5>
            <ul className="footer-list">
              <li><a href={PAGE_BASE + "#booking"}>방문 상담 예약</a></li>
              <li><a href={PAGE_BASE + "#products"}>판매 상품</a></li>
              <li><a href="devices.html">기기 전체보기</a></li>
              <li><a href="used.html">중고폰 판매·매입</a></li>
              <li><a href={PAGE_BASE + "#location"}>오시는 길</a></li>
              <li><a href="privacy.html">개인정보처리방침</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 공일모바일. All rights reserved.</span>
          <span>본 사이트는 합법적 통신 상담을 위한 안내 페이지이며, 모든 가격·할인 조건은 상담 후 안내됩니다.</span>
          <a href="admin.html" className="footer-admin-link">관리자</a>
        </div>
      </div>
    </footer>);

}

// ---------- Mobile bottom action bar ----------
function MobileActionBar() {
  return (
    <nav className="bottom-bar" aria-label="빠른 상담 메뉴">
      <a href="tel:01079329779">
        <Icon name="phone" size={18} /> 전화
      </a>
      <a href={PAGE_BASE + "#booking"} className="primary">
        <Icon name="calendar" size={18} /> 예약
      </a>
      <a href={kakaoChat() || "#"} className="kakao" target="_blank" rel="noopener noreferrer"
        onClick={(e) => { if (!kakaoChat()) e.preventDefault(); }}>
        <Icon name="chat" size={18} /> 카톡
      </a>
    </nav>);

}

Object.assign(window, { BookingSection, IntroSection, LocationSection, CTASection, Footer, MobileActionBar });