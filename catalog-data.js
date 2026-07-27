/* ==========================================================================
   공일모바일 — 카탈로그 데이터 (기기 · 요금제 · 알뜰폰 · 중고 매입)
   서브페이지(devices/plans/finder/used) + 홈 알뜰폰 섹션이 공용으로 사용.

   ⚠️⚠️ CATALOG_STATUS = 'SAMPLE' — 월 납부액·매입가 등 숫자는 전부 예시다.
   사장님 정책표(단가표) 반영 후 'LIVE'로 바꾼다. 교체 전까지 각 페이지에 예시 안내 노출.
   가격 표기 원칙: 항상 "예상 범위 + 최종 조건은 매장 상담에서 확정". 확정가 단정 금지.
   시세 갱신: 사장님이 이 파일의 숫자만 바꾸면 된다 (구조 변경 금지).
   ========================================================================== */

const CATALOG_STATUS = 'SAMPLE'; // 'SAMPLE' | 'LIVE'

/* ── 매장 정보 (푸터·사이트 공개 정보 기준) ── */
const STORE = {
  name: '공일모바일',
  nameEn: '01 MOBILE',
  owner: '곽상효',
  bizNo: '847-75-00504',
  phone: '010-7932-9779',
  tel: 'tel:01079329779',
  addr: '서울특별시 성동구 마장로 305 1층',
  hours: '월–토 10:00–20:00 · 일요일 휴무',
  naverMap: 'https://naver.me/FHOAX0ay',
};

/* ── 기기 카탈로그 — 실제 취급 라인업(사이트 쇼케이스 기준) ─────────────────
   monthly  : 통신사 개통 시 예상 월 납부액(기기+요금제 합산) 범위 — ⚠️ 예시
   unlocked : 자급제 구매 시 예상 기기가 범위 — ⚠️ 예시 (null = 매장 문의)
   channels : carrier(통신사 개통) · unlocked(자급제) · used(중고 재고 취급)
   img      : assets/ 실제 제품 이미지 */
