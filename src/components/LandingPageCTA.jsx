import styled from "styled-components";
import CTAButton from "./CTAButton";

const StyledLandingPageCTA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2.25rem;
  background-color: #1f3541;
  color: #fff;
  border-radius: 1rem;
  margin: 0 2rem 2rem 2rem;

  @media (max-width: 768px) {
    margin: 0 1rem 1rem 1rem;
  }
`;

const StyledH2 = styled.h2`
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.75rem;
  line-height: 1.4;

  @media (max-width: 576px) {
    font-size: 1.25rem;
  }
`;

const CTAButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 280px;
  margin-top: 0.5rem;
`;

function LandingPageCTA() {
  return (
    <StyledLandingPageCTA>
      <StyledH2>
        <div>Gata să construim prezența ta online?</div>
        <div>Contactează-ne azi! Primul pas nu presupune niciun cost.</div>
      </StyledH2>
      <CTAButtonWrapper>
        <CTAButton type="cta" />
      </CTAButtonWrapper>
    </StyledLandingPageCTA>
  );
}

export default LandingPageCTA;
