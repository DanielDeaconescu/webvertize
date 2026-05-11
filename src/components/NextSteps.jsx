import styled from "styled-components";

const StyledNextSteps = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  padding: 1rem 0;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Header = styled.div``;

const StyledH3 = styled.h3`
  text-align: center;
  color: #1b3c53;
  text-align: center;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.25rem;
  }
`;

const StyledP2 = styled.p`
  margin-bottom: 0;
`;

const StyledP = styled.p`
  color: #1b3c53;
  text-align: center;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1rem !important;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.2rem !important;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  margin-bottom: 2rem;
  padding: 0;
`;

const StyledLi = styled.li`
  display: flex;
  gap: 0.5rem;
  color: #1b3c53;
  font-size: 1.1rem;
`;

const ItemNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid #1b3c53;
  padding: 1rem;
  width: 60px;
  height: 60px;
  aspect-ratio: 1 / 1;
  font-size: 1.25rem;
  font-weight: 600;
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ItemTitle = styled.h5`
  font-weight: 600;
`;

function NextSteps() {
  const stepsList = [
    {
      number: "1",
      name: "Descoperire",
      description:
        "Înțelegem afacerea ta, obiectivele și nevoile specifice înainte de orice altceva.",
    },
    {
      number: "2",
      name: "Design UI",
      description:
        "Creăm intern wireframe-uri și mockup-uri vizuale înainte de dezvoltare. În funcție de complexitatea proiectului, acestea pot fi împărtășite cu tine pentru feedback.",
    },
    {
      number: "3",
      name: "Dezvoltare",
      description:
        "Construim website-ul cu tehnologii moderne, performante și scalabile.",
    },
    {
      number: "4",
      name: "Testare și optimizare",
      description:
        "Testăm fiecare funcționalitate și optimizăm performanța înainte de lansare.",
    },
    {
      number: "5",
      name: "Lansare și suport",
      description:
        "Publicăm website-ul și rămânem alături de tine după lansare.",
    },
  ];

  return (
    <StyledNextSteps className="container">
      <Header className="mb-2">
        <StyledH3>Cum funcționează mai exact</StyledH3>
        <StyledP className="fs-5">
          Simplu și transparent - de la prima discuție și până la lansare
        </StyledP>
      </Header>
      <StyledUl>
        {stepsList.map((step) => (
          <StyledLi>
            <ItemNumber>{step.number}</ItemNumber>
            <ItemText>
              <ItemTitle>{step.name}</ItemTitle>
              <StyledP2>{step.description}</StyledP2>
            </ItemText>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledNextSteps>
  );
}

export default NextSteps;
