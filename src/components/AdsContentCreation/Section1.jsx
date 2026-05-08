import {
  faBorderAll,
  faBullhorn,
  faFilm,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledSection1 = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const Title = styled.h2``;

const Subtitle = styled.div`
  /* margin-top: -14px; */
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 1.2rem;
`;

const InnerTitle = styled.h4``;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Item = styled.li`
  border: 1px solid #f0f0f0;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemTitle = styled.div`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ItemDescription = styled.div`
  padding-left: 1rem;
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
  text-decoration: none;
  background-color: #182f3f;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: #fff;
  transition: all 0.3s ease;
  border: 2px solid #182f3f;
  white-space: nowrap;

  &:hover {
    background-color: #203d52;
  }
`;

function Section1() {
  const items = [
    {
      icon: faBorderAll,
      title: "Grafice Promoționale cu Imagine Împărțită",
      text: "Graficele promoționale cu imagine împărțită sunt vizualuri structurate pe mai multe secțiuni, concepute pentru a transmite mai multe idei într-un singur cadru coerent.",
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
      list: ["Asset-uri de Text", "Asset-uri Vizuale", "Asset-uri Video"],
    },
  ];

  return (
    <StyledSection1 className="container">
      <Title>Creare de Conținut pentru Reclame</Title>
      <Subtitle className="fs-5 mb-4">
        Vizualuri de Înaltă Calitate, Concepute pentru Performanță
      </Subtitle>
      <InnerTitle>Conținutul creat de noi</InnerTitle>
      <StyledUl className="fs-5">
        {items.map((i, index) => (
          <Item className="row">
            <div className="col-md-10">
              <ItemTitle>
                <FontAwesomeIcon icon={i.icon} />
                {i.title}
              </ItemTitle>
              <ItemDescription>{i.text}</ItemDescription>
              <InnerUl>
                {i.list.map((n) => (
                  <InnerUlItem>
                    <FontAwesomeIcon icon={faSquareCheck} />
                    {n}
                  </InnerUlItem>
                ))}
              </InnerUl>
            </div>
            {index !== 2 && (
              <div className="col-md-2">
                <StyledLink to="/portfolio">Vezi Proiecte</StyledLink>
              </div>
            )}
          </Item>
        ))}
      </StyledUl>
    </StyledSection1>
  );
}

export default Section1;
