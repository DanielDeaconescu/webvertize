import styled from "styled-components";
import Logo from "./Logo";
import FacebookIcon from "./FacebookIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import Form from "./Form";
import { Link } from "react-router-dom";
import ModalForm from "./ModalForm";
import { useTranslation } from "react-i18next";

const StyledFooter = styled.footer`
  padding: 1rem;
  background-color: rgb(34, 40, 49);
  color: #fff;
`;

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;
const StyledLinkLogo = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #fff;
`;

const StyledRegularLink = styled(Link)`
  text-decoration: none;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterRow = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
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
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CopyrightText = styled.div``;

const FooterYear = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const QuickLinksWrapper = styled.div`
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const SocialMediaWrapper = styled.div`
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #fff;
`;

function LandingFooter() {
  const [now] = useState(() => Date.now());
  const date = new Date(now);
  const year = date.getFullYear();

  return (
    <StyledFooter className="d-flex justify-content-between">
      <div className="container">
        <FooterRow className="row d-flex">
          <LogoWrapper className="col-md-4 d-flex">
            <Logo theme={"light"} />
          </LogoWrapper>
          {/* Copyright */}
          <Copyright className="col-md-4">
            <FontAwesomeIcon icon={faCopyright} />
            <CopyrightText>
              Webvertize - Toate drepturile rezervate.
            </CopyrightText>
          </Copyright>
          {/* Year */}
          <FooterYear className="col-md-4 d-flex">{year}</FooterYear>
        </FooterRow>
      </div>
    </StyledFooter>
  );
}

export default LandingFooter;
