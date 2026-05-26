import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

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
  background-color: #fff;
  border-radius: 1rem;
  margin: 0 2rem 2rem 2rem;
  padding: 3rem 2rem;
  color: #000;
  @media (max-width: 768px) {
    margin: 0 1rem 1.5rem 1rem;
    padding: 2rem 1.5rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0 1.5rem 1.5rem 1.5rem;
    padding: 2.5rem 1.5rem;
  }
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

const Subtitle = styled.p`
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 0.5rem;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const RatingCard = styled.div`
  background-color: #f9fafb;
  border-radius: 0.75rem;
  padding: 1.5rem;
  flex: 1;
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StarsContainer = styled.div`
  display: flex;
  color: #f59e0b;
  font-size: 0.875rem;
  gap: 0.25rem;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #4b5563;
  font-size: 1rem;
`;

const ReviewText = styled.div`
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.6;
  font-style: italic;
`;

const ClientInfo = styled.div`
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
`;

const ClientName = styled.div`
  color: #1b3c53;
  font-weight: 600;
  font-size: 0.95rem;
`;

const BusinessType = styled.div`
  color: #9ca3af;
  font-size: 0.85rem;
`;

function LandingTestimonials() {
  return (
    <StyledLandingTestimonials>
      <Title>Ce spun clienții noștri</Title>
      <p>Recenzii reale de la afaceri locale care au ales Webvertize</p>
      <CardsContainer>
        {testimonials.map((item) => (
          <RatingCard>
            <CardHeader>
              <StarsContainer>
                {item.stars.map((item) => (
                  <FontAwesomeIcon icon={faStar} />
                ))}
              </StarsContainer>
              <StyledFontAwesomeIcon icon={faGoogle} />
            </CardHeader>

            <ReviewText>{item.text}</ReviewText>
            <ClientInfo>
              <ClientName>{item.name}</ClientName>
              <BusinessType>{item.business}</BusinessType>
            </ClientInfo>
          </RatingCard>
        ))}
      </CardsContainer>
    </StyledLandingTestimonials>
  );
}

export default LandingTestimonials;
