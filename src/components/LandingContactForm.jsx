import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import LoadingSpinner from "./LoadingSpinner";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0;
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

const OptionalTag = styled.span`
  font-family: var(--font-family);
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0;
  text-transform: none;
  color: var(--color-text-muted);
  margin-left: 0.35rem;
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
  outline: none;
  transition:
    border-color var(--transition),
    box-shadow var(--transition);

  &:focus {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(0, 194, 203, 0.15);
  }

  &::placeholder {
    color: var(--color-text-muted);
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 0.65rem 0.9rem;
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-btn);
  color: var(--color-text);
  font-family: var(--font-family);
  font-size: 0.95rem;
  outline: none;
  cursor: pointer;
  transition:
    border-color var(--transition),
    box-shadow var(--transition);
  appearance: none;

  &:focus {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(0, 194, 203, 0.15);
  }

  option {
    background-color: var(--color-surface);
    color: var(--color-text);
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 0.65rem 0.9rem;
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-btn);
  color: var(--color-text);
  font-family: var(--font-family);
  font-size: 0.95rem;
  min-height: 100px;
  resize: vertical;
  outline: none;
  transition:
    border-color var(--transition),
    box-shadow var(--transition);

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
`;

const TurnstileWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
`;

const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: var(--radius-btn);
  background-color: var(--color-accent);
  color: var(--color-bg);
  font-family: var(--font-family);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.04em;
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
  width: 16px;
  height: 16px;
  border: 2px solid rgba(10, 15, 20, 0.3);
  border-top-color: var(--color-bg);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

function LandingContactForm({ type, onSubmitHandler, loading, showForm }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      package: type,
    },
  });
  const ref = useRef(null);
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!showForm) reset();
  }, [showForm, reset]);

  // registering the virtual field
  useEffect(() => {
    register("cf_turnstile_token", { required: true });
  }, [register]);

  const onTurnstileSuccess = useCallback(
    (token) => {
      setValue("cf_turnstile_token", token, {
        shouldValidate: true,
      });
    },
    [setValue],
  );

  // Rendering the turnstile
  useEffect(() => {
    let intervalId;

    const initTurnstile = () => {
      if (!window.turnstile) return;

      clearInterval(intervalId);

      widgetRef.current = window.turnstile.render(ref.current, {
        sitekey: "0x4AAAAAACGwYToVvX6OMIl0",
        callback: onTurnstileSuccess,
      });
    };

    intervalId = setInterval(initTurnstile, 100);

    return () => {
      clearInterval(intervalId);
      if (widgetRef.current !== null) {
        window.turnstile.remove(widgetRef.current);
      }
    };
  }, []);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitHandler)}>
      <FormGroup>
        <StyledLabel htmlFor="name">Nume</StyledLabel>
        <StyledInput
          type="text"
          id="name"
          placeholder="ex: Ion Popescu"
          {...register("name", {
            required: "Câmpul 'Nume' este obligatoriu!",
          })}
        />
        {errors?.name && <ErrorMessage>{errors.name?.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <StyledLabel htmlFor="phone">Număr de telefon</StyledLabel>
        <StyledInput
          type="text"
          id="phone"
          placeholder="ex: 07xx xxx xxx"
          {...register("phone", {
            required: "Câmpul 'Număr de telefon' este obligatoriu!",
          })}
        />
        {errors?.phone && <ErrorMessage>{errors.phone?.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <StyledLabel htmlFor="package">
          Pachet de interes
          <OptionalTag>(opțional)</OptionalTag>
        </StyledLabel>
        <StyledSelect id="package" defaultValue="" {...register("package")}>
          <option value="" disabled>
            Alege un pachet
          </option>
          <option value="basic">Pachetul Basic</option>
          <option value="standard">Pachetul Standard</option>
          <option value="premium">Pachetul Premium</option>
          <option value="unknown">Nu știu încă</option>
        </StyledSelect>
      </FormGroup>

      <FormGroup>
        <StyledLabel htmlFor="message">
          Mesaj
          <OptionalTag>(opțional)</OptionalTag>
        </StyledLabel>
        <StyledTextarea
          id="message"
          placeholder="Spune-ne puțin despre afacerea ta..."
          rows="4"
          {...register("message")}
        />
      </FormGroup>

      <TurnstileWrapper>
        <div
          ref={ref}
          className="turnstile-landing-page"
          data-theme="dark"
          data-size="normal"
        ></div>
      </TurnstileWrapper>

      <SendButton type="submit" disabled={loading}>
        {loading && <Spinner />}

        {loading ? "Se trimite..." : "Trimite mesajul"}
      </SendButton>
    </StyledForm>
  );
}

export default LandingContactForm;
