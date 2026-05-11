import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import WhatsAppButton from "./WhatsAppButton";
import FormButton from "./FormButton";

const SideButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  position: fixed;
  right: 1rem;
  bottom: 50%;
  z-index: 99;
`;

function SideButtons() {
  return (
    <>
      <SideButtonsContainer>
        <FormButton />
      </SideButtonsContainer>
    </>
  );
}

export default SideButtons;
