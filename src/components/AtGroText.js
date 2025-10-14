import { useEffect, useState } from 'react';
import './AtGroText.css';
import PropTypes from 'prop-types';

// Enum for display modes
export const DisplayMode = {
  TITLE_ONLY: 'TITLE_ONLY',
  DETAILS_ONLY: 'DETAILS_ONLY',
  TITLE_AND_DETAILS: 'TITLE_AND_DETAILS',
};

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

const AtGroText = ({ isWhite, displayMode, mobileDisplayMode }) => {
  const isMobile = useMediaQuery('(max-width: 480px)');
  const effectiveDisplayMode = isMobile ? mobileDisplayMode : displayMode;

  const showTitle = effectiveDisplayMode === DisplayMode.TITLE_ONLY || effectiveDisplayMode === DisplayMode.TITLE_AND_DETAILS;
  const showDetails = effectiveDisplayMode === DisplayMode.DETAILS_ONLY || effectiveDisplayMode === DisplayMode.TITLE_AND_DETAILS;

  return (
    <div className={`at-gro-text ${isWhite ? 'white-theme' : 'black-theme'}`}>
      {showTitle && (
        <div className="title-wrapper">
          <span className="normaltitle">At </span>
          <span className="boldtitle">GRO</span>
        </div>
      )}
      {showDetails && (
        <>
          Our mission is to{' '}
          <span className="bold">simplify financial management </span>
          for businesses of all sizes by providing{' '}
          <span className="bold">expert accounting, taxation, and financial advisory services.</span> We believe in{' '}
          <span className="bold">transparency, efficiency, and personalized solutions</span> that empower businesses to thrive in an ever-evolving financial landscape.
        </>
      )}
    </div>
  );
};

const AtGroDetailsText = () => {
  const isMobile = useMediaQuery('(max-width: 480px)');

  return (
    <div className={`at-gro-details-text 'black-theme'`}>
      {isMobile && (
        <>
          Our mission is to{' '}
          <span className="bold">simplify financial management </span>
          for businesses of all sizes by providing{' '}
          <span className="bold">expert accounting, taxation, and financial advisory services.</span> We believe in{' '}
          <span className="bold">transparency, efficiency, and personalized solutions</span> that empower businesses to thrive in an ever-evolving financial landscape.
        </>
      )}
    </div>
  );
};



AtGroText.propTypes = {
  isWhite: PropTypes.bool,
  displayMode: PropTypes.oneOf([
    DisplayMode.TITLE_ONLY,
    DisplayMode.DETAILS_ONLY,
    DisplayMode.TITLE_AND_DETAILS,
  ]).isRequired,
  mobileDisplayMode: PropTypes.oneOf([
    DisplayMode.TITLE_ONLY,
    DisplayMode.DETAILS_ONLY,
    DisplayMode.TITLE_AND_DETAILS,
  ]).isRequired,
};

AtGroText.defaultProps = {
  isWhite: true,
  displayMode: DisplayMode.TITLE_AND_DETAILS, // Default for non-mobile
  mobileDisplayMode: DisplayMode.TITLE_ONLY, // Default for mobile (≤ 480px)
};

export {AtGroDetailsText};

export default AtGroText;