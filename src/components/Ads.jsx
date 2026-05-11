import ContentCreationCard from "./ContentCreationCard";
import Card from "./Card";
import styled from "styled-components";
import contentCreationImg from "../assets/content_creation_image.jpg";
import googleAdsImage from "../assets/google_ads_image.jpg";
import facebookAdsImage from "../assets/facebook_ads_image.jpg";

const StyledAds = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  @media (max-width: 576px) {
    margin-bottom: 2rem;
    text-align: center;
    gap: 1rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    padding-top: 1.5rem;
    gap: 1rem;
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    padding-top: 2rem;
    gap: 1rem;
    text-align: center;
  }
`;

const AdsTitle = styled.h2`
  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
  }
`;

function Ads() {
  return (
    <StyledAds className="container">
      <AdsTitle>Publicitate și Creare de Conținut</AdsTitle>
      <p className="fs-5">
        Conținut promoțional și campanii publicitare gestionate pentru a aduce
        rezultate măsurabile afacerii tale.
      </p>
      <div className="container">
        <div className="row d-flex align-items-stretch">
          <div className="col-md-6 col-lg-4 mb-4">
            {/* Content Creation */}
            <Card
              title="Creare de Conținut"
              subtitle="Imagini și Reels pentru reclame Facebook și Google"
              text="Producem materiale vizuale promoționale — imagini compuse și clipuri scurte de tip Reels — concepute să evidențieze brandul tău și să genereze acțiune."
              bgImage={contentCreationImg}
              link1="/portfolio"
              link2="/advertising-content-creation"
              caseStudiesBtn="Vezi studii de caz"
              exploreServicesBtn="Descoperă serviciile"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            {/* Google Ads Campaigns */}
            <Card
              title="Campanii Google Ads"
              subtitle="De la strategie la optimizare continuă"
              text="Construim campania ta de la zero — structură, targetare și obiective clare. Monitorizăm performanța, implementăm îmbunătățiri și livrăm rapoarte lunare."
              readMoreBtn="Mai multe despre tipurile de campanii"
              bgImage={googleAdsImage}
              link3="/advertising-content-creation"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            {/* Facebook Ads Campaigns */}
            <Card
              title="Campanii Facebook Ads"
              subtitle="Campanii atractive, adaptate obiectivelor afacerii tale"
              text="Crearea și administrarea campaniilor Facebook Ads, incluzând conținut promoțional, texte publicitare și monitorizarea performanței, pentru a ajunge eficient la publicul tău."
              readMoreBtn="Mai multe despre tipurile de campanii"
              bgImage={facebookAdsImage}
              link3="/advertising-content-creation"
            />
          </div>
        </div>
      </div>
    </StyledAds>
  );
}

export default Ads;
