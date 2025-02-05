import React from 'react';

function About() {
  return (
    <section id="about">
      <h2>About Us</h2>
      <p>We provide high-quality fiber internet, CCTV installations, and electric fencing solutions to ensure your home and business are secure and connected.</p>
      <div className="about-icons">
        <div className="about-icon">
          <i className="icon-fibre-internet"></i>
          <h3>Fibre Internet</h3>
          <p>Fast and reliable internet services tailored to your needs.</p>
        </div>
        <div className="about-icon">
          <i className="icon-cctv"></i>
          <h3>CCTV Installations</h3>
          <p>Advanced security systems to protect your property.</p>
        </div>
        <div className="about-icon">
          <i className="icon-electric-fencing"></i>
          <h3>Electric Fencing</h3>
          <p>Reliable solutions for securing your premises.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
