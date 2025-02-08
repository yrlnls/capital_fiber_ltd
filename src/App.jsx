import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Packages from './components/Packages';
import Security from './components/Security';
import Footer from './components/Footer'; 

function App() {
  return (
    <>
      <header>
        <img src="/CapitalLogo1.jpeg" alt="Capital Fiber Solutions Logo" className="logo" />
        <p>CUSTOMER SERVICE 24/7: 0714001616/0112274074</p>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#footer">Contact Us</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </nav>
      </header>
      <Home />
      <Services />
      <Packages />
      <Security />
      <About />
      <Footer />
    </>
  );
}

export default App;
