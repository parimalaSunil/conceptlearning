"use client"
import React, { useState, useEffect } from 'react';
import { IoMdArrowRoundUp } from "react-icons/io";

const ScrollFunction = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { 
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <IoMdArrowRoundUp className='text-2xl' />
        </button>
      )}
    </div>
  );
};

export default ScrollFunction;
