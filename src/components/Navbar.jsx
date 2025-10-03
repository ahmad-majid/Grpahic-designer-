import  { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Navbar.css'; 
import logo from '../assets/logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`navbar ${isOpen ? 'navbar-open' : ''}`}>
        <div className="navbar-left">
         <img src={logo} alt="HAMID MALIK Logo" className="logo-img" />

          <Link to="/" className="logo-text">HAMID MALIK</Link> {/* Make logo text a link */}
          
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          {isOpen ? '×' : '☰'}
        </button>
        <div className={`navbar-right ${isOpen ? 'show' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/contact" className="nav-link contact-button">Contact</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
