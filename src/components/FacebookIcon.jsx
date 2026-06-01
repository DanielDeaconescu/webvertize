import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: ${(props) =>
    props.color === "light"
      ? "var(--color-text-secondary)"
      : "var(--color-primary)"};
  transition: color var(--transition);
`;

const StyledAnchor = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;

  &:hover ${StyledFontAwesomeIcon} {
    color: var(--color-accent);
  }
`;

function FacebookIcon({ color }) {
  return (
    <StyledAnchor
      href="https://www.facebook.com/webvertize/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Webvertize pe Facebook"
    >
      <StyledFontAwesomeIcon icon={faFacebook} color={color} />
    </StyledAnchor>
  );
}

export default FacebookIcon;
