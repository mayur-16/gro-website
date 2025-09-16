import React from 'react';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';
import HighlightedText from './HighlightedText';
import explanationImage from '../assets/images/Hero_section_explanaition_text.svg';
import goGroImage from '../assets/images/Go_gro.svg';
import './Hero.css';

function Hero() {
  const stats = [
    { number: 500, suffix: '+', text: 'Income tax filers' },
    { number: 40, suffix: '+', text: 'Expert Professionals' },
    { number: 200, suffix: '+', text: 'Tax disputes resolved' },
    { number: 100, suffix: '+', text: 'GST Retainers' },
    { number: 50, suffix: '+', text: 'International Clients' },
  ];

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <HighlightedText />
          <img
            src={explanationImage}
            alt="Explanation"
            className="hero__explanation-image"
          />
          <div className="hero__actions">
            <button className="hero__cta">Consult with Us Today</button>
            <NavLink to="/services" className="hero__services-link">
              Our Services
            </NavLink>
          </div>
        </div>
        <div className="hero__right">
          <div className="hero__right-bg" />
          <img src={goGroImage} alt="Go GRO" className="hero__go-gro" />
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