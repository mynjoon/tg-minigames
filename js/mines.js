/* ═══════════ 마인즈 (5×5, 지뢰 피하기) ═══════════ */
(() => {
  const SIZE = 25;

  const grid = document.getElementById('mn-grid');
  const msg = document.getElementById('mn-msg');
  const runEl = document.getElementById('mn-run');
  const multEl = document.getElementById('mn-mult');
  const potEl = document.getElementById('mn-pot');
  const betArea = document.getElementById('mn-bet-area');
  const btnStart = document.getElementById('mn-start');
  const btnCashout = document.getElementById('mn-cashout');
  const picker = makeBetPicker('bet-mines');

  let mineCount = 3;
  document.querySelectorAll('#mn-counts .side').forEach((b) =>
    b.addEventListener('click', () => {
      if (active) return;
      haptic.tap();
      document.querySelectorAll('#mn-counts .side').forEach((x) => x.classList.remove('sel'));
      b.classList.add('sel');
      mineCount = parseInt(b.dataset.m, 10);
    })
  );

  let tiles = [];
  function buildGrid() {
    grid.innerHTML = '';
    tiles = [];
    for (let i = 0; i < SIZE; i++) {
      const t = document.createElement('button');
      t.className = 'mn-tile';
      t.disabled = true;
      t.addEventListener('click', () => reveal(i));
      grid.appendChild(t);
      tiles.push(t);
    }
  }
  buildGrid();

  let active = false, bet = 0, mult = 1, safeOpened = 0;
  let mines = new Set(), opened = new Set();

  function renderRun() {
    multEl.textContent = mult.toFixed(2);
    potEl.textContent = fmt(Math.round(bet * mult));
    btnCashout.disabled = safeOpened === 0;
  }

  function toIdle() {
    active = false;
    navLock = false;
    tiles.forEach((t) => (t.disabled = true));
    runEl.classList.add('hidden');
    btnCashout.classList.add('hidden');
    betArea.classList.remove('hidden');
    picker.refresh();
  }

  btnStart.addEventListener('click', () => {
    if (active) return;
    bet = picker.get();
    if (bet < 100) { showToast('포인트가 부족합니다 😥 (최소 100P)', 'bad'); return; }
    haptic.tap();
    setPoints(-bet);
    mult = 1;
    safeOpened = 0;
    opened = new Set();
    mines = new Set();
    while (mines.size < mineCount) mines.add(Math.floor(Math.random() * SIZE));
    active = true;
    navLock = true;
    buildGrid();
    tiles.forEach((t) => (t.disabled = false));
    betArea.classList.add('hidden');
    runEl.classList.remove('hidden');
    btnCashout.classList.remove('hidden');
    msg.textContent = `지뢰 ${mineCount}개 — 타일을 여세요!`;
    renderRun();
  });

  function reveal(i) {
    if (!active || opened.has(i)) return;
    opened.add(i);
    const t = tiles[i];
    if (mines.has(i)) {
      // 지뢰! 전부 공개하고 종료
      haptic.lose();
      tiles.forEach((x, j) => {
        x.disabled = true;
        if (mines.has(j)) { x.classList.add('boom'); x.textContent = '💣'; }
      });
      msg.innerHTML = `<span class="bad">펑! 💥 ${fmt(bet)}P 잃음 😢</span>`;
      recordResult(-bet);
      setTimeout(toIdle, 1400);
      active = false;
      navLock = false;
      return;
    }
    haptic.tap();
    t.classList.add('safe');
    t.textContent = '💎';
    t.disabled = true;
    // 공정 배당 × 0.97: 남은 타일 대비 안전 타일 비율의 역수를 누적
    const remaining = SIZE - safeOpened;
    const safeLeft = remaining - mines.size;
    mult = mult * (0.97 * remaining / safeLeft);
    mult = Math.round(mult * 100) / 100;
    safeOpened += 1;
    msg.textContent = `💎 ${safeOpened}개 발견! 계속? 아니면 획득?`;
    renderRun();
    if (safeOpened === SIZE - mines.size) cashout(); // 모두 열면 자동 획득
  }

  function cashout() {
    if (!active || safeOpened === 0) return;
    const ret = Math.round(bet * mult);
    setPoints(ret);
    recordResult(ret - bet);
    haptic.win();
    msg.innerHTML = `<span class="good">×${mult.toFixed(2)} — +${fmt(ret)}P 획득! 🎉</span>`;
    showToast(`💰 +${fmt(ret)}P 획득!`, 'good');
    // 지뢰 위치 공개
    tiles.forEach((x, j) => {
      x.disabled = true;
      if (mines.has(j) && !x.textContent) { x.textContent = '💣'; }
    });
    active = false;
    navLock = false;
    setTimeout(toIdle, 1200);
  }

  btnCashout.addEventListener('click', cashout);
})();
