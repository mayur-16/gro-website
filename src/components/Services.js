import React from 'react';
import { Link } from 'react-router-dom';
import CTA from './CTA';
import servicesBg from '../assets/images/our_services_background_image.svg';
import groLogoBig from '../assets/icons/gro_logo_big.svg';
import { FaAngleRight } from 'react-icons/fa';
import './Services.css';

function Services() {
  const services = [
    {
      id: 'dsc',
      title: 'Digital Signature Certificate (DSC)',
      subtitle: 'Get Your DSC Online, Fast!',
    },
    {
      id: 'tax-advisory',
      title: 'Tax Advisory',
      subtitle: 'Your Strategic Tax Partner.',
    },
    {
      id: 'incorporation-services',
      title: 'Incorporation Services',
      subtitle: 'Launch Your Dream Business!',
    },
     {
      id: 'gst-filing',
      title: 'GST Returns',
      subtitle: 'Master Your GST Compliance.',
    },
    {
      id: 'income-tax-returns',
      title: 'Income Tax Returns',
      subtitle: "Let's get your taxes filed right, hassle-free, under 59 minutes.",
    },
    {
      id: 'accounting-bookkeeping',
      title: 'Accounting & Bookkeeping',
      subtitle: 'Clarity & Control Over Your Finances.',
    },
    {
      id: 'financial-due-diligence',
      title: 'Financial Due Diligence (FDD)',
      subtitle: 'Invest & Acquire with Confidence.',
    },
    {
      id: 'trademark-services',
      title: 'Trademark Services',
      subtitle: 'Protect your unique brand name and logo – let’s secure your trademark registration in India.',
    },
    {
      id: 'tax-litigation',
      title: 'Tax Litigation',
      subtitle: 'Defend Your Rights in Tax Disputes.',
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
      <CTA calledFromAboutUs={false} />
    </section>
  );
}

export default Services;