import React from 'react';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css'; 

function Packages() {
  const packages = [
    { id: 1, speed: 'Upto 4Mbps', price: 'kshs 1500/month', icon: 'fa fa-signal' },
    { id: 2, speed: 'Upto 6Mbps', price: 'kshs 2000/month', icon: 'fa fa-signal' },
    { id: 3, speed: 'Upto 10Mbps', price: 'kshs 3000/month', icon: 'fa fa-signal' },
    { id: 4, speed: 'Router', price: 'kshs 2500', icon: 'fa fa-router' },
  ];

  return (
    <section id="packages">
      <h2>Our Internet Packages</h2>
      <div className="package-cards">
        {packages.map((packageItem) => (
          <div key={packageItem.id} className="package-card">
            <i className={packageItem.icon}></i> 
            <h3>{packageItem.speed}</h3>
            <p>{packageItem.price}</p>
            <button><a href='https://wa.me/+254714001616'>{packageItem.id === 4 ? 'Buy' : 'Get Connected'}</a></button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Packages;
