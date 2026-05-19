import { useState } from "react";
import ModalForm from "./ModalForm";
import styled from "styled-components";
import LandingContactForm from "./LandingContactForm";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const RequestButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${(props) =>
    props.type === "standard"
      ? "#1b3c53"
      : props.type === "cta"
        ? "#F25912"
        : "transparent"};
  color: ${(props) =>
    props.type === "standard" || props.type === "cta" ? "#fff" : "#1b3c53"};
  border: ${(props) =>
    props.type === "standard" || props.type === "cta"
      ? "none"
      : "3px solid #1b3c53"};
  border-radius: 0.5rem;
  align-self: center;
  padding: 0.75rem 1.5rem;
  margin-top: auto;
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: 0.02em;
`;

function CTAButton({ type }) {
  const [showForm, setShowForm] = useState();
  const [selectedPackage, _] = useState(type);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { reset } = useForm();

  async function submitHandler(data) {
    console.log("data in submitHandler: ", data);
    setLoading(true);

    const res = await fetch("/api/packageForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const resData = res.json();

    if (res.ok) {
      document.body.classList.remove("modal-open");
      document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
      setShowForm(false);
      setLoading(false);
      sessionStorage.setItem("landingFormSubmitted", "true");
      navigate("/thank-you");
    } else if (res.status === 429) {
      document.body.classList.remove("modal-open");
      document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
      setShowForm(false);
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
          selectedPackage={selectedPackage}
          showForm={showForm}
        />
      </ModalForm>
    </>
  );
}

export default CTAButton;
