import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SideButtons from '../components/SideButtons';
import WebDev from '../components/WebDev';
import Ads from '../components/Ads';

function Home() {
  return (
    <div>
      <Navigation />
      <div className="container">
        <WebDev />
        <Ads />
      </div>
      <SideButtons />
      <Footer />
    </div>
  );
}

export default Home;