const DEVICES = [
  // ── 애플 ──
  { id: 'ip17-pro-max', brand: 'apple', name: '아이폰 17 프로 맥스', series: '아이폰 프로', year: 2025, network: '5G',
    storages: ['256GB', '512GB', '1TB'], channels: ['carrier', 'unlocked', 'used'], tags: ['flagship', 'popular', 'camera'],
    monthly: { min: 85000, max: 140000 }, unlocked: { min: 1900000, max: 2400000 }, img: 'assets/iphone-17-pro-max.png' },
  { id: 'ip17-pro', brand: 'apple', name: '아이폰 17 프로', series: '아이폰 프로', year: 2025, network: '5G',
    storages: ['256GB', '512GB'], channels: ['carrier', 'unlocked', 'used'], tags: ['flagship', 'popular'],
    monthly: { min: 78000, max: 130000 }, unlocked: { min: 1700000, max: 2100000 }, img: 'assets/iphone-17-pro.png' },
  { id: 'ip17', brand: 'apple', name: '아이폰 17', series: '아이폰', year: 2025, network: '5G',
    storages: ['256GB', '512GB'], channels: ['carrier', 'unlocked', 'used'], tags: ['flagship', 'popular', 'compact'],
    monthly: { min: 62000, max: 108000 }, unlocked: { min: 1250000, max: 1550000 }, img: 'assets/iphone-17.png' },
  { id: 'ip-air', brand: 'apple', name: '아이폰 에어', series: '아이폰', year: 2025, network: '5G',
    storages: ['256GB', '512GB'], channels: ['carrier', 'unlocked'], tags: ['design', 'slim'],
    monthly: { min: 70000, max: 118000 }, unlocked: { min: 1500000, max: 1850000 }, img: 'assets/iphone-air.png' },
  { id: 'ip17e', brand: 'apple', name: '아이폰 17e', series: '아이폰', year: 2026, network: '5G',
    storages: ['128GB', '256GB'], channels: ['carrier', 'unlocked'], tags: ['value', 'first-phone'],
    monthly: { min: 45000, max: 82000 }, unlocked: { min: 850000, max: 1050000 }, img: 'assets/iphone-17e.png' },
  // ── 삼성 플래그십 ──
  { id: 's26-ultra', brand: 'samsung', name: '갤럭시 S26 울트라', series: '갤럭시 S', year: 2026, network: '5G',
    storages: ['256GB', '512GB', '1TB'], channels: ['carrier', 'unlocked', 'used'], tags: ['flagship', 'popular', 'camera'],
    monthly: { min: 80000, max: 135000 }, unlocked: { min: 1700000, max: 2100000 }, img: 'assets/galaxy-s26-ultra.png' },
  { id: 's26-plus', brand: 'samsung', name: '갤럭시 S26+', series: '갤럭시 S', year: 2026, network: '5G',
    storages: ['256GB', '512GB'], channels: ['carrier', 'unlocked'], tags: ['flagship', 'big-screen'],
    monthly: { min: 70000, max: 118000 }, unlocked: { min: 1400000, max: 1700000 }, img: 'assets/galaxy-s26-plus.png' },
  { id: 's26', brand: 'samsung', name: '갤럭시 S26', series: '갤럭시 S', year: 2026, network: '5G',
    storages: ['256GB', '512GB'], channels: ['carrier', 'unlocked', 'used'], tags: ['flagship', 'popular', 'compact'],
    monthly: { min: 60000, max: 105000 }, unlocked: { min: 1150000, max: 1400000 }, img: 'assets/galaxy-s26.png' },
  { id: 'zfold7', brand: 'samsung', name: '갤럭시 Z 폴드7', series: '갤럭시 Z', year: 2025, network: '5G',
    storages: ['256GB', '512GB', '1TB'], channels: ['carrier', 'unlocked', 'used'], tags: ['folder', 'big-screen'],
    monthly: { min: 90000, max: 148000 }, unlocked: { min: 2100000, max: 2500000 }, img: 'assets/galaxy-zfold7.png' },
  { id: 'zflip7', brand: 'samsung', name: '갤럭시 Z 플립7', series: '갤럭시 Z', year: 2025, network: '5G',
    storages: ['256GB', '512GB'], channels: ['carrier', 'unlocked', 'used'], tags: ['folder', 'popular', 'design'],
    monthly: { min: 65000, max: 112000 }, unlocked: { min: 1250000, max: 1550000 }, img: 'assets/galaxy-zflip7.png' },
  // ── 실속 · 효도폰 ──
  { id: 'a17', brand: 'samsung', name: '갤럭시 A17', series: '갤럭시 A', year: 2025, network: '5G',
    storages: ['128GB'], channels: ['carrier', 'unlocked'], tags: ['value', 'first-phone', 'battery'],
    monthly: { min: 25000, max: 50000 }, unlocked: { min: 280000, max: 380000 }, img: 'assets/galaxy-a17.png' },
  { id: 'style-folder2', brand: 'samsung', name: '갤럭시 스타일 폴더2', series: '폴더폰', year: 2025, network: 'LTE',
    storages: ['64GB'], channels: ['carrier'], tags: ['senior', 'value'],
    monthly: { min: 18000, max: 38000 }, unlocked: null, img: 'assets/galaxy-style-folder2.png' },
  { id: 'senior-phone', brand: 'samsung', name: '효도폰 (버튼형·빅폰트)', series: '효도폰', year: 2024, network: 'LTE',
    storages: ['32GB'], channels: ['carrier'], tags: ['senior', 'value'],
    monthly: { min: 12000, max: 30000 }, unlocked: null, img: 'assets/senior-phone.png' },
];

/* ── 통신사 ── */
const CARRIERS = [
  { key: 'SKT', label: 'SK텔레콤', color: '#EA002C' },
  { key: 'KT',  label: 'KT',      color: '#E01E23' },
  { key: 'LGU', label: 'LG U+',   color: '#E6007E' },
];

