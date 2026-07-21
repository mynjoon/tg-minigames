/* ═══════════ 바카라 (정식 드로잉 룰) ═══════════ */
(() => {
  const SUITS = ['♠', '♥', '♦', '♣'];
  const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  function newDeck() {
    const d = [];
    for (const suit of SUITS)
      for (let i = 0; i < 13; i++)
        d.push({ r: RANKS[i], v: i + 1 <= 9 ? i + 1 : 0, suit });
    for (let i = d.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [d[i], d[j]] = [d[j], d[i]];
    }
    return d;
  }

  const total = (hand) => hand.reduce((a, c) => a + c.v, 0) % 10;

  function cardEl(card) {
    const el = document.createElement('div');
    el.className = 'card' + (card.suit === '♥' || card.suit === '♦' ? ' red' : '');
    el.innerHTML = `<span class="cr">${card.r}</span><span class="cs">${card.suit}</span>`;
    return el;
  }

  const bankerBox = document.getElementById('bc-banker-cards');
  const playerBox = document.getElementById('bc-player-cards');
  const bankerVal = document.getElementById('bc-banker-val');
  const playerVal = document.getElementById('bc-player-val');
  const msg = document.getElementById('bc-msg');
  const btnDeal = document.getElementById('bc-deal');
  const picker = makeBetPicker('bet-bc');
  const getSide = wireSides(['bc-sides']);

  let busy = false;

  function render(player, banker) {
    playerBox.innerHTML = '';
    bankerBox.innerHTML = '';
    player.forEach((c) => playerBox.appendChild(cardEl(c)));
    banker.forEach((c) => bankerBox.appendChild(cardEl(c)));
    playerVal.textContent = total(player);
    bankerVal.textContent = total(banker);
  }

  btnDeal.addEventListener('click', async () => {
    if (busy) return;
    const bet = picker.get();
    if (bet < 100) { showToast('포인트가 부족합니다 😥 (최소 100P)', 'bad'); return; }
    const side = getSide();
    busy = true;
    navLock = true;
    btnDeal.disabled = true;
    haptic.tap();
    setPoints(-bet);

    const deck = newDeck();
    const player = [deck.pop(), deck.pop()];
    const banker = [deck.pop(), deck.pop()];
    msg.textContent = '딜 중…';
    render(player, banker);
    await sleep(700);

    const pT = total(player), bT = total(banker);
    // 내추럴(8·9)이 아니면 정식 드로잉 룰 진행
    if (pT < 8 && bT < 8) {
      let third = null;
      if (total(player) <= 5) {
        third = deck.pop();
        player.push(third);
        render(player, banker);
        await sleep(600);
      }
      const bt = total(banker);
      let bankerDraws;
      if (third === null) {
        bankerDraws = bt <= 5;
      } else {
        const v = third.v;
        if (bt <= 2) bankerDraws = true;
        else if (bt === 3) bankerDraws = v !== 8;
        else if (bt === 4) bankerDraws = v >= 2 && v <= 7;
        else if (bt === 5) bankerDraws = v >= 4 && v <= 7;
        else if (bt === 6) bankerDraws = v >= 6 && v <= 7;
        else bankerDraws = false;
      }
      if (bankerDraws) {
        banker.push(deck.pop());
        render(player, banker);
        await sleep(600);
      }
    }

    const p = total(player), b = total(banker);
    const winner = p > b ? 'player' : b > p ? 'banker' : 'tie';
    const label = winner === 'player' ? '플레이어 승' : winner === 'banker' ? '뱅커 승' : '타이';

    let ret = 0;
    if (winner === 'tie') {
      if (side === 'tie') ret = bet * 9;
      else ret = bet; // 타이 시 플레이어/뱅커 베팅 반환
    } else if (side === winner) {
      ret = winner === 'player' ? bet * 2 : Math.round(bet * 1.95);
    }

    if (ret > bet) {
      setPoints(ret);
      haptic.win();
      msg.innerHTML = `<span class="good">${label} (${p}:${b}) — 적중! 🎉 +${fmt(ret)}P</span>`;
    } else if (ret === bet) {
      setPoints(ret);
      msg.innerHTML = `<span class="good">${label} (${p}:${b}) — 베팅 반환</span>`;
    } else {
      haptic.lose();
      msg.innerHTML = `<span class="bad">${label} (${p}:${b}) — 아쉽네요 😢</span>`;
    }
    recordResult(ret - bet);

    busy = false;
    navLock = false;
    btnDeal.disabled = false;
  });
})();
