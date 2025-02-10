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
      <header className="header">
        <img src="/CapitalLogo1.jpeg" alt="Capital Fiber Solutions Logo" className="logo" />
        <p className="customer-service">CUSTOMER SERVICE 24/7: 0714001616/0112274074</p>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#packages" className="nav-link">Packages</a></li>
            <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
            <li className="nav-item"><a href="#footer" className="nav-link">Contact Us</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">About Us</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Home />
        <Services />
        <Packages />
        <Security />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;