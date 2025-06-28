import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';

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

const services = [
  {
    icon: 'fa fa-bolt',
    title: 'Fibre Internet',
    description: 'High-speed internet solutions tailored to your needs.',
    image: '/pexels-pixabay-373543.jpg',
    price: 'From Ksh 1500/month',
    testimonial: '"Switching to Capital Fiber was the best decision for our business!" - Jane Doe'
  },
  {
    icon: 'fa fa-camera',
    title: 'CCTV Installations',
    description: 'Secure your property with our advanced CCTV systems.',
    image: '/pexels-jimbear-3159622.jpg',
    price: 'Custom packages available',
    testimonial: '"Our home has never felt safer!" - John Smith'
  },
  {
    icon: 'fa fa-shield',
    title: 'Electric Fencing',
    description: 'Protect your premises with our reliable electric fencing solutions.',
    image: '/pexels-pixabay-207574.jpg',
    price: 'Competitive pricing',
    testimonial: '"Professional installation and great service!" - Sarah Johnson'
  },
];

function Services() {
  return (
    <section id="services" style={{ 
      padding: '60px 20px', 
      background: 'linear-gradient(135deg, #003366 0%, #00264d 100%)', 
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        zIndex: 0
      }} />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.h2 
          style={{ 
            textAlign: 'center', 
            marginBottom: '40px',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #ffffff 0%, #FFDB58 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Premium Services
        </motion.h2>
        
        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              style={{ 
                backgroundColor: '#f8f9fa',
                borderRadius: '16px',
                overflow: 'hidden',
                color: '#003366',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative'
              }}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.3)',
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
              
              <motion.img 
                src={service.image} 
                alt={service.title} 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              
              <div style={{ padding: '24px' }}>
                <motion.i 
                  className={service.icon} 
                  style={{ 
                    fontSize: '2.5rem',
                    color: '#ff6b35',
                    marginBottom: '16px',
                    display: 'block'
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                />
                
                <h3 style={{ 
                  marginBottom: '12px',
                  fontSize: '1.4rem',
                  fontWeight: '600'
                }}>
                  {service.title}
                </h3>
                
                <p style={{ 
                  lineHeight: '1.6', 
                  marginBottom: '16px',
                  color: '#666666'
                }}>
                  {service.description}
                </p>
                
                <motion.p 
                  style={{ 
                    fontWeight: 'bold', 
                    marginBottom: '16px',
                    color: '#ff6b35',
                    fontSize: '1.1rem'
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {service.price}
                </motion.p>
                
                <motion.div
                  style={{
                    padding: '16px',
                    background: 'rgba(255, 107, 53, 0.1)',
                    borderRadius: '8px',
                    borderLeft: '4px solid #ff6b35'
                  }}
                  whileHover={{ 
                    background: 'rgba(255, 107, 53, 0.15)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <p style={{ 
                    fontStyle: 'italic', 
                    color: '#666666',
                    margin: 0,
                    fontSize: '0.95rem'
                  }}>
                    {service.testimonial}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;