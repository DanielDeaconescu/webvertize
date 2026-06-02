import Navigation from "../../components/Navigation";
import WebApps from "../../components/WebDevelopment/WebApps";
import ServicesStackedCards from "../../components/WebDevelopment/ServicesStackedCards";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
import SideButtons from "../../components/SideButtons";
import WhatsAppButton from "../../components/WhatsAppButton";
import CookiePopup from "../../components/Cookies/CookiePopup";
import styled from "styled-components";
import BackToTop from "../../components/BackToTop";
import WebAppsFeatures from "../../components/WebDevelopment/WebAppsFeatures";
import Header from "../../components/Header";
import webAppsHeader from "../../assets/headers/web_apps_header.webp";
import { Helmet } from "react-helmet-async";

const StyledWebAppsPage = styled.div`
  background-color: #1f465f;
  color: #fff;
`;

function WebAppsPage() {
  return (
    <StyledWebAppsPage>
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
        title="Aplicații Web Personalizate"
        text1="Webvertize intervine atunci când soluțiile software standard nu se potrivesc perfect, oferind flexibilitatea de care afacerea ta are nevoie pentru a funcționa eficient."
        text2="Proiectăm soluții care pornesc de la fluxul tău de lucru existent — nu invers. Dashboard-uri interne, automatizarea proceselor, platforme orientate către clienți — construite împreună cu tine, de la zero."
        bgImage={webAppsHeader}
      />
      <WebAppsFeatures />
      <ServicesStackedCards />
      <CTA
        title="Instrumentele potrivite pot schimba totul"
        text="Hai să construim o aplicație care să se potrivească fluxului de lucru al afacerii tale."
      />
    </StyledWebAppsPage>
  );
}

export default WebAppsPage;
