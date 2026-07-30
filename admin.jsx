/* global React, ReactDOM, Icon */
const { useState: useA, useEffect: useAE, useCallback: useAC, useMemo: useAM } = React;

const A_CONFIGURED =
  typeof window.SUPABASE_URL === "string" && window.SUPABASE_URL.indexOf("YOUR-") === -1 &&
  typeof window.SUPABASE_ANON_KEY === "string" && window.SUPABASE_ANON_KEY.indexOf("YOUR-") === -1;

const asb = A_CONFIGURED && window.supabase
  ? window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY)
  : null;

const won = (n) => (n || 0).toLocaleString("ko-KR") + "원";
const ymd = (s) => s ? new Date(s).toLocaleDateString("ko-KR") : "-";

const STATUS = {
  pending:   { label: "접수",      cls: "is-pending" },
  visited:   { label: "방문",      cls: "is-visited" },
  activated: { label: "개통 완료", cls: "is-activated" },
  rejected:  { label: "취소",      cls: "is-rejected" },
};

function AdminHeader({ onLogout, email }) {
  return (
    <header className="partner-header">
      <div className="container partner-header__inner">
        <a href="/" className="brand" aria-label="공일모바일 홈">
          <span className="brand-logo" style={{ width: 34, height: 34, display: "grid", placeItems: "center" }}>
            <img src="assets/logo.png" alt="공일모바일" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </span>
          <span className="brand-text"><strong>공일모바일</strong><small>ADMIN</small></span>
        </a>
        {onLogout && <button className="btn btn-ghost btn-sm" onClick={onLogout}>로그아웃</button>}
      </div>
    </header>
  );
}

