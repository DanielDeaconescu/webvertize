import styled, { keyframes } from "styled-components";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
  70% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
`;

const StyledWhatsAppButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  bottom: calc(1.25rem + 3.5rem + 0.75rem);
  right: 1.25rem;
  width: 3.5rem;
  height: 3.5rem;
  background-color: #25d366;
  position: fixed;
  z-index: 100;
  text-decoration: none;
  animation: ${pulse} 2s infinite;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    transform: scale(1.1);
    background-color: #1ebe5d;
  }
`;

const StyledWhatsAppIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 1.75rem;
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
