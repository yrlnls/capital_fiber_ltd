import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css'; 

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

const cardVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const securityCards = [
  {
    icon: 'fa fa-camera',
    title: 'Face Reader Setup',
    description: 'Advanced facial recognition technology for secure access control.',
  },
  {
    icon: 'fa fa-video-camera',
    title: 'IP Camera Setup',
    description: 'High-definition IP cameras for remote monitoring and recording.',
  },
  {
    icon: 'fa fa-fingerprint',
    title: 'Biometric Attendance Setup',
    description: 'Secure attendance tracking using biometric technology.',
  },
  {
    icon: 'fa fa-lock',
    title: 'Video Door Lock Setup',
    description: 'Enhanced security with video door locks for homes and offices.',
  },
  {
    icon: 'fa fa-camera-retro',
    title: 'Analog Camera Setup',
    description: 'Traditional analog cameras for reliable surveillance solutions.',
  },
  {
    icon: 'fa fa-video',
    title: 'HD-CVI Camera Setup',
    description: 'High-definition composite video interface cameras for superior quality.',
  },
];

const electricFenceServices = [
  {
    icon: 'fa fa-shopping-cart',
    title: 'Sales',
    description: 'Providing the latest electric fence technology and products.',
  },
  {
    icon: 'fa fa-wrench',
    title: 'Installation',
    description: 'Professional installation services for effective security solutions.',
  },
  {
    icon: 'fa fa-cogs',
    title: 'Maintenance',
    description: 'Regular maintenance services to ensure optimal performance of electric fences.',
  },
];

function Security() {
  return (
    <section 
      id="security" 
      style={{ 
        padding: '60px 20px', 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
        minHeight: '100vh'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2 
          style={{ 
            textAlign: 'center',
            color: '#003366',
            marginBottom: '20px',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700'
          }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Security Solutions
        </motion.h2>
        
        <motion.p
          style={{
            textAlign: 'center',
            color: '#666666',
            marginBottom: '50px',
            fontSize: '1.2rem',
            maxWidth: '600px',
            margin: '0 auto 50px auto'
          }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Comprehensive security solutions to protect what matters most to you
        </motion.p>

        <motion.h3 
          style={{ 
            textAlign: 'center',
            color: '#003366',
            marginBottom: '40px',
            fontSize: '2rem',
            fontWeight: '600'
          }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          CCTV Setups
        </motion.h3>
        
        <motion.div 
          className="security-cards"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '60px'
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {securityCards.map((card, index) => (
            <motion.div 
              key={index} 
              className="security-card"
              style={{
                background: 'white',
                padding: '32px 24px',
                borderRadius: '16px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 107, 53, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #ff6b35, #ff8a5c)',
                  transformOrigin: 'left'
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              />
              
              <motion.i 
                className={card.icon}
                style={{
                  fontSize: '3rem',
                  color: '#ff6b35',
                  marginBottom: '20px',
                  display: 'block'
                }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              />
              
              <h4 style={{
                color: '#003366',
                marginBottom: '16px',
                fontSize: '1.3rem',
                fontWeight: '600'
              }}>
                {card.title}
              </h4>
              
              <p style={{
                color: '#666666',
                lineHeight: '1.6',
                margin: 0
              }}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h3 
          style={{ 
            textAlign: 'center',
            color: '#003366',
            marginBottom: '40px',
            fontSize: '2rem',
            fontWeight: '600'
          }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Electric Fence Services
        </motion.h3>
        
        <motion.div 
          className="security-cards"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            maxWidth: '900px',
            margin: '0 auto'
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {electricFenceServices.map((service, index) => (
            <motion.div 
              key={index} 
              className="security-card"
              style={{
                background: 'white',
                padding: '32px 24px',
                borderRadius: '16px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 107, 53, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #ff6b35, #ff8a5c)',
                  transformOrigin: 'left'
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              />
              
              <motion.i 
                className={service.icon}
                style={{
                  fontSize: '3rem',
                  color: '#ff6b35',
                  marginBottom: '20px',
                  display: 'block'
                }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              />
              
              <h4 style={{
                color: '#003366',
                marginBottom: '16px',
                fontSize: '1.3rem',
                fontWeight: '600'
              }}>
                {service.title}
              </h4>
              
              <p style={{
                color: '#666666',
                lineHeight: '1.6',
                margin: 0
              }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Security;