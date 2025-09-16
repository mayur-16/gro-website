import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/icons/gro_logo.svg'; // Adjust to your logo file name
import './Header.css';

function Header() {
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const navItems = ['Home', 'About Us', 'Services', 'Info Center'];
  const servicesItems = [
    'Income Tax Returns',
    'Accounting & Bookkeeping',
    'GST Returns',
    'Tax Advisory',
    'Incorporation Services',
    'Financial Due Diligence',
    'Trademark Services',
    'Tax Litigation',
    'Digital Signature',
  ];

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="GRO Associates Logo" width="35" height="35" />
        <span className="header__company-name">GRO Associates</span>
      </div>
      <nav className="header__nav">
        {navItems.map((item) => (
          <div
            key={item}
            className="header__nav-item-wrapper"
            onMouseEnter={() => item === 'Services' && setShowServicesMenu(true)}
            onMouseLeave={() => item === 'Services' && setShowServicesMenu(false)}
          >
            <NavLink
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              className={({ isActive }) =>
                `header__nav-item ${isActive ? 'active' : ''}`
              }
            >
              {item}
            </NavLink>
            {item === 'Services' && showServicesMenu && (
              <div className="header__services-menu">
                {servicesItems.map((service) => (
                  <NavLink
                    key={service}
                    to="/services"
                    className="header__services-item"
                  >
                    {service}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <button className="header__cta">Get a Quote</button>
    </header>
  );
}

export default Header;