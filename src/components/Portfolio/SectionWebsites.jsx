import imgWebsites1 from "../../assets/portfolio/websites/website1.jpg";
import imgWebsites2 from "../../assets/portfolio/websites/website2.jpg";
import imgWebsites3 from "../../assets/portfolio/websites/website3.png";
import imgWebApps1 from "../../assets/portfolio/web_apps/web_app1.jpg";
import imgContent1 from "../../assets/portfolio/content_creation/content1.png";
import imgContent2 from "../../assets/portfolio/content_creation/content2.png";
import imgContent3 from "../../assets/portfolio/content_creation/reel_thumbs_up.png";
import fotoAddaLogo from "../../assets/portfolio/websites/logos/foto_adda_logo.svg";
import CardFlip from "./CardFlip";
import styled from "styled-components";
import reelCerticorp from "../../assets/portfolio/content_creation/post4-reel.mp4";
import reelPoster from "../../assets/portfolio/content_creation/reel_poster.png";
import edionTransLogo from "../../assets/portfolio/logos/ediontrans_logo.svg";
import certicorpLogo from "../../assets/portfolio/logos/certicorp_logo_v4.svg";
import fixaziLogo from "../../assets/portfolio/logos/fixazi_logo2_nobg.png";
import senorExpertLogo from "../../assets/portfolio/logos/senorexpert_logo.svg";

const StyledSectionWebsites = styled.div`
  padding: 2.5rem 0 4rem;
`;

const StyledP = styled.p`
  margin-top: -12px;
`;

