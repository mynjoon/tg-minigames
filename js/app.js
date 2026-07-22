/* ═══════════ 공통 코어: 텔레그램 연동 · 지갑 · 화면 · UI 부품 ═══════════ */

/* ── 텔레그램 WebApp ── */
const TG = window.Telegram ? window.Telegram.WebApp : null;
try {
  if (TG) {
    TG.ready();
    TG.expand();
    if (TG.setHeaderColor) TG.setHeaderColor('#0b0e1a');
    if (TG.setBackgroundColor) TG.setBackgroundColor('#0b0e1a');
  }
} catch (e) {}

const haptic = {
  tap()  { try { if (TG) TG.HapticFeedback.impactOccurred('light'); } catch (e) {} },
  win()  { try { if (TG) TG.HapticFeedback.notificationOccurred('success'); } catch (e) {} },
  lose() { try { if (TG) TG.HapticFeedback.notificationOccurred('error'); } catch (e) {} },
};

/* ── 저장소: Telegram CloudStorage(기기 간 동기화) → localStorage 폴백 ── */
const useCloud = !!(TG && TG.CloudStorage && TG.initData && parseFloat(TG.version || '0') >= 6.9);

function storageGet(key) {
  return new Promise((resolve) => {
    let local = null;
    try { local = localStorage.getItem(key); } catch (e) {}
    if (useCloud) {
      try {
        TG.CloudStorage.getItem(key, (err, v) => resolve(!err && v ? v : local));
        return;
      } catch (e) {}
    }
    resolve(local);
  });
}

function storageSet(key, val) {
  try { localStorage.setItem(key, val); } catch (e) {}
  if (useCloud) {
    try { TG.CloudStorage.setItem(key, val, () => {}); } catch (e) {}
  }
}

/* ── 테스트 모드 (테스트 서버 = 포인트 무제한) ──
   URL에 ?test=1 또는 #test 가 붙으면 활성화.
   실서버 지갑과 완전히 분리된 저장키를 써서 서로 섞이지 않는다. */
const TEST_MODE = (() => {
  try {
    const q = new URLSearchParams(location.search);
    return q.get('test') === '1' || location.hash.replace('#', '') === 'test';
  } catch (e) { return false; }
})();
const TEST_FLOOR = 1000000;      // 이 밑으로 떨어지면
const TEST_REFILL = 100000000;   // 자동으로 이만큼 다시 채움 → 사실상 무제한

/* ── 리더보드(게임) 모드 ──
   봇이 sendGame → callback 으로 게임을 열 때, 봇 서버가 URL에
   ?tgScore=<서명토큰>&api=<점수엔드포인트> 를 주입한다.
   그 두 값이 있으면 "게임 모드"로 보고, 최고 잔액(peak)을 서버로 보내
   텔레그램 내장 리더보드(setGameScore)에 반영한다.
   테스트 모드에서는 리더보드에 반영하지 않는다(공정성). */
const GAME = (() => {
  try {
    const q = new URLSearchParams(location.search);
    const token = q.get('tgScore');
    const api = q.get('api');
    if (token && api && !TEST_MODE) return { token, api };
  } catch (e) {}
  return null;
})();

/* ── 지갑/통계 상태 ── */
const SAVE_KEY = TEST_MODE ? 'casino_test_v1' : 'casino_v1';
const DEFAULT_STATE = {
  points: TEST_MODE ? TEST_REFILL : 10000,
  peak: TEST_MODE ? TEST_REFILL : 10000,   // 최고 도달 잔액 → 리더보드 점수
  lastBonus: '', rescueAt: 0, stats: { plays: 0, wins: 0, best: 0 },
};
let S = JSON.parse(JSON.stringify(DEFAULT_STATE));
let navLock = false; // 라운드 진행 중 화면 이탈 방지

let saveTimer = null;
function save() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => storageSet(SAVE_KEY, JSON.stringify(S)), 250);
}

function fmt(n) { return Math.round(n).toLocaleString('ko-KR'); }
function kstToday() { return new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10); }
function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

