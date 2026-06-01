import styled from "styled-components";
import logoImg from "../assets/logo_no_text_simple_final.png";
import logoImgLight from "../assets/logo_no_text_light.png";
import { useTranslation } from "react-i18next";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
`;

const StyledLogoImg = styled.img`
  width: 75px;
  height: auto;
  display: block;
  flex-shrink: 0;

  @media (max-width: 576px) {
    width: 50px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 60px;
  }
`;

const LogoTitle = styled.div`
  font-family: var(--font-logo);
  font-weight: 800;
  font-size: 1.8rem;
  color: ${({ theme }) =>
    theme === "light" ? "var(--color-text)" : "var(--color-primary)"};
  letter-spacing: -0.02em;
  line-height: 1.1;

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
  font-family: var(--font-logo);
  font-weight: 600;
  font-size: 0.72rem;
  color: ${({ theme }) =>
    theme === "light"
      ? "var(--color-text-secondary)"
      : "var(--color-primary-light)"};
  margin-top: -4px;
  letter-spacing: 0.06em;
  white-space: nowrap;

  @media (max-width: 576px) {
    font-size: 0.62rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    font-size: 0.6rem;
    margin-top: -3px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 0.62rem;
  }
`;

function Logo({ theme }) {
  return (
    <StyledLogo>
      <StyledLogoImg
        src={theme === "light" ? logoImgLight : logoImg}
        alt="Webvertize logo"
        width="75"
        height="75"
      />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <LogoTitle theme={theme}>Webvertize</LogoTitle>
        <LogoSubtitle theme={theme}>Dezvoltare Web și Publicitate</LogoSubtitle>
      </div>
    </StyledLogo>
  );
}

export default Logo;
