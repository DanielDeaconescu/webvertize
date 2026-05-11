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
  const cardItems = [
    {
      title: "Chat live",
      text: "Comunicare directă cu vizitatorii site-ului, în timp real.",
    },
    {
      title: "Prezentări de produse",
      text: "Galerii interactive și prezentări vizuale pentru a evidenția produsele și serviciile tale.",
    },
    {
      title: "Formulare",
      text: "Formulare de contact și solicitări, stocate în siguranță în baza de date.",
    },
    {
      title: "Funcționalitate de autentificare",
      text: "Autentificare securizată și panou de administrare pentru gestionarea conținutului.",
    },
    {
      title: "Hărți și elemente interactive",
      text: "Hărți, media încorporată și alte elemente interactive adaptate afacerii tale.",
    },
  ];

  return (
    <StyledWebsitesFeatures>
      <div className="container">
        {/* Features & Capabilities */}
        <StyledSection2>
          <div className="row">
            <h2 className="mb-3">Funcționalități și capabilități</h2>
            <div className="col-12 mb-4">
              <StyledP className="fs-5 mb-4">
                Construim website-uri de prezentare și le extindem cu
                funcționalități personalizate în funcție de nevoile afacerii
                tale:
              </StyledP>

              <div>
                <StyledUl className="fs-5 row">
                  {cardItems.map((item) => (
                    <li>
                      <div className="card rounded-4">
                        <div className="card-body">
                          <div className="card-title">
                            <div className="d-flex gap-2">
                              <div>
                                <StyledFontAwesomeIocn icon={faComments} />
                              </div>
                              <div>
                                <strong>{item.title}</strong>
                              </div>
                            </div>
                          </div>
                          <div className="card-text">{item.text}</div>
                        </div>
                      </div>
                    </li>
                  ))}
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
