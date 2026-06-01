import { useState } from "react";
import ModalForm from "./ModalForm";
import styled from "styled-components";
import LandingContactForm from "./LandingContactForm";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const RequestButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.75rem 1.5rem;
  margin-top: auto;
  border-radius: var(--radius-btn);
  font-family: var(--font-family);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition:
    background-color var(--transition),
    transform var(--transition),
    box-shadow var(--transition);

  background-color: ${({ type }) => {
    if (type === "standard") return "var(--color-accent)";
    if (type === "cta") return "#f25912";
    return "transparent";
  }};

  color: ${({ type }) =>
    type === "standard" || type === "cta"
      ? "var(--color-bg)"
      : "var(--color-text)"};
  border: ${({ type }) =>
    type === "standard" || type === "cta"
      ? "none"
      : "1px solid var(--color-border)"};

  &:hover {
    transform: translateY(-2px);
    background-color: ${({ type }) => {
      if (type === "standard") return "var(--color-accent-dim)";
      if (type === "cta") return "#d94e0f";
      return "var(--color-surface-2)";
    }};
    border-color: ${({ type }) =>
      type === "basic" || type === "premium"
        ? "var(--color-accent)"
        : "transparent"};
    color: ${({ type }) =>
      type === "basic" || type === "premium"
        ? "var(--color-accent)"
        : "var(--color-bg)"};
    box-shadow: ${({ type }) =>
      type === "cta"
        ? "0 8px 24px rgba(242, 89, 18, 0.3)"
        : type === "standard"
          ? "0 8px 24px rgba(0, 194, 203, 0.2)"
          : "none"};
  }
`;

function CTAButton({ type }) {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function submitHandler(data) {
    setLoading(true);

    const res = await fetch("/api/packageForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const resData = await res.json();

    if (res.ok) {
      setLoading(false);
      sessionStorage.setItem("landingFormSubmitted", "true");
      navigate("/thank-you");
    } else if (res.status === 429) {
      setLoading(false);
      sessionStorage.setItem("tooManyRequests", "true");
      navigate("/too-many-requests");
    } else if (res.status === 400) {
      setLoading(false);
      toast.error(resData.status);
    }
  }

  return (
    <>
      <RequestButton type={type} onClick={() => setShowForm(true)}>
        Hai să discutăm
      </RequestButton>
      <ModalForm
        show={showForm}
        title="Formular de contact"
        onClose={() => {
          setShowForm(false);
        }}
      >
        <LandingContactForm
          onSubmitHandler={submitHandler}
          loading={loading}
          type={type}
          showForm={showForm}
        />
      </ModalForm>
    </>
  );
}

export default CTAButton;
