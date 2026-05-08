import { useTranslation } from "react-i18next";
import styled from "styled-components";
import websitesResultsImg from "../../assets/websites-results-img.jpg";

const StyledSection3 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
`;

const StyledImg = styled.img`
  border-radius: 1rem;
`;

function WebsitesResults() {
  const { t } = useTranslation();

  return (
    <StyledSection3 className="container">
      <h2 className="mb-3">Concepute pentru a genera rezultate</h2>
      <div className="row">
        <div className="col-12 col-xl-6 mb-4 mb-xl-0">
          <StyledImg className="img-fluid" src={websitesResultsImg} alt="" />
        </div>
        <div className="col-12 col-xl-6">
          <p className="fs-5">
            Toate website-urile noastre sunt compatibile cu toate browserele,
            complet optimizate pentru viteză și realizate respectând cele mai
            bune practici de accesibilitate și SEO.
          </p>
          <p className="fs-5">
            Considerăm website-ul tău un instrument puternic pentru a conecta cu
            clienții, a genera lead-uri și a dezvolta afacerea ta. Fiecare
            proiect este o colaborare: lucrăm îndeaproape cu tine pentru a
            defini obiectivele, a rafina designul și a livra un website care să
            reprezinte cu adevărat brandul tău.
          </p>
          <p className="fs-5">
            Indiferent dacă ai nevoie de un site simplu de prezentare sau de o
            soluție mai complexă cu instrumente integrate, Webvertize livrează
            website-uri care sunt atât atractive, cât și funcționale,
            oferindu-ți o bază solidă pentru creșterea online.
          </p>
        </div>
      </div>
    </StyledSection3>
  );
}

export default WebsitesResults;
