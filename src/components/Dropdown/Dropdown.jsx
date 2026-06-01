import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const DropdownContainer = styled.li`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  flex: 0 1 auto;

  /* Making dropdown full width on mobile */
  @media (max-width: 992px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const DropdownToggle = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  text-decoration: none;
  color: var(--color-text-secondary);
  font-family: var(--font-family);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  height: 100%;
  width: 100%;
  padding: 0 0.25rem;
  cursor: pointer;
  position: relative;
  transition: color var(--transition);
  white-space: nowrap;

  &::after {
    display: none !important;
  }

  &::before {
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

  &:hover::before {
    width: 60%;
  }

  &.active-dropdown::before {
    width: 60%;
  }

  &.active-dropdown {
    color: var(--color-accent);
  }

  @media (max-width: 992px) {
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.6rem 0.25rem;
    height: unset;

    &::before {
      display: none;
    }

    &:hover {
      color: var(--color-accent);
      backgeound-color: transparent;
    }
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  flex-direction: column;
  min-width: 220px;
  padding: 0.4rem;
  background-color: var(--color-surface-2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);

  /* For mobile: making dropdown full width and remove absolute positioning */
  @media (max-width: 992px) {
    position: static;
    transform: none;
    display: ${(props) => (props.$isOpen ? "flex" : "none")} !important;
    width: 100%;
    border: none;
    box-shadow: none;
    background-color: transparent;
    padding-left: 0.75rem;
    padding-top: 0.25rem;
  }
`;

const DropdownItem = styled.div`
  display: flex;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.6rem 0.85rem;
  font-family: var(--font-family);
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--color-text-secondary);
  text-decoration: none;
  border-radius: 8px;
  transition:
    background-color var(--transition),
    color var(--transition);
  white-space: nowrap;

  &:hover {
    background-color: var(--color-border);
    color: var(--color-text);
    text-decoration: none;
  }

  /* For mobile: adjust padding */
  @media (max-width: 992px) {
    padding: 0.5rem 0.25rem;
    border-radius: 0;

    &:hover {
      background-color: transparent;
      color: var(--color-accent);
    }
  }
`;

function Dropdown({ closeNav }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const isServiceActive = [
    "/websites",
    "/web-apps",
    "/advertising-content-creation",
  ].includes(location.pathname);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
    // Close the entire navbar on mobile when an item is clicked
    if (closeNav && window.innerWidth < 992) {
      closeNav();
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const dropdownOptions = [
    {
      link_name: "Website-uri",
      route: "/websites",
    },
    {
      link_name: "Aplicații Web",
      route: "/web-apps",
    },
    {
      link_name: "Publicitate & Creare de Conținut",
      route: "/advertising-content-creation",
    },
  ];

  return (
    <DropdownContainer className="nav-item dropdown" ref={dropdownRef}>
      <DropdownToggle
        className={`nav-link ${isServiceActive ? "active-dropdown" : ""}`}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        role="button"
      >
        Servicii
        {isOpen ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </DropdownToggle>
      <DropdownMenu
        className="dropdown-menu"
        $isOpen={isOpen}
        aria-labelledby="navbarDropdown"
      >
        {dropdownOptions.map((option) => (
          <DropdownItem key={option.route}>
            <DropdownLink to={option.route} onClick={handleItemClick}>
              {option.link_name}
            </DropdownLink>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
}

export default Dropdown;
