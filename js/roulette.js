/* ═══════════ 룰렛 (유러피언 0–36) ═══════════ */
(() => {
  const RED = new Set([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]);
  const SPOTS = [
    { id: 'red',   label: '🔴 빨강 ×2',   mult: 2, test: (n) => RED.has(n) },
    { id: 'black', label: '⚫ 검정 ×2',   mult: 2, test: (n) => n > 0 && !RED.has(n) },
    { id: 'odd',   label: '홀수 ×2',      mult: 2, test: (n) => n > 0 && n % 2 === 1 },
    { id: 'even',  label: '짝수 ×2',      mult: 2, test: (n) => n > 0 && n % 2 === 0 },
    { id: 'low',   label: '1–18 ×2',     mult: 2, test: (n) => n >= 1 && n <= 18 },
    { id: 'high',  label: '19–36 ×2',    mult: 2, test: (n) => n >= 19 },
    { id: 'd1',    label: '1–12 ×3',     mult: 3, test: (n) => n >= 1 && n <= 12 },
    { id: 'd2',    label: '13–24 ×3',    mult: 3, test: (n) => n >= 13 && n <= 24 },
    { id: 'd3',    label: '25–36 ×3',    mult: 3, test: (n) => n >= 25 && n <= 36 },
  ];
  const CHIP_SIZES = [100, 500, 1000, 5000];

  const display = document.getElementById('ru-number');
  const msg = document.getElementById('ru-msg');
  const chipsEl = document.getElementById('ru-chips');
  const boardEl = document.getElementById('ru-board');
  const numInput = document.getElementById('ru-num-input');
  const btnNumBet = document.getElementById('ru-num-bet');
  const totalEl = document.getElementById('ru-total');
  const btnClear = document.getElementById('ru-clear');
  const btnSpin = document.getElementById('ru-spin');

  let chip = 100;
  let bets = {};      // spotId → 금액
  let numBets = {};   // 번호 → 금액
  let spinning = false;

  function total() {
    let t = 0;
    for (const k in bets) t += bets[k];
    for (const k in numBets) t += numBets[k];
    return t;
  }

  function colorClass(n) {
    if (n === 0) return 'n-green';
    return RED.has(n) ? 'n-red' : 'n-black';
  }

  function renderChips() {
    chipsEl.innerHTML = '';
    CHIP_SIZES.forEach((v) => {
      const b = document.createElement('button');
      b.className = 'chip' + (chip === v ? ' sel' : '');
      b.textContent = v >= 1000 ? v / 1000 + 'K' : String(v);
      b.addEventListener('click', () => { haptic.tap(); chip = v; renderChips(); });
      chipsEl.appendChild(b);
    });
  }

  function renderBoard() {
    boardEl.innerHTML = '';
    SPOTS.forEach((spot) => {
      const b = document.createElement('button');
      b.className = 'ru-spot' + (bets[spot.id] ? ' has-bet' : '');
      b.innerHTML = `${spot.label}<span class="amt">${bets[spot.id] ? fmt(bets[spot.id]) + 'P' : ''}</span>`;
      b.addEventListener('click', () => {
        if (spinning) return;
        if (total() + chip > S.points) { showToast('포인트가 부족합니다 😥', 'bad'); return; }
        haptic.tap();
        bets[spot.id] = (bets[spot.id] || 0) + chip;
        renderBoard();
      });
      boardEl.appendChild(b);
    });
    totalEl.textContent = fmt(total());
  }

  btnNumBet.addEventListener('click', () => {
    if (spinning) return;
    const n = parseInt(numInput.value, 10);
    if (isNaN(n) || n < 0 || n > 36) { showToast('0~36 사이 번호를 입력하세요', 'bad'); return; }
    if (total() + chip > S.points) { showToast('포인트가 부족합니다 😥', 'bad'); return; }
    haptic.tap();
    numBets[n] = (numBets[n] || 0) + chip;
    renderBoard();
    msg.innerHTML = '번호 베팅: ' + Object.keys(numBets).map((k) => `<b>${k}</b>(${fmt(numBets[k])}P)`).join(', ');
  });

  btnClear.addEventListener('click', () => {
    if (spinning) return;
    haptic.tap();
    bets = {}; numBets = {};
    renderBoard();
    msg.textContent = '칩을 고르고 원하는 곳에 베팅!';
  });

  btnSpin.addEventListener('click', async () => {
    if (spinning) return;
    const t = total();
    if (t < 100) { showToast('최소 100P 이상 베팅하세요', 'bad'); return; }
    if (t > S.points) { showToast('포인트가 부족합니다 😥', 'bad'); return; }

    spinning = true;
    navLock = true;
    btnSpin.disabled = true;
    haptic.tap();
    setPoints(-t);
    msg.textContent = '스핀 중…';

    // 감속하며 번호가 돌아가는 연출
    for (let i = 0; i < 22; i++) {
      const r = Math.floor(Math.random() * 37);
      display.textContent = String(r);
      display.className = colorClass(r);
      await sleep(45 + i * 14);
    }
    const n = Math.floor(Math.random() * 37);
    display.textContent = String(n);
    display.className = colorClass(n);

    let ret = 0;
    SPOTS.forEach((spot) => { if (bets[spot.id] && spot.test(n)) ret += bets[spot.id] * spot.mult; });
    if (numBets[n]) ret += numBets[n] * 36;

    const colorName = n === 0 ? '🟢' : RED.has(n) ? '🔴' : '⚫';
    if (ret > 0) {
      setPoints(ret);
      haptic.win();
      msg.innerHTML = `<span class="good">${colorName} ${n}! 적중 🎉 +${fmt(ret)}P</span>`;
    } else {
      haptic.lose();
      msg.innerHTML = `<span class="bad">${colorName} ${n}… 아쉽네요 😢</span>`;
    }
    recordResult(ret - t);

    bets = {}; numBets = {};
    numInput.value = '';
    renderBoard();
    spinning = false;
    navLock = false;
    btnSpin.disabled = false;
  });

  renderChips();
  renderBoard();
})();
