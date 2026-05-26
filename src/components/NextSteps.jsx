import styled from "styled-components";

const StyledNextSteps = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  padding: 4rem 0;
  background-color: #f9fafb;
  border-radius: 1rem;
  margin: 0 2rem 2rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin: 0 1rem 1rem 1rem;
  }
`;

const Header = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

const StyledH3 = styled.h3`
  text-align: center;
  color: #1b3c53;
  text-align: center;
  font-weight: 600;
  font-size: 1.75rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.25rem;
  }
`;

const StyledP2 = styled.p`
  margin-bottom: 0;
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const StyledP = styled.p`
  color: #4b5563;
  text-align: center;
  line-height: 1.6;

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
  gap: 1.5rem;
  list-style: none;
  margin-bottom: 2rem;
  padding: 0;
  max-width: 640px;
  width: 100%;
`;

const StyledLi = styled.li`
  display: flex;
  gap: 1rem;
  color: #1b3c53;
  font-size: 1.1rem;
`;

const ItemNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 1rem;
  width: 48px;
  height: 48px;
  aspect-ratio: 1 / 1;
  font-size: 1rem;
  font-weight: 600;
  background-color: #1b3c53;
  color: #fff;
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ItemTitle = styled.h5`
  font-weight: 600;
  color: #1b3c53;
  margin-bottom: 0.25rem;
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
        "Creăm wireframe-uri și mockup-uri vizuale înainte de dezvoltare și le împărtășim cu tine pentru feedback.",
    },
    {
      number: "3",
      name: "Dezvoltare",
      description:
        "Construim website-ul cu tehnologii moderne și scalabile, optimizat pentru viteză și motoarele de căutare.",
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
    <StyledNextSteps>
      <Header className="mb-2">
        <StyledH3>Cum funcționează mai exact</StyledH3>
        <StyledP className="fs-5">
          Simplu și transparent - de la prima discuție până la lansare și
          dincolo de ea
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
