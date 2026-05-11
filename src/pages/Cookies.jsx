import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/Cookies/MainContent";
import cookiesHeader from "../assets/cookies_header.jpg";
import CookiePopup from "../components/Cookies/CookiePopup";
import BackToTop from "../components/BackToTop";
import WhatsAppButton from "../components/WhatsAppButton";

function Cookies() {
  return (
    <div>
      <Header
        bgImage={cookiesHeader}
        title="Politica de Cookie-uri Webvertize"
        text1="În prezent, Webvertize nu utilizează cookie-uri pe acest website. În cazul în care acest lucru se va schimba în viitor, vom actualiza această pagină în mod corespunzător și vom explica exact ce date sunt colectate și de ce."
        page="cookies"
      />
      {/* <MainContent /> */}
    </div>
  );
}

export default Cookies;
