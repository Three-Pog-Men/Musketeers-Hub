import React, { useState, useEffect } from "react";
import { FaArrowUp } from 'react-icons/fa';
import "../assets/styles/css/backToTop.css";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    let currentPosition = window.scrollY;
    const scrollStep = currentPosition / 25;

    const scrollInterval = setInterval(() => {
      if (currentPosition > 0) {
        window.scrollBy(0, -scrollStep);
        currentPosition -= scrollStep;
      } else {
        clearInterval(scrollInterval);
      }
    }, 10);
  };

  return (
    <div>
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
