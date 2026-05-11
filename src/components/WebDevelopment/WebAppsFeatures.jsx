import {
  faChartLine,
  faChartPie,
  faComments,
  faDatabase,
  faTicket,
  faUserLock,
  faUserShield,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledWebAppsFeatures = styled.section`
  display: flex;
  gap: 2rem;
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

function WebAppsFeatures() {
  const items = [
    {
      title: "Dashboard-uri și interfețe personalizate",
      text: "Interfețe create în jurul fluxurilor tale de lucru, nu invers, pentru o integrare mai rapidă și o productivitate crescută.",
      icon: faChartLine,
    },
    {
      title: "Acces și permisiuni pe roluri",
      text: "Interfețe dedicate pentru manageri, operatori, membri ai echipei și clienți, astfel încât informația potrivită să ajungă la persoanele potrivite.",
      icon: faUserShield,
    },
    {
      title: "Integrare cu baze de date",
      text: "Baze de date structurate, sigure și scalabile — ușor de căutat și pregătite pentru rapoarte.",
      icon: faDatabase,
    },
    {
      title: "Fluxuri de formulare și introducere date",
      text: "Formulare dinamice cu validări, atașamente și fluxuri de aprobare — pentru a automatiza munca manuală.",
      icon: faListCheck,
    },
    {
      title: "Sisteme de ticketing și suport",
      text: "Centralizează comunicarea, gestionează solicitările, urmărește progresul și obține informații valoroase despre problemele recurente.",
      icon: faTicket,
    },
    {
      title: "Chat live și funcționalități în timp real",
      text: "Mesagerie în timp real între angajați, echipa de suport și clienți, integrată direct în procesele tale existente.",
      icon: faComments,
    },
    {
      title: "Autentificare și management utilizatori",
      text: "Acces securizat prin parolă, autentificare, creare de conturi sau SSO — adaptat nevoilor afacerii tale.",
      icon: faUserLock,
    },
    {
      title: "Analiză și raportare",
      text: "Ia decizii informate pe baza indicatorilor operaționali, jurnalelor de utilizare și rapoartelor de performanță adaptate KPI-urilor tale.",
      icon: faChartPie,
    },
  ];

  return (
    <StyledWebAppsFeatures className="container">
      <div className="row">
        <h2 className="mb-3">Funcționalități & capabilități</h2>
        <div className="col-12 mb-4">
          <StyledP className="fs-5 mb-4">
            În funcție de nevoile afacerii tale, soluția poate include:
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
    </StyledWebAppsFeatures>
  );
}

export default WebAppsFeatures;
