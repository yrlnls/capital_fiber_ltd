import React from 'react';
import './Security.css'; // Create a separate CSS file for security
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome

function Security() {
  return (
    <section id="security">
      <h2>Security Solutions</h2>
      <h3>CCTV Setups</h3>
      <div className="security-cards">
        <div className="security-card">
          <i className="fa fa-camera"></i> {/* Added icon class */}
          <h4>Face Reader Setup</h4>
          <p>Advanced facial recognition technology for secure access control.</p>
        </div>
        <div className="security-card">
          <i className="fa fa-video-camera"></i> {/* Added icon class */}
          <h4>IP Camera Setup</h4>
          <p>High-definition IP cameras for remote monitoring and recording.</p>
        </div>
        <div className="security-card">
          <i className="fa fa-fingerprint"></i> {/* Added icon class */}
          <h4>Biometric Attendance Setup</h4>
          <p>Secure attendance tracking using biometric technology.</p>
        </div>
        <div className="security-card">
          <i className="fa fa-lock"></i> {/* Added icon class */}
          <h4>Video Door Lock Setup</h4>
          <p>Enhanced security with video door locks for homes and offices.</p>
        </div>
        <div className="security-card">
          <i className="fa fa-camera-retro"></i> {/* Added icon class */}
          <h4>Analog Camera Setup</h4>
          <p>Traditional analog cameras for reliable surveillance solutions.</p>
        </div>
        <div className="security-card">
          <i className="fa fa-video"></i> {/* Added icon class */}
          <h4>HD-CVI Camera Setup</h4>
          <p>High-definition composite video interface cameras for superior quality.</p>
        </div>
      </div>
      <h3>Electric Fence Services</h3>
      <div className="security-cards">
        <div className="security-card">
          <i className="fa fa-shopping-cart"></i> {/* Added icon class */}
          <h4>Sales</h4>
          <p>Providing the latest electric fence technology and products.</p>
        </div>
        <div className="security-card">
          <i className="fa fa-wrench"></i> {/* Added icon class */}
          <h4>Installation</h4>
          <p>Professional installation services for effective security solutions.</p>
        </div>
        <div className="security-card">
          <i className="fa fa-cogs"></i> {/* Added icon class */}
          <h4>Maintenance</h4>
          <p>Regular maintenance services to ensure optimal performance of electric fences.</p>
        </div>
      </div>
    </section>
  );
}

export default Security;
