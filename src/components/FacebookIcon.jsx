import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: #1b3c53;
`;

function FacebookIcon() {
  return (
    <a href="https://facebook.com" target="_blank">
      <StyledFontAwesomeIcon icon={faFacebook} />
    </a>
  );
}

export default FacebookIcon;
