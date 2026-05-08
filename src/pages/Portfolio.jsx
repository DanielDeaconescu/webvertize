import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import SectionWebsites from "../components/Portfolio/SectionWebsites";
import SideButtons from "../components/SideButtons";
import bgImage from "../assets/portfolio/portfolio-header.jpg";
import CTA from "../components/CTA";
import WhatsAppButton from "../components/WhatsAppButton";
import CookiePopup from "../components/Cookies/CookiePopup";
import BackToTop from "../components/BackToTop";
import styled from "styled-components";

const StyledPortfolio = styled.div`
  background-color: #2a4f68;
  color: #fff;
`;

function Portfolio() {
  return (
    <StyledPortfolio>
      <Navigation />
      <Header
        bgImage={bgImage}
        title="Proiecte și Studii de Caz"
        text1="Explorează proiectele noastre și descoperă cum dezvoltarea web și publicitatea pot deveni un proces clar și plăcut — nu unul complicat."
        text2="La Webvertize, credem că construirea unei prezențe online este un proces colaborativ, bazat pe comunicare, transparență și încredere. De la concept la lansare, lucrăm îndeaproape cu clienții noștri pentru a crea soluții digitale care susțin obiectivele lor de business."
      />

      <SectionWebsites />

      <CTA
        title="Ești gata să crești prin publicitate mai eficientă?"
        text="Programează un apel și hai să construim campanii care ajung la clienții potriviți, cu mesajul potrivit."
      />
      <SideButtons />
      <BackToTop />
      <WhatsAppButton />
      <CookiePopup />
      <Footer />
    </StyledPortfolio>
  );
}

export default Portfolio;
