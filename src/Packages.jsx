import React from 'react';
import './Packages.css'; // Create a separate CSS file for packages

function Packages() {
  return (
    <section id="packages">
      <h2>Our Internet Packages</h2>
      <div className="package-cards">
        <div className="package-card">
          <h3>Upto 4Mbps</h3>
          <p>kshs 1500/month</p>
        </div>
        <div className="package-card">
          <h3>Upto 6Mbps</h3>
          <p>kshs 2000/month</p>
        </div>
        <div className="package-card">
          <h3>Upto 10Mbps</h3>
          <p>kshs 3000/month</p>
        </div>
        <div className="package-card">
          <h3>Router</h3>
          <p>kshs 2500</p>
        </div>
      </div>
    </section>
  );
}

export default Packages;
