/* ═══════════ 슬롯머신 ═══════════ */
(() => {
  const SYMBOLS = [
    { s: '🍒', w: 6, pay: 3 },
    { s: '🍋', w: 5, pay: 4 },
    { s: '🍇', w: 4, pay: 6 },
    { s: '🔔', w: 3, pay: 12 },
    { s: '💎', w: 2, pay: 25 },
    { s: '7️⃣', w: 1, pay: 77 },
  ];
  const TOTAL_W = SYMBOLS.reduce((a, x) => a + x.w, 0);

  function draw() {
    let r = Math.random() * TOTAL_W;
    for (const x of SYMBOLS) { r -= x.w; if (r < 0) return x; }
    return SYMBOLS[0];
  }

  const picker = makeBetPicker('bet-slots');
  const reels = [0, 1, 2].map((i) => document.getElementById('reel-' + i));
  const msg = document.getElementById('slots-msg');
  const btn = document.getElementById('slots-spin');
  let spinning = false;

  btn.addEventListener('click', async () => {
    if (spinning) return;
    const bet = picker.get();
    if (bet < 100) { showToast('포인트가 부족합니다 😥 (최소 100P)', 'bad'); return; }

    spinning = true;
    navLock = true;
    btn.disabled = true;
    haptic.tap();
    setPoints(-bet);
    msg.textContent = '스핀 중…';

    const result = [draw(), draw(), draw()];
    const timers = reels.map((el) =>
      setInterval(() => { el.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)].s; }, 70)
    );
    for (let i = 0; i < 3; i++) {
      await sleep(500 + i * 350);
      clearInterval(timers[i]);
      reels[i].textContent = result[i].s;
      reels[i].classList.add('bump');
      setTimeout(() => reels[i].classList.remove('bump'), 320);
    }

    const [a, b, c] = result.map((x) => x.s);
    let ret = 0;
    if (a === b && b === c) {
      ret = bet * result[0].pay;
      msg.innerHTML = `<span class="good">잭팟! ${a} ${b} ${c} — ×${result[0].pay}  +${fmt(ret)}P 🎉</span>`;
    } else if (a === b || b === c || a === c) {
      ret = Math.round(bet * 1.5);
      msg.innerHTML = `<span class="good">한 쌍! ×1.5  +${fmt(ret)}P</span>`;
    } else {
      msg.innerHTML = `<span class="bad">꽝… 다시 도전! 💪</span>`;
    }

    if (ret > 0) { setPoints(ret); haptic.win(); } else { haptic.lose(); }
    recordResult(ret - bet);

    spinning = false;
    navLock = false;
    btn.disabled = false;
  });
})();
