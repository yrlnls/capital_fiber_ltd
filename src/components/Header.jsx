import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const phoneNumbers = ['+254 714 001 616', '+254 112 274 074'];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    // Prevent scrolling when menu is open
    document.body.style.overflow = dropdownVisible ? 'auto' : 'hidden';
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
    document.body.style.overflow = 'auto';
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeDropdown();
      }
    };

    if (dropdownVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
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
        <div className="mobile-menu-icon" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
        <div className={`dropdown ${dropdownVisible ? 'visible' : ''}`} ref={dropdownRef}>
          <button className="close-button" onClick={closeDropdown}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="dropdown-logo">
            <img src="/CapitalLogo1.jpeg" alt="Capital Logo" />
          </div>
          <ul>
            <li><a href="/" onClick={closeDropdown}>Home</a></li>
            <li><a href="/about" onClick={closeDropdown}>About</a></li>
            <li><a href="/packages" onClick={closeDropdown}>Packages</a></li>
            <li><a href="/security" onClick={closeDropdown}>Security</a></li>
            <li><a href="/contact" onClick={closeDropdown}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
