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
  padding: 4rem;
  background-image: url(${(props) => props.$bgImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  height: ${(props) => (props.page === "cookies" ? "100vh" : "unset")};
  display: ${(props) => (props.page === "cookies" ? "flex" : "block")};
  justify-content: ${(props) =>
    props.page === "cookies" ? "center" : "unset"};
  align-items: ${(props) => (props.page === "cookies" ? "center" : "unset")};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
    border-radius: inherit;
    transition: all 0.3s ease;
  }

  @media (max-width: 576px) {
    padding: 1.5rem;
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

  @media (max-width: 576px) {
    gap: 0.25rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  @media (max-width: 576px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const StyledP = styled.p`
  text-align: justify;

  @media (max-width: 576px) {
    font-size: 1rem !important;
  }
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledButton = styled.button`
  background-color: #344955;
  border: none;
  padding: 1rem 2rem;
  color: #fff;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  font-size: 1.15rem;

  @media (max-width: 576px) {
    font-size: 0.9rem;
    white-space: nowrap;
    padding: 0.25rem 0.5rem;
  }

  @media (min-width: 576px) {
    &:hover {
      background-color: #455e6b;
    }
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
    padding: 0.25rem 0.5rem;
  }

  &:hover {
    background-color: rgba(27, 60, 83, 0.5);
  }
`;

function Header({ bgImage, title, text1, text2, page }) {
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
      <StyledHeader $bgImage={bgImage} page={page}>
        <TextContent className="container">
          <Title>{title}</Title>
          <StyledP className="fs-4 text-center">
            <strong>{text1}</strong> {text2}
          </StyledP>
          <ActionButtonsContainer>
            {title !== "Politica de Cookie-uri Webvertize" && (
              <StyledButton onClick={() => setShowForm(true)}>
                Programează un apel
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
