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
import CTA from "../components/CTA";
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
      <Header
        bgImage={pricesHeaderImg}
        title="Alege pachetul potrivit pentru afacerea ta"
        text1="Fiecare pachet include tot ce ai nevoie pentru o prezență online profesională."
        text2="Prețul final poate varia în funcție de nevoile specifice ale afacerii tale — discutăm detaliile înainte de orice angajament."
      />
      <Packages />
      <NextSteps />
      <CTA
        title="Ai găsit pachetul potrivit?"
        text="Programează un apel și discutăm detaliile înainte de orice angajament."
      />
    </StyledPackagesPage>
  );
}

export default LandingPage;
