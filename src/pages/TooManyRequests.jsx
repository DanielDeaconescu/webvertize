import styled from "styled-components";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const StyledTooManyRequests = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const TooManyRequestsText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

function TooManyRequests() {
  const { t } = useTranslation();
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
      <Logo />
      <TooManyRequestsText>
        <h3>Prea multe solicitări!</h3>
        <p className="fs-5 w-75 text-center fs-4">
          Din motive de securitate, limităm numărul de trimiteri ale
          formularului într-un anumit interval de timp. Te rugăm să încerci din
          nou mâine. Mulțumim!
        </p>
      </TooManyRequestsText>
      <StyledLink to="/">
        <div>
          <FontAwesomeIcon icon={faCircleLeft} />
        </div>
        <div>Înapoi la pagina principală</div>
      </StyledLink>
    </StyledTooManyRequests>
  );
}

export default TooManyRequests;
