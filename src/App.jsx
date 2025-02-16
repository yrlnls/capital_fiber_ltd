import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Packages from './components/Packages';
import Security from './components/Security';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <header className="header">
        <img src="/CapitalLogo1.jpeg" alt="Capital Fiber Solutions Logo" className="logo" />
        <p className="customer-service">CUSTOMER SERVICE 24/7: 0714001616/0112274074</p>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="/packages" className="nav-link">Packages</a></li>
            <li className="nav-item"><a href="/services" className="nav-link">Services</a></li>
            <li className="nav-item"><a href="/contact" className="nav-link">Contact Us</a></li>
            <li className="nav-item"><a href="/about" className="nav-link">About Us</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/security" element={<Security />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Footer />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;