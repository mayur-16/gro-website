import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaAngleLeft ,FaCheckSquare } from 'react-icons/fa';
import {IoArrowForwardCircleOutline} from 'react-icons/io5'
import groLogoBig from '../assets/icons/gro_logo_big.svg';
import CTA from './CTA';
import './ServiceDetail.css';

function ServiceDetail() {
  const { serviceId } = useParams();


   const handleCtaClick = () => {
    const ctaElement = document.querySelector('.cta');
    if (ctaElement) {
      ctaElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const servicesData = {
    'income-tax-returns': {
      title: 'Income Tax Returns',
      subtitle: "File Your ITR in 59 Minutes! Don't pay more than what's necessary",
      description:
        "Streamline your financial management with GRO's professional accounting and bookkeeping services. We meticulously handle accounts payable and receivable management, payroll processing, bank reconciliation, and maintain precise financial records. Our certified bookkeepers deliver accurate, up-to-date insights via efficient outsourced accounting solutions, enabling informed business decisions and ensuring continuous tax and regulatory compliance.",
      keyBenefits: [
        'Speed & Convenience: Streamlined online process, aim for quick turnaround.',
        'Accuracy Guaranteed: Expert review to minimize errors & ensure compliance.',
      ],
      howItWorks: [
        {
          title: 'Submit Your Details',
          description:
            'Fill in your basic financial details and provide the necessary documents.',
        },
        {
          title: 'Processing & Verification',
          description:
            'We quickly analyze your data, cross check compliance and revert in case of any additional documents or explanations.'
        },
        {
            title:'Expert Review & Optimization',
            description:"A tax expert reviews your filing, ensuring maximum deductions and accurate returns, so you don't pay more than necessary."
        },
        {
            title: 'Approval & E-Filing',
            description:'Once you confirm the details, we file your IT return with the Income Tax Department, and you receive an instant acknowledgment.'
        },
        {
            title: 'Confirmation & Support',
            description:"You'll receive a confirmation email with your ITR filing status and next steps. Need help? Our experts are available at no extra cost!"
        }
        
      ],
    },
    // Add placeholders for other services
    'dsc': { title: 'Digital Signature Certificate (DSC)', subtitle: '', description: '', keyBenefits: [], howItWorks: [] },
    'tax-advisory': { title: 'Tax Advisory', subtitle: '', description: '', keyBenefits: [], howItWorks: [] },
    'incorporation-services': { title: 'Incorporation Services', subtitle: '', description: '', keyBenefits: [], howItWorks: [] },
    'gst-filing': { title: 'GST Returns', subtitle: '', description: '', keyBenefits: [], howItWorks: [] },
    'accounting-bookkeeping': { title: 'Accounting & Bookkeeping', subtitle: 'Clarity & Control Over Your Finances.',
         description: "Streamline your financial management with GRO's professional accounting and bookkeeping services. "+
         "We meticulously handle accounts payable and receivable management, payroll processing, bank reconciliation, and maintain precise financial records. "+
         "Our certified bookkeepers deliver accurate, up-to-date insights via efficient outsourced accounting solutions, enabling informed business decisions and ensuring continuous tax and regulatory compliance.", 
         keyBenefits: [
            "Accurate Records: Meticulous management of AP/AR, expenses, and financial transactions.",
            "Real-Time Insights: Up-to-date books for informed business decision-making.",
            "Compliance Ready: Ensure records meet tax and regulatory requirements effortlessly.",
            "Time Savings: Outsource tedious bookkeeping tasks and focus on your core business.",
            "Payroll Management: Accurate and timely payroll processing.",
         ], howItWorks: [
            {
          title: 'Submit Your Details',
          description:
            'Fill in your basic financial details and provide the necessary documents.',
        },
        {
          title: 'Processing & Verification',
          description:
            'We quickly analyze your data, cross check compliance and revert in case of any additional documents or explanations.',
          optionalDescription: "Don't pay more than what's necessary",
        },
        {
            title:'Expert Review & Optimization',
            description:"A tax expert reviews your filing, ensuring maximum deductions and accurate returns, so you don't pay more than necessary."
        },
        {
            title: 'Approval & E-Filing',
            description:'Once you confirm the details, we file your IT return with the Income Tax Department, and you receive an instant acknowledgment.'
        },
        {
            title: 'Confirmation & Support',
            description:"You'll receive a confirmation email with your ITR filing status and next steps. Need help? Our experts are available at no extra cost!"
        }
         ] },
    'financial-due-diligence': { title: 'Financial Due Diligence (FDD)', subtitle: '', description: '', keyBenefits: [], howItWorks: [] },
    'tax-litigation': { title: 'Tax Litigation', subtitle: '', description: '', keyBenefits: [], howItWorks: [] },
    'trademark-services': { title: 'Trademark Services', subtitle: '', description: '', keyBenefits: [], howItWorks: [] },
  };

  const service = servicesData[serviceId] || {
    title: 'Service Not Found',
    subtitle: '',
    description: '',
    keyBenefits: [],
    howItWorks: [],
  };

  return (
    <section className="service-detail">
      <div className="service-detail__container">
        <Link to="/services" className="service-detail__back">
          <FaAngleLeft />
          Back
        </Link>
         <img
            src={groLogoBig}
            alt="GRO Logo Big"
            className="service-detail__logo"
          />
        <div className="service-detail-card__container">
          
           <div className="service-detail__card">
              <div className="service-detail__card-content">
                <h1 className="service-detail__title">{service.title}</h1>
                <p className="service-detail__subtitle">{service.subtitle}</p>
                <p className="service-detail__description">{service.description}</p>
                <h2 className="service-detail__benefits-title">Key Benefits</h2>
                <div className="service-detail__benefits">
                  {service.keyBenefits.map((benefit, index) => (
                    <div key={index} className="service-detail__benefit-card">
                      <FaCheckSquare className="service-detail__benefit-icon" />
                      <p className="service-detail__benefit-text">{benefit}</p>
                    </div>
                  ))}
                </div>
                <button className="service-detail__cta" onClick={handleCtaClick} >
                  Get Started
                  <IoArrowForwardCircleOutline className="service-detail__cta-icon" />
                </button>
              </div>
            </div>
            <h2 className="service-detail__how-title">How it works</h2>
            <div className="service-detail__how-cards">
              {service.howItWorks.map((step, index) => (
                <div key={index} className="service-detail__how-card">
                  {step.title && (
                    <h3 className="service-detail__how-step">
                      <span className="service-detail__how-step-number">Step {index + 1}:</span> {step.title}
                    </h3>
                  )}
                  {step.description && (
                    <p className="service-detail__how-description">{step.description}</p>
                  )}
                  {step.optionalDescription && (
                    <p className="service-detail__how-optional">{step.optionalDescription}</p>
                  )}
                </div>
              ))}
            </div>
        </div>  
        <CTA calledFromAboutUs={false} />
      </div>
    </section>
  );
}

export default ServiceDetail;