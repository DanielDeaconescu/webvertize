import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import SideButtons from "./SideButtons";
import BackToTop from "./BackToTop";
import CookiePopup from "./Cookies/CookiePopup";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

function AppLayout() {
  return (
    <div>
      <Navigation />
      <Outlet />
      <SideButtons />
      <BackToTop />
      <CookiePopup />
      <Footer />
    </div>
  );
}

export default AppLayout;
