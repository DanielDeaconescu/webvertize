import {
  faChartLine,
  faGears,
  faHandshake,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Pillars = styled.div``;

const PillarsTitle = styled.h3`
  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
  }
`;

const SubtitleCorePrinciples = styled.p``;

const PillarsRow = styled.div`
  display: flex;

  @media (max-width: 576px) {
    gap: 0.75rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    gap: 0.75rem;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    gap: 1rem;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  @media (min-width: 768px) and (max-width: 992px) {
    margin-bottom: 0.25rem;
  }
`;

function OurPrinciples() {
  return (
    <Pillars className="container mb-5">
      <PillarsTitle>Principiile noastre de bază</PillarsTitle>
      <SubtitleCorePrinciples className="fs-5">
        Modul în care abordăm fiecare proiect și parteneriat
      </SubtitleCorePrinciples>
      <div className="container">
        <PillarsRow className="row d-flex align-items-stretch">
          <div className="col-sm-12 col-lg-3">
            <Card className="card h-100 text-white">
              <div className="card-body">
                <h5 className="card-title d-flex align-items-center gap-3 fs-5">
                  <FontAwesomeIcon icon={faChartLine} />
                  Strategie orientată spre creștere
                </h5>
                <p className="card-text fs-6">
                  Soluțiile noastre digitale sunt concepute pentru a susține
                  obiectivele afacerii tale — notorietatea brandului, ratele de
                  conversie, relațiile cu clienții și nu numai.
                </p>
              </div>
            </Card>
          </div>
          <div className="col-sm-12 col-lg-3">
            <Card className="card h-100 text-white">
              <div className="card-body">
                <h5 className="card-title d-flex gap-2 align-items-center">
                  <FontAwesomeIcon icon={faGears} />
                  Eficiență prin tehnologie
                </h5>
                <p className="card-text">
                  Optimizăm procesele de business prin aplicații web,
                  automatizări și instrumente moderne care ajută afacerea ta să
                  funcționeze mai eficient.
                </p>
              </div>
            </Card>
          </div>
          <div className="col-sm-12 col-lg-3">
            <Card className="card h-100 text-white">
              <div className="card-body">
                <h5 className="card-title d-flex gap-2 align-items-center">
                  <FontAwesomeIcon icon={faHandshake} />
                  Parteneriate pe termen lung
                </h5>
                <p className="card-text">
                  Credem că rezultatele excelente vin din colaborări pe termen
                  lung — nu din livrări punctuale. Lucrăm alături de afacerea
                  ta, adaptând soluțiile pe măsură ce obiectivele tale
                  evoluează.
                </p>
              </div>
            </Card>
          </div>
          <div className="col-sm-12 col-lg-3">
            <Card className="card h-100 text-white">
              <div className="card-body">
                <h5 className="card-title d-flex gap-2 align-items-center">
                  <FontAwesomeIcon icon={faRocket} />
                  Prezența ta digitală, dusă la nivelul următor
                </h5>
                <p className="card-text">
                  Credem că rezultatele excelente vin din colaborări pe termen
                  lung — nu din livrări punctuale. Lucrăm alături de afacerea
                  ta, adaptând soluțiile pe măsură ce obiectivele tale
                  evoluează.
                </p>
              </div>
            </Card>
          </div>
        </PillarsRow>
      </div>
    </Pillars>
  );
}

export default OurPrinciples;
