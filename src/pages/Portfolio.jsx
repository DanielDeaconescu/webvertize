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
import { Helmet } from "react-helmet-async";

const StyledPortfolio = styled.div`
  background-color: #2a4f68;
  color: #fff;
`;

function Portfolio() {
  return (
    <StyledPortfolio>
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
