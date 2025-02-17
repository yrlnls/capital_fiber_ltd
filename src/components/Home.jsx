import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; 
import '../App.css';

function Home() {
  return (
    <div id="home">
      <div className="hero-section" style={{ 
        backgroundImage: "url('/pexels-scottwebb-430208.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="hero-content" style={{ 
          backgroundColor: 'rgba(0, 51, 102, 0.8)',
          padding: '40px',
          borderRadius: '10px',
          display: 'inline-block'
        }}>
          <img src="/CapitalLogo1.jpeg" alt="Capital Fiber Solutions Logo" className="logo img-fluid" style={{ maxWidth: '200px' }} />
          <h1 className="display-4" style={{ margin: '20px 0' }}>
            Connect. Secure. Thrive.
          </h1>
          <p className="lead" style={{ fontSize: '1.25rem', marginBottom: '30px' }}>
            Your trusted partner for high-speed fiber internet and advanced security solutions
          </p>
          <a 
            href="#packages" 
            className="cta-button" 
            style={{
              backgroundColor: '#ff6b35',
              color: 'white',
              padding: '15px 30px',
              borderRadius: '5px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => e.target.style.backgroundColor = '#e65a2e'}
            onMouseLeave={e => e.target.style.backgroundColor = '#ff6b35'}
          >
            Get Started Today
          </a>
        </div>
      </div>

      <div className="key-benefits" style={{
        padding: '60px 20px',
        backgroundColor: '#f8f9fa',
        color: '#003366',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '40px' }}>Why Choose Us?</h2>
        <div className="benefits-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div className="benefit-card">
            <i className="fa fa-tachometer" style={{ fontSize: '3rem', marginBottom: '20px' }}></i>
            <h3>Blazing Fast Speeds</h3>
            <p>Experience seamless connectivity with our high-speed fiber internet</p>
          </div>
          <div className="benefit-card">
            <i className="fa fa-shield" style={{ fontSize: '3rem', marginBottom: '20px' }}></i>
            <h3>Advanced Security</h3>
            <p>Protect what matters most with our cutting-edge security solutions</p>
          </div>
          <div className="benefit-card">
            <i className="fa fa-headset" style={{ fontSize: '3rem', marginBottom: '20px' }}></i>
            <h3>24/7 Support</h3>
            <p>Our dedicated team is always ready to assist you</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
