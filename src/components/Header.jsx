import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    if (dropdownVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownVisible]);

  return (
    <header>
      <nav>
        <ul>
          <li onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </li>
          {dropdownVisible && (
            <ul className="dropdown" ref={dropdownRef}>
              <li className="close-button"><button onClick={closeDropdown}>x</button></li>
              <li className="dropdown-logo"><img src="/CapitalLogo1.jpeg" alt="Capital Logo" /></li>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/packages">Packages</a></li>
              <li><a href="/security">Security</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
