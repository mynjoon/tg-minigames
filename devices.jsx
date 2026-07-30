/* global React, ReactDOM, Icon, Reveal, Header, CTASection, Footer, MobileActionBar */
/* global CATALOG_STATUS, DEVICES, wonRange, deviceById, PRICE_NOTE, SAMPLE_NOTE, smartMatch */
// ==========================================================
// DEVICES — 기기 전체보기 (devices.html)
// 브랜드·용도 필터 + 검색(smartMatch, ?q= 딥링크) + #기기id 딥링크.
// 가격은 catalog-data.js의 예상 범위(wonRange)만 노출한다.
// ==========================================================

const { useState: useStateD, useEffect: useEffectD, useMemo: useMemoD } = React;

// 태그 → 한글 배지 라벨
const DV_TAG_LABELS = {
  popular: "인기", flagship: "플래그십", folder: "폴더블", value: "실속",
  senior: "효도폰", camera: "카메라 특화", compact: "콤팩트", design: "디자인",
  slim: "슬림", battery: "배터리", "first-phone": "첫 스마트폰", "big-screen": "대화면"
};

const DV_BRANDS = [
  { key: "all", label: "전체" },
  { key: "samsung", label: "삼성" },
  { key: "apple", label: "애플" }
];

const DV_USES = [
  { key: "all", label: "전체" },
  { key: "flagship", label: "플래그십" },
  { key: "folder", label: "폴더블" },
  { key: "value", label: "실속·효도" }
];

const DV_BRAND_KO = { samsung: "삼성 samsung galaxy 갤럭시", apple: "애플 apple iphone 아이폰" };

function dvMatchesUse(d, use) {
  if (use === "all") return true;
  if (use === "value") return d.tags.includes("value") || d.tags.includes("senior");
  return d.tags.includes(use);
}

function dvHaystack(d) {
  return [
    d.name, DV_BRAND_KO[d.brand] || d.brand, d.series, d.network,
    d.storages.join(" "), d.tags.join(" "),
    d.tags.map((t) => DV_TAG_LABELS[t] || "").join(" ")
  ].join(" ");
}

// ---------- 기기 카드 ----------
function DeviceCard({ d, hi }) {
  return (
    <article className={"dv-card" + (hi ? " is-hi" : "")} id={d.id}>
      <div className="dv-card__imgwrap">
        <img src={d.img} alt={d.name} loading="lazy" decoding="async" />
      </div>

      <div className="dv-tags">
        {d.tags.slice(0, 3).map((t) =>
          DV_TAG_LABELS[t] ?
            <span key={t} className={"dv-tag" + (t === "popular" ? " dv-tag--hot" : "")}>{DV_TAG_LABELS[t]}</span>
            : null
        )}
      </div>

      <h3 className="dv-card__name">{d.name}</h3>
      <div className="dv-card__meta">{d.network} · {d.storages.join(" / ")}</div>

      <div className="dv-price">
        <div className="dv-price__row">
          <span className="dv-price__label">통신사 개통 시 예상 월 납부액</span>
          <b className="dv-price__val">{wonRange(d.monthly)}</b>
        </div>
        {d.unlocked &&
          <div className="dv-price__row">
            <span className="dv-price__label">자급제 예상가</span>
            <b className="dv-price__val">{wonRange(d.unlocked)}</b>
          </div>
        }
        {d.channels.includes("used") &&
          <div className="dv-used">
            <Icon name="tag" size={13} /> 중고 재고 문의 가능
          </div>
        }
      </div>

      <a href="./#booking" className="btn btn-ghost btn-sm dv-card__cta">
        이 기기로 상담 예약 <Icon name="arrow" size={14} />
      </a>
    </article>
  );
}

