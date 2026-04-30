import styled from "styled-components";
import CTAButton from "./CTAButton";

const StyledLandingPageCTA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.25rem;
  background-color: #1f3541;
  color: #fff;
`;

const StyledH4 = styled.h4`
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
`;

function LandingPageCTA() {
  return (
    <StyledLandingPageCTA>
      <StyledH4>
        <div>Gata să începem?</div>
        <div>Primul pas nu presupune costuri.</div>
      </StyledH4>
      <div className="d-flex align-items-center">
        <CTAButton type="cta" />
      </div>
    </StyledLandingPageCTA>
  );
}

export default LandingPageCTA;
