import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ModalForm from "./ModalForm";
import Form from "./Form";
import ScheduleACallButton from "./ScheduleACallButton";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const StyledHeader = styled.header`
  position: relative;
  padding: 5rem 4rem;
  background-color: #1b3c53;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2rem 2rem 2rem;

  @media (max-width: 576px) {
    padding: 1.5rem;
    margin: 0 1rem 1rem 1rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  position: relative;
  z-index: 2;
  color: #fff;
  max-width: 800px;

  @media (max-width: 576px) {
    gap: 0.25rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  line-height: 1.2;
  @media (max-width: 576px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const StyledP = styled.p`
  text-align: center;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);

  @media (max-width: 576px) {
    font-size: 1rem !important;
  }
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
  }
`;

const TrustLine = styled.div`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
`;

const StyledButton = styled.button`
  background-color: #f25912;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  padding: 1rem 2rem;
  color: #fff;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  font-size: 1.15rem;

  &:hover {
    background-color: #d94e0f;
    transform: translateY(-1px);
  }

  @media (max-width: 576px) {
    justify-content: center;
    width: 100%;
    font-size: 0.9rem;
    white-space: nowrap;
    padding: 0.5rem 1rem;
  }

  @media (min-width: 576px) {
    &:hover {
      background-color: #d94e0f;
    }
  }
`;

const WhatsAppButton = styled.a`
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.6);
  padding: 0.875rem 2rem;
  color: #fff;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: #fff;
    color: #fff;
  }

  @media (max-width: 576px) {
    justify-content: center;
    width: 100%;
  }
`;

const PricesButton = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 2px solid white;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  font-size: 1.15rem;
  padding: 1rem 2rem;

  @media (max-width: 576px) {
    font-size: 0.9rem;
    white-space: nowrap;
    padding: 0.5rem 1rem;
  }

  &:hover {
    background-color: rgba(27, 60, 83, 0.5);
  }
`;

function Header({ title, text1, text2 }) {
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
      document.body.classList.remove("modal-open");
      document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
      setShowForm(false);
      sessionStorage.setItem("formSubmitted", "true");
      navigate("/thank-you");
    } else if (res.status === 429) {
      handleLoading(false);
      document.body.classList.remove("modal-open");
      document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
      setShowForm(false);
      sessionStorage.setItem("tooManyRequests", "true");
      navigate("/too-many-requests");
    } else if (res.status === 400) {
      handleLoading(false);
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