function AdminApp() {
  const [ready, setReady] = useA(false);
  const [session, setSession] = useA(null);
  const [isAdmin, setIsAdmin] = useA(false);
  const [partners, setPartners] = useA([]);
  const [refs, setRefs] = useA([]);
  const [q, setQ] = useA("");
  const [busy, setBusy] = useA(false);
  const [tab, setTab] = useA("referrals"); // referrals | partners
  const [adminId, setAdminId] = useA("");
  const [adminPw, setAdminPw] = useA("");
  const [loginErr, setLoginErr] = useA("");

  const load = useAC(async (uid) => {
    const { data: me } = await asb.from("partners").select("is_admin").eq("id", uid).single();
    const admin = !!(me && me.is_admin);
    setIsAdmin(admin);
    if (!admin) return;
    const { data: ps } = await asb.from("partners").select("*");
    const { data: rs } = await asb.from("referrals").select("*").order("created_at", { ascending: false });
    setPartners(ps || []);
    setRefs(rs || []);
  }, []);

  useAE(() => {
    if (!asb) { setReady(true); return; }
    asb.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (data.session) load(data.session.user.id).finally(() => setReady(true));
      else setReady(true);
    });
    const { data: sub } = asb.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      setBusy(false); // 로그인 성공 등 세션 변경 시 busy 해제 (이중 안전장치)
      if (s) load(s.user.id);
      else { setIsAdmin(false); setPartners([]); setRefs([]); }
    });
    return () => sub.subscription.unsubscribe();
  }, [load]);

  const partnerById = useAM(() => {
    const m = {};
    partners.forEach((p) => { m[p.id] = p; });
    return m;
  }, [partners]);

  // 이름·연락처를 모두 입력한 "완성된" 파트너만 집계 대상
  const isComplete = (p) => !!(p && p.name && p.name.trim() && p.phone && p.phone.trim());
  const activePartners = useAM(() => partners.filter(isComplete), [partners]);

  // 파트너별 실적 집계 (완성 파트너만)
  const stats = useAM(() => {
    const m = {};
    activePartners.forEach((p) => { m[p.id] = { p, total: 0, activated: 0, reward: 0, unpaid: 0 }; });
    refs.forEach((r) => {
      const s = m[r.partner_id]; if (!s) return;
      s.total++;
      if (r.status === "activated") { s.activated++; s.reward += r.reward_amount || 0; if (!r.reward_paid) s.unpaid += r.reward_amount || 0; }
    });
    return Object.values(m).sort((a, b) => b.activated - a.activated || b.total - a.total);
  }, [activePartners, refs]);

  const totals = useAM(() => {
    let act = 0, reward = 0, unpaid = 0, pend = 0;
    refs.forEach((r) => {
      if (r.status === "activated") { act++; reward += r.reward_amount || 0; if (!r.reward_paid) unpaid += r.reward_amount || 0; }
      else if (r.status === "pending" || r.status === "visited") pend++;
    });
    return { act, reward, unpaid, pend, partners: activePartners.length };
  }, [refs, activePartners]);

  const filtered = useAM(() => {
    const t = q.trim().toLowerCase();
    if (!t) return refs;
    return refs.filter((r) => {
      const p = partnerById[r.partner_id] || {};
      return [r.referred_name, r.referred_phone, p.name, p.phone, p.referral_code]
        .filter(Boolean).some((v) => String(v).toLowerCase().includes(t));
    });
  }, [refs, q, partnerById]);

  const update = async (id, patch) => {
    setBusy(true);
    const { error } = await asb.from("referrals").update(patch).eq("id", id);
    if (error) alert("수정 오류: " + error.message);
    else if (session) await load(session.user.id);
    setBusy(false);
  };
  const activate = (r) => update(r.id, { status: "activated", activated_at: new Date().toISOString() });
  const setStatus = (r, status) => update(r.id, { status });
  const togglePaid = (r) => update(r.id, { reward_paid: !r.reward_paid });

  // 아이디 + 비밀번호 로그인 (Supabase 이메일/비번 계정에 매핑)
  // 입력한 아이디 뒤에 @01mobile.co.kr 을 붙여 이메일로 사용합니다.
  const loginPassword = async (e) => {
    if (e) e.preventDefault();
    if (!adminId.trim() || !adminPw) { setLoginErr("아이디와 비밀번호를 입력하세요."); return; }
    setBusy(true); setLoginErr("");
    const email = adminId.trim() + "@01mobile.co.kr";
    const { error } = await asb.auth.signInWithPassword({ email, password: adminPw });
    if (error) { setLoginErr("아이디 또는 비밀번호가 올바르지 않습니다."); setBusy(false); }
    else { setAdminPw(""); setBusy(false); }
  };
  const logout = async () => { await asb.auth.signOut(); };

  if (!asb) return (<><AdminHeader /><div className="partner-shell"><div className="partner-card partner-card--notice"><h2>설정 필요</h2><p>supabase-config.js 설정이 필요합니다.</p></div></div></>);
  if (!ready) return (<><AdminHeader /><div className="partner-shell"><div className="partner-loading">불러오는 중…</div></div></>);

  if (!session) return (
    <><AdminHeader />
      <div className="partner-shell">
        <form className="partner-card partner-login" onSubmit={loginPassword}>
          <div className="partner-ico-lg"><Icon name="shield" size={28} /></div>
          <h1>관리자 로그인</h1>
          <p>매장 관리자 전용 페이지입니다.</p>
          <div className="field" style={{ textAlign: "left", marginBottom: 12 }}>
            <label htmlFor="ad-id">아이디</label>
            <input id="ad-id" className="input" autoComplete="username"
              value={adminId} onChange={(e) => setAdminId(e.target.value)} placeholder="아이디" />
          </div>
          <div className="field" style={{ textAlign: "left", marginBottom: 16 }}>
            <label htmlFor="ad-pw">비밀번호</label>
            <input id="ad-pw" type="password" className="input" autoComplete="current-password"
              value={adminPw} onChange={(e) => setAdminPw(e.target.value)} placeholder="비밀번호" />
          </div>
          {loginErr && <div className="partner-err" style={{ marginBottom: 12 }}>{loginErr}</div>}
          <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }} disabled={busy}>
            {busy ? "로그인 중…" : "로그인"}
          </button>
          <a href="/" className="partner-back">← 매장 홈으로</a>
        </form>
      </div>
    </>
  );

  if (!isAdmin) return (
    <><AdminHeader onLogout={logout} />
      <div className="partner-shell">
        <div className="partner-card partner-card--notice">
          <div className="partner-ico-lg"><Icon name="shield" size={26} /></div>
          <h2>관리자 권한이 없습니다</h2>
          <p>이 계정은 아직 관리자로 지정되지 않았습니다. Supabase에서 아래 사용자를
          관리자로 지정한 뒤 새로고침하세요.</p>
          <div className="admin-uid">내 사용자 ID: <code>{session.user.id}</code></div>
          <p style={{ fontSize: 13, marginTop: 14 }}>
            Supabase → Table Editor → <b>partners</b> → 위 ID 행 → <b>is_admin</b> 체크 (true)
          </p>
          <a href="/" className="btn btn-primary">홈으로</a>
        </div>
      </div>
    </>
  );

  return (
    <><AdminHeader onLogout={logout} />
      <div className="admin-wrap">
        <div className="admin-head">
          <h1>관리자 대시보드</h1>
          <p>추천·개통 현황과 파트너 실적을 관리합니다.</p>
        </div>

        {/* 요약 카드 */}
        <div className="admin-kpis">
          <div className="admin-kpi"><div className="l">개통 완료</div><div className="v">{totals.act}<small>건</small></div></div>
          <div className="admin-kpi"><div className="l">진행 중</div><div className="v">{totals.pend}<small>건</small></div></div>
          <div className="admin-kpi"><div className="l">누적 리워드</div><div className="v">{won(totals.reward)}</div></div>
          <div className="admin-kpi admin-kpi--warn"><div className="l">미지급 리워드</div><div className="v">{won(totals.unpaid)}</div></div>
          <div className="admin-kpi"><div className="l">파트너 수</div><div className="v">{totals.partners}<small>명</small></div></div>
        </div>

        {/* 탭 */}
        <div className="admin-tabs">
          <button className={tab === "referrals" ? "on" : ""} onClick={() => setTab("referrals")}>추천 내역</button>
          <button className={tab === "partners" ? "on" : ""} onClick={() => setTab("partners")}>파트너 실적</button>
          <button className="admin-refresh" onClick={() => session && load(session.user.id)} disabled={busy}>새로고침</button>
        </div>

        {tab === "referrals" && (
          <div className="admin-panel">
            <input className="input admin-search" placeholder="고객명·전화번호·추천인·추천코드 검색"
              value={q} onChange={(e) => setQ(e.target.value)} />
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>등록일</th><th>추천인</th><th>소개받은 분</th><th>연락처</th>
                    <th>메모</th><th>상태</th><th>리워드</th><th>처리</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 && <tr><td colSpan="8" className="admin-empty">내역이 없습니다.</td></tr>}
                  {filtered.map((r) => {
                    const p = partnerById[r.partner_id] || {};
                    const st = STATUS[r.status] || STATUS.pending;
                    return (
                      <tr key={r.id}>
                        <td className="nowrap">{ymd(r.created_at)}</td>
                        <td>{p.name || "-"}<div className="admin-sub">{p.referral_code}</div></td>
                        <td><b>{r.referred_name}</b>{r.source === "link" && <span className="admin-link-tag">링크</span>}</td>
                        <td className="nowrap">{r.referred_phone || "-"}</td>
                        <td className="admin-memo">{r.memo || "-"}</td>
                        <td><span className={"partner-badge " + st.cls}>{st.label}</span></td>
                        <td className="nowrap">{r.status === "activated" ? <>{won(r.reward_amount)}<div className="admin-sub">{r.reward_paid ? "지급완료" : "미지급"}</div></> : "-"}</td>
                        <td>
                          <div className="admin-actions">
                            {r.status !== "activated" && <button className="btn btn-primary btn-sm" disabled={busy} onClick={() => activate(r)}>개통확정</button>}
                            {r.status === "pending" && <button className="btn btn-ghost btn-sm" disabled={busy} onClick={() => setStatus(r, "visited")}>방문</button>}
                            {r.status === "activated" && <button className="btn btn-soft btn-sm" disabled={busy} onClick={() => togglePaid(r)}>{r.reward_paid ? "지급취소" : "지급완료"}</button>}
                            {r.status !== "rejected" && r.status !== "activated" && <button className="btn btn-ghost btn-sm admin-del" disabled={busy} onClick={() => setStatus(r, "rejected")}>취소</button>}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === "partners" && (
          <div className="admin-panel">
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr><th>파트너</th><th>연락처</th><th>추천코드</th><th>총 추천</th><th>개통</th><th>누적 리워드</th><th>미지급</th></tr>
                </thead>
                <tbody>
                  {stats.length === 0 && <tr><td colSpan="7" className="admin-empty">파트너가 없습니다.</td></tr>}
                  {stats.map((s) => (
                    <tr key={s.p.id}>
                      <td><b>{s.p.name || "-"}</b></td>
                      <td className="nowrap">{s.p.phone || "-"}</td>
                      <td><code>{s.p.referral_code}</code></td>
                      <td>{s.total}</td>
                      <td><b>{s.activated}</b></td>
                      <td className="nowrap">{won(s.reward)}</td>
                      <td className="nowrap">{s.unpaid > 0 ? <b style={{ color: "#C0392B" }}>{won(s.unpaid)}</b> : "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <p className="admin-foot">개통확정을 누르면 해당 파트너 대시보드에 즉시 반영되며, 리워드(기본 5만원)가 적립됩니다.</p>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AdminApp />);
