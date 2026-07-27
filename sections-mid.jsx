/* global React, Icon, Reveal */

// ---------- Plans ----------
function PlansSection() {
  const items = [
  { ic: "data", t: "데이터 사용량 분석", s: "월 평균 사용량을 기준으로 적정 구간을 안내" },
  { ic: "family", t: "가족 결합 가능 여부 확인", s: "회선 수·연령대·통신사를 함께 점검" },
  { ic: "wifi", t: "인터넷/TV 결합 할인 안내", s: "기존 약정과 신규 결합 조건 비교" },
  { ic: "compare", t: "기기변경/번호이동 비교", s: "각 시나리오별 월 납부금 차이 정리" },
  { ic: "wallet", t: "월 납부금 기준 상담", s: "기기값+요금제 합산 기준으로 안내" }];


  return (
    <section className="section" id="plans">
      <div className="container">
        <Reveal>
          <span className="eyebrow"><span className="dot" />AI PLANS</span>
        </Reveal>
        <div className="plan-grid">
          <Reveal className="plan-text">
            <h3>AI가 수백 가지 조합을 비교해,<br />가장 저렴한 요금을 찾아드립니다.</h3>
            <p>휴대폰에서 진짜 중요한 건 기기값이 아니라 매달 나가는 통신비입니다.
공일모바일은 <b style={{ color: "var(--ink-headline)", fontWeight: 600 }}>AI 요금 분석 상담</b>으로 통신사·요금제·결합·약정 조건을
교차 분석해 <b style={{ color: "var(--ink-headline)", fontWeight: 600 }}>수백 가지 조합</b>을 비교하고,
그중 고객님께 가장 저렴한 조합을 찾아드립니다.
            </p>

            <div className="plan-engine">
              <div className="plan-engine__item">
                <div className="plan-engine__ico"><Icon name="chat" size={18} /></div>
                <div className="plan-engine__tx">
                  <span className="plan-engine__tag">상담 보조</span>
                  <b>LLM 기반 상담 AI</b>
                  <span className="plan-engine__desc">고객님의 사용 패턴·통신 상황을 대화로 이해하고 정리합니다.</span>
                </div>
              </div>
              <div className="plan-engine__plus">+</div>
              <div className="plan-engine__item">
                <div className="plan-engine__ico"><Icon name="spark" size={18} /></div>
                <div className="plan-engine__tx">
                  <span className="plan-engine__tag">요금 최적화</span>
                  <b>룰 기반 최적화 엔진</b>
                  <span className="plan-engine__desc">통신사 요금·할인 규칙을 적용해 가장 저렴한 조합을 계산합니다.</span>
                </div>
              </div>
            </div>

            <div className="plan-stats">
              <div className="plan-stat">
                <div className="v">수백 가지</div>
                <div className="l">AI 요금 조합 비교</div>
              </div>
              <div className="plan-stat">
                <div className="v">최저가</div>
                <div className="l">맞춤 조합 추천</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="checklist-card">
              <div className="checklist-head">
                <div>
                  <div className="t">상담 체크리스트</div>
                  <div className="v">한 번에 점검합니다</div>
                </div>
                <div className="badge">FREE</div>
              </div>
              <div className="checklist-body">
                {items.map((it, i) =>
                <div className="check-row" key={it.t}>
                    <div className="tick"><Icon name={it.ic} size={14} /></div>
                    <div className="tx">
                      <b>{it.t}</b>
                      <span>{it.s}</span>
                    </div>
                    <div className="arrow"><Icon name="arrow" size={16} /></div>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}

// ---------- Bundle ----------
function BundleSection() {
  const cards = [
  { ic: "wifi", t: "인터넷 신규가입 상담", s: "현재 사용 중인 통신사와 약정 상태를 \n함께 점검합니다." },
  { ic: "tv", t: "TV 결합 상담", s: "셋톱박스, IPTV 옵션과 결합 시 할인 가능성을 안내합니다." },
  { ic: "family", t: "가족결합 할인 상담", s: "가족 회선 수와 연령대를 기준으로 \n결합 효과를 비교합니다." },
  { ic: "doc", t: "기존 통신비 점검", s: "현재 납부 내역을 기준으로 \n절감 가능 항목을 정리합니다." }];

  return (
    <section className="section bundle-section" id="bundle">
      <div className="container">
        <Reveal>
          <span className="eyebrow"><span className="dot" />BUNDLE</span>
          <h2 className="section-title">
            <span className="h-thin">진짜 손해는 휴대폰값이 아닙니다.</span><br />
            <span className="h-bold">매달 새는 통신비입니다.</span>
          </h2>
          <p className="section-sub">휴대폰, 인터넷, TV를 묶으면 매달 통신비가 다시 짜집니다.
가족 회선까지 합치면 1년에 100만원 가까이 차이 날 수 있습니다.

          </p>
        </Reveal>

        <div className="bundle-grid">
          {cards.map((c, i) =>
          <Reveal key={c.t} delay={i * 70}>
              <article className="bundle-card">
                <div className="ico"><Icon name={c.ic} size={22} /></div>
                <h4>{c.t}</h4>
                <p style={{ whiteSpace: "pre-line" }}>{c.s}</p>
                <a href="#booking" className="more">상담받기 <Icon name="arrow" size={14} /></a>
              </article>
            </Reveal>
          )}
        </div>

        <Reveal delay={120}>
          <div className="bundle-cta-card">
            <div>
              <h3>지금 통신비, 정말 합리적일까요?</h3>
              <p>현재 납부 내역과 가족 구성을 기준으로 결합·할인 가능 여부를
점검해 드립니다.</p>
            </div>
            <a href="#booking" className="btn btn-primary btn-lg" style={{ background: "#fff", color: "var(--blue-deep)" }}>
              통신비 점검 상담받기 <Icon name="arrow" size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>);
}

// ---------- Reward (지인추천 리워드) ----------
function RewardSection() {
  const steps = [
    { n: "01", ic: "users", t: "내 추천 링크 공유", s: "파트너 페이지에서 발급받은 내 추천 링크를 가족·친구에게 보냅니다." },
    { n: "02", ic: "phone", t: "링크로 신청·개통", s: "소개받은 분이 링크로 신청하면 추천이 자동으로 접수되고, 개통이 확인되면 매장에서 확정합니다." },
    { n: "03", ic: "wallet", t: "1건당 5만원 리워드", s: "추천하신 지인이 개통하면 1건당 5만원을 드립니다." }
  ];

  return (
    <section className="section reward-section" id="reward">
      <div className="container">
        <Reveal>
          <span className="eyebrow"><span className="dot" />REWARD</span>
          <h2 className="section-title">
            <span className="h-thin">좋은 곳은, 나누고 싶으니까.</span><br />
            <span className="h-bold">소개 1건당, 5만원.</span>
          </h2>
          <p className="section-sub">
            직접 소개해 주신 지인이 개통하면 <b style={{ color: "var(--ink-headline)", fontWeight: 600 }}>추천 1건당 5만원</b>을 드립니다.
            부담 없이 소개만 하셔도, 차곡차곡 쌓입니다.
          </p>
        </Reveal>

        <div className="reward-grid">
          {steps.map((s, i) =>
          <Reveal key={s.n} delay={i * 80}>
              <article className="reward-card">
                <span className="reward-num">{s.n}</span>
                <div className="reward-ico"><Icon name={s.ic} size={24} /></div>
                <h3>{s.t}</h3>
                <p>{s.s}</p>
              </article>
            </Reveal>
          )}
        </div>

        <Reveal delay={120}>
          <div className="reward-cta-card">
            <div className="reward-cta-text">
              <div className="reward-cta-tag">파트너 리워드 프로그램</div>
              <h3>꾸준히 소개하면 <span className="reward-income">월 150만원+*</span><br />부수입도 만들 수 있습니다.</h3>
              <p>개통 1건당 5만원. 한 달에 30건이면 월 150만원입니다.
              카카오톡으로 간편하게 시작하고, 내 추천 현황과 누적 리워드를
              파트너 페이지에서 확인하세요. <span className="reward-income-note">*수입은 추천·개통 건수에 따라 달라집니다.</span></p>
            </div>
            <div className="reward-cta-actions">
              <a href="partner.html" className="btn btn-kakao btn-lg reward-kakao-btn">
                <Icon name="chat" size={18} /> 카카오로 파트너 시작
              </a>
              <a href="#booking" className="reward-cta-sub">먼저 상담받기 <Icon name="arrow" size={14} /></a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="reward-must-link">
            <Icon name="spark" size={16} />
            <span><b>꼭 내 추천 링크를 통해 신청해야 리워드가 적립됩니다.</b> 링크 없이 방문·신청한 경우에는
            추천이 자동으로 집계되지 않아 리워드 대상에서 제외될 수 있습니다.</span>
          </div>
          <p className="reward-notice">
            *리워드는 매장에서 개통 완료를 확인한 건에 한해 지급되며, 개통 취소·철회 시
            지급되지 않거나 환수될 수 있습니다.
            리워드 금액·지급 조건은 통신사 정책 및 관련 법령에 따라 달라질 수 있으며,
            정확한 내용은 매장 상담 시 안내드립니다. 추천 시 소개받는 분의 동의 없이
            연락처를 제공하지 않도록 부탁드립니다.
          </p>
        </Reveal>
      </div>
    </section>);
}

Object.assign(window, { PlansSection, BundleSection, RewardSection });