// ---------- 페이지 ----------
function DevicesPage() {
  const [brand, setBrand] = useStateD("all");
  const [use, setUse] = useStateD("all");
  const [q, setQ] = useStateD(() => {
    try { return new URLSearchParams(window.location.search).get("q") || ""; }
    catch (e) { return ""; }
  });
  const [hiId, setHiId] = useStateD(null);

  // #기기id 딥링크 — 해당 카드로 스크롤 + 잠시 하이라이트
  useEffectD(() => {
    let raw = "";
    try { raw = decodeURIComponent((window.location.hash || "").slice(1)); } catch (e) { raw = ""; }
    if (!raw || !deviceById(raw)) return;
    const t1 = setTimeout(() => {
      const el = document.getElementById(raw);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setHiId(raw);
    }, 350);
    const t2 = setTimeout(() => setHiId(null), 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const filtered = useMemoD(() => DEVICES.filter((d) => {
    if (brand !== "all" && d.brand !== brand) return false;
    if (!dvMatchesUse(d, use)) return false;
    if (q.trim() && !smartMatch(q, dvHaystack(d))) return false;
    return true;
  }), [brand, use, q]);

  const resetFilters = () => { setBrand("all"); setUse("all"); setQ(""); };

  return (
    <>
      <Header base="./" />

      <main id="top">
        {/* ── 히어로 미니 헤드 ── */}
        <section className="dv-hero">
          <div className="container">
            <Reveal>
              <span className="eyebrow"><span className="dot" />DEVICES</span>
              <h1 className="section-title"><span className="h-bold">기기 전체보기</span></h1>
              <p className="section-sub">
                아이폰·갤럭시 플래그십부터 폴더블, 실속·효도폰까지.
                매장에서 취급하는 기기를 한 번에 살펴보세요. 조건은 상담에서 투명하게 안내드립니다.
              </p>
            </Reveal>

            {CATALOG_STATUS === "SAMPLE" && SAMPLE_NOTE &&
              <div className="dv-sample" role="note">
                <Icon name="clock" size={15} />
                <span>{SAMPLE_NOTE}</span>
              </div>
            }

            {/* ── 필터 ── */}
            <Reveal delay={80}>
              <div className="dv-filters">
                <div className="dv-chiprow" role="group" aria-label="브랜드 필터">
                  <span className="dv-chiprow__label">브랜드</span>
                  {DV_BRANDS.map((b) =>
                    <button key={b.key} type="button"
                      className={"chip" + (brand === b.key ? " on" : "")}
                      aria-pressed={brand === b.key}
                      onClick={() => setBrand(b.key)}>
                      {b.label}
                    </button>
                  )}
                </div>
                <div className="dv-chiprow" role="group" aria-label="용도 필터">
                  <span className="dv-chiprow__label">용도</span>
                  {DV_USES.map((u) =>
                    <button key={u.key} type="button"
                      className={"chip" + (use === u.key ? " on" : "")}
                      aria-pressed={use === u.key}
                      onClick={() => setUse(u.key)}>
                      {u.label}
                    </button>
                  )}
                </div>
                <div className="dv-search">
                  <input type="search" className="input" value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="기기명 검색 — 예: 아이폰 프로, 플립, 효도폰"
                    aria-label="기기 검색" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 카탈로그 그리드 ── */}
        <section className="dv-catalog">
          <div className="container">
            <div className="dv-count" aria-live="polite">
              총 <b>{filtered.length}</b>개 기기
            </div>

            {filtered.length > 0 ?
              <div className="dv-grid">
                {filtered.map((d, i) =>
                  <Reveal key={d.id} delay={Math.min(i, 5) * 60}>
                    <DeviceCard d={d} hi={hiId === d.id} />
                  </Reveal>
                )}
              </div>
              :
              <div className="dv-empty">
                <div className="dv-empty__ico"><Icon name="compare" size={26} /></div>
                <b>조건에 맞는 기기가 없습니다</b>
                <p>검색어나 필터를 조정해 보세요. 목록에 없는 기기도 매장에서 상담으로 안내드릴 수 있습니다.</p>
                <button type="button" className="btn btn-ghost btn-sm" onClick={resetFilters}>
                  필터 초기화
                </button>
              </div>
            }

            {/* 가격 고지 */}
            <div className="dv-note">
              <Icon name="shield" size={18} />
              <span>{PRICE_NOTE}</span>
            </div>

            <Reveal>
              <p style={{ textAlign: "center", fontSize: 14.5, color: "var(--ink-600)", margin: "0 0 26px" }}>
                어떤 방식이 유리한지 고민되신다면{" "}
                <a href="/guides/number-transfer-vs-upgrade" style={{ textDecoration: "underline" }}>번호이동 vs 기기변경 비교</a>
                {" · "}
                <a href="/guides/unlocked-phone-plan" style={{ textDecoration: "underline" }}>자급제 + 요금제 조합</a>
                {" 가이드를 먼저 읽어보세요."}
              </p>
            </Reveal>

            {/* finder 유도 배너 */}
            <Reveal>
              <div className="dv-finder">
                <div className="dv-finder__tx">
                  <div className="dv-finder__tag">VISIT</div>
                  <h3>어떤 기기가 맞을지 고민된다면</h3>
                  <p>쓰시는 패턴에 맞춰 기기와 월 납부 구간을 매장에서 1:1로 맞춰드립니다.</p>
                </div>
                <a href="./#booking" className="btn btn-primary btn-lg">
                  방문 상담 예약 <Icon name="arrow" size={16} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <CTASection />
      <Footer />
      <MobileActionBar />

      {/* ── 페이지 전용 스타일 (styles.css 수정 금지 — 토큰만 사용) ── */}
      <style>{`
        .dv-hero {
          padding: calc(var(--header-h) + 64px) 0 28px;
          background: linear-gradient(180deg, var(--bg-soft), var(--bg));
        }
        .dv-hero .section-title { margin-bottom: 12px; }
        .dv-hero .section-sub { margin-bottom: 0; }

        .dv-sample {
          display: inline-flex; align-items: center; gap: 8px;
          margin-top: 20px; padding: 10px 16px;
          background: var(--blue-soft); color: var(--blue-deep);
          border: 1px solid rgba(0, 108, 255, 0.16);
          border-radius: var(--radius-sm);
          font-size: 13.5px; font-weight: 500; letter-spacing: -0.01em;
        }
        .dv-sample svg { flex: none; }

        .dv-filters {
          margin-top: 28px; display: flex; flex-direction: column; gap: 12px;
        }
        .dv-chiprow { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; }
        .dv-chiprow .chip { height: 40px; padding: 0 16px; background: #fff; cursor: pointer; }
        .dv-chiprow__label {
          font-size: 12.5px; font-weight: 600; color: var(--ink-500);
          min-width: 44px; letter-spacing: -0.01em;
        }
        .dv-search { max-width: 420px; }

        .dv-catalog { padding: 36px 0 104px; }
        .dv-count { font-size: 13.5px; color: var(--ink-500); margin-bottom: 14px; }
        .dv-count b { color: var(--ink-headline); font-weight: 700; }

        .dv-grid {
          display: grid; gap: 18px;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        }
        .dv-grid .reveal { height: 100%; }

        .dv-card {
          height: 100%;
          display: flex; flex-direction: column;
          background: #fff; border: 1px solid var(--line);
          border-radius: var(--radius-md); padding: 18px;
          box-shadow: var(--shadow-xs);
          transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
          scroll-margin-top: calc(var(--header-h) + 24px);
        }
        .dv-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
          border-color: var(--line-strong);
        }
        .dv-card.is-hi {
          border-color: var(--blue);
          box-shadow: 0 0 0 4px rgba(0, 108, 255, 0.18), var(--shadow-md);
        }

        .dv-card__imgwrap {
          height: 176px; display: flex; align-items: center; justify-content: center;
          background: var(--surface-mute, #F5F5F7); border-radius: var(--radius-sm);
          margin-bottom: 14px;
        }
        .dv-card__imgwrap img { max-height: 148px; max-width: 78%; object-fit: contain; }

        .dv-tags { display: flex; flex-wrap: wrap; gap: 6px; min-height: 22px; }
        .dv-tag {
          font-size: 11.5px; font-weight: 600; padding: 3px 9px; border-radius: 999px;
          background: var(--surface-mute, #F5F5F7); color: var(--ink-600);
          letter-spacing: -0.01em;
        }
        .dv-tag--hot { background: var(--blue-soft); color: var(--blue-deep); }

        .dv-card__name {
          margin: 10px 0 2px; font-size: 17px; font-weight: 700;
          color: var(--ink-headline); letter-spacing: -0.02em;
        }
        .dv-card__meta { font-size: 13px; color: var(--ink-500); margin-bottom: 14px; }

        .dv-price {
          margin-top: auto; padding-top: 14px;
          border-top: 1px dashed var(--line);
          display: flex; flex-direction: column; gap: 8px;
        }
        .dv-price__row { display: flex; flex-direction: column; gap: 1px; }
        .dv-price__label { font-size: 12px; color: var(--ink-500); letter-spacing: -0.01em; }
        .dv-price__val {
          font-size: 14.5px; font-weight: 700; color: var(--ink-headline);
          font-variant-numeric: tabular-nums; letter-spacing: -0.015em;
        }
        .dv-used {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 12.5px; font-weight: 500; color: var(--blue-deep);
        }
        .dv-used svg { flex: none; }

        .dv-card__cta { margin-top: 14px; width: 100%; }

        .dv-empty {
          text-align: center; padding: 72px 20px;
          border: 1.5px dashed var(--line); border-radius: var(--radius-md);
          background: var(--bg-soft);
        }
        .dv-empty__ico {
          width: 52px; height: 52px; margin: 0 auto 14px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%; background: var(--blue-soft); color: var(--blue);
        }
        .dv-empty b { display: block; font-size: 17px; color: var(--ink-headline); letter-spacing: -0.02em; }
        .dv-empty p {
          margin: 8px auto 18px; max-width: 380px;
          font-size: 14px; color: var(--ink-500); line-height: 1.6;
        }

        .dv-note {
          display: flex; align-items: flex-start; gap: 10px;
          margin-top: 32px; padding: 16px 18px;
          background: var(--bg-soft); border: 1px solid var(--line);
          border-radius: var(--radius-sm);
          font-size: 13.5px; color: var(--ink-600); line-height: 1.6;
        }
        .dv-note svg { flex: none; color: var(--blue); margin-top: 2px; }

        .dv-finder {
          margin-top: 20px; padding: 32px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; flex-wrap: wrap;
          background: var(--blue-soft); border: 1px solid rgba(0, 108, 255, 0.14);
          border-radius: var(--radius-lg);
        }
        .dv-finder__tag {
          font-family: var(--font-en); font-size: 12px; font-weight: 600;
          letter-spacing: 0.08em; color: var(--blue); margin-bottom: 6px;
        }
        .dv-finder__tx h3 {
          margin: 0; font-size: 22px; font-weight: 700;
          color: var(--ink-headline); letter-spacing: -0.02em;
        }
        .dv-finder__tx p { margin: 6px 0 0; font-size: 14.5px; color: var(--ink-600); }
        .dv-finder .btn { flex: none; }

        @media (max-width: 640px) {
          .dv-hero { padding-top: calc(var(--header-h) + 44px); }
          .dv-grid { grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 12px; }
          .dv-card { padding: 14px; }
          .dv-card__imgwrap { height: 140px; }
          .dv-card__imgwrap img { max-height: 116px; }
          .dv-finder { padding: 24px 20px; }
          .dv-finder .btn { width: 100%; }
          .dv-search { max-width: none; }
        }
      `}</style>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<DevicesPage />);
