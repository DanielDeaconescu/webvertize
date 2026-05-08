import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SideButtons from "../components/SideButtons";
import WebDev from "../components/WebDev";
import Ads from "../components/Ads";
import OurMission from "../components/OurMission";
import CTA from "../components/CTA";
import WhatsAppButton from "../components/WhatsAppButton";
import OurProcess from "../components/OurProcess";
import Header from "../components/Header";
import homepageHeader from "../assets/homepage_header.jpg";
import CookiePopup from "../components/Cookies/CookiePopup";
import styled from "styled-components";
import BackToTop from "../components/BackToTop";
import OurPrinciples from "../components/OurPrinciples";

const StyledHome = styled.div`
  background-color: hsl(205, 52%, 16%, 0.9);
  color: #fff;
`;

function Home() {
  return (
    <StyledHome>
      <Navigation />
      <Header
        title="Website-uri, Aplicații Web și Publicitate"
        text1="La Webvertize, ajutăm afacerile să își construiască o prezență online solidă și profesională prin website-uri personalizate, aplicații web și publicitate orientată spre performanță."
        bgImage={homepageHeader}
      />
      <WebDev />
      <Ads />
      <OurProcess />
      <OurMission />
      <OurPrinciples />
      <CTA
        title="Hai să construim împreună prezența ta digitală"
        text="Programează un apel de descoperire, spune-ne obiectivele tale și fă următorul pas în lumea digitală."
      />
      <SideButtons />
      <WhatsAppButton />
      <BackToTop />
      <CookiePopup />
      <Footer />
    </StyledHome>
  );
}

export default Home;
