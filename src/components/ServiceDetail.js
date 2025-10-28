import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaAngleLeft ,FaCheckSquare } from 'react-icons/fa';
import {IoArrowForwardCircleOutline} from 'react-icons/io5'
import groLogoBig from '../assets/icons/gro_logo_big.svg';
import CTA from './CTA';
import './ServiceDetail.css';

function ServiceDetail({ onOpenPopup }) {
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
        "Experience the convenience of a 100% remote income tax filing process. We respect your time by handling your return entirely online, with no need for physical appointments. Our experts meticulously verify all claims and declarations to ensure accuracy, helping you secure the maximum benefits available under tax law at no extra cost",
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
            'Fill in your basic KYC and provide the necessary documents.',
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
      title : "Submit Your Application",
      description : "Provide your KYC details, identity proof, and a short video verification as per Class 3 requirements."
    },
    {
      title : "Document Verification",
      description : "We instantly validate your documents against government records and flag any discrepancies for quick resolution."
    },
    {
      title : "DSC Token Generation",
      description : "Our system generates a secure cryptographic token and binds it to your verified identity."
    },
    {
      title : "Download & Installation",
      description : "Receive your DSC in a USB token or soft format, with step-by-step installation guidance."
    },
    {
      title : "Ready to Sign",
      description : "Start signing e-documents instantly; get free support for any integration or renewal queries."
    }
        
        
       ] },
    'tax-advisory': { title: 'Tax Advisory', 
      subtitle: 'Expert opinions on complicated tax matters',
       description: 'Unlock your full financial potential with our expert tax advisory services. Our expert consultants provide strategic tax planning and meticulous compliance management tailored to your unique needs. We empower individuals and businesses across India to confidently navigate intricate tax laws, maximizing savings while ensuring complete regulatory adherence. Let us proactively manage your tax risks and provide reliable guidance for all your tax obligations',
       keyBenefits: [
        "Optimize Tax Liability: Strategic planning to legally minimize your tax burden.",
        "Ensure Compliance: Stay confidently compliant with complex, ever-changing tax laws.",
        "Risk Management: Identify and mitigate potential tax risks proactively.",
        "Business & Personal Planning: Tailored advice for corporate structures, investments, and personal finances.",
        "Expert Insights: Leverage the knowledge of expert tax consultants."
       ], howItWorks: [
        {
      title : "Share Your Query",
      description : "Describe your tax scenario, upload relevant documents, or book a call with our experts."
    },
    {
      title : "Case Analysis",
      description : "Our tax specialists review your case, identify risks, and explore optimization opportunities."
    },
    {
      title : "Custom Strategy",
      description : "Receive a tailored tax plan with clear recommendations, calculations, and compliance roadmap."
    },
    {
      title : "Review & Approval",
      description : "Discuss the strategy in a dedicated session, make adjustments, and finalize the approach."
    },
    {
      title : "Implementation Support",
      description : "Get ongoing assistance to execute the plan, file notices, or represent you before authorities."
    }
       ] },
    'incorporation-services': { title: 'Incorporation Services', subtitle: "We'll help you open your business doors",
       description: "Launch your venture smoothly with GRO's expert business incorporation services in India. Our registration consultants handle everything from Private limited company registration, LLP registration, and partnership formation to ensuring legal compliance and advising on optimal tax structuring for startups. We provide end-to-end new company formation assistance, making the entire business setup services process efficient and saving you valuable time.",
       keyBenefits: [
        "Fast Formation: Streamlined process for quick Company, LLP, or Partnership registration.",
        "Compliance Assured: Ensure all initial legal and ROC compliance requirements are met.",
        "Expert Guidance: Advice on choosing the right structure and necessary documentation.",
        "End-to-End Service: We handle the entire process, saving you time and effort.",
        "Foundation for Growth: Start your business on a solid legal footing."

       ], howItWorks: [
        {
      title : "Choose Entity Type",
      description : "Select company, LLP, OPC, or partnership; provide basic director/partner details."
    },
    {
      title : "Name Reservation",
      description : "We check availability, suggest unique names, and file RUN or SPICe+ reservation."
    },
    {
      title : "Document Preparation",
      description : "Draft MOA, AOA, declarations, and collect e-signatures via DSC on a single platform."
    },
    {
      title : "MCA Filing & Approval",
      description : "Submit SPICe+ form to MCA; track real-time status and resolve queries instantly."
    },
    {
      title : "Certificate & Post-Incorporation",
      description : "Receive incorporation certificate, PAN, TAN, and guidance on bank account & GST registration."
    }
       ] },
    'gst-filing': { title: 'GST Returns', subtitle: 'We handle your GST registration, filing, and compliance accurately, so you avoid penalties and maximize credits.', 
      description: "Simplify GST compliance with our expert services. We handle GST registration, filing returns, audits to ensure accuracy and adherence to regulations. Our certified GST consultants help businesses avoid penalties, maximize input tax credits, and stay updated on GST laws.",
       keyBenefits: [
        "Timely Filing: Ensure all your GST returns (GSTR-1, GSTR-3B, etc.) are filed accurately and on time.",
        "Maximize ITC: Proper reconciliation to ensure you claim all eligible Input Tax Credits.",
        "Avoid Penalties: Stay compliant with GST laws and avoid interest or penalties.",
        "Audit Support: Assistance and representation during GST department audits.",
        "Expert Consultants: Stay updated with guidance from certified GST professionals."
       ], howItWorks: [
          {
      title : "Upload Sales & Purchases",
      description : "Sync invoices from your accounting software or upload GSTR-1, 2B, and 3B data."
    },
    {
      title : "Reconciliation & Matching",
      description : "Auto-match invoices with GSTR-2B, highlight mismatches, and suggest corrections."
    },
    {
      title : "Return Computation",
      description : "Calculate ITC, tax liability, and generate pre-filled GSTR-3B & GSTR-1 summaries."
    },
    {
      title : "E-Filing with DSC/OTP",
      description : "File returns directly on GST portal; receive instant acknowledgment and ARN."
    },
    {
      title : "Compliance Tracker",
      description : "Get filing confirmation, late fee alerts, and free support for notices or amendments."
    }
       ] },
    'accounting-bookkeeping': { title: 'Accounting & Bookkeeping', subtitle: 'Clarity & Control Over Your Finances.',
         description: "Streamline your financial management with GRO's professional accounting and bookkeeping services. We meticulously handle accounts payable and receivable management, payroll processing, bank reconciliation, and maintain precise financial records. Our experienced bookkeepers deliver accurate, up-to-date insights via efficient outsourced accounting solutions, enabling informed business decisions and ensuring continuous tax and regulatory compliance.",
         keyBenefits: [
            "Accurate Records: Meticulous management of AP/AR, expenses, and financial transactions.",
            "Real-Time Insights: Up-to-date books for informed business decision-making.",
            "Compliance Ready: Ensure records meet tax and regulatory requirements effortlessly.",
            "Time Savings: Outsource tedious bookkeeping tasks and focus on your core business.",
            "Payroll Management: Accurate and timely payroll processing.",
         ], howItWorks: [
       {
      title : "Connect Your Data",
      description : "Link bank feeds, upload bills, or grant access to your existing accounting software."
    },
    {
      title : "Transaction Recording",
      description : "Our team categorizes entries, reconciles accounts, and maintains books in real time."
    },
    {
      title : "Review & Adjustments",
      description : "Monthly review by a chartered accountant to ensure accuracy and tax readiness."
    },
    {
      title : "Financial Reports",
      description : "Access P&L, balance sheet, cash flow, and custom dashboards anytime."
    },
    {
      title : "Ongoing Support",
      description : "Unlimited queries, audit-ready files, and seamless handoff to your tax team."
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
      title : "Scope & Data Room",
      description : "Define objectives, sign NDA, and set up a secure virtual data room for document upload."
    },
    {
      title : "Data Extraction & Analysis",
      description : "Extract financials, normalize earnings, identify red flags, and model cash flows."
    },
    {
      title : "Quality of Earnings",
      description : "Assess revenue sustainability, EBITDA adjustments, and working capital trends."
    },
    {
      title : "Report & Insights",
      description : "Receive a detailed FDD report with findings, risks, and valuation impact."
    },
    {
      title : "Closing Support",
      description : "Join deal negotiations, clarify queries, and assist with SPA warranties."
    }
        ] },
    'tax-litigation': { title: 'Tax Litigation',
       subtitle: 'Right to invest or Wrong?', 
      description: "Navigate tax disputes effectively with GRO's specialized Indian tax litigation services. Our experienced tax consultants provide expert representation in complex tax dispute resolution cases, including Income Tax litigation, GST litigation, and matters related to Service Tax, Central Excise, and Customs. We handle tax appeals, represent clients before tax tribunals and courts, ensuring compliance, aiming to minimize tax liabilities, and protecting your financial interests.",
       keyBenefits: [
        "Expert Representation: Skilled representation before Assessing Officers, Appellate authorities, Tribunals & Courts.",
        "Strategic Defense: Develop strong arguments based on tax law and case precedents.",
        "Minimize Liabilities: Aim to reduce potential tax demands, interest, and penalties.",
        "Navigate Procedures: Expert handling of complex litigation processes and documentation.",
        "Protect Your Interests: Dedicated support focused on achieving the best possible outcome."
       ],
        howItWorks: [
        {
      title : "Case Submission",
      description : "Upload assessment order, notices, or appeal grounds along with supporting documents."
    },
    {
      title : "Merit Assessment",
      description : "Our tax advocates evaluate legal strength, precedents, and success probability."
    },
    {
      title : "Drafting & Representation",
      description : "Prepare appeals, replies, or writs; represent you before ITAT, CIT(A), or High Court."
    },
    {
      title : "Hearing Updates",
      description : "Track hearing dates, submit additional documents, and receive real-time status."
    },
    {
      title : "Resolution & Refund",
      description : "Secure favorable orders, expedite refunds, and close the case with full documentation."
    }
        ] },
    'trademark-services': { 
      title: 'Trademark Services',
       subtitle: "Protect your unique brand name and logo , let's secure your trademark in India.", 
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
      title : "Trademark Search",
      description : "Conduct comprehensive search across classes to confirm availability and avoid conflicts."
    },
    {
      title : "Application Filing",
      description : "Prepare TM-A form, collect applicant details, and file with the Trademark Registry."
    },
    {
      title : "Examination Response",
      description : "Address office actions, submit clarifications, or attend hearings on your behalf."
    },
    {
      title : "Publication & Opposition",
      description : "Monitor journal publication, file counter-statements if opposed, and defend your mark."
    },
    {
      title : "Registration & Renewal",
      description : "Receive trademark certificate; get timely alerts for renewal every 10 years."
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
          <img
              src={groLogoBig}
              alt="GRO Logo"
              className="service-detail__logo-mobile"
            />
          <div className="service-detail__card">
            
            <div className="service-detail__card-content">
              <h1 className="service-detail__title">{service.title}</h1>
              <p className="service-detail__subtitle">{service.subtitle}</p>
              <button className="service-detail__cta" onClick={handleCtaClick}>
                Get Started
                <IoArrowForwardCircleOutline className="service-detail__cta-icon" />
              </button>
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
        <CTA calledFromAboutUs={false} onOpenPopup={onOpenPopup}/>
      </div>
    </section>
  );
}

export default ServiceDetail;