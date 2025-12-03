import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faGear } from '@fortawesome/free-solid-svg-icons';

const StyledCard = styled.div`
  position: relative;
  height: 500px;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;

  /* Hover background */
  &:hover {
    color: #fff;
    background-image: url(${(props) => props.bgImage || ''});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.75);
      z-index: 1;
      border-radius: inherit;
      transition: all 0.3s ease;
    }
  }
`;

const CardBody = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 1rem;
`;

const StyledP = styled.p`
  text-align: justify;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: rgb(35, 76, 106);
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  color: #fff;
  transition: all 0.3s ease;
  margin-right: 0.5rem;

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
  icon,
  bgImage,
  overlayOpacity = 0.5,
  blur = 0,
}) {
  const getIcon = () => {
    if (icon === 'website-icon') return faGlobe;
    if (icon === 'web-app-icon') return faGear;
    return null;
  };

  return (
    <StyledCard
      className="card"
      bgImage={bgImage}
      overlayOpacity={overlayOpacity}
      blur={blur}
    >
      <CardBody className="card-body">
        {title && (
          <h2 className="card-title d-flex align-items-center gap-2">
            {getIcon() && <FontAwesomeIcon icon={getIcon()} />}
            {title}
          </h2>
        )}

        {subtitle && <h4 className="card-subtitle mb-2">{subtitle}</h4>}
        {text && <StyledP>{text}</StyledP>}

        {(link1 || link2) && (
          <div className="d-flex">
            {link1 && <StyledLink to={link1}>View Case Studies</StyledLink>}
            {link2 && <StyledLink to={link2}>Explore Services</StyledLink>}
          </div>
        )}
      </CardBody>
    </StyledCard>
  );
}

export default Card;
