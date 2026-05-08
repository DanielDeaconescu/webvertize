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

const StyledSection2 = styled.section`
  padding-bottom: 4rem;
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

const GoogleAdsCampaigns = styled.img`
  border-radius: 1.2rem;

  @media (max-width: 576px) {
    max-width: 300px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    max-width: 450px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    max-width: 500px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    max-width: 650px;
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
      text: "Începem prin a te ajuta să îți configurezi contul Google Ads folosind propriul profil Google, astfel încât să deții controlul total asupra acestuia. După configurare, acordăm accesul de administrare necesar și începem să construim o strategie bazată pe claritate, relevanță și optimizare continuă.",
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
      text: "Campaniile tale sunt într-o evoluție constantă. Ajustăm ofertele, actualizăm cuvintele-cheie, modificăm tipurile de potrivire, îmbunătățim targetarea și testăm variații noi pentru a menține eficiența și relevanța. Astfel, reclamele se adaptează comportamentului real al utilizatorilor și condițiilor din piață.",
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
    <StyledSection2 className="container">
      <div className="row">
        <TitleTotal>
          <Title>Campanii Google Ads</Title>
          <Subtitle className="fs-5">
            Publicitate Bazată pe Căutări, cu Rezultate Măsurabile
          </Subtitle>
        </TitleTotal>

        <Content>
          <ContentRow className="row mb-4">
            <div className="col-sm-12 col-xl-4 d-flex align-items-center justify-content-center">
              <GoogleAdsCampaigns
                src={googleAdsCampaigns}
                className="img-fluid"
              />
            </div>
            <div className="col-sm-12 col-xl-8 d-flex align-items-center justify-content-center">
              <StyledP className="fs-5">
                Campaniile Google Ads sunt cele mai eficiente atunci când sunt
                construite pe obiective clare, targetare precisă și optimizare
                continuă. Lucrăm împreună cu tine pentru a crea o structură de
                campanie adaptată obiectivelor afacerii tale, rafinăm constant
                performanța și oferim rapoarte transparente, astfel încât să
                înțelegi întotdeauna cum funcționează investiția ta.
              </StyledP>
            </div>
          </ContentRow>
        </Content>
        {/* Our Process */}
        <ContentRow className="row">
          <h2>Procesul Nostru</h2>
          <StyledUl>
            {processItems.map((i) => (
              <li>
                <div class="card rounded-4">
                  <div class="card-body">
                    <h4 className="d-flex gap-2">
                      <FontAwesomeIcon icon={i.icon} />
                      {i.title}
                    </h4>
                    <p className="fs-5">{i.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </StyledUl>
        </ContentRow>
        {/* Campaign Types We Manage */}
        <ContentRow className="row">
          <h2>Tipuri de Campanii Google pe care le Gestionăm</h2>
          <div className="card rounded-4">
            <StyledUl className="list-group list-group-flush fs-5 p-4">
              {campaignTypesItems.map((i) => (
                <li className="list-group-item d-flex gap-2">
                  <div>
                    <FontAwesomeIcon icon={i.icon} />
                  </div>
                  <div>
                    <strong>{i.title}</strong> - {i.text}
                  </div>
                </li>
              ))}
            </StyledUl>
          </div>
        </ContentRow>
      </div>
    </StyledSection2>
  );
}

export default Section2;
