import { useEffect, useState } from "react";
import styled from "styled-components";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledBackTopButton = styled.button`
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  z-index: 100;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  color: var(--color-text-secondary);
  background-color: var(--color-surface-2);
  cursor: pointer;
  transition:
    background-color var(--transition),
    border-color var(--transition),
    color var(--transition),
    transform var(--transition);

  &:hover {
    background-color: var(--color-primary-light);
    border-color: var(--color-accent);
    color: var(--color-text);
    transform: translateY(-2px);
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.1rem;
`;

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const SHOW_AT = 350;
  useEffect(() => {
    function handleVisible() {
      setIsVisible(window.scrollY >= SHOW_AT);
    }

    window.addEventListener("scroll", handleVisible);

    return () => {
      window.removeEventListener("scroll", handleVisible);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <StyledBackTopButton
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label="Înapoi sus"
    >
      <StyledFontAwesomeIcon icon={faAngleUp} />
    </StyledBackTopButton>
  );
}

export default BackToTop;
