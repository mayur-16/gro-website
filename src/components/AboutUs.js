import CTA from './CTA';
import aboutUsBg from '../assets/images/about_us_background_image.svg';
import aboutUsBgmobile from '../assets/images/about_us_background_mobile.svg';
import AtGroText , {AtGroDetailsText,DisplayMode} from './AtGroText';
import grosVision from '../assets/images/gros_vision.svg';
import expertHat from '../assets/icons/expert_hat.svg';
import trustedIcon from '../assets/icons/trusted_icon.svg';
import transparencyIcon from '../assets/icons/transparency_icon.svg';
import globalReachIcon from '../assets/icons/global_reach_icon.svg';
import './AboutUs.css';
import { useEffect, useState } from 'react';

// Custom hook to detect media query
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [query]);

  return matches;
};

function AboutUs({ onOpenPopup }) {

    const isMobile = useMediaQuery('(max-width: 480px)');

  const cards = [
    {
      icon: expertHat,
      title: 'Expert-Led Services',
      subtext:
        'Led by experienced Chartered Accountants & Advocates, ensuring accuracy and compliance.',
    },
    {
      icon: trustedIcon,
      title: 'Trusted by 500+ Clients',
      subtext:
        'Successfully handled IT filings, Tax disputes, Trademark, Tax litigations and Financial Management for diverse businesses.',
    },
    {
      icon: transparencyIcon,
      title: 'Transparent & Hassle-Free',
      subtext:
        'No hidden fees, no complicated processes, just clear and effective solutions.',
    },
    {
      icon: globalReachIcon,
      title: 'Global Reach',
      subtext:
        'Serving over 50+ international clients, making cross-border compliance easier than ever.',
    },
  ];



  return (
    <section className="about-us">
      <div className="about-us__container">
        <div className="about-us__stack">
          <img
            src={isMobile ? aboutUsBgmobile : aboutUsBg}
            alt="About Us Background"
            className="about-us__bg-image"
          />
          <AtGroText 
          isWhite={true} 
          displayMode={DisplayMode.TITLE_AND_DETAILS}
          mobileDisplayMode={DisplayMode.TITLE_ONLY}
          />
        </div>
        <img
          src={grosVision}
          alt="GRO's Vision"
          className="about-us__vision"
        />
       <AtGroDetailsText />
        <h2 className="about-us__title">Why Us?</h2>
        <div className="about-us__cards">
          {cards.map((card, index) => (
            <div key={index} className="about-us__card">
              <img
                src={card.icon}
                alt={card.title}
                className="about-us__card-icon"
              />
             <div className="about-us__card-content">
                <h3 className="about-us__card-title">{card.title}</h3>
                <p className="about-us__card-subtext">{card.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CTA calledFromAboutUs={true} onOpenPopup={onOpenPopup} />
    </section>
  );
}

export default AboutUs;