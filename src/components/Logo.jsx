import styled from "styled-components";
import logoImg from "../assets/logo_no_text_simple_final.png";
import logoImgLight from "../assets/logo_no_text_light.png";
import { useTranslation } from "react-i18next";

const StyledLogo = styled.div``;

const StyledLogoImg = styled.img`
  width: 75px;

  @media (max-width: 576px) {
    width: 50px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 60px;
  }
`;

const LogoTitle = styled.div`
  font-family: "Montserrat";
  font-weight: 800;
  font-size: 1.8rem;
  color: ${(props) => (props.theme === "light" ? "#fff" : "#1b3c53")};

  @media (max-width: 576px) {
    font-size: 1.4rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 1.35rem;
  }
`;

const LogoSubtitle = styled.div`
  font-family: "Montserrat";
  font-weight: 600;
  color: ${(props) => (props.theme === "light" ? "#fff" : "#1b3c53")};
  font-size: 1rem;
  margin-top: -10px;
  font-size: 1rem;
  white-space: nowrap;

  @media (max-width: 576px) {
    font-size: 0.8rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    font-size: 0.7rem;
    margin-top: -5px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 0.7rem;
  }
`;

function Logo({ theme }) {
  const { t, i18n } = useTranslation();
  return (
    <StyledLogo className="d-flex justify-content-center align-items-center">
      <div>
        {theme === "light" ? (
          <StyledLogoImg src={logoImgLight} />
        ) : (
          <StyledLogoImg src={logoImg} />
        )}
      </div>
      <div className="d-flex justify-content-center align-items-left flex-column">
        <LogoTitle theme={theme}>Webvertize</LogoTitle>
        <LogoSubtitle theme={theme}>Dezvoltare Web și Publicitate</LogoSubtitle>
      </div>
    </StyledLogo>
  );
}

export default Logo;
