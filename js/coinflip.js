/* ═══════════ 코인플립 ═══════════ */
(() => {
  const coin = document.getElementById('coin');
  const msg = document.getElementById('cf-msg');
  const btn = document.getElementById('cf-flip');
  const picker = makeBetPicker('bet-coin');
  const getSide = wireSides(['cf-sides']);

  let flipping = false;

  btn.addEventListener('click', async () => {
    if (flipping) return;
    const bet = picker.get();
    if (bet < 100) { showToast('포인트가 부족합니다 😥 (최소 100P)', 'bad'); return; }
    const side = getSide();
    flipping = true;
    navLock = true;
    btn.disabled = true;
    haptic.tap();
    setPoints(-bet);
    msg.textContent = '동전이 날아갑니다…';

    coin.classList.remove('flipping');
    void coin.offsetWidth;
    coin.classList.add('flipping');
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    await sleep(950);
    coin.textContent = result === 'heads' ? '👑' : '⭐';

    const label = result === 'heads' ? '👑 앞면' : '⭐ 뒷면';
    if (side === result) {
      const ret = Math.round(bet * 1.95);
      setPoints(ret);
      haptic.win();
      msg.innerHTML = `<span class="good">${label}! 적중 🎉 +${fmt(ret)}P</span>`;
      recordResult(ret - bet);
    } else {
      haptic.lose();
      msg.innerHTML = `<span class="bad">${label}… 아쉽네요 😢</span>`;
      recordResult(-bet);
    }

    flipping = false;
    navLock = false;
    btn.disabled = false;
  });
})();
