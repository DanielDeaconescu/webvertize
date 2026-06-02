import Modal from "../Modal";
import { useState } from "react";
import Form from "../Form";
import styled from "styled-components";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import imgContent1 from "../../assets/portfolio/content_creation/content1.webp";
import { Video } from "yet-another-react-lightbox/plugins";
import {
  faCheckSquare,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardWrapper = styled.div`
  height: 100%;
  perspective: 1000px;
  cursor: pointer;

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

const CardFaceInner = styled.div`
  height: 100%;
  border-radius: var(--radius-card);
  overflow: hidden;
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  display: flex;
  flex-direction: column;
`;

const CardFace = styled.div`
  height: 100%;
  border-radius: var(--radius-card);
  overflow: hidden;
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: top;
  display: block;
  flex-shrink: 0;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem;
  flex-grow: 1;
`;

const CardTitle = styled.h5`
  font-family: var(--font-family);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
`;

const CardText = styled.p`
  font-family: var(--font-family);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
`;

const CategoryTag = styled.div`
  display: inline-flex;
  align-self: flex-start;
  padding: 0.25rem 0.65rem;
  border-radius: 99px;
  background-color: var(--color-surface-2);
  border: 1px solid var(--color-border);
  font-family: var(--font-family);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`;

const CardBack = styled.div`
  position: absolute;
  inset: 0;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  border-radius: var(--radius-card);
  overflow: hidden;
  border: 1px solid var(--color-accent);
  background-color: var(--color-surface-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
  text-align: center;
`;

const CardBackInner = styled.div`
  position: absolute;
  inset: 0;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  border-radius: var(--radius-card);
  overflow: hidden;
  border: 1px solid var(--color-accent);
  background-color: var(--color-surface-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
  text-align: center;
`;

const BackTitle = styled.h5`
  font-family: var(--font-family);
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
`;

const BackText = styled.p`
  font-family: var(--font-family);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
`;

const DetailsButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.25rem;
  border: none;
  border-radius: var(--radius-btn);
  background-color: var(--color-accent);
  color: var(--color-bg);
  font-family: var(--font-family);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color var(--transition),
    transform var(--transition);

  &:hover {
    background-color: var(--color-accent-dim);
    transform: translateY(-1px);
  }
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

const ModalSectionTitle = styled.h3`
  font-family: var(--font-family);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 1.5rem 0 0.5rem 0;
  letter-spacing: -0.01rem;
`;

const ModalSubtitle = styled.h4`
  font-family: var(--font-family);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  margin: 0 0 0.75rem 0;
`;

const ModalText = styled.p`
  font-family: var(--font-family);
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin: 0 0 0.75rem 0;
`;

const ModalList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 0.75rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ModalListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-family: var(--font-family);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

const ModalCheckIcon = styled.div`
  color: var(--color-accent);
  font-size: 0.8rem;
  margin-top: 3px;
  flex-shrink: 0;
`;

const LiveButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  border-radius: var(--radius-btn);
  background-color: var(--color-accent);
  color: var(--color-bg);
  font-family: var(--font-family);
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color var(--transition);
  cursor: pointer;

  &:hover {
    background-color: var(--color-accent-dim);
  }
`;

function CardFlip({ project }) {
  const [showForm, setShowForm] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <CardWrapper>
        <CardInner className="card-flip-inner">
          {/* Front */}
          <CardFace>
            <CardFaceInner>
              <CardImage
                src={project.card_img}
                alt={project.name}
                loading="lazy"
              />

              <CardContent>
                <CategoryTag>{project.category}</CategoryTag>
                <CardTitle>{project.name}</CardTitle>
                <CardText>{project.front_text}</CardText>
              </CardContent>
            </CardFaceInner>
          </CardFace>

          {/* Back */}
          <CardBack>
            <BackTitle>{project.name}</BackTitle>
            <BackText>{project.back_text}</BackText>
            <DetailsButton onClick={() => setShowForm(true)}>
              Vezi detaliile complete
            </DetailsButton>
          </CardBack>
        </CardInner>
      </CardWrapper>
      <Modal
        show={showForm}
        title={project.name}
        onClose={() => setShowForm(false)}
        logo={project.business_logo}
      >
        {/* Websites & Web Apps */}
        {(project.categoryInner === "websites" ||
          project.categoryInner === "web-apps") && (
          <>
            <ModalSectionTitle>
              Prezentare Generală a Proiectului
            </ModalSectionTitle>
            <ModalSubtitle>Mai multe despre {project.name}</ModalSubtitle>
            <ModalText>{project.business_description}</ModalText>
            {/* Challenges */}
            <section>
              <ModalSectionTitle>Provocările Proiectului</ModalSectionTitle>
              <ModalList>
                {project.project_challenges?.map((ch) => (
                  <ModalListItem key={ch}>
                    <ModalCheckIcon>
                      <FontAwesomeIcon icon={faSquareCheck} />
                    </ModalCheckIcon>
                    {ch}
                  </ModalListItem>
                ))}
              </ModalList>
            </section>
            {/* Solution */}
            <section>
              <ModalSectionTitle>Soluția</ModalSectionTitle>
              <ModalText>{project.project_solution}</ModalText>
            </section>
            {/* Results */}
            <section>
              <ModalSectionTitle>Rezultate</ModalSectionTitle>
              <ModalText>
                {project.project_results.project_results_intro}
              </ModalText>
              <ModalList>
                {project.project_results.project_results_list.map((item) => (
                  <ModalListItem key={item}>
                    <ModalCheckIcon>
                      <FontAwesomeIcon icon={faCheckSquare} />
                    </ModalCheckIcon>
                    {item}
                  </ModalListItem>
                ))}
              </ModalList>
            </section>
            {/* Key Points */}
            <section>
              <ModalSectionTitle>Puncte Cheie</ModalSectionTitle>
              <ModalList>
                {project.project_key_points.map((item) => (
                  <ModalListItem key={item}>
                    <ModalCheckIcon>
                      <FontAwesomeIcon icon={faSquareCheck} />
                    </ModalCheckIcon>
                    {item}
                  </ModalListItem>
                ))}
              </ModalList>
            </section>
            {/* Live Project */}
            <section>
              <ModalSectionTitle>Proiect Live</ModalSectionTitle>
              <LiveButton
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Previzualizare Live
              </LiveButton>
            </section>
          </>
        )}
        {/* Ads */}
        {project.categoryInner === "ads" && (
          <>
            <ModalSectionTitle>Prezentare Proiect</ModalSectionTitle>
            <ModalSubtitle>Mai multe despre {project.name}</ModalSubtitle>
            <ModalText>{project.business_description}</ModalText>

            <section>
              <ModalSectionTitle>Provocări ale Proiectului</ModalSectionTitle>
              <ModalList>
                {project.project_challenges.map((item) => (
                  <ModalListItem key={item}>
                    <ModalCheckIcon>
                      <FontAwesomeIcon icon={faSquareCheck} />
                    </ModalCheckIcon>
                    {item}
                  </ModalListItem>
                ))}
              </ModalList>
            </section>

            <section>
              <ModalSectionTitle>Soluție</ModalSectionTitle>
              <ModalText>{project.project_solution}</ModalText>
            </section>

            <section>
              <ModalSectionTitle>Rezultate</ModalSectionTitle>
              <ModalText>
                {project.project_results.project_results_intro}
              </ModalText>

              <ModalList>
                {project.project_results.project_results_list.map((item) => (
                  <ModalListItem key={item}>
                    <ModalCheckIcon>
                      <FontAwesomeIcon icon={faSquareCheck} />
                    </ModalCheckIcon>
                    {item}
                  </ModalListItem>
                ))}
              </ModalList>
            </section>

            <section>
              <ModalSectionTitle>Puncte Cheie</ModalSectionTitle>
              <ModalList>
                {project.project_key_points.map((item) => (
                  <ModalListItem key={item}>
                    <ModalCheckIcon>
                      <FontAwesomeIcon icon={faSquareCheck} />
                    </ModalCheckIcon>
                    {item}
                  </ModalListItem>
                ))}
              </ModalList>
            </section>

            <section>
              <ModalSectionTitle>Vizualizare</ModalSectionTitle>
              <LiveButton
                href="#!"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(true);
                }}
              >
                Vizualizare Poster
              </LiveButton>
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[{ src: project.card_img }]}
              />
            </section>
          </>
        )}
        {/* Reel */}
        {project.category === "Reel" && (
          <>
            <ModalSectionTitle>Prezentare Proiect</ModalSectionTitle>
            <ModalSubtitle>Mai multe despre {project.name}</ModalSubtitle>
            <ModalText>{project.business_description}</ModalText>

            <section>
              <ModalSectionTitle>Provocări ale Proiectului</ModalSectionTitle>
              <ModalList>
                {project.project_challenges?.map((item) => (
                  <ModalListItem key={item}>
                    <ModalCheckIcon>
                      <FontAwesomeIcon icon={faSquareCheck} />
                    </ModalCheckIcon>
                    {item}
                  </ModalListItem>
                ))}
              </ModalList>
            </section>

            <section>
              <ModalSectionTitle>Soluție</ModalSectionTitle>
              <ModalText>{project.project_solution}</ModalText>
            </section>

            <section>
              <ModalSectionTitle>Rezultate</ModalSectionTitle>
              <ModalText>
                {project.project_results.project_results_intro}
              </ModalText>
              <ModalList>
                {project.project_results.project_results_list.map((item) => (
                  <ModalListItem key={item}>
                    <ModalCheckIcon>
                      <FontAwesomeIcon icon={faSquareCheck} />
                    </ModalCheckIcon>
                    {item}
                  </ModalListItem>
                ))}
              </ModalList>
            </section>

            <section>
              <ModalSectionTitle>Puncte Cheie</ModalSectionTitle>
              <ModalList>
                {project.project_key_points.map((item) => (
                  <ModalListItem key={item}>
                    <ModalCheckIcon>
                      <FontAwesomeIcon icon={faSquareCheck} />
                    </ModalCheckIcon>
                    {item}
                  </ModalListItem>
                ))}
              </ModalList>
            </section>

            <section>
              <ModalSectionTitle>Video complet</ModalSectionTitle>
              <LiveButton
                href="#!"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(true);
                }}
              >
                Vezi video-ul complet
              </LiveButton>
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
                    sources: [{ src: project.video, type: "video/mp4" }],
                  },
                ]}
              />
            </section>
          </>
        )}
      </Modal>
    </>
  );
}

export default CardFlip;
