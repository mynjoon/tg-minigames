/* global React, ReactDOM, Icon, supabase */
const { useState: useP, useEffect: usePE, useCallback: usePC } = React;

// ---------- Supabase client (graceful if unconfigured) ----------
const CONFIGURED =
  typeof window.SUPABASE_URL === "string" &&
  window.SUPABASE_URL.indexOf("YOUR-PROJECT") === -1 &&
  typeof window.SUPABASE_ANON_KEY === "string" &&
  window.SUPABASE_ANON_KEY.indexOf("YOUR-ANON") === -1;

const sb = CONFIGURED && window.supabase
  ? window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY)
  : null;

const won = (n) => (n || 0).toLocaleString("ko-KR") + "원";

// ---------- Top bar ----------
function PartnerHeader({ session, onLogout }) {
  return (
    <header className="partner-header">
      <div className="container partner-header__inner">
        <a href="index.html" className="brand" aria-label="공일모바일 홈">
          <span className="brand-logo"><img src="assets/logo.png" alt="공일모바일" /></span>
          <span className="brand-text"><strong>공일모바일</strong><small>PARTNER</small></span>
        </a>
        {session &&
          <button className="btn btn-ghost btn-sm" onClick={onLogout}>로그아웃</button>}
      </div>
    </header>
  );
}

// ---------- Not-configured notice (dev/setup state) ----------
function SetupNotice() {
  return (
    <div className="partner-shell">
      <div className="partner-card partner-card--notice">
        <div className="partner-ico-lg"><Icon name="doc" size={26} /></div>
        <h2>설정이 필요합니다</h2>
        <p>
          파트너 페이지를 작동시키려면 <code>supabase-config.js</code>에 Supabase
          프로젝트 URL과 anon 키를 입력하고, 카카오 로그인 연동을 마쳐야 합니다.
          자세한 절차는 <b>PARTNER_SETUP.md</b>를 참고하세요.
        </p>
        <a href="index.html" className="btn btn-primary">홈으로 돌아가기</a>
      </div>
    </div>
  );
}

// ---------- 인앱 브라우저 감지 — 인스타·페북·카톡 등 앱 내 브라우저는 OAuth가 차단되는 경우가 많다 ----------
const IN_APP_RE = /instagram|fbav|fban|fb_iab|kakaotalk|naver\(inapp|line\//i;
const isInApp = () => IN_APP_RE.test(navigator.userAgent);

function openExternalBrowser() {
  const url = location.href.split("#")[0];
  const ua = navigator.userAgent;
  if (/kakaotalk/i.test(ua)) { location.href = "kakaotalk://web/openExternal?url=" + encodeURIComponent(url); return; }
  if (/android/i.test(ua)) {
    location.href = "intent://" + url.replace(/^https?:\/\//, "") + "#Intent;scheme=https;action=android.intent.action.VIEW;end";
    return;
  }
  const fallback = () => alert("오른쪽 위 ⋯ 메뉴에서 '외부 브라우저로 열기'를 눌러주세요.");
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url)
      .then(() => alert("링크를 복사했어요!\n사파리(또는 크롬)를 열고 주소창에 붙여넣어 주세요."))
      .catch(fallback);
  } else fallback();
}

// ---------- Login ----------
function LoginView({ onKakao, busy }) {
  return (
    <div className="partner-shell">
      <div className="partner-card partner-login">
        <div className="partner-ico-lg"><Icon name="users" size={28} /></div>
        <h1>파트너 리워드</h1>
        <p>카카오로 로그인하고 내 추천 현황과 누적 리워드를<br />한눈에 확인하세요.</p>
        <button className="btn btn-kakao btn-lg partner-kakao" onClick={onKakao} disabled={busy}>
          <Icon name="chat" size={18} /> {busy ? "이동 중…" : "카카오로 로그인"}
        </button>
        {isInApp() &&
          <small style={{ display: "block", marginTop: 10, color: "#8b95a1", fontSize: 12.5, lineHeight: 1.6 }}>
            로그인이 안 되면{" "}
            <a href="#" onClick={(e) => { e.preventDefault(); openExternalBrowser(); }} style={{ textDecoration: "underline", color: "#6b7684" }}>
              외부 브라우저로 열기
            </a>
            {" "}또는 오른쪽 위 ⋯ 메뉴를 이용해 주세요.
          </small>}
        <a href="index.html" className="partner-back">← 매장 홈으로</a>
      </div>
    </div>
  );
}

