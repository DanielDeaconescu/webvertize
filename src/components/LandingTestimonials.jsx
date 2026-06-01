import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { SectionLabel, SectionHeading } from "../styles/shared";

const testimonials = [
  {
    text: "Colaborarea cu Webvertize a fost simplă și eficientă. Site-ul arată profesional și îl pot actualiza singur fără să sun pe cineva.",
    name: "Client Webvertize",
    business: "Ediontrans",
    stars: [1, 2, 3, 4, 5],
  },
  {
    text: "Colaborarea cu Webvertize a fost simplă și eficientă. Site-ul arată profesional și îl pot actualiza singur fără să sun pe cineva.",
    name: "Client Webvertize",
    business: "Fixazi",
    stars: [1, 2, 3, 4, 5],
  },
  {
    text: "Colaborarea cu Webvertize a fost simplă și eficientă. Site-ul arată profesional și îl pot actualiza singur fără să sun pe cineva.",
    name: "Client Webvertize",
    business: "Studio Foto Adda",
    stars: [1, 2, 3, 4, 5],
  },
];

const StyledLandingTestimonials = styled.div`
  padding: var(--section-padding);
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
`;

const Subtitle = styled.p`
  font-family: var(--font-family);
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const RatingCard = styled.div`
  background-color: var(--color-surface-2);
  border: 1px solid var(--color-border);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition:
    border-color var(--transition),
    transform var(--transition);

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-3px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  color: #f59e0b;
  font-size: 0.85rem;
`;

const GoogleIcon = styled(FontAwesomeIcon)`
  color: var(--color-text-muted);
  font-size: 1rem;
`;

const ReviewText = styled.div`
  font-family: var(--font-family);
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  font-style: italic;
  margin: 0;
  flex-grow: 1;
`;

const ClientInfo = styled.div`
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const Title = styled.h3`
  color: #1b3c53;
  font-weight: 600;
  font-size: 1.75rem;

  @media (max-width: 768px) {
    font-size: 1.35rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #4b5563;
  font-size: 1rem;
`;

const ClientName = styled.div`
  font-family: var(--font-family);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);
`;

const BusinessType = styled.div`
  font-family: var(--font-family);
  font-size: 0.8rem;
  color: var(--color-text-muted);
`;

const PendingNote = styled.div`
  display: inline-flex;
  align-self: flex-start;
  padding: 0.3rem 0.75rem;
  border-radius: 99px;
  background-color: var(--color-surface-2);
  border: 1px solid var(--color-border);
  font-family: var(--font-family);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
`;

function LandingTestimonials() {
  return (
    <StyledLandingTestimonials>
      <div className="container">
        <SectionHeader>
          <SectionLabel>Recenzii</SectionLabel>
          <SectionHeading>Ce spun clienții noștri</SectionHeading>
          <Subtitle>
            Recenzii reale de la afaceri locale care au ales Webvertize.
          </Subtitle>
          <PendingNote>⏳ Recenzii în curs de colectare</PendingNote>
        </SectionHeader>
        <CardsContainer>
          {testimonials.map((item) => (
            <RatingCard key={item.business}>
              <CardHeader>
                <StarsContainer>
                  {item.stars.map((star) => (
                    <FontAwesomeIcon key={star} icon={faStar} />
                  ))}
                </StarsContainer>
                <GoogleIcon icon={faGoogle} />
              </CardHeader>
              <ReviewText>"{item.text}"</ReviewText>
              <ClientInfo>
                <ClientName>{item.name}</ClientName>
                <BusinessType>{item.business}</BusinessType>
              </ClientInfo>
            </RatingCard>
          ))}
        </CardsContainer>
      </div>
    </StyledLandingTestimonials>
  );
}

export default LandingTestimonials;
