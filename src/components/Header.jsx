import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ModalForm from "./ModalForm";
import Form from "./Form";
import ScheduleACallButton from "./ScheduleACallButton";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.header`
  position: relative;
  padding: clamp(5rem, 12vw, 9rem) clamp(1.5rem, 5vw, 4rem);
  background-image: url(${(props) => props.$bgImage});
  background-color: var(--color-primary-dark);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  min-height: ${(props) => (props.page === "cookies" ? "100vh" : "60vh")};
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${(props) =>
      props.page === "landing"
        ? "linear-gradient(135deg, rgba(17, 38, 56, 0.85) 0%, rgba(27, 60, 83, 0.6) 100%)"
        : "linear-gradient(135deg, rgba(10, 15, 20, 0.88) 0%, rgba(27, 60, 83, 0.7) 100%)"};
    z-index: 1;
    border-radius: inherit;
  }

  @media (max-width: 576px) {
    padding: clamp(3rem, 8vw, 5rem) 1.25rem;
    min-height: ${(props) => (props.page === "cookies" ? "100vh" : "50vh")};
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  justify-content: center;
  position: relative;
  z-index: 2;
  color: var(--color-text);
  text-align: center;
  max-width: 780px;
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
  text-align: center;
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin: 0;

  @media (max-width: 576px) {
    font-size: clamp(1.6rem, 7vw, 2.2rem);
  }
`;

const StyledP = styled.p`
  font-family: var(--font-family);
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 400;
  color: var(--color-text-secondary);
  text-align: center;
  line-height: 1.7;
  margin: 0;
  max-width: 620px;

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
    gap: 0.75rem;
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--color-accent);
  color: var(--color-bg);
  border: none;
  padding: 0.8rem 2rem;
  border-radius: var(--radius-btn);
  font-family: var(--font-family);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition:
    background-color var(--transition),
    transform var(--transition);
  position: relative;
  z-index: 2;
  white-space: nowrap;

  &:hover {
    background-color: var(--color-accent-dim);
    transform: translateY(-2px);
  }

  @media (max-width: 576px) {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const PricesButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  background-color: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-btn);
  padding: 0.8rem 2rem;
  font-family: var(--font-family);
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  white-space: nowrap;
  transition:
    background-color var(--transition),
    border-color var(--transition),
    transform var(--transition);
  position: relative;
  z-index: 2;

  &:hover {
    background-color: var(--color-surface-2);
    border-color: var(--color-accent);
    color: var(--color-accent);
    transform: translateY(-2px);
  }

  @media (max-width: 576px) {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }
`;

function Header({
  bgImage,
  title,
  text1,
  text2,
  page,
  btnText = "Programează un apel",
}) {
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
      setShowForm(false);
      sessionStorage.setItem("formSubmitted", "true");
      navigate("/thank-you");
    } else if (res.status === 429) {
      handleLoading(false);
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
      <StyledHeader $bgImage={bgImage} page={page}>
        <TextContent>
          <Title>{title}</Title>
          <StyledP className="fs-4 text-center">
            <strong>{text1}</strong> {text2}
          </StyledP>
          <ActionButtonsContainer>
            {title !== "Politica de Cookie-uri Webvertize" && (
              <StyledButton onClick={() => setShowForm(true)}>
                {btnText}
              </StyledButton>
            )}
            {page === "home" && (
              <PricesButton to="/prices">
                <FontAwesomeIcon icon={faTag} />
                Pachete & Prețuri
              </PricesButton>
            )}
          </ActionButtonsContainer>
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
