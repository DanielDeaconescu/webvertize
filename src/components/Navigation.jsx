import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import FacebookIcon from './FacebookIcon';
import { useState } from 'react';
import Dropdown from '../components/Dropdown/Dropdown';

const StyledNav = styled.nav`
  height: 80px;
  padding: 0;
`;

const StyledLinkLogo = styled(Link)`
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: black;
  max-width: 320px;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgb(39, 55, 77);
    color: #fff;
  }
`;

const StyledUl = styled.ul`
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
`;

const StyledLi = styled.li`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Navigation() {
  return (
    <StyledNav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container h-100">
        <StyledLinkLogo class="navbar-brand" to="/">
          <Logo />
        </StyledLinkLogo>
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
        <div class="collapse navbar-collapse h-100" id="navbarSupportedContent">
          <StyledUl className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto h-100">
            <StyledLi class="nav-item">
              <StyledLink class="nav-link" to="/">
                Home
              </StyledLink>
            </StyledLi>
            {/* Services dropdown */}
            <StyledLi className="nav-item">
              <Dropdown />
            </StyledLi>

            <StyledLi className="nav-item">
              <StyledLink className="nav-link" to="/projects">
                Portfolio
              </StyledLink>
            </StyledLi>
            <StyledLi className="nav-item">
              <StyledLink className="nav-link" to="/contact">
                Contact
              </StyledLink>
            </StyledLi>
          </StyledUl>
          <div>
            <FacebookIcon />
          </div>
        </div>
      </div>
    </StyledNav>
  );
}

export default Navigation;
