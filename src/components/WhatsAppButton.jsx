import styled from "styled-components";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const StyledWhatsAppButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #25d366;
  color: #fff;
  font-size: 1.25rem;
  text-decoration: none;
  border: none;
  transition:
    background-color var(--transition),
    transform var(--transition);

  &:hover {
    background-color: #1ebe5d;
    transform: scale(1.08);
  }
`;

const StyledWhatsAppIcon = styled(FontAwesomeIcon)`
  color: #fff;
`;

const WhatsAppMessage = styled.div`
  color: #fff;
  background-color: #075e54;
  padding: 0.5rem 0.25rem;
  border-radius: 0.25rem;
  cursor: default;
`;

function WhatsAppButton() {
  return (
    <StyledWhatsAppButton
      href="https://wa.me/+40775511874"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactează-ne pe WhatsApp"
    >
      <StyledWhatsAppIcon icon={faWhatsapp} />
    </StyledWhatsAppButton>
  );
}

export default WhatsAppButton;
