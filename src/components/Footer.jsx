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

const StyledFooter = styled.footer`
  padding: clamp(2.5rem, 5vw, 4rem) 0;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  color: var(--color-text);
`;

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: var(--color-accent);
  font-weight: 500;
  transition: color var(--transition);

  &:hover {
    color: var(--color-text);
  }
`;
const StyledLinkLogo = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const StyledRegularLink = styled(Link)`
  text-decoration: none;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  transition: color var(--transition);

  &:hover {
    color: var(--color-text);
    text-decoration: none;
  }
`;

const FooterRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid var(--color-border);
  font-size: var(--font-small);
  color: var(--color-text-muted);

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

const QuickLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const FooterHeading = styled.h3`
  font-family: var(--font-family);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 1.25rem;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: var(--color-accent);
  font-size: 0.75rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
`;

function Footer() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

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
      <StyledFooter>
        <div className="container">
          <FooterRow>
            <LogoWrapper>
              <Logo theme="light" />
            </LogoWrapper>
            <QuickLinksWrapper>
              <FooterHeading>Navigare</FooterHeading>
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
                  <StyledRegularLink to="/websites">Servicii</StyledRegularLink>
                </li>
                <li>
                  <StyledFontAwesomeIcon icon={faCheckCircle} />
                  <StyledRegularLink to="/contact">Contact</StyledRegularLink>
                </li>
              </StyledUl>
            </QuickLinksWrapper>
            <SocialMediaWrapper>
              <FooterHeading>Rețele de Socializare</FooterHeading>
              <FacebookIcon color="light" />
            </SocialMediaWrapper>
          </FooterRow>
          <FooterBottom>
            <span>
              © {new Date().getFullYear()} Webvertize SRL. Toate drepturile
              rezervate.
            </span>
            <StyledRegularLink to="/cookies">
              Politică de Cookies
            </StyledRegularLink>
          </FooterBottom>
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
