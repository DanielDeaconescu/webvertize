import styled from "styled-components";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Footer from "./Footer";

const StyledFooter = styled.footer`
  padding: 2rem 0;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  color: var(--color-text);
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;

const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  font-family: var(--font-family);
  font-size: var(--font-small);
  color: var(--color-text-muted);
`;

const WhatsAppLink = styled.a`
  font-family: var(--font-family);
  font-size: var(--font-small);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--transition);

  &:hover {
    color: #25d366;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CopyrightText = styled.div`
  font-size: 0.875rem;
`;

const FooterYear = styled.div`
  display: flex;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  justify-content: center;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

function LandingFooter() {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <div className="container">
        <FooterRow>
          <Logo theme="light" />
          <Copyright>
            <span>© {year} Webvertize SRL</span>
            <span>Toate drepturile rezervate.</span>
          </Copyright>
          <WhatsAppLink
            href="https://wa.me/+40775511874"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactează-ne pe WhatsApp
          </WhatsAppLink>
        </FooterRow>
      </div>
    </StyledFooter>
  );
}

export default LandingFooter;
