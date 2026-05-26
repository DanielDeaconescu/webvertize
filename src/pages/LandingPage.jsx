import styled from "styled-components";
import BackToTop from "../components/BackToTop";
import Packages from "../components/Packages";
import NextSteps from "../components/NextSteps";
import LandingFooter from "../components/LandingFooter";
import CookiePopupLanding from "../components/CookiePopupLanding";
import Logo from "../components/Logo";
import LandingPageCTA from "../components/LandingPageCTA";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import WhatsAAppLandingPage from "../components/WhatsAppLandingPage";
import HeaderLandingPage from "../components/HeaderLandingPage";
import LandingTestimonials from "../components/LandingTestimonials";

const StyledPackagesPage = styled.div`
  background-color: #d3d3d3;
  color: #fff;
`;

function LandingPage() {
  return (
    <StyledPackagesPage>
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18172690170"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-18172690170');`}
        </script>
      </Helmet>
      <HeaderLandingPage
        title="Site web profesional pentru afacerea ta din București"
        text1="Site-uri moderne, rapide și optimizate pentru Google, 
cu panou de administrare inclus. Editezi singur, fără programator."
        text2="Alege pachetul potrivit și hai să discutăm."
      />
      <Packages page="landing" />
      <NextSteps />
      <LandingTestimonials />
      <LandingPageCTA />
      <WhatsAAppLandingPage />
      <BackToTop />
      <CookiePopupLanding />
      <LandingFooter />
    </StyledPackagesPage>
  );
}

export default LandingPage;
