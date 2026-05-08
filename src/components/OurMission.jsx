import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledOurMission = styled.div``;

const StyledH2 = styled.h2``;

const Subtitle = styled.p``;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  @media (max-width: 576px) {
    margin-bottom: 1rem;
  }
`;

const TitleContainer = styled.h2`
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }
`;

const Title = styled.div``;

const StyledP = styled.p`
  text-align: justify;

  @media (max-width: 576px) {
    padding: 0.5rem;
  }
`;

function OurMission() {
  return (
    <StyledOurMission className="container mb-4">
      <StyledH2>Misiunea noastră</StyledH2>
      <Subtitle className="fs-5">
        Soluții digitale concepute pentru a-ți dezvolta afacerea
      </Subtitle>
      <Description>
        <TitleContainer></TitleContainer>
        <StyledP className="fs-4">
          La Webvertize, misiunea noastră este să ajutăm afacerile să își
          construiască prezența online puternică pe care o merită. Facem acest
          lucru prin livrarea de website-uri de înaltă calitate, aplicații web,
          conținut atractiv și campanii publicitare orientate spre performanță,
          care susțin creșterea reală a afacerii.
        </StyledP>
        <StyledP className="fs-4">
          Credem că transformarea digitală ar trebui să fie o experiență
          plăcută, nu una stresantă. Prin dedicare, transparență și o abordare
          colaborativă, lucrăm alături de tine pentru a-ți înțelege nevoile și a
          oferi soluții care generează un impact măsurabil.
        </StyledP>
        <StyledP className="fs-4">
          Scopul nostru nu este doar finalizarea unui proiect — ci construirea
          unui parteneriat pe termen lung, în care succesul este împărtășit,
          obiectivele sunt atinse împreună, iar afacerea ta evoluează cu
          încredere în mediul digital.
        </StyledP>
      </Description>
    </StyledOurMission>
  );
}

export default OurMission;
