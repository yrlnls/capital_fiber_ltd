import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const phoneNumbers = ['+254 714 001 616', '+254 112 274 074'];

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
      <div className="header-content">
        <img src="/CapitalLogo1.jpeg" alt="Company Logo" className="company-logo" />
        <h1 className="company-name">Capital Fiber Limited</h1>
        <div className="contact-info">
          {phoneNumbers.map((number, index) => (
            <a key={index} href={`tel:${number}`} className="phone-number">
              {number}
            </a>
          ))}
        </div>
      </div>
      <nav>
        <ul>
          <li className="mobile-menu-icon" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </li>
          {dropdownVisible && (
            <ul className="dropdown" ref={dropdownRef}>
              <li className="close-button" onClick={closeDropdown}>
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </li>
              <li className="dropdown-logo">
                <img src="/CapitalLogo1.jpeg" alt="Capital Logo" />
              </li>
              <li><a href="/">Home</a></li>
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
