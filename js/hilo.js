/* ═══════════ 하이로우 (A=1 ~ K=13) ═══════════ */
(() => {
  const RANK_LABEL = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const cardEl = document.getElementById('hilo-card');
  const rankEl = document.getElementById('hilo-rank');
  const msg = document.getElementById('hilo-msg');
  const runEl = document.getElementById('hilo-run');
  const multEl = document.getElementById('hilo-mult');
  const potEl = document.getElementById('hilo-pot');
  const betArea = document.getElementById('hilo-bet-area');
  const actions = document.getElementById('hilo-actions');
  const btnHigh = document.getElementById('hilo-high');
  const btnLow = document.getElementById('hilo-low');
  const highOdds = document.getElementById('hilo-high-odds');
  const lowOdds = document.getElementById('hilo-low-odds');
  const btnCashout = document.getElementById('hilo-cashout');
  const btnStart = document.getElementById('hilo-start');
  const picker = makeBetPicker('bet-hilo');

  let cur = 0, mult = 1, bet = 0;
  let active = false, busy = false;

  function drawCard() { return 1 + Math.floor(Math.random() * 13); }

  // 성공 시 곱해지는 배율: 공정 배당(12/경우의 수) × 0.95
  function oddsFor(dir) {
    const cnt = dir === 'high' ? 13 - cur : cur - 1;
    if (cnt <= 0) return 0;
    return Math.max(1.01, Math.round((0.95 * 12 / cnt) * 100) / 100);
  }

  function showCard(value, flip) {
    rankEl.textContent = value ? RANK_LABEL[value - 1] : '?';
    if (flip) {
      cardEl.classList.remove('flip');
      void cardEl.offsetWidth;
      cardEl.classList.add('flip');
    }
  }

  function renderRun() {
    multEl.textContent = mult.toFixed(2);
    potEl.textContent = fmt(Math.round(bet * mult));
    const ho = oddsFor('high');
    const lo = oddsFor('low');
    btnHigh.disabled = ho === 0;
    btnLow.disabled = lo === 0;
    highOdds.textContent = ho ? '×' + ho.toFixed(2) : '불가';
    lowOdds.textContent = lo ? '×' + lo.toFixed(2) : '불가';
  }

  function toIdle() {
    active = false;
    busy = false;
    navLock = false;
    actions.classList.add('hidden');
    btnCashout.classList.add('hidden');
    runEl.classList.add('hidden');
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
    cur = drawCard();
    active = true;
    navLock = true;
    betArea.classList.add('hidden');
    actions.classList.remove('hidden');
    btnCashout.classList.remove('hidden');
    runEl.classList.remove('hidden');
    showCard(cur, true);
    msg.textContent = '다음 카드는 높을까요, 낮을까요?';
    renderRun();
  });

  async function guess(dir) {
    if (!active || busy) return;
    busy = true;
    haptic.tap();
    const gain = oddsFor(dir);
    const next = drawCard();

    showCard(null, true);
    await sleep(220);
    showCard(next, false);

    if (next === cur) {
      msg.textContent = `무승부! 같은 ${RANK_LABEL[next - 1]} — 한 번 더`;
      busy = false;
      return;
    }

    const win = dir === 'high' ? next > cur : next < cur;
    if (win) {
      mult = Math.round(mult * gain * 100) / 100;
      cur = next;
      msg.innerHTML = `<span class="good">성공! 배율 ×${mult.toFixed(2)} — 계속 갈까요?</span>`;
      haptic.win();
      renderRun();
      busy = false;
    } else {
      msg.innerHTML = `<span class="bad">실패… ${RANK_LABEL[next - 1]} 등장, ${fmt(bet)}P 잃음 😢</span>`;
      haptic.lose();
      recordResult(-bet);
      await sleep(400);
      toIdle();
    }
  }

  btnHigh.addEventListener('click', () => guess('high'));
  btnLow.addEventListener('click', () => guess('low'));

  btnCashout.addEventListener('click', () => {
    if (!active || busy) return;
    const ret = Math.round(bet * mult);
    setPoints(ret);
    recordResult(ret - bet);
    haptic.win();
    showToast(`💰 +${fmt(ret)}P 획득!`, 'good');
    msg.innerHTML = `<span class="good">×${mult.toFixed(2)} 배율로 ${fmt(ret)}P 획득! 🎉</span>`;
    toIdle();
  });
})();
