import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CookiePopup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 90;
  width: 80%;
  bottom: 1rem;

  justify-self: center;
  padding: 1rem;
  border-radius: 0.75rem;

  /* glassmorphism effect */
  background: rgb(27, 60, 83, 0.75);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
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
  background-color: #1f465f;
  color: #fff;
  padding: 0.5rem;
`;

const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 0.25rem;
  background-color: #1f465f;
  color: #fff;
  padding: 0.5rem;
`;

function CookiePopupLanding() {
  const { t } = useTranslation();
  const [acceptedCookies, setAcceptedCookies] = useState(
    localStorage.getItem("WebvertizeAcceptedCookies") === "true",
  );

  function handleAcceptedCookies() {
    setAcceptedCookies("true");
    localStorage.setItem("WebvertizeAcceptedCookies", "true");
  }

  return (
    <div>
      {!acceptedCookies && (
        <CookiePopup className="container">
          {/* Text */}
          <div className="d-flex align-items-center gap-1">
            <StyledP>
              Webvertize nu folosește cookies momentan. Vă vom anunța dacă le
              implementăm.
            </StyledP>
            <StyledButton onClick={() => handleAcceptedCookies()}>
              Ok
            </StyledButton>
          </div>
          {/* Container for buttons */}
          {/* <ContainerButtons></ContainerButtons> */}
        </CookiePopup>
      )}
    </div>
  );
}

export default CookiePopupLanding;