function SectionWebsites() {
  const websites = [
    // Edion Trans
    {
      // card
      name: "Edion Trans",
      card_img: imgWebsites1,
      front_text:
        "Website de prezentare pentru o companie regională de transport.",
      category: "Website-uri",
      categoryInner: "websites",
      back_text:
        "Un website modern de prezentare, care include hărți interactive de traseu, formulare de contact validate cu trimitere prin email, integrare Google Reviews și o secțiune FAQ completă.",
      // modal
      business_logo: edionTransLogo,
      business_description:
        "Edion Trans este o companie regională de transport care oferă servicii de transport intern și internațional pe rute prestabilite. Pe lângă transportul de pasageri, compania oferă și servicii de livrare internațională de colete.",
      project_challenges: [
        "Conținut și materiale digitale existente limitate",
        "Definirea celor mai relevante funcționalități pentru utilizatori și pentru business",
        "Crearea unui design curat și profesionist care să prezinte clar serviciile și traseele",
      ],
      project_solution:
        "Am urmat un proces structurat, pas cu pas, pentru a construi website-ul de la zero. Mai întâi, am colectat și organizat toate informațiile esențiale de la Edion Trans, inclusiv detalii despre companie, date de contact, fluxuri de servicii, materiale vizuale și informații din Google Business Profile. Pe baza acestora, am implementat funcționalități-cheie precum hărți interactive de traseu și formulare de contact validate, cu livrarea datelor prin email. În final, am realizat o interfață modernă și intuitivă, care prezintă conținutul într-un mod clar și coerent.",
      project_results: {
        project_results_intro:
          "Rezultatul este un website rapid, responsive și ușor de utilizat, care îmbunătățește semnificativ prezența online a companiei Edion Trans și susține activitatea zilnică a acesteia:",
        project_results_list: [
          "Permite vizitatorilor să trimită solicitări prin formulare validate, cu datele colectate livrate direct prin email",
          "Prezintă vizual traseele de transport prin hărți interactive cu marcatori de locație",
          "Permite clienților să lase recenzii Google direct de pe website",
          "Oferă acces rapid la datele de contact și informațiile esențiale printr-o pagină de contact dedicată și o secțiune FAQ bine structurată",
        ],
      },
      project_key_points: [
        "Prima impresie contează. Un website clar și profesionist construiește încredere și credibilitate, ajutând potențialii clienți să aleagă cu încredere Edion Trans.",
        "Abordare orientată pe funcționalitate. Fiecare proiect începe prin identificarea nevoilor reale ale businessului, înainte de deciziile de design și conținut, pentru a livra soluții practice și eficiente.",
        "Bază tehnică solidă. Website-ul este construit pentru a putea fi extins cu ușurință, susținând nevoi viitoare precum pagini de destinație pentru Google Ads, urmărirea conversiilor și funcționalități suplimentare.",
      ],
      live_url: "https://www.ediontrans.ro/",
    },
    // Studio Foto Adda
    {
      // card
      name: "Studio Foto Adda",
      card_img: imgWebsites2,
      front_text: "Website de prezentare pentru un studio foto local.",
      category: "Website-uri",
      categoryInner: "websites",
      back_text:
        "Un website de prezentare optimizat pentru performanță, care include galerii foto cu încărcare progresivă (lazy-loading), o prezentare clară a serviciilor și un formular de contact validat, cu trimiterea solicitărilor direct prin email.",
      // modal
      business_logo: fotoAddaLogo,
      business_description:
        "Studio Foto Adda este un studio foto local care oferă servicii de fotografie atât în studio, cât și la locație, pentru evenimente, portrete și ocazii speciale.",
      project_challenges: [
        "Lipsa unui conținut structurat pentru prezentarea serviciilor și a portofoliului",
        "Optimizarea paginilor cu multe imagini fără a compromite performanța",
        "Implementarea unei strategii eficiente de încărcare progresivă (lazy-loading) pentru galerii foto mari",
        "Alegerea unui design curat și elegant care să pună în valoare conținutul vizual",
      ],
      project_solution:
        "Am abordat proiectul având ca priorități performanța și claritatea vizuală. În primul rând, am implementat încărcarea progresivă a imaginilor folosind Intersection Observer API, pentru a asigura timpi rapizi de încărcare inițială. Apoi, am structurat și creat conținutul website-ului pentru a prezenta clar serviciile și lucrările fotografice. În final, am realizat o interfață curată și minimalistă, care permite imaginilor să rămână elementul principal.",
      project_results: {
        project_results_intro:
          "Rezultatul este un website modern, rapid și optimizat pentru mobil, care consolidează prezența online a Studio Foto Adda și le pune în valoare munca: ",
        project_results_list: [
          "Galerii foto performante, cu imagini încărcate progresiv",
          "Prezentare clară a serviciilor și a portofoliului fotografic",
          "Acces facil la informațiile de contact și la formularele de solicitare",
          "Experiență de utilizare îmbunătățită pe desktop și dispozitive mobile",
        ],
      },
      project_key_points: [
        "Povestea vizuală contează. Pentru afacerile creative, website-ul trebuie să pună în valoare lucrările, păstrând în același timp performanța și responsivitatea.",
        "Abordare orientată pe performanță. Optimizarea încărcării imaginilor îmbunătățește semnificativ experiența utilizatorilor și calitatea percepută.",
        "Design atemporal. Un layout simplu și elegant menține focusul pe conținut și asigură relevanță pe termen lung.",
      ],
      live_url: "https://www.studiofotoaddagl.ro/",
    },
    // FixAzi
    {
      // card
      name: "FixAzi",
      card_img: imgWebsites3,
      front_text:
        "Website de prezentare pentru un service local de reparații dispozitive.",
      category: "Website-uri",
      categoryInner: "websites",
      back_text:
        "Un website de prezentare cu prețuri pentru servicii care pot fi modificate de către administrator. Facilitează accesul la datele de contact ale firmei și oferă vizitatorilor posibilitatea completării unui formular de reparații.",
      // modal
      business_logo: fixaziLogo,
      business_description:
        "FixAzi este un service local de reparații dispozitive, specializat în smartphone-uri, tablete și laptopuri. Clienții aduc dispozitivele la locația service-ului pentru diagnosticare și reparații, ceea ce face ca comunicarea rapidă și transparența prețurilor să fie esențiale pentru acest business.",
      project_challenges: [
        "Lipsa unui conținut digital structurat pentru prezentarea serviciilor și a tarifelor",
        "Identificarea unor funcționalități relevante, dincolo de un simplu website de prezentare",
        "Permiterea administratorilor să gestioneze dispozitivele suportate și prețurile fără implicarea unui programator",
      ],
      project_solution:
        "Am creat un website de prezentare care să expună serviciile oferite și să faciliteze accesul vizitatorilor la datele de contact ale firmei. De asemenea, am implementat funcționalitatea completării unui formular de reparație pentru vizitatori care culege datele înscrise în formular și le trimite automat pe email administratorului.",
      project_results: {
        project_results_intro:
          "Website-ul a rezolvat problema de vizibilitate online pentru firmă și a oferit vizitatorilor acestuia posibilitatea de a completa un formular pentru a primi un preț aproximativ pentru reparațiile de care au nevoie.",
        project_results_list: [
          "Prezentare clară a serviciilor, tarifelor și informațiilor de contact",
          "Formular de reparații integrat — clienții pot trimite detaliile reparației de care au nevoie înainte de a se deplasa la service",
          "Expunerea locației service-ului pentru creșterea vizitelor clienților",
        ],
      },
      project_key_points: [
        "Prezența online e importantă. Un website profesional construiește încredere, făcând ca potențialii clienți să aleagă cu încredere serviciile FixAzi.",
        "Abordare orientată pe funcționalitate. Am început munca la website pornind de la implementarea formularului de contact și mai apoi continuând cu design-ul și conținutul de text și imagini.",
        "Bază tehnică solidă. Website-ul este construit pentru a putea fi extins cu ușurință, include o pagină de aterizare care poate fi folosită în campaniile Google Ads și poate susține și alte nevoi suplimentare în funcție de cerințele viitoare.",
      ],
      live_url: "https://www.fixazi.com/",
    },
  ];

  const webApps = [
    // Senorexpert
    {
      // card
      name: "Senorexpert",
      card_img: imgWebApps1,
      front_text:
        "Aplicație web personalizată pentru o firmă locală de contabilitate.",
      category: "Aplicații Web",
      categoryInner: "web-apps",
      back_text:
        "O aplicație web securizată, bazată pe bază de date, care include un portal pentru clienți, sistem de încărcare documente și un dashboard de administrare pentru gestionarea utilizatorilor, conținutului și fluxurilor contabile.",
      back_button: "Detalii complete despre proiect",
      // modal
      business_logo: senorExpertLogo,
      business_description:
        "Senorexpert este o firmă locală de contabilitate din Galați care oferă servicii financiare și contabile complete pentru întreprinderi mici și mijlocii. Cu peste 20 de ani de experiență profesională, firma oferă contabilitate generală, raportare fiscală și conformitate, servicii de salarizare și HR, consultanță financiară și suport pentru înființarea de firme.",
      project_challenges: [
        "Lipsa unui conținut digital structurat pentru prezentarea clară a serviciilor și tarifelor",
        "Identificarea funcționalităților care aduc valoare operațională reală, nu doar prezentare",
        "Înlocuirea schimbului manual de documente cu un flux digital securizat",
        "Implementarea unui sistem de autentificare sigur pentru clienți și administratori",
        "Construirea unui dashboard de administrare cu acces bazat pe roluri",
        "Permiterea administratorilor să gestioneze anumite părți din conținutul website-ului",
      ],
      project_solution:
        "Am proiectat și dezvoltat o aplicație web personalizată care combină un website de prezentare profesional cu un portal securizat pentru clienți. Proiectul a început cu implementarea formularelor validate și a livrării prin email, urmată de dezvoltarea unui sistem bazat pe bază de date pentru gestionarea conținutului dinamic, precum servicii și tarife. Ulterior, am creat un dashboard de administrare cu acces bazat pe roluri, care permite administratorilor să gestioneze utilizatorii, documentele și conținutul website-ului. În final, am implementat interfața destinată clienților, asigurând o experiență modernă, intuitivă și optimizată pentru dispozitive mobile.",
      project_results: {
        project_results_intro:
          "Aplicația finală a eficientizat fluxurile interne ale Senorexpert și a îmbunătățit semnificativ interacțiunea cu clienții: ",
        project_results_list: [
          "Eliminarea necesității livrării fizice a documentelor",
          "Centralizarea documentelor contabile într-o platformă digitală securizată",
          "Creșterea eficienței comunicării dintre client și contabil",
          "Oferirea controlului complet administratorilor asupra utilizatorilor și conținutului",
        ],
      },
      project_key_points: [
        "Optimizarea proceselor de business. Aplicațiile web pot reduce semnificativ munca manuală și fricțiunile operaționale.",
        "Dezvoltare orientată pe funcționalitate. Fiecare funcționalitate a fost construită pentru a rezolva o problemă reală, de zi cu zi.",
        "Arhitectură scalabilă. Aplicația este concepută pentru a evolua odată cu nevoile viitoare ale afacerii.",
      ],
      live_url: "http://senorexpert.ro/",
    },
  ];

  const content = [
    // FixAzi poster
    {
      // card
      name: "FixAzi",
      card_img: imgContent1,
      card_title: "Poster promoțional pentru service-ul de reparații FixAzi",
      front_text:
        "Poster promoțional pentru un service local de reparații dispozitive.",
      category: "Reclame",
      categoryInner: "ads",
      back_text:
        "Un poster promoțional atractiv din punct de vedere vizual pentru FixAzi, conceput pentru a comunica clar ofertele serviciului și pentru a încuraja interacțiunea clienților.",
      // modal
      business_logo: fixaziLogo,
      business_description:
        "FixAzi este un service local de reparații specializat în smartphone-uri, tablete și laptopuri. Clienții aduc dispozitivele la locația service-ului pentru diagnosticare și reparații, iar o comunicare clară și materiale de promovare atractive sunt esențiale pentru atragerea de noi clienți.",
      project_challenges: [
        "Realizarea unui poster care să comunice clar oferta serviciului",
        "Alegerea culorilor și a tipografiei în acord cu identitatea vizuală a brandului",
        "Selectarea unor imagini stock de calitate, care să susțină vizual mesajul",
      ],
      project_solution:
        "Am abordat designul posterului prin stabilirea inițială a poziționării elementelor-cheie — imagini, titlu și detalii ale ofertei. Obiectivul a fost crearea unui poster atractiv vizual, care să transmită eficient oferta serviciului și să capteze atenția potențialilor clienți.",
      project_results: {
        project_results_intro:
          "Posterul final prezintă oferta serviciului într-un mod clar și profesionist, consolidând imaginea de brand a FixAzi și comunicarea cu publicul:",
        project_results_list: [
          "Prezentare clară și concisă a serviciilor și ofertelor",
          "Informații de contact ușor de accesat, inclusiv număr de telefon și website",
          "Integrarea logo-ului și a sloganului companiei pentru creșterea recunoașterii brandului",
        ],
      },
      project_key_points: [
        "Prima impresie contează. Materialele promoționale realizate profesional transmit încredere și credibilitate potențialilor clienți.",
        "Design orientat spre scop. Fiecare element al posterului este gândit pentru a evidenția ofertele și serviciile principale.",
        "Vizualuri atractive cresc implicarea. Posterele bine structurate și atrăgătoare sporesc șansele de interacțiune din partea clienților.",
      ],
    },
    // CERTICORP poster
    {
      // card
      name: "Certicorp",
      card_img: imgContent2,
      card_title: "Poster promoțional pentru CERTICORP",
      front_text:
        "Poster promoțional pentru o companie de audit și management energetic.",
      category: "Reclame",
      categoryInner: "ads",
      back_text:
        "Un poster profesionist și accesibil pentru CERTICORP, conceput pentru a prezenta clar serviciile de audit energetic și certificare, educând în același timp potențialii clienți.",
      // modal
      business_logo: certicorpLogo,
      business_description:
        "CERTICORP este o companie specializată în audit și management energetic, care oferă certificate energetice pentru persoane fizice, companii și instituții. Serviciile sale sunt esențiale în situații precum vânzarea sau renovarea imobilelor, obținerea unui credit ipotecar sau respectarea cerințelor legale.",
      project_challenges: [
        "Realizarea unui poster care să comunice clar serviciile și scopul CERTICORP",
        "Alegerea culorilor și a tipografiei care să reflecte identitatea brandului și să atragă potențialii clienți",
        "Utilizarea unor imagini de înaltă calitate care să susțină vizual mesajul și să încurajeze acțiunea",
      ],
      project_solution:
        "Am abordat designul ținând cont de specificul serviciilor CERTICORP — mai puțin cunoscute publicului larg. Prioritatea a fost claritatea mesajului: ce oferă compania, când ai nevoie de aceste servicii și cum poți lua legătura. Elementele vizuale au fost alese pentru a sugera context și a face conținutul imediat de înțeles pentru un public neexperimentat în audit energetic.",
      project_results: {
        project_results_intro:
          "Posterul final comunică oferta CERTICORP într-un mod clar și eficient, ajutând potențialii clienți să înțeleagă când este necesar să apeleze la serviciile companiei: ",
        project_results_list: [
          "Prezentare clară și concisă a serviciilor și a ofertei comerciale",
          "Informații de contact ușor de accesat, inclusiv număr de telefon și website",
          "Integrarea logo-ului și a sloganului companiei pentru creșterea recunoașterii brandului",
        ],
      },
      project_key_points: [
        "Conținut concis și relevant. Textul este informativ, ușor de parcurs și evidențiază beneficiile pentru potențialii clienți.",
        "Design sugestiv din punct de vedere vizual. Fiecare imagine a fost aleasă pentru a sugera o acțiune sau un context, făcând posterul mai atractiv.",
        "Profesional, dar accesibil. Designul poziționează CERTICORP ca o companie de încredere și prietenoasă.",
      ],
    },
    // CERTICORP reel
    {
      // card
      name: "Certicorp",
      card_img: imgContent3,
      card_title: "Video promoțional scurt pentru CERTICORP",
      front_text:
        "Video promoțional scurt pentru CERTICORP, care evidențiază serviciile și educă potențialii clienți.",
      category: "Reel",
      categoryInner: "Reel",
      back_text:
        "Un video promoțional profesionist și captivant de 19 secunde pentru CERTICORP, conceput pentru a educa publicul și a crește notorietatea brandului.",
      // modal
      business_logo: certicorpLogo,
      business_description:
        "CERTICORP este o companie specializată în audit și management energetic, care oferă certificate energetice pentru persoane fizice, companii și instituții. Serviciile sale sunt esențiale în situații precum vânzarea sau renovarea imobilelor, obținerea unui credit ipotecar sau respectarea cerințelor legale.",
      project_challenges: [
        "Crearea unui video scurt care să educe publicul și, în același timp, să promoveze serviciile CERTICORP",
        "Selectarea unor materiale video stock gratuite, de înaltă calitate, care să transmită eficient mesajul dorit",
        "Conceperea unor subtitrări concise și atractive, care să completeze voice-over-ul și să întărească ideile principale",
      ],
      project_solution:
        "Am început prin dezvoltarea unui scenariu concis, care să atingă atât obiectivele educaționale, cât și cele promoționale. Ulterior, am selectat cu atenție materialele video și am creat subtitrări care să transmită clar mesajul într-un timp scurt, menținând un ton profesionist și accesibil.",
      project_results: {
        project_results_intro:
          "Reel-ul final reușește să educe publicul și să prezinte serviciile CERTICORP într-un video de 19 secunde cu voice-over și subtitrări: ",
        project_results_list: [
          "Explicarea clară a situațiilor în care clienții pot avea nevoie de serviciile CERTICORP",
          "Afișarea vizibilă a informațiilor de contact pentru o urmărire ușoară",
          "Integrarea logo-ului companiei pentru consolidarea notorietății brandului",
        ],
      },
      project_key_points: [
        "Povestire concisă. Reel-ul comunică rapid diferitele scenarii în care serviciile CERTICORP sunt relevante.",
        "Design vizual coerent. Fiecare secvență video stock este aliniată cu mesajul prezentat, creând o experiență fluentă și captivantă.",
        "Stil profesionist, dar accesibil. Video-ul transmite credibilitate, rămânând în același timp prietenos și ușor de urmărit, încurajând interacțiunea.",
      ],
      video: reelCerticorp,
    },
  ];

  const renderCards = (projects) => (
    <div className="row g-4">
      {projects.map((project, index) => (
        <CardFlip
          image={project.image}
          title={project.name}
          shortDescription={project.front_text}
          longDescription={project.back_text}
          category={project.category}
          project={project}
        />
      ))}
    </div>
  );

  return (
    <StyledSectionWebsites className="container">
      {/* Websites */}
      <section className="mb-4">
        <h2>Website-uri</h2>
        <StyledP className="fs-5">
          Proiecte livrate — fiecare cu provocări diferite și soluții construite
          de la zero.
        </StyledP>
        <div className="container">{renderCards(websites)}</div>
      </section>
      {/* Web Apps */}
      <section className="mb-4">
        <h2>Aplicații Web</h2>
        <StyledP className="fs-5">
          Instrumente interne și aplicații web care eficientizează procesele de
          business și cresc productivitatea.
        </StyledP>
        <div className="container">{renderCards(webApps)}</div>
      </section>
      {/* Content Creation */}
      <section className="mb-4">
        <h2>Creare de Conținut</h2>
        <StyledP className="fs-5">
          Materiale publicitare, grafică și proiecte media create pentru a
          atrage atenția publicului tău.
        </StyledP>
        <div className="container">{renderCards(content)}</div>
      </section>
    </StyledSectionWebsites>
  );
}

export default SectionWebsites;
