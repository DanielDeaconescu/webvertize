import {
  faBorderAll,
  faBullhorn,
  faFilm,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SectionLabel, SectionHeading } from "../../styles/shared";

const StyledSection1 = styled.section`
  padding: var(--section-padding);
  border-top: 1px solid var(--color-border);
`;

const ItemsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  gap: 1.5rem;
  padding: 1.75rem;
  background-color: var(--color-surface);
  border: 1px solid var(---color-border);
  border-radius: var(--radius-card);
  transition: border-color var(--transition);

  &:hover {
    border-color: var(--color-accent);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ItemTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text);
`;

const ItemIcon = styled.div`
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

const ItemTitle = styled.h3`
  font-family: var(--font-family);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
  letter-spacing: -0.01em;
`;

const ItemDescription = styled.p`
  font-family: var(--font-family);
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.65;
  margin: 0;
`;

const InnerList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const InnerListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-family: var(--font-family);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.55;
`;

const CheckIcon = styled.div`
  color: var(--color-accent);
  font-size: 0.8rem;
  margin-top: 2px;
  flex-shrink: 0;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
`;

const Title = styled.h2``;

const Subtitle = styled.div`
  /* margin-top: -14px; */
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 1.2rem;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const InnerUl = styled.ul`
  list-style-type: none;
  padding-left: 3rem;
`;

const InnerUlItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 0.8rem;
  gap: 0.5rem;
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.25rem;
  background-color: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-btn);
  color: var(--color-text-secondary);
  font-family: var(--font-family);
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  align-self: flex-start;
  transition:
    border-color var(--transition),
    color var(--transition);

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }
`;

function Section1() {
  const items = [
    {
      icon: faBorderAll,
      title: "Grafice Promoționale cu Imagine Împărțită",
      text: "Vizualuri structurate pe mai multe secțiuni, concepute pentru a transmite mai multe idei într-un singur cadru coerent.",
      list: [
        "Evidențierea mai multor servicii într-un singur vizual",
        "Prezentarea rezultatelor de tip «înainte și după»",
        "Promovarea ofertelor sau a campaniilor sezoniere pentru produse și servicii",
        "Creșterea clarității, încrederii și notorietății brandului tău",
      ],
    },
    {
      icon: faFilm,
      title: "Reels Promoționale (Videoclipuri Scurte)",
      text: "Reels sunt în prezent unul dintre cele mai eficiente formate de conținut pentru a ajunge la audiențe noi. Videoclipurile scurte optimizate pentru Facebook și Instagram includ:",
      list: [
        "Explicații concise ale serviciilor",
        "Mesaje axate pe beneficii",
        "Integrarea identității vizuale (logo, culori, slogan)",
        "Încheiere cu un apel clar la acțiune",
      ],
    },
    {
      icon: faBullhorn,
      title: "Vizualuri Optimizate pentru Google Ads",
      text: "Materiale vizuale curate, de înaltă calitate, realizate conform formatelor recomandate de Google pentru a îmbunătăți vizibilitatea și rata de click.",
      list: [
        "Titluri și descrieri optimizate pentru click",
        "Imagini și bannere în formatele recomandate de Google",
        "Clipuri video scurte adaptate pentru campaniile Performance Max",
      ],
    },
  ];

  return (
    <StyledSection1>
      <div className="container">
        <SectionHeader>
          <SectionLabel>Creare de conținut</SectionLabel>
          <SectionHeading>Creare de Conținut pentru Reclame</SectionHeading>
        </SectionHeader>
        <ItemsList>
          {items.map((item) => (
            <Item key={item.title}>
              <ItemContent>
                <ItemTitleRow>
                  <ItemIcon>
                    <FontAwesomeIcon icon={item.icon} />
                  </ItemIcon>
                  <ItemTitle>{item.title}</ItemTitle>
                </ItemTitleRow>
                <ItemDescription>{item.text}</ItemDescription>
                <InnerList>
                  {item.list.map((n) => (
                    <InnerListItem key={n}>
                      <CheckIcon>
                        <FontAwesomeIcon icon={faSquareCheck} />
                      </CheckIcon>
                      {n}
                    </InnerListItem>
                  ))}
                </InnerList>
              </ItemContent>
              {item.title !== "Vizualuri Optimizate pentru Google Ads" && (
                <StyledLink to="/portfolio">Vezi Proiecte</StyledLink>
              )}
            </Item>
          ))}
        </ItemsList>
      </div>
    </StyledSection1>
  );
}

export default Section1;
