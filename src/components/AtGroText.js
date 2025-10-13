import './AtGroText.css';
import PropTypes from 'prop-types';

// Enum for display modes
export const DisplayMode = {
  TITLE_ONLY: 'TITLE_ONLY',
  DETAILS_ONLY: 'DETAILS_ONLY',
  TITLE_AND_DETAILS: 'TITLE_AND_DETAILS',
};

const AtGroText = ({ isWhite, displayMode }) => {
  const showTitle = displayMode === DisplayMode.TITLE_ONLY || displayMode === DisplayMode.TITLE_AND_DETAILS;
  const showDetails = displayMode === DisplayMode.DETAILS_ONLY || displayMode === DisplayMode.TITLE_AND_DETAILS;

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

AtGroText.propTypes = {
  isWhite: PropTypes.bool,
  displayMode: PropTypes.oneOf([
    DisplayMode.TITLE_ONLY,
    DisplayMode.DETAILS_ONLY,
    DisplayMode.TITLE_AND_DETAILS,
  ]).isRequired,
};

AtGroText.defaultProps = {
  isWhite: true, // Default to white theme
};

export default AtGroText;