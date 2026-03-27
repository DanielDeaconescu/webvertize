import styled from 'styled-components';
import logoImg from '../assets/logo_no_text_simple_final.png';
import logoImgLight from '../assets/logo_no_text_light.png';
import { useTranslation } from 'react-i18next';

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
  font-family: 'Montserrat';
  font-weight: 800;
  font-size: 1.8rem;
  color: ${(props) => (props.theme === 'light' ? '#fff' : '#1b3c53')};

  @media (max-width: 576px) {
    font-size: 1.4rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const LogoSubtitle = styled.div`
  font-family: 'Montserrat';
  font-weight: 600;
  color: ${(props) => (props.theme === 'light' ? '#fff' : '#1b3c53')};
  font-size: 1rem;
  margin-top: -10px;
  font-size: 1rem;
  margin-left: 7px;
  white-space: nowrap;

  @media (max-width: 576px) {
    font-size: 0.8rem;
    margin-left: 3px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    font-size: 0.7rem;
    margin-left: 3px;
    margin-top: -5px;
  }
`;

function Logo({ theme, lng }) {
  const { t, i18n } = useTranslation();
  return (
    <StyledLogo className="d-flex justify-content-center align-items-center">
      <div>
        {theme === 'light' ? (
          <StyledLogoImg src={logoImgLight} />
        ) : (
          <StyledLogoImg src={logoImg} />
        )}
      </div>
      <div className="d-flex justify-content-center align-items-left flex-column">
        <LogoTitle theme={theme}>Webvertize</LogoTitle>
        <LogoSubtitle theme={theme}>
          {lng === 'ro'
            ? 'Dezvoltare Web și Publicitate'
            : 'Web Development & Ads'}
        </LogoSubtitle>
      </div>
    </StyledLogo>
  );
}

export default Logo;
