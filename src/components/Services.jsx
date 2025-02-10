import React from 'react';
import './Services.css';
import 'font-awesome/css/font-awesome.min.css';

const services = [
  {
    icon: 'fa fa-bolt',
    title: 'Fibre Internet',
    description: 'High-speed internet solutions tailored to your needs.',
  },
  {
    icon: 'fa fa-camera',
    title: 'CCTV Installations',
    description: 'Secure your property with our advanced CCTV systems.',
  },
  {
    icon: 'fa fa-shield',
    title: 'Electric Fencing',
    description: 'Protect your premises with our reliable electric fencing solutions.',
  },
];

function Services() {
  return (
    <section id="services">
      <h2>Our Services</h2>
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

export default Services;