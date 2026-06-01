import styled from "styled-components";
import CTAButton from "./CTAButton";

const StyledLandingPageCTA = styled.div`
  padding: clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem);
  background-color: var(--color-primary-dark);
  background-image: radial-gradient(
    ellipse 80% 60% at 50% 100%,
    rgba(0, 194, 203, 0.1) 0%,
    transparent 70%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
`;

const CTAHeading = styled.h2`
  font-family: var(--font-family);
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
  line-height: 1.3;
  margin: 0;
  max-width: 560px;
`;

const CTASubtitle = styled.p`
  font-family: var(--font-family);
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  margin: 0;
`;

const CTAButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 280px;
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

function LandingPageCTA() {
  return (
    <StyledLandingPageCTA>
      <CTAHeading>Gata să construim prezența ta online?</CTAHeading>
      <CTASubtitle>Primul pas nu presupune niciun cost.</CTASubtitle>
      <CTAButtonWrapper>
        <CTAButton type="cta" />
      </CTAButtonWrapper>
    </StyledLandingPageCTA>
  );
}

export default LandingPageCTA;
