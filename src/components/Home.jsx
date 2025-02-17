import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../App.css';

function Home() {
  return (
    <div id="home">
      <div className="hero-section" style={{ 
        backgroundImage: "url('/pexels-scottwebb-430208.jpg')"
      }}>
        <div className="hero-content">
          <img src="/CapitalLogo1.jpeg" alt="Capital Fiber Solutions Logo" className="logo img-fluid" />
          <h1 className="display-4">Connect. Secure. Thrive.</h1>
          <p className="lead">
            Your trusted partner for high-speed fiber internet and advanced security solutions
          </p>
          <a href="#packages" className="cta-button">
            Get Started Today
          </a>
        </div>
      </div>

      <div className="key-benefits">
        <h2>Why Choose Us?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <i className="fa fa-tachometer"></i>
            <h3>Blazing Fast Speeds</h3>
            <p>Experience seamless connectivity with our high-speed fiber internet</p>
          </div>
          <div className="benefit-card">
            <i className="fa fa-shield"></i>
            <h3>Advanced Security</h3>
            <p>Protect what matters most with our cutting-edge security solutions</p>
          </div>
          <div className="benefit-card">
            <i className="fa fa-headset"></i>
            <h3>24/7 Support</h3>
            <p>Our dedicated team is always ready to assist you</p>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="testimonials-section">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"The internet speed is incredible! Never experienced anything like it before."</p>
              <div className="testimonial-author">
                <img src="/pexels-geekymegt-11261834.jpg" alt="Customer" />
                <span>John Doe</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"Their security solutions gave me peace of mind for my business."</p>
              <div className="testimonial-author">
                <img src="/pexels-mallonymedia-9537493.jpg" alt="Customer" />
                <span>Jane Smith</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"24/7 support is a lifesaver. Always there when I need them!"</p>
              <div className="testimonial-author">
                <img src="/pexels-sonny-15266411.jpg" alt="Customer" />
                <span>Michael Johnson</span>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>10,000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-card">
              <h3>99.9%</h3>
              <p>Uptime Guarantee</p>
            </div>
            <div className="stat-card">
              <h3>24/7</h3>
              <p>Support Availability</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
