import React from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const FixedIcons = () => {
  return (
    <div className="fixed bottom-32 md:bottom-80 right-4 flex flex-col items-center space-y-4 z-[999]">

      <Link href="mailto:info@conceptlearning.nl" className="bg-blue-800 p-3 rounded-full shadow-lg text-white hover:bg-blue-900 transition-colors "
          
          rel="noopener noreferrer">
       
          <FaEnvelope className="text-2xl" />
        
      </Link>
      <Link href="https://dm.wa.link/cbqwcv" className="bg-green-500 p-3 rounded-full shadow-lg text-white hover:bg-green-600 transition-colors "
          target="_blank"
          rel="noopener noreferrer">
      
          <FaWhatsapp className="text-2xl" />
       
      </Link>
     
    </div>
  );
};

export default FixedIcons;
