/* global React, ReactDOM, Icon, Reveal, Header, CTASection, Footer, MobileActionBar,
   PLANS, CARRIERS, MVNO_COLOR, wonRange, dataLabel, operatorLabel,
   PRICE_NOTE, SAMPLE_NOTE, CATALOG_STATUS */
// ==========================================================
// FINDER — 1분 요금제 찾기 (finder.html)
// 5문항 스무고개 → PLANS 스코어링 → 상위 3개 "후보" 안내.
// 확정 추천이 아니라 상담의 출발점 — 가격은 wonRange 범위만 노출.
// ==========================================================

const { useState: useStateF, useEffect: useEffectF, useRef: useRefF, useMemo: useMemoF } = React;

// 알뜰폰 배지 색은 catalog-data.js의 전역 MVNO_COLOR 사용 (plans.jsx와 동일 톤)

// Q1 답변 → 데이터 니즈 기준 (min: 이만큼은 있어야 충족 / over: 넘으면 과대 스펙)
const FD_DATA_NEEDS = {
  lite: { min: 2, over: 15 },
  mid: { min: 7, over: 60 },
  heavy: { min: 30, over: Infinity },
  inf: { min: Infinity, over: Infinity }
};

// Q5 답변 → 월 예산 구간
const FD_BUDGETS = {
  b1: { min: 0, max: 19999 },
  b2: { min: 20000, max: 40000 },
  b3: { min: 40000, max: 70000 },
  b4: { min: 70000, max: Infinity }
};

const FD_JOIN_LABELS = { mnp: "번호이동", chg: "기기변경", new: "신규가입", unknown: "가입 유형 미정" };

const FD_QUESTIONS = [
  {
    key: "data", tag: "월 데이터", title: "한 달에 데이터를 얼마나 쓰시나요?",
    options: [
      { key: "lite", ic: "phone", label: "2GB 이하", desc: "전화·문자 위주로 아껴 쓰는 절약형" },
      { key: "mid", ic: "chat", label: "10GB 안팎", desc: "메신저·검색·SNS 위주, 영상은 와이파이로" },
      { key: "heavy", ic: "data", label: "30~110GB 넉넉히", desc: "출퇴근길 영상·음악 스트리밍까지" },
      { key: "inf", ic: "spark", label: "무제한 필수", desc: "데이터 걱정 없이 마음껏 쓰고 싶어요" }
    ]
  },
  {
    key: "style", tag: "통신 스타일", title: "어떤 스타일이 더 잘 맞으세요?",
    options: [
      { key: "carrier", ic: "shield", label: "통신사 프리미엄", desc: "멤버십·가족결합 등 혜택 중심" },
      { key: "mvno", ic: "tag", label: "알뜰폰으로 절약", desc: "혜택보다 매달 나가는 통신비 절감" },
      { key: "any", ic: "easy", label: "잘 모르겠어요", desc: "비교해 보고 유리한 쪽으로 할래요" }
    ]
  },
  {
    key: "combo", tag: "가족·인터넷 결합", title: "가족 회선이나 인터넷 결합이 있으신가요?",
    options: [
      { key: "yes", ic: "family", label: "있어요", desc: "가족 회선 또는 인터넷/TV를 쓰고 있어요" },
      { key: "no", ic: "phoneShape", label: "없어요", desc: "제 회선 하나만 쓰고 있어요" },
      { key: "unknown", ic: "easy", label: "모르겠어요", desc: "상담에서 함께 확인하고 싶어요" }
    ]
  },
  {
    key: "join", tag: "가입 유형", title: "어떤 방식으로 가입하실 예정인가요?",
    options: [
      { key: "mnp", ic: "compare", label: "번호이동", desc: "쓰던 번호 그대로, 통신사만 옮겨요" },
      { key: "chg", ic: "phoneShape", label: "기기변경", desc: "통신사는 유지하고 기기만 바꿔요" },
      { key: "new", ic: "doc", label: "신규가입", desc: "새 번호로 새로 개통해요" },
      { key: "unknown", ic: "easy", label: "잘 모르겠어요", desc: "유리한 쪽을 추천받고 싶어요" }
    ]
  },
  {
    key: "budget", tag: "월 예산", title: "요금제에 쓸 월 예산은 어느 정도인가요?",
    options: [
      { key: "b1", ic: "tag", label: "1만원대 이하", desc: "통신비를 최대한 줄이고 싶어요" },
      { key: "b2", ic: "wallet", label: "2~4만원", desc: "합리적인 선이면 충분해요" },
      { key: "b3", ic: "wallet", label: "4~7만원", desc: "쓸 만큼은 쓰는 편이에요" },
      { key: "b4", ic: "spark", label: "7만원 이상도 OK", desc: "조건이 좋다면 괜찮아요" }
    ]
  }
];