/* ── 알뜰폰 공통 색 — 배지 등 알뜰폰 표시에 페이지 공통으로 사용 (초록톤) ── */
const MVNO_COLOR = '#0B7A4B';

/* ── 알뜰폰 브랜드 — TODO(사장님): 실제 취급 브랜드로 확정 ── */
const MVNO_BRANDS = [
  { key: 'seven',   label: 'SK세븐모바일', network: 'SKT망' },
  { key: 'ktm',     label: 'KT엠모바일',   network: 'KT망' },
  { key: 'umobile', label: 'U+유모바일',   network: 'LGU+망' },
  { key: 'liivm',   label: '리브모바일',   network: 'LGU+망' },
  { key: 'hello',   label: '헬로모바일',   network: 'LGU+망' },
];

/* ── 요금제 — 유형 예시명(실제 상품명 아님). 정책표 수령 후 실명·실액으로 교체 ── */
const PLANS = [
  // 통신사 5G
  { id: 'skt-5g-unlimited', type: 'carrier', operator: 'SKT', network: '5G', name: '5G 프리미엄 무제한 (예시)',
    dataGB: -1, speedAfter: null, voice: '무제한', monthly: { min: 79000, max: 125000 }, familyCombo: true, tags: ['unlimited', 'premium'] },
  { id: 'skt-5g-std', type: 'carrier', operator: 'SKT', network: '5G', name: '5G 스탠다드 (예시)',
    dataGB: 110, speedAfter: '5Mbps', voice: '무제한', monthly: { min: 59000, max: 75000 }, familyCombo: true, tags: ['heavy'] },
  { id: 'skt-5g-lite', type: 'carrier', operator: 'SKT', network: '5G', name: '5G 라이트 (예시)',
    dataGB: 12, speedAfter: '1Mbps', voice: '무제한', monthly: { min: 39000, max: 55000 }, familyCombo: true, tags: ['light'] },
  { id: 'kt-5g-unlimited', type: 'carrier', operator: 'KT', network: '5G', name: '5G 무제한 (예시)',
    dataGB: -1, speedAfter: null, voice: '무제한', monthly: { min: 80000, max: 130000 }, familyCombo: true, tags: ['unlimited', 'premium'] },
  { id: 'kt-5g-std', type: 'carrier', operator: 'KT', network: '5G', name: '5G 베이직 (예시)',
    dataGB: 110, speedAfter: '5Mbps', voice: '무제한', monthly: { min: 61000, max: 80000 }, familyCombo: true, tags: ['heavy'] },
  { id: 'kt-5g-lite', type: 'carrier', operator: 'KT', network: '5G', name: '5G 슬림 (예시)',
    dataGB: 10, speedAfter: '1Mbps', voice: '무제한', monthly: { min: 37000, max: 55000 }, familyCombo: true, tags: ['light'] },
  { id: 'lgu-5g-unlimited', type: 'carrier', operator: 'LGU', network: '5G', name: '5G 무제한 (예시)',
    dataGB: -1, speedAfter: null, voice: '무제한', monthly: { min: 78000, max: 125000 }, familyCombo: true, tags: ['unlimited', 'premium'] },
  { id: 'lgu-5g-std', type: 'carrier', operator: 'LGU', network: '5G', name: '5G 스탠다드 (예시)',
    dataGB: 100, speedAfter: '5Mbps', voice: '무제한', monthly: { min: 58000, max: 75000 }, familyCombo: true, tags: ['heavy'] },
  { id: 'lgu-5g-lite', type: 'carrier', operator: 'LGU', network: '5G', name: '5G 라이트 (예시)',
    dataGB: 14, speedAfter: '1Mbps', voice: '무제한', monthly: { min: 39000, max: 55000 }, familyCombo: true, tags: ['light'] },
  // 통신사 LTE
  { id: 'skt-lte-std', type: 'carrier', operator: 'SKT', network: 'LTE', name: 'LTE 표준 (예시)',
    dataGB: 4, speedAfter: '400Kbps', voice: '무제한', monthly: { min: 33000, max: 50000 }, familyCombo: true, tags: ['light', 'senior'] },
  { id: 'kt-lte-std', type: 'carrier', operator: 'KT', network: 'LTE', name: 'LTE 베이직 (예시)',
    dataGB: 4, speedAfter: '400Kbps', voice: '무제한', monthly: { min: 33000, max: 50000 }, familyCombo: true, tags: ['light', 'senior'] },
  // 알뜰폰
  { id: 'mvno-unlimited', type: 'mvno', operator: 'MVNO', network: '5G', name: '알뜰 5G 무제한형 (예시)',
    dataGB: -1, speedAfter: null, voice: '무제한', monthly: { min: 35000, max: 55000 }, familyCombo: false, tags: ['unlimited', 'save'] },
  { id: 'mvno-100g', type: 'mvno', operator: 'MVNO', network: '5G', name: '알뜰 5G 100GB+ (예시)',
    dataGB: 100, speedAfter: '5Mbps', voice: '무제한', monthly: { min: 25000, max: 40000 }, familyCombo: false, tags: ['heavy', 'save'] },
  { id: 'mvno-15g', type: 'mvno', operator: 'MVNO', network: 'LTE', name: '알뜰 15GB+매일 2GB (예시)',
    dataGB: 15, speedAfter: '3Mbps', voice: '무제한', monthly: { min: 12000, max: 22000 }, familyCombo: false, tags: ['mid', 'save', 'best-value'] },
  { id: 'mvno-7g', type: 'mvno', operator: 'MVNO', network: 'LTE', name: '알뜰 7GB (예시)',
    dataGB: 7, speedAfter: '1Mbps', voice: '무제한', monthly: { min: 8000, max: 15000 }, familyCombo: false, tags: ['light', 'save'] },
  { id: 'mvno-2g', type: 'mvno', operator: 'MVNO', network: 'LTE', name: '알뜰 최소형 2GB (예시)',
    dataGB: 2, speedAfter: '400Kbps', voice: '무제한', monthly: { min: 3000, max: 9000 }, familyCombo: false, tags: ['minimal', 'save', 'senior'] },
];

