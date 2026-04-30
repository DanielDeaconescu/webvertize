import styled from "styled-components";
import BackToTop from "../components/BackToTop";
import Packages from "../components/Packages";
import NextSteps from "../components/NextSteps";
import LandingFooter from "../components/LandingFooter";
import CookiePopupLanding from "../components/CookiePopupLanding";
import Logo from "../components/Logo";

const StyledPackagesPage = styled.div`
  background-color: #d3d3d3;
  color: #fff;
`;

function LandingPage() {
  return (
    <StyledPackagesPage>
      <Packages />
      <NextSteps />
      <BackToTop />
      <CookiePopupLanding />
      <LandingFooter />
    </StyledPackagesPage>
  );
}

export default LandingPage;
