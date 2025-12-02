import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SideButtons from '../components/SideButtons';
import WebDev from '../components/WebDev';
import Ads from '../components/Ads';
import OurMission from '../components/OurMission';

function Home() {
  return (
    <div>
      <Navigation />
      <div className="container">
        <WebDev />
        <Ads />
        <OurMission />
      </div>
      <SideButtons />
      <Footer />
    </div>
  );
}

export default Home;