/* ── 중고 매입 — 등급 기준 + 모델별 예상 매입 범위 (⚠️ 전부 예시) ── */
const USED_GRADES = [
  { key: 'S', label: 'S급 (미개봉·개봉급)', desc: '미개봉 또는 사용감 없는 풀박스' },
  { key: 'A', label: 'A급 (상)', desc: '생활기스 거의 없음 · 모든 기능 정상' },
  { key: 'B', label: 'B급 (중)', desc: '생활기스 있음 · 기능 정상' },
  { key: 'C', label: 'C급 (하)', desc: '찍힘·파손·잔상 등 감가 요인 있음' },
];

const USED_BUYBACK = [
  { model: '아이폰 17 프로 맥스', deviceId: 'ip17-pro-max',
    range: { S: { min: 1350000, max: 1600000 }, A: { min: 1150000, max: 1400000 }, B: { min: 950000, max: 1150000 }, C: { min: 500000, max: 850000 } } },
  { model: '아이폰 16 프로 맥스', deviceId: null,
    range: { S: { min: 950000, max: 1150000 }, A: { min: 820000, max: 1000000 }, B: { min: 650000, max: 820000 }, C: { min: 350000, max: 600000 } } },
  { model: '아이폰 16 프로', deviceId: null,
    range: { S: { min: 800000, max: 950000 }, A: { min: 680000, max: 830000 }, B: { min: 540000, max: 680000 }, C: { min: 300000, max: 500000 } } },
  { model: '아이폰 15', deviceId: null,
    range: { S: { min: 480000, max: 600000 }, A: { min: 400000, max: 520000 }, B: { min: 300000, max: 420000 }, C: { min: 150000, max: 280000 } } },
  { model: '아이폰 14', deviceId: null,
    range: { S: { min: 330000, max: 430000 }, A: { min: 270000, max: 360000 }, B: { min: 190000, max: 280000 }, C: { min: 90000, max: 180000 } } },
  { model: '갤럭시 S26 울트라', deviceId: 's26-ultra',
    range: { S: { min: 1050000, max: 1250000 }, A: { min: 880000, max: 1080000 }, B: { min: 680000, max: 880000 }, C: { min: 350000, max: 640000 } } },
  { model: '갤럭시 S25 울트라', deviceId: null,
    range: { S: { min: 700000, max: 850000 }, A: { min: 580000, max: 720000 }, B: { min: 440000, max: 580000 }, C: { min: 230000, max: 420000 } } },
  { model: '갤럭시 S24', deviceId: null,
    range: { S: { min: 320000, max: 420000 }, A: { min: 260000, max: 350000 }, B: { min: 190000, max: 270000 }, C: { min: 90000, max: 180000 } } },
  { model: '갤럭시 Z 플립7', deviceId: 'zflip7',
    range: { S: { min: 650000, max: 800000 }, A: { min: 540000, max: 680000 }, B: { min: 410000, max: 550000 }, C: { min: 200000, max: 380000 } } },
  { model: '갤럭시 Z 폴드7', deviceId: 'zfold7',
    range: { S: { min: 1050000, max: 1280000 }, A: { min: 880000, max: 1100000 }, B: { min: 660000, max: 880000 }, C: { min: 330000, max: 620000 } } },
];

