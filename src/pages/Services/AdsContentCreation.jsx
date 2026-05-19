import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Section1 from "../../components/AdsContentCreation/Section1";
import Section2 from "../../components/AdsContentCreation/Section2";
import Section3 from "../../components/AdsContentCreation/Section3";
import CTA from "../../components/CTA";
import bgImage from "../../assets/header_ads_content_creation.jpg";
import SideButtons from "../../components/SideButtons";
import WhatsAppButton from "../../components/WhatsAppButton";
import CookiePopup from "../../components/Cookies/CookiePopup";
import styled from "styled-components";
import BackToTop from "../../components/BackToTop";
import { Helmet } from "react-helmet";

const StyledAdsContentCreation = styled.div`
  background-color: #2a566f;
  color: #fff;
`;

function AdsContentCreation() {
  return (
    <StyledAdsContentCreation>
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
        bgImage={bgImage}
        title="Publicitate și Creare de Conținut"
        text1="Serviciile bune nu se vând singure — au nevoie de publicitate clară și profesionistă care să ajungă la publicul potrivit, la momentul potrivit. La Webvertize, gestionăm crearea de conținut și campaniile publicitare de la strategie până la optimizare continuă."
      />
      <Section1 />
      {/* TO DO: Split Section2 in 3: Intro, Procesul nostru, Tipuri de campanii */}
      <Section2 />
      {/* TO DO: Split Section3 in 3: Intro (title + paragraph), Obiective de campanie, Formate disponibile (lista cu 9 items) */}
      <Section3 />
      <CTA
        title="Programează un apel și spune-ne despre afacerea ta."
        text="Programează un apel și hai să construim campanii care ajung la clienții potriviți, cu mesajul potrivit."
      />

      <CookiePopup />
    </StyledAdsContentCreation>
  );
}

export default AdsContentCreation;
