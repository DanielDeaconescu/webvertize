import styled from "styled-components";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleLeft,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const StyledTooManyRequests = styled.div`
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
    rgba(239, 68, 68, 0.06) 0%,
    transparent 70%
  );
`;

const WarningIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: var(--color-surface-2);
  border: 1px solid var(--color-error);
  color: var(--color-error);
  font-size: 1.75rem;
`;

const TooManyRequestsText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
  max-width: 480px;
`;

const PageTitle = styled.h1`
  font-family: var(--font-family);
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
  margin: 0;
`;

const PageSubtitle = styled.p`
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
    border-color var(--trnsition),
    color var(--transition),
    transform var(--transition);

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
    transform: translateY(-1px);
  }
`;

function TooManyRequests() {
  // Check for the sessionStorage flag - if it doesn't exist, redirect to "/"
  const navigate = useNavigate();
  useEffect(() => {
    const flag = sessionStorage.getItem("tooManyRequests");

    if (!flag) {
      navigate("/");
      return;
    }

    // if accessed correctly, remove the flag so refreshing the page doesn't show the content again
    sessionStorage.removeItem("tooManyRequests");
  }, [navigate]);

  return (
    <StyledTooManyRequests>
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
      </Helmet>
      <Logo theme="light" />
      <WarningIcon>
        <FontAwesomeIcon icon={faTriangleExclamation} />
      </WarningIcon>
      <TooManyRequestsText>
        <PageTitle>Prea multe solicitări!</PageTitle>
        <PageSubtitle>
          Din motive de securitate, limităm numărul de trimiteri ale
          formularului într-un anumit interval de timp. Te rugăm să încerci din
          nou mâine. Mulțumim!
        </PageSubtitle>
      </TooManyRequestsText>
      <StyledLink to="/">
        <FontAwesomeIcon icon={faCircleLeft} />
        Înapoi la pagina principală
      </StyledLink>
    </StyledTooManyRequests>
  );
}

export default TooManyRequests;
