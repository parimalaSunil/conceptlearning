"use client";
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MdOutlineMail } from "react-icons/md";
import Hamburger from 'hamburger-react';
import { IoIosArrowDown } from "react-icons/io";

const Navbar: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const pathname = usePathname();
    const navbarRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
            setOpen(false);
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLinkClick = () => {
        setOpen(false);
        setDropdownOpen(false);
    };

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const linkClasses = "relative block py-1 px-4 text-gray-800 rounded transition-colors duration-300 hover:text-blue-600";
    const activeLinkClasses = "text-blue-600";
    
    // Determine if the current route is under /reviews
    const isReviewsActive = pathname.startsWith('/reviews');

    return (
        <div className="sticky top-0 bg-white shadow-md z-[1000]" ref={navbarRef}>
            <nav className="md:container md:mx-auto ">
                <div className='flex flex-row items-center justify-between p-4 md:p-6'>
                    <div>
                        <Link href="/">
                            <img
                                src="/concept.png"
                                alt="Concept Logo"
                                className="h-12 object-cover cursor-pointer"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-5">
                        <ul className="flex space-x-6">
                            {['/', '/lesson', '/about', '/contact'].map((href, index) => (
                                <li key={index} className="relative">
                                    <Link
                                        href={href}
                                        className={`${linkClasses} ${pathname === href ? activeLinkClasses : ''}`}
                                        onClick={handleLinkClick}
                                    >
                                        {href === '/' ? 'Home' : href.split('/')[1].charAt(0).toUpperCase() + href.split('/')[1].slice(1)}
                                        <span
                                            className={`absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform transition-transform duration-300 ease-in-out ${
                                                pathname === href ? 'scale-x-100' : 'scale-x-0'
                                            }`}
                                        ></span>
                                    </Link>
                                </li>
                            ))}

                            {/* Reviews Dropdown */}
                            <li className="relative">
                                <div
                                    className={`${linkClasses} cursor-pointer flex items-center justify-center ${isReviewsActive ? activeLinkClasses : ''}`}
                                    onClick={handleDropdownToggle}
                                >
                                    Reviews <IoIosArrowDown />
                                    <span className={`absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform transition-transform duration-300 ease-in-out ${isReviewsActive ? 'scale-x-100' : 'scale-x-0'}`}></span>
                                </div>
                                {isDropdownOpen && (
                                    <ul className="absolute left-0 top-full mt-1 w-40 bg-white shadow-md rounded-md z-50">
                                        <li>
                                            <Link href="/reviews/ParentReview" className={`${linkClasses}`} onClick={handleLinkClick}>
                                                Parent Reviews
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/reviews/studentsreview" className={`${linkClasses}`} onClick={handleLinkClick}>
                                                Student Reviews
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div className="md:hidden text-black">
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`md:hidden absolute top-20 left-0 w-full bg-white shadow-md z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}
                        
                    >
                        <ul className="flex flex-col items-center space-y-1 py-2">
                            {['/', '/lesson', '/about', '/contact'].map((href, index) => (
                                <li key={index} className="relative w-full text-center">
                                    <Link
                                        href={href}
                                        className={`${linkClasses} ${pathname === href ? activeLinkClasses : ''}`}
                                        onClick={handleLinkClick}
                                    >
                                        {href === '/' ? 'Home' : href.split('/')[1].charAt(0).toUpperCase() + href.split('/')[1].slice(1)}
                                        <span
                                            className={`absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform transition-transform duration-300 ease-in-out ${
                                                pathname === href ? 'scale-x-100' : 'scale-x-0'
                                            }`}
                                        ></span>
                                    </Link>
                                </li>
                            ))}

                            {/* Mobile Reviews Dropdown */}
                            <li className="relative w-full text-center">
                                <div
                                    className={`${linkClasses} cursor-pointer flex items-center justify-center ${isReviewsActive ? activeLinkClasses : ''}`}
                                    onClick={handleDropdownToggle}
                                >
                                    Reviews <IoIosArrowDown />
                                </div>
                                 {isDropdownOpen && (
                                    <ul className="absolute left-0 top-full mt-1 w-full bg-white shadow-md rounded-md z-50 py-2">
                                        
                                        <li>
                                            <Link href="/reviews/ParentReview"  className={`${pathname === '/reviews/ParentReview' ? activeLinkClasses : " text-black"}`}  onClick={handleLinkClick}>
                                                Parent Reviews
                                            </Link>
                                        </li>
                                        <li className='mb-2'>
                                        <Link 
    href="/reviews/studentsreview" 
    className={`  ${pathname === '/reviews/studentsreview' ? activeLinkClasses : "text-black"}`} 
    onClick={handleLinkClick}
>
    Student Reviews
                                        </Link>

                                        </li>
                                        
                                    </ul>
                                    
                                )}
                                    <span className={`absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform transition-transform duration-300 ease-in-out ${isReviewsActive ? 'scale-x-100' : 'scale-x-0'}`}></span>

                            </li>
                        </ul>
                    </div>

                    {/* Contact Info (Desktop Only) */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <div className="bg-white px-3 py-2 rounded-lg border border-gray-200 flex items-center cursor-pointer">
                            <MdOutlineMail className="w-7 h-7 text-gray-700 group-hover:animate-bounce transition-transform duration-300" />
                            <p className="ml-2 text-gray-700 hover:text-blue-500">
                                <Link href="mailto:info@conceptlearning.nl" target='_blank'>
                                    info@conceptlearning.nl
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
