/* ==========================================================================
   공일모바일 — 카탈로그 데이터 (기기 · 중고 매입)
   서브페이지(devices/used)가 공용으로 사용. (알뜰폰·요금제는 2026-07-27 사장님 지시로 제외)

   ⚠️ CATALOG_STATUS = 'SAMPLE' — '기기(개통·자급제)' 금액은 아직 예시다. 정책표 수령 후 교체.
   ✅ 중고 매입가(USED_BUYBACK)는 실데이터: 폰'S 단가표(2026-07-27) 전 구간 −10만원 적용.
      등급 매핑: A급=[A-,A] · B급=[중고,B+] · C급=[수출,중고] (용량별 범위 합산, 1만원 미만 구간은 문의 처리)
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
  { id: 'zfold8-ultra', brand: 'samsung', name: '갤럭시 폴드8 울트라', series: '갤럭시 Z', year: 2026, network: '5G',
    storages: ['256GB', '512GB'], channels: ['carrier', 'unlocked'], tags: ['flagship', 'folder', 'camera'],
    monthly: { min: 95000, max: 158000 }, unlocked: { min: 2577300, max: 2830300 }, img: 'assets/galaxy-fold8-ultra-violet.png' },
  { id: 'zfold8', brand: 'samsung', name: '갤럭시 폴드8', series: '갤럭시 Z', year: 2026, network: '5G',
    storages: ['256GB', '512GB', '1TB'], channels: ['carrier', 'unlocked', 'used'], tags: ['folder', 'big-screen'],
    monthly: { min: 90000, max: 148000 }, unlocked: { min: 2278100, max: 2531100 }, img: 'assets/galaxy-fold8-lavender.png' },
  { id: 'zflip8', brand: 'samsung', name: '갤럭시 플립8', series: '갤럭시 Z', year: 2026, network: '5G',
    storages: ['256GB', '512GB'], channels: ['carrier', 'unlocked', 'used'], tags: ['folder', 'popular', 'design'],
    monthly: { min: 65000, max: 112000 }, unlocked: { min: 1683000, max: 1936000 }, img: 'assets/galaxy-flip8-graphite.png' },
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

/* ── 중고 매입 — 실데이터 (기준: 폰'S 단가표 2026-07-27, 전 구간 −10만원) ──
   시세 갱신: 새 단가표가 오면 이 블록만 다시 생성한다 (스크립트 규칙은 파일 헤더 참조). */
const USED_PRICE_DATE = '2026-07-27';
const USED_NOTE = '미개봉·부분 파손(액정/카메라/뒷판)·폴더블 접힘부 볼록 등은 매장 확인 후 확정됩니다. 표에 없는 모델도 매입 가능하니 매장으로 문의해 주세요.';

const USED_GRADES = [
  { key: 'A', label: 'A급 (상)', desc: '기스 거의 없음 · 기능 정상 · 배터리 성능 기준 충족(기종별 91~95%↑)' },
  { key: 'B', label: 'B급 (중)', desc: '생활기스 있음 · 기능 정상 · 배터리 86~90%' },
  { key: 'C', label: 'C급 (하)', desc: '기스 많음·사용감 큼 — 잔상·찍힘 등은 추가 감가' },
];

