import './App.css'
import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="contact">
        <h3>Contact Us</h3>
        <p>123 Main St.</p>
        <p>Anytown, USA 12345</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@example.com</p>
      </div>
      <div className="about">
        <h3>About Us</h3>
        <p>We are a company that specializes in creating custom React applications for our clients. Our team of experienced developers is dedicated to providing high-quality solutions that meet your needs.</p>
      </div>
    </footer>
  );
}

export default Footer;