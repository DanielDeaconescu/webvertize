import styled from 'styled-components';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: #1b3c53;
  padding: 1rem;
  color: #fff;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;
  font-size: 1.2rem;
`;

const ThankYouContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ThankYouText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function ThankYou() {
  return (
    <ThankYouContainer>
      <Logo />
      <ThankYouText>
        <h3>Thank you for filling out the form!</h3>
        <p className="fs-5">
          We will review your request and get back to you as soon as possible.
        </p>
      </ThankYouText>
      <StyledLink to="/">
        <div>
          <FontAwesomeIcon icon={faCircleLeft} />
        </div>
        <div>Back to the main page</div>
      </StyledLink>
    </ThankYouContainer>
  );
}

export default ThankYou;
