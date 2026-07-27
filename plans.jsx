/* global React, ReactDOM, Icon, Reveal, Header, CTASection, Footer, MobileActionBar,
   PLANS, CARRIERS, MVNO_BRANDS, MVNO_COLOR, wonRange, dataLabel, operatorLabel,
   PRICE_NOTE, SAMPLE_NOTE, CATALOG_STATUS */
const { useState: useStateP, useMemo: useMemoP } = React;

// ---------- 필터 정의 ----------
const OP_FILTERS = [
  { key: "all", label: "전체" },
  { key: "SKT", label: "SK텔레콤" },
  { key: "KT", label: "KT" },
  { key: "LGU", label: "LG U+" },
  { key: "mvno", label: "알뜰폰" }];

const NET_FILTERS = [
  { key: "all", label: "전체" },
  { key: "5G", label: "5G" },
  { key: "LTE", label: "LTE" }];

// 무제한(-1)은 50GB+ / 10GB+ 구간에도 포함된다.
const DATA_FILTERS = [
  { key: "all", label: "전체" },
  { key: "inf", label: "무제한" },
  { key: "50", label: "50GB+" },
  { key: "10", label: "10GB+" },
  { key: "lt10", label: "10GB 미만" }];

// 알뜰폰 배지 색은 catalog-data.js의 전역 MVNO_COLOR 사용

// ?type=mvno 로 진입하면 알뜰폰 프리셀렉트
function initialOp() {
  try {
    const p = new URLSearchParams(window.location.search);
    return p.get("type") === "mvno" ? "mvno" : "all";
  } catch (e) {
    return "all";
  }
}

function matchData(key, gb) {
  if (key === "all") return true;
  if (key === "inf") return gb === -1;
  if (key === "50") return gb === -1 || gb >= 50;
  if (key === "10") return gb === -1 || gb >= 10;
  if (key === "lt10") return gb !== -1 && gb < 10;
  return true;
}

// ---------- 요금제 카드 ----------
function PlanCard({ p }) {
  const carrier = CARRIERS.find((c) => c.key === p.operator);
  const opColor = p.type === "mvno" ? MVNO_COLOR : (carrier && carrier.color) || "#006CFF";

  return (
    <article className="plan-card2">
      <div className="plan-card2__top">
        <span
          className="plan-card2__op"
          style={{ color: opColor, background: opColor + "12", borderColor: opColor + "36" }}>
          <span className="plan-card2__opdot" />{operatorLabel(p)}
        </span>
        <span className="plan-card2__net">{p.network}</span>
      </div>

      <h3 className="plan-card2__name">{p.name}</h3>

      <div className="plan-card2__data">
        <b>{dataLabel(p.dataGB)}</b>
        {p.speedAfter && <span>소진 후 {p.speedAfter}</span>}
      </div>
      <div className="plan-card2__voice">
        <Icon name="phone" size={14} /> 음성 {p.voice}
      </div>

      <div className="plan-card2__price">
        <span className="l">예상 월정액</span>
        <b>{wonRange(p.monthly)}</b>
      </div>

      {(p.familyCombo || (p.tags && p.tags.indexOf("save") !== -1)) &&
      <div className="plan-card2__tags">
          {p.familyCombo &&
        <span className="plan-tag2"><Icon name="family" size={13} /> 가족결합 가능</span>}
          {p.tags && p.tags.indexOf("save") !== -1 &&
        <span className="plan-tag2 plan-tag2--save"><Icon name="tag" size={13} /> 통신비 절약</span>}
        </div>}

      <a href="./#booking" className="btn btn-ghost plan-card2__cta">
        이 요금제로 상담 예약 <Icon name="arrow" size={14} />
      </a>
    </article>);

}

