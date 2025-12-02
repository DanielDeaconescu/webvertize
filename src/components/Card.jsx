import styled from 'styled-components';

const StyledCard = styled.div`
  /* max-width: 120px; */
`;

const StyledP = styled.p`
  text-align: justify;
`;

function Card({ title, subtitle, text, link1, link2 }) {
  return (
    <StyledCard className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
        <StyledP className="card-text">{text}</StyledP>
        <a href="#" className="card-link">
          {link1}
        </a>
        <a href="#" className="card-link">
          {link2}
        </a>
      </div>
    </StyledCard>
  );
}

export default Card;
