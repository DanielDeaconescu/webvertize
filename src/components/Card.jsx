import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const StyledCard = styled.div`
  height: 500px;
  border-radius: 1rem;
  transition: all 0.3s ease;
  &:hover {
    background-image: url(${(props) => props.bgWebsitesImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.9);
      opacity: 0.8;
      z-index: 1;
      border-radius: 1rem;
    }
    color: #fff !important;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 100;
`;

const StyledP = styled.p`
  text-align: justify;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: rgb(35, 76, 106);
  padding: 1rem;
  border-radius: 0.5rem;
  color: #fff;
  transition: all 0.3s ease;

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
  bgWebsitesImage,
  bgWebAppsImage,
}) {
  return (
    <StyledCard
      className="card"
      bgWebsitesImage={
        title === 'Web Applications' ? bgWebAppsImage : bgWebsitesImage
      }
    >
      <CardBody className="card-body">
        <h2 className="card-title d-flex align-items-center gap-1">
          {icon === 'websites-icon' ? (
            <FontAwesomeIcon icon={faGlobe} />
          ) : (
            <FontAwesomeIcon icon={faGear} />
          )}
          {title}
        </h2>
        <h4 className="card-subtitle mb-2">{subtitle}</h4>
        <StyledP className="card-text fs-6">{text}</StyledP>
        <div className="d-flex">
          <StyledLink to="/portfolio" className="card-link">
            {link1 === '/portfolio' ? 'View Case Studies' : ''}
          </StyledLink>
          <StyledLink to="/services" className="card-link">
            {link2 === '/services' ? 'Explore Services' : ''}
          </StyledLink>
        </div>
      </CardBody>
    </StyledCard>
  );
}

export default Card;
