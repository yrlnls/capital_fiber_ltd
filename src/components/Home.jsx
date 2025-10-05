import React from 'react';
import { motion } from 'framer-motion';
import 'font-awesome/css/font-awesome.min.css';
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

const cardHoverVariants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

function Home() {
  return (
    <div id="home">
      <motion.div 
        className="hero-section" 
        style={{ backgroundImage: "url('/background.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img 
            src="/CapitalLogo1.jpeg" 
            alt="Capital Fiber Solutions Logo" 
            className="logo img-fluid"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          />
          <motion.h1 
            className="display-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Connect. Secure. Thrive.
          </motion.h1>
          <motion.p 
            className="lead"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Your trusted partner for high-speed fiber internet and advanced security solutions
          </motion.p>
          <motion.a 
            href="#packages" 
            className="cta-button"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 12px 32px rgba(255, 107, 53, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started Today
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="key-benefits"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={itemVariants}>Why Choose Us?</motion.h2>
        <div className="benefits-grid">
          <motion.div 
            className="benefit-card"
            variants={itemVariants}
            whileHover="hover"
            {...cardHoverVariants}
          >
            <motion.i 
              className="fa fa-tachometer"
              variants={iconVariants}
              whileHover="hover"
            />
            <h3>Blazing Fast Speeds</h3>
            <p>Experience seamless connectivity with our high-speed fiber internet</p>
          </motion.div>
          <motion.div 
            className="benefit-card"
            variants={itemVariants}
            whileHover="hover"
            {...cardHoverVariants}
          >
            <motion.i 
              className="fa fa-shield"
              variants={iconVariants}
              whileHover="hover"
            />
            <h3>Advanced Security</h3>
            <p>Protect what matters most with our cutting-edge security solutions</p>
          </motion.div>
          <motion.div 
            className="benefit-card"
            variants={itemVariants}
            whileHover="hover"
            {...cardHoverVariants}
          >
            <motion.i 
              className="fa fa-headset"
              variants={iconVariants}
              whileHover="hover"
            />
            <h3>24/7 Support</h3>
            <p>Our dedicated team is always ready to assist you</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="stats-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="stat-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <motion.h3
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              1,000+
            </motion.h3>
            <p>Happy Customers</p>
          </motion.div>
          <motion.div 
            className="stat-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <motion.h3
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
            >
              99.9%
            </motion.h3>
            <p>Uptime Guarantee</p>
          </motion.div>
          <motion.div 
            className="stat-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <motion.h3
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
            >
              24/7
            </motion.h3>
            <p>Support Availability</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;