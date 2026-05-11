import styled from "styled-components";
import { packages } from "../data/packagesFeatures";
import Package from "./Package";
import NextSteps from "./NextSteps";
import Logo from "./Logo";

const StyledPrices = styled.div`
  padding: 3rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 3rem 1.5rem;
  }
`;

const Header = styled.div``;

const StyledH1 = styled.h1`
  color: #1b3c53;
  text-align: center;
  font-weight: 600;

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

const PackagesContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 0.9rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    font-size: 1rem;
    gap: 0.75rem;
  }
`;

function Packages({ page }) {
  return (
    <StyledPrices>
      <Header className="mb-4">
        {page === "landing" && (
          <div className="mb-3">
            <Logo />
          </div>
        )}
        <StyledH1>Ce include fiecare pachet</StyledH1>
      </Header>
      <PackagesContainer className="container">
        {packages.map((item) => (
          <Package
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
    </StyledPrices>
  );
}

export default Packages;
