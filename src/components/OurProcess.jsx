import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import {
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  faBugSlash,
  faCode,
  faMagnifyingGlass,
  faRocket,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import bgImage from "../assets/our-process-bg.jpg";
import { useTranslation } from "react-i18next";

const TabWrapper = styled.div`
  background-image: url(${bgImage});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 9;
  margin-bottom: 4rem;
  border-radius: 2rem;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 2rem;
  }
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;

  @media (max-width: 576px) {
    padding: 1.5rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const TabList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.75;
  gap: 1rem;
  position: relative;
  z-index: 9;
  @media (max-width: 576px) {
    font-size: 12px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    font-size: 14px;
  }
`;

const TabButtonIcon = styled.div`
  flex: 1;
`;

const TabButtonText = styled.div`
  flex: 3;
  display: flex;
  flex-direction: flex-start;
`;

const TabButton = styled.button`
  border: none;
  border-radius: 1rem;
  padding: 1rem 0.3rem;
  background: ${({ active }) =>
    active
      ? "linear-gradient(to bottom, #456882 0%, #456882 60%, #456882 100%)"
      : "linear-gradient(to bottom, #eaeaea 0%, #d4d4d4 60%, #c4c4c4 100%)"};
  color: ${({ active }) => (active ? "#fff" : "#444")};
  display: flex;
  /* justify-content: center; */
`;

const TabPanel = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  gap: 2rem;
  padding: 0 2.5rem;
  position: relative;
  z-index: 9;
  color: #fff;

  @media (max-width: 1200px) {
    padding: 0;
    gap: 1rem;
  }
`;

const StyledP = styled.p`
  text-align: justify;

  @media (max-width: 576px) {
    font-size: 16px !important;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    font-size: 20px !important;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
`;

const TitleContainer = styled.div`
  position: relative;
  z-index: 9;
  color: #fff;
`;

const TabListTabPanel = styled.div`
  @media (max-width: 576px) {
    gap: 1rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    gap: 1rem;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    gap: 1.5rem;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    gap: 2rem;
  }
`;

const StyledH2 = styled.h2``;

const Subtitle = styled.p``;

const tabs = [
  {
    name: "Descoperire",
    content:
      "Începem prin a înțelege în profunzime afacerea ta — obiectivele, publicul țintă, concurența și ceea ce face brandul tău unic. Împreună definim ce înseamnă succesul pentru acest proiect și îl transformăm în cerințe clare. Rezultatul acestei etape este o strategie digitală bine definită, care ghidează fiecare decizie de design și dezvoltare.",
    icon: faMagnifyingGlass,
    icon_number: fa1,
    color: "#fff",
  },
  {
    name: "Design UI/UX",
    content:
      "Pe baza strategiei stabilite, realizăm structura și identitatea vizuală a website-ului sau aplicației tale. Aceasta include wireframe-uri, layout-uri, fluxuri de utilizare și alte elemente de design care reflectă brandul tău și sunt aliniate obiectivelor de business.",
    icon: faSitemap,
    icon_number: fa2,
    color: "#fff",
  },
  {
    name: "Dezvoltare",
    content:
      "Aducem designul la viață prin dezvoltarea unei soluții rapide, responsive și moderne, optimizate pentru toate dispozitivele. Fie că este vorba de un website de prezentare sau de o aplicație web completă, folosim tehnologii fiabile și integrăm toate funcționalitățile stabilite în cadrul proiectului.",
    icon: faCode,
    icon_number: fa3,
    color: "#fff",
  },
  {
    name: "Testare & Optimizare",
    content:
      "Înainte de lansare, testăm cu atenție fiecare aspect — funcționalitatea, performanța, accesibilitatea și compatibilitatea cu diferite browsere. Corectăm eventualele probleme, rafinăm interacțiunile și optimizăm experiența, astfel încât produsul să fie pregătit pentru utilizatori reali.",
    icon: faBugSlash,
    icon_number: fa4,
    color: "#fff",
  },
  {
    name: "Lansare și Suport",
    content:
      "După ce totul îndeplinește așteptările, lansăm produsul final și oferim suport post-lansare conform termenilor agreați. Te putem ajuta cu actualizări, optimizări, analiză de date și îmbunătățiri continue — asigurând creșterea constantă a prezenței tale digitale.",
    icon: faRocket,
    icon_number: fa5,
    color: "#fff",
  },
];

function OurProcess() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <TabWrapper className="container">
      <TabContainer className="container">
        <TitleContainer>
          <StyledH2>
            Procesul nostru – Cum construim prezența ta digitală
          </StyledH2>
          <Subtitle className="fs-5">
            O abordare clară, pas cu pas, care transformă ideile în soluții
            digitale fiabile.
          </Subtitle>
        </TitleContainer>
        <TabListTabPanel className="d-flex">
          <TabList>
            {tabs.map((tab, i) => (
              <TabButton
                key={i}
                active={activeIndex === i}
                onClick={() => setActiveIndex(i)}
              >
                <TabButtonIcon>
                  <FontAwesomeIcon icon={tab.icon_number} />
                </TabButtonIcon>
                <TabButtonText className="flex-3">{tab.name}</TabButtonText>
              </TabButton>
            ))}
          </TabList>
          <TabPanel>
            <StyledFontAwesomeIcon
              icon={tabs[activeIndex].icon}
              color={tabs[activeIndex].color}
            />
            <StyledP className="fs-4">{tabs[activeIndex].content}</StyledP>
          </TabPanel>
        </TabListTabPanel>
      </TabContainer>
    </TabWrapper>
  );
}

export default OurProcess;
