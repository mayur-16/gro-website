import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import {IoArrowForwardCircleOutline} from 'react-icons/io5'
import './ServicesTestimonials.css';

function ServicesTestimonials() {
  const services = [
    {
      id: 'income-tax-returns',
      title: 'Income Tax Returns',
      subtitle: "Let's get your taxes filed right, hassle-free, under 59 minutes.",
    },
    {
      id: 'accounting-bookkeeping',
      title: 'Accounting & Bookkeeping',
      subtitle: 'Get clear financial insights & effortless bookkeeping.',
    },
    {
      id: 'gst-filing',
      title: 'GST Returns',
      subtitle: 'We handle your GST, so you stay compliant & stress-free.',
    },
    {
      id: 'tax-advisory',
      title: 'Tax Advisory',
      subtitle: 'Plan proactively & optimize your Tax Strategy with expert assistance.',
    },
    {
      id: 'incorporation-services',
      title: 'Incorporation Services',
      subtitle: "Ready to launch? Let's get your business set up correctly.",
    },
    {
      id: 'financial-due-diligence',
      title: 'Financial Due Diligence',
      subtitle: 'Invest or acquire confidently with our deep-dive financial analysis.',
    },
    {
      id: 'trademark-services',
      title: 'Trademark Services',
      subtitle: 'Protect your unique brand – let\'s secure your trademark.',
    },
    {
      id: 'tax-litigation',
      title: 'Tax Litigation',
      subtitle: 'Facing a tax dispute? We\'re here to represent & resolve it.',
    },
  ];

  const testimonials = [
    {
      name: 'Shanon Dsouza',
      rating: 5,
      text: 'Filed my income tax return with GRO Associates. Their response was quick and answered all my queries and filed my tax return really fast, even though I sent out my documents two weeks before the deadline. Everything was done in a matter of two days. All in all it was a great experience and I will surely opt for their services in the future too!'
    },
    {
      name: 'Rakshith B.S.',
      rating: 5,
      text: 'I preferred to file ITR online. But was confused when the Old/New tax regimes were introduced. So I had to submit ITR with some guidance. I\'m glad I chose GRO associates and Mr. Rathan assisted with my queries and helped me in filing the ITR. I\'ll be continuing with GRO associates henceforth. Looking forward to utilize their service in future for my taxation needs!'
    },
    {
      name: 'Dharan Rai',
      rating: 5,
      text: 'GRO Associates are very professional, Very responsive. They have gone into great details on my tax filing. Filed my tax on short time and it was a great experience working with them. Looking forward to continue to work with GRO Associates Team.'
    },
    {
      name: 'Hassan Lumber',
      rating: 5,
      text: 'GRO Associates helped me in formation of OPC and provided good consultation on Statutory Compliance and ROC Compliance. Their service was prompt and professionally delivered as promised to us.'
    },
    {
      name: 'Sunil Kumar',
      rating: 5,
      text: 'My Accounting and GST returns are being taken care at GRO without any trouble since last 4 years.'
    },
    {
      name: 'Prathviraj Shastry',
      rating: 5,
      text: 'I had a great experience filing my ITR through gro. Mr Ratan and his team made the process so smooth. Highly recommend him for anyone looking for a CA'
    },
    {
      name: 'Arpith Shetty',
      rating: 5,
      text: 'I\'m very pleased with GRO\'s responsiveness and breadth knowledge. They followed through on every step he promised and he helped explain some key tax points which I had no idea about. It\'s one thing to get an answer to your questions.'
    },
    {
      name: 'Satish Nair',
      rating: 5,
      text: 'Ratan and GRO Associates are thorough experienced and dedicated professionals. They helped me in filing my Professional tax returns after I received a notice from commercial tax dept.'
    },
    {
      name: 'Sarita Pasupuleti',
      rating: 5,
      text: 'Rathan and GRO Associates have been helping me file ITR from past 7 years. GRO team is very professional, prompt and approachable.'
    },
    {
      name: 'G.V. Nishok',
      rating: 5,
      text: 'Helped me set up my architectural firm in a very comprehensive and methodical fashion. Brought a sense of professionalism to my work. All this was possible without any hiccups, made it so easy and seamless even for young professionals like me. Looking forward to grow with GRO.'
    },
    {
      name: 'Vidhata Sharma',
      rating: 5,
      text: 'Best CA firm in Mangalore. Excellent work. Keep it up. Returns filing made very easy. Great transparency & great commitment to work.'
    }
    
  ];

  const clientLogos = [
    'clientlogo1', 'clientlogo2', 'clientlogo3', 'clientlogo4', 'clientlogo5',
    'clientlogo6', 'clientlogo7', 'clientlogo8', 'clientlogo9', 'clientlogo10'
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar 
        key={index} 
        className={`testimonial__star ${index < rating ? 'testimonial__star--filled' : ''}`}
      />
    ));
  };

  return (
    <section className="services-testimonials">
      {/* We Offer Section */}
      <div className="services-testimonials__offer">
        <div className="services-testimonials__container">
          <h2 className="services-testimonials__title">We offer</h2>
          <div className="services-testimonials__cards">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="services-testimonials__card"
              >
                <div className="services-testimonials__card-content">
                  <h3 className="services-testimonials__card-title">{service.title}</h3>
                  <p className="services-testimonials__card-subtitle">{service.subtitle}</p>
                  <div className="services-testimonials__card-action">
                    <span className="services-testimonials__card-link">Know more</span>
                    <IoArrowForwardCircleOutline className="services-testimonials__card-arrow" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p className="services-testimonials__expertise">
            Our expertise includes digital signatures, income tax e-filing assistance, corporate tax advisory, financial due diligence for M&A, DSC procurement, seamless LLP registration, export GST return filing, and dedicated tax dispute resolution.
          </p>
        </div>
      </div>

      {/* Our Client Section */}
      <div className="services-testimonials__client">
        <div className="services-testimonials__container">
          <h2 className="services-testimonials__title services-testimonials__title--client">Our Client</h2>
          <div className="services-testimonials__testimonials">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="services-testimonials__testimonial">
                <h4 className="testimonial__name">{testimonial.name}</h4>
                <div className="testimonial__rating">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="testimonial__text">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Logos Section */}
      <div className="services-testimonials__logos">
          <div className="services-testimonials__logo-grid">
            {clientLogos.map((logo, index) => (
              <div key={index} className="services-testimonials__logo-item">
                <img 
                  src={require(`../assets/icons/${logo}.png`)} 
                  alt={`Client ${index + 1}`}
                  className="services-testimonials__logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
       </div>
    </section>
  );
}

export default ServicesTestimonials;