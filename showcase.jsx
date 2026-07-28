/* global React */
// ==========================================================
// LINEUP SHOWCASE — Apple-style immersive product display
// Big stage, smooth crossfade, color swatches with tinted halo,
// auto-rotation, spec strip, "전체 스펙 보기" link to modal.
// ==========================================================

const { useState: useStateS, useEffect: useEffectS, useRef: useRefS, useMemo: useMemoS } = React;

// Hex map for color glow (decorative)
const COLOR_HEX = {
  "블랙": "#1c1c1f", "화이트": "#f4f4f2", "블루": "#4f7bb8", "그린": "#9bb89e",
  "라벤더": "#c8b8d4", "세이지": "#a8b59a", "미스트 블루": "#9fb6c8",
  "실버": "#d8d8da", "딥 블루": "#1f3358", "코스믹 오렌지": "#d4501f", "스페이스 블랙": "#1a1a1e",
  "스카이 블루": "#b9d4e6", "라이트 골드": "#e8d7b5", "클라우드 화이트": "#f0eee9",
  "차콜 블랙": "#2a2a2e", "핑크 골드": "#d8b4a8",
  "코발트 바이올렛": "#4a3a6e", "블랙": "#1a1a1e", "실버 쉐도우": "#b8b8be",
  "티타늄 실버": "#c0c0c2", "티타늄 블랙": "#2a2a2e", "티타늄 그레이": "#6d6e72", "티타늄 화이트": "#ebebe8", "제이드 그린": "#6d8472",
  "블루 섀도": "#5a6f88", "실버 섀도": "#a8aab0", "코랄 레드": "#c46862", "제트블랙": "#1a1a1e", "민트": "#aac9b6", "핑크": "#e2a8b2",
  "그라파이트": "#3a3a3e", "크림": "#f0e9da", "피스타치오": "#cbd5a8",
  "바이올렛 쉐도우": "#4a3b52", "그린 쉐도우": "#3f4a41"
};

