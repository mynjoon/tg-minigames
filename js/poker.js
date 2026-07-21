/* ═══════════ 비디오 포커 (Jacks or Better) ═══════════ */
(() => {
  const SUITS = ['♠', '♥', '♦', '♣'];
  const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  function newDeck() {
    const d = [];
    for (const suit of SUITS)
      for (let i = 0; i < 13; i++)
        d.push({ r: RANKS[i], n: i + 2, suit }); // n: 2~14 (A=14)
    for (let i = d.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [d[i], d[j]] = [d[j], d[i]];
    }
    return d;
  }

  // 족보 평가 → [배수, 이름]
  function evaluate(hand) {
    const ns = hand.map((c) => c.n).sort((a, b) => a - b);
    const flush = hand.every((c) => c.suit === hand[0].suit);
    const counts = {};
    ns.forEach((n) => (counts[n] = (counts[n] || 0) + 1));
    const groups = Object.values(counts).sort((a, b) => b - a);
    const uniq = Object.keys(counts).map(Number).sort((a, b) => a - b);
    let straight = false, royal = false;
    if (uniq.length === 5) {
      if (uniq[4] - uniq[0] === 4) straight = true;
      // A-2-3-4-5 (에이스 로우)
      if (uniq.join(',') === '2,3,4,5,14') straight = true;
      if (uniq.join(',') === '10,11,12,13,14') { straight = true; royal = true; }
    }
    if (straight && flush && royal) return [250, '로열 플러시'];
    if (straight && flush) return [50, '스트레이트 플러시'];
    if (groups[0] === 4) return [25, '포카드'];
    if (groups[0] === 3 && groups[1] === 2) return [9, '풀하우스'];
    if (flush) return [6, '플러시'];
    if (straight) return [4, '스트레이트'];
    if (groups[0] === 3) return [3, '트리플'];
    if (groups[0] === 2 && groups[1] === 2) return [2, '투페어'];
    if (groups[0] === 2) {
      const pairN = Number(Object.keys(counts).find((n) => counts[n] === 2));
      if (pairN >= 11) return [1, 'J 이상 원페어'];
    }
    return [0, '노페어'];
  }

  const box = document.getElementById('pk-cards');
  const msg = document.getElementById('pk-msg');
  const betArea = document.getElementById('pk-bet-area');
  const btnDeal = document.getElementById('pk-deal');
  const btnDraw = document.getElementById('pk-draw');
  const picker = makeBetPicker('bet-poker');

  let deck = [], hand = [], held = [];
  let bet = 0, inRound = false, busy = false;

  function render(clickable) {
    box.innerHTML = '';
    hand.forEach((c, i) => {
      const el = document.createElement('div');
      el.className =
        'card' + (c.suit === '♥' || c.suit === '♦' ? ' red' : '') + (held[i] ? ' held' : '');
      el.innerHTML = `<span class="cr">${c.r}</span><span class="cs">${c.suit}</span>`;
      if (clickable) {
        el.addEventListener('click', () => {
          if (!inRound || busy) return;
          haptic.tap();
          held[i] = !held[i];
          render(true);
        });
      }
      box.appendChild(el);
    });
  }

  btnDeal.addEventListener('click', () => {
    if (inRound || busy) return;
    bet = picker.get();
    if (bet < 100) { showToast('포인트가 부족합니다 😥 (최소 100P)', 'bad'); return; }
    haptic.tap();
    setPoints(-bet);
    deck = newDeck();
    hand = [deck.pop(), deck.pop(), deck.pop(), deck.pop(), deck.pop()];
    held = [false, false, false, false, false];
    inRound = true;
    navLock = true;
    betArea.classList.add('hidden');
    btnDraw.classList.remove('hidden');
    msg.textContent = '남길 카드를 눌러 홀드 → 교체하기';
    render(true);
  });

  btnDraw.addEventListener('click', async () => {
    if (!inRound || busy) return;
    busy = true;
    haptic.tap();
    hand = hand.map((c, i) => (held[i] ? c : deck.pop()));
    render(false);
    await sleep(400);

    const [mult, name] = evaluate(hand);
    const ret = bet * mult;
    if (ret > bet) {
      setPoints(ret);
      haptic.win();
      msg.innerHTML = `<span class="good">${name}! 🎉 ×${mult}  +${fmt(ret)}P</span>`;
    } else if (ret === bet) {
      setPoints(ret);
      msg.innerHTML = `<span class="good">${name} — 베팅 반환</span>`;
    } else {
      haptic.lose();
      msg.innerHTML = `<span class="bad">${name}… 😢</span>`;
    }
    recordResult(ret - bet);

    inRound = false;
    busy = false;
    navLock = false;
    btnDraw.classList.add('hidden');
    betArea.classList.remove('hidden');
    picker.refresh();
  });
})();
