import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "./Form";
import toast from "react-hot-toast";
import ModalForm from "./ModalForm";

const StyledFormButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--color-primary-light);
  color: var(--color-text);
  font-size: 1.25rem;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid var(--color-border);
  transition:
    background-color var(--transition),
    transform var(--transition);

  &:hover {
    background-color: var(--color-accent);
    color: var(--color-bg);
    transform: scale(1.08);
  }
`;

function FormButton() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleLoading(bool) {
    setIsLoading(bool);
  }

  function handleClose() {
    setShowForm(false);
    handleLoading(false);
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
      <StyledFormButton onClick={() => setShowForm(true)}>
        <FontAwesomeIcon icon={faMessage} />
      </StyledFormButton>

      <ModalForm
        show={showForm}
        title="Formular de contact"
        onClose={() => handleClose()}
      >
        <Form onValidSubmit={handleValidSubmit} isLoading={isLoading} />
      </ModalForm>
    </>
  );
}

export default FormButton;
