import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome

function Home() {
  return (
    <section id="home">
      <img src="/CapitalLogo1.jpeg" alt="Capital Fiber Solutions Logo" className="logo" />
      <h2>
        <i className="fa fa-home" style={{ fontSize: '2rem' }}></i> {/* Increased icon size */}
        Welcome to Capital Fiber Solutions
      </h2>
      <p>Your reliable provider of high-speed fiber internet and security solutions.</p>
    </section>
  );
}

export default Home;