/* ── 헬퍼 ── */
const won = (n) => n.toLocaleString('ko-KR') + '원';
const wonRange = (r) => (r ? won(r.min) + ' ~ ' + won(r.max) : '매장 문의');
const dataLabel = (gb) => (gb === -1 ? '무제한' : gb + 'GB');
const deviceById = (id) => DEVICES.find((d) => d.id === id) || null;
const operatorLabel = (p) => (p.type === 'mvno' ? '알뜰폰' : (CARRIERS.find((c) => c.key === p.operator) || {}).label || p.operator);
const catEsc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* 가격 고지 문구 — 가격이 노출되는 모든 화면 근처에 배치 */
const PRICE_NOTE = '표기된 금액은 예상 범위입니다. 지원금·요금제·가입 유형·기기 상태에 따라 달라지며, 최종 조건은 매장 상담에서 확정됩니다.';
const SAMPLE_NOTE = CATALOG_STATUS === 'SAMPLE' ? '오픈 준비 중 예시 데이터입니다 — 실제 판매·매입 조건이 아닙니다.' : '';

/* 검색 동의어 */
const SEARCH_SYNONYMS = [
  ['아이폰', 'iphone', 'ip', '애플', 'apple'],
  ['갤럭시', 'galaxy', '삼성', 'samsung'],
  ['울트라', 'ultra'], ['프로', 'pro'], ['맥스', 'max'], ['플러스', 'plus', '+'], ['에어', 'air'],
  ['플립', 'flip'], ['폴드', 'fold'], ['폴더', 'folder', '효도', '효도폰', 'senior'],
  ['자급제', '자급', 'unlocked'], ['중고', 'used', '중고폰'],
  ['알뜰', '알뜰폰', 'mvno', '유심', 'usim', 'esim', '이심'],
  ['무제한', 'unlimited'], ['5g', '5지'], ['lte', '엘티이'],
];

function smartMatch(q, text) {
  const words = q.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const hay = text.toLowerCase();
  return words.every((w) => {
    const group = SEARCH_SYNONYMS.find((g) => g.some((s) => s === w));
    const cands = group || [w];
    return cands.some((c) => hay.includes(c));
  });
}

Object.assign(window, {
  CATALOG_STATUS, STORE, DEVICES, CARRIERS, MVNO_BRANDS, MVNO_COLOR, PLANS, USED_GRADES, USED_BUYBACK,
  won, wonRange, dataLabel, deviceById, operatorLabel, catEsc, PRICE_NOTE, SAMPLE_NOTE, smartMatch,
});
