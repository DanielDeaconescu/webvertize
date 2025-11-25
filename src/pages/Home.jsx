import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SideButtons from '../components/SideButtons';

function Home() {
  return (
    <div>
      <Navigation />
      <p>This is the Home Page.</p>
      <SideButtons />
      <Footer />
    </div>
  );
}

export default Home;
