import React from 'react';
import './LoadingAnimation.css';

const LoadingAnimation = () => {
  return (
    <div className='loader'>
      <div className="loadingDot"></div>
      <div className="loadingDot"></div>
       <div className="loadingDot"></div>
    </div>
  );
}

export default LoadingAnimation;