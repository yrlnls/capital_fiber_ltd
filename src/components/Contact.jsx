import React from 'react';
import './Contact.css';
import 'font-awesome/css/font-awesome.min.css'; 

function Contact() {
  return (
    <div className="contact-container">
      <div>Our Contacts:</div>
      <ul>
        <li><i className="fa fa-envelope"></i> Email: netsmartslutions@gmail.com</li> {/* Added icon class */}
        <li><i className="fa fa-phone"></i> Phone: 0714001616/0112274074</li> {/* Added icon class */}
      </ul>  
    </div>
  );
}

export default Contact;
