import styled from "styled-components";
import {
  SectionLabel,
  SectionHeading,
  SectionSubtitle,
} from "../styles/shared";

const StyledNextSteps = styled.div`
  padding: var(--section-padding);
  background-color: var(--color-surface);
  border-top: 1px solid var(--color--border);
  border-bottom: 1px solid var(--color-border);
  background-image: radial-gradient(
    ellipse 60% 50% at 50% 0%,
    rgba(0, 194, 203, 0.05) 0%,
    transparent 70%
  );
`;

const NextStepsInner = styled.div`
  max-width: 640px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

const StyledLi = styled.li`
  display: flex;
  gap: 1.25rem;
  position: relative;

  &:not(:last-child) {
    padding-bottom: 2rem;
  }

  &:not(:last-child)::before {
    content: "";
    position: absolute;
    left: 23px;
    top: 48px;
    bottom: 0;
    width: 1px;
    background-color: var(--color-border);
  }
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
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

const ItemNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-family: var(--font-family);
  font-size: 0.9rem;
  font-weight: 700;
  background-color: var(--color-surface-2);
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  flex-shrink: 0;
  position: relative;
  z-index: 1;
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding-top: 0.75rem;
`;

const ItemTitle = styled.h5`
  font-family: var(--font-family);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
`;

const ItemDescription = styled.p`
  font-family: var(--font-family);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.65;
  margin: 0;
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
      <div className="container">
        <NextStepsInner>
          <SectionHeader>
            <SectionLabel>Cum funcționează</SectionLabel>
            <SectionHeading>Cum funcționează mai exact</SectionHeading>
            <SectionSubtitle>
              Simplu și transparent — de la prima discuție până la lansare și
              dincolo de ea.
            </SectionSubtitle>
          </SectionHeader>
          <StyledUl>
            {stepsList.map((step) => (
              <StyledLi key={step.number}>
                <ItemNumber>{step.number}</ItemNumber>
                <ItemText>
                  <ItemTitle>{step.name}</ItemTitle>
                  <ItemDescription>{step.description}</ItemDescription>
                </ItemText>
              </StyledLi>
            ))}
          </StyledUl>
        </NextStepsInner>
      </div>
    </StyledNextSteps>
  );
}

export default NextSteps;
