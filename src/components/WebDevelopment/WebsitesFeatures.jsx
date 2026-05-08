import {
  faArrowRightToBracket,
  faComments,
  faImages,
  faMapLocationDot,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledWebsitesFeatures = styled.div`
  /* border: 1px solid white; */
`;

const StyledSection2 = styled.section`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const FeaturesImg = styled.img`
  border-radius: 20px;
`;

const StyledP = styled.p`
  text-align: justify;
  margin-bottom: 0;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  /* flex-direction: column; */
  gap: 0.5rem;
  padding: 0;
`;

const StyledFontAwesomeIocn = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

function WebsitesFeatures() {
  const { t } = useTranslation();

  return (
    <StyledWebsitesFeatures>
      <div className="container">
        {/* Features & Capabilities */}
        <StyledSection2>
          <div className="row">
            <h2 className="mb-3">Funcționalități și capabilități</h2>
            <div className="col-12 mb-4">
              <StyledP className="fs-5 mb-4">
                Începem cu website-uri de prezentare care evidențiază brandul și
                serviciile tale, apoi le extindem cu funcționalități
                personalizate, în funcție de nevoile afacerii tale. Aceste
                funcționalități pot include:
              </StyledP>

              <div>
                <StyledUl className="fs-5 row">
                  <li>
                    <div className="card rounded-4">
                      <div className="card-body">
                        <div className="card-title">
                          <div className="d-flex gap-2">
                            <div>
                              <StyledFontAwesomeIocn icon={faComments} />
                            </div>
                            <div>
                              <strong>Chat live</strong>
                            </div>
                          </div>
                        </div>
                        <div className="card-text">
                          Integrare chat live pentru a comunica direct cu
                          clienții tăi.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card rounded-4">
                      <div className="card-body">
                        <div className="card-title">
                          <div className="d-flex gap-2">
                            <div>
                              <StyledFontAwesomeIocn icon={faImages} />
                            </div>
                            <div>
                              <strong>Prezentări de produse</strong>
                            </div>
                          </div>
                        </div>
                        <div className="card-text">
                          Prezentări interactive de produse și galerii de
                          imagini pentru a evidenția ofertele tale.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card rounded-4">
                      <div className="card-body">
                        <div className="card-title">
                          <div className="d-flex gap-2">
                            <div>
                              <StyledFontAwesomeIocn icon={faMessage} />
                            </div>

                            <div>
                              <strong>Formulare</strong>
                            </div>
                          </div>
                        </div>
                        <div className="card-text">
                          Formulare de contact și trimiterea solicitărilor,
                          stocate în siguranță în baze de date.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card rounded-4">
                      <div className="card-body">
                        <div className="card-title">
                          <div className="d-flex gap-2">
                            <div>
                              <StyledFontAwesomeIocn
                                icon={faArrowRightToBracket}
                              />
                            </div>
                            <div>
                              <strong>Funcționalitate de autentificare</strong>
                            </div>
                          </div>
                        </div>
                        <div className="card-text">
                          Autentificare pentru utilizatori și panouri de
                          administrare pentru gestionarea conținutului.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card rounded-4">
                      <div className="card-body">
                        <div className="card-title">
                          <div className="d-flex gap-2">
                            <div>
                              <StyledFontAwesomeIocn icon={faMapLocationDot} />
                            </div>
                            <div>
                              <strong>
                                Hărți și alte elemente interactive
                              </strong>
                            </div>
                          </div>
                        </div>
                        <div className="card-text">
                          Hărți, media încorporată sau alte elemente interactive
                          adaptate afacerii tale.
                        </div>
                      </div>
                    </div>
                  </li>
                </StyledUl>
              </div>
            </div>
          </div>
        </StyledSection2>
      </div>
    </StyledWebsitesFeatures>
  );
}

export default WebsitesFeatures;
