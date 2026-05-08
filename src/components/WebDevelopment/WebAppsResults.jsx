import {
  faArrowTrendUp,
  faBullseye,
  faClock,
  faEye,
  faHandshake,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledSection3 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const StyledP = styled.p`
  text-align: justify;
  margin-bottom: 0;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0;
`;

const StyledFontAwesomeIocn = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

function WebAppsResults() {
  const { t } = useTranslation();

  const items = [
    {
      title: "Economisi timp",
      text: "Automatizează sarcinile manuale repetitive și centralizează informațiile într-o singură platformă unificată.",
      icon: faClock,
    },
    {
      title: "Îmbunătăți acuratețea",
      text: "Reduce erorile prin validarea datelor, formulare structurate și fluxuri de lucru clare.",
      icon: faBullseye,
    },
    {
      title: "Crește vizibilitatea",
      text: "Dashboard-urile în timp real te ajută să înțelegi ce se întâmplă în cadrul echipelor sau departamentelor.",
      icon: faEye,
    },
    {
      title: "Susține creșterea",
      text: "Instrumentele personalizate se adaptează pe măsură ce procesele tale devin mai complexe, fără a te forța să schimbi software-ul.",
      icon: faArrowTrendUp,
    },
    {
      title: "Consolida echipele",
      text: "Instrumentele mai bune îmbunătățesc comunicarea, reduc fricțiunile și aliniază toți membrii echipei în jurul obiectivelor comune.",
      icon: faUsers,
    },
    {
      title: "Îmbunătăți experiența clienților",
      text: "Sistemele de ticketing, chat-ul live, portalurile și fluxurile automatizate creează o experiență mai fluentă pentru clienții tăi.",
      icon: faHandshake,
    },
  ];

  return (
    <StyledSection3 className="container">
      <div className="row">
        <h2 className="mb-3">Concepute pentru a genera rezultate</h2>
        <div className="col-12 mb-4">
          <StyledP className="fs-5 mb-4">
            O aplicație web personalizată nu este doar un instrument — este un
            factor de schimbare operațională. Aplicațiile noastre sunt concepute
            pentru a:
          </StyledP>

          <div>
            <StyledUl className="fs-5">
              {items.map((i) => (
                <li>
                  <div className="card rounded-4">
                    <div className="card-body">
                      <div className="card-title">
                        <div className="d-flex gap-2">
                          <div>
                            <StyledFontAwesomeIocn icon={i.icon} />
                          </div>
                          <div>
                            <strong>{i.title}</strong>
                          </div>
                        </div>
                      </div>
                      <div className="card-text">{i.text}</div>
                    </div>
                  </div>
                </li>
              ))}
            </StyledUl>
          </div>
        </div>
      </div>
    </StyledSection3>
  );
}

export default WebAppsResults;
