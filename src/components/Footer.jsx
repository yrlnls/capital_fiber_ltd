import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer id="footer" className="footer-container">
      <p className="footer-description">CityNet Fiber Solutions brings you world-class fiber-optic internet technology. Work, play, and live at lightning speed.</p>
      <div className="footer-contact-info">
        <p className="contact-item">
          <FontAwesomeIcon icon={faPhone} className="icon" /> 
          <span className="contact-text">Contact Us: 0717 568 830 | 0769 289 503</span>
        </p>
        <p className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="icon" /> 
          <span className="contact-text">Email: info@citynetfiber.com</span>
        </p>
        <p className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> 
          <span className="contact-text">Location: Gaberone Plaza, Nairobi</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;