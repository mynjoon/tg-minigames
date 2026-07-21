/* ═══════════ 블랙잭 ═══════════ */
(() => {
  const SUITS = ['♠', '♥', '♦', '♣'];
  const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  function newDeck() {
    const d = [];
    for (const suit of SUITS)
      for (let i = 0; i < 13; i++)
        d.push({ r: RANKS[i], v: Math.min(i + 1, 10), suit });
    for (let i = d.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [d[i], d[j]] = [d[j], d[i]];
    }
    return d;
  }

  function handValue(hand) {
    let total = hand.reduce((a, c) => a + c.v, 0);
    let aces = hand.filter((c) => c.r === 'A').length;
    while (aces > 0 && total + 10 <= 21) { total += 10; aces--; }
    return total;
  }

  function cardEl(card, hidden) {
    const el = document.createElement('div');
    if (hidden) { el.className = 'card back'; el.textContent = '?'; return el; }
    el.className = 'card' + (card.suit === '♥' || card.suit === '♦' ? ' red' : '');
    el.innerHTML = `<span class="cr">${card.r}</span><span class="cs">${card.suit}</span>`;
    return el;
  }

  const dealerBox = document.getElementById('bj-dealer-cards');
  const playerBox = document.getElementById('bj-player-cards');
  const dealerVal = document.getElementById('bj-dealer-val');
  const playerVal = document.getElementById('bj-player-val');
  const msg = document.getElementById('bj-msg');
  const betArea = document.getElementById('bj-bet-area');
  const actions = document.getElementById('bj-actions');
  const btnDeal = document.getElementById('bj-deal');
  const btnHit = document.getElementById('bj-hit');
  const btnStand = document.getElementById('bj-stand');
  const btnDouble = document.getElementById('bj-double');
  const picker = makeBetPicker('bet-bj');

  let deck = [], player = [], dealer = [];
  let bet = 0, staked = 0;
  let busy = false;

  function renderHands(hideHole) {
    dealerBox.innerHTML = '';
    playerBox.innerHTML = '';
    dealer.forEach((c, i) => dealerBox.appendChild(cardEl(c, hideHole && i === 1)));
    player.forEach((c) => playerBox.appendChild(cardEl(c)));
    dealerVal.textContent = hideHole ? handValue([dealer[0]]) + '+?' : handValue(dealer);
    playerVal.textContent = handValue(player);
  }

  function toIdle() {
    navLock = false;
    busy = false;
    actions.classList.add('hidden');
    betArea.classList.remove('hidden');
    picker.refresh();
  }

  function end(ret, html, good) {
    if (ret > 0) setPoints(ret);
    recordResult(ret - staked);
    msg.innerHTML = `<span class="${good ? 'good' : 'bad'}">${html}</span>`;
    if (good) haptic.win(); else haptic.lose();
    toIdle();
  }

  async function dealerPlay() {
    busy = true;
    btnHit.disabled = btnStand.disabled = btnDouble.disabled = true;
    renderHands(false);
    while (handValue(dealer) < 17) {
      await sleep(550);
      dealer.push(deck.pop());
      renderHands(false);
    }
    const dv = handValue(dealer);
    const pv = handValue(player);
    if (dv > 21) end(staked * 2, `딜러 버스트(${dv})! 승리 🎉 +${fmt(staked * 2)}P`, true);
    else if (pv > dv) end(staked * 2, `승리! ${pv} vs ${dv} 🎉 +${fmt(staked * 2)}P`, true);
    else if (pv < dv) end(0, `패배… ${pv} vs ${dv} 😢`, false);
    else { end(staked, `무승부 ${pv} vs ${dv} — 배팅 반환`, true); }
  }

  btnDeal.addEventListener('click', async () => {
    if (busy) return;
    bet = picker.get();
    if (bet < 100) { showToast('포인트가 부족합니다 😥 (최소 100P)', 'bad'); return; }
    haptic.tap();
    setPoints(-bet);
    staked = bet;
    navLock = true;

    deck = newDeck();
    player = [deck.pop(), deck.pop()];
    dealer = [deck.pop(), deck.pop()];
    betArea.classList.add('hidden');
    actions.classList.remove('hidden');
    btnHit.disabled = btnStand.disabled = false;
    btnDouble.disabled = S.points < bet;
    msg.textContent = '히트 / 스탠드 / 더블을 선택하세요';
    renderHands(true);

    const pBJ = handValue(player) === 21;
    const dBJ = handValue(dealer) === 21;
    if (pBJ || dBJ) {
      busy = true;
      await sleep(650);
      renderHands(false);
      if (pBJ && dBJ) end(bet, '둘 다 블랙잭! 무승부 — 배팅 반환', true);
      else if (pBJ) end(Math.round(bet * 2.5), `블랙잭! 3:2 지급 🎉 +${fmt(Math.round(bet * 2.5))}P`, true);
      else end(0, '딜러 블랙잭… 😢', false);
    }
  });

  btnHit.addEventListener('click', async () => {
    if (busy) return;
    haptic.tap();
    btnDouble.disabled = true;
    player.push(deck.pop());
    renderHands(true);
    const pv = handValue(player);
    if (pv > 21) { busy = true; await sleep(400); renderHands(false); end(0, `버스트! ${pv} 😢`, false); }
    else if (pv === 21) dealerPlay();
  });

  btnStand.addEventListener('click', () => {
    if (busy) return;
    haptic.tap();
    dealerPlay();
  });

  btnDouble.addEventListener('click', async () => {
    if (busy || S.points < bet) return;
    haptic.tap();
    setPoints(-bet);
    staked = bet * 2;
    player.push(deck.pop());
    renderHands(true);
    const pv = handValue(player);
    if (pv > 21) { busy = true; await sleep(400); renderHands(false); end(0, `더블 후 버스트! ${pv} 😢`, false); }
    else dealerPlay();
  });
})();
