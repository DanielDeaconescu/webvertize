import Card from "./Card";
import styled from "styled-components";
import bgWebsitesImage from "../assets/websites_image.jpg";
import bgWebAppsImage from "../assets/web_apps_image.jpg";
import { SectionHeading } from "../styles/shared";

const StyledWebDev = styled.div`
  padding: var(--section-padding);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

function WebDev() {
  return (
    <StyledWebDev className="container">
      <SectionHeading>
        Dezvoltare web – website-uri și aplicații web
      </SectionHeading>

      <CardsGrid>
        <Card
          title="Website-uri"
          text="Website-uri de prezentare profesionale, optimizate pentru mobil și adaptate identității brandului tău."
          link1="/portfolio"
          link2="/websites"
          icon="websites-icon"
          bgImage={bgWebsitesImage}
          overlayOpacity={0.35}
          blur={5}
          caseStudiesBtn="Vezi studii de caz"
          exploreServicesBtn="Descoperă serviciile"
        />

        <Card
          title="Aplicații Web"
          text="Aplicații web personalizate pentru IMM-uri — construite în jurul fluxurilor tale de lucru specifice."
          link1="/portfolio"
          link2="/web-apps"
          icon="web-app-icon"
          bgImage={bgWebAppsImage}
          overlayOpacity={0.35}
          blur={5}
          caseStudiesBtn="Vezi studii de caz"
          exploreServicesBtn="Descoperă serviciile"
        />
      </CardsGrid>
    </StyledWebDev>
  );
}

export default WebDev;
