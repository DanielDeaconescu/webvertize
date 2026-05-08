import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import SideButtons from "../components/SideButtons";
import WhatsAppButton from "../components/WhatsAppButton";
import Header from "../components/Header";
import contactHeaderImg from "../assets/contact_us_header.jpg";
import MainSection from "./Contact/MainSection";
import CookiePopup from "../components/Cookies/CookiePopup";
import BackToTop from "../components/BackToTop";
import styled from "styled-components";

const StyledContact = styled.div`
  background-color: rgba(58, 97, 122, 0.8);
  color: #fff;
`;

function Contact() {
  return (
    <StyledContact>
      <Header
        bgImage={contactHeaderImg}
        title="Hai să Discutăm Despre Proiectul Tău Digital"
        text1="Indiferent dacă plănuiești un website nou, o aplicație web personalizată sau o campanie publicitară, suntem aici să te ascultăm și să te ajutăm să găsești soluția potrivită pentru afacerea ta."
        text2="Povestește-ne despre obiectivele, provocările sau ideile tale și vom construi mai departe împreună."
      />
      <MainSection />
    </StyledContact>
  );
}

export default Contact;
