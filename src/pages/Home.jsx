import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SideButtons from "../components/SideButtons";
import WebDev from "../components/WebDev";
import Ads from "../components/Ads";
import OurMission from "../components/OurMission";
import CTA from "../components/CTA";
import WhatsAppButton from "../components/WhatsAppButton";
import Header from "../components/Header";
import homepageHeader from "../assets/homepage_header.jpg";
import CookiePopup from "../components/Cookies/CookiePopup";
import styled from "styled-components";
import BackToTop from "../components/BackToTop";
import { Helmet } from "react-helmet-async";

const StyledHome = styled.div`
  background-color: hsl(205, 52%, 16%, 0.9);
  color: #fff;
`;

function Home() {
  return (
    <StyledHome>
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
      <Header
        title="Website-uri, Aplicații Web și Publicitate"
        text1="Website-uri profesionale, aplicații web și publicitate — tot ce are nevoie afacerea ta pentru a crește online."
        page="home"
        bgImage={homepageHeader}
      />
      <WebDev />
      <Ads />
      <OurMission />
      <CTA
        title="Hai să construim împreună prezența ta digitală"
        text="Programează un apel de descoperire și spune-ne obiectivele tale."
      />
    </StyledHome>
  );
}

export default Home;
