# 배포 — Netlify → Cloudflare Pages 이전 런북

## ✅ 이전 완료 기록 (2026-07-27)

**01mobile.co.kr은 Cloudflare Pages에서 라이브 중.** 실제 수행 내역 (아래 런북과 다르게 진행된 부분 포함):
- 소스 레포: `mynjoon/tg-minigames` (구 미니게임 레포 전환 — `01mobile`로 개명 권장)
- 가비아 네임서버 → Cloudflare 이전, 존 활성 (SETKORA와 같은 Cloudflare 계정)
- Pages 프로젝트 `01mobile` 생성 — **Git 연동이 아닌 wrangler 직접 업로드 방식** (SETKORA와 동일 운영)
- 커스텀 도메인 `01mobile.co.kr`·`www` 연결(active) + DNS CNAME → `01mobile.pages.dev` 교체 완료
- ⚠️ 따라서 **main에 push해도 자동 배포되지 않는다** — 배포는 아래 명령으로:

```bash
# 레포 루트에서 (md/docs/.git 제외한 복사본 권장):
export CLOUDFLARE_API_TOKEN=… CLOUDFLARE_ACCOUNT_ID=…   # 사장님에게 수령, 커밋 금지
npx wrangler@3 pages deploy . --project-name=01mobile --branch=main --commit-dirty=true
```

남은 정리: Netlify 사이트 도메인 해제·정지(§4), 레포명 변경(선택), Search Console sitemap 재제출.

---

이하는 이전 당시 계획 런북 (기록용).

현재 라이브: **Netlify** (01mobile.co.kr). 목표: **Cloudflare Pages** + GitHub 자동 배포.
빌드 과정 없는 순수 정적 사이트이므로 이전은 단순하다. 순서 중요 — **DNS 전환은 마지막**.

## 0. 사전 준비 (사장님)
- [ ] GitHub 레포 `01mobile` 생성(비공개 권장) 후 이 소스 푸시 완료 확인
- [ ] Cloudflare 계정 (기존 SETKORA와 같은 계정이면 재사용)
- [ ] 01mobile.co.kr 도메인 등록기관(가비아 등) 로그인 정보 — DNS 전환용

## 1. Cloudflare Pages 프로젝트 생성
대시보드: Workers & Pages → Create → Pages → **Connect to Git** → `01mobile` 레포 선택
- Production branch: `main`
- Build command: *(비움)* / Build output directory: `/` (루트)
- 배포 후 `https://01mobile.pages.dev` 미리보기 URL로 전체 페이지 동작 확인
  (홈 섹션 렌더·예약 폼 전송·카톡 버튼·서브페이지 4종·admin/partner 로그인)

CLI 대안: `npx wrangler@3 pages deploy . --project-name=01mobile --branch=main`
(⚠️ 반드시 이 레포 루트에서 실행 — 다른 폴더에서 실행하면 엉뚱한 내용이 배포된다)

## 2. 커스텀 도메인 연결
Pages 프로젝트 → Custom domains → `01mobile.co.kr` + `www.01mobile.co.kr` 추가.
- 도메인을 Cloudflare DNS로 옮기는 경우: Cloudflare에 사이트 추가(Free 플랜) → 등록기관에서 네임서버를 Cloudflare로 변경 → DNS에 Pages CNAME 자동 구성
- 네임서버 이전 없이 CNAME만 걸 수도 있으나(등록기관 DNS), 캐시·프록시 이점을 위해 네임서버 이전 권장
- www → apex 리다이렉트: Cloudflare 대시보드 **Redirect Rules**로 설정 (_redirects 파일은 호스트 매칭 미지원)

## 3. 전환 검증 (DNS 반영 후)
- [ ] `curl -sI https://01mobile.co.kr` → `server: cloudflare` 확인
- [ ] 예약 폼 실제 1건 테스트 (Apps Script 웹훅·카카오 알림 도착 확인)
- [ ] partner.html 카카오 로그인 / admin.html 로그인 (Supabase 연결 — 도메인 변경 없으므로 그대로 동작)
- [ ] Search Console: 소유권 그대로(도메인 동일), sitemap.xml 재제출

## 4. Netlify 정리 (전환 확인 후 최소 며칠 뒤)
- Netlify 사이트의 커스텀 도메인 연결 해제 → 사이트 정지/삭제
- Netlify에 자동 배포용 저장소가 연결돼 있었다면 연결 해제

## 시크릿 규칙
- `supabase-config.js`의 anon key는 공개용(publishable, RLS 보호) — 커밋 OK
- `booking-config.js`의 Apps Script URL·카카오 채널 URL은 공개 프론트 설정 — 커밋 OK
- Supabase **service_role 키·관리자 비밀번호·Cloudflare API 토큰은 절대 커밋 금지**

## 평시 배포 (이전 완료 후)
`main`에 push → Cloudflare Pages 자동 배포 (1분 내). 라이브 확인은 캐시버스터(`?cb=랜덤`)로.
