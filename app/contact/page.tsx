import React from 'react';
import Link from 'next/link';
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
const Contact = () => {
  return (
    <div className=" bg-gradient-to-r from-blue-100 to-blue-50 py-16 px-6">
      <div className='container mx-auto flex flex-col items-center justify-center  '>
      <h2 className="text-5xl font-bold text-gray-900 mb-12">Get in Touch</h2>
      <div className="w-full md:w-1/3 gap-10 flex flex-col ">
        <div className="group flex items-center bg-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl ">
          <span className="inline-flex items-center justify-center w-14 h-14 mr-6 bg-blue-600 text-white rounded-full group-hover:bg-blue-700 transition-colors duration-300">
            <MdOutlineMail className="w-7 h-7 group-hover:animate-bounce transition-transform duration-300" />
          </span>
          <div>
            <p className="text-lg text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Email:</p>
            <Link href="mailto:info@conceptlearning.nl" className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300">
  info@conceptlearning.nl
</Link>

          </div>
        </div>
        <div className="group flex items-center bg-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl ">
          <span className="inline-flex items-center justify-center w-14 h-14 mr-6 bg-green-500 text-white rounded-full group-hover:bg-green-600 transition-colors duration-300">
            <FaWhatsapp className="w-7 h-7 group-hover:animate-bounce transition-transform duration-300" />
          </span>
          <div>
            <p className="text-lg text-gray-600 group-hover:text-gray-800 transition-colors duration-300">WhatsApp:</p>
            <Link href="https://dm.wa.link/cbqwcv" target='_blank' className="text-lg font-semibold text-green-600 hover:text-green-800 transition-colors duration-300">
              +31633844315
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
