import Modal from "../Modal";
import { useState } from "react";
import Form from "../Form";
import styled from "styled-components";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import imgContent1 from "../../assets/portfolio/content_creation/content1.png";
import { Video } from "yet-another-react-lightbox/plugins";
import {
  faCheckSquare,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const CardWrapper = styled.div`
  height: 100%;
  perspective: 1000px;

  &:hover .card-flip-inner {
    transform: rotateY(180deg);
  }
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
`;

const CardFace = styled.div`
  backface-visibility: hidden;
  height: 100%;
`;

const CardBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;

const CardBodyBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledP = styled.p`
  text-align: center;
`;

const StyledUl = styled.ul`
  list-style-type: none;
`;

const StyledButton = styled.a`
  text-decoration: none;
  background-color: #1b3c53;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  color: #fff;
`;

function CardFlip({ project }) {
  const [showForm, setShowForm] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="col-md-6 col-lg-4">
      <CardWrapper>
        <CardInner className="card-flip-inner">
          {/* Front */}
          <CardFace>
            <div className="card h-100 rounded-4">
              <img
                src={project.card_img}
                className="card-img-top rounded-top-4"
                alt={project.name}
              />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.front_text}</p>
                <div className="text-muted">{project.category}</div>
              </div>
            </div>
          </CardFace>

          {/* Back */}
          <CardBack>
            <div className="card h-100 d-flex justify-content-center align-items-center rounded-4">
              <CardBodyBack className="card-body d-flex flex-column align-items-center justify-content-center gap-1">
                <h5 className="card-title text-center">{project.name}</h5>
                <StyledP className="card-text">{project.back_text}</StyledP>
                {/* This will open a modal */}
                <button
                  onClick={() => setShowForm(true)}
                  className="btn btn-primary btn-sm"
                >
                  Vezi detaliile complete
                </button>
              </CardBodyBack>
            </div>
          </CardBack>
        </CardInner>
      </CardWrapper>
      <Modal
        show={showForm}
        title={t(project.name)}
        onClose={() => setShowForm(false)}
        logo={project.business_logo}
      >
        {/* Websites & Web Apps */}
        {project.categoryInner === "websites" ||
        project.categoryInner === "web-apps" ? (
          <>
            <h3>Prezentare Generală a Proiectului</h3>
            <h4>Mai multe despre {project.name}</h4>
            <p>{project.business_description}</p>
            {/* Challenges */}
            <section>
              <h4>Provocările Proiectului</h4>
              <StyledUl>
                {project.project_challenges?.map((ch) => (
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    {ch}
                  </li>
                ))}
              </StyledUl>
            </section>
            {/* Solution */}
            <section>
              <h4>Soluția</h4>
              <p>{project.project_solution}</p>
            </section>
            {/* Results */}
            <section>
              <h4>Rezultate</h4>
              <p>{project.project_results.project_results_intro}</p>
              <StyledUl>
                {project.project_results.project_results_list.map((item) => (
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    {item}
                  </li>
                ))}
              </StyledUl>
            </section>
            {/* Key Points */}
            <section>
              <h4>Puncte Cheie</h4>
              <StyledUl>
                {project.project_key_points.map((item) => (
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    {item}
                  </li>
                ))}
              </StyledUl>
            </section>
            {/* Live Project */}
            <section>
              <h4>Proiect Live</h4>
              <StyledButton href={project.live_url} target="_blank">
                Previzualizare Live
              </StyledButton>
            </section>
          </>
        ) : (
          ""
        )}
        {/* Ads */}
        {project.categoryInner === "ads" ? (
          <>
            <h3>Prezentare Proiect</h3>
            <h4>Mai multe despre {project.name}</h4>
            <p>{project.business_description}</p>
            {/* Challenges */}
            <section>
              <h4>Provocări ale Proiectului</h4>
              <StyledUl>
                {project.project_challenges.map((item) => (
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    {item}
                  </li>
                ))}
              </StyledUl>
            </section>
            {/* Solution */}
            <section>
              <h4>Soluție</h4>
              <p>{project.project_solution}</p>
            </section>
            {/* Results */}
            <section>
              <h4>Rezultate</h4>
              <p>{project.project_results.project_results_intro}</p>
              <StyledUl>
                {project.project_results.project_results_list.map((item) => (
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    {item}
                  </li>
                ))}
              </StyledUl>
            </section>
            {/* Key Points */}
            <section>
              <h4>Puncte Cheie</h4>
              <StyledUl>
                {project.project_key_points.map((item) => (
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    {item}
                  </li>
                ))}
              </StyledUl>
            </section>
            {/* Full Image */}
            <section>
              <h4>Proiect Live</h4>
              <StyledButton
                href="#!"
                className="btn btn-success"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(true);
                }}
              >
                Previzualizare Live
              </StyledButton>

              {/* Lightbox */}
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[{ src: project.card_img }]}
              />
            </section>
          </>
        ) : (
          ""
        )}
        {/* Reel */}
        {project.category === "Reel" ? (
          <>
            <h3>Prezentare Proiect</h3>
            <h4>Mai multe despre {project.name}</h4>
            <p>{project.business_description}</p>
            {/* Challenges */}
            <section>
              <h4>Provocări ale Proiectului</h4>
              <StyledUl>
                {project.project_challenges?.map((item) => (
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    {item}
                  </li>
                ))}
              </StyledUl>
            </section>
            {/* Solution */}
            <section>
              <h4>Soluție</h4>
              <p>{project.project_solution}</p>
            </section>
            {/* Results */}
            <section>
              <h4>Rezultate</h4>
              <p>{project.project_results.project_results_intro}</p>
              <StyledUl>
                {project.project_results.project_results_list.map((item) => (
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    {item}
                  </li>
                ))}
              </StyledUl>
            </section>
            {/* Key Points */}
            <section>
              <h4>Puncte Cheie</h4>
              <StyledUl>
                {project.project_key_points.map((item) => (
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    {item}
                  </li>
                ))}
              </StyledUl>
            </section>
            {/* Full Image */}
            <section>
              <h4>Video complet</h4>
              <StyledButton
                href="#!"
                className="btn btn-success"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(true);
                }}
              >
                Vezi video-ul complet
              </StyledButton>

              {/* Lightbox */}
              <Lightbox
                plugins={[Video]}
                open={open}
                close={() => setOpen(false)}
                slides={[
                  {
                    type: "video",
                    width: 1080,
                    height: 1920,
                    poster: project.poster,
                    sources: [
                      {
                        src: project.video,
                        type: "video/mp4",
                      },
                    ],
                  },
                ]}
              />
            </section>
          </>
        ) : (
          ""
        )}
      </Modal>
    </div>
  );
}

export default CardFlip;
