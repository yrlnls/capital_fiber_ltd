import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; 
import '../App.css';

function About() {
  const services = [
    {
      icon: 'fa fa-star',
      title: 'Fibre Internet',
      description: 'Fast and reliable internet services tailored to your needs.',
    },
    {
      icon: 'fa fa-camera',
      title: 'CCTV Installations',
      description: 'Advanced security systems to protect your property.',
    },
    {
      icon: 'fa fa-shield',
      title: 'Electric Fencing',
      description: 'Reliable solutions for securing your premises.',
    },
  ];

  return (
    <section id="about">
      <h2>About Us</h2>
      <p>We provide high-quality fiber internet, CCTV installations, and electric fencing solutions to ensure your home and business are secure and connected.</p>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <i className={service.icon} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
