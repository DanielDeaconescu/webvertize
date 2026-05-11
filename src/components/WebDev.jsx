import Card from "./Card";
import styled from "styled-components";
import bgWebsitesImage from "../assets/websites_image.jpg";
import bgWebAppsImage from "../assets/web_apps_image.jpg";

const StyledWebDev = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 4rem;

  @media (max-width: 576px) {
    padding-top: 1rem;
    gap: 1rem;
    text-align: center;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    padding-top: 1.5rem;
    gap: 1rem;
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    padding-top: 2rem;
    gap: 1rem;
    text-align: center;
  }
`;

function WebDev() {
  return (
    <StyledWebDev className="container">
      <h1>Dezvoltare web – website-uri și aplicații web</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <Card
              title="Website-uri"
              text="Website-uri de prezentare profesionale, optimizate pentru mobil și adaptate identității brandului tău."
              link1="/portfolio"
              link2="/websites"
              icon="websites-icon"
              bgImage={bgWebsitesImage}
              bgcolor={"rgba(110, 162, 193, 0.7)"}
              overlayOpacity={0.35}
              blur={5}
              caseStudiesBtn="Vezi studii de caz"
              exploreServicesBtn="Descoperă serviciile"
            />
          </div>
          <div className="col-md-6 mb-4">
            <Card
              title="Aplicații Web"
              text="Aplicații web personalizate pentru IMM-uri — construite în jurul fluxurilor tale de lucru specifice."
              link1="/portfolio"
              link2="/web-apps"
              icon="web-app-icon"
              bgImage={bgWebAppsImage}
              bgcolor="rgba(199, 204, 210, 0.5)"
              overlayOpacity={0.35}
              blur={5}
              caseStudiesBtn="Vezi studii de caz"
              exploreServicesBtn="Descoperă serviciile"
            />
          </div>
        </div>
      </div>
    </StyledWebDev>
  );
}

export default WebDev;
