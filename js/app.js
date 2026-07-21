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

/* ── 지갑/통계 상태 ── */
const SAVE_KEY = 'casino_v1';
const DEFAULT_STATE = { points: 10000, lastBonus: '', rescueAt: 0, stats: { plays: 0, wins: 0, best: 0 } };
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
  save();
  renderBalance(delta > 0);
  refreshBetPickers();
  renderBonus();
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
  renderBalance(false);
  renderStats();
  renderBonus();
  refreshBetPickers();

  // 텔레그램 미니앱으로 열리면 클라우드 저장 안내만 표시 (이름 등 개인정보는 표시하지 않음)
  try {
    if (TG && TG.initData) {
      document.getElementById('user-badge').classList.remove('hidden');
    }
  } catch (e) {}
})();
