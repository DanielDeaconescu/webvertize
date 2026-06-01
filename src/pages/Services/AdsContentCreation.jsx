import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Section1 from "../../components/AdsContentCreation/Section1";
import Section2 from "../../components/AdsContentCreation/Section2";
import Section3 from "../../components/AdsContentCreation/Section3";
import CTA from "../../components/CTA";
import bgImage from "../../assets/header_ads_content_creation.jpg";

import CookiePopup from "../../components/Cookies/CookiePopup";
import styled from "styled-components";

import { Helmet } from "react-helmet-async";

const StyledAdsContentCreation = styled.div`
  background-color: var(--color-bg);
  color: var(--color-text);
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
        text1="Serviciile bune nu se vând singure — au nevoie de publicitate clară și profesionistă care să ajungă la publicul potrivit, la momentul potrivit."
        text2="La Webvertize, gestionăm crearea de conținut și campaniile publicitare de la strategie până la optimizare continuă."
        page="advertising"
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <CTA
        title="Programează un apel și spune-ne despre afacerea ta."
        text="Hai să construim campanii care ajung la clienții potriviți, cu mesajul potrivit."
      />
    </StyledAdsContentCreation>
  );
}

export default AdsContentCreation;
