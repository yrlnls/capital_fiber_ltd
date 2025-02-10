import React from 'react';
import './Security.css'; 
import 'font-awesome/css/font-awesome.min.css'; 

const securityCards = [
  {
    icon: 'fa fa-camera',
    title: 'Face Reader Setup',
    description: 'Advanced facial recognition technology for secure access control.',
  },
  {
    icon: 'fa fa-video-camera',
    title: 'IP Camera Setup',
    description: 'High-definition IP cameras for remote monitoring and recording.',
  },
  {
    icon: 'fa fa-fingerprint',
    title: 'Biometric Attendance Setup',
    description: 'Secure attendance tracking using biometric technology.',
  },
  {
    icon: 'fa fa-lock',
    title: 'Video Door Lock Setup',
    description: 'Enhanced security with video door locks for homes and offices.',
  },
  {
    icon: 'fa fa-camera-retro',
    title: 'Analog Camera Setup',
    description: 'Traditional analog cameras for reliable surveillance solutions.',
  },
  {
    icon: 'fa fa-video',
    title: 'HD-CVI Camera Setup',
    description: 'High-definition composite video interface cameras for superior quality.',
  },
];

const electricFenceServices = [
  {
    icon: 'fa fa-shopping-cart',
    title: 'Sales',
    description: 'Providing the latest electric fence technology and products.',
  },
  {
    icon: 'fa fa-wrench',
    title: 'Installation',
    description: 'Professional installation services for effective security solutions.',
  },
  {
    icon: 'fa fa-cogs',
    title: 'Maintenance',
    description: 'Regular maintenance services to ensure optimal performance of electric fences.',
  },
];

function Security() {
  return (
    <section id="security">
      <h2>Security Solutions</h2>
      <h3>CCTV Setups</h3>
      <div className="security-cards">
        {securityCards.map((card, index) => (
          <div key={index} className="security-card">
            <i className={card.icon}></i>
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <h3>Electric Fence Services</h3>
      <div className="security-cards">
        {electricFenceServices.map((service, index) => (
          <div key={index} className="security-card">
            <i className={service.icon}></i>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Security;