// ---------- 스코어링 ----------
function fdScore(p, a) {
  let s = 0;
  const need = FD_DATA_NEEDS[a.data];
  const gb = p.dataGB === -1 ? Infinity : p.dataGB;
  if (gb >= need.min) s += 3; // 데이터 니즈 충족
  if (gb > need.over) s -= 2; // 과대 스펙
  if (a.style === "carrier" && p.type === "carrier") s += 2;
  if (a.style === "mvno" && p.type === "mvno") s += 2;
  if (a.combo === "yes" && p.familyCombo) s += 2;
  const b = FD_BUDGETS[a.budget];
  if (p.monthly.min > b.max) s -= 3; // 예산 완전 초과
  else if (p.monthly.max >= b.min && p.monthly.min <= b.max) s += 3; // 예산 구간 겹침
  return s;
}

function fdTop3(a) {
  return PLANS
    .map((p) => ({ p, s: fdScore(p, a) }))
    .sort((x, y) => y.s - x.s || x.p.monthly.min - y.p.monthly.min)
    .slice(0, 3);
}

// 답변 기반 추천 이유 한 줄
function fdReason(p, a) {
  const rs = [];
  const need = FD_DATA_NEEDS[a.data];
  const gb = p.dataGB === -1 ? Infinity : p.dataGB;
  if (gb >= need.min) rs.push(a.data === "inf" ? "원하시는 무제한 데이터" : "데이터 " + dataLabel(p.dataGB) + "로 사용량 커버");
  if (a.style === "carrier" && p.type === "carrier") rs.push("멤버십·결합이 되는 통신사 요금제");
  if (a.style === "mvno" && p.type === "mvno") rs.push("통신비를 줄이는 알뜰폰");
  if (a.combo === "yes" && p.familyCombo) rs.push("가족·인터넷 결합 할인 여지");
  const b = FD_BUDGETS[a.budget];
  if (p.monthly.min <= b.max && p.monthly.max >= b.min) rs.push("예산 구간과 예상 월정액이 겹쳐요");
  return rs.slice(0, 2).join(" · ") || "조건을 조금 넓혀 함께 살펴볼 만한 후보예요";
}

// 선택한 답변 라벨 모음 (결과 요약 칩)
function fdAnswerLabels(a) {
  return FD_QUESTIONS.map((q) => {
    const opt = q.options.find((o) => o.key === a[q.key]);
    return opt ? { tag: q.tag, label: opt.label } : null;
  }).filter(Boolean);
}

// ---------- 결과 카드 ----------
function FdResultCard({ p, rank, answers }) {
  const carrier = CARRIERS.find((c) => c.key === p.operator);
  const opColor = p.type === "mvno" ? MVNO_COLOR : (carrier && carrier.color) || "#006CFF";

  return (
    <article className="fdr-card">
      <div className="fdr-card__top">
        <span className="fdr-card__rank">후보 {rank}</span>
        <span
          className="fdr-card__op"
          style={{ color: opColor, background: opColor + "12", borderColor: opColor + "36" }}>
          {operatorLabel(p)}
        </span>
        <span className="fdr-card__net">{p.network}</span>
      </div>

      <h3 className="fdr-card__name">{p.name}</h3>

      <div className="fdr-card__data">
        <b>{dataLabel(p.dataGB)}</b>
        {p.speedAfter && <span>소진 후 {p.speedAfter}</span>}
      </div>
      <div className="fdr-card__voice"><Icon name="phone" size={14} /> 음성 {p.voice}</div>

      <div className="fdr-card__price">
        <span className="l">예상 월정액</span>
        <b>{wonRange(p.monthly)}</b>
      </div>

      <div className="fdr-card__why">
        <Icon name="check" size={14} />
        <span>{fdReason(p, answers)}</span>
      </div>
    </article>);

}

