import styled from "styled-components";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: #1b3c53;
  padding: 1rem;
  color: #fff;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;
  font-size: 1.2rem;
`;

const ThankYouContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ThankYouText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function ThankYou() {
  const [allowed, setAllowed] = useState(false);

  // Check for the sessionStorage flag - if it doesn't exist, redirect to "/"
  const navigate = useNavigate();
  useEffect(() => {
    const flag = sessionStorage.getItem("formSubmitted");
    const flag2 = sessionStorage.getItem("landingFormSubmitted");

    if (!flag && !flag2) {
      navigate("/");
      return;
    }

    // if accessed correctly, remove the flag so refreshing the page doesn't show the content again
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
      <Logo />
      <ThankYouText>
        <h3 className="text-center">
          Îți mulțumim pentru completarea formularului!
        </h3>
        <p className="fs-5 text-center">
          Vom analiza solicitarea ta și te vom contacta în cel mai scurt timp
          posibil.
        </p>
      </ThankYouText>
      <StyledLink to="/">
        <div>
          <FontAwesomeIcon icon={faCircleLeft} />
        </div>
        <div>Înapoi la pagina principală</div>
      </StyledLink>
    </ThankYouContainer>
  );
}

export default ThankYou;
