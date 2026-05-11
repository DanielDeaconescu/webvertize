import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faGear } from "@fortawesome/free-solid-svg-icons";

const StyledCard = styled.div`
  height: 100%;
  position: relative;
  padding: 2rem 0.5rem;
  border: none;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  background-color: rgba(168, 187, 163, 0.25);
  color: #fff;

  @media (max-width: 576px) {
    padding: 0;
    margin-bottom: 1rem;
  }

  @media (min-width: 576px) and (max-width: 769px) {
    padding: 0;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    padding: 0;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    padding: 0.5rem;
  }

  /* Hover background */
  @media (min-width: 768px) {
    &:hover {
      color: #fff;
      background-image: url(${(props) => props.bgImage || ""});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.65);
        z-index: 1;
        border-radius: inherit;
        transition: all 0.3s ease;
      }
    }
  }
`;

const CardTitle = styled.h4`
  /* @media (min-width: 992px) and (max-width: 1200px) {
    text-align: left;
  } */
`;

const CardBody = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  height: 100%;
  padding: 1rem;
  flex-grow: 1 !important;
`;

const StyledP = styled.p``;

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: rgb(35, 76, 106);
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  color: #fff;
  transition: all 0.3s ease;
  margin-right: 0.5rem;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgb(60, 110, 150);
  }
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

  return (
    <StyledCard
      className="card"
      bgcolor={bgcolor}
      bgImage={bgImage}
      overlayOpacity={overlayOpacity}
      blur={blur}
    >
      <CardBody className="card-body">
        {title && (
          <h2 className="card-title d-flex align-items-center gap-2 fs-1">
            {getIcon() && <FontAwesomeIcon icon={getIcon()} />}
            {title}
          </h2>
        )}

        {subtitle && (
          <CardTitle className="text-start card-subtitle mb-2 fs-4">
            {subtitle}
          </CardTitle>
        )}
        {text && <StyledP className="fs-5">{text}</StyledP>}

        {(link1 || link2 || link3) && (
          <div className="d-flex">
            {link1 && <StyledLink to={link1}>{caseStudiesBtn}</StyledLink>}
            {link2 && <StyledLink to={link2}>{exploreServicesBtn}</StyledLink>}
            {link3 && <StyledLink to={link3}>{readMoreBtn}</StyledLink>}
          </div>
        )}
      </CardBody>
    </StyledCard>
  );
}

export default Card;
