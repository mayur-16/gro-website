import React from 'react';
import './HighlightedText.css';

function HighlightedText() {
  return (
    <div className="highlighted-text">
      <div className="highlighted-text__financials">Financials</div>
      <div className="highlighted-text__line2">
        <span className="highlighted-text__done">Done</span>
        <span className="highlighted-text__super">Super</span>
      </div>
      <div className="highlighted-text__smooth">Smooth</div>
    </div>
  );
}

export default HighlightedText;