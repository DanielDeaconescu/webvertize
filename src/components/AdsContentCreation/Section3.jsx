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

const StyledSection3 = styled.section`
  padding-bottom: 4rem;
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
    <StyledSection3 className="container">
      <ContentRow className="row">
        <TitleTotal className="mb-4">
          <Title>Reclame Facebook & Instagram</Title>
        </TitleTotal>
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
