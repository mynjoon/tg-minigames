/* ═══════════ 다이스 (식보 라이트, 주사위 3개) ═══════════ */
(() => {
  const FACES = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

  const dice = [0, 1, 2].map((i) => document.getElementById('die-' + i));
  const sumEl = document.getElementById('dice-sum');
  const msg = document.getElementById('dc-msg');
  const btn = document.getElementById('dc-roll');
  const picker = makeBetPicker('bet-dice');
  const getSide = wireSides(['dc-sides-1', 'dc-sides-2']);

  let rolling = false;

  function judge(side, values) {
    const sum = values[0] + values[1] + values[2];
    const isTriple = values[0] === values[1] && values[1] === values[2];
    switch (side) {
      case 'big':    return !isTriple && sum >= 11 && sum <= 17 ? 1.95 : 0;
      case 'small':  return !isTriple && sum >= 4 && sum <= 10 ? 1.95 : 0;
      case 'odd':    return !isTriple && sum % 2 === 1 ? 1.95 : 0;
      case 'even':   return !isTriple && sum % 2 === 0 ? 1.95 : 0;
      case 'triple': return isTriple ? 33 : 0;
    }
    return 0;
  }

  btn.addEventListener('click', async () => {
    if (rolling) return;
    const bet = picker.get();
    if (bet < 100) { showToast('포인트가 부족합니다 😥 (최소 100P)', 'bad'); return; }
    const side = getSide();
    rolling = true;
    navLock = true;
    btn.disabled = true;
    haptic.tap();
    setPoints(-bet);
    msg.textContent = '주사위를 굴립니다…';
    sumEl.textContent = '합 ?';
    dice.forEach((d) => d.classList.add('rolling'));

    const timers = dice.map((d) =>
      setInterval(() => { d.textContent = FACES[Math.floor(Math.random() * 6)]; }, 80)
    );
    const values = [0, 1, 2].map(() => 1 + Math.floor(Math.random() * 6));
    for (let i = 0; i < 3; i++) {
      await sleep(450 + i * 300);
      clearInterval(timers[i]);
      dice[i].classList.remove('rolling');
      dice[i].textContent = FACES[values[i] - 1];
    }

    const sum = values[0] + values[1] + values[2];
    const isTriple = values[0] === values[1] && values[1] === values[2];
    sumEl.textContent = '합 ' + sum + (isTriple ? ' 🔥트리플!' : '');

    const mult = judge(side, values);
    const ret = Math.round(bet * mult);
    if (ret > 0) {
      setPoints(ret);
      haptic.win();
      msg.innerHTML = `<span class="good">적중! 🎉 ×${mult}  +${fmt(ret)}P</span>`;
    } else {
      haptic.lose();
      msg.innerHTML = `<span class="bad">빗나감… 합 ${sum}${isTriple ? ' (트리플)' : ''} 😢</span>`;
    }
    recordResult(ret - bet);

    rolling = false;
    navLock = false;
    btn.disabled = false;
  });
})();
