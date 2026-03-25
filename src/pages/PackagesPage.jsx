import styled from 'styled-components';
import Navigation from '../components/Navigation';
import SideButtons from '../components/SideButtons';
import WhatsAppButton from '../components/WhatsAppButton';
import BackToTop from '../components/BackToTop';
import CookiePopup from '../components/Cookies/CookiePopup';
import Footer from '../components/Footer';
import Packages from '../components/Packages';
import NextSteps from '../components/NextSteps';

const StyledPackagesPage = styled.div`
  background-color: #d3d3d3;
  color: #fff;
`;

function PackagesPage() {
  return (
    <StyledPackagesPage>
      <Navigation />
      <Packages />
      <NextSteps />
      <WhatsAppButton />
      <BackToTop />
      <CookiePopup />
      <Footer />
    </StyledPackagesPage>
  );
}

export default PackagesPage;
