import styled from 'styled-components';
import Navigation from '../components/Navigation';
import SideButtons from '../components/SideButtons';
import WhatsAppButton from '../components/WhatsAppButton';
import BackToTop from '../components/BackToTop';
import CookiePopup from '../components/Cookies/CookiePopup';
import Footer from '../components/Footer';

const StyledPrices = styled.div`
  background-color: #1b3c53;
  color: #fff;
  font-size: 2.2rem;
  font-weight: 500;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Prices() {
  return (
    <div>
      <Navigation />
      <StyledPrices>Coming Soon</StyledPrices>
      <SideButtons />
      <WhatsAppButton />
      <BackToTop />
      <CookiePopup />
      <Footer />
    </div>
  );
}

export default Prices;
