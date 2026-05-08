import styled from "styled-components";
import {
  faPenNib,
  faChartLine,
  faComments,
  faBullseye,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const StyledSection4 = styled.div`
  /* border: 1px solid black; */
`;

const ContentRow = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem;
  }
`;

const TitleTotal = styled.div``;

const Title = styled.h2``;

const Subtitle = styled.div`
  /* margin-top: -12px; */
  margin-bottom: 1rem;
`;

const StyledP = styled.p`
  text-align: justify;

  @media (max-width: 576px) {
    padding: 0 1.5rem;
  }
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Item = styled.li``;

function Section4() {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: faPenNib,
      text: "Materiale creative de înaltă calitate, realizate pentru afacerea ta",
    },
    {
      icon: faChartLine,
      text: "Optimizare bazată pe date, pe toate platformele",
    },
    { icon: faComments, text: "Comunicare constantă și rapoarte clare" },
    {
      icon: faBullseye,
      text: "Strategie adaptată obiectivelor și bugetului tău",
    },
    {
      icon: faHandshake,
      text: "Strategie adaptată obiectivelor și bugetului tău",
    },
  ];

  return (
    <StyledSection4 className="container">
      <ContentRow className="row">
        <TitleTotal>
          <Title>De Ce Să Lucrezi cu Webvertize</Title>
          <Subtitle className="fs-4">
            Proces Simplu, Rezultate Puternice
          </Subtitle>
        </TitleTotal>

        <StyledP className="fs-5">
          La Webvertize, credem că publicitatea nu ar trebui să fie complicată,
          stresantă sau copleșitoare. Abordăm fiecare proiect de advertising ca
          pe o călătorie creativă pe care o parcurgem împreună — una în care
          ideile circulă liber, experimentarea este încurajată, iar procesul
          devine implicant și chiar plăcut. Campaniile reușite se construiesc
          prin colaborare solidă, iar noi ne asigurăm că această colaborare este
          naturală, energizantă și cu adevărat plăcută.
        </StyledP>
        <StyledUl>
          {reasons.map((reason) => (
            <Item>
              <div class="card rounded-4">
                <div class="card-body d-flex gap-2 fs-5">
                  <div>
                    <FontAwesomeIcon icon={reason.icon} />
                  </div>
                  <div>{reason.text}</div>
                </div>
              </div>
            </Item>
          ))}
        </StyledUl>
      </ContentRow>
    </StyledSection4>
  );
}

export default Section4;
