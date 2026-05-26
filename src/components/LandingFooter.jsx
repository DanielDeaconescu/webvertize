import styled from "styled-components";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const StyledFooter = styled.footer`
  display: flex;
  padding: 2rem 1rem;
  background-color: rgb(34, 40, 49);
  color: #fff;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  margin: 0 2rem;

  @media (max-width: 576px) {
    margin: 0 1rem 0 1rem;
  }
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0.5rem 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const WhatsAppLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    color: #fff;
    text-decoration: underline;
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

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #fff;
`;

function LandingFooter() {
  const [now] = useState(() => Date.now());
  const date = new Date(now);
  const year = date.getFullYear();

  return (
    <StyledFooter>
      <FooterRow>
        <LogoWrapper>
          <Logo theme={"light"} />
        </LogoWrapper>
        {/* Copyright */}
        <Copyright>
          <div className="d-flex gap-1 align-items-center">
            <FontAwesomeIcon icon={faCopyright} />
            <CopyrightText>
              Webvertize SRL - Toate drepturile rezervate.
            </CopyrightText>
          </div>

          {/* Year */}
          <FooterYear>{year}</FooterYear>
        </Copyright>
        {/* WhatsApp link */}
        <div>
          <WhatsAppLink
            href="https://wa.me/+40775511874"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactează-ne pe WhatsApp
          </WhatsAppLink>
        </div>
      </FooterRow>
    </StyledFooter>
  );
}

export default LandingFooter;
