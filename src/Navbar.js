import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Function to close the menu when navigating
  const handleNavClick = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => handleNavClick('/')}>
          <GraduationCap className="icon" />
          <span className="logo-text">EDU-ACCESS</span>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? '✖️' : '☰'}
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" className="nav-link" onClick={() => handleNavClick('/')}>Home</Link></li>
          <li><Link to="/resources" className="nav-link" onClick={() => handleNavClick('/resources')}>Resources</Link></li>
          <li><Link to="/apps" className="nav-link" onClick={() => handleNavClick('/apps')}>Roadmaps</Link></li>
          <li><Link to="/mentorship" className="nav-link" onClick={() => handleNavClick('/mentorship')}>Internship</Link></li>
          <li><Link to="/community" className="nav-link" onClick={() => handleNavClick('/community')}>Community</Link></li>
          <li><Link to="/analytics" className="nav-link" onClick={() => handleNavClick('/analytics')}>About</Link></li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
