import React from 'react';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';

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
    <section id="services" style={{ padding: '60px 20px', backgroundColor: '#003366', color: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Premium Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {services.map((service, index) => (
            <div key={index} style={{ 
              backgroundColor: '#f8f9fa',
              borderRadius: '10px',
              overflow: 'hidden',
              color: '#003366',
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
                <h3 style={{ marginBottom: '10px' }}>{service.title}</h3>
                <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>{service.description}</p>
                <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>{service.price}</p>
                <p style={{ fontStyle: 'italic', color: '#666' }}>{service.testimonial}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
