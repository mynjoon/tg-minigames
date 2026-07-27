# 공일모바일 — 킥오프 방향 전환 기록 (2026-07-27)

원본 인수인계 문서는 [`KICKOFF-original.md`](KICKOFF-original.md) (SETKORA 세션 작성).
아래는 사장님 지시로 확정된 **변경 사항**이다. 원본과 충돌하면 이 문서가 우선한다.

## 사장님 확정 지시 (2026-07-27, 세션 중)
1. **신규 브랜드 아님** — 기존 브랜드 **공일모바일 / 01mobile.co.kr** (마장역점, 라이브 운영 중)에 **추가 보완**한다.
   - 원본 KICKOFF의 "신규 브랜드 · gongilmobile.com" 계획 폐기. 도메인은 01mobile.co.kr 유지.
2. **전용 GitHub 레포** 사용 (모노레포 `mynjoon/-`의 폴더가 아니라 독립 레포).
3. **호스팅 Netlify → Cloudflare 이전** (DEPLOY.md 참조).

## 기존 사이트 현황 (미러링 시점 2026-07-27)
- 스택: 정적 HTML + React 18 UMD + Babel standalone(JSX 브라우저 컴파일) + styles.css(147KB, 화이트+블루 #006CFF)
- 페이지: index(원페이지 홈: Hero·Trust·Showcase·Products·Plans·Bundle·Reward·Booking·Intro·Location·CTA), privacy, partner(추천 리워드, noindex), admin(noindex)
- 예약: #booking 폼 → Google Apps Script 웹훅(구글시트+카카오 알림) + Supabase(anon key, RLS)
- 문의: 카카오톡 오픈채팅 채널, tel:010-7932-9779
- 추천 리워드: ?ref= 코드 30일 귀속, 파트너 페이지 + 관리자 페이지 (Supabase)
- 사업자: 공일모바일 · 대표 곽상효 · 847-75-00504 · 서울 성동구 마장로 305 1층 · 월–토 10:00–20:00 · 이동통신 사전승낙 마크 보유

## 이번 보완 범위 (사장님 선택 — 4종 전부)
1. **중고폰 매입 계산기** — used.html (모델·등급별 예상 매입 범위)
2. **요금제 스무고개** — finder.html (5문답 → 후보 3개)
3. **기기/요금제 전체 카탈로그** — devices.html / plans.html
4. **알뜰폰·유심/eSIM 섹션** — 홈 MvnoSection (sections-mvno.jsx)

공용 데이터: `catalog-data.js` (CATALOG_STATUS='SAMPLE' — 정책표 수령 후 숫자 교체·LIVE 전환 전까지 예시 안내 노출)

## 원본 KICKOFF에서 계승하는 것
- ⚠️ 규제 가드레일: 가격은 항상 "예상 범위 + 매장 확정", 확정가·최저가 단정 금지(신규 페이지 기준), 중고 매입가도 범위만
- 개인정보: 신규 페이지에서 입력란 추가 금지(예약은 기존 #booking 폼으로 유도)
- 시크릿 커밋 금지 (Supabase anon key·Apps Script URL은 원래 공개 프론트 설정이라 예외)
- 사장님 인풋 대기: 정책표(단가) 샘플 · 취급 알뜰폰 브랜드 확정 · 중고 매입 기준표

## 모노레포 흔적
- `mynjoon/-` 브랜치 `claude/gongil-mobile-build-kickoff-40xdsw` (PR #9): 신규 브랜드 시절 빌드(gongil-mobile/)와 01mobile 미러 커밋이 남아 있음 — 기록용. 이 전용 레포가 단일 소스다.
