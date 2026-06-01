import { useState } from "react";
import Turnstile from "./Turnstile";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
`;

const StyledLabel = styled.label`
  font-family: var(--font-family);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.65rem 0.9rem;
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-btn);
  color: var(--color-text);
  font-family: var(--font-family);
  font-size: 0.95rem;
  transition:
    border-color var(--transition),
    box-shadow var(--transition);
  outline: none;

  &:focus {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(0, 194, 203, 0.15);
  }

  &::placeholder {
    color: var(--color-text-muted);
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 0.65rem 0.9rem;
  background-color: var(--color-bg);
  border: 1px solid var(---color-border);
  border-radius: var(--radius-btn);
  color: var(--color-text);
  font-family: var(--font-family);
  font-size: 0.95rem;
  min-height: 110px;
  resize: vertical;
  transition:
    border-color var(--transition),
    box-shadow var(--transition);
  outline: none;

  &:focus {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(0, 194, 203, 0.15);
  }

  &::placeholder {
    color: var(--color-text-muted);
  }
`;

const ErrorMessage = styled.small`
  font-size: 0.78rem;
  color: var(--color-error);
  margin-top: 0.1rem;
`;

const TurnstileWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-accent);
  color: var(--color-bg);
  font-family: var(--font-family);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  border: none;
  border-radius: var(--radius-btn);
  cursor: pointer;
  transition:
    background-color var(--transition),
    transform var(--transition);

  &:hover:not(:disabled) {
    background-color: var(--color-accent-dim);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Spinner = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-top-color: var(--color-bg);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

function Form({ onValidSubmit, isLoading }) {
  const [turnstileToken, setTurnstileToken] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitHandler(data) {
    if (!turnstileToken) {
      return;
    }

    onValidSubmit({ ...data, cf_turnstile_token: turnstileToken });
  }

  return (
    <StyledForm onSubmit={handleSubmit(submitHandler)}>
      <FormGroup>
        <StyledLabel htmlFor="name">Nume</StyledLabel>
        <StyledInput
          type="text"
          id="name"
          placeholder="ex: Ion Popescu"
          {...register("name", { required: 'Câmpul "Nume" este obligatoriu!' })}
        />
        {errors?.name && <ErrorMessage>{errors.name?.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput
          type="email"
          id="email"
          placeholder="ex: ion@email.ro"
          {...register("email", {
            required: 'Câmpul "Email" este obligatoriu!',
          })}
        />
        {errors?.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <StyledLabel htmlFor="project-description">
          Descrierea proiectului
        </StyledLabel>
        <StyledTextarea
          id="project-description"
          placeholder="Spune-ne câteva detalii despre proiectul tău..."
          {...register("project-description", {
            required: 'Câmpul "Descrierea proiectului" este obligatoriu!',
          })}
        />
        {errors["project-description"] && (
          <ErrorMessage>{errors["project-description"]?.message}</ErrorMessage>
        )}
      </FormGroup>

      <input
        type="hidden"
        name="cf_turnstile_token"
        value={turnstileToken || ""}
      />

      <TurnstileWrapper>
        <Turnstile onVerify={setTurnstileToken} />
      </TurnstileWrapper>

      <SubmitButton type="submit" disabled={isLoading}>
        {isLoading && <Spinner />}
        {isLoading ? "Se trimite..." : "Trimite mesajul"}
      </SubmitButton>
    </StyledForm>
  );
}

export default Form;
