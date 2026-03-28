import styled from 'styled-components';
import Navigation from '../components/Navigation';
import SideButtons from '../components/SideButtons';
import WhatsAppButton from '../components/WhatsAppButton';
import BackToTop from '../components/BackToTop';
import CookiePopup from '../components/Cookies/CookiePopup';
import Footer from '../components/Footer';
import Packages from '../components/Packages';
import NextSteps from '../components/NextSteps';
import Header from '../components/Header';
import pricesHeaderImg from '../assets/prices_header_img.jpg';

const StyledPackagesPage = styled.div`
  background-color: #d3d3d3;
  color: #fff;
`;

function LandingPage() {
  return (
    <StyledPackagesPage>
      <Navigation />
      <Header
        bgImage={pricesHeaderImg}
        title="header.prices.title"
        text1="header.prices.text1"
        text2="header.prices.text2"
      />
      <SideButtons />
      <Packages />
      <NextSteps />
      <WhatsAppButton />
      <BackToTop />
      <CookiePopup />
      <Footer />
    </StyledPackagesPage>
  );
}

export default LandingPage;