// ---------- Profile registration (first login) ----------
function RegisterView({ initialName, onSave, busy }) {
  const [name, setName] = useP(initialName || "");
  const [phone, setPhone] = useP("");
  const [consent, setConsent] = useP(false);
  const [err, setErr] = useP("");

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim()) return setErr("이름을 입력해주세요.");
    if (!phone.trim()) return setErr("연락처를 입력해주세요.");
    if (!consent) return setErr("개인정보 수집·이용에 동의해주세요.");
    setErr("");
    onSave({ name: name.trim(), phone: phone.trim(), consent: true });
  };

  return (
    <div className="partner-shell">
      <form className="partner-card partner-register" onSubmit={submit} noValidate>
        <h2>파트너 정보 등록</h2>
        <p className="partner-sub">리워드 지급을 위해 기본 정보를 등록해주세요.</p>

        <div className="field">
          <label htmlFor="p-name">이름<span className="req">*</span></label>
          <input id="p-name" className="input" value={name}
            onChange={(e) => setName(e.target.value)} placeholder="성함" />
        </div>
        <div className="field" style={{ marginTop: 16 }}>
          <label htmlFor="p-phone">연락처<span className="req">*</span></label>
          <input id="p-phone" className="input" value={phone} inputMode="tel"
            onChange={(e) => setPhone(e.target.value)} placeholder="010-0000-0000" />
        </div>

        <label className="consent" style={{ marginTop: 18 }}>
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
          <span>
            <b>개인정보 수집·이용에 동의합니다. (필수)</b><br />
            수집 항목: 이름, 연락처 · 목적: 파트너 리워드 정산 · 보유: 정산 완료 후 관련 법령 기간.
            자세한 내용은 <a href="privacy.html" target="_blank" rel="noopener noreferrer">개인정보처리방침</a>을 참고하세요.
          </span>
        </label>

        {err && <div className="partner-err">{err}</div>}

        <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", marginTop: 18 }} disabled={busy}>
          {busy ? "저장 중…" : "등록하고 시작하기"}
        </button>
      </form>
    </div>
  );
}

// ---------- Dashboard ----------
function Dashboard({ profile, referrals, onRefresh, busy }) {
  const [copied, setCopied] = useP(false);

  // index.html이 루트이므로 경로 계산 없이 항상 루트 기준으로 생성 (Pretty URL /partner 에서도 안전)
  const link = `${location.origin}/?ref=${profile.referral_code}`;

  const stats = referrals.reduce((a, r) => {
    if (r.status === "activated") { a.activated++; a.reward += r.reward_amount; if (r.reward_paid) a.paid += r.reward_amount; }
    else if (r.status === "pending" || r.status === "visited") a.open++;
    return a;
  }, { activated: 0, open: 0, reward: 0, paid: 0 });

  const copy = () => {
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 1800); };
    // 1순위: 최신 클립보드 API (HTTPS에서 동작)
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(link).then(done).catch(() => fallbackCopy(link, done));
    } else {
      fallbackCopy(link, done);
    }
  };
  // 대비책: 구형/비보안 환경에서도 복사되도록 textarea + execCommand
  const fallbackCopy = (text, onOk) => {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, text.length);
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      if (ok) onOk();
      else prompt("아래 링크를 길게 눌러 복사하세요:", text);
    } catch (e) {
      prompt("아래 링크를 길게 눌러 복사하세요:", text);
    }
  };

  const STATUS = {
    pending:   { label: "접수", cls: "is-pending" },
    visited:   { label: "방문", cls: "is-visited" },
    activated: { label: "개통 완료", cls: "is-activated" },
    rejected:  { label: "취소", cls: "is-rejected" },
  };

  return (
    <div className="partner-shell partner-dash">
      <div className="partner-greet">
        <span className="eyebrow"><span className="dot" />MY REWARD</span>
        <h1>{profile.name || "파트너"}님, 안녕하세요.</h1>
        <p>소개해 주신 분이 개통하면 리워드가 적립됩니다. 금액·지급은 매장에서 확정합니다.</p>
      </div>

      {/* Stat cards */}
      <div className="partner-stats">
        <div className="partner-stat">
          <div className="l">누적 리워드</div>
          <div className="v">{won(stats.reward)}</div>
          <div className="s">지급 완료 {won(stats.paid)}</div>
        </div>
        <div className="partner-stat">
          <div className="l">개통 완료</div>
          <div className="v">{stats.activated}<small>건</small></div>
        </div>
        <div className="partner-stat">
          <div className="l">진행 중</div>
          <div className="v">{stats.open}<small>건</small></div>
        </div>
      </div>

      {/* Referral link */}
      <div className="partner-link-card">
        <div className="partner-link-head">
          <div>
            <div className="t">내 추천 링크</div>
            <div className="code">추천코드 <b>{profile.referral_code}</b></div>
          </div>
          <button className="btn btn-soft btn-sm" onClick={copy}>
            <Icon name="copy" size={14} /> {copied ? "복사됨" : "링크 복사"}
          </button>
        </div>
        <div className="partner-link-url">{link}</div>
      </div>

      {/* Referrals */}
      <div className="partner-list-head">
        <h2>내 추천 내역</h2>
        <button className="btn btn-ghost btn-sm" onClick={onRefresh} disabled={busy}>새로고침</button>
      </div>

      {referrals.length === 0 ?
        <div className="partner-empty">아직 추천 내역이 없습니다. 위의 내 추천 링크를 지인에게 공유해보세요.</div> :
        <div className="partner-list">
          {referrals.map((r) => {
            const st = STATUS[r.status] || STATUS.pending;
            return (
              <div className="partner-row" key={r.id}>
                <div className="partner-row__main">
                  <b>{r.referred_name}</b>
                  {r.memo && <span className="partner-row__memo">{r.memo}</span>}
                  <span className="partner-row__date">{new Date(r.created_at).toLocaleDateString("ko-KR")}</span>
                </div>
                <div className="partner-row__right">
                  <span className={"partner-badge " + st.cls}>{st.label}</span>
                  {r.status === "activated" &&
                    <span className="partner-row__reward">{won(r.reward_amount)}{r.reward_paid ? " 지급" : " 예정"}</span>}
                </div>
              </div>
            );
          })}
        </div>}

      <p className="partner-foot-note">
        리워드 금액·지급 조건은 통신사 정책 및 관련 법령에 따라 매장에서 확정합니다.
        소개받는 분의 연락처는 사전 동의를 받은 경우에만 입력해주세요.
      </p>

      <div className="partner-warn">
        <b>⚠️ 부정 추천 경고</b><br />
        존재하지 않는 번호 입력, 개통 의사가 없는 사람의 허위·반복 등록 등
        <b> 악의적인 부정 추천</b>이 확인될 경우, 사전 통보 없이 <b>리워드 지급이 거부</b>되고
        <b> 파트너 자격이 영구 박탈</b>됩니다. 고의적·조직적 부정 행위로 매장에 손해가 발생한 경우
        <b> 민·형사상 법적 책임</b>을 물을 수 있습니다.
      </div>
    </div>
  );
}

