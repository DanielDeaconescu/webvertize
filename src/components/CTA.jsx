import styled from "styled-components";
import Form from "./Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ctaImage from "../assets/CTA_image.jpg";
import ModalForm from "./ModalForm";
import { useTranslation } from "react-i18next";

const CTAWrapper = styled.div`
  background-color: #37353e;
  padding: 5rem 0;
  background-image: url(${ctaImage});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  position: relative;
  z-index: 9;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 1;
    border-radius: inherit;
    transition: all 0.3s ease;
  }

  @media (max-width: 576px) {
    padding: 3rem 0;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;
  z-index: 10;

  @media (max-width: 1200px) {
    text-align: center;
  }
`;

const StyledButton = styled.button`
  background-color: #344955;
  border: none;
  padding: 1rem 2rem;
  color: #fff;
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  @media (min-width: 576px) {
    &:hover {
      background-color: #455e6b;
    }
  }
`;

function CTA({ title, text }) {
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
      <CTAWrapper>
        <CTAContainer className="container">
          <h3>{title}</h3>
          <p className="fs-4 text-center">{text}</p>
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
        <Form onSubmit={handleSubmit} />
      </ModalForm>
    </>
  );
}

export default CTA;
