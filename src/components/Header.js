import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/icons/gro_logo.svg';
import './Header.css';

function Header() {
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [isCtaAndFooterVisible, setIsCtaAndFooterVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = ['Home', 'About Us', 'Services', 'Info Center'];
   
  const servicesItems = [
    { 
      id: 'income-tax-returns',
      title: 'Income Tax Returns',
    },
    { 
      id: 'accounting-bookkeeping',
      title: 'Accounting & Bookkeeping',
    },
    { 
      id: 'gst-filing',
      title: 'GST Returns',
    },
    { 
      id: 'tax-advisory',
      title: 'Tax Advisory',
    },
    { 
      id: 'incorporation-services',
      title: 'Incorporation Services',
    },
    { 
      id: 'financial-due-diligence',
      title: 'Financial Due Diligence',
    },
    { 
      id: 'trademark-services',
      title: 'Trademark Services',
    },
    { 
      id: 'tax-litigation',
      title: 'Tax Litigation',
    },
    { 
      id: 'dsc',
      title: 'Digital Signature Certificate',
    },
  ];

  const handleCtaClick = () => {
    const ctaElement = document.querySelector('.cta');
    if (ctaElement) {
      ctaElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close menu after clicking
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false); // Close menu when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.header')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const ctaObserver = new IntersectionObserver(
      (entries) => {
        const ctaEntry = entries.find((entry) => entry.isIntersecting);
        const footerObserver = new IntersectionObserver(
          ([footerEntry]) => {
            setIsCtaAndFooterVisible(ctaEntry?.isIntersecting && footerEntry.isIntersecting);
          },
          { root: null, threshold: 0.1 }
        );

        const footerElement = document.querySelector('.footer');
        if (footerElement) footerObserver.observe(footerElement);

        return () => {
          if (footerElement) footerObserver.unobserve(footerElement);
        };
      },
      { root: null, threshold: 0.1 }
    );

    const ctaElements = document.querySelectorAll('.cta');
    ctaElements.forEach((el) => ctaObserver.observe(el));

    return () => {
      ctaElements.forEach((el) => ctaObserver.unobserve(el));
    };
  }, [location.pathname]);

  return (
    <header className={`header ${isCtaAndFooterVisible ? 'header--cta-visible' : ''}`}>
      {/* Logo and Company Name */}
      <div className="header__logo">
        <img src={logo} alt="GRO Associates Logo" width="35" height="35" />
        <span className="header__company-name">GRO Associates</span>
      </div>

      {/* Desktop Navigation */}
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
                    key={service.id}
                    to={`/services/${service.id}`}
                    className="header__services-item"
                  >
                    {service.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Desktop CTA Button */}
      <button className="header__cta header__cta--desktop" onClick={handleCtaClick}>
        Get a Quote
      </button>

      {/* Mobile Hamburger Menu */}
      <button 
        className={`header__hamburger ${isMobileMenuOpen ? 'header__hamburger--open' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span className="header__hamburger-line"></span>
        <span className="header__hamburger-line"></span>
        <span className="header__hamburger-line"></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="header__mobile-overlay">
          <nav className="header__mobile-nav">
            {navItems.map((item) => (
              <div key={item} className="header__mobile-nav-item-wrapper">
                { 
                  <NavLink
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className={({ isActive }) =>
                      `header__mobile-nav-item ${isActive ? 'active' : ''}`
                    }
                    onClick={handleNavClick}
                  >
                    {item}
                  </NavLink>
                }
              </div>
            ))}
            <button className="header__cta header__cta--mobile" onClick={handleCtaClick}>
              Get a Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;