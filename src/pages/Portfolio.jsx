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
      <Header
        bgImage={bgImage}
        title="Proiecte și Studii de Caz"
        text1="Explorează proiectele noastre și vezi cum arată în practică soluțiile pe care le construim."
      />
      <SectionWebsites />
      <CTA
        title="Vrei un proiect similar pentru afacerea ta?"
        text="Programează un apel și spune-ne despre nevoile afacerii tale."
      />
    </StyledPortfolio>
  );
}

export default Portfolio;
