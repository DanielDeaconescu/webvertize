import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import FacebookIcon from "./FacebookIcon";
import Dropdown from "./Dropdown/Dropdown";

const NavigationHeader = styled.header`
  transition: all 0.3s ease-in-out;

  @media (min-width: 1200px) {
    position: ${({ $isScrolled }) => ($isScrolled ? "fixed" : "unset")};
    top: ${({ $isScrolled }) => ($isScrolled ? "0.25rem" : "0")};
    width: 100%;
    z-index: 100;
    padding: ${({ $isScrolled }) => ($isScrolled ? "0.75rem 3rem" : "0")};

    ${({ $isScrolled }) =>
      $isScrolled
        ? `filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.15));`
        : `filter: none`}
  }
`;

const StyledNav = styled.nav`
  height: 80px;
  padding: 0;

  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  @media (max-width: 992px) {
    height: unset;
    padding: 1rem;
  }

  @media (min-width: 1200px) {
    border-radius: ${({ $isScrolled }) => ($isScrolled ? "1rem" : "0")};
  }
`;

const StyledLinkLogo = styled(Link)`
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  max-width: 320px;
  height: 100%;
  width: 100%;

  &:hover {
    background-color: rgb(39, 55, 77);
    color: #fff;
  }

  @media (max-width: 992px) {
    justify-content: flex-start;
    align-items: flex-start;
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
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
`;

const FacebookIconContainer = styled.div`
  padding-left: 1rem;
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
        className="navbar navbar-expand-lg navbar-light bg-light"
        ref={navRef}
        $isScrolled={isScrolled}
      >
        <div className="container h-100">
          <StyledLinkLogo className="navbar-brand" to="/">
            <Logo />
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
                <StyledLink className="nav-link" to="/" onClick={closeNav}>
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
              <FacebookIcon color="dark" />
            </FacebookIconContainer>
          </div>
        </div>
      </StyledNav>
    </NavigationHeader>
  );
}

export default Navigation;
