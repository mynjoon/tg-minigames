/* global React, ReactDOM, Icon, Reveal, Header, CTASection, Footer, MobileActionBar */
/* global DEVICES, USED_GRADES, USED_BUYBACK, USED_PRICE_DATE, USED_NOTE, wonRange, PRICE_NOTE */
// ==========================================================
// USED — 중고폰 판매·매입 (used.html)
// 매입 예상가 계산기 + 등급 기준 + 모델별 범위표 + 중고 구매 안내.
// 가격은 catalog-data.js의 예상 범위(wonRange)만 노출한다.
// 매입가·판매가 단정 금지 — 항상 "범위 + 매장에서 확정" 구조.
// ==========================================================

const { useState: useStateU, useMemo: useMemoU, useEffect: useEffectU } = React;

// 가격 고지 — 가격이 노출되는 섹션마다 배치 (중고 시세 보강 문구 포함)
function UsPriceNote() {
  return (
    <div className="us-note">
      <Icon name="shield" size={18} />
      <span>{PRICE_NOTE} 중고 시세는 매일 달라질 수 있습니다.</span>
    </div>
  );
}

// ---------- 섹션 1 · 매입 예상가 계산기 ----------
function BuybackCalc() {
  const [modelIdx, setModelIdx] = useStateU(0);
  const [grade, setGrade] = useStateU("A");

  const entry = USED_BUYBACK[modelIdx];
  const gradeInfo = useMemoU(
    () => USED_GRADES.find((g) => g.key === grade) || USED_GRADES[0],
    [grade]
  );
  const range = entry.range[grade];

  return (
    <div className="us-calc-card">
      <div className="us-calc-controls">
        <div className="us-field">
          <label className="us-field__label" htmlFor="us-model">1. 모델 선택</label>
          <select
            id="us-model"
            className="select"
            value={modelIdx}
            onChange={(e) => setModelIdx(Number(e.target.value))}
          >
            {USED_BUYBACK.map((row, i) =>
              <option key={row.model} value={i}>{row.model}</option>
            )}
          </select>
        </div>

        <div className="us-field">
          <span className="us-field__label" id="us-grade-label">2. 상태 등급 선택</span>
          <div className="us-grade-btns" role="group" aria-labelledby="us-grade-label">
            {USED_GRADES.map((g) =>
              <button
                key={g.key}
                type="button"
                className={"us-grade-btn" + (grade === g.key ? " on" : "")}
                aria-pressed={grade === g.key}
                onClick={() => setGrade(g.key)}
              >
                <span className="us-grade-btn__key">{g.key}</span>
                <span className="us-grade-btn__tx">
                  <b>{g.label}</b>
                  <span>{g.desc}</span>
                </span>
                {grade === g.key && <span className="us-grade-btn__check"><Icon name="check" size={15} /></span>}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="us-calc-result">
        <div className="us-result__label">예상 매입 범위</div>
        <div className="us-result__pick">{entry.model} · {gradeInfo.label}</div>
        <div className="us-result__val" aria-live="polite">{wonRange(range)}</div>

        <div className="us-result__fixed" role="note">
          <Icon name="check" size={14} />
          <span>실제 매입가는 매장에서 기기 상태 확인 후 확정됩니다.</span>
        </div>

        <div className="us-result__actions">
          <button type="button" className="btn btn-primary btn-lg"
            onClick={() => goConsult("sell", entry.model + " · " + gradeInfo.label + " · 예상 " + wonRange(range))}>
            <Icon name="calendar" size={17} /> 매입 상담 신청하기
          </button>
          <a href="#grades" className="us-result__sub">등급 기준 먼저 보기 <Icon name="arrow" size={14} /></a>
        </div>
      </div>
    </div>
  );
}



// ---------- FAQ — used.html 헤드의 FAQPage JSON-LD와 문안을 동일하게 유지할 것 ----------
const USED_FAQ = [
  ["중고폰 매입가는 어떻게 정해지나요?",
   "모델·등급(A/B/C) 기준 예상 범위를 사이트에 공개하고, 최종 매입가는 매장에서 기기 상태(배터리 성능·기스·파손 여부)를 확인한 뒤 확정합니다. 시세는 매일 달라질 수 있습니다."],
  ["등급은 어떻게 나뉘나요?",
   "A급은 기스가 거의 없고 배터리 성능 기준을 충족한 기기, B급은 생활기스가 있고 배터리 86~90%인 기기, C급은 기스가 많거나 사용감이 큰 기기입니다. 파손·잔상은 별도 감가됩니다."],
  ["팔러 갈 때 뭘 준비하면 되나요?",
   "본인 확인을 위한 신분증을 지참해 주세요(온라인으로는 받지 않습니다). 기기 초기화·계정 해제는 매장에서 함께 진행할 수 있습니다."],
  ["중고폰 구매도 가능한가요?",
   "재고는 입고 상황에 따라 달라집니다. 페이지의 상담 폼에 원하는 모델·용량·색상을 남겨 주시면 재고와 상태를 확인해 연락드립니다."],
];

function UsedFaqSection() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <Reveal>
          <span className="eyebrow"><span className="dot" />FAQ</span>
          <h2 className="section-title"><span className="h-thin">자주 묻는</span> <span className="h-bold">질문</span></h2>
        </Reveal>
        <Reveal delay={60}>
          <div className="us-faq">
            {USED_FAQ.map(([q, a]) =>
              <details className="us-faq__item" key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- 중고 상담 신청 — 페이지 안에서 바로 접수 (홈 이동 없음) ----------
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
      if (d.model) setForm((f) => ({ ...f, model: d.model }));
    };
    window.addEventListener("used-consult-prefill", onPrefill);
    return () => window.removeEventListener("used-consult-prefill", onPrefill);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (sending || submitted) return; // 연타 중복 제출 방지
    if (!form.name.trim() || !form.phone.trim()) { setError("이름과 연락처를 입력해주세요."); return; }
    if (!form.consent) { setError("개인정보 수집·이용에 동의해주세요."); return; }
    setError("");

    // 초대링크 추천코드 (홈 예약 폼과 동일 규칙 — 30일 만료)
    let refCode = "";
    try {
      refCode = localStorage.getItem("referralCode") || "";
      const refAt = localStorage.getItem("referralAt") || "";
      if (refCode && refAt && Date.now() - new Date(refAt).getTime() > 30 * 24 * 60 * 60 * 1000) refCode = "";
    } catch (e2) {}

    const label = type === "sell" ? "중고폰 판매(매입)" : "중고폰 구매";
    const payload = {
      name: form.name, phone: form.phone, birth: "", carrier: "",
      topics: [label], model: form.model, capacity: "", color: "",
      date: "", time: "", note: form.note, consent: true,
      referralCode: refCode, source: "used-page", submittedAt: new Date().toISOString()
    };
    const url = (typeof window !== "undefined" && window.BOOKING_WEBHOOK_URL) || "";
    setSending(true);
    if (url && url.indexOf("YOUR-") === -1) {
      try {
        // Apps Script CORS 규칙: Content-Type 헤더 없는 단순 POST (홈 예약 폼과 동일)
        const res = await fetch(url, { method: "POST", mode: "cors", body: JSON.stringify(payload) });
        if (!res.ok) throw new Error("HTTP " + res.status);
      } catch (err) {
        setSending(false);
        setError("일시적인 오류로 접수하지 못했어요. 잠시 후 다시 시도하시거나 010-7932-9779로 전화 주세요.");
        return;
      }
    }
    if (window.gmTrack) window.gmTrack("used_consult_submit", { kind: type, model: form.model || "" });
    setSubmitted(true);
  };

  const f = (k) => (e) => setForm((prev) => ({ ...prev, [k]: e.target.value }));

  return (
    <section className="section" id="consult">
      <div className="container">
        <Reveal>
          <span className="eyebrow"><span className="dot" />CONSULT</span>
          <h2 className="section-title">
            <span className="h-thin">중고폰 상담,</span> <span className="h-bold">여기서 바로 접수하세요</span>
          </h2>
          <p className="section-sub">남겨주시면 확인 후 바로 연락드립니다. 방문 전에 예상가·재고를 미리 확인해 드려요.</p>
        </Reveal>
        <Reveal delay={80}>
          <form className="us-consult" onSubmit={onSubmit} noValidate>
            <div className="us-consult__type">
              <button type="button" className={"chip" + (type === "sell" ? " on" : "")} onClick={() => setType("sell")}>내 폰 팔기 (매입)</button>
              <button type="button" className={"chip" + (type === "buy" ? " on" : "")} onClick={() => setType("buy")}>중고폰 구매</button>
            </div>
            <div className="us-consult__row">
              <input className="input" placeholder="이름 *" value={form.name} onChange={f("name")} autoComplete="name" />
              <input className="input" type="tel" placeholder="연락처 *" value={form.phone} onChange={f("phone")} autoComplete="tel" />
            </div>
            <input className="input" placeholder={type === "sell" ? "모델 · 상태 (위 계산기에서 자동 입력돼요)" : "찾는 모델 · 용량 · 색상"}
              value={form.model} onChange={f("model")} />
            <textarea className="textarea" rows={3} placeholder="남기실 말씀 (선택)" value={form.note} onChange={f("note")} />
            <label className="us-consult__consent">
              <input type="checkbox" checked={form.consent}
                onChange={(e) => setForm((prev) => ({ ...prev, consent: e.target.checked }))} />
              <span>개인정보 수집·이용에 동의합니다. 자세한 내용은 <a href="privacy.html" target="_blank" rel="noopener noreferrer">개인정보처리방침</a>을 확인해 주세요.</span>
            </label>
            {error && <div className="us-consult__err" role="alert">{error}</div>}
            {submitted ?
              <div className="us-consult__ok" role="status">
                <Icon name="check" size={16} /> 접수됐어요! 확인 후 바로 연락드릴게요.
              </div> :
              <button type="submit" className="btn btn-primary btn-lg" disabled={sending} style={{ width: "100%" }}>
                {sending ? "접수 중…" : "상담 신청하기"}
              </button>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- 페이지 ----------
function UsedPage() {
  const usedDevices = useMemoU(
    () => DEVICES.filter((d) => d.channels.includes("used")),
    []
  );

  return (
    <>
      <Header base="./" />

      <main id="top">
        {/* ── 히어로 미니 헤드 ── */}
        <section className="us-hero">
          <div className="container">
            <Reveal>
              <span className="eyebrow"><span className="dot" />USED</span>
              <h1 className="section-title">
                <span className="h-thin">중고폰,</span>
                <span className="h-bold">팔 때도 살 때도 투명하게</span>
              </h1>
              <p className="section-sub">
                쓰던 폰은 공개된 등급 기준대로 매입하고, 중고폰은 매장에서 상태를 함께 확인하고 판매합니다.
                예상 범위를 먼저 보여드리고, 최종 조건은 상담에서 투명하게 안내드립니다.
              </p>
            </Reveal>

            <div className="us-sample" role="note">
              <Icon name="clock" size={15} />
              <span>매입 예상가 기준일 {USED_PRICE_DATE} · 시세에 따라 매일 변동될 수 있습니다. {USED_NOTE}</span>
            </div>
          </div>
        </section>

        {/* ── 섹션 1 · 매입 예상가 계산기 ── */}
        <section className="us-calc" id="buyback">
          <div className="container">
            <Reveal>
              <span className="eyebrow"><span className="dot" />BUYBACK</span>
              <h2 className="section-title">
                <span className="h-thin">모델과 상태만 고르면,</span>
                <span className="h-bold">예상 매입 범위가 바로 보입니다.</span>
              </h2>
              <p className="section-sub">
                정확한 금액은 기기 상태에 따라 달라지기 때문에, 부풀리지 않고 범위로 먼저 안내드립니다.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <BuybackCalc />
            </Reveal>

            <UsPriceNote />
          </div>
        </section>

        {/* ── 섹션 2 · 등급 기준 ── */}
        <section className="section" id="grades">
          <div className="container">
            <Reveal>
              <span className="eyebrow"><span className="dot" />GRADE</span>
              <h2 className="section-title">
                <span className="h-thin">감으로 매기지 않습니다.</span>
                <span className="h-bold">네 가지 등급, 같은 기준.</span>
              </h2>
              <p className="section-sub">
                누가 오셔도 같은 기준으로 확인합니다. 등급은 매장에서 기기 상태를 함께 보며 정합니다.
              </p>
            </Reveal>

            <div className="us-grade-grid">
              {USED_GRADES.map((g, i) =>
                <Reveal key={g.key} delay={i * 70}>
                  <article className="us-grade-card">
                    <div className="us-grade-card__key">{g.key}</div>
                    <h3>{g.label}</h3>
                    <p>{g.desc}</p>
                  </article>
                </Reveal>
              )}
            </div>
          </div>
        </section>

        {/* ── 섹션 3 · 모델별 매입 예상 범위표 ── */}
        <section className="section" id="price-table">
          <div className="container">
            <Reveal>
              <span className="eyebrow"><span className="dot" />PRICE RANGE</span>
              <h2 className="section-title">
                <span className="h-thin">모델별 매입 예상 범위,</span>
                <span className="h-bold">표로 한눈에.</span>
              </h2>
              <p className="section-sub">
                모든 금액은 예상 범위입니다. 표에 없는 모델도 매장에서 확인해 드립니다.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="us-table-hint" aria-hidden="true">
                <Icon name="arrow" size={13} /> 옆으로 밀면 전체 등급이 보입니다
              </div>
              <div className="us-table-wrap" role="region" aria-label="모델별 등급 매입 예상 범위표" tabIndex={0}>
                <table className="us-table">
                  <thead>
                    <tr>
                      <th scope="col">모델</th>
                      {USED_GRADES.map((g) =>
                        <th scope="col" key={g.key}>{g.key}급</th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {USED_BUYBACK.map((row) =>
                      <tr key={row.model}>
                        <th scope="row">{row.model}</th>
                        {USED_GRADES.map((g) =>
                          <td key={g.key}>{wonRange(row.range[g.key])}</td>
                        )}
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <UsPriceNote />
          </div>
        </section>

        {/* ── 섹션 4 · 중고폰 구매 안내 ── */}
        <section className="section" id="buy-used">
          <div className="container">
            <Reveal>
              <span className="eyebrow"><span className="dot" />BUY USED</span>
              <h2 className="section-title">
                <span className="h-thin">중고폰 구매도,</span>
                <span className="h-bold">상태를 보고 결정하세요.</span>
              </h2>
              <p className="section-sub">
                아래 모델의 중고 재고를 취급합니다. 중고 재고는 입고 상황에 따라 달라질 수 있습니다.
                방문 전에 예약해 주시면 재고 여부를 미리 확인해 드립니다.
              </p>
            </Reveal>

            <div className="us-buy-grid">
              {usedDevices.map((d, i) =>
                <Reveal key={d.id} delay={Math.min(i, 5) * 60}>
                  <article className="us-buy-card">
                    <div className="us-buy-card__imgwrap">
                      <img src={d.img} alt={d.name} loading="lazy" decoding="async" />
                    </div>
                    <h3 className="us-buy-card__name">{d.name}</h3>
                    <div className="us-buy-card__meta">{d.network} · {d.storages.join(" / ")}</div>
                    <div className="us-buy-card__ask">
                      <Icon name="tag" size={13} /> 재고·가격 매장 문의
                    </div>
                  </article>
                </Reveal>
              )}
            </div>

            <Reveal delay={100}>
              <div className="us-buy-cta">
                <div className="us-buy-cta__tx">
                  <h3>찾는 중고폰이 있으신가요?</h3>
                  <p>모델·용량·색상을 남겨 주시면 재고와 상태를 확인해 안내드립니다.</p>
                </div>
                <button type="button" className="btn btn-primary btn-lg" onClick={() => goConsult("buy", "")}>
                  중고 구매 상담 신청 <Icon name="arrow" size={16} />
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        <UsedFaqSection />
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="us-note">
              <Icon name="doc" size={18} />
              <span>
                팔기 전에 준비할 것이 궁금하다면{" "}
                <a href="/guides/used-phone-trade-in" style={{ textDecoration: "underline" }}>중고폰 매입 등급·시세 가이드</a>
                를, 기기 교체를 고민 중이라면{" "}
                <a href="/guides/number-transfer-vs-upgrade" style={{ textDecoration: "underline" }}>번호이동 vs 기기변경 비교</a>
                를 참고하세요.
              </span>
            </div>
          </div>
        </section>
        <UsedConsultSection />
      </main>

      <CTASection />
      <Footer />
      <MobileActionBar />

      {/* ── 페이지 전용 스타일 (styles.css 수정 금지 — 기존 토큰만 사용) ── */}
      <style>{`
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

        /* ── 계산기 ── */
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

        /* ── 등급 카드 ── */
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

        /* ── 범위표 ── */
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

        /* ── 중고 구매 ── */
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

        /* ── 반응형 ── */
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
      `}</style>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<UsedPage />);
