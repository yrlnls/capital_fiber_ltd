import React from 'react';
import './Packages.css'; // Ensure to use the updated CSS file

function Packages() {
  return (
    <section id="packages">
      <h2>Our Internet Packages</h2>
      <div className="package-cards">
        <div className="package-card">
          <h3>Upto 4Mbps</h3>
          <p>kshs 1500/month</p>
          <button>Get Connected</button>
        </div>
        <div className="package-card">
          <h3>Upto 6Mbps</h3>
          <p>kshs 2000/month</p>
          <button>Get Connected</button>
        </div>
        <div className="package-card">
          <h3>Upto 10Mbps</h3>
          <p>kshs 3000/month</p>
          <button>Get Connected</button>
        </div>
        <div className="package-card">
          <h3>Router</h3>
          <p>kshs 2500</p>
          {/* <button>Get Connected</button> */}
        </div>
      </div>
    </section>
  );
}

export default Packages;