function setPoints(delta) {
  S.points = Math.max(0, Math.round(S.points + delta));
  // 테스트 서버: 잔액이 바닥나면 자동 충전하여 무제한처럼 유지
  if (TEST_MODE && S.points < TEST_FLOOR) S.points = TEST_REFILL;
  // 최고 잔액 갱신 → 리더보드 점수(오르기만 하는 하이스코어)
  if (S.points > (S.peak || 0)) {
    S.peak = S.points;
    submitScore();
  }
  save();
  renderBalance(delta > 0);
  refreshBetPickers();
  renderBonus();
}

/* 게임 모드일 때만: 최고 잔액을 봇 서버로 보내 리더보드에 반영 (디바운스) */
let scoreTimer = null;
function submitScore() {
  if (!GAME) return;
  clearTimeout(scoreTimer);
  scoreTimer = setTimeout(() => {
    try {
      fetch(GAME.api, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ token: GAME.token, score: Math.round(S.peak || S.points) }),
        keepalive: true,
      }).catch(() => {});
    } catch (e) {}
  }, 1500);
}

function recordResult(net) {
  S.stats.plays += 1;
  if (net > 0) {
    S.stats.wins += 1;
    if (net > S.stats.best) S.stats.best = Math.round(net);
  }
  save();
  renderStats();
}

/* ── 렌더링 ── */
function renderBalance(pulse) {
  document.getElementById('balance-num').textContent = fmt(S.points);
  if (pulse) {
    const chip = document.getElementById('balance-chip');
    chip.classList.remove('pulse');
    void chip.offsetWidth;
    chip.classList.add('pulse');
  }
}

function renderStats() {
  document.getElementById('stat-plays').textContent = fmt(S.stats.plays);
  document.getElementById('stat-wins').textContent = fmt(S.stats.wins);
  document.getElementById('stat-best').textContent = fmt(S.stats.best);
}

function renderBonus() {
  const daily = document.getElementById('btn-daily');
  const claimed = S.lastBonus === kstToday();
  daily.disabled = claimed;
  daily.innerHTML = claimed ? '✅ 오늘 출석 보너스 수령 완료' : '🎁 출석 보너스 받기 <b>+5,000P</b>';

  const rescue = document.getElementById('btn-rescue');
  const canRescue = S.points < 100 && Date.now() - (S.rescueAt || 0) > 30 * 60 * 1000;
  rescue.classList.toggle('hidden', !canRescue);
}

document.getElementById('btn-daily').addEventListener('click', () => {
  if (S.lastBonus === kstToday()) return;
  S.lastBonus = kstToday();
  setPoints(5000);
  haptic.win();
  showToast('🎁 출석 보너스 +5,000P!', 'good');
});

document.getElementById('btn-rescue').addEventListener('click', () => {
  S.rescueAt = Date.now();
  setPoints(1000);
  haptic.win();
  showToast('🆘 구제 칩 +1,000P — 재기해 봅시다!', 'good');
});

/* ── 화면 전환 ── */
const SCREEN_TITLES = {
  lobby: '🎰 미니 카지노',
  slots: '🎰 슬롯머신',
  blackjack: '🃏 블랙잭',
  roulette: '🎡 룰렛',
  hilo: '🔺 하이로우',
  baccarat: '🎴 바카라',
  wheel: '🍀 럭키휠',
  dice: '🎲 다이스',
  mines: '💣 마인즈',
  poker: '♠️ 비디오 포커',
  coin: '🪙 코인플립',
};

/* 사이드 선택 버튼 공용 헬퍼 (바카라/다이스/코인플립) */
function wireSides(containerIds, onSelect) {
  const btns = [];
  containerIds.forEach((cid) => {
    document.querySelectorAll('#' + cid + ' .side').forEach((b) => btns.push(b));
  });
  btns.forEach((b) =>
    b.addEventListener('click', () => {
      haptic.tap();
      btns.forEach((x) => x.classList.remove('sel'));
      b.classList.add('sel');
      if (onSelect) onSelect(b.dataset.side);
    })
  );
  return () => btns.find((b) => b.classList.contains('sel')).dataset.side;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.toggle('active', s.id === 'screen-' + id));
  const inGame = id !== 'lobby';
  document.getElementById('btn-back').classList.toggle('hidden', !inGame);
  document.getElementById('topbar-title').textContent = SCREEN_TITLES[id] || SCREEN_TITLES.lobby;
  try {
    if (TG && TG.BackButton) { if (inGame) TG.BackButton.show(); else TG.BackButton.hide(); }
  } catch (e) {}
  window.scrollTo(0, 0);
}

