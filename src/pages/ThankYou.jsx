import styled from "styled-components";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const ThankYouContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background-color: var(--color-bg);
  background-image: radial-gradient(
    ellipse 60% 50% at 50% 40%,
    rgba(0, 194, 203, 0.07) 0%,
    transparent 70%
  );
`;

const SuccessIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: var(--color-surface-2);
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  font-size: 1.75rem;
`;

const ThankYouText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
  max-width: 480px;
`;

const ThankYouTitle = styled.h1`
  font-family: var(--font-family);
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
  margin: 0;
`;

const ThankYouSubtitle = styled.p`
  font-family: var(--font-family);
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin: 0;
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  border-radius: var(--radius-btn);
  background-color: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  font-family: var(--font-family);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition:
    border-color var(--transition),
    color var(---transition),
    transform var(--transition);

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
    transform: translateY(-1px);
  }
`;

function ThankYou() {
  const [allowed, setAllowed] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const flag = sessionStorage.getItem("formSubmitted");
    const flag2 = sessionStorage.getItem("landingFormSubmitted");

    if (!flag && !flag2) {
      navigate("/");
      return;
    }

    sessionStorage.removeItem("formSubmitted");
    sessionStorage.removeItem("landingFormSubmitted");
    setAllowed(true);
  }, [navigate]);

  if (!allowed) return null;

  return (
    <ThankYouContainer>
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18172690170"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-18172690170');`}
        </script>

        {/* Event snippet for Submit lead form */}

        <script>
          {`gtag('event', 'conversion', {
      'send_to': 'AW-18172690170/ditJCKSz6q8cEPr9tNlD',
      'value': 1.0,
      'currency': 'RON'
  });`}
        </script>
      </Helmet>
      <Logo theme="light" />
      <SuccessIcon>
        <FontAwesomeIcon icon={faCircleCheck} />
      </SuccessIcon>

      <ThankYouText>
        <ThankYouTitle>Îți mulțumim pentru mesaj!</ThankYouTitle>
        <ThankYouSubtitle>
          Vom analiza solicitarea ta și te vom contacta în cel mai scurt timp
          posibil.
        </ThankYouSubtitle>
      </ThankYouText>

      <StyledLink to="/">
        <FontAwesomeIcon icon={faCircleLeft} />
        Înapoi la pagina principală
      </StyledLink>
    </ThankYouContainer>
  );
}

export default ThankYou;
