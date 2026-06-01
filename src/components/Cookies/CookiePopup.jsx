import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCookiePopup = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding: 1.25rem 0;
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.35);
`;

const CookiePopupInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.25rem;
  border: none;
  border-radius: var(--radius-btn);
  background-color: var(--color-accent);
  color: var(--color-bg);
  font-family: var(--font-family);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background-color var(--transition),
    transform var(--transition);

  &:hover {
    background-color: var(--color-accent-dim);
    transform: translateY(-1px);
  }
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.25rem;
  border-radius: var(--radius-btn);
  border: 1px solid var(--color-border);
  background-color: transparent;
  color: var(--color-text-secondary);
  font-family: var(--font-family);
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  transition:
    border-color var(--transition),
    color var(--transition);

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }
`;

const StyledP = styled.p`
  margin: 0;
  font-family: var(--font-family);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  max-width: 640px;
`;

function CookiePopup() {
  const [acceptedCookies, setAcceptedCookies] = useState(
    localStorage.getItem("WebvertizeAcceptedCookies") === "true",
  );

  function handleAcceptedCookies() {
    setAcceptedCookies("true");
    localStorage.setItem("WebvertizeAcceptedCookies", "true");
  }

  if (acceptedCookies) return null;

  return (
    <StyledCookiePopup>
      <CookiePopupInner className="container">
        <StyledP>
          Webvertize utilizează cookie-uri de publicitate prin Google Ads pentru
          măsurarea performanței campaniilor noastre. Nu folosim cookie-uri de
          analiză sau personalizare.
        </StyledP>
        <ButtonsContainer>
          <StyledButton onClick={() => handleAcceptedCookies()}>
            Ok
          </StyledButton>
          <StyledLink to="/cookies">Mai multe despre cookie-uri</StyledLink>
        </ButtonsContainer>
      </CookiePopupInner>
    </StyledCookiePopup>
  );
}

export default CookiePopup;
