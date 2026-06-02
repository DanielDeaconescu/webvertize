import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/Cookies/MainContent";
import cookiesHeader from "../assets/headers/cookies_header.webp";
import CookiePopup from "../components/Cookies/CookiePopup";
import BackToTop from "../components/BackToTop";
import WhatsAppButton from "../components/WhatsAppButton";
import { Helmet } from "react-helmet-async";

function Cookies() {
  return (
    <div>
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18172690170"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-18172690170');`}
        </script>
      </Helmet>
      <Header
        bgImage={cookiesHeader}
        title="Politica de Cookie-uri Webvertize"
        text1="Webvertize utilizează cookie-uri de tip publicitar prin Google Ads (gtag.js) pentru măsurarea performanței campaniilor noastre."
        text2="Nu utilizăm cookie-uri de analiză, sesiune sau personalizare. Prin continuarea navigării, ești de acord cu utilizarea acestor cookie-uri. Le poți dezactiva oricând din setările browserului tău."
      />
      <MainContent />
    </div>
  );
}

export default Cookies;
