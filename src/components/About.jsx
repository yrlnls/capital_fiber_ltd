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

function About() {
  const services = [
    {
      icon: 'fa fa-star',
      title: 'Fibre Internet',
      description: 'Fast and reliable internet services tailored to your needs.',
      image: '/fiber3.jpg'
    },
    {
      icon: 'fa fa-camera',
      title: 'CCTV Installations',
      description: 'Advanced security systems to protect your property.',
      image: '/cctv1.jpg'
    },
    {
      icon: 'fa fa-shield',
      title: 'Electric Fencing',
      description: 'Reliable solutions for securing your premises.',
      image: '/elecfence2.jpeg'
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '15+', label: 'Years of Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" style={{ padding: '60px 20px', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2 
          style={{ textAlign: 'center', color: '#003366', marginBottom: '40px', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700' }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Capital Fiber Solutions
        </motion.h2>
        
        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '60px' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <motion.img 
              src="/elecfence3.jpg" 
              alt="About Us" 
              style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 style={{ color: '#003366', marginBottom: '20px', fontSize: '1.8rem', fontWeight: '600' }}>Our Story</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '20px', color: '#666666', fontSize: '1.1rem' }}>
              Since 2010, Capital Fiber Solutions has been at the forefront of providing cutting-edge internet and security solutions. 
              Our mission is to empower homes and businesses with reliable connectivity and state-of-the-art security systems.
            </p>
            <motion.div 
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px' }}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  style={{ 
                    textAlign: 'center',
                    padding: '20px',
                    background: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(255, 107, 53, 0.1)'
                  }}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.h3 
                    style={{ color: '#ff6b35', fontSize: '1.8rem', margin: '0', fontWeight: '700' }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p style={{ color: '#003366', margin: '8px 0 0 0', fontWeight: '500' }}>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.h3 
          style={{ textAlign: 'center', color: '#003366', marginBottom: '40px', fontSize: '2rem', fontWeight: '600' }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h3>
        
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
                backgroundColor: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 107, 53, 0.1)',
                position: 'relative'
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
                <h3 style={{ color: '#003366', marginBottom: '12px', fontSize: '1.3rem', fontWeight: '600' }}>
                  {service.title}
                </h3>
                <p style={{ lineHeight: '1.6', color: '#666666' }}>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;