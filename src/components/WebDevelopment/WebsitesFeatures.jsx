import {
  faComments,
  faImages,
  faArrowRightToBracket,
  faMapLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  SectionLabel,
  SectionHeading,
  SectionSubtitle,
  FeatureCard,
  FeatureIconWrapper,
  FeatureTitle,
  FeatureText,
} from "../../styles/shared";

const StyledWebsitesFeatures = styled.div`
  padding: var(--section-padding);
  border-top: 1px solid var(--color-border);
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
`;

const StyledSection2 = styled.section`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const FeaturesGrid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturesImg = styled.img`
  border-radius: 20px;
`;

const StyledP = styled.p`
  text-align: justify;
  margin-bottom: 0;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  /* flex-direction: column; */
  gap: 0.5rem;
  padding: 0;
`;

const StyledFontAwesomeIocn = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

function WebsitesFeatures() {
  const cardItems = [
    {
      icon: faComments,
      title: "Chat live",
      text: "Comunicare directă cu vizitatorii site-ului, în timp real.",
    },
    {
      icon: faImages,
      title: "Prezentări de produse",
      text: "Galerii interactive și prezentări vizuale pentru a evidenția produsele și serviciile tale.",
    },
    {
      icon: faEnvelope,
      title: "Formulare",
      text: "Formulare de contact și solicitări, stocate în siguranță în baza de date.",
    },
    {
      icon: faArrowRightToBracket,
      title: "Funcționalitate de autentificare",
      text: "Autentificare securizată și panou de administrare pentru gestionarea conținutului.",
    },
    {
      icon: faMapLocationDot,
      title: "Hărți și elemente interactive",
      text: "Hărți, media încorporată și alte elemente interactive adaptate afacerii tale.",
    },
  ];

  return (
    <StyledWebsitesFeatures>
      <div className="container">
        <SectionHeader>
          <SectionLabel>Capabilități</SectionLabel>
          <SectionHeading>Funcționalități și capabilități</SectionHeading>
          <SectionSubtitle>
            Construim website-uri de prezentare și le extindem cu
            funcționalități personalizate în funcție de nevoile afacerii tale:
          </SectionSubtitle>
        </SectionHeader>
        <FeaturesGrid>
          {cardItems.map((item) => (
            <FeatureCard>
              <FeatureIconWrapper>
                <FontAwesomeIcon icon={item.icon} />
              </FeatureIconWrapper>
              <FeatureTitle>{item.title}</FeatureTitle>
              <FeatureText>{item.text}</FeatureText>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </div>
    </StyledWebsitesFeatures>
  );
}

export default WebsitesFeatures;
