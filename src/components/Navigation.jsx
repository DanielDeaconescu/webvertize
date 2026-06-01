import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import FacebookIcon from "./FacebookIcon";
import Dropdown from "./Dropdown/Dropdown";
import { NavLink } from "react-router-dom";

const NavigationHeader = styled.header`
  transition: all 0.3s ease-in-out;

  @media (min-width: 1200px) {
    position: ${({ $isScrolled }) => ($isScrolled ? "fixed" : "unset")};
    top: ${({ $isScrolled }) => ($isScrolled ? "0.75rem" : "0")};
    width: 100%;
    z-index: 100;
    padding: ${({ $isScrolled }) => ($isScrolled ? "0 2rem" : "0")};
    filter: ${({ $isScrolled }) =>
      $isScrolled ? "drop-shadow(0 8px 32px rgba(0, 0, 0, 0.45))" : "none"};
  }
`;

const StyledNav = styled.nav`
  height: 80px;
  padding: 0;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  transition: all 0.3s ease-in-out;

  @media (max-width: 992px) {
    height: unset;
    padding: 1rem;
  }

  @media (min-width: 1200px) {
    border-radius: ${({ $isScrolled }) => ($isScrolled ? "14px" : "0")};
    border: ${({ $isScrolled }) =>
      $isScrolled ? "1px solid var(--color-border)" : "none"};
    border-bottom: 1px solid var(--color-border);
    background-color: ${({ $isScrolled }) =>
      $isScrolled ? "rgba(17, 25, 32, 0.92)" : "var(--color-surface)"};
    backdrop-filter: ${({ $isScrolled }) =>
      $isScrolled ? "blur(12px)" : "none"};
    -webkit-backdrop-filter: ${({ $isScrolled }) =>
      $isScrolled ? "blur(12px)" : "none"};
  }
`;

const StyledLinkLogo = styled(Link)`
  text-decoration: none;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--color-text-secondary);
  font-family: var(--font-family);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  height: 100%;
  width: 100%;
  padding: 0 0.25rem;
  position: relative;
  transition: color var(--transition);
  white-space: nowrap;

  &::after {
    content: "";
    position: absolute;
    bottom: 18px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: var(--color-accent);
    border-radius: 2px;
    transition: width var(--transition);
  }

  &:hover {
    color: var(--color-text);
    background-color: transparent;
  }

  &:hover::after {
    width: 60%;
  }

  &.nav-link.active,
  &.nav-link:active {
    color: var(--color-accent) !important;
  }

  &.nav-link {
    color: var(--color-text-secondary);
  }

  &.nav-link:hover {
    color: var(--color-text);
  }

  @media (max-width: 992px) {
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.6rem 0.25rem;
    height: unset;

    &::after {
      display: none;
    }

    &:hover {
      color: var(--color-accent);
    }
  }
`;

const StyledUl = styled.ul`
  justify-content: flex-end;
  align-items: center;
  padding: 0 0.5rem;
  width: 100%;
  gap: 0.25rem;
`;

const StyledLi = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  flex: 0 1 auto;
`;

const FacebookIconContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.25rem;
  padding-right: 0.5rem;
  border-left: 1px solid var(--color-border);
  margin-left: 0.5rem;
`;

function Navigation() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const myBool = window.scrollY > 0;
      setIsScrolled(myBool);
    };

    window.addEventListener("scroll", handleScroll);

    // Run once on mount in case page is already scrolled
    handleScroll();

    // clean-up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeNav = () => {
    setIsNavCollapsed(true);
  };

  // Effect to handle clicks outside the navigation
  useEffect(() => {
    function handleClickOutside(event) {
      // Only close the navbar on mobile (when it's expanded)
      if (!isNavCollapsed && window.innerWidth < 992) {
        // Check if the click is outside the navbar AND not on the toggler button
        if (
          navRef.current &&
          !navRef.current.contains(event.target) &&
          !event.target.closest(".navbar-toggler")
        ) {
          closeNav();
        }
      }
    }

    // Add event listener when component mounts or dependencies change
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavCollapsed]);

  return (
    <NavigationHeader $isScrolled={isScrolled} className="sticky-top">
      <StyledNav
        className="navbar navbar-expand-lg"
        ref={navRef}
        $isScrolled={isScrolled}
      >
        <div className="container h-100">
          <StyledLinkLogo className="navbar-brand" to="/">
            <Logo theme="light" />
          </StyledLinkLogo>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavCollapse}
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${
              isNavCollapsed ? "collapse" : ""
            } navbar-collapse h-100`}
            id="navbarSupportedContent"
          >
            <StyledUl className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto h-100">
              <StyledLi className="nav-item">
                <StyledLink className="nav-link" to="/" onClick={closeNav} end>
                  Acasă
                </StyledLink>
              </StyledLi>
              {/* Services dropdown */}
              <StyledLi className="nav-item">
                <Dropdown closeNav={closeNav} />
              </StyledLi>

              <StyledLi className="nav-item">
                <StyledLink
                  className="nav-link"
                  to="/prices"
                  onClick={closeNav}
                >
                  Prețuri
                </StyledLink>
              </StyledLi>

              <StyledLi className="nav-item">
                <StyledLink
                  className="nav-link"
                  to="/portfolio"
                  onClick={closeNav}
                >
                  Portofoliu
                </StyledLink>
              </StyledLi>
              <StyledLi className="nav-item">
                <StyledLink
                  className="nav-link"
                  to="/contact"
                  onClick={closeNav}
                >
                  Contact
                </StyledLink>
              </StyledLi>
            </StyledUl>
            <FacebookIconContainer>
              <FacebookIcon color="light" />
            </FacebookIconContainer>
          </div>
        </div>
      </StyledNav>
    </NavigationHeader>
  );
}

export default Navigation;
