import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ModalForm from "./ModalForm";
import Form from "./Form";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const StyledHeader = styled.header`
  position: relative;
  padding: clamp(4rem, 10vw, 7rem) clamp(1.5rem, 5vw, 4rem);
  background-color: var(--color-primary-dark);
  background-image: radial-gradient(
    ellipse 80% 60% at 50% 100%,
    rgba(0, 194, 203, 0.1) 0%,
    transparent 70%
  );
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    padding: 3rem 1.25rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  max-width: 720px;
  margin: 0 auto;

  @media (max-width: 576px) {
    gap: 1rem;
  }
`;

const Title = styled.h1`
  font-family: var(--font-family);
  font-size: var(--font-hero);
  font-weight: 800;
  color: var(--color-text);
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin: 0;

  @media (max-width: 576px) {
    font-size: clamp(1.6rem, 7vw, 2.2rem);
  }
`;

const StyledP = styled.p`
  font-family: var(--font-family);
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin: 0;
  max-width: 580px;

  strong {
    color: var(--color-text);
    font-weight: 600;
  }
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;

  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;
  }
`;

const TrustLine = styled.div`
  font-family: var(--font-family);
  font-size: 0.8rem;
  color: var(--color-text-muted);
  letter-spacing: 0.04em;
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #f25912;
  border: none;
  padding: 0.85rem 2rem;
  color: #fff;
  border-radius: var(--radius-btn);
  font-family: var(--font-family);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background-color var(--transition),
    transform var(--transition),
    box-shadow var(--transition);

  &:hover {
    background-color: #d94e0f;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(242, 89, 18, 0.3);
  }

  @media (max-width: 576px) {
    width: 100%;
    padding: 0.75rem 1.5rem;
  }
`;

const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: transparent;
  border: 1px solid var(--color-border);
  padding: 0.85rem 2rem;
  color: var(--color-text-secondary);
  border-radius: var(--radius-btn);
  font-family: var(--font-family);
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  transition:
    background-color var(--transition),
    border-color var(--transition),
    color var(--transition),
    transform var(--transition);

  &:hover {
    background-color: var(--color-surface-2);
    border-color: #25d366;
    color: #25d366;
    transform: translateY(-2px);
  }

  @media (max-width: 576px) {
    width: 100%;
    padding: 0.75rem 1.5rem;
  }
`;

function Header({ title, text1, text2 }) {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleValidSubmit(data) {
    setIsLoading(true);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setIsLoading(false);
      sessionStorage.setItem("formSubmitted", "true");
      navigate("/thank-you");
    } else if (res.status === 429) {
      setIsLoading(false);
      sessionStorage.setItem("tooManyRequests", "true");
      navigate("/too-many-requests");
    } else if (res.status === 400) {
      setIsLoading(false);
      toast.error("Captcha verification failed!");
    }
  }

  return (
    <>
      <StyledHeader>
        <TextContent className="container">
          <Title>{title}</Title>
          <StyledP className="fs-4 text-center">
            <strong>{text1}</strong> {text2}
          </StyledP>
          <ActionButtonsContainer>
            <StyledButton onClick={() => setShowForm(true)}>
              <FontAwesomeIcon icon={faComments} />
              Hai să discutăm
            </StyledButton>
            <WhatsAppButton
              href="https://wa.me/+40775511874"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              WhatsApp
            </WhatsAppButton>
          </ActionButtonsContainer>
          <TrustLine>Primul pas nu presupune niciun cost</TrustLine>
        </TextContent>
      </StyledHeader>

      <ModalForm
        show={showForm}
        title="Formular de contact"
        onClose={() => setShowForm(false)}
      >
        <Form onValidSubmit={handleValidSubmit} isLoading={isLoading}></Form>
      </ModalForm>
    </>
  );
}

export default Header;
