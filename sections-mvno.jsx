/* global React, Icon, Reveal */
/* global MVNO_BRANDS, CATALOG_STATUS, SAMPLE_NOTE, PRICE_NOTE */
// ==========================================================
// MVNO — 홈 알뜰폰·유심/eSIM 섹션 (index.html에서 app.jsx가 렌더)
// 데이터: catalog-data.js의 MVNO_BRANDS (단일 소스).
// 가격은 구체 금액 대신 "월 1만원대부터" 수준의 범위 언급만 — 단정 금지.
// ==========================================================

function MvnoSection() {
  const steps = [
    { n: "01", ic: "phone", t: "번호는 그대로", s: "지금 쓰는 번호 그대로 번호이동으로 옮깁니다. 쓰던 폰이 멀쩡하다면 기기도 그대로 쓸 수 있습니다." },
    { n: "02", ic: "pkg", t: "유심 / eSIM 선택", s: "실물 유심과 eSIM 중 편한 방식을 고르시면 됩니다. 어느 쪽이 맞는지 매장에서 함께 정해드립니다." },
    { n: "03", ic: "clock", t: "당일 개통", s: "서류 확인이 끝나면 보통 당일에 개통까지 마무리됩니다. 개통 완료 확인까지 매장에서 함께합니다." },
  ];

  return (
    <section className="section mvno-section" id="mvno">
      <div className="container">
        <Reveal>
          <span className="eyebrow"><span className="dot" />MVNO</span>
          <h2 className="section-title">
            <span className="h-thin">번호도 폰도 그대로 두고,</span><br />
            <span className="h-bold">통신비는 알뜰폰으로 줄일 수 있습니다.</span>
          </h2>
          <p className="section-sub">
            통신 3사 망을 그대로 쓰는 알뜰폰이라면 통화·데이터 품질은 같은 망 기준으로 유지하면서,
            매달 나가는 요금만 가볍게 만들 수 있습니다. 사용 패턴에 따라
            <b style={{ color: "var(--ink-headline)", fontWeight: 600 }}> 월 1만원대부터 시작하는 조합</b>도 있습니다 —
            어떤 구간이 맞는지 매장에서 투명하게 비교해 드립니다.
          </p>
          {CATALOG_STATUS === "SAMPLE" && SAMPLE_NOTE &&
            <div className="mv-sample" role="note">
              <Icon name="clock" size={14} />
              <span>{SAMPLE_NOTE}</span>
            </div>
          }
        </Reveal>

        <div className="mv-steps">
          {steps.map((s, i) =>
            <Reveal key={s.n} delay={i * 80}>
              <article className="mv-step">
                <span className="mv-step__num">{s.n}</span>
                <div className="mv-step__ico"><Icon name={s.ic} size={22} /></div>
                <h3>{s.t}</h3>
                <p>{s.s}</p>
              </article>
            </Reveal>
          )}
        </div>

        <div className="mv-cols">
          <Reveal delay={60}>
            <article className="mv-brands">
              <h3>취급 알뜰폰 브랜드</h3>
              <p>통신 3사 망을 빌려 쓰는 브랜드들이라, 통화와 데이터는 같은 망 기준으로 이용합니다.</p>
              <ul className="mv-brand-list">
                {MVNO_BRANDS.map((b) =>
                  <li className="mv-brand" key={b.key}>
                    <span className="mv-brand__name">{b.label}</span>
                    <span className="mv-brand__net">{b.network}</span>
                  </li>
                )}
              </ul>
              <p className="mv-brands__note">
                <Icon name="check" size={13} />
                <span>취급 브랜드는 매장 상황에 따라 달라질 수 있습니다.</span>
              </p>
            </article>
          </Reveal>

          <Reveal delay={140}>
            <article className="mv-esim">
              <div className="mv-esim__ico"><Icon name="phoneShape" size={22} /></div>
              <h3>eSIM도 매장에서 바로 도와드립니다</h3>
              <p>
                eSIM 지원 기기라면 유심 교체 없이 그 자리에서 개통할 수 있습니다.
                기존 번호와 함께 쓰는 듀얼심 구성이 궁금하시면 편하게 물어보세요.
              </p>
              <div className="mv-esim__tip">
                <Icon name="check" size={14} />
                <span>실물 유심이 필요한 경우에도 매장에 재고가 있으면 바로 장착해 드립니다.</span>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mv-cta">
            <a href="plans.html?type=mvno" className="btn btn-primary btn-lg">
              알뜰폰 요금제 보기 <Icon name="arrow" size={16} />
            </a>
            <a href="#booking" className="btn btn-ghost btn-lg">
              <Icon name="calendar" size={17} /> 방문 예약
            </a>
          </div>
          <p className="mv-note">
            <Icon name="shield" size={15} />
            <span>{PRICE_NOTE}</span>
          </p>
        </Reveal>
      </div>

      {/* ── 섹션 전용 스타일 (styles.css 수정 금지 — 기존 토큰만 사용) ── */}
      <style>{`
        .mv-sample {
          display: inline-flex; align-items: center; gap: 8px;
          margin-top: 4px; margin-bottom: 8px; padding: 10px 16px;
          background: var(--blue-soft); color: var(--blue-deep);
          border: 1px solid rgba(0, 108, 255, 0.16);
          border-radius: var(--radius-sm);
          font-size: 13.5px; font-weight: 500; letter-spacing: -0.01em;
        }
        .mv-sample svg { flex: none; }

        .mv-steps {
          display: grid; grid-template-columns: 1fr; gap: 18px;
          margin-top: 48px;
        }
        @media (min-width: 768px) { .mv-steps { grid-template-columns: repeat(3, 1fr); } }
        .mv-steps .reveal { height: 100%; }

        .mv-step {
          position: relative; height: 100%;
          background: #fff; border: 1px solid var(--line);
          border-radius: var(--radius-md); padding: 26px 24px;
          box-shadow: var(--shadow-xs);
        }
        .mv-step__num {
          position: absolute; top: 22px; right: 24px;
          font-family: var(--font-mono); font-size: 12.5px;
          letter-spacing: 0.04em; color: var(--ink-500);
        }
        .mv-step__ico {
          width: 48px; height: 48px; border-radius: 14px;
          background: var(--blue-soft); color: var(--blue);
          display: grid; place-items: center; margin-bottom: 18px;
        }
        .mv-step h3 {
          margin: 0 0 8px; font-size: 18px; font-weight: 700;
          letter-spacing: -0.02em; color: var(--ink-headline);
        }
        .mv-step p { margin: 0; font-size: 14.5px; line-height: 1.65; color: var(--ink-600); }

        .mv-cols {
          display: grid; grid-template-columns: 1fr; gap: 18px;
          margin-top: 18px;
        }
        @media (min-width: 1024px) { .mv-cols { grid-template-columns: 1.15fr 0.85fr; } }
        .mv-cols .reveal { height: 100%; }

        .mv-brands {
          height: 100%;
          background: #fff; border: 1px solid var(--line);
          border-radius: var(--radius-md); padding: 26px 24px;
          box-shadow: var(--shadow-xs);
        }
        .mv-brands h3, .mv-esim h3 {
          margin: 0 0 8px; font-size: 18px; font-weight: 700;
          letter-spacing: -0.02em; color: var(--ink-headline);
        }
        .mv-brands > p, .mv-esim > p {
          margin: 0; font-size: 14.5px; line-height: 1.65; color: var(--ink-600);
        }
        .mv-brand-list {
          list-style: none; margin: 18px 0 0; padding: 0;
          display: grid; grid-template-columns: 1fr; gap: 8px;
        }
        @media (min-width: 560px) { .mv-brand-list { grid-template-columns: 1fr 1fr; } }
        .mv-brand {
          display: flex; align-items: center; justify-content: space-between; gap: 10px;
          padding: 12px 14px;
          background: var(--bg-soft); border: 1px solid var(--line);
          border-radius: var(--radius-sm);
        }
        .mv-brand__name {
          font-size: 14.5px; font-weight: 600;
          color: var(--ink-headline); letter-spacing: -0.015em;
        }
        .mv-brand__net {
          flex: none; font-size: 12px; font-weight: 600;
          color: var(--blue-deep); background: var(--blue-soft);
          border-radius: 999px; padding: 4px 10px;
        }
        .mv-brands__note {
          display: flex; align-items: flex-start; gap: 6px;
          margin: 14px 0 0; font-size: 13px; color: var(--ink-500); line-height: 1.55;
        }
        .mv-brands__note svg { flex: none; color: var(--blue); margin-top: 3px; }

        .mv-esim {
          height: 100%; display: flex; flex-direction: column;
          background: var(--blue-mist);
          border: 1px solid rgba(0, 108, 255, 0.14);
          border-radius: var(--radius-md); padding: 26px 24px;
        }
        .mv-esim__ico {
          width: 48px; height: 48px; border-radius: 14px;
          background: #fff; color: var(--blue);
          border: 1px solid rgba(0, 108, 255, 0.12);
          display: grid; place-items: center; margin-bottom: 18px;
        }
        .mv-esim__tip {
          display: flex; align-items: flex-start; gap: 7px;
          margin-top: auto; padding-top: 18px;
          font-size: 13.5px; font-weight: 500; color: var(--blue-deep); line-height: 1.55;
        }
        .mv-esim__tip svg { flex: none; margin-top: 2px; }

        .mv-cta {
          margin-top: 40px;
          display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;
        }
        .mv-note {
          display: flex; align-items: flex-start; justify-content: center; gap: 8px;
          max-width: 760px; margin: 18px auto 0;
          font-size: 13px; color: var(--ink-500); line-height: 1.6;
        }
        .mv-note svg { flex: none; color: var(--blue); margin-top: 2px; }
      `}</style>
    </section>);

}

Object.assign(window, { MvnoSection });
