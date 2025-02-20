import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; 
import '../App.css';

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

  return (
    <section id="about" style={{ padding: '60px 20px', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#003366', marginBottom: '40px' }}>About Capital Fiber Solutions</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '60px' }}>
          <div>
            <img src="/elecfence3.jpg" alt="About Us" style={{ width: '100%', borderRadius: '10px' }} />
          </div>
          <div>
            <h3 style={{ color: '#003366', marginBottom: '20px' }}>Our Story</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '20px', color: '#003366' }}>
              Since 2010, Capital Fiber Solutions has been at the forefront of providing cutting-edge internet and security solutions. 
              Our mission is to empower homes and businesses with reliable connectivity and state-of-the-art security systems.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px' }}>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ color: '#ff6b35', fontSize: '2rem', margin: '0' }}>10,000+</h3>
              <p style={{ color: '#003366' }}>Happy Customers</p>
              <p style={{ color: '#003366' }}>Years of Experience</p>
              <p style={{ color: '#003366' }}>Support Available</p>

              </div>
            </div>
          </div>
        </div>

        <h3 style={{ textAlign: 'center', color: '#003366', marginBottom: '40px' }}>Our Services</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {services.map((service, index) => (
            <div key={index} style={{ 
              backgroundColor: 'white',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img src={service.image} alt={service.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <i className={service.icon} style={{ 
                  fontSize: '2rem',
                  color: '#ff6b35',
                  marginBottom: '15px',
                  display: 'block'
                }} />
                <h3 style={{ color: '#003366', marginBottom: '10px' }}>{service.title}</h3>
                <p style={{ lineHeight: '1.6' }}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