// ---------- 페이지 ----------
function FinderPage() {
  const [step, setStep] = useStateF(0); // 0~4: 질문, 5: 결과
  const [answers, setAnswers] = useStateF({});
  const anchorRef = useRefF(null);

  const done = step >= FD_QUESTIONS.length;
  const top3 = useMemoF(() => (done ? fdTop3(answers) : []), [done, answers]);

  // 질문 전환 시 카드 상단이 보이도록 살짝 스크롤 (첫 진입 제외)
  useEffectF(() => {
    if (step === 0 || !anchorRef.current) return;
    const y = anchorRef.current.getBoundingClientRect().top + window.scrollY - 96;
    if (window.scrollY > y) window.scrollTo({ top: y, behavior: "smooth" });
  }, [step]);

  const pick = (qKey, optKey) => {
    setAnswers((prev) => ({ ...prev, [qKey]: optKey }));
    setStep((s) => s + 1);
  };
  const back = () => setStep((s) => Math.max(0, s - 1));
  const restart = () => {
    setAnswers({});
    setStep(0);
  };

  const q = done ? null : FD_QUESTIONS[step];

  return (
    <>
      <style>{`
        .fdr-hero { padding: calc(var(--header-h) + 72px) 0 0; }
        .fdr-hero .section-title { margin-bottom: 12px; }
        .fdr-hero .section-sub { margin-bottom: 0; }

        .fdr-sample {
          display: inline-flex; align-items: center; gap: 8px;
          margin: 0 0 28px; padding: 10px 16px;
          background: var(--blue-soft); color: var(--blue-deep);
          border: 1px solid rgba(0, 108, 255, 0.16);
          border-radius: var(--radius-sm);
          font-size: 13.5px; font-weight: 500; letter-spacing: -0.01em;
        }
        .fdr-sample svg { flex: none; }

        .section.fdr-body { padding-block: 44px 120px; }

        .fdr-quiz {
          max-width: 720px; margin: 0 auto;
          background: #fff; border: 1px solid var(--line); border-radius: var(--radius-lg);
          padding: 28px; box-shadow: var(--shadow-sm);
        }
        .fdr-progress { display: flex; align-items: center; gap: 14px; margin-bottom: 22px; }
        .fdr-progress__num {
          font-family: var(--font-en); font-size: 13px; font-weight: 600;
          color: var(--blue); white-space: nowrap;
        }
        .fdr-progress__tag { font-size: 12.5px; font-weight: 600; color: var(--ink-500); white-space: nowrap; }
        .fdr-progress__bar { display: flex; gap: 6px; flex: 1; }
        .fdr-progress__seg { height: 6px; flex: 1; border-radius: 999px; background: var(--blue-soft); transition: background .3s ease; }
        .fdr-progress__seg.on { background: var(--blue); }

        .fdr-step { animation: fdrIn .35s ease both; }
        @keyframes fdrIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }

        .fdr-quiz h2 { margin: 0 0 20px; font-size: clamp(20px, 3vw, 24px); font-weight: 700; letter-spacing: -0.02em; color: var(--ink-900); }

        .fdr-opts { display: grid; gap: 12px; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); }
        .fdr-opt {
          display: flex; align-items: center; gap: 14px; text-align: left;
          padding: 16px 18px; background: #fff;
          border: 1px solid var(--line); border-radius: var(--radius-md);
          font: inherit; cursor: pointer;
          transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease;
        }
        .fdr-opt:hover { border-color: var(--blue); transform: translateY(-2px); box-shadow: var(--shadow-sm); }
        .fdr-opt__ico {
          width: 44px; height: 44px; flex-shrink: 0;
          border-radius: 12px; background: var(--blue-soft); color: var(--blue);
          display: grid; place-items: center;
        }
        .fdr-opt__tx { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
        .fdr-opt__tx b { font-size: 15.5px; font-weight: 700; color: var(--ink-900); letter-spacing: -0.01em; }
        .fdr-opt__tx span { font-size: 13px; line-height: 1.5; color: var(--ink-600); }
        .fdr-opt__arrow { margin-left: auto; flex-shrink: 0; color: var(--ink-400); }

        .fdr-quiz__foot { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 22px; }
        .fdr-back { display: inline-flex; align-items: center; gap: 6px; }
        .fdr-back .flip { display: inline-flex; transform: rotate(180deg); }
        .fdr-hint { font-size: 12.5px; color: var(--ink-400); }

        .fdr-results { max-width: 980px; margin: 0 auto; }
        .fdr-results__head h2 { margin: 0 0 8px; font-size: clamp(22px, 3.4vw, 28px); font-weight: 700; letter-spacing: -0.02em; color: var(--ink-900); }
        .fdr-results__head p { margin: 0; font-size: 14.5px; line-height: 1.65; color: var(--ink-600); }
        .fdr-answers { display: flex; flex-wrap: wrap; gap: 8px; margin: 18px 0 26px; }
        .fdr-answer {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 12px; border-radius: 999px;
          background: var(--blue-soft); color: var(--blue-deep);
          font-size: 12.5px; font-weight: 600;
        }
        .fdr-answer i { font-style: normal; font-weight: 500; opacity: .65; }

        .fdr-grid { display: grid; gap: 18px; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
        .fdr-card {
          display: flex; flex-direction: column;
          background: #fff; border: 1px solid var(--line); border-radius: var(--radius-lg);
          padding: 22px;
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .fdr-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); border-color: rgba(0,108,255,0.25); }
        .fdr-card__top { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
        .fdr-card__rank {
          padding: 4px 10px; border-radius: 999px;
          background: var(--blue); color: #fff;
          font-size: 12px; font-weight: 700; letter-spacing: -0.01em;
        }
        .fdr-card__op {
          display: inline-flex; align-items: center;
          padding: 4px 10px; border-radius: 999px; border: 1px solid;
          font-size: 12.5px; font-weight: 700; letter-spacing: -0.01em;
        }
        .fdr-card__net {
          margin-left: auto; padding: 3px 9px;
          border: 1px solid var(--line); border-radius: 999px;
          font-family: var(--font-en); font-size: 11.5px; font-weight: 600; color: var(--ink-500);
        }
        .fdr-card__name { margin: 0 0 12px; font-size: 17px; font-weight: 700; color: var(--ink-900); letter-spacing: -0.02em; }
        .fdr-card__data { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }
        .fdr-card__data b { font-size: 24px; font-weight: 700; color: var(--ink-900); letter-spacing: -0.02em; }
        .fdr-card__data span { font-size: 13px; color: var(--ink-500); }
        .fdr-card__voice { margin-top: 6px; display: flex; align-items: center; gap: 6px; font-size: 13.5px; color: var(--ink-600); }
        .fdr-card__price {
          margin: 16px 0; padding-top: 14px;
          border-top: 1px dashed var(--line-strong);
          display: flex; flex-direction: column; gap: 2px;
        }
        .fdr-card__price .l { font-size: 12px; font-weight: 500; color: var(--ink-500); }
        .fdr-card__price b { font-size: 16.5px; font-weight: 700; color: var(--ink-900); letter-spacing: -0.01em; }
        .fdr-card__why {
          margin-top: auto; display: flex; gap: 8px; align-items: flex-start;
          padding: 10px 12px; border-radius: 12px;
          background: var(--blue-mist); color: var(--ink-700);
          font-size: 13px; line-height: 1.55;
        }
        .fdr-card__why svg { flex-shrink: 0; margin-top: 2px; color: var(--blue); }

        .fdr-note {
          margin-top: 24px; display: flex; gap: 10px; align-items: flex-start;
          padding: 16px 18px; border-radius: 14px;
          background: var(--bg-soft); border: 1px solid var(--line);
          color: var(--ink-600); font-size: 13.5px; line-height: 1.65;
        }
        .fdr-note svg { flex-shrink: 0; margin-top: 2px; color: var(--ink-500); }

        .fdr-ai {
          margin-top: 14px; display: flex; gap: 12px; align-items: center; flex-wrap: wrap;
          padding: 16px 18px; border-radius: 14px;
          background: var(--blue-mist); border: 1px solid var(--line);
          color: var(--ink-700); font-size: 13.5px; line-height: 1.6;
        }
        .fdr-ai__ico {
          width: 36px; height: 36px; flex-shrink: 0;
          border-radius: 10px; background: #fff; border: 1px solid var(--line);
          color: var(--blue); display: grid; place-items: center;
        }
        .fdr-ai__tx { flex: 1; min-width: 220px; }
        .fdr-ai__tx b { color: var(--ink-900); }
        .fdr-ai__go {
          display: inline-flex; align-items: center; gap: 5px; white-space: nowrap;
          color: var(--blue); font-size: 13.5px; font-weight: 600;
        }

        .fdr-actions { display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; margin-top: 32px; }
        .fdr-actions .fdr-replans { font-size: 13.5px; color: var(--ink-500); }
        .fdr-actions .fdr-replans:hover { color: var(--blue); }

        @media (max-width: 640px) {
          .fdr-hero { padding-top: calc(var(--header-h) + 48px); }
          .fdr-quiz { padding: 22px 18px; }
          .fdr-opts { grid-template-columns: 1fr; }
          .fdr-progress__tag { display: none; }
        }
      `}</style>

      <Header base="./" />

      <main>
        <section className="fdr-hero">
          <div className="container">
            {CATALOG_STATUS === "SAMPLE" && SAMPLE_NOTE &&
            <div className="fdr-sample" role="note">
                <Icon name="clock" size={15} />
                <span>{SAMPLE_NOTE}</span>
              </div>}

            <Reveal>
              <span className="eyebrow"><span className="dot" />FINDER</span>
              <h1 className="section-title"><span className="h-bold">1분 요금제 찾기</span></h1>
              <p className="section-sub">
                다섯 가지 질문에 답하시면, 지금 상황에 맞는 요금제 후보를 추려드립니다.
                후보는 상담의 출발점이에요 — 최종 조건은 매장 상담에서 투명하게 안내드립니다.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section fdr-body">
          <div className="container" ref={anchorRef}>
            {!done ?
            <Reveal>
                <div className="fdr-quiz">
                  <div className="fdr-progress">
                    <span className="fdr-progress__num">질문 {step + 1} / {FD_QUESTIONS.length}</span>
                    <div className="fdr-progress__bar" aria-hidden="true">
                      {FD_QUESTIONS.map((qq, i) =>
                    <span key={qq.key} className={"fdr-progress__seg" + (i <= step ? " on" : "")} />
                    )}
                    </div>
                    <span className="fdr-progress__tag">{q.tag}</span>
                  </div>

                  <div className="fdr-step" key={q.key}>
                    <h2>{q.title}</h2>
                    <div className="fdr-opts" role="group" aria-label={q.title}>
                      {q.options.map((o) =>
                    <button
                      key={o.key}
                      type="button"
                      className="fdr-opt"
                      onClick={() => pick(q.key, o.key)}>
                          <span className="fdr-opt__ico"><Icon name={o.ic} size={20} /></span>
                          <span className="fdr-opt__tx">
                            <b>{o.label}</b>
                            <span>{o.desc}</span>
                          </span>
                          <span className="fdr-opt__arrow"><Icon name="arrow" size={16} /></span>
                        </button>
                    )}
                    </div>
                  </div>

                  <div className="fdr-quiz__foot">
                    {step > 0 ?
                  <button type="button" className="btn btn-ghost btn-sm fdr-back" onClick={back}>
                        <span className="flip"><Icon name="arrow" size={14} /></span> 이전
                      </button> :
                  <span />}
                    <span className="fdr-hint">선택하시면 바로 다음 질문으로 넘어가요</span>
                  </div>
                </div>
              </Reveal> :

            <div className="fdr-results fdr-step" key="result">
                <div className="fdr-results__head">
                  <h2>답변 기준으로 후보 3가지를 추려봤어요</h2>
                  <p>
                    확정 추천이 아닌 <b style={{ color: "var(--ink-900)", fontWeight: 600 }}>후보</b>입니다.
                    지원금·할인 조건은 가입 유형{answers.join && answers.join !== "unknown" ?
                  "(" + FD_JOIN_LABELS[answers.join] + ")" : ""}·결합 여부에 따라 달라질 수 있어,
                    매장 상담에서 함께 점검해 드려요.
                  </p>
                </div>

                <div className="fdr-answers">
                  {fdAnswerLabels(answers).map((a) =>
                <span className="fdr-answer" key={a.tag}><i>{a.tag}</i> {a.label}</span>
                )}
                </div>

                <div className="fdr-grid">
                  {top3.map((r, i) =>
                <FdResultCard key={r.p.id} p={r.p} rank={i + 1} answers={answers} />
                )}
                </div>

                <div className="fdr-note">
                  <Icon name="shield" size={16} />
                  <span>{PRICE_NOTE}</span>
                </div>

                <div className="fdr-ai">
                  <span className="fdr-ai__ico"><Icon name="spark" size={18} /></span>
                  <span className="fdr-ai__tx">
                    여기까지는 간단 문답 결과예요. 매장에서는 <b>AI 요금 분석</b>으로
                    통신사·결합·약정 조건까지 수백 가지 조합을 정밀 비교해 드립니다.
                  </span>
                  <a href="./#plans" className="fdr-ai__go">AI 요금 분석 알아보기 <Icon name="arrow" size={14} /></a>
                </div>

                <div className="fdr-actions">
                  <a href="./#booking" className="btn btn-primary btn-lg">
                    이 결과로 상담 예약 <Icon name="arrow" size={16} />
                  </a>
                  <button type="button" className="btn btn-ghost" onClick={restart}>다시 하기</button>
                  <a href="plans.html" className="fdr-replans">요금제 전체보기 →</a>
                </div>
              </div>}
          </div>
        </section>
      </main>

      <CTASection />
      <Footer />
      <MobileActionBar />
    </>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<FinderPage />);
