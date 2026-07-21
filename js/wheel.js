/* ═══════════ 럭키휠 (16칸 배수 휠) ═══════════ */
(() => {
  // 16칸 · 평균 배수 0.95 (칸은 균등 확률)
  const SEGS = [0, 0.3, 1, 0, 0.5, 0.3, 0, 1, 10, 0, 0.3, 1, 0, 0.5, 0.3, 0];
  const N = SEGS.length;
  const SEG_ANGLE = 360 / N;

  const COLORS = { 0: '#2a3355', 0.3: '#5b8def', 0.5: '#3f9e6e', 1: '#d9a52f', 10: '#e5484d' };

  const wheelEl = document.getElementById('wheel');
  const msg = document.getElementById('wh-msg');
  const btn = document.getElementById('wh-spin');
  const picker = makeBetPicker('bet-wheel');

  // 휠 배경(원뿔 그라데이션) + 라벨 배치
  function buildWheel() {
    const stops = SEGS.map((v, i) => {
      const c = COLORS[v] || '#2a3355';
      return `${c} ${i * SEG_ANGLE}deg ${(i + 1) * SEG_ANGLE}deg`;
    });
    wheelEl.style.background = `conic-gradient(${stops.join(',')})`;
    SEGS.forEach((v, i) => {
      const label = document.createElement('span');
      label.className = 'wheel-label';
      label.textContent = v === 0 ? '꽝' : '×' + v;
      const angle = i * SEG_ANGLE + SEG_ANGLE / 2;
      label.style.transform = `rotate(${angle - 90}deg) translateX(86px) rotate(90deg) translate(-50%,-50%)`;
      wheelEl.appendChild(label);
    });
  }
  buildWheel();

  let spinning = false;
  let baseRotation = 0;

  btn.addEventListener('click', async () => {
    if (spinning) return;
    const bet = picker.get();
    if (bet < 100) { showToast('포인트가 부족합니다 😥 (최소 100P)', 'bad'); return; }
    spinning = true;
    navLock = true;
    btn.disabled = true;
    haptic.tap();
    setPoints(-bet);
    msg.textContent = '휠이 돌아갑니다…';

    const idx = Math.floor(Math.random() * N);
    // 선택 칸의 중앙이 상단 포인터(12시)에 오도록 회전
    const target = 360 * 5 + (360 - (idx * SEG_ANGLE + SEG_ANGLE / 2));
    baseRotation += target - (baseRotation % 360);
    wheelEl.style.transform = `rotate(${baseRotation}deg)`;
    await sleep(4200);

    const mult = SEGS[idx];
    const ret = Math.round(bet * mult);
    if (ret > 0) {
      setPoints(ret);
      haptic.win();
      msg.innerHTML = `<span class="good">×${mult} 당첨! 🎉 +${fmt(ret)}P</span>`;
    } else {
      haptic.lose();
      msg.innerHTML = `<span class="bad">꽝… 다시 도전! 💪</span>`;
    }
    recordResult(ret - bet);

    spinning = false;
    navLock = false;
    btn.disabled = false;
  });
})();
