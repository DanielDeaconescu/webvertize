import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faGear } from "@fortawesome/free-solid-svg-icons";

const StyledCard = styled.div`
  position: relative;
  height: 100%;
  min-height: 280px;
  border-radius: var(--radius-card);
  overflow: hidden;
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  color: var(--color-text);
  transition:
    border-color var(--transition),
    transform var(--transition),
    box-shadow var(--transition);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url() (${(props) => props.bgImage || ""});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(10, 15, 20, 0.85) 0%,
      rgba(27, 60, 83, 0.7) 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
  }

  @media (min-width: 768px) {
    &:hover {
      border-color: var(--color-accent);
      transform: translateY(-4px);
      box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);

      &::before {
        opacity: 1;
      }

      &::after {
        opacity: 1;
      }
    }
  }
`;

const CardTitle = styled.h4`
  font-family: var(--font-family);
  font-size: var(--font-card-title);
  font-weight: 600;
  color: var(--color-text-secondary);
  margin: 0;
`;

const CardBody = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
  padding: 2rem 1.75rem;
`;

const StyledP = styled.p`
  font-family: var(--font-family);
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.65;
  margin: 0;
  flex-grow: 1;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-accent);
  font-size: 1.5rem;
`;

const CardHeading = styled.h2`
  font-family: var(--font-family);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
  margin: 0;
`;

const CardLinkPrimary = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0.6rem 1rem;
  border-radius: var(--radius-btn);
  background-color: var(--color-accent);
  color: var(--color-bg);
  font-family: var(--font-family);
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition:
    background-color var(--transition),
    transform var(--transition);
  white-space: nowrap;

  &:hover {
    background-color: var(--color-accent-dim);
    transform: translateY(-1px);
  }
`;

const CardLinkGhost = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0.6rem 1rem;
  border-radius: var(--radius-btn);
  background-color: transparent;
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
  font-family: var(--font-family);
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition:
    border-color var(--transition),
    color var(--transition),
    transform var(--transition);
  white-space: nowrap;

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
    transform: translateY(-1px);
  }
`;

const LinksRow = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;

function Card({
  title,
  subtitle,
  text,
  link1,
  link2,
  link3,
  icon,
  bgImage,
  overlayOpacity = 0.5,
  blur = 0,
  bgcolor,
  caseStudiesBtn,
  exploreServicesBtn,
  readMoreBtn,
}) {
  const getIcon = () => {
    if (icon === "websites-icon") return faGlobe;
    if (icon === "web-app-icon") return faGear;
    return null;
  };

  const iconEl = getIcon();

  return (
    <StyledCard bgImage={bgImage}>
      <CardBody>
        {title && (
          <IconWrapper>
            {iconEl && <FontAwesomeIcon icon={iconEl} />}
            <CardHeading>{title}</CardHeading>
          </IconWrapper>
        )}

        {subtitle && <CardTitle>{subtitle}</CardTitle>}
        {text && <StyledP>{text}</StyledP>}
        {(link1 || link2 || link3) && (
          <LinksRow>
            {link1 && (
              <CardLinkGhost to={link1}>{caseStudiesBtn}</CardLinkGhost>
            )}
            {link2 && (
              <CardLinkPrimary to={link2}>{exploreServicesBtn}</CardLinkPrimary>
            )}
            {link3 && (
              <CardLinkPrimary to={link3}>{readMoreBtn}</CardLinkPrimary>
            )}
          </LinksRow>
        )}
      </CardBody>
    </StyledCard>
  );
}

export default Card;
