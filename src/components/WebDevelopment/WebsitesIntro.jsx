import styled from "styled-components";
import websitesImg from "../../assets/custom-websites-image.jpg";
import { SectionLabel, SectionHeading } from "../../styles/shared";

const StyledSection = styled.section`
  padding: var(--section-padding);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const WebsitesImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--radius-card);
  display: block;
  border: 1px solid var(--color-border);
`;

const SectionTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledP = styled.p`
  font-family: var(--font-family);
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin: 0;
`;

function WebsitesIntro() {
  return (
    <StyledSection className="container">
      <WebsitesImage src={websitesImg} className="img-fluid" />
      <div className="row">
        <SectionTextContent>
          <SectionLabel>Ce construim</SectionLabel>
          <SectionHeading>
            Website-uri personalizate, create pentru nevoile reale ale afacerii
            tale
          </SectionHeading>
          <StyledP>
            Fiecare website pe care îl construim pornește de la o înțelegere
            clară a afacerii tale — publicul țintă, obiectivele de business și
            identitatea brandului. Rezultatul este un site care nu doar arată
            profesional, ci lucrează activ pentru tine: atrage vizitatori,
            comunică clar ceea ce oferi și convinge potențialii clienți să ia
            legătura cu tine.
          </StyledP>
        </SectionTextContent>
      </div>
    </StyledSection>
  );
}

export default WebsitesIntro;
