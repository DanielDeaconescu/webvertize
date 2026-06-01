import styled from "styled-components";
import Form from "./Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ctaImage from "../assets/CTA_image.jpg";
import ModalForm from "./ModalForm";
import { SectionHeading } from "../styles/shared";
import toast from "react-hot-toast";

const CTAWrapper = styled.div`
  position: relative;
  padding: clamp(4rem, 10vw, 7rem) 0;
  background-image: url(${ctaImage});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(10, 15, 20, 0.92) 0%,
      rgba(27, 60, 83, 0.78) 100%
    );
    z-index: 1;
  }
`;

const CTAContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  text-align: center;
`;

const CTAHeading = styled.h2`
  font-family: var(--font-family);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  color: var(--color-text);
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin: 0;
  max-width: 680px;
`;

const CTAText = styled.p`
  font-family: var(--font-family);
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.75;
  margin: 0;
  max-width: 520px;
`;

const StyledP = styled.p`
  font-family: var(--font-family);
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin: 0;
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 2.25rem;
  border: none;
  border-radius: var(--radius-btn);
  background-color: var(--color-accent);
  color: var(--color-bg);
  font-family: var(--font-family);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background-color var(--transition),
    transform var(--transition),
    box-shadow var(--transition);

  &:hover {
    background-color: var(--color-accent-dim);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 194, 203, 0.25);
  }
`;

function CTA({ title, text }) {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleLoading(bool) {
    setIsLoading(bool);
  }

  async function handleValidSubmit(data) {
    handleLoading(true);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      handleLoading(false);
      sessionStorage.setItem("formSubmitted", "true");
      navigate("/thank-you");
    } else if (res.status === 429) {
      handleLoading(false);
      sessionStorage.setItem("tooManyRequests", "true");
      navigate("/too-many-requests");
    } else if (res.status === 400) {
      handleLoading(false);
      toast.error("Captcha verification failed!");
    }
  }

  return (
    <>
      <CTAWrapper>
        <CTAContainer className="container">
          <CTAHeading>{title}</CTAHeading>
          <CTAText>{text}</CTAText>
          <StyledButton onClick={() => setShowForm(true)}>
            Programează o discuție
          </StyledButton>
        </CTAContainer>
      </CTAWrapper>

      <ModalForm
        show={showForm}
        title="Formular de contact"
        onClose={() => setShowForm(false)}
      >
        <Form onValidSubmit={handleValidSubmit} isLoading={isLoading} />
      </ModalForm>
    </>
  );
}

export default CTA;
