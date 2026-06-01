import styled from "styled-components";
import Form from "../../components/Form";
import { fa1, fa2, fa3 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledMainSection = styled.section`
  padding: var(--section-padding);
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  background-image: radial-gradient(
    ellipse 80% 50% at 50% 0%,
    rgba(0, 194, 203, 0.05) 0%,
    transparent 70%
  );
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ColumnHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ColumnTitle = styled.h3`
  font-family: var(--font-family);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
  letter-spacing: -0.02em;
`;

const ColumnSubtitle = styled.p`
  font-family: var(--font-family);
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
`;

const StepsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const StepItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  position: relative;

  &:not(:last-child) {
    padding-bottom: 1.75rem;
  }

  &:not(:last-child)::before {
    content: "";
    position: absolute;
    left: 19px;
    top: 40px;
    bottom: 0;
    width: 1px;
    background-color: var(--color-border);
  }
`;

const StepNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-surface-2);
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  font-family: var(--font-family);
  font-size: 0.85rem;
  font-weight: 700;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
`;

const StepText = styled.p`
  font-family: var(--font-family);
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.65;
  margin: 0;
  padding-top: 0.6rem;
`;

const Text = styled.div`
  margin-bottom: 1rem;
`;

const StyledP = styled.p`
  text-align: justify;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const steps = [
  "Analizăm mesajul tău.",
  "Te contactăm prin email pentru a programa un apel.",
  "Discutăm obiectivele tale și vedem dacă suntem potriviți pentru a colabora.",
];

function MainSection() {
  const navigate = useNavigate();
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
      setIsLoading(false);
      sessionStorage.setItem("formSubmitted", "true");
      navigate("/thank-you");
    } else if (res.status === 429) {
      setIsLoading(false);
      sessionStorage.setItem("tooManyRequests", "true");
      navigate("/too-many-requests");
    } else if (res.status === 400) {
      setIsLoading(false);
    }
  }

  return (
    <StyledMainSection>
      <div className="container">
        <ContactGrid>
          <FormColumn>
            <ColumnHeader>
              <ColumnTitle>Hai să începem conversația</ColumnTitle>
              <ColumnSubtitle>
                Completează formularul și te contactăm în cel mai scurt timp.
              </ColumnSubtitle>
            </ColumnHeader>

            <Form onValidSubmit={handleValidSubmit} isLoading={isLoading} />
          </FormColumn>

          <InfoColumn>
            <ColumnHeader>
              <ColumnTitle>La ce să te aștepți</ColumnTitle>
            </ColumnHeader>
            <StepsList>
              {steps.map((step, i) => (
                <StepItem>
                  <StepNumber>{i + 1}</StepNumber>
                  <StepText>{step}</StepText>
                </StepItem>
              ))}
            </StepsList>
          </InfoColumn>
        </ContactGrid>
      </div>
    </StyledMainSection>
  );
}

export default MainSection;
