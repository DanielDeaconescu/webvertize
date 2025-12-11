import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const DropdownContainer = styled.li`
  position: relative;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

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
  gap: 0.5rem;
  text-decoration: none;
  color: #000;
  height: 100%;
  width: 100%;
  cursor: pointer;
  padding: 0.5rem 1rem;

  &::after {
    display: none !important;
  }

  &:hover {
    background-color: rgb(39, 55, 77);
    color: #fff;
  }
  @media (max-width: 576px) {
    align-items: flex-start;
    justify-content: flex-start;
  }

  /* For mobile: adjust styling */
  @media (max-width: 992px) {
    padding-left: 0;
    width: 100%;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  flex-direction: column;
  min-width: 200px;
  width: 100%;
  padding: 0.5rem 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.175);

  /* For mobile: making dropdown full width and remove absolute positioning */
  @media (max-width: 992px) {
    position: static;
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')} !important;

    flex-direction: column;
    width: 100%;
    border: none;
    box-shadow: none;
    background-color: transparent;
    padding-left: 1rem;
  }
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 0;

  &:hover {
    background-color: #f8f9fa;
  }
`;

const DropdownLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.5rem 1rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  width: 100%;

  &:hover {
    background-color: rgb(39, 55, 77);
    color: #fff;
    text-decoration: none;
  }

  /* For mobile: adjust padding */
  @media (max-width: 992px) {
    justify-content: flex-start;
    padding: 0.5rem 0 0.5rem 1rem;
    color: rgba(0, 0, 0, 0.55);

    &:hover {
      background-color: rgba(39, 55, 77, 0.1);
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;

const StyledServicesSingle = styled.span`
  @media (max-width: 576px) {
    /* width: 100%; */
  }
`;

function Dropdown({ closeNav }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const dropdownOptions = [
    {
      id: 1,
      label: 'Websites',
      value: 'websites',
      dest: '/websites',
    },
    {
      id: 2,
      label: 'Web Applications',
      value: 'web-applications',
      dest: '/web-apps',
    },
    {
      id: 3,
      label: 'Ad Campaigns',
      value: 'ad-campaigns',
      dest: '/ad-campaigns',
    },
    {
      id: 4,
      label: 'Content Creation',
      value: 'content-creation',
      dest: '/content-creation',
    },
  ];
  return (
    <DropdownContainer className="nav-item dropdown" ref={dropdownRef}>
      <DropdownToggle
        className="nav-link dropdown-toggle"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        role="button"
      >
        <StyledServicesSingle className="services-single">
          Services
        </StyledServicesSingle>
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
          <DropdownItem>
            <DropdownLink
              to={option.dest}
              onClick={handleItemClick}
              className="dropdown-item"
            >
              {option.label}
            </DropdownLink>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
}

export default Dropdown;
