import {
  faChartLine,
  faChartPie,
  faComments,
  faDatabase,
  faTicket,
  faUserLock,
  faUserShield,
  faListCheck,
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

const StyledWebAppsFeatures = styled.section`
  padding: var(--section-padding);
  border-top: 1px solid var(--color-border);
`;

const FeaturesGrid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
`;

const StyledP = styled.p`
  text-align: justify;
  margin-bottom: 0;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0;
`;

const StyledFontAwesomeIocn = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

function WebAppsFeatures() {
  const items = [
    {
      title: "Dashboard-uri și interfețe personalizate",
      text: "Interfețe create în jurul fluxurilor tale de lucru, nu invers, pentru o integrare mai rapidă și o productivitate crescută.",
      icon: faChartLine,
    },
    {
      title: "Acces și permisiuni pe roluri",
      text: "Interfețe dedicate pentru manageri, operatori, membri ai echipei și clienți, astfel încât informația potrivită să ajungă la persoanele potrivite.",
      icon: faUserShield,
    },
    {
      title: "Integrare cu baze de date",
      text: "Baze de date structurate, sigure și scalabile — ușor de căutat și pregătite pentru rapoarte.",
      icon: faDatabase,
    },
    {
      title: "Fluxuri de formulare și introducere date",
      text: "Formulare dinamice cu validări, atașamente și fluxuri de aprobare — pentru a automatiza munca manuală.",
      icon: faListCheck,
    },
    {
      title: "Sisteme de ticketing și suport",
      text: "Centralizează comunicarea, gestionează solicitările, urmărește progresul și obține informații valoroase despre problemele recurente.",
      icon: faTicket,
    },
    {
      title: "Chat live și funcționalități în timp real",
      text: "Mesagerie în timp real între angajați, echipa de suport și clienți, integrată direct în procesele tale existente.",
      icon: faComments,
    },
    {
      title: "Autentificare și management utilizatori",
      text: "Acces securizat prin parolă, autentificare, creare de conturi sau SSO — adaptat nevoilor afacerii tale.",
      icon: faUserLock,
    },
    {
      title: "Analiză și raportare",
      text: "Ia decizii informate pe baza indicatorilor operaționali, jurnalelor de utilizare și rapoartelor de performanță adaptate KPI-urilor tale.",
      icon: faChartPie,
    },
  ];

  return (
    <StyledWebAppsFeatures>
      <div className="container">
        <SectionHeader>
          <SectionLabel>Capabilități</SectionLabel>
          <SectionHeading>Funcționalități & capabilități</SectionHeading>
          <SectionSubtitle>
            În funcție de nevoile afacerii tale, soluția poate include:
          </SectionSubtitle>
        </SectionHeader>
        <FeaturesGrid>
          {items.map((item) => (
            <FeatureCard key={item.title}>
              <FeatureIconWrapper>
                <FontAwesomeIcon icon={item.icon} />
              </FeatureIconWrapper>
              <FeatureTitle>{item.title}</FeatureTitle>
              <FeatureText>{item.text}</FeatureText>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </div>
    </StyledWebAppsFeatures>
  );
}

export default WebAppsFeatures;
