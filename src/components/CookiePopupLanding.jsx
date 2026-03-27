import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CookiePopup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 1rem;
  background-color: grey;
  justify-self: center;
  padding: 1rem;
  border-radius: 0.75rem;
`;

const StyledP = styled.p`
  margin: 0;
`;

const ContainerButtons = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 0.25rem;
  background-color: #1b3c53;
  color: #fff;
  padding: 0.5rem;
`;

const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 0.25rem;
  background-color: #1b3c53;
  color: #fff;
  padding: 0.5rem;
`;

function CookiePopupLanding() {
  const { t } = useTranslation();
  const [acceptedCookies, setAcceptedCookies] = useState(
    localStorage.getItem('WebvertizeAcceptedCookies') === 'true',
  );

  function handleAcceptedCookies() {
    setAcceptedCookies('true');
    localStorage.setItem('WebvertizeAcceptedCookies', 'true');
  }

  return (
    <div>
      {!acceptedCookies && (
        <CookiePopup className="container">
          {/* Text */}
          <div>
            <StyledP>
              Webvertize nu folosește cookies momentan. Vă vom anunța dacă le
              implementăm.
            </StyledP>
          </div>
          {/* Container for buttons */}
          <ContainerButtons>
            <StyledButton onClick={() => handleAcceptedCookies()}>
              Ok
            </StyledButton>
            <StyledLink>Mai multe despre cookies</StyledLink>
          </ContainerButtons>
        </CookiePopup>
      )}
    </div>
  );
}

export default CookiePopupLanding;
