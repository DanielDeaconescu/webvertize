import { useEffect, useRef } from "react";
import { Modal as BSModal } from "bootstrap";
import styled, { keyframes } from "styled-components";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0) }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 100;
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
  max-width: 720px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
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
  flex-shrink: 0;
`;

const ModalTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ModalLogo = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  flex-shrink: 0;
`;

const ModalTitle = styled.h5`
  font-family: var(--font-family);
  font-size: 1rem;
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
  flex-shrink: 0;

  &:hover {
    background-color: var(--color-border);
    color: var(--color-text);
  }
`;

const ModalBody = styled.div`
  padding: 1.5rem;
  overflow-y: auto;
  flex-grow: 1;

  /* Scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: var(--color-border) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-border);
    border-radius: 3px;
  }
`;

function Modal({ show, onClose, title, children, logo }) {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [show]);

  // Close on Escape
  useEffect(() => {
    if (!show) return;
    const handleKye = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKye);
    return () => document.removeEventListener("keydown", handleKye);
  }, [show, onClose]);

  if (!show) return null;

  return createPortal(
    <Overlay onClick={onClose}>
      <ModalPanel onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitleRow>
            {logo && (
              <ModalLogo src={logo} alt={title} width="32" height="32" />
            )}
            <ModalTitle>{title}</ModalTitle>
          </ModalTitleRow>
          <CloseButton onClick={onClose} aria-label="Închide">
            <FontAwesomeIcon icon={faX} />
          </CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalPanel>
    </Overlay>,
    document.body,
  );
}

export default Modal;
