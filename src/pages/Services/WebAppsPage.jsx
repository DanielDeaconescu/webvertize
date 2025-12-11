import Navigation from '../../components/Navigation';
import WebApps from '../../components/WebDevelopment/WebApps';
import ServicesStackedCards from '../../components/WebDevelopment/ServicesStackedCards';
import Footer from '../../components/Footer';

function WebAppsPage() {
  return (
    <div>
      <Navigation />
      <WebApps />
      <ServicesStackedCards />
      <Footer />
    </div>
  );
}

export default WebAppsPage;
