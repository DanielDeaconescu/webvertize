import { useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import LogoImg from "../assets/logo_no_text_light.png";
import { createPortal } from "react-dom";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: ${fadeIn} 0.2s ease;
`;

const ModalPanel = styled.div`
  background-color: var(--color-surface-2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  width: 100%;
  max-width: 480px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);
  animation: ${slideUp} 0.25s ease;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--color-border);
`;

const ModalTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
`;

const ModalLogoImg = styled.img`
  width: 30px;
  height: 30px;
`;

const ModalTitle = styled.h5`
  font-family: var(--font-family);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
  letter-spacing: -0.01em;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: 1px solid var(--color-border);
  background-color: transparent;
  color: var(--color-text-secondary);
  font-size: 1rem;
  cursor: pointer;
  transition:
    background-color var(--transition),
    color var(--transition);
  line-height: 1;
  padding: 0;

  &:hover {
    background-color: var(--color-border);
    color: var(--color-text);
  }
`;

const ModalBody = styled.div`
  padding: 1.5rem;
`;

function ModalForm({ show, onClose, title, children }) {
  // Lock body scroll when open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  // Close on Escape key
  useEffect(() => {
    if (!show) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [show, onClose]);

  if (!show) return null;

  return createPortal(
    <Overlay onClick={onClose}>
      <ModalPanel onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitleRow>
            <ModalLogoImg
              src={LogoImg}
              alt="Webvertize"
              width="30"
              height="30"
            />
            <ModalTitle>{title}</ModalTitle>
          </ModalTitleRow>
          <CloseButton onClick={onClose} aria-label="Închide">
            ✕
          </CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalPanel>
    </Overlay>,
    document.body,
  );
}

export default ModalForm;
