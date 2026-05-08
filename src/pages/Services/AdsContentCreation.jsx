import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Section1 from "../../components/AdsContentCreation/Section1";
import Section2 from "../../components/AdsContentCreation/Section2";
import Section3 from "../../components/AdsContentCreation/Section3";
import Section4 from "../../components/AdsContentCreation/Section4";
import CTA from "../../components/CTA";
import bgImage from "../../assets/header_ads_content_creation.jpg";
import SideButtons from "../../components/SideButtons";
import WhatsAppButton from "../../components/WhatsAppButton";
import CookiePopup from "../../components/Cookies/CookiePopup";
import styled from "styled-components";
import BackToTop from "../../components/BackToTop";

const StyledAdsContentCreation = styled.div`
  background-color: #2a566f;
  color: #fff;
`;

function AdsContentCreation() {
  return (
    <StyledAdsContentCreation>
      <Navigation />
      <Header
        bgImage={bgImage}
        title="Publicitate și Creare de Conținut"
        text1="Afacerile moderne nu se pot baza doar pe servicii bune — au nevoie de publicitate clară și profesionistă care să ajungă la publicul potrivit, la momentul potrivit. La Webvertize, combinăm crearea de conținut, strategia campaniilor publicitare și optimizarea continuă pentru a ne asigura că afacerea ta este vizibilă acolo unde contează cel mai mult."
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <CTA
        title="Ești gata să crești prin publicitate mai eficientă?"
        text="Programează un apel și hai să construim campanii care ajung la clienții potriviți, cu mesajul potrivit."
      />
      <SideButtons />
      <BackToTop />
      <WhatsAppButton />
      <CookiePopup />
      <Footer />
    </StyledAdsContentCreation>
  );
}

export default AdsContentCreation;
