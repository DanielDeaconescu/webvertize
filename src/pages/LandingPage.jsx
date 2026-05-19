import styled from "styled-components";
import BackToTop from "../components/BackToTop";
import Packages from "../components/Packages";
import NextSteps from "../components/NextSteps";
import LandingFooter from "../components/LandingFooter";
import CookiePopupLanding from "../components/CookiePopupLanding";
import Logo from "../components/Logo";
import LandingPageCTA from "../components/LandingPageCTA";
import { Helmet } from "react-helmet";

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
      <Packages page="landing" />
      <NextSteps />
      <LandingPageCTA />
      <BackToTop />
      <CookiePopupLanding />
      <LandingFooter />
    </StyledPackagesPage>
  );
}

export default LandingPage;
