import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const phoneNumbers = ['+254 714 001 616', '+254 112 274 074'];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
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

  const menuVariants = {
    hidden: { x: '-100%' },
    visible: { 
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      x: '-100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  };

  const menuItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/packages', label: 'Packages' },
    { href: '/security', label: 'Security' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header-content">
        <motion.img 
          src="/CapitalLogo1.jpeg" 
          alt="Company Logo" 
          className="company-logo"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <motion.h1 
          className="company-name"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Capital Fiber Limited
        </motion.h1>
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {phoneNumbers.map((number, index) => (
            <motion.a 
              key={index} 
              href={`tel:${number}`} 
              className="phone-number"
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
            >
              {number}
            </motion.a>
          ))}
        </motion.div>
      </div>
      <nav>
        <motion.div 
          className="mobile-menu-icon" 
          onClick={toggleDropdown}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: dropdownVisible ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </motion.div>
        </motion.div>
        
        <AnimatePresence>
          {dropdownVisible && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.5)',
                  zIndex: 999
                }}
                onClick={closeDropdown}
              />
              <motion.div 
                className="dropdown visible"
                ref={dropdownRef}
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.button 
                  className="close-button" 
                  onClick={closeDropdown}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 90
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </motion.button>
                <motion.div 
                  className="dropdown-logo"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <img src="/CapitalLogo1.jpeg" alt="Capital Logo" />
                </motion.div>
                <ul>
                  {menuItems.map((item, index) => (
                    <motion.li 
                      key={item.href}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                    >
                      <motion.a 
                        href={item.href} 
                        onClick={closeDropdown}
                        whileHover={{ 
                          x: 8,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {item.label}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;