import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ServicesStackedCards from '../../components/WebDevelopment/ServicesStackedCards';
import Websites from '../../components/WebDevelopment/Websites';
import CTA from '../../components/CTA';

function WebsitesPage() {
  return (
    <div>
      <Navigation />
      <Websites />
      <ServicesStackedCards />
      <CTA title="" text="" />
      <Footer />
    </div>
  );
}

export default WebsitesPage;
