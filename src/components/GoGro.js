import React, { useState, useEffect } from 'react';
import {IoArrowForwardCircleOutline} from 'react-icons/io5'


export default function GoGroComponent() {
  const [isAnimating, setIsAnimating] = useState(false);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  
  const bars = React.useMemo(() => [
    { bg: '#4B5563', fill: '#E5E7EB', start: 15, end: 40 },
    { bg: '#4B5563', fill: '#93C5FD', start: 25, end: 52 },
    { bg: '#4B5563', fill: '#FCD34D', start: 18, end: 70 },
    { bg: '#4B5563', fill: '#E5E7EB', start: 20, end: 80 },
    { bg: '#4B5563', fill: '#FCA5A5', start: 25, end: 95 }
  ], []);

  const [heights, setHeights] = useState(bars.map(bar => bar.start));

  useEffect(() => {
    let intervals = [];
    
    if (isAnimating) {
      bars.forEach((bar, index) => {
        let direction = 1;
        let currentHeight = bar.start;
        const animationSpeed = 400;
        const bounceHeight = 20;
        const bounceSpeed = 80;
        
        const interval = setInterval(() => {
          currentHeight += direction * bounceSpeed;
          
          if (currentHeight >= bounceHeight) {
            direction = -1;
          } else if (currentHeight <= bar.start) {
            direction = 1;
          }
          
          setHeights(prev => {
            const newHeights = [...prev];
            newHeights[index] = currentHeight;
            return newHeights;
          });
        }, animationSpeed);
        
        intervals.push(interval);
        
        // Stop animation and settle at end height after delay (staggered)
        setTimeout(() => {
          clearInterval(interval);
          setHeights(prev => {
            const newHeights = [...prev];
            newHeights[index] = bar.end;
            return newHeights;
          });
          
          // Check if this is the last bar to finish
          if (index === bars.length - 1) {
            setTimeout(() => {
              setIsAnimating(false);
            }, 100);
          }
        }, 500 + (index * 200)); // Staggered stop times
      });
    }
    
    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isAnimating, bars]);

  const handleGoGro = () => {
    if (isAnimating) return;
    setIsAnimating(true);
  };

  return (
    <div 
      style={{
        width: '210px',
        height: '310px',
        // background: 'linear-gradient(180deg, #2C3E50 0%, #34495E 100%)',
        background: '#243139',
        borderRadius: '24px',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '0px',
        paddingBottom: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden'
      }}
    >
      <h1 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        Savings
      </h1>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'flex-end', 
        justifyContent: 'space-around', 
        width: '90%', 
        height: '172px', 
        gap: '20px', 
        marginBottom: '16px' 
      }}>
        {months.map((month, index) => (
          <div key={month} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
            <div 
              style={{
                position: 'relative',
                width: '100%',
                height: '160px',
                backgroundColor: bars[index].bg,
                borderRadius: '9999px',
                overflow: 'hidden'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  backgroundColor: bars[index].fill,
                  height: `${heights[index]}%`,
                  borderRadius: '9999px',
                  transition: 'all 0.3s ease-out'
                }}
              />
            </div>
            <span style={{ color: 'white', fontSize: '12px', marginTop: '8px' }}>{month}</span>
          </div>
        ))}
      </div>

      <button
        onClick={handleGoGro}
        disabled={isAnimating}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 20px',
          backgroundColor: 'white',
          borderRadius: '9999px',
          color: '#01377D',
          fontWeight: 'bold',
          fontSize: '14px',
          border: 'none',
          cursor: isAnimating ? 'not-allowed' : 'pointer',
          opacity: isAnimating ? 0.7 : 1,
          transition: 'all 0.3s'
        }}
        // onMouseEnter={(e) => {
        //   if (!isAnimating) e.target.style.backgroundColor = '#f3f4f6';
        // }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'white';
        }}
      >
        <span>Go GRO</span>
        <IoArrowForwardCircleOutline size={18} />
      </button>
    </div>
  );
}