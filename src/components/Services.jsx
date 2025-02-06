import React from 'react';
import './Services.css'; // Create a separate CSS file for services
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome

function Services() {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <i className="fa fa-bolt"></i> {/* Updated icon class */}
          <h3>Fibre Internet</h3>
          <p>High-speed internet solutions tailored to your needs.</p>
        </div>
        <div className="service-card">
          <i className="fa fa-camera"></i> {/* Updated icon class */}
          <h3>CCTV Installations</h3>
          <p>Secure your property with our advanced CCTV systems.</p>
        </div>
        <div className="service-card">
          <i className="fa fa-shield"></i> {/* Updated icon class */}
          <h3>Electric Fencing</h3>
          <p>Protect your premises with our reliable electric fencing solutions.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
