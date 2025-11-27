import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/Services';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';
import OurMission from './pages/Services';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      {/* Route definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<OurMission />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;
