import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer id="footer">
      <p>CityNet Fiber Solutions brings you world-class fiber-optic internet technology. Work, play, and live at lightning speed.</p>
      <div>
        <p>
          <FontAwesomeIcon icon={faPhone} /> Contact Us: 0717 568 830 | 0769 289 503
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> Email: info@citynetfiber.com
        </p>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Location: Gaberone Plaza, Nairobi
        </p>
      </div>
    </footer>
  );
}

export default Footer;
