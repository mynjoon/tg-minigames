/* global React, ReactDOM,
   Header, Hero, TrustSection, ProductsSection, LineupShowcase,
   PlansSection, BundleSection, MvnoSection, RewardSection, BookingSection,
   IntroSection, LocationSection, CTASection, Footer, MobileActionBar */

const { useEffect: useEffectA, useState: useStateA } = React;

function ScrollToTop() {
  const [visible, setVisible] = useStateA(false);
  useEffectA(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      className={"scroll-top" + (visible ? " is-visible" : "")}
      aria-label="맨 위로"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>);
}

function ScrollProgress() {
  const [p, setP] = useStateA(0);
  useEffectA(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / Math.max(1, (h.scrollHeight - h.clientHeight));
      setP(Math.min(1, Math.max(0, scrolled)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scroll-progress" style={{ transform: `scaleX(${p})` }} aria-hidden="true" />;
}

// Capture ?ref=CODE from partner referral links and remember it locally,
// so the store can ask "누구 소개로 오셨어요?" / match it at consultation.
function useReferralCapture() {
  useEffectA(() => {
    try {
      // 귀속기간 30일: 저장된 지 30일이 지난 추천 코드는 삭제 (sections-bottom.jsx와 동일 기준)
      const REFERRAL_TTL = 30 * 24 * 60 * 60 * 1000;
      const at = localStorage.getItem("referralAt");
      if (at && Date.now() - new Date(at).getTime() > REFERRAL_TTL) {
        localStorage.removeItem("referralCode");
        localStorage.removeItem("referralAt");
      }
      const code = new URLSearchParams(location.search).get("ref");
      if (code) {
        localStorage.setItem("referralCode", code);
        localStorage.setItem("referralAt", new Date().toISOString());
      }
    } catch (e) {}
  }, []);
}

function App() {
  useReferralCapture();
  return (
    <>
      <ScrollProgress/>
      <Header/>
      <main>
        <Hero/>
        <TrustSection/>
        <LineupShowcase/>
        <ProductsSection/>
        <PlansSection/>
        <BundleSection/>
        <MvnoSection/>
        <RewardSection/>
        <BookingSection/>
        <IntroSection/>
        <LocationSection/>
        <CTASection/>
      </main>
      <Footer/>
      <ScrollToTop/>
      <MobileActionBar/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
