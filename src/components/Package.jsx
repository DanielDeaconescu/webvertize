import {
  faCheck,
  faInfo,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import CTAButton from "./CTAButton";

const StyledPackage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.75rem;
  border-radius: 1px solid
    ${({ type }) =>
      type === "standard" ? "var(--color-accent)" : "var(--color-border)"};
  background-color: ${({ type }) =>
    type === "standard" ? "var(--color-surface-2)" : "var(--color-surface)"};
  box-shadow: ${({ type }) =>
    type === "standard"
      ? "0 0 0 1px var(--color-accent), 0 24px 48px rgba(0, 194, 203, 0.08)"
      : "none"};
  flex: ${({ type }) => (type === "standard" ? "1.15" : "1")};
  transform: ${({ type }) =>
    type === "standard" ? "translateY(-8px)" : "none"};
  color: var(--color-text-secondary);
  transition:
    transform var(--transition),
    box-shadow var(--transition);

  &:hover {
    transform: ${({ type }) =>
      type === "standard" ? "translateY(-12px)" : "translateY(-4px)"};
    box-shadow: ${({ type }) =>
      type === "standard"
        ? "0 0 0 1px var(--color-accent), 0 32px 64px rgba(0, 194, 203, 0.12)"
        : "0 8px 32px rgba(0, 0, 0, 0.3)"};
  }

  @media (max-width: 768px) {
    transform: none;
    width: 100%;
    max-width: 480px;
    &:hover {
      transform: none;
    }
  }
`;

const PackageHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
`;

const PopularityBadge = styled.div`
  display: inline-flex;
  align-self: flex-start;
  padding: 0.3rem 0.85rem;
  border-radius: 99px;
  background-color: var(--color-accent);
  color: var(--color-bg);
  font-family: var(--font-family);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const TitlePriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Title = styled.h3`
  font-family: var(--font-family);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
  margin: 0;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.3rem;
`;

const PriceInner = styled.div`
  font-family: var(--font-family);
  font-size: 2.2rem;
  font-weight: 800;
  color: ${({ type }) =>
    type === "standard" ? "var(--color-accent)" : "var(--color-text)"};
  letter-spacing: -0.03em;
  line-height: 1;
`;

const PriceCurrency = styled.span`
  font-family: var(--font-family);
  font-size: 0.9rem;
  color: var(--color-text-muted);
`;

const Description = styled.div`
  font-family: var(--font-family);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
`;

const PackageMain = styled.div`
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
  flex-grow: 1;
`;

const PackageFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PackageSectionLabel = styled.h5`
  font-family: var(--font-family);
  font-size: var(--font-label);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin: 0 0 1rem 0;
`;

const Main = styled.div`
  border-bottom: 1px solid #4d4d4d;
  padding-bottom: 1.5rem;
  margin-bottom: 1rem;
`;

const MainTitle = styled.h5`
  text-transform: uppercase;
  color: #1b3c53;
  font-size: 0.75rem;
  letter-spacing: 0.05rem;
`;

const MainList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-family: var(--font-family);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
`;

const ListItemInclude = styled.li`
  font-family: var(--font-family);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);
  padding: 0.4rem 0.75rem;
  background-color: var(--color-surface-2);
  border-radius: 6px;
  margin-bottom: 0.5rem;
  border-left: 2px solid var(--color-accent);
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ type }) =>
    type === "standard" ? "var(--color-accent)" : "var(--color-primary-light)"};
  font-size: 0.9rem;
  margin-top: 2px;
  flex-shrink: 0;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Disclaimer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  padding: 0.85rem 1rem;
  border-radius: 8px;
  background-color: var(--color-surface-2);
  border: 1px solid var(--color-border);
`;

const DisclaimerText = styled.div`
  font-family: var(--font-family);
  font-size: 0.8rem;
  font-style: italic;
  color: var(--color-text-muted);
  line-height: 1.5;
  margin: 0;
`;

const DisclaimerIcon = styled.div`
  color: var(--color-text-muted);
  font-size: 0.85rem;
  margin-top: 1px;
  flex-shrink: 0;
`;

const FooterTitle = styled.h5`
  text-transform: uppercase;
`;

function Package({
  title,
  featuresList,
  maintenanceList,
  price,
  desc,
  type,
  disclaimer,
}) {
  return (
    <StyledPackage type={type}>
      <PackageHeader>
        {title.toLowerCase() === "standard" && (
          <PopularityBadge>Cel mai popular</PopularityBadge>
        )}
        <TitlePriceContainer>
          <Title>{title}</Title>
          <PriceContainer>
            <PriceInner type={type}>{price}</PriceInner>
            <PriceCurrency>lei</PriceCurrency>
          </PriceContainer>
        </TitlePriceContainer>
        <Description>{desc}</Description>
      </PackageHeader>

      <PackageMain>
        <PackageSectionLabel>Caracteristici</PackageSectionLabel>
        <MainList>
          {featuresList.map((f, index) => {
            if (index === 0 && type !== "basic")
              return <ListItemInclude key={f}>{f}</ListItemInclude>;
            return (
              <ListItem key={f}>
                <StyledFontAwesomeIcon icon={faCheck} type={type} />
                {f}
              </ListItem>
            );
          })}
        </MainList>
      </PackageMain>
      <PackageFooter>
        <PackageSectionLabel>Mentenanță</PackageSectionLabel>
        <FooterList>
          {maintenanceList.map((item, index) => {
            if (index === 0 && type !== "basic")
              return <ListItemInclude key={item}>{item}</ListItemInclude>;
            return (
              <ListItem key={item}>
                <StyledFontAwesomeIcon icon={faCheck} type={type} />
                {item}
              </ListItem>
            );
          })}
        </FooterList>
        <Disclaimer>
          <DisclaimerIcon>
            <FontAwesomeIcon icon={faInfoCircle} />
          </DisclaimerIcon>
          <DisclaimerText>{disclaimer}</DisclaimerText>
        </Disclaimer>
        <CTAButton type={type} />
      </PackageFooter>
    </StyledPackage>
  );
}

export default Package;
