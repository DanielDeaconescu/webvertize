import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faArrowUpRightFromSquare,
  faComments,
  faUserPlus,
  faMobileScreenButton,
  faCartShopping,
  faImage,
  faImages,
  faLayerGroup,
  faMobileScreen,
  faFilm,
  faBookOpen,
  faSquarePollVertical,
  faCubes,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import { SectionHeading, SectionLabel } from "../../styles/shared";

const StyledSection3 = styled.section`
  padding: var(--section-padding);
  border-top: 1px solid var(--color-border);
`;

const SubsectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ObjectivesGrid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 3rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ObjectiveItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  transition:
    border-color var(--transition),
    transform var(--transition);

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-2px);
  }
`;

const ObjectiveIcon = styled.div`
  color: var(--color-accent);
  font-size: 1.25rem;
`;

const ObjectiveTitle = styled.h3`
  font-family: var(--font-family);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
`;

const ObjectiveText = styled.p`
  font-family: var(--font-family);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.55;
  margin: 0;
`;

const FormatsGrid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 576ppx) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FormatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 1.25rem 1rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  text-align: center;
  transition:
    border-color var(--transition),
    transform var(--transition);

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-2px);
  }
`;

const FormatIcon = styled.div`
  color: var(--color-accent);
  font-size: 1.25rem;
`;

const FormatText = styled.span`
  font-family: var(--font-family);
  font-size: 0.825rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  line-height: 1.4;
`;

const ContentRow = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1.5rem;
  }
`;

const TitleTotal = styled.div``;

const Title = styled.h2``;

const Subtitle = styled.div``;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function Section3() {
  const campaignObjectives = [
    {
      icon: faEye,
      title: "Notorietate",
      text: "Maximizarea acoperirii și a gradului de memorare a brandului",
    },
    {
      icon: faArrowUpRightFromSquare,
      title: "Trafic",
      text: "Direcționarea utilizatorilor către website-uri sau pagini de aterizare",
    },
    {
      icon: faComments,
      title: "Interacțiune",
      text: "Creșterea aprecierilor, comentariilor și a vizualizărilor video",
    },
    {
      icon: faUserPlus,
      title: "Lead-uri",
      text: "Colectarea datelor clienților prin formulare instant sau mesagerie",
    },
    {
      icon: faMobileScreenButton,
      title: "Promovare Aplicații",
      text: "Creșterea numărului de instalări și a activității în aplicație",
    },
    {
      icon: faCartShopping,
      title: "Vânzări",
      text: "Încurajarea achizițiilor directe sau a conversiilor",
    },
  ];

  const adFormats = [
    { icon: faImage, adText: "Reclame cu Imagine" },
    { icon: faCirclePlay, adText: "Reclame Video / Reels" },
    { icon: faImages, adText: "Reclame Carousel" },
    { icon: faLayerGroup, adText: "Reclame Collection" },
    { icon: faMobileScreen, adText: "Reclame Instant Experience" },
    { icon: faFilm, adText: "Reclame Slideshow" },
    { icon: faBookOpen, adText: "Reclame Stories" },
    { icon: faSquarePollVertical, adText: "Reclame cu Poll" },
  ];

  return (
    <StyledSection3>
      <div className="container">
        <SubsectionHeader>
          <SectionLabel>Facebook & Instagram</SectionLabel>
          <SectionHeading>Reclame Facebook & Instagram</SectionHeading>
        </SubsectionHeader>
        <SubsectionHeader style={{ marginTop: "2rem" }}>
          <SectionHeading
            style={{ fontSize: "var(--font-card-title)", fontWeight: 600 }}
          >
            Obiectivele de Campanie pe care le Susținem
          </SectionHeading>
        </SubsectionHeader>
        <ObjectivesGrid>
          {campaignObjectives.map((item) => (
            <ObjectiveItem key={item.title}>
              <ObjectiveIcon>
                <FontAwesomeIcon icon={item.icon} />
              </ObjectiveIcon>
              <ObjectiveTitle>{item.title}</ObjectiveTitle>
              <ObjectiveText>{item.text}</ObjectiveText>
            </ObjectiveItem>
          ))}
        </ObjectivesGrid>

        <SubsectionHeader>
          <SectionHeading
            style={{ fontSize: "var(--font-card-title)", fontWeight: 600 }}
          >
            Formate de Reclame Disponibile
          </SectionHeading>
        </SubsectionHeader>
        <FormatsGrid>
          {adFormats.map((item) => (
            <FormatItem key={item.adText}>
              <FormatIcon>
                <FontAwesomeIcon icon={item.icon} />
              </FormatIcon>
              <FormatText>{item.adText}</FormatText>
            </FormatItem>
          ))}
        </FormatsGrid>
      </div>
    </StyledSection3>
  );
}

export default Section3;
