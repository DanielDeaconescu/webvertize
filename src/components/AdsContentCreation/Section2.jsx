import styled from "styled-components";
import googleAdsCampaigns from "../../assets/google_ads_campaigns_image.jpg";
import {
  faUserGear,
  faBullseye,
  faChartLine,
  faSliders,
  faBell,
  faArrowTrendUp,
  faFileLines,
  faMagnifyingGlass,
  faRectangleAd,
  faCartShopping,
  faVideo,
  faMobileScreenButton,
  faRocket,
  faSprayCanSparkles,
  faLocationDot,
  faHotel,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionHeading, SectionLabel } from "../../styles/shared";

const StyledSection2 = styled.section`
  padding: var(--section-padding);
  border-top: 1px solid var(--color-border);
`;

const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const GoogleAdsCampaigns = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--radius-card);
  border: 1px solid var(--color-border);
  display: block;
`;

const IntroText = styled.p`
  font-family: var(--font-family);
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin: 0;
`;

const SubsectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  margin-top: 3rem;
`;

const ProcessList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProcessItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  transition: border-color var(--transition);

  &:hover {
    border-color: var(--color-accent);
  }
`;

const ProcessIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: var(--color-surface-2);
  border: 1px solid var(--color-border);
  color: var(--color-accent);
  font-size: 1rem;
  flex-shrink: 0;
`;

const ProcessItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const ProcessItemTitle = styled.h3`
  font-family: var(--font-family);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
`;

const ProcessItemText = styled.p`
  font-family: var(--font-family);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.65;
  margin: 0;
`;

const CampaignTypesGrid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const CampaignTypeItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1.25rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  transition: border-color var(--transition);

  &:hover {
    border-color: var(--color-accent);
  }
`;

const CampaignTypeIcon = styled.div`
  color: var(--color-accent);
  font-size: 1rem;
  margin-top: 2px;
  flex-shrink: 0;
`;

const CampaignTypeText = styled.div`
  font-family: var(--font-family);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.55;

  strong {
    color: var(--color-text);
    font-weight: 600;
    display: block;
    margin-bottom: 0.2rem;
  }
`;

const TitleTotal = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.h2``;

const Subtitle = styled.div`
  /* margin-top: -12px; */
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const ContentRow = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1.5rem;
  }
