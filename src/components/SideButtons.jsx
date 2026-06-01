import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import WhatsAppButton from "./WhatsAppButton";
import FormButton from "./FormButton";

const SideButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  position: fixed;
  right: 1.25rem;
  bottom: 50%;
  transform: translateY(50%);
  z-index: 9999;
`;

function SideButtons() {
  return (
    <SideButtonsContainer>
      <WhatsAppButton />
      <FormButton />
    </SideButtonsContainer>
  );
}

export default SideButtons;
