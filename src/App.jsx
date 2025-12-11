import '../App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/Services';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';
import OurMission from './pages/Services';
import Projects from './pages/Projects';
import ThankYou from './pages/ThankYou';
import TooManyRequests from './pages/TooManyRequests';
import AiAutomation from './pages/Services/AiAutomation';
import AdCampaigns from './pages/Services/AdCampaigns';
import ContentCreation from './pages/Services/ContentCreation';
import WebsitesPage from './pages/Services/WebsitesPage';
import WebAppsPage from './pages/Services/WebAppsPage';

function App() {
  return (
    <div>
      {/* Route definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<OurMission />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/too-many-requests" element={<TooManyRequests />} />
        {/* Services (Dropdown) Routes */}
        <Route path="/websites" element={<WebsitesPage />} />
        <Route path="/web-apps" element={<WebAppsPage />} />
        <Route path="/ai-automation" element={<AiAutomation />} />
        <Route path="/ad-campaigns" element={<AdCampaigns />} />
        <Route path="/content-creation" element={<ContentCreation />} />
      </Routes>
    </div>
  );
}

export default App;