function goLobby() {
  if (navLock) { showToast('게임 진행 중에는 나갈 수 없어요!', 'bad'); return; }
  haptic.tap();
  showScreen('lobby');
}

document.getElementById('btn-back').addEventListener('click', goLobby);
try { if (TG && TG.BackButton) TG.BackButton.onClick(goLobby); } catch (e) {}

document.querySelectorAll('.game-card').forEach((card) =>
  card.addEventListener('click', () => { haptic.tap(); showScreen(card.dataset.game); })
);

/* ── 토스트 ── */
let toastTimer = null;
function showToast(text, type) {
  const t = document.getElementById('toast');
  t.textContent = text;
  t.className = 'show' + (type ? ' ' + type : '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.className = ''; }, 2200);
}

/* ── 배팅 선택기 (게임별 공용 부품) ── */
const BET_PRESETS = [100, 500, 1000, 5000, 10000];
const betPickers = [];

function makeBetPicker(elId) {
  const el = document.getElementById(elId);
  const p = { amount: 100 };
  p.get = () => Math.min(p.amount === 'all' ? S.points : p.amount, S.points);
  p.refresh = () => {
    el.innerHTML = '';
    BET_PRESETS.forEach((v) => {
      const b = document.createElement('button');
      b.className = 'chip' + (p.amount === v ? ' sel' : '');
      b.textContent = v >= 1000 ? v / 1000 + 'K' : String(v);
      b.disabled = S.points < v;
      b.addEventListener('click', () => { haptic.tap(); p.amount = v; p.refresh(); });
      el.appendChild(b);
    });
    const allin = document.createElement('button');
    allin.className = 'chip allin' + (p.amount === 'all' ? ' sel' : '');
    allin.textContent = '올인';
    allin.disabled = S.points <= 0;
    allin.addEventListener('click', () => { haptic.tap(); p.amount = 'all'; p.refresh(); });
    el.appendChild(allin);
    const disp = document.createElement('div');
    disp.className = 'bet-display';
    disp.textContent = '배팅: ' + fmt(p.get()) + 'P';
    el.appendChild(disp);
  };
  p.refresh();
  betPickers.push(p);
  return p;
}

function refreshBetPickers() { betPickers.forEach((p) => p.refresh()); }

/* ── 시작: 저장된 상태 불러오기 ── */
(async function init() {
  const raw = await storageGet(SAVE_KEY);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      S = Object.assign({}, DEFAULT_STATE, parsed);
      S.stats = Object.assign({}, DEFAULT_STATE.stats, parsed.stats || {});
    } catch (e) {}
  }
  // 테스트 서버: 잔액이 부족하면 즉시 무제한치로 채워 시작
  if (TEST_MODE && S.points < TEST_FLOOR) S.points = TEST_REFILL;
  // peak 보정 (예전 저장본에 peak 없을 수 있음)
  if (!(S.peak >= S.points)) S.peak = S.points;
  renderBalance(false);
  renderStats();
  renderBonus();
  refreshBetPickers();

  // 배지 표시: 게임(리더보드) 모드 > 테스트 모드 > 일반 미니앱
  if (GAME) {
    const lb = document.getElementById('lb-badge');
    if (lb) lb.classList.remove('hidden');
    submitScore(); // 접속 시 현재 최고 잔액을 한 번 반영
  } else if (TEST_MODE) {
    const tb = document.getElementById('test-badge');
    if (tb) tb.classList.remove('hidden');
  } else {
    // 텔레그램 미니앱으로 열리면 클라우드 저장 안내만 표시 (이름 등 개인정보는 표시하지 않음)
    try {
      if (TG && TG.initData) {
        document.getElementById('user-badge').classList.remove('hidden');
      }
    } catch (e) {}
  }
})();