// ---------- 페이지 ----------
function PlansPage() {
  const [op, setOp] = useStateP(initialOp);
  const [net, setNet] = useStateP("all");
  const [data, setData] = useStateP("all");

  const filtered = useMemoP(() => PLANS.filter((p) => {
    if (op !== "all") {
      if (op === "mvno") {
        if (p.type !== "mvno") return false;
      } else if (p.type !== "carrier" || p.operator !== op) {
        return false;
      }
    }
    if (net !== "all" && p.network !== net) return false;
    if (!matchData(data, p.dataGB)) return false;
    return true;
  }), [op, net, data]);

  const resetFilters = () => {
    setOp("all");
    setNet("all");
    setData("all");
  };

  const filterGroups = [
  { label: "사업자", items: OP_FILTERS, value: op, set: setOp },
  { label: "망", items: NET_FILTERS, value: net, set: setNet },
  { label: "데이터", items: DATA_FILTERS, value: data, set: setData }];

  return (
    <>
      <style>{`
        .plans-hero { padding: calc(var(--header-h) + 72px) 0 0; }
        .plans-hero .section-title { margin-bottom: 12px; }
        .plans-hero .section-sub { margin-bottom: 0; }

        .plans-sample {
          display: inline-flex; align-items: center; gap: 8px;
          margin: 0 0 28px; padding: 10px 16px;
          background: var(--blue-soft); color: var(--blue-deep);
          border: 1px solid rgba(0, 108, 255, 0.16);
          border-radius: var(--radius-sm);
          font-size: 13.5px; font-weight: 500; letter-spacing: -0.01em;
        }
        .plans-sample svg { flex: none; }

        .plans-finder {
          display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
          margin-top: 30px; padding: 16px 20px;
          border: 1px solid var(--line); border-radius: var(--radius-md);
          background: var(--blue-mist);
          transition: border-color .2s ease, transform .2s ease;
        }
        .plans-finder:hover { border-color: rgba(0,108,255,0.35); transform: translateY(-1px); }
        .plans-finder__ico {
          width: 40px; height: 40px; flex-shrink: 0;
          border-radius: 12px; background: #fff; border: 1px solid var(--line);
          color: var(--blue); display: grid; place-items: center;
        }
        .plans-finder__tx { flex: 1; min-width: 200px; display: flex; flex-direction: column; gap: 2px; }
        .plans-finder__tx b { color: var(--ink-900); font-size: 15px; letter-spacing: -0.01em; }
        .plans-finder__tx span { color: var(--ink-600); font-size: 13.5px; }
        .plans-finder__go {
          display: inline-flex; align-items: center; gap: 5px;
          color: var(--blue); font-size: 14px; font-weight: 600; white-space: nowrap;
        }

        .section.plans-body { padding-block: 44px 120px; }
        .plans-filters {
          display: flex; flex-direction: column; gap: 14px;
          padding: 18px; background: #fff;
          border: 1px solid var(--line); border-radius: var(--radius-md);
        }
        .plans-filter { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
        .plans-filter__label { width: 52px; flex-shrink: 0; font-size: 13px; font-weight: 600; color: var(--ink-500); }
        .plans-filter__chips { display: flex; flex-wrap: wrap; gap: 8px; }
        .plans-filter__chips .chip { height: 38px; padding: 0 14px; font-size: 13.5px; border-radius: 10px; }

        .plans-count { margin: 26px 0 14px; font-size: 13.5px; color: var(--ink-500); }
        .plans-count b { color: var(--ink-900); font-weight: 700; }

        .plans-grid {
          display: grid; gap: 18px;
          grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        }
        .plan-card2 {
          display: flex; flex-direction: column;
          background: #fff; border: 1px solid var(--line); border-radius: var(--radius-lg);
          padding: 22px;
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .plan-card2:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); border-color: rgba(0,108,255,0.25); }
        .plan-card2__top { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
        .plan-card2__op {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 10px; border-radius: 999px; border: 1px solid;
          font-size: 12.5px; font-weight: 700; letter-spacing: -0.01em;
        }
        .plan-card2__opdot { width: 6px; height: 6px; border-radius: 999px; background: currentColor; }
        .plan-card2__net {
          margin-left: auto; padding: 3px 9px;
          border: 1px solid var(--line); border-radius: 999px;
          font-family: var(--font-en); font-size: 11.5px; font-weight: 600; color: var(--ink-500);
        }
        .plan-card2__name { margin: 0 0 12px; font-size: 17px; font-weight: 700; color: var(--ink-900); letter-spacing: -0.02em; }
        .plan-card2__data { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }
        .plan-card2__data b { font-size: 24px; font-weight: 700; color: var(--ink-900); letter-spacing: -0.02em; }
        .plan-card2__data span { font-size: 13px; color: var(--ink-500); }
        .plan-card2__voice { margin-top: 6px; display: flex; align-items: center; gap: 6px; font-size: 13.5px; color: var(--ink-600); }
        .plan-card2__price {
          margin: 16px 0; padding-top: 14px;
          border-top: 1px dashed var(--line-strong);
          display: flex; flex-direction: column; gap: 2px;
        }
        .plan-card2__price .l { font-size: 12px; font-weight: 500; color: var(--ink-500); }
        .plan-card2__price b { font-size: 16.5px; font-weight: 700; color: var(--ink-900); letter-spacing: -0.01em; }
        .plan-card2__tags { display: flex; flex-wrap: wrap; gap: 6px; margin: -4px 0 16px; }
        .plan-tag2 {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 4px 10px; border-radius: 999px;
          font-size: 12px; font-weight: 600;
          color: var(--blue-deep); background: var(--blue-soft);
        }
        .plan-tag2--save { color: #0B7A4B; background: #E7F7EF; }
        .plan-card2__cta { margin-top: auto; width: 100%; height: 44px; font-size: 14px; }

        .plans-empty {
          padding: 64px 20px; text-align: center;
          border: 1px dashed var(--line-strong); border-radius: var(--radius-lg);
          color: var(--ink-600);
        }
        .plans-empty__ico {
          width: 48px; height: 48px; margin: 0 auto 14px;
          border-radius: 14px; background: var(--blue-soft); color: var(--blue);
          display: grid; place-items: center;
        }
        .plans-empty b { display: block; margin-bottom: 6px; font-size: 17px; color: var(--ink-900); }
        .plans-empty p { margin: 0 0 18px; font-size: 14px; }

        .plans-note {
          margin-top: 28px; display: flex; gap: 10px; align-items: flex-start;
          padding: 16px 18px; border-radius: 14px;
          background: var(--bg-soft); border: 1px solid var(--line);
          color: var(--ink-600); font-size: 13.5px; line-height: 1.65;
        }
        .plans-note svg { flex-shrink: 0; margin-top: 2px; color: var(--ink-500); }

        .plans-mvno { margin-top: 28px; padding: 22px; background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); }
        .plans-mvno h3 { margin: 0 0 14px; display: flex; align-items: center; gap: 8px; font-size: 16px; font-weight: 700; color: var(--ink-900); }
        .plans-mvno h3 svg { color: #0B7A4B; }
        .plans-mvno__list { display: flex; flex-wrap: wrap; gap: 8px; }
        .plans-mvno__brand {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 14px; border: 1px solid var(--line); border-radius: 999px;
          background: var(--bg-soft); font-size: 13.5px;
        }
        .plans-mvno__brand b { color: var(--ink-800); font-weight: 600; }
        .plans-mvno__brand span { color: #0B7A4B; font-size: 12px; font-weight: 600; }
        .plans-mvno > p { margin: 14px 0 0; font-size: 13px; color: var(--ink-500); }

        @media (max-width: 640px) {
          .plans-hero { padding-top: calc(var(--header-h) + 48px); }
          .plans-filter { flex-direction: column; align-items: flex-start; gap: 8px; }
          .plans-filter__label { width: auto; }
        }
      `}</style>

      <Header base="./" />

      <main>
        <section className="plans-hero">
          <div className="container">
            {CATALOG_STATUS === "SAMPLE" && SAMPLE_NOTE &&
            <div className="plans-sample" role="note">
                <Icon name="clock" size={15} />
                <span>{SAMPLE_NOTE}</span>
              </div>}

            <Reveal>
              <span className="eyebrow"><span className="dot" />PLANS</span>
              <h1 className="section-title"><span className="h-bold">요금제 전체보기</span></h1>
              <p className="section-sub">
                통신 3사와 알뜰폰 요금제를 한눈에 비교해 보세요.
                복잡한 조건 없이, 데이터·통화·예상 월정액 기준으로 투명하게 보여드립니다.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <a href="finder.html" className="plans-finder">
                <span className="plans-finder__ico"><Icon name="easy" size={20} /></span>
                <span className="plans-finder__tx">
                  <b>뭘 골라야 할지 모르겠다면</b>
                  <span>몇 가지 질문에 답하면 나에게 맞는 구간부터 추려드립니다.</span>
                </span>
                <span className="plans-finder__go">1분 요금제 찾기 <Icon name="arrow" size={14} /></span>
              </a>
            </Reveal>
          </div>
        </section>

        <section className="section plans-body">
          <div className="container">
            <Reveal>
              <div className="plans-filters">
                {filterGroups.map((g) =>
                <div className="plans-filter" key={g.label}>
                    <span className="plans-filter__label">{g.label}</span>
                    <div className="plans-filter__chips" role="group" aria-label={g.label + " 필터"}>
                      {g.items.map((f) =>
                    <button
                      key={f.key}
                      type="button"
                      className={"chip" + (g.value === f.key ? " on" : "")}
                      aria-pressed={g.value === f.key}
                      onClick={() => g.set(f.key)}>
                          {f.label}
                        </button>
                    )}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal delay={60}>
              <p className="plans-count">
                총 <b>{filtered.length}개</b> 요금제
              </p>

              {filtered.length > 0 ?
              <div className="plans-grid">
                  {filtered.map((p) => <PlanCard key={p.id} p={p} />)}
                </div> :

              <div className="plans-empty">
                  <div className="plans-empty__ico"><Icon name="compare" size={22} /></div>
                  <b>조건에 맞는 요금제가 없어요</b>
                  <p>필터를 조금 넓혀 보시거나, 매장 상담으로 꼭 맞는 요금제를 찾아드릴게요.</p>
                  <button type="button" className="btn btn-ghost" onClick={resetFilters}>필터 초기화</button>
                </div>}

              <div className="plans-note">
                <Icon name="shield" size={16} />
                <span>{PRICE_NOTE}</span>
              </div>
            </Reveal>

            {op === "mvno" &&
            <Reveal delay={80}>
                <div className="plans-mvno">
                  <h3><Icon name="pkg" size={18} /> 취급 알뜰폰 브랜드</h3>
                  <div className="plans-mvno__list">
                    {MVNO_BRANDS.map((b) =>
                  <span className="plans-mvno__brand" key={b.key}>
                        <b>{b.label}</b>
                        <span>{b.network}</span>
                      </span>
                  )}
                  </div>
                  <p>취급 브랜드는 매장 상황에 따라 달라질 수 있어요. 방문 전에 편하게 문의해 주세요.</p>
                </div>
              </Reveal>}
          </div>
        </section>
      </main>

      <CTASection />
      <Footer />
      <MobileActionBar />
    </>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<PlansPage />);
