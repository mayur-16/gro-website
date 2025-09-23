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
        'Maximize Deductions: Our experts ensure you claim all eligible deductions.',
        'Expert Assistance: Guidance available for complex situations at no extra charge.',
        'Stress-Free Filing: We handle the complexities, you get peace of mind.'
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
    
    'dsc': { title: 'Digital Signature Certificate (DSC)', 
      subtitle: 'Need a DSC? Get your secure Class 2 or Class 3 Digital Signature Certificate quickly and securely online.', 
      description: "Secure your online transactions with our hassle-free digital signature certificate (DSC) services. In today's digital norm, replace paper signatures seamlessly. We are trusted digital signature certificate providers, offering Class II and Class III digital signatures suitable for income tax e-filing, GST portals, e-tenders, and more, often without requiring physical presence. Get your DSC online quickly and easily with our efficient digital signature solutions.",
       keyBenefits: [
        "Quick Turnaround: Fast processing to get your DSC promptly.",
        "Hassle-Free Process: Simplified online application, often without physical visits.",
        "Multiple Uses: Essential for GST, ITR e-filing, MCA, e-Tenders, and more.",
        "Secure & Valid: Legally valid, encrypted signatures for your online transactions.",
        "Expert Support: Assistance available throughout the application process."
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
    'tax-advisory': { title: 'Tax Advisory', 
      subtitle: 'Expert opinions on complicated tax matters',
       description: 'Optimize your tax position with our expert tax advisory services. Our certified tax consultants provide tailored strategic tax planning and comprehensive tax compliance management for both individuals and businesses across India. Navigate complex Indian tax regulations confidently as we help you maximize tax savings, ensure full adherence, and proactively manage tax risks. From corporate tax advisory to individual tax filing guidance, trust our reliable solutions for efficient tax management.',
       keyBenefits: [
        "Optimize Tax Liability: Strategic planning to legally minimize your tax burden.",
        "Ensure Compliance: Stay confidently compliant with complex, ever-changing tax laws.",
        "Risk Management: Identify and mitigate potential tax risks proactively.",
        "Business & Personal Planning: Tailored advice for corporate structures, investments, and personal finances.",
        "Expert Insights: Leverage the knowledge of certified tax consultants."
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
    'incorporation-services': { title: 'Incorporation Services', subtitle: "We'll help you open your business doors", description: "Launch your venture smoothly with GRO's expert business incorporation services in India. Our company registration consultants handle everything from private limited company registration, LLP registration, and partnership formation to ensuring legal compliance and advising on optimal tax structuring for startups. We provide end-to-end new company formation assistance, making the entire business setup services process efficient and saving you valuable time.",
       keyBenefits: [
        "Fast Formation: Streamlined process for quick Company, LLP, or Partnership registration.",
        "Compliance Assured: Ensure all initial legal and ROC compliance requirements are met.",
        "Expert Guidance: Advice on choosing the right structure and necessary documentation.",
        "End-to-End Service: We handle the entire process, saving you time and effort.",
        "Foundation for Growth: Start your business on a solid legal footing."

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
    'gst-filing': { title: 'GST Returns', subtitle: 'We handle your GST registration, filing, and compliance accurately, so you avoid penalties and maximize credits.', 
      description: "Launch your venture smoothly with our expert business incorporation services in India. Our company registration consultants handle everything from private limited company registration, LLP registration, and partnership formation to ensuring legal compliance and advising on optimal tax structuring for startups. We provide end-to-end new company formation assistance, making the entire business setup services process efficient and saving you valuable time.",
       keyBenefits: [
        "Timely Filing: Ensure all your GST returns (GSTR-1, GSTR-3B, etc.) are filed accurately and on time.",
        "Maximize ITC: Proper reconciliation to ensure you claim all eligible Input Tax Credits.",
        "Avoid Penalties: Stay compliant with GST laws and avoid interest or penalties.",
        "Audit Support: Assistance and representation during GST department audits.",
        "Expert Consultants: Stay updated with guidance from certified GST professionals."
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
    'financial-due-diligence': { title: 'Financial Due Diligence (FDD)', 
      subtitle: 'Invest & Acquire with Confidence.',
       description: 'Make informed business decisions with our meticulous financial due diligence services. Essential for M&A transactions, investments, and key partnerships, our expert advisors conduct thorough financial risk assessments, analyze financial statements, and evaluate business performance. We deliver actionable insights through comprehensive investment due diligence and business valuation expertise, helping you maximize value and mitigate potential risks effectively. Secure your transactions with our trusted FDD services.',
        keyBenefits: [
          "Informed Decision Making: Uncover financial health, risks, and opportunities clearly.",
          "Risk Mitigation: Identify potential deal-breakers or valuation issues early.",
          "Accurate Valuation Insights: Understand the true financial picture beyond surface numbers.",
          "Negotiation Leverage: Strengthen your position in M&A or investment discussions.",
          "Expert Verification: Independent, certified analysis you can trust.",
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
    'tax-litigation': { title: 'Tax Litigation',
       subtitle: 'Right to invest or Wrong?', 
      description: "Navigate tax disputes effectively with GRO's specialized Indian tax litigation services. Our experienced tax consultants provide expert representation in complex tax dispute resolution cases, including Income Tax litigation, GST litigation, and matters related to Service Tax, Central Excise, and Customs. We handle tax appeals, represent clients before tax tribunals and courts, ensuring compliance, aiming to minimize tax liabilities, and protecting your financial interests.",
       keyBenefits: [
        "Expert Representation: Skilled representation before Assessing Officers, Appeals, Tribunals & Courts.",
        "Strategic Defense: Develop strong arguments based on tax law and case precedents.",
        "Minimize Liabilities: Aim to reduce potential tax demands, interest, and penalties.",
        "Navigate Procedures: Expert handling of complex litigation processes and documentation.",
        "Protect Your Interests: Dedicated support focused on achieving the best possible outcome."
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
    'trademark-services': { 
      title: 'Trademark Services',
       subtitle: "Protect your unique brand name and logo – let's secure your trademark registration in India.", 
       description: 'Protect your valuable brand identity with our expert trademark services in India. Our team handles comprehensive trademark search, manages the entire trademark registration process, assists with timely trademark renewal, and advises on trademark enforcement strategies. Safeguard your intellectual property (IP) and secure your unique brand identity from potential disputes with our certified trademark consultants.',
        keyBenefits: [
          "Exclusive Rights: Gain legal right to use your brand name/logo nationwide for specific goods/services.",
          "Brand Protection: Prevent others from using confusingly similar marks.",
          "Asset Creation: A registered trademark becomes a valuable intangible asset.",
          "Market Credibility: Builds trust and recognition with customers.",
          "Expert Handling: Navigate the complexities of trademark search and registration smoothly."
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