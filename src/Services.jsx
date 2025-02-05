import React from 'react';
import './Services.css'; // Create a separate CSS file for services

function Services() {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <i className="icon-fibre-internet"></i>
          <h3>Fibre Internet</h3>
          <p>High-speed internet solutions tailored to your needs.</p>
        </div>
        <div className="service-card">
          <i className="icon-cctv"></i>
          <h3>CCTV Installations</h3>
          <p>Secure your property with our advanced CCTV systems.</p>
        </div>
        <div className="service-card">
          <i className="icon-electric-fencing"></i>
          <h3>Electric Fencing</h3>
          <p>Protect your premises with our reliable electric fencing solutions.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
