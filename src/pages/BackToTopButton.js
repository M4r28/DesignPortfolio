import React, { useState, useEffect } from 'react';
import './BackToTopButton.css'; 
import { ReactComponent as Icon } from '../icons/arrowWhite.svg';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setIsVisible(false); // Hide the button after clicking
 };

  // Function to show or hide the button based on scroll direction
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`backToTopButton ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
     <Icon className='icon'/>
    </button>
    
  );
};

export default BackToTopButton;
