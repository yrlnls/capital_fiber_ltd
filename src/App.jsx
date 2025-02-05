import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Packages from './Packages';
import Security from './Security';

function App() {
  return (
    <>
      <header>
        <img src="/CapitalLogo1.jpeg" alt="Capital Fiber Solutions Logo" className="logo" />
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#packages">Packages</a></li>
          </ul>
        </nav>
      </header>
      <Home />
      <About />
      <Services />
      <Packages />
      <Security />
    </>
  );
}

export default App;
