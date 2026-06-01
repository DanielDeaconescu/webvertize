import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { SectionHeading } from "../styles/shared";

const StyledOurMission = styled.div`
  padding: var(--section-padding);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-surface);
`;

const MissionInner = styled.div`
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const SectionLabel = styled.span`
  font-family: var(--font-family);
  font-size: var(--font-label);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  @media (max-width: 576px) {
    margin-bottom: 1rem;
  }
`;

const StyledP = styled.p`
  font-family: var(--font-family);
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin: 0;
`;

function OurMission() {
  return (
    <StyledOurMission>
      <MissionInner className="container">
        <SectionLabel>Misiunea noastră</SectionLabel>
        <SectionHeading>Construim prezența ta online cu sens</SectionHeading>
        <StyledP>
          La Webvertize, ajutăm afacerile să își construiască prezența online pe
          care o merită — prin website-uri de calitate, aplicații web și
          campanii publicitare orientate spre rezultate reale. Lucrăm direct cu
          tine, fără intermediari, și livrăm soluții adaptate nevoilor reale ale
          afacerii tale.
        </StyledP>
      </MissionInner>
    </StyledOurMission>
  );
}

export default OurMission;
