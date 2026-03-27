import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCookiePopup = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 80%;
  z-index: 100;
  background-color: #1b3c53;
  color: #fff;
  border-top: 3px solid #fff;
  padding: 1rem;
  justify-self: center;
  border-radius: 2rem;
  /* Glassmorphism effect */
  background: rgba(27, 60, 83, 0.65);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const CookiePopupInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: row;
    width: 100%;
  }
`;

const StyledButton = styled.button`
  border: none;
  padding: 0.25rem 1rem;
  border-radius: 10px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    flex: 1;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  background-color: #fff;
  padding: 0.25rem 1rem;
  border-radius: 10px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    flex: 6;
    display: flex;
    justify-content: center;
  }
`;

const StyledP = styled.p`
  display: flex;
  text-align: justify;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
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
    <>
      {!acceptedCookies && (
        <StyledCookiePopup>
          <CookiePopupInner className="container">
            <Row className="row">
              {/* Message */}
              <div className="col-md-8 mb-3">
                <StyledP>
                  Webvertize nu folosește cookies momentan. Vă vom anunța dacă
                  le implementăm.
                </StyledP>
              </div>
              {/* Buttons */}
              <div className="col-md-4 d-flex align-items-center justify-content-center">
                <ButtonsContainer>
                  <StyledButton onClick={() => handleAcceptedCookies()}>
                    Ok
                  </StyledButton>
                  <StyledLink to="/cookies">
                    Mai multe despre cookies
                  </StyledLink>
                </ButtonsContainer>
              </div>
            </Row>
          </CookiePopupInner>
        </StyledCookiePopup>
      )}
    </>
  );
}

export default CookiePopupLanding;
