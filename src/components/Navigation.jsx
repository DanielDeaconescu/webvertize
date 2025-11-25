import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import FacebookIcon from './FacebookIcon';

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-decoration: none;
  color: black;
`;

function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-2">
      <div class="container">
        <StyledLink class="navbar-brand" to="/">
          <Logo />
        </StyledLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div>
            <FacebookIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
