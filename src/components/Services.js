import React from 'react';
import { Link } from 'react-router-dom';
import CTA from './CTA';
import servicesBg from '../assets/images/our_services_background_image.svg';
import groLogoBig from '../assets/icons/gro_logo_big.svg';
import { FaAngleRight } from 'react-icons/fa';
import './Services.css';

function Services({ onOpenPopup }) {
  const services = [
    
    {
      id: 'tax-advisory',
      title: 'Tax Advisory',
      subtitle: 'Your strategic tax partner.',
    },
    {
      id: 'incorporation-services',
      title: 'Incorporation Services',
      subtitle: 'Launch your dream business!',
    },
     {
      id: 'gst-filing',
      title: 'GST Returns',
      subtitle: 'Master your GST compliance.',
    },
    {
      id: 'income-tax-returns',
      title: 'Income Tax Returns',
      subtitle: "Let's get your taxes filed right, hassle-free, under 59 minutes.",
    },
    {
      id: 'accounting-bookkeeping',
      title: 'Accounting & Bookkeeping',
      subtitle: 'Clarity & control over your finances.',
    },
    {
      id: 'financial-due-diligence',
      title: 'Financial Due Diligence (FDD)',
      subtitle: 'Invest & acquire with confidence.',
    },
    {
      id: 'trademark-services',
      title: 'Trademark Services',
      subtitle: 'Protect your unique brand name and logo – let’s secure your trademark in india.',
    },
    {
      id: 'tax-litigation',
      title: 'Tax Litigation',
      subtitle: 'Defend your rights in tax disputes.',
    },
   {
      id: 'dsc',
      title: 'Digital Signature Certificate (DSC)',
      subtitle: 'Get your DSC online, fast!',
    },
  ];

  return (
    <section className="services">
      <div className="services__container">
        <div className="services__image-row">
          <img
            src={servicesBg}
            alt="Services Background"
            className="services__bg-image"
          />
          <img
            src={groLogoBig}
            alt="GRO Logo Big"
            className="services__logo-big"
          />
        </div>
        <div className="services__cards">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="services__card"
            >
              <div className="services__card-content">
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-subtitle">{service.subtitle}</p>
              </div>
              <FaAngleRight className="services__card-arrow" />
            </Link>
          ))}
        </div>
      </div>
      <CTA calledFromAboutUs={false} onOpenPopup={onOpenPopup}/>
    </section>
  );
}

export default Services;