const USED_BUYBACK = [
  { model: '아이폰 17 프로 맥스', deviceId: 'ip17-pro-max',
    range: { A: { min: 1560000, max: 1900000 }, B: { min: 1470000, max: 1840000 }, C: { min: 1350000, max: 1590000 } } },
  { model: '아이폰 17 프로', deviceId: null,
    range: { A: { min: 1340000, max: 1640000 }, B: { min: 1090000, max: 1580000 }, C: { min: 970000, max: 1290000 } } },
  { model: '아이폰 17 에어', deviceId: null,
    range: { A: { min: 810000, max: 1020000 }, B: { min: 730000, max: 970000 }, C: { min: 640000, max: 860000 } } },
  { model: '아이폰 17', deviceId: null,
    range: { A: { min: 810000, max: 920000 }, B: { min: 740000, max: 870000 }, C: { min: 660000, max: 840000 } } },
  { model: '아이폰 16 프로 맥스', deviceId: null,
    range: { A: { min: 1140000, max: 1450000 }, B: { min: 990000, max: 1360000 }, C: { min: 920000, max: 1080000 } } },
  { model: '아이폰 16 프로', deviceId: null,
    range: { A: { min: 870000, max: 1090000 }, B: { min: 750000, max: 1000000 }, C: { min: 705000, max: 840000 } } },
  { model: '아이폰 16 플러스', deviceId: null,
    range: { A: { min: 750000, max: 980000 }, B: { min: 630000, max: 910000 }, C: { min: 565000, max: 730000 } } },
  { model: '아이폰 16', deviceId: null,
    range: { A: { min: 680000, max: 910000 }, B: { min: 560000, max: 840000 }, C: { min: 520000, max: 660000 } } },
  { model: '아이폰 16E', deviceId: null,
    range: { A: { min: 390000, max: 640000 }, B: { min: 300000, max: 570000 }, C: { min: 265000, max: 370000 } } },
  { model: '아이폰 15 프로 맥스', deviceId: null,
    range: { A: { min: 890000, max: 990000 }, B: { min: 780000, max: 910000 }, C: { min: 735000, max: 860000 } } },
  { model: '아이폰 15 프로', deviceId: null,
    range: { A: { min: 700000, max: 860000 }, B: { min: 580000, max: 770000 }, C: { min: 545000, max: 630000 } } },
  { model: '아이폰 15 플러스', deviceId: null,
    range: { A: { min: 530000, max: 640000 }, B: { min: 450000, max: 550000 }, C: { min: 420000, max: 500000 } } },
  { model: '아이폰 15', deviceId: null,
    range: { A: { min: 520000, max: 630000 }, B: { min: 400000, max: 530000 }, C: { min: 370000, max: 450000 } } },
  { model: '아이폰 14 프로 맥스', deviceId: null,
    range: { A: { min: 650000, max: 770000 }, B: { min: 560000, max: 700000 }, C: { min: 515000, max: 620000 } } },
  { model: '아이폰 14 프로', deviceId: null,
    range: { A: { min: 480000, max: 620000 }, B: { min: 440000, max: 530000 }, C: { min: 415000, max: 490000 } } },
  { model: '아이폰 14 플러스', deviceId: null,
    range: { A: { min: 330000, max: 430000 }, B: { min: 290000, max: 390000 }, C: { min: 255000, max: 360000 } } },
  { model: '아이폰 14', deviceId: null,
    range: { A: { min: 310000, max: 390000 }, B: { min: 250000, max: 350000 }, C: { min: 220000, max: 290000 } } },
  { model: '아이폰 13 프로 맥스', deviceId: null,
    range: { A: { min: 470000, max: 550000 }, B: { min: 360000, max: 510000 }, C: { min: 320000, max: 410000 } } },
  { model: '아이폰 13 프로', deviceId: null,
    range: { A: { min: 330000, max: 410000 }, B: { min: 290000, max: 370000 }, C: { min: 260000, max: 330000 } } },
  { model: '아이폰 13', deviceId: null,
    range: { A: { min: 230000, max: 310000 }, B: { min: 190000, max: 270000 }, C: { min: 170000, max: 220000 } } },
  { model: '아이폰 13 미니', deviceId: null,
    range: { A: { min: 150000, max: 240000 }, B: { min: 120000, max: 190000 }, C: { min: 105000, max: 170000 } } },
  { model: '아이폰 12 프로 맥스', deviceId: null,
    range: { A: { min: 340000, max: 410000 }, B: { min: 300000, max: 370000 }, C: { min: 265000, max: 330000 } } },
  { model: '아이폰 12 프로', deviceId: null,
    range: { A: { min: 240000, max: 290000 }, B: { min: 180000, max: 250000 }, C: { min: 155000, max: 210000 } } },
  { model: '아이폰 12', deviceId: null,
    range: { A: { min: 80000, max: 140000 }, B: { min: 30000, max: 100000 }, C: { min: 15000, max: 45000 } } },
  { model: '아이폰 11 프로 맥스', deviceId: null,
    range: { A: { min: 180000, max: 240000 }, B: { min: 140000, max: 190000 }, C: { min: 105000, max: 170000 } } },
  { model: '갤럭시 S26 울트라', deviceId: 's26-ultra',
    range: { A: { min: 1010000, max: 1030000 }, B: { min: 930000, max: 970000 }, C: null } },
  { model: '갤럭시 S26+', deviceId: null,
    range: { A: { min: 740000, max: 760000 }, B: { min: 690000, max: 710000 }, C: null } },
  { model: '갤럭시 S26', deviceId: null,
    range: { A: { min: 640000, max: 660000 }, B: { min: 590000, max: 610000 }, C: null } },
  { model: '갤럭시 S25 울트라', deviceId: null,
    range: { A: { min: 790000, max: 810000 }, B: { min: 730000, max: 760000 }, C: { min: 700000, max: 730000 } } },
  { model: '갤럭시 S25+', deviceId: null,
    range: { A: { min: 530000, max: 550000 }, B: { min: 460000, max: 490000 }, C: { min: 360000, max: 460000 } } },
  { model: '갤럭시 S25', deviceId: null,
    range: { A: { min: 505000, max: 520000 }, B: { min: 430000, max: 465000 }, C: { min: 360000, max: 430000 } } },
  { model: '갤럭시 S25 엣지', deviceId: null,
    range: { A: { min: 460000, max: 480000 }, B: { min: 400000, max: 430000 }, C: { min: 290000, max: 400000 } } },
  { model: '갤럭시 S25 FE', deviceId: null,
    range: { A: { min: 400000, max: 420000 }, B: { min: 340000, max: 370000 }, C: { min: 240000, max: 340000 } } },
  { model: '갤럭시 S24 울트라', deviceId: null,
    range: { A: { min: 610000, max: 630000 }, B: { min: 550000, max: 580000 }, C: { min: 500000, max: 550000 } } },
  { model: '갤럭시 S24+', deviceId: null,
    range: { A: { min: 365000, max: 380000 }, B: { min: 260000, max: 295000 }, C: { min: 220000, max: 260000 } } },
  { model: '갤럭시 S24', deviceId: null,
    range: { A: { min: 335000, max: 350000 }, B: { min: 230000, max: 260000 }, C: { min: 220000, max: 230000 } } },
  { model: '갤럭시 S24 FE', deviceId: null,
    range: { A: { min: 275000, max: 290000 }, B: { min: 240000, max: 250000 }, C: { min: 225000, max: 240000 } } },
  { model: '갤럭시 S23 울트라', deviceId: null,
    range: { A: { min: 460000, max: 470000 }, B: { min: 400000, max: 430000 }, C: { min: 355000, max: 400000 } } },
  { model: '갤럭시 S23+', deviceId: null,
    range: { A: { min: 235000, max: 250000 }, B: { min: 180000, max: 205000 }, C: { min: 155000, max: 180000 } } },
  { model: '갤럭시 S23', deviceId: null,
    range: { A: { min: 200000, max: 220000 }, B: { min: 165000, max: 180000 }, C: { min: 160000, max: 165000 } } },
  { model: '갤럭시 S23 FE', deviceId: null,
    range: { A: { min: 170000, max: 180000 }, B: { min: 130000, max: 150000 }, C: { min: 95000, max: 130000 } } },
  { model: '갤럭시 S22 울트라', deviceId: null,
    range: { A: { min: 310000, max: 330000 }, B: { min: 260000, max: 280000 }, C: { min: 250000, max: 260000 } } },
  { model: '갤럭시 S22+', deviceId: null,
    range: { A: { min: 140000, max: 150000 }, B: { min: 105000, max: 125000 }, C: { min: 80000, max: 105000 } } },
  { model: '갤럭시 S22', deviceId: null,
    range: { A: { min: 140000, max: 150000 }, B: { min: 85000, max: 105000 }, C: { min: 80000, max: 85000 } } },
  { model: '갤럭시 S21 울트라', deviceId: null,
    range: { A: { min: 220000, max: 230000 }, B: { min: 200000, max: 205000 }, C: { min: 190000, max: 200000 } } },
  { model: '갤럭시 S21+', deviceId: null,
    range: { A: { min: 95000, max: 100000 }, B: { min: 60000, max: 80000 }, C: { min: 50000, max: 60000 } } },
  { model: '갤럭시 S21', deviceId: null,
    range: { A: { min: 80000, max: 90000 }, B: { min: 60000, max: 65000 }, C: { min: 45000, max: 60000 } } },
  { model: '갤럭시 S20 울트라', deviceId: null,
    range: { A: { min: 115000, max: 120000 }, B: { min: 80000, max: 95000 }, C: { min: 60000, max: 80000 } } },
  { model: '갤럭시 S20+', deviceId: null,
    range: { A: { min: 50000, max: 60000 }, B: { min: 30000, max: 40000 }, C: { min: 10000, max: 30000 } } },
  { model: '갤럭시 Z 폴드7', deviceId: null,
    range: { A: { min: 1080000, max: 1120000 }, B: { min: 980000, max: 1030000 }, C: { min: 960000, max: 980000 } } },
  { model: '갤럭시 Z 폴드 SE', deviceId: null,
    range: { A: { min: 770000, max: 810000 }, B: { min: 640000, max: 720000 }, C: { min: 570000, max: 640000 } } },
  { model: '갤럭시 Z 폴드6', deviceId: null,
    range: { A: { min: 730000, max: 760000 }, B: { min: 610000, max: 660000 }, C: { min: 590000, max: 610000 } } },
  { model: '갤럭시 Z 폴드5', deviceId: null,
    range: { A: { min: 440000, max: 480000 }, B: { min: 360000, max: 390000 }, C: { min: 330000, max: 360000 } } },
  { model: '갤럭시 Z 폴드4', deviceId: null,
    range: { A: { min: 340000, max: 380000 }, B: { min: 250000, max: 290000 }, C: { min: 210000, max: 250000 } } },
  { model: '갤럭시 Z 폴드3', deviceId: null,
    range: { A: { min: 260000, max: 280000 }, B: { min: 190000, max: 230000 }, C: { min: 160000, max: 190000 } } },
  { model: '갤럭시 Z 플립7', deviceId: null,
    range: { A: { min: 480000, max: 530000 }, B: { min: 400000, max: 440000 }, C: { min: 360000, max: 400000 } } },
  { model: '갤럭시 Z 플립6', deviceId: null,
    range: { A: { min: 260000, max: 300000 }, B: { min: 180000, max: 210000 }, C: { min: 150000, max: 180000 } } },
  { model: '갤럭시 Z 플립5', deviceId: null,
    range: { A: { min: 210000, max: 230000 }, B: { min: 100000, max: 170000 }, C: { min: 70000, max: 100000 } } },
  { model: '갤럭시 Z 플립4', deviceId: null,
    range: { A: { min: 120000, max: 140000 }, B: { min: 60000, max: 100000 }, C: { min: 50000, max: 60000 } } },
  { model: '갤럭시 Z 플립3', deviceId: null,
    range: { A: { min: 80000, max: 90000 }, B: { min: 20000, max: 40000 }, C: { min: 10000, max: 20000 } } },
  { model: '갤럭시 노트20 울트라', deviceId: null,
    range: { A: { min: 180000, max: 190000 }, B: { min: 140000, max: 160000 }, C: { min: 135000, max: 140000 } } },
  { model: '갤럭시 노트20', deviceId: null,
    range: { A: { min: 50000, max: 50000 }, B: { min: 20000, max: 35000 }, C: { min: 10000, max: 20000 } } },
  { model: '갤럭시 노트10+', deviceId: null,
    range: { A: { min: 90000, max: 90000 }, B: { min: 75000, max: 75000 }, C: { min: 70000, max: 75000 } } },
  { model: '갤럭시 A56', deviceId: null,
    range: { A: { min: 105000, max: 110000 }, B: { min: 80000, max: 100000 }, C: { min: 30000, max: 80000 } } },
  { model: '갤럭시 A55', deviceId: null,
    range: { A: { min: 110000, max: 110000 }, B: { min: 70000, max: 95000 }, C: { min: 40000, max: 70000 } } },
  { model: '갤럭시 A54', deviceId: null,
    range: { A: { min: 70000, max: 80000 }, B: { min: 45000, max: 65000 }, C: { min: 10000, max: 45000 } } },
  { model: '갤럭시 A36', deviceId: null,
    range: { A: { min: 80000, max: 85000 }, B: { min: 55000, max: 75000 }, C: { min: 35000, max: 55000 } } },
  { model: '갤럭시 A35', deviceId: null,
    range: { A: { min: 95000, max: 100000 }, B: { min: 60000, max: 90000 }, C: { min: 10000, max: 60000 } } },
];

/* ── 헬퍼 ── */
const won = (n) => n.toLocaleString('ko-KR') + '원';
const wonRange = (r) => (r ? (r.min === r.max ? won(r.min) : won(r.min) + ' ~ ' + won(r.max)) : '매장 문의');
const deviceById = (id) => DEVICES.find((d) => d.id === id) || null;
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
  ['5g', '5지'], ['lte', '엘티이'],
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
  CATALOG_STATUS, STORE, DEVICES, CARRIERS, USED_GRADES, USED_BUYBACK, USED_PRICE_DATE, USED_NOTE,
  won, wonRange, deviceById, catEsc, PRICE_NOTE, SAMPLE_NOTE, smartMatch,
});
