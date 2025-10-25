import CountUp from 'react-countup';
import HighlightedText from './HighlightedText';
import GroAssociatesExplanationText from './GroExplainationText';
import GoGroComponent from './GoGro';
// import goGroImage from '../assets/images/Go_gro.svg';
import groLogoMobile from '../assets/icons/gro_logo_mobile.svg';
import './Hero.css';

function Hero({ onOpenPopup }) {
  const stats = [
    { number: 500, suffix: '+', text: 'Income tax filers' },
    { number: 40, suffix: '+', text: 'Expert Professionals' },
    { number: 200, suffix: '+', text: 'Tax disputes resolved' },
    { number: 100, suffix: '+', text: 'GST Retainers' },
    { number: 50, suffix: '+', text: 'International Clients' },
  ];

  const handleCtaClick = () => {
    const ctaElement = document.querySelector('.cta');
    if (ctaElement) {
      ctaElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero__container">
        {/* Desktop Layout */}
        <div className="hero__left hero__left--desktop">
          <HighlightedText />
          <GroAssociatesExplanationText />
          {/* <img
            src={explanationImage}
            alt="Explanation"
            className="hero__explanation-image"
          /> */}
          <div className="hero__actions">
            <button className="hero__cta" onClick={handleCtaClick}>Consult with Us Today</button>
            <button className="hero__cta hero__cta--services" onClick={() => window.location.href = '/services'}>
              Our Services
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="hero__left hero__left--mobile">
          <div className="hero__mobile-header">
            <HighlightedText />
            <img
              src={groLogoMobile}
              alt="GRO Associates Mobile Logo"
              className="hero__logo-mobile"
            />
          </div>
          <div className="hero__mobile-actions">
            <button className="hero__cta hero__cta--mobile" onClick={onOpenPopup}>
              Consult us today
            </button>
            <button className="hero__cta hero__cta--mobile hero__cta--services" onClick={() => window.location.href = '/services'}>
              Our Services
            </button>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__right-bg" />
          {/* <img src={goGroImage} alt="Go GRO" className="hero__go-gro" /> */}
          <div className="hero__go-gro">
            <GoGroComponent />
          </div>
        </div>
      </div>
      <div className="hero__stats">
        {stats.map((stat, index) => (
          <div key={index} className="hero__stat-item">
            <div className="hero__stat-number">
              <CountUp
                end={stat.number}
                suffix={stat.suffix}
                duration={6.0}
                separator=","
              />
            </div>
            <div className="hero__stat-text">{stat.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;