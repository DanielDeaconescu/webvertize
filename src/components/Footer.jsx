import styled from "styled-components";
import Logo from "./Logo";
import FacebookIcon from "./FacebookIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import Form from "./Form";
import { Link } from "react-router-dom";
import ModalForm from "./ModalForm";
import { useTranslation } from "react-i18next";

const StyledFooter = styled.footer`
  padding: 2.5rem;
  background-color: rgb(34, 40, 49);
  color: #fff;
`;

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;
const StyledLinkLogo = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #fff;
`;

const StyledRegularLink = styled(Link)`
  text-decoration: none;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterRow = styled.div`
  @media (max-width: 768px) {
    display: flex;
  }
`;

const LogoWrapper = styled.div`
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const QuickLinksWrapper = styled.div`
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const SocialMediaWrapper = styled.div`
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #fff;
`;

function Footer() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const { t } = useTranslation();

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // send to Vercel API route
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      // Navigate to the thank-you page
      // 1. Removing Bootstrap's modal-backdrop
      document.body.classList.remove("modal-open");
      document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
      setShowForm(false);
      // 2. Setting a flag in the SessionStorage
      sessionStorage.setItem("formSubmitted", "true");
      // 3. Navigating to the thank-you page
      navigate("/thank-you");
    } else if (res.status === 429) {
      document.body.classList.remove("modal-open");
      document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
      setShowForm(false);
      // setting a flag in sessionStorage
      sessionStorage.setItem("tooManyRequests", "true");
      navigate("/too-many-requests");
      return;
    }
  }

  return (
    <>
      <StyledFooter className="d-flex justify-content-between">
        <div className="container">
          <FooterRow className="row d-flex">
            <LogoWrapper className="col-md-4 d-flex">
              <StyledLinkLogo to="/">
                <Logo theme={"light"} />
              </StyledLinkLogo>
            </LogoWrapper>
            <QuickLinksWrapper className="col-md-4 d-flex">
              <div>
                <h3>Link-uri utile</h3>
                <StyledUl>
                  <li>
                    <StyledFontAwesomeIcon icon={faCheckCircle} />
                    <StyledLink onClick={() => setShowForm(true)}>
                      Programează un apel
                    </StyledLink>
                  </li>
                  <li>
                    <StyledFontAwesomeIcon icon={faCheckCircle} />
                    <StyledRegularLink to="/">Acasă</StyledRegularLink>
                  </li>
                  <li>
                    <StyledFontAwesomeIcon icon={faCheckCircle} />
                    <StyledRegularLink to="/websites">
                      Servicii
                    </StyledRegularLink>
                  </li>
                  <li>
                    <StyledFontAwesomeIcon icon={faCheckCircle} />
                    <StyledRegularLink to="/contact">Contact</StyledRegularLink>
                  </li>
                </StyledUl>
              </div>
            </QuickLinksWrapper>
            <SocialMediaWrapper className="col-md-4 d-flex">
              <div>
                <h3>Rețele de Socializare</h3>
                <FacebookIcon color="light" />
              </div>
            </SocialMediaWrapper>
          </FooterRow>
        </div>
      </StyledFooter>
      <ModalForm
        show={showForm}
        title="Formular de contact"
        onClose={() => setShowForm(false)}
      >
        <Form onSubmit={handleSubmit} />
      </ModalForm>
    </>
  );
}

export default Footer;