const SHOWCASE = {
  iPhone: {
    label: "iPhone",
    eyebrow: "Apple iPhone 17 시리즈",
    models: [
      {
        id: "iphone-17", name: "iPhone 17", tagline: "기본기에 충실한 메인 모델.",
        img: "assets/iphone-17-lavender.png", priceFrom: "1,287,000",
        spec: [["디스플레이", "6.3″ Super Retina XDR"], ["프로세서", "A19"], ["카메라", "48MP 듀얼"], ["배터리", "영상 27시간"]],
        colors: ["라벤더", "세이지", "미스트 블루", "화이트", "블랙"],
        colorImages: { "라벤더": "assets/iphone-17-lavender.png" },
        productKey: "iPhone 시리즈"
      },
      {
        id: "iphone-17-pro", name: "iPhone 17 Pro", tagline: "프로 등급 카메라, 티타늄 프레임.",
        img: "assets/iphone-17-pro.png", priceFrom: "1,782,000",
        spec: [["디스플레이", "6.3″ ProMotion 120Hz"], ["프로세서", "A19 Pro"], ["카메라", "48MP 트리플 + 5× 망원"], ["배터리", "영상 33시간"]],
        colors: ["실버", "딥 블루", "코스믹 오렌지"],
        productKey: "iPhone 시리즈"
      },
      {
        id: "iphone-17-pro-max", name: "iPhone 17 Pro Max", tagline: "가장 큰 화면, 가장 긴 배터리.",
        img: "assets/iphone-17-pro-max.png", priceFrom: "1,980,000",
        spec: [["디스플레이", "6.9″ ProMotion 120Hz"], ["프로세서", "A19 Pro"], ["카메라", "48MP 트리플 + 5× 망원"], ["배터리", "영상 39시간"]],
        colors: ["실버", "딥 블루", "코스믹 오렌지"],
        productKey: "iPhone 시리즈"
      },
      {
        id: "iphone-air", name: "iPhone Air", tagline: "두께 5.6mm, 165g. 초경량.",
        img: "assets/iphone-air.png", priceFrom: "1,584,000",
        spec: [["디스플레이", "6.5″ Super Retina XDR"], ["프로세서", "A19 Pro"], ["카메라", "48MP 듀얼"], ["배터리", "영상 27시간"]],
        colors: ["스카이 블루", "라이트 골드", "클라우드 화이트", "스페이스 블랙"],
        productKey: "iPhone 시리즈"
      },
      {
        id: "iphone-17e", name: "iPhone 17e", tagline: "합리적 가격, 핵심만 담은 모델.",
        img: "assets/iphone-17e.png", priceFrom: "850,000",
        spec: [["디스플레이", "6.1″ Liquid Retina"], ["프로세서", "A19"], ["카메라", "48MP 싱글"], ["배터리", "영상 22시간"]],
        colors: ["화이트", "블랙", "핑크"],
        productKey: "iPhone 시리즈"
      }
    ]
  },
  Galaxy: {
    label: "Galaxy",
    eyebrow: "Samsung Galaxy 라인업",
    models: [
      {
        id: "galaxy-s26-ultra", name: "Galaxy S26 Ultra", tagline: "200MP 카메라, S펜 내장.",
        img: "assets/galaxy-s26-ultra.png", priceFrom: "1,797,400",
        spec: [["디스플레이", "6.9″ QHD+ 120Hz"], ["프로세서", "Snapdragon 8 Elite"], ["카메라", "200MP 쿼드"], ["배터리", "5,000mAh"]],
        colors: ["코발트 바이올렛", "스카이 블루", "블랙", "화이트"],
        productKey: "Galaxy S 시리즈"
      },
      {
        id: "galaxy-s26-plus", name: "Galaxy S26+", tagline: "한 손에 잡히는 프리미엄.",
        img: "assets/galaxy-s26-plus.png", priceFrom: "1,452,000",
        spec: [["디스플레이", "6.7″ QHD+ 120Hz"], ["프로세서", "Snapdragon 8 Elite"], ["카메라", "50MP 트리플"], ["배터리", "4,900mAh"]],
        colors: ["코발트 바이올렛", "스카이 블루", "블랙", "화이트"],
        productKey: "Galaxy S 시리즈"
      },
      {
        id: "galaxy-s26", name: "Galaxy S26", tagline: "콤팩트 플래그십.",
        img: "assets/galaxy-s26.png", priceFrom: "1,254,000",
        spec: [["디스플레이", "6.2″ FHD+ 120Hz"], ["프로세서", "Snapdragon 8 Elite"], ["카메라", "50MP 트리플"], ["배터리", "4,000mAh"]],
        colors: ["코발트 바이올렛", "스카이 블루", "블랙", "화이트"],
        productKey: "Galaxy S 시리즈"
      },
      {
        id: "galaxy-zfold8-ultra", name: "Galaxy Z Fold8 Ultra", tagline: "8형 대화면과 200MP — 폴드의 정점.",
        img: "assets/galaxy-zfold8-ultra.png", priceFrom: "2,577,300",
        spec: [["디스플레이", "메인 8.0″ (2504×2256)"], ["프로세서", "Snapdragon 8 Elite Gen 5"], ["카메라", "200MP 트리플 + 10MP 망원"], ["배터리", "5,000mAh · 215g"]],
        colors: ["그라파이트", "크림", "바이올렛 쉐도우", "그린 쉐도우"],
        productKey: "Galaxy Z Fold / Flip"
      },
      {
        id: "galaxy-zfold8", name: "Galaxy Z Fold8", tagline: "꽉 찬 4:3 화면, 역대 가장 가벼운 폴드.",
        img: "assets/galaxy-zfold8-graphite.png", priceFrom: "2,278,100",
        spec: [["디스플레이", "메인 7.6″ 4:3 비율"], ["프로세서", "Snapdragon 8 Elite Gen 5"], ["카메라", "50MP 듀얼"], ["배터리", "4,800mAh · 201g"]],
        colors: ["그라파이트", "크림", "라벤더", "피스타치오"],
        productKey: "Galaxy Z Fold / Flip"
      },
      {
        id: "galaxy-zflip8", name: "Galaxy Z Flip8", tagline: "주름을 지운 컴팩트 폴드.",
        img: "assets/galaxy-zflip8.png", priceFrom: "1,683,000",
        spec: [["디스플레이", "메인 6.9″ FHD+ LTPO"], ["프로세서", "Snapdragon 8 Elite Gen 5"], ["카메라", "50MP 듀얼"], ["배터리", "4,174mAh(정격)"]],
        colors: ["그라파이트", "크림", "핑크", "민트"],
        productKey: "Galaxy Z Fold / Flip"
      }
    ]
  }
};

