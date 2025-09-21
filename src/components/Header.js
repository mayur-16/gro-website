import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/icons/gro_logo.svg';
import './Header.css';

function Header() {
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [isCtaAndFooterVisible, setIsCtaAndFooterVisible] = useState(false);
  const location = useLocation();

  const navItems = ['Home', 'About Us', 'Services', 'Info Center'];
  // const servicesItems = [
  //   'Income Tax Returns',
  //   'Accounting & Bookkeeping',
  //   'GST Returns',
  //   'Tax Advisory',
  //   'Incorporation Services',
  //   'Financial Due Diligence',
  //   'Trademark Services',
  //   'Tax Litigation',
  //   'Digital Signature',
  // ];
   
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
  };

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
  }, [location.pathname]); // Re-run effect on route change

  return (
    <header className={`header ${isCtaAndFooterVisible ? 'header--cta-visible' : ''}`}>
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
                { servicesItems.map((service) => (
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
      <button className="header__cta" onClick={handleCtaClick}>Get a Quote</button>
    </header>
  );
}

export default Header;