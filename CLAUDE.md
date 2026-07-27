# 공일모바일 (01mobile.co.kr) — 프로젝트 규칙 (Claude 작업 지침)

마장역 휴대폰 매장 **공일모바일**의 공식 사이트. 라이브 운영 중인 실사이트다 — 신중히 다룰 것.
배경·방향 전환 이력은 `docs/KICKOFF.md`, 배포·이전은 `DEPLOY.md`.

## ⭐ 최우선: 가격 표기 가드레일 (규제)
허위·과장 지원금 광고 규제 대응. **새로 만드는 모든 화면**에 적용:
- 금액은 "예상 범위(min~max)" + "최종 조건은 매장 상담에서 확정" 구조로만. `catalog-data.js`의 `wonRange()`/`PRICE_NOTE` 사용.
- 금지: "최저가"·"공짜"·"0원" 단정·"확정가"·"무조건" 류. (기존 홈 카피는 사장님 승인 영역이므로 임의 수정 금지 — 단, 새 카피에 복제하지 말 것)
- 중고 매입가는 모델·등급 기준 예상 범위만.

## 데이터 규칙
- `catalog-data.js`가 서브페이지 카탈로그의 단일 소스. **`CATALOG_STATUS='SAMPLE'`인 동안 숫자는 전부 예시** — 사장님 정책표 반영 후 'LIVE' 전환. 시세 갱신은 숫자만 바꾼다(스키마 변경 금지).
- 매장 정보는 `STORE` 상수 + 푸터(sections-bottom.jsx)가 원본. 사업자: 공일모바일 · 곽상효 · 847-75-00504.

## 기술 스택 (기존 컨벤션 준수)
- 정적 사이트. React 18 UMD + **Babel standalone**(JSX를 브라우저에서 컴파일, `<script type="text/babel">`) — 빌드 단계 없음.
- 홈(index.html)은 원페이지 섹션 구성(app.jsx가 조립). 서브페이지는 `<이름>.html + <이름>.jsx` 쌍 (partner.html 패턴).
- 공용: components.jsx(Icon·Reveal·Header — Header는 서브페이지에서 `base="./"`), sections-bottom.jsx(kakaoChat·Footer·MobileActionBar·CTASection), styles.css(화이트+블루 토큰 var(--blue) 등), catalog-data.js.
- 예약은 홈 `#booking` 폼 하나로 통일(Apps Script 웹훅 + Supabase). **서브페이지에 별도 입력 폼 만들지 말 것.**
- 새 JSX는 esbuild로 구문 검증: `npx --yes esbuild --loader:.jsx=jsx <파일> --outfile=/dev/null`

## 개인정보·시크릿
- 신규 화면에서 개인정보 입력란 추가 금지. 신분증류는 어떤 형태로도 온라인 수집 금지.
- Supabase anon key·Apps Script URL·카카오 채널 URL: 공개 프론트 설정(커밋 OK). **service_role 키·관리자 비밀번호·Cloudflare 토큰: 절대 커밋 금지.**

## 배포
- 목표 상태: GitHub `main` push → Cloudflare Pages 자동 배포 (전환 절차·검증 체크리스트는 DEPLOY.md).
- CLI 배포 시 반드시 레포 루트에서. 라이브 검증은 캐시버스터(`?cb=랜덤`).
- CSP 헤더를 함부로 추가하지 말 것 — Babel standalone 구조상 인라인/eval 허용이 필요해 strict CSP가 사이트를 통째로 깨뜨린다.

## 금지
- 라이브 홈의 기존 섹션·카피·admin/partner 동작을 사장님 지시 없이 변경 금지.
- 가짜 후기·허위 UI 금지. 내부 단가·마진 노출 금지.
