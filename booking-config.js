/* ============================================================
   상담 예약 → 구글 시트 + 카카오 알림 연결 설정
   ------------------------------------------------------------
   Google Apps Script를 "웹 앱"으로 배포하면 받는 URL을 아래에 붙여넣으세요.
   (설정 방법: BOOKING_SETUP.md 참고)
   비워 두면 폼은 정상 작동하되 시트 저장/알림만 비활성화됩니다.
   ============================================================ */
window.BOOKING_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwEtUcioMhjuYgOqSl6S5RkG86qB_S28Q4JFaaYq1GRgIGXVaXYhDHxZ22gQ3lAm28_xg/exec";

/* 카카오톡 채널 채팅 URL — 사이트 "카톡 문의" 버튼이 이 채널 채팅으로 연결됩니다.
   카카오톡 채널 관리자센터(center-pf.kakao.com)에서 채널 만든 뒤 "채팅 URL" 복사해 입력.
   형식 예: https://pf.kakao.com/_xxxxx/chat   (비워두면 카톡 버튼은 동작 안 함) */
window.KAKAO_CHANNEL_URL = "https://open.kakao.com/o/smWhViBi";
