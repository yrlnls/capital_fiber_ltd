import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

function Footer() {
  const contactItems = [
    {
      icon: faPhone,
      text: 'Contact Us: +254 714 001 616 | +254 112 274 074' ,
      href: 'tel:+254714001616'
    },
    {
      icon: faEnvelope,
      text: 'Email: info@capitalfibersolution.com | support@capitalfibersolution.com' ,
      href: 'mailto:info@capitalfibersolution.com'
    },
    {
      icon: faMapMarkerAlt,
      text: 'Location: Gaberone Plaza, Nairobi',
      href: '#'
    }
  ];

  return (
    <motion.footer 
      id="footer" 
      className="footer-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.p 
        className="footer-description"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Capital Fiber Solutions brings you world-class fiber-optic internet technology. Work, play, and live at lightning speed.
      </motion.p>
      
      <motion.div 
        className="footer-contact-info"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            className="contact-item"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              y: -2,
              transition: { duration: 0.2 }
            }}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.2,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              <FontAwesomeIcon icon={item.icon} className="icon" />
            </motion.div>
            <span className="contact-text">{item.text}</span>
          </motion.a>
        ))}
      </motion.div>
      
      <motion.div
        style={{
          marginTop: '2rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          textAlign: 'center',
          opacity: 0.8
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.8 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          © 2025 Capital Fiber Solution. All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;