import styled from "styled-components";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const WhatsAppButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  gap: 0.5rem;
  position: fixed;
  bottom: 0.75rem;
  right: 2rem;
  z-index: 100;
`;

const StyledWhatsAppButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 5px 2px;
  background-color: #075e54;
  font-size: 2rem;
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
    <WhatsAppButtonContainer>
      <StyledWhatsAppButton href="https://wa.me/+40775511874" target="_blank">
        <StyledWhatsAppIcon icon={faWhatsapp} />
      </StyledWhatsAppButton>
      <WhatsAppMessage>Contactează-ne</WhatsAppMessage>
    </WhatsAppButtonContainer>
  );
}

export default WhatsAppButton;
