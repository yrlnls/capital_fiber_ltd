import React from 'react';
import Services from './Services'; // Importing Services component
import './App.css';
import Home from './Home';
import About from './About';
// import Services from './Services';
import Packages from './Packages';
import Security from './Security';

function App() {
  return (
    <>
      <Home />
      <About />
      <Services /> {/* Including Services component */}
      {/* <Services /> */}
      <Packages />
      <Security />
    </>
  );
}

export default App;
