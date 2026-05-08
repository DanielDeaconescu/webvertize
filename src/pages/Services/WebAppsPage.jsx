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
import WebAppsIntro from "../../components/WebDevelopment/WebAppsIntro";
import Header from "../../components/Header";
import webAppsHeader from "../../assets/web_apps_header.jpg";
import WebAppsResults from "../../components/WebDevelopment/WebAppsResults";

const StyledWebAppsPage = styled.div`
  background-color: #1f465f;
  color: #fff;
`;

function WebAppsPage() {
  return (
    <StyledWebAppsPage>
      <Navigation />
      <Header
        title="Aplicații Web Personalizate"
        text1="Webvertize intervine atunci când soluțiile software standard nu se potrivesc perfect, oferind flexibilitatea de care afacerea ta are nevoie pentru a funcționa eficient."
        text2="Proiectăm și dezvoltăm soluții adaptate care pornesc de la fluxul tău de lucru existent — nu invers. De la dashboard-uri interne și automatizarea proceselor, până la platforme orientate către clienți, lucrăm împreună cu tine pentru a crea instrumente fiabile și scalabile care simplifică operațiunile și susțin creșterea ta pe termen lung."
        bgImage={webAppsHeader}
      />
      <WebAppsIntro />
      <WebAppsFeatures />
      <WebAppsResults />
      <ServicesStackedCards />
      <CTA
        title="Instrumentele potrivite pot schimba totul"
        text="Hai să construim o aplicație care să se potrivească fluxului de lucru al afacerii tale."
      />
      <SideButtons />
      <WhatsAppButton />
      <CookiePopup />
      <BackToTop />
      <Footer />
    </StyledWebAppsPage>
  );
}

export default WebAppsPage;
