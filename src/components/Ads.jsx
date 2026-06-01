import ContentCreationCard from "./ContentCreationCard";
import Card from "./Card";
import styled from "styled-components";
import contentCreationImg from "../assets/content_creation_image.jpg";
import googleAdsImage from "../assets/google_ads_image.jpg";
import facebookAdsImage from "../assets/facebook_ads_image.jpg";
import { SectionHeading, SectionSubtitle } from "../styles/shared";

const StyledAds = styled.div`
  padding: var(--section-padding);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

function Ads() {
  return (
    <StyledAds className="container">
      <SectionHeading>Publicitate și Creare de Conținut</SectionHeading>
      <SectionSubtitle>
        Conținut promoțional și campanii publicitare gestionate pentru a aduce
        rezultate măsurabile afacerii tale.
      </SectionSubtitle>
      <CardsGrid>
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

        {/* Google Ads Campaigns */}
        <Card
          title="Campanii Google Ads"
          subtitle="De la strategie la optimizare continuă"
          text="Construim campania ta de la zero — structură, targetare și obiective clare. Monitorizăm performanța, implementăm îmbunătățiri și livrăm rapoarte lunare."
          readMoreBtn="Mai multe despre tipurile de campanii"
          bgImage={googleAdsImage}
          link3="/advertising-content-creation"
        />

        {/* Facebook Ads Campaigns */}
        <Card
          title="Campanii Facebook Ads"
          subtitle="Campanii atractive, adaptate obiectivelor afacerii tale"
          text="Crearea și administrarea campaniilor Facebook Ads, incluzând conținut promoțional, texte publicitare și monitorizarea performanței, pentru a ajunge eficient la publicul tău."
          readMoreBtn="Mai multe despre tipurile de campanii"
          bgImage={facebookAdsImage}
          link3="/advertising-content-creation"
        />
      </CardsGrid>
    </StyledAds>
  );
}

export default Ads;
