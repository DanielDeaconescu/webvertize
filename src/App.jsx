import "../App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import Portfolio from "./pages/Portfolio";
import ThankYou from "./pages/ThankYou";
import WebsitesPage from "./pages/Services/WebsitesPage";
import WebAppsPage from "./pages/Services/WebAppsPage";
import AdvertisingContentCreation from "./pages/Services/AdsContentCreation";
import Cookies from "./pages/Cookies";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./pages/LandingPage";
import PackagesPage from "./pages/PackagesPage";
import AppLayout from "./components/AppLayout";
import TooManyRequests from "./pages/TooManyRequests";
import { Analytics } from "@vercel/analytics";

function App() {
  return (
    <div>
      <Analytics />
      <ScrollToTop />
      {/* Route definitions */}
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/prices" element={<PackagesPage />} />
          <Route path="/dezvoltare-web-ro" element={<LandingPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* Services (Dropdown) Routes */}
          <Route path="/websites" element={<WebsitesPage />} />
          <Route path="/web-apps" element={<WebAppsPage />} />
          <Route
            path="/advertising-content-creation"
            element={<AdvertisingContentCreation />}
          />
          <Route path="/cookies" element={<Cookies />} />
        </Route>

        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/too-many-requests" element={<TooManyRequests />} />
      </Routes>

      {/* react-hot-toast */}
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#456882",
            color: "white",
          },
        }}
      />
    </div>
  );
}

export default App;