// ---------- Root ----------
function PartnerApp() {
  const [ready, setReady] = useP(false);
  const [session, setSession] = useP(null);
  const [profile, setProfile] = useP(null);
  const [referrals, setReferrals] = useP([]);
  const [busy, setBusy] = useP(false);

  const loadData = usePC(async (uid) => {
    const { data: prof } = await sb.from("partners").select("*").eq("id", uid).single();
    setProfile(prof || null);
    const { data: refs } = await sb.from("referrals").select("*").eq("partner_id", uid).order("created_at", { ascending: false });
    setReferrals(refs || []);
  }, []);

  usePE(() => {
    if (!sb) { setReady(true); return; }
    sb.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (data.session) loadData(data.session.user.id).finally(() => setReady(true));
      else setReady(true);
    });
    const { data: sub } = sb.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      if (s) loadData(s.user.id);
      else { setProfile(null); setReferrals([]); }
    });
    return () => sub.subscription.unsubscribe();
  }, [loadData]);

  const loginKakao = async () => {
    setBusy(true);
    const { error } = await sb.auth.signInWithOAuth({
      provider: "kakao",
      options: { redirectTo: location.origin + location.pathname },
    });
    if (error) { alert("로그인 오류: " + error.message); setBusy(false); }
  };

  const logout = async () => { await sb.auth.signOut(); };

  const saveProfile = async ({ name, phone, consent }) => {
    setBusy(true);
    const { error } = await sb.from("partners")
      .update({ name, phone, consent }).eq("id", session.user.id);
    if (error) alert("저장 오류: " + error.message);
    else await loadData(session.user.id);
    setBusy(false);
  };

  if (!sb) return (<><PartnerHeader session={null} /><SetupNotice /></>);
  if (!ready) return (<><PartnerHeader session={null} /><div className="partner-shell"><div className="partner-loading">불러오는 중…</div></div></>);
  if (!session) return (<><PartnerHeader session={null} /><LoginView onKakao={loginKakao} busy={busy} /></>);

  const needsProfile = !profile || !profile.consent || !profile.name || !profile.phone;

  return (
    <>
      <PartnerHeader session={session} onLogout={logout} />
      {needsProfile
        ? <RegisterView initialName={profile && profile.name} onSave={saveProfile} busy={busy} />
        : <Dashboard profile={profile} referrals={referrals}
            onRefresh={() => loadData(session.user.id)} busy={busy} />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<PartnerApp />);
