import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/icons/gro_logo.svg';
import linkedinLogo from '../assets/icons/linkedin_logo.svg';
import instagramLogo from '../assets/icons/instagram_logo.svg';
import './Footer.css';

function Footer() {
  const navItems = ['Home', 'About', 'Services'];
  
  // Location coordinates
  const latitude = 12.869712;
  const longitude = 74.862353;

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMapClick = () => {
    // Open Google Maps app on mobile
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <footer className="footer">
      {/* Desktop Layout */}
      <div className="footer__container">
        <div className="footer__left">
          <div className="footer__logo">
            <img src={logo} alt="GRO Associates Logo" width="35" height="35" />
            <span className="footer__company-name">GRO Associates</span>
          </div>
          <p className="footer__address">
            Upper Basement, Inland Galore Below Swadisht Restaurant, Kankanady
            Bypass Road Kankanady, Pumpwell, Mangaluru, Karnataka 575002
          </p>
        </div>
        <div className="footer__right">
          <div className="footer__nav">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={item === 'About' ? `/about-us` : `/${item.toLowerCase().replace(' ', '-')}`}
                className="footer__nav-item"
                onClick={handleNavClick}
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

      {/* Mobile Layout - Only visible on mobile */}
      <div className="footer__map-preview">
        <p className="footer__address">
          Upper Basement, Inland Galore Below Swadisht Restaurant, Kankanady
          Bypass Road Kankanady, Pumpwell, Mangaluru, Karnataka 575002
        </p>
        
        <div className="footer__map-card" onClick={handleMapClick}>
          <iframe
            className="footer__map-image"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.8!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzExLjAiTiA3NMKwNTEnNDQuNSJF!5e0!3m2!1sen!2sin!4v1234567890`}
            title="GRO Associates Location"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="footer__trademark">
        © 2025 GRO Associates. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;