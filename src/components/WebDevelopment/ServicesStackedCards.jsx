import { useEffect } from "react";
import styled from "styled-components";
import discoveryImg from "../../assets/discovery.jpg";
import uiUxImg from "../../assets/ui_ux_design.jpg";
import developmentImg from "../../assets/development.jpg";
import testingImg from "../../assets/testing_optimization.jpg";
import launchImg from "../../assets/launch_support.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faBoxOpen,
  faToolbox,
  faUser,
  faClock,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4rem 0;

  @media (max-width: 1200px) {
    align-items: center;
    margin-bottom: 1.5rem;
    padding-top: 0;
  }
`;

const SectionTitle = styled.h2`
  text-align: left;
  padding: 0;
  @media (max-width: 576px) {
    text-align: center;
    padding: 0 1rem;
  }
`;

const Subtitle = styled.p``;

const CardsList = styled.ul`
  list-style: none;
  width: 75%;
  margin: 0;
  margin-bottom: 200px;
  padding: 0;
`;

const Card = styled.li`
  position: sticky;
  top: 6rem;
  transform-origin: center top;
  width: 100%;

  border-radius: 1.5rem;
  padding: 2rem;
  margin: 0 0 4rem 0;
  overflow: hidden;
  color: white;

  /* Background image */
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /* Dark overlay */

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
    z-index: 1;
  }

  /* Text on top */
  * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 576px) {
    height: 200px;
    margin: 0;
    padding: 1rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    height: 300px;
    margin: 0;
    padding: 1.25rem;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    height: 325px;
    margin: 0;
    padding: 1.5rem;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    height: 450px;
    margin: 0;
    padding: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;

  @media (max-width: 576px) {
    font-size: 1.25rem;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;

  @media (max-width: 576px) {
    font-size: 1rem !important;
  }
`;

const StyledLiInner = styled.div`
  @media (max-width: 576px) {
    font-size: 0.5rem !important;
  }
`;
const StyledUl = styled.ul`
  list-style: none;

  @media (max-width: 992px) {
    display: none;
  }
`;

const StyledLi = styled.li`
  display: flex;
  /* align-items: center; */
  gap: 0.5rem;
`;

export default function ServicesStackedCards() {
  const icons = [faRocket, faBoxOpen, faToolbox, faUser, faClock, faStar];
  const { t } = useTranslation();
  const steps = [
    {
      title: "Descoperire",
      objective:
        "Înțelegerea afacerii tale, a obiectivelor, a publicului și a concurenței pentru a crea o bază solidă pentru proiectul tău.",
      list: [
        {
          itemTitle: "Început",
          itemText:
            "Începem prin a învăța totul despre afacerea ta – obiective, clienți țintă, propuneri unice de valoare și concurență.",
        },
        {
          itemTitle: "Rezultate livrabile",
          itemText:
            "Brief clar de proiect, criterii de succes, document de strategie digitală.",
        },
        {
          itemTitle: "Instrumente și metode",
          itemText:
            "Întrebări, workshop-uri de strategie, cercetare a concurenței și analiza datelor.",
        },
        {
          itemTitle: "Rolul clientului",
          itemText:
            "Furnizarea de informații despre afacere, răspunsuri la întrebări, materiale de branding sau detalii despre campanii anterioare.",
        },
        {
          itemTitle: "Estimarea duratei",
          itemText:
            "De obicei 1–2 săptămâni, în funcție de complexitatea proiectului.",
        },
        {
          itemTitle: "Valoare",
          itemText:
            "Asigură că toate deciziile de design și dezvoltare sunt aliniate obiectivelor tale, economisind timp și prevenind eventuale nealinieri ulterioare.",
        },
      ],
      image: discoveryImg,
    },
    {
      title: "Design UX/UI",
      objective:
        "Definirea structurii și identității vizuale a website-ului sau aplicației pentru a asigura utilizabilitatea și alinierea cu brandul.",
      list: [
        {
          itemTitle: "Început",
          itemText:
            "Pe baza fazei de Descoperire, creăm wireframe-uri, fluxuri de utilizatori și mockup-uri vizuale care reflectă brandul tău și nevoile publicului țintă.",
        },
        {
          itemTitle: "Rezultate livrabile",
          itemText:
            "Wireframe-uri, prototipuri interactive, ghid de stil, resurse de design.",
        },
        {
          itemTitle: "Instrumente și metode",
          itemText: "Figma, Adobe XD și workshop-uri de design.",
        },
        {
          itemTitle: "Rolul clientului",
          itemText:
            "Revizuirea și aprobarea wireframe-urilor și mockup-urilor, oferind feedback privind preferințele vizuale.",
        },
        {
          itemTitle: "Estimarea duratei",
          itemText:
            "2–3 săptămâni pentru un website standard; mai mult pentru aplicații web complexe.",
        },
        {
          itemTitle: "Valoare",
          itemText:
            "Ajută la vizualizarea produsului timpuriu, reduce riscul modificărilor costisitoare în dezvoltare și asigură utilizabilitatea și accesibilitatea.",
        },
      ],
      image: uiUxImg,
    },
    {
      title: "Dezvoltare",
      objective:
        "Transformarea designurilor într-un produs digital complet funcțional, responsive și performant.",
      list: [
        {
          itemTitle: "Început",
          itemText:
            "Transpunem designurile în cod curat și optimizat, integrând funcționalitățile necesare, animațiile și instrumentele terțe.",
        },
        {
          itemTitle: "Rezultate livrabile",
          itemText:
            "Website sau aplicație web complet funcțională, inclusiv configurarea CMS dacă este cazul și încărcarea conținutului inițial.",
        },
        {
          itemTitle: "Instrumente și metode",
          itemText:
            "HTML, CSS, JavaScript (React, Vue etc.), Bootstrap, API-uri, controlul versiunilor (Git).",
        },
        {
          itemTitle: "Rolul clientului",
          itemText:
            "Furnizarea conținutului final și aprobarea etapelor majore de dezvoltare.",
        },
        {
          itemTitle: "Estimarea duratei",
          itemText:
            "De obicei 3–6 săptămâni, în funcție de complexitate. Oferim actualizări regulate de progres.",
        },
        {
          itemTitle: "Valoare",
          itemText:
            "Primești o soluție modernă, scalabilă și performantă construită conform celor mai bune practici.",
        },
      ],
      image: developmentImg,
    },
    {
      title: "Testare & Optimizare",
      objective:
        "Asigurarea calității, performanței și compatibilității pe toate dispozitivele și browserele.",
      list: [
        {
          itemTitle: "Început",
          itemText:
            "Realizăm teste extinse, inclusiv teste funcționale, responsive, accesibilitate, optimizare viteză și verificări SEO.",
        },
        {
          itemTitle: "Rezultate livrabile",
          itemText:
            "Rapoarte de testare, corectarea erorilor, recomandări de optimizare.",
        },
        {
          itemTitle: "Instrumente și metode",
          itemText:
            "Testare în browsere (Chrome, Safari, Firefox), audituri Lighthouse, teste QA manuale și automate.",
        },
        {
          itemTitle: "Rolul clientului",
          itemText:
            "Participarea la User Acceptance Testing (UAT) și oferirea de feedback asupra funcționalității finale.",
        },
        {
          itemTitle: "Estimarea duratei",
          itemText: "1–2 săptămâni; poate varia pentru aplicații complexe.",
        },
        {
          itemTitle: "Valoare",
          itemText:
            "Garantează o experiență fluidă, fiabilă și prietenoasă pentru utilizatori.",
        },
      ],
      image: testingImg,
    },
    {
      title: "Lansare & Suport",
      objective:
        "Implementarea produsului live și oferirea de suport continuu pentru succesul constant.",
      list: [
        {
          itemTitle: "Început",
          itemText:
            "Implementăm produsul pe mediul tău de hosting, configurăm analytics și monitorizăm performanța în săptămânile inițiale.",
        },
        {
          itemTitle: "Rezultate livrabile",
          itemText:
            "Website/aplicație live, instruire CMS (dacă este cazul), documentație, perioada de suport post-lansare.",
        },
        {
          itemTitle: "Instrumente și metode",
          itemText:
            "Configurare hosting, instrumente de monitorizare, integrare analytics, acorduri opționale de mentenanță.",
        },
        {
          itemTitle: "Rolul clientului",
          itemText:
            "Aprobarea lansării finale și comunicarea oricăror actualizări necesare post-lansare.",
        },
        {
          itemTitle: "Estimarea duratei",
          itemText:
            "Lansarea are loc de obicei 1–2 zile după testare; perioada de suport conform acordului.",
        },
        {
          itemTitle: "Valoare",
          itemText:
            "Poți lansa cu încredere, știind că totul funcționează și că ai un partener pentru îmbunătățiri și actualizări.",
        },
      ],
      image: launchImg,
    },
  ];

  useEffect(() => {
    const container = document.querySelector(".js-stack-cards");
    if (!container) return;

    const items = container.getElementsByClassName("js-stack-cards__item");
    let marginY = 64;
    const cardHeight = items[0].offsetHeight;
    const windowHeight = window.innerHeight;
    let scrolling = false;

    function animate() {
      const top = container.getBoundingClientRect().top;
      for (let i = 0; i < items.length; i++) {
        const scrollOffset = cardHeight + marginY * i + marginY / 2 - top;
        if (scrollOffset > 0) {
          const scaling =
            (this.cardHeight - scrolling * 0.05) / this.cardHeight;
          items[i].style.transform = `translateY(${
            marginY * i
          }px) scale(${scaling})`;
        } else {
          items[i].style.transform = `translateY(${marginY * i}px)`;
        }
      }
      scrolling = false;
    }

    function scrollHandler() {
      if (scrolling) return;
      scrolling = true;
      window.requestAnimationFrame(animate);
    }

    // initial position
    for (let i = 0; i < items.length; i++) {
      items[i].style.transform = `translateY(${marginY * i}px)`;
    }

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Section className="container">
      <SectionTitle>
        Procesul nostru – Cum dăm viață proiectului tău
      </SectionTitle>
      <Subtitle className="fs-5">
        O abordare transparentă, pas cu pas, de la idee până la lansare.
      </Subtitle>
      <CardsList className="js-stack-cards">
        {steps.map((step, i) => (
          <Card key={i} bg={step.image} className="js-stack-cards__item">
            <Title>{step.title}</Title>
            <Text className="fs-5">
              <strong>Obiectiv</strong>: {step.objective}
            </Text>
            <StyledUl>
              {step.list?.map((item, i) => (
                <StyledLi>
                  <div>
                    <FontAwesomeIcon icon={icons[i]} />
                  </div>
                  <StyledLiInner className="fs-5">
                    <strong className="fs-5">{item.itemTitle}</strong>:{" "}
                    {item.itemText}
                  </StyledLiInner>
                </StyledLi>
              ))}
            </StyledUl>
          </Card>
        ))}
      </CardsList>
    </Section>
  );
}
