import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ServicesStackedCards from "../../components/WebDevelopment/ServicesStackedCards";
import Websites from "../../components/WebDevelopment/WebsitesFeatures";
import CTA from "../../components/CTA";
import SideButtons from "../../components/SideButtons";
import WhatsAppButton from "../../components/WhatsAppButton";
import CookiePopup from "../../components/Cookies/CookiePopup";
import styled from "styled-components";
import BackToTop from "../../components/BackToTop";
import Header from "../../components/Header";
import websitesHeader from "../../assets/websites_header.jpg";
import WebsitesIntro from "../../components/WebDevelopment/WebsitesIntro";
import WebsitesResults from "../../components/WebDevelopment/WebsitesResults";
import WebsitesFeatures from "../../components/WebDevelopment/WebsitesFeatures";

const StyledWebsitesPage = styled.div`
  background-color: hsl(203, 53%, 13%, 0.9);
  color: #fff;
`;

function WebsitesPage() {
  return (
    <StyledWebsitesPage>
      <Header
        title="Website-uri care îți reprezintă afacerea"
        text1="Website-ul afacerii tale este o extensie a brandului și un instrument puternic de interacțiune cu clienții."
        text2="La Webvertize, creăm website-uri atractive din punct de vedere vizual, ușor de navigat și care oferă o experiență fluentă pe orice dispozitiv. Colaborăm cu tine la fiecare etapă pentru a construi prezența ta online într-un mod plăcut și eficient."
        bgImage={websitesHeader}
      />
      <WebsitesIntro />
      <WebsitesFeatures />
      <ServicesStackedCards />
      <WebsitesResults />
      <CTA
        title="Următorii tăi clienți te caută online"
        text="Hai să construim un website care să îi ajute să te găsească — și să te aleagă. Programează un apel pentru a începe."
      />
    </StyledWebsitesPage>
  );
}

export default WebsitesPage;