`;

const StyledP = styled.p`
  font-size: 1.4rem;
  text-align: justify;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function Section2() {
  const processItems = [
    {
      icon: faUserGear,
      title:
        "Configurarea contului folosind propriul tău profil Google (păstrezi controlul complet)",
      text: "Te ajutăm să configurezi contul Google Ads pe propriul profil Google — astfel încât să deții controlul total. Acordăm accesul de administrare necesar și construim strategia de la zero.",
    },
    {
      icon: faBullseye,
      title: "Dezvoltarea strategiei în funcție de obiective și buget",
      text: "Înainte de lansarea campaniei, clarificăm obiectivele tale (generare de lead-uri, apeluri telefonice, vânzări sau vizite pe website) și le aliniem cu un buget lunar adecvat. Apoi dezvoltăm o structură de campanie adaptată pieței tale, serviciilor oferite și publicului țintă.",
    },
    {
      icon: faChartLine,
      title: "Monitorizarea zilnică a performanței",
      text: "După lansare, monitorizăm zilnic campaniile tale. Urmărim indicatorii de performanță, analizăm tendințele de căutare și identificăm semnale timpurii care ne permit să facem ajustări rapide și informate.",
    },
    {
      icon: faSliders,
      title:
        "Optimizări continue ale ofertelor, cuvintelor-cheie și targetării",
      text: "Campaniile tale sunt într-o evoluție constantă. Ajustăm ofertele, actualizăm cuvintele-cheie, modificăm tipurile de potrivire, îmbunătățim targetarea și testăm variații noi pentru a menține eficiența și relevanța.",
    },
    {
      icon: faBell,
      title: "Notificări și asistență privind pragurile de facturare",
      text: "Monitorizăm pragurile de facturare pentru a ne asigura că reclamele tale nu se opresc neașteptat. Atunci când se apropie plățile sau este necesară o acțiune din partea ta, te notificăm imediat și te ghidăm pas cu pas.",
    },
    {
      icon: faArrowTrendUp,
      title: "Implementarea urmăririi conversiilor, atunci când este necesar",
      text: "Anumite campanii necesită setări suplimentare pentru a măsura corect rezultatele. Atunci când este nevoie, implementăm urmărirea conversiilor pentru formulare, apeluri sau alte acțiuni pe website, oferindu-ți o imagine clară asupra a ceea ce funcționează și a aspectelor ce pot fi îmbunătățite.",
    },
    {
      icon: faFileLines,
      title: "Rapoarte lunare de performanță pentru transparență totală",
      text: "În fiecare lună primești un raport de performanță clar și ușor de înțeles. Evidențiem ce s-a schimbat, cum a fost cheltuit bugetul și cum evoluează campania în raport cu obiectivele tale. Știi întotdeauna exact unde se duce investiția ta.",
    },
  ];

  const campaignTypesItems = [
    {
      icon: faMagnifyingGlass,
      title: "Campanii de Căutare",
      text: "Reclame text afișate în rezultatele Google Search.",
    },
    {
      icon: faRectangleAd,
      title: "Campanii Display",
      text: "Reclame vizuale (imagini / bannere) afișate pe milioane de website-uri.",
    },
    {
      icon: faCartShopping,
      title: "Campanii Shopping",
      text: "Listări de produse cu imagini și prețuri.",
    },
    {
      icon: faVideo,
      title: "Campanii Video",
      text: "Reclame video pe YouTube și în rețeaua de parteneri Google.",
    },
    {
      icon: faMobileScreenButton,
      title: "Campanii pentru Aplicații",
      text: "Reclame pentru instalarea și utilizarea aplicațiilor mobile.",
    },
    {
      icon: faRocket,
      title: "Performance Max",
      text: "Campanii multi-canal bazate pe inteligență artificială, active pe toate proprietățile Google.",
    },
    {
      icon: faSprayCanSparkles,
      title: "Demand Gen",
      text: "Reclame vizuale atractive afișate în Discover, YouTube și Gmail.",
    },
    {
      icon: faLocationDot,
      title: "Local Services Ads",
      text: "Reclame cu intenție ridicată pentru afaceri locale bazate pe servicii.",
    },
    {
      icon: faHotel,
      title: "Campanii pentru Hoteluri / Turism",
      text: "Reclame specializate dedicate industriei de turism.",
    },
    {
      icon: faGears,
      title: "Campanii Smart",
      text: "Campanii simplificate și automatizate, potrivite pentru bugete mai mici.",
    },
  ];

  return (
    <StyledSection2>
      <div className="container">
        <SubsectionHeader>
          <SectionLabel>Google Ads</SectionLabel>
          <SectionHeading>Procesul Nostru</SectionHeading>
        </SubsectionHeader>
        <IntroGrid>
          <GoogleAdsCampaigns
            src={googleAdsCampaigns}
            alt="Campanii Google Ads"
            width="400"
            height="300"
          />
          <IntroText>
            Campaniile Google Ads funcționează cel mai bine cu obiective clare,
            targetare precisă și optimizare continuă. Construim structura
            campaniei împreună cu tine, rafinăm constant performanța și livrăm
            rapoarte transparente — astfel încât să înțelegi întotdeauna cum
            lucrează investiția ta.
          </IntroText>
        </IntroGrid>

        <ProcessList>
          {processItems.map((item) => (
            <ProcessItem key={item.title}>
              <ProcessIconWrapper>
                <FontAwesomeIcon icon={item.icon} />
              </ProcessIconWrapper>
              <ProcessItemContent>
                <ProcessItemTitle>{item.title}</ProcessItemTitle>
                <ProcessItemText>{item.text}</ProcessItemText>
              </ProcessItemContent>
            </ProcessItem>
          ))}
        </ProcessList>

        <SubsectionHeader>
          <SectionLabel>Tipuri de campanii</SectionLabel>
          <SectionHeading>
            Tipuri de Campanii Google pe care le Gestionăm
          </SectionHeading>
        </SubsectionHeader>
        <CampaignTypesGrid>
          {campaignTypesItems.map((item) => (
            <CampaignTypeItem key={item.title}>
              <CampaignTypeIcon>
                <FontAwesomeIcon icon={item.icon} />
              </CampaignTypeIcon>
              <CampaignTypeText>
                <strong>{item.title}</strong>
                {item.text}
              </CampaignTypeText>
            </CampaignTypeItem>
          ))}
        </CampaignTypesGrid>
      </div>
    </StyledSection2>
  );
}

export default Section2;
