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
  faPlayCircle,
  faImages,
  faLayerGroup,
  faMobileScreen,
  faFilm,
  faBookOpen,
  faSquarePollVertical,
  faCubes,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const StyledSection3 = styled.section`
  padding-bottom: 4rem;
  /* border: 1px solid white; */
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

const Subtitle = styled.div`
  /* margin-top: -12px; */
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function Section3() {
  const { t } = useTranslation();

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
    { icon: faCubes, adText: "Reclame cu Realitate Augmentată" },
  ];

  return (
    <StyledSection3 className="container">
      <ContentRow className="row">
        <TitleTotal className="mb-4">
          <Title>Reclame Facebook & Instagram</Title>
          <Subtitle className="fs-5">
            Atinge, Implică și Convertește prin Publicitate Meta
          </Subtitle>
        </TitleTotal>

        <p className="fs-4">
          Platformele Meta oferă opțiuni avansate de publicitate, cu targetare
          precisă bazată pe interese, comportamente și date demografice.
        </p>
        <h2>Obiectivele de Campanie pe care le Susținem</h2>
        <StyledUl>
          {campaignObjectives.map((item) => (
            <li>
              <div className="card rounded-4">
                <div className="card-body">
                  <div className="fs-5 d-flex gap-2">
                    <div>
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                    <div>
                      <strong>{item.title}</strong> - {item.text}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </StyledUl>
      </ContentRow>
      {/* Campaign Types We Manage */}
      <ContentRow className="row">
        <h2>Formate de Reclame Disponibile</h2>
        <div className="card rounded-4">
          <StyledUl className="list-group list-group-flush">
            {adFormats.map((item) => (
              <li className="list-group-item d-flex gap-2 align-items-center fs-5">
                <FontAwesomeIcon icon={item.icon} />
                {item.adText}
              </li>
            ))}
          </StyledUl>
        </div>
      </ContentRow>
    </StyledSection3>
  );
}

export default Section3;
