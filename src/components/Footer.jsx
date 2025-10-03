import { FaPhoneAlt } from 'react-icons/fa';

import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h1>HAMID MALIK</h1>
          <p>Designs that inspire, connect, and leave a lasting impression.</p>
          <div className="contact-info">
            <h2 className="contact-number">Contact Number</h2>
            <div className="phone-number">
              <FaPhoneAlt /> +92 314 3427293
            </div>
          </div>
        </div>

        {/* <div className="footer-right">
          <h3>Follow Me</h3>
          <div className="social-links">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div> */}
      </div>

      <div className="footer-bottom">
        <p>© 2025 HAMID MALIK. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
