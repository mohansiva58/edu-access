import React from 'react';
import { GraduationCap } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div className="footer-column">
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Courses</a></li>
              <li><a href="#" className="footer-link">Study Materials</a></li>
              <li><a href="#" className="footer-link">Tutorials</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">Community</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Forums</a></li>
              <li><a href="#" className="footer-link">Events</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Help Center</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
              <li><a href="#" className="footer-link">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">Legal</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms of Service</a></li>
              <li><a href="#" className="footer-link">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-brand">
            <GraduationCap className="icon" />
            <span className="brand-name">EduAccess</span>
          </div>
          <p className="footer-copy">&copy; 2024 EduAccess. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/mohansiva58" className="social-link">Github</a>
            <a href="#" className="social-link">Facebook</a>
            <a href="http://www.linkedin.com/in/mohansiva-thota-8b41b4322" className="social-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
