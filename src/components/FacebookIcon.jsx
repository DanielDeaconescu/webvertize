import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: ${(props) => (props.color === "light" ? "#fff" : "#1b3c53")};
`;

function FacebookIcon({ color }) {
  return (
    <a href="https://www.facebook.com/webvertize/" target="_blank">
      <StyledFontAwesomeIcon icon={faFacebook} color={color} />
    </a>
  );
}

export default FacebookIcon;
