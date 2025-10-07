import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Capital Fiber Solutions
        </motion.h2>
        
        <motion.p 
          className="contact-subtitle"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get in touch with our team for inquiries, support, or partnership opportunities
        </motion.p>

        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="contact-info"
            variants={itemVariants}
          >
            <motion.div 
              className="info-card"
              whileHover={{ 
                y: -4,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                transition: { duration: 0.3 }
              }}
            >
              <h3>General Inquiries/ Technical Support</h3>
              <motion.p
                whileHover={{ color: '#ff6b35' }}
                transition={{ duration: 0.3 }}
              >
                Email: info@capitalfibersolution.com | support@capitalfibersolution.com
              </motion.p>
              <motion.p
                whileHover={{ color: '#ff6b35' }}
                transition={{ duration: 0.3 }}
              >
                Phone: +254 714 001 616/+254 112 274 074
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className="map-container"
            variants={itemVariants}
          >
            <h3>Visit Us</h3>
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8163198761954!2d36.82443807590177!3d-1.284115598703665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11e849a53eb7%3A0x235009a1613022f4!2sGaberone%20plaza!5e0!3m2!1sen!2ske!4v1759628029476!5m2!1sen!2ske" 
             width={600}
             height={450}
             style={{border:0}}
             allowFullscreen="" 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade">
             </iframe>
          </motion.div>

          <motion.div 
            className="contact-form"
            variants={itemVariants}
          >
            <h3>Send Us a Message</h3>
            <motion.form 
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="form-group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="name">Name</label>
                <motion.input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: '0 0 0 3px rgba(255, 107, 53, 0.1)'
                  }}
                />
              </motion.div>

              <motion.div 
                className="form-group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="email">Email</label>
                <motion.input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: '0 0 0 3px rgba(255, 107, 53, 0.1)'
                  }}
                />
              </motion.div>

              <motion.div 
                className="form-group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="subject">Subject</label>
                <motion.input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: '0 0 0 3px rgba(255, 107, 53, 0.1)'
                  }}
                />
              </motion.div>

              <motion.div 
                className="form-group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="message">Message</label>
                <motion.textarea 
                  id="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: '0 0 0 3px rgba(255, 107, 53, 0.1)'
                  }}
                />
              </motion.div>

              <motion.button 
                type="submit" 
                className="submit-button"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 6px 20px rgba(255, 107, 53, 0.4)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Send Message →
                </motion.span>
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;