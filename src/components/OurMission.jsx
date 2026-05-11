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
      <Description>
        <TitleContainer></TitleContainer>
        <StyledP className="fs-4">
          La Webvertize, ajutăm afacerile să își construiască prezența online pe
          care o merită — prin website-uri de calitate, aplicații web și
          campanii publicitare orientate spre rezultate reale. Lucrăm direct cu
          tine, fără intermediari, și livrăm soluții adaptate nevoilor reale ale
          afacerii tale.
        </StyledP>
      </Description>
    </StyledOurMission>
  );
}

export default OurMission;
