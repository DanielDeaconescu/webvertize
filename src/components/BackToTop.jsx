import { useEffect, useState } from "react";
import styled from "styled-components";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledBackTopButton = styled.button`
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  z-index: 100;
  border: 2px solid #1c3d54;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  color: #1c3d54;
  background-color: #fff;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
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
    >
      <StyledFontAwesomeIcon icon={faAngleUp} />
    </StyledBackTopButton>
  );
}

export default BackToTop;
