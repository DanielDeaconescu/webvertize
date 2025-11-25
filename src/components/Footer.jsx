import styled from 'styled-components';
import Logo from './Logo';
import FacebookIcon from './FacebookIcon';

const StyledLink = styled.a`
  text-decoration: none;
`;

function Footer() {
  return (
    <footer className="container d-flex justify-content-between">
      <StyledLink href="">
        <Logo />
      </StyledLink>

      <div>
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="">Form</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Social Media</h3>
        <FacebookIcon />
      </div>
    </footer>
  );
}

export default Footer;
