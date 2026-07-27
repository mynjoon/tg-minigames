# 공일모바일 — 01mobile.co.kr

마장역 2번 출구 도보 1분, 서울 성동구 휴대폰 매장 **공일모바일** 공식 사이트.
작업 규칙은 [`CLAUDE.md`](CLAUDE.md), Netlify → Cloudflare 이전은 [`DEPLOY.md`](DEPLOY.md), 프로젝트 이력은 [`docs/KICKOFF.md`](docs/KICKOFF.md).

> ⚠️ 서브페이지 카탈로그(기기·요금제·중고 매입)의 숫자는 `catalog-data.js`의
> `CATALOG_STATUS='SAMPLE'` 동안 **전부 예시**입니다. 정책표 반영 후 `LIVE`로 전환하세요.

## 구조

```
├── index.html            홈 (원페이지 — app.jsx가 섹션 조립)
│   ├── components.jsx    Icon · Reveal · Header(base prop)
│   ├── sections-top.jsx  Hero · Trust · Products
│   ├── showcase.jsx      기기 라인업 쇼케이스
│   ├── sections-mid.jsx  Plans(AI 요금 분석) · Bundle · Reward
│   ├── sections-mvno.jsx 알뜰폰·유심/eSIM 섹션 (보완 추가)
│   └── sections-bottom.jsx Booking · Intro · Location · CTA · Footer
├── devices.html/.jsx     기기 전체보기 (보완 추가)
├── plans.html/.jsx       요금제 전체보기 (보완 추가)
├── finder.html/.jsx      1분 요금제 찾기 — 5문답 (보완 추가)
├── used.html/.jsx        중고폰 매입 계산기·등급표 (보완 추가)
├── partner.html/.jsx     지인추천 파트너 리워드 (noindex)
├── admin.html/.jsx       관리자 (noindex)
├── privacy.html          개인정보처리방침
├── catalog-data.js       ★ 카탈로그 단일 소스 (사장님이 숫자만 갱신)
├── booking-config.js     예약 웹훅(Apps Script) · 카카오 채널 URL
├── supabase-config.js    Supabase 공개 설정 (anon key — RLS 보호)
└── styles.css            디자인 시스템 (화이트+블루 #006CFF)
```

스택: 정적 HTML + React 18 UMD + Babel standalone (빌드 과정 없음 — 파일 수정 = 배포 준비 완료).

## 로컬 확인

```bash
python3 -m http.server 8000   # 또는 npx serve
# http://localhost:8000
```

## 남은 일
- [ ] 사장님: GitHub 레포 생성 → 이 소스 푸시 (완료 시 삭제)
- [ ] Cloudflare Pages 연결 + 도메인 전환 (DEPLOY.md 체크리스트)
- [ ] 정책표(단가) 수령 → catalog-data.js 숫자 교체 → `CATALOG_STATUS='LIVE'`
- [ ] 취급 알뜰폰 브랜드 확정 (`MVNO_BRANDS`)
- [ ] 중고 매입 기준표 수령 (`USED_BUYBACK`)