function LineupShowcase() {
  const [brand, setBrand] = useStateS("iPhone");
  const [modelIdx, setModelIdx] = useStateS(0);
  const [colorIdx, setColorIdx] = useStateS(0);
  const [openSpec, setOpenSpec] = useStateS(null);
  const stageRef = useRefS(null);
  const [tilt, setTilt] = useStateS({ x: 0, y: 0 });

  const models = SHOWCASE[brand].models;
  const model = models[Math.min(modelIdx, models.length - 1)]; // 브랜드 전환 직후 인덱스 초과 방어
  const color = model.colors[Math.min(colorIdx, model.colors.length - 1)];
  const tint = COLOR_HEX[color] || "#5a7eb8";

  // Reset model+color on brand switch
  useEffectS(() => { setModelIdx(0); setColorIdx(0); }, [brand]);
  // Reset color when model changes
  useEffectS(() => { setColorIdx(0); }, [modelIdx]);

  // Cursor parallax (desktop only)
  useEffectS(() => {
    const el = stageRef.current;
    if (!el) return;
    if (matchMedia("(hover: none)").matches) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      setTilt({ x, y });
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);

  // Gyro parallax (touch devices) — activated on first user gesture
  const [gyroActive, setGyroActive] = useStateS(false);
  const [gyroStatus, setGyroStatus] = useStateS("idle"); // idle | on | denied | unsupported
  const [isTouch, setIsTouch] = useStateS(false);
  const gyroAttemptedRef = useRefS(false);

  // Detect touch / motion-capable device (so we only show the toggle there)
  useEffectS(() => {
    const touch = matchMedia("(hover: none) and (pointer: coarse)").matches ||
                  ("ontouchstart" in window) || (navigator.maxTouchPoints > 0);
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasSensor = "DeviceOrientationEvent" in window;
    setIsTouch(touch && hasSensor && !reduce);
  }, []);

  useEffectS(() => {
    if (!gyroActive) return;
    let baseline = null;
    let baselineSamples = 0;
    const BASELINE_N = 6;
    let target = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };
    let rafId = null;
    let running = true;

    // RAF runs only while the phone is settling toward target, then stops.
    // A new sensor reading restarts it (see handler). Avoids a permanent
    // 60fps setState loop that made the section feel laggy / unresponsive.
    const loop = () => {
      if (!running) return;
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;
      setTilt({ x: current.x, y: current.y });
      if (Math.abs(target.x - current.x) > 0.002 || Math.abs(target.y - current.y) > 0.002) {
        rafId = requestAnimationFrame(loop);
      } else {
        current.x = target.x; current.y = target.y;
        setTilt({ x: current.x, y: current.y });
        rafId = null;
      }
    };
    const kick = () => { if (running && rafId == null) rafId = requestAnimationFrame(loop); };

    const getAngle = () => {
      if (screen.orientation && typeof screen.orientation.angle === "number") return screen.orientation.angle;
      if (typeof window.orientation === "number") return window.orientation;
      return 0;
    };

    const handler = (e) => {
      if (e.gamma == null || e.beta == null) return;
      // Average first N samples to lock a stable resting baseline.
      // Without this, a single noisy first event = permanent off-center pose.
      if (baselineSamples < BASELINE_N) {
        if (!baseline) baseline = { gamma: e.gamma, beta: e.beta };
        else {
          baseline.gamma = (baseline.gamma * baselineSamples + e.gamma) / (baselineSamples + 1);
          baseline.beta  = (baseline.beta  * baselineSamples + e.beta)  / (baselineSamples + 1);
        }
        baselineSamples++;
        return;
      }
      const angle = getAngle();
      const landscape = angle === 90 || angle === -90 || angle === 270;
      const dg = e.gamma - baseline.gamma;
      const db = e.beta  - baseline.beta;
      let rawX = landscape ? db : dg;
      let rawY = landscape ? -dg : db;
      if (angle === -90 || angle === 270) rawX = -rawX;
      // ±10° physical tilt → ±1 logical (more responsive than previous /18)
      target.x = Math.max(-1, Math.min(1, rawX / 10));
      target.y = Math.max(-1, Math.min(1, rawY / 10));
      kick();
    };

    // Re-calibrate when device orientation changes (portrait↔landscape)
    const onOrientationChange = () => {
      baseline = null;
      baselineSamples = 0;
    };

    window.addEventListener("deviceorientation", handler, true);
    window.addEventListener("orientationchange", onOrientationChange);
    if (screen.orientation) screen.orientation.addEventListener("change", onOrientationChange);
    rafId = requestAnimationFrame(loop);

    return () => {
      running = false;
      window.removeEventListener("deviceorientation", handler, true);
      window.removeEventListener("orientationchange", onOrientationChange);
      if (screen.orientation) screen.orientation.removeEventListener("change", onOrientationChange);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [gyroActive]);

  const tryEnableGyro = async () => {
    if (gyroActive || gyroAttemptedRef.current) return;
    if (typeof window === "undefined") return;
    if (!("DeviceOrientationEvent" in window)) { setGyroStatus("unsupported"); return; }
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gyroAttemptedRef.current = true;
    try {
      // iOS 13+ requires an explicit permission request inside a user gesture.
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        const state = await DeviceOrientationEvent.requestPermission();
        if (state !== "granted") { setGyroStatus("denied"); gyroAttemptedRef.current = false; return; }
      }
      setGyroActive(true);
      setGyroStatus("on");
    } catch (e) {
      setGyroStatus("denied");
      gyroAttemptedRef.current = false; // allow retry
    }
  };

  return (
    <section className="section showcase-section" id="showcase">
      <div className="container">
        <div className="showcase-head">
          <span className="eyebrow"><span className="dot" />SHOWCASE</span>
          <h2 className="section-title">
            <span className="h-thin">광고에서 본 그 모델.</span><br />
            <span className="h-bold">매장에선 어떻게 다른지.</span>
          </h2>
          <p className="section-sub">기기를 고르고, 색상을 보고, 사양을 비교하세요. 조건은 매장에서 직접 안내드립니다.</p>

          {/* Brand pill */}
          <div className="showcase-brands" role="tablist" aria-label="브랜드 선택">
            {Object.keys(SHOWCASE).map((b) => (
              <button
                key={b}
                role="tab"
                aria-selected={brand === b}
                className={"showcase-brand" + (brand === b ? " is-active" : "")}
                onClick={() => { setBrand(b); tryEnableGyro(); }}>
                {SHOWCASE[b].label}
              </button>
            ))}
          </div>

          {/* Gyro hint — touch devices only (no button; tap the phone to enable) */}
          {isTouch && (
            <div className="showcase-gyro">
              {gyroStatus === "on" ? (
                <span className="showcase-gyro__on">
                  <span className="showcase-gyro__dot" /> 폰을 좌우로 기울여보세요
                </span>
              ) : (
                <span className="showcase-gyro__caption">
                  화면 속 폰을 터치하면 기울기 효과가 켜집니다
                  {gyroStatus === "denied" && <em className="showcase-gyro__hint"> · 설정에서 모션 허용 필요</em>}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Stage */}
        <div className="showcase-stage" ref={stageRef} onClick={tryEnableGyro} onTouchStart={tryEnableGyro}>
          <div className="showcase-stage__halo" style={{
            background: `radial-gradient(circle at 50% 50%, ${tint}66 0%, ${tint}1a 32%, transparent 62%)`
          }} />

          <div className="showcase-stage__phone-wrap" style={{
            transform: `translate3d(${tilt.x * -18}px, ${tilt.y * -10}px, 0) rotateX(${tilt.y * -12}deg) rotateY(${tilt.x * 18}deg)`,
            "--gx": tilt.x,
            "--gy": tilt.y,
            "--gmag": Math.min(1, Math.hypot(tilt.x, tilt.y)),
            "--phone-img": `url("${(model.colorImages && model.colorImages[color]) || model.img}")`,
          }}>
            {/* Crossfade stack */}
            {SHOWCASE[brand].models.map((m, i) => {
              const activeImg = (i === modelIdx && m.colorImages && m.colorImages[color]) || m.img;
              return (
                <img
                  key={m.id}
                  src={activeImg}
                  alt={m.name}
                  className={"showcase-phone" + (i === modelIdx ? " is-active" : "")}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              );
            })}
            {/* Premium-display glare — tracks tilt, masked to phone silhouette */}
            <div className="showcase-glare" aria-hidden="true"></div>
          </div>

          {/* Floating brand mark */}
          <div className="showcase-stage__mark" aria-hidden="true">
            <span>{SHOWCASE[brand].eyebrow}</span>
          </div>
        </div>

        {/* Info panel */}
        <div className="showcase-info">
          <div className="showcase-info__left">
            <div className="showcase-info__model-name">{model.name}</div>
            <div className="showcase-info__tag">{model.tagline}</div>
            {model.colors.length > 0 && (
            <div className="showcase-info__color">
              <span className="showcase-info__color-label-static">색상 — <strong>{color}</strong></span>
              <div className="showcase-color-toggle" role="radiogroup" aria-label="색상 선택">
                {model.colors.map((c, i) => (
                  <button
                    key={c}
                    type="button"
                    role="radio"
                    aria-checked={i === colorIdx}
                    title={c}
                    className={"showcase-swatch" + (i === colorIdx ? " is-active" : "")}
                    onClick={() => { setColorIdx(i); tryEnableGyro(); }}>
                    <span className="showcase-swatch__dot" style={{ background: COLOR_HEX[c] || "#999" }} />
                    <span className="showcase-swatch__name">{c}</span>
                  </button>
                ))}
              </div>
            </div>
            )}
          </div>

          <div className="showcase-info__right">
            <dl className="showcase-spec">
              {model.spec.map(([k, v]) => (
                <div key={k} className="showcase-spec__row">
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>

            <div className="showcase-actions">
              <div className="showcase-price">
                <span className="showcase-price__label">출고가</span>
                <span className="showcase-price__from">₩{model.priceFrom}~</span>
                <span className="showcase-price__hint">매장 단독 조건 방문 시 안내</span>
              </div>
              <div className="showcase-buttons">
                <button className="apple-link" onClick={() => setOpenSpec(model.productKey)}>
                  전체 스펙 보기 <Icon name="arrow" size={13} />
                </button>
                <a className="apple-link apple-link--accent" href="#booking">상담 예약하기 <Icon name="arrow" size={13} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Model rail */}
        <div className="showcase-rail" role="tablist" aria-label="모델 선택">
          {models.map((m, i) => (
            <button
              key={m.id}
              role="tab"
              aria-selected={modelIdx === i}
              className={"showcase-rail__item" + (modelIdx === i ? " is-active" : "")}
              onClick={() => { setModelIdx(i); tryEnableGyro(); }}>
              <span className="showcase-rail__thumb">
                <img src={m.img} alt="" loading="lazy" />
              </span>
              <span className="showcase-rail__name">{m.name}</span>
              <span className="showcase-rail__price">₩{m.priceFrom}~</span>
            </button>
          ))}
        </div>
      </div>

      {openSpec && <SpecModal productName={openSpec} onClose={() => setOpenSpec(null)} />}
    </section>
  );
}

window.LineupShowcase = LineupShowcase;
