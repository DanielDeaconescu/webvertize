import styled from "styled-components";
import Form from "../../components/Form";
import { fa1, fa2, fa3 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledMainSection = styled.div`
  padding: 4rem 6rem;
  @media (max-width: 576px) {
    padding: 1.5rem 2.25rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    padding: 1.75rem 2.625rem;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    padding: 2rem 3rem;
  }
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
      handleLoading(false);
      document.body.classList.remove("modal-open");
      document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
      sessionStorage.setItem("formSubmitted", "true");
      navigate("/thank-you");
    } else if (res.status === 429) {
      handleLoading(false);
      document.body.classList.remove("modal-open");
      document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
      sessionStorage.setItem("tooManyRequests", "true");
      navigate("/too-many-requests");
    } else if (res.status === 400) {
      handleLoading(false);
      // toast.error('Captcha verification failed!');
    }
  }

  return (
    <StyledMainSection className="container">
      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6 mb-4">
          <Text>
            <h3>Hai să începem conversația</h3>
            <p className="fs-5">
              Completează formularul și te contactăm în cel mai scurt timp.
            </p>
          </Text>

          <Form onValidSubmit={handleValidSubmit} isLoading={isLoading} />
        </div>
        {/* CTA */}
        <div className="col-md-6">
          <h3>La ce să te aștepți</h3>
          <StyledUl>
            <li className="fs-5">
              <FontAwesomeIcon icon={fa1} />
              Analizăm mesajul tău.
            </li>
            <li className="fs-5">
              <FontAwesomeIcon icon={fa2} />
              Te contactăm prin email pentru a programa un apel.
            </li>
            <li className="fs-5">
              <FontAwesomeIcon icon={fa3} />
              Discutăm obiectivele tale și vedem dacă suntem potriviți pentru a
              colabora.
            </li>
          </StyledUl>
        </div>
      </div>
    </StyledMainSection>
  );
}

export default MainSection;
