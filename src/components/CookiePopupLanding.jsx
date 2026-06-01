import { useState } from "react";
import styled from "styled-components";

const CookiePopup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 90;
  width: 80%;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 1.5rem;
  border-radius: 16px;
  background: rgba(27, 60, 83, 0.75);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;

  @media (max-width: 576px) {
    width: 95%;
  }
`;

const StyledP = styled.p`
  margin: 0;
  text-align: center;
  font-size: 0.9rem;
`;

const ContainerButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const StyledButton = styled.button`
  border: ${(props) =>
    props.variant === "refuse" ? "1px solid rgba(255,255,255,0.4)" : "none"};
  border-radius: 0.25rem;
  background-color: ${(props) =>
    props.variant === "refuse" ? "transparent" : "#1b3c53"};
  color: #fff;
  padding: 0.5rem 1.25rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) =>
      props.variant === "refuse" ? "rgba(255,255,255,0.1)" : "#2a566f"};
  }
`;

function CookiePopupLanding() {
  const [accepted, setAccepted] = useState(
    localStorage.getItem("WebvertizeAcceptedCookies") !== null,
  );

  function handleAccept() {
    localStorage.setItem("WebvertizeAcceptedCookies", "true");
    setAccepted(true);
  }

  function handleRefuse() {
    localStorage.setItem("WebvertizeAcceptedCookies", "false");
    setAccepted(true);
  }

  if (accepted) return null;

  return (
    <CookiePopup>
      <StyledP>
        Webvertize utilizează cookie-uri de publicitate prin Google Ads pentru
        măsurarea performanței campaniilor noastre. Nu folosim cookie-uri de
        analiză sau personalizare.
      </StyledP>
      <ContainerButtons>
        <StyledButton onClick={handleRefuse} variant="refuse">
          Refuză
        </StyledButton>
        <StyledButton onClick={handleAccept}>Acceptă</StyledButton>
      </ContainerButtons>
    </CookiePopup>
  );
}

export default CookiePopupLanding;
