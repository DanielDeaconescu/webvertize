import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Header from '../../components/AdsContentCreation/Header';
import Section1 from '../../components/AdsContentCreation/Section1';
import Section2 from '../../components/AdsContentCreation/Section2';
import Section3 from '../../components/AdsContentCreation/Section3';
import Section4 from '../../components/AdsContentCreation/Section4';
import CTA from '../../components/CTA';

function AdsContentCreation() {
  return (
    <div>
      <Navigation />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <CTA
        title="Ready to Grow Through Better Advertising?"
        text="Book a call and let’s build campaigns that reach the right customers with the right message."
      />
      <Footer />
    </div>
  );
}

export default AdsContentCreation;
