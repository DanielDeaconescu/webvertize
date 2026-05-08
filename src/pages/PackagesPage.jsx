import styled from "styled-components";
import Navigation from "../components/Navigation";
import SideButtons from "../components/SideButtons";
import WhatsAppButton from "../components/WhatsAppButton";
import BackToTop from "../components/BackToTop";
import CookiePopup from "../components/Cookies/CookiePopup";
import Footer from "../components/Footer";
import Packages from "../components/Packages";
import NextSteps from "../components/NextSteps";
import Header from "../components/Header";
import pricesHeaderImg from "../assets/prices_header_img.jpg";

const StyledPackagesPage = styled.div`
  background-color: #d3d3d3;
  color: #fff;
`;

function LandingPage() {
  return (
    <StyledPackagesPage>
      <Navigation />
      <Header
        bgImage={pricesHeaderImg}
        title="Alege pachetul potrivit pentru afacerea ta"
        text1="Fiecare pachet include tot ce ai nevoie pentru o prezență online profesională."
        text2="Prețul final îl stabilim împreună, în funcție de nevoile afacerii tale."
      />
      <SideButtons />
      <Packages />
      <NextSteps />
      <WhatsAppButton />
      <BackToTop />
      <CookiePopup />
      <Footer />
    </StyledPackagesPage>
  );
}

export default LandingPage;
