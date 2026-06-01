import styled from "styled-components";
import { packages } from "../data/packagesFeatures";
import Package from "./Package";
import { SectionLabel, SectionHeading } from "../styles/shared";

const StyledPrices = styled.div`
  padding: var(--section-padding);
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  background-image: radial-gradient(
    ellipse 80% 50% at 50% 0%,
    rgba(0, 194, 203, 0.06) 0%,
    transparent 70%
  );
`;

const PricingHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const Subtitle = styled.p`
  font-family: var(--font-family);
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  max-width: 520px;
  margin: 0;
`;

const PackagesContainer = styled.div`
  display: flex;
  align-items: stretch;
  gap: 1.25rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledH1 = styled.h1`
  color: #1b3c53;
  text-align: center;
  font-weight: 600;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2rem;
  }
`;

const StyledP = styled.p`
  color: #1b3c53;
  text-align: center;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.2rem !important;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.4rem !important;
  }
`;

function Packages({ page }) {
  return (
    <StyledPrices>
      <div className="container">
        <PricingHeader>
          <SectionLabel>Prețuri</SectionLabel>
          <SectionHeading>
            Alege pachetul potrivit pentru afacerea ta
          </SectionHeading>
          <Subtitle>
            Prețuri clare, fără costuri ascunse. Primul pas nu presupune niciun
            cost.
          </Subtitle>
        </PricingHeader>
        <PackagesContainer>
          {packages.map((item) => (
            <Package
              key={item.title}
              title={item.title}
              featuresList={item.features}
              maintenanceList={item.maintenance}
              price={item.price}
              desc={item.desc}
              type={item.title.toLowerCase()}
              disclaimer={item.disclaimer}
            />
          ))}
        </PackagesContainer>
      </div>
    </StyledPrices>
  );
}

export default Packages;
