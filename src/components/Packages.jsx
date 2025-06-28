import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css'; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

function Packages() {
  const packages = [
    { 
      id: 1, 
      speed: 'Upto 4Mbps', 
      price: 'kshs 1500/month', 
      icon: 'fa fa-signal',
      features: ['Ideal for browsing', 'Email & social media', 'Up to 3 devices'],
      image: '/browsing.jpg',
      bestValue: false
    },
    { 
      id: 2, 
      speed: 'Upto 6Mbps', 
      price: 'kshs 2000/month', 
      icon: 'fa fa-signal',
      features: ['Great for streaming', 'Online gaming', 'Up to 5 devices'],
      image: '/fiber5.jpg',
      bestValue: true
    },
    { 
      id: 3, 
      speed: 'Upto 10Mbps', 
      price: 'kshs 3000/month', 
      icon: 'fa fa-signal',
      features: ['4K streaming', 'Large households', 'Up to 10 devices'],
      image: '/4kstreaming.jpg',
      bestValue: false
    },
    { 
      id: 4, 
      speed: 'Router', 
      price: 'kshs 2500', 
      icon: 'fa fa-router',
      features: ['High-performance', 'Dual-band WiFi', 'Easy setup'],
      image: '/router.jpg',
      bestValue: false
    },
  ];

  return (
    <section id="packages" style={{ padding: '60px 20px', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2 
          style={{ 
            textAlign: 'center', 
            color: '#003366', 
            marginBottom: '40px',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700'
          }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Internet Packages
        </motion.h2>
        
        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {packages.map((packageItem, index) => (
            <motion.div 
              key={packageItem.id} 
              style={{ 
                backgroundColor: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                border: packageItem.bestValue ? '2px solid #ff6b35' : '1px solid rgba(224, 224, 224, 0.5)',
                position: 'relative'
              }}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
                transition: { duration: 0.3 }
              }}
            >
              {packageItem.bestValue && (
                <motion.div 
                  style={{ 
                    backgroundColor: '#ff6b35',
                    color: 'white',
                    textAlign: 'center',
                    padding: '12px',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ⭐ Best Value! ⭐
                  </motion.span>
                </motion.div>
              )}
              
              <motion.div
                style={{
                  position: 'absolute',
                  top: packageItem.bestValue ? '44px' : '0',
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
              
              <motion.img 
                src={packageItem.image} 
                alt={packageItem.speed} 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              
              <div style={{ padding: '24px' }}>
                <motion.i 
                  className={packageItem.icon} 
                  style={{ 
                    fontSize: '2.5rem',
                    color: '#003366',
                    marginBottom: '16px',
                    display: 'block'
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    color: '#ff6b35',
                    transition: { duration: 0.3 }
                  }}
                />
                
                <h3 style={{ 
                  color: '#003366', 
                  marginBottom: '12px',
                  fontSize: '1.4rem',
                  fontWeight: '600'
                }}>
                  {packageItem.speed}
                </h3>
                
                <motion.p 
                  style={{ 
                    fontWeight: 'bold', 
                    marginBottom: '20px', 
                    color: '#ff6b35',
                    fontSize: '1.2rem'
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {packageItem.price}
                </motion.p>
                
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
                  {packageItem.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                    >
                      <motion.i 
                        className="fa fa-check" 
                        style={{ color: '#ff6b35', marginRight: '12px', fontSize: '1.1rem' }}
                        whileHover={{ scale: 1.2 }}
                      />
                      <span style={{ color: '#666666', fontWeight: '500' }}>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button 
                  style={{ 
                    background: 'linear-gradient(135deg, #ff6b35 0%, #e65a2e 100%)',
                    color: 'white',
                    padding: '12px 24px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    width: '100%',
                    fontWeight: '600',
                    fontSize: '1rem',
                    boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)'
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 6px 20px rgba(255, 107, 53, 0.4)',
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a 
                    href='https://wa.me/+254714001616' 
                    style={{ color: 'white', textDecoration: 'none', display: 'block' }}
                  >
                    {packageItem.id === 4 ? '🛒 Buy Now' : '🚀 Get Connected'}
                  </a>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Packages;