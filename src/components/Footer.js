import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/icons/gro_logo.svg';
import linkedinLogo from '../assets/icons/linkedin_logo.svg';
import instagramLogo from '../assets/icons/instagram_logo.svg';
import './Footer.css';

function Footer() {
  const navItems = ['Home', 'About', 'Services'];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <div className="footer__logo">
            <img src={logo} alt="GRO Associates Logo" width="35" height="35" />
            <span className="footer__company-name">GRO Associates</span>
          </div>
          <p className="footer__address">Upper Basement, Inland Galore Below Swadisht Restaurant, Kankanady
            Bypass Road Kankanady, Pumpwell, Mangaluru, Karnataka 575002
          </p>
        </div>
        <div className="footer__right">
          <div className="footer__nav">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className="footer__nav-item"
              >
                {item}
              </NavLink>
            ))}
          </div>
          <div className="footer__social">
            <a
              href="https://www.linkedin.com/in/mayur-acharya-88a0a2183"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img src={linkedinLogo} alt="LinkedIn" width="30" height="30" />
            </a>
            <a
              href="https://www.instagram.com/mr.tequra"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img src={instagramLogo} alt="Instagram" width="30" height="30" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__trademark">
        © 2025 GRO Associates. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;