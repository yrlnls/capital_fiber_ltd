import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; 

function Home() {
  return (
    <section id="home" className="container">
      <img src="/CapitalLogo1.jpeg" alt="Capital Fiber Solutions Logo" className="logo img-fluid" />
      <h2 className="display-4">
        <i className="fa fa-home" style={{ fontSize: '2rem' }}></i> 
        Welcome to Capital Fiber Solutions
      </h2>
      <p className="lead">Your reliable provider of high-speed fiber internet and security solutions.</p>
    </section>
  );
}

export default Home;