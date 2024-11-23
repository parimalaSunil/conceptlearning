import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800">
      <footer className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
            {/* Lessons Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Lessons</h3>
              <ul className="space-y-2">
                <li><Link href="/lesson" className="hover:underline text-white">MYP 1</Link></li>
                <li><Link href="/lesson" className="hover:underline text-white">MYP 2</Link></li>
                <li><Link href="/lesson" className="hover:underline text-white">MYP 3, MYP 4 & MYP 5</Link></li>
                <li><Link href="/lesson" className="hover:underline text-white">DP 1 & 2</Link></li>
              </ul>
            </div>
            {/* Quick Links Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:underline text-white">Home</Link></li>
                <li><Link href="/about" className="hover:underline text-white">About</Link></li>
                <li><Link href="/contact" className="hover:underline text-white">Contact</Link></li>
                <li><Link href="/reviews/studentsreview" className="hover:underline text-white">Student Review</Link></li>
                <li><Link href="/reviews/ParentReview" className="hover:underline text-white">Parent Review</Link></li>
              </ul>
            </div>
            {/* Concept Learning Section */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4 text-white">Concept Learning</h3>
              <p className="mb-2">Make every class count.</p>
              <p className="mb-2">We believe that understanding the concepts induces creativity.</p>
              <p>Personalized training for the IB curriculum.</p>
            </div>
            {/* Contact Us Section */}
            <div className="text-white  ">
              <h3 className="text-2xl font-bold mb-4 text-white">Contact Us</h3>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <p className="text-lg">Email:</p>
                  <Link href="mailto:info@conceptlearning.nl" className="text-lg hover:underline text-white">
                    info@conceptlearning.nl
                  </Link>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <p className="text-lg">WhatsApp:</p>
                  <Link href="https://dm.wa.link/cbqwcv" target="_blank" className="text-lg hover:underline text-white">
                    +31633844315
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-white mt-8">
            <p className="text-sm">&copy; {new Date().getFullYear()} Concept Learning</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
