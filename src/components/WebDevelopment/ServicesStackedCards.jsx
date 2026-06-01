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
import {
  SectionLabel,
  SectionHeading,
  SectionSubtitle,
} from "../../styles/shared";

const Section = styled.section`
  padding: var(--section-padding);
  border-top: 1px solid var(--color-border);
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
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
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const Card = styled.li`
  position: sticky;
  top: ${({ $index }) => `${80 + $index * 12}px`};
  border-radius: var(--radius-card);
  overflow: hidden;
  margin-bottom: 1.5rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(10, 15, 20, 0.97) 0%,
      rgba(10, 15, 20, 0.75) 50%,
      rgba(27, 60, 83, 0.4) 100%
    );
    z-index: 1;
  }

  /* Text on top */
  * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    top: ${({ $index }) => `${72 + $index * 8}px`};
    min-height: 260px;
  }
`;

const CardInner = styled.div`
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 576px) {
    padding: 1.5rem;
    gap: 0.75rem;
  }
`;

const StepBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: var(--color-accent);
  color: var(--color-bg);
  font-family: var(--font-family);
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
`;

const CardTitle = styled.h3`
  font-family: var(--font-family);
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const CardObjective = styled.p`
  font-family: var(--font-family);
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.65;
  margin: 0;
  max-width: 680px;
`;

const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    display: none;
  }
`;

const DetailItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-family: var(--font-family);
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  line-height: 1.55;
`;

const DetailIcon = styled.div`
  color: var(--color-accent);
  font-size: 0.8rem;
  margin-top: 2px;
  flex-shrink: 0;
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
  gap: 0.5rem;
`;

export default function ServicesStackedCards() {
  const icons = [faRocket, faBoxOpen, faToolbox, faUser, faClock, faStar];

  const steps = [
    {
      title: "Descoperire",
      objective:
        "Înțelegem afacerea ta, obiectivele, publicul și concurența — baza oricărui proiect reușit.",
      list: [
        {
          itemTitle: "Început",
          itemText:
            "Purtăm o discuție structurată cu tine — întrebări despre afacere, clienți țintă, concurență și ce te diferențiază pe piață — pentru a construi o imagine clară înainte de a scrie o singură linie de cod.",
        },
        {
          itemTitle: "Rezultate livrabile",
          itemText:
            "Brief clar de proiect, criterii de succes, document de strategie digitală.",
        },
        {
          itemTitle: "Instrumente și metode",
          itemText:
            "Întrebări structurate, cercetare a concurenței, analiză de date.",
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
            "Toate deciziile de design și dezvoltare pornesc aliniate obiectivelor tale — economisind timp și evitând corecții costisitoare.",
        },
      ],
      image: discoveryImg,
    },
    {
      title: "Design UX/UI",
      objective:
        "Definim structura și identitatea vizuală a proiectului — utilizabilitate și aliniere cu brandul tău.",
      list: [
        {
          itemTitle: "Început",
          itemText:
            "Creăm wireframe-uri, fluxuri de utilizatori și mockup-uri vizuale bazate pe faza de Descoperire.",
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
            "Vizualizezi produsul înainte de dezvoltare, reducând riscul modificărilor costisitoare",
        },
      ],
      image: uiUxImg,
    },
    {
      title: "Dezvoltare",
      objective:
        "Transformăm designurile într-un produs digital complet funcțional, responsive și performant.",
      list: [
        {
          itemTitle: "Început",
          itemText:
            "Transpunem designurile în cod curat și optimizat, integrând funcționalitățile, animațiile și instrumentele necesare.",
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
          itemText: "De obicei 3–6 săptămâni, în funcție de complexitate.",
        },
        {
          itemTitle: "Valoare",
          itemText:
            "O soluție modernă, scalabilă și performantă, construită conform celor mai bune practici.",
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
            "Testăm funcționalitatea, responsive-ul, accesibilitatea, viteza și SEO-ul de bază.",
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
          itemText: "O experiență fluidă și fiabilă pentru utilizatorii tăi.",
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
            "Implementăm produsul pe hosting, configurăm analytics și monitorizăm performanța în săptămânile inițiale.",
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
            "Lansezi cu încredere, cu un partener disponibil pentru îmbunătățiri și actualizări.",
        },
      ],
      image: launchImg,
    },
  ];

  return (
    <Section>
      <div className="container">
        <SectionHeader>
          <SectionLabel>Procesul nostru</SectionLabel>
          <SectionHeading>Cum dăm viață proiectului tău</SectionHeading>
          <SectionSubtitle>
            O abordare transparentă, pas cu pas, de la idee până la lansare.
          </SectionSubtitle>
        </SectionHeader>

        <CardsList>
          {steps.map((step, i) => (
            <Card key={step.title} $index={i} $bg={step.image}>
              <CardInner>
                <CardTitle>
                  <StepBadge>{i + 1}</StepBadge>
                  {step.title}
                </CardTitle>
                <CardObjective>{step.objective}</CardObjective>
                <DetailsList>
                  {step.list?.map((item, j) => (
                    <DetailItem key={item.itemTitle}>
                      <DetailIcon>
                        <FontAwesomeIcon icon={icons[j]} />
                      </DetailIcon>
                      <span>
                        <strong
                          style={{
                            color: "var(--color-text)",
                            fontWeight: 600,
                          }}
                        >
                          {item.itemTitle}
                        </strong>
                        {" — "}
                        {item.itemText}
                      </span>
                    </DetailItem>
                  ))}
                </DetailsList>
              </CardInner>
            </Card>
          ))}
        </CardsList>
      </div>
    </Section>
  );
}
