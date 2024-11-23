"use client"
import React, { useEffect, useState } from 'react'
import './book.css'  
import Link from 'next/link';
import { MdOutlineScience } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { GiNewspaper } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import { FaMagnet } from "react-icons/fa6";
import { FaHeartPulse } from "react-icons/fa6";
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoMdArrowRoundUp } from "react-icons/io";

export default function Lesson() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);


    return (
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 py-16 overflow-hidden">
            <section className="container mx-auto p-4  ">
                <div className="mb-8 text-center">
                    <h2 className="text-5xl font-bold text-black">Lesson</h2>
                </div>
                <div className="flex flex-wrap gap-8 md:gap-12 justify-center items-start">
    {/* Lesson Cards */}
    {[
      {
        imgSrc: '/Introduction.jpg',
        title: 'Introduction',
        text: "The IB program offers structured lessons in Mathematics and Science, focusing on criteria-based learning as expected by the IB curriculum. In addition to subject knowledge, students will develop writing skills, with an emphasis on understanding real-life situations and applied learning. They'll also be trained in technical writing and research, ensuring a strong grasp of each unit's topics and concepts.",
      },
      {
        imgSrc: '/Syllabus.jpg',
        title: 'Syllabus',
        text: 'IB MYP and DP syllabus will be covered as per the curriculum. Every unit is approached and taught with reference to criteria mentioned for that unit. The student will be trained on how to reflect ideas for the criteria requirements and to be with the context of relevancy.',
      },
      {
        imgSrc: '/Tests.jpg',
        title: 'Tests',
        text: 'Students will be engaged with regular time assured unit tests after completion of every unit in addition to several practice papers. Model question paper to help final year students to get a preparatory exam experience for mock and e-assessments.',
      },
      {
        imgSrc: '/Time.jpg',
        title: 'Time & Charges',
        text: (
          <>
            One-hour class per subject and once a week, charged per hour. You can choose two subjects on two different days or on the same day. Choose your convenient time and day. The charges vary depending on the student's year of study. For more details, mail at{' '}
            <Link href="mailto:info@conceptlearning.nl" className="text-blue-500 hover:underline">
              info@conceptlearning.nl
            </Link>
            .
          </>
        ),
      },
      {
        imgSrc: '/Typeoflession.jpg',
        title: 'Type of lessons',
        text: 'The classes are offline and online. You can choose the type of class as per your convenience. The classes are one to one. It’s one hour class. You can book one or more hours per week.',
      }
    ].map(({ imgSrc, title, text }, index) => (
      <div key={index} className='cloud   flex flex-col items-center'>
      <div   className="ease-in w-[350px] md:w-[400px] h-[500px] md:h-[500px]   ">
        <div   className="flex justify-center mt-10 ">
          <Image data-aos={`${index % 2 === 0 ? 'fade-right' : 'fade-left'}`} src={imgSrc} alt={title} width={1000} height={1000} className="w-20 h-20 md:w-24 md:h-24  rounded-full " />
        </div>
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 text-center text-blue-500 ">{title}</h3>
        <p className="text-xs md:text-xs lg:text-xs leading-4 text-justify md:leading-8 text-gray-700 ">{text}</p>
      </div>
      </div>
    ))}
  </div>



                <div className="my-8">
                    <h2 className="text-5xl my-20 text-center font-bold text-black">Classes</h2>
                

                <div className="flex flex-col gap-5 md:gap-20 justify-between items-center text-black">
                    
                    <div className='flex flex-col lg:flex-row gap-1 md:gap-10'>
                    <div className='flex flex-col md:flex-row gap-5 md:gap-5'>
                    <div className='book'>
                    
                   

                    <ul className='hardcover_front'>
                      <li>
                        <div className="coverDesign yellow">
                          
                          <h1>MYP 1</h1>
                        </div>
                      </li>
                      <li></li>
                    </ul>

                   

                    <ul className='page'>
                      <li></li>
                      <li>
                        <Link className="btn" href="/lesson">Lessons</Link>
                      </li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>

                    

                    <ul className='hardcover_back'>
                      <li></li>
                      <li></li>
                    </ul>
                    <ul className='book_spine'>
                      <li></li>
                      <li></li>
                    </ul>
                    </div>
                    <div className='ml-20 lg:ml-0 mb-10 flex flex-col justify-center  gap-2'>
                      <p className='flex'><MdOutlineScience className='mr-2'/> Science</p>
                      <p className='flex'><FaPlus className='mr-2' /> Mathematics (Standard)</p>
                      <p className='flex'><GiNewspaper className='mr-2'/> English (Writing & Research)</p>
                      <p className='flex'><GoPeople className='mr-2'/> Individuals& Societies(Writing & Research)</p>
                      
                    </div>
                    </div>

                   <div className='flex flex-col md:flex-row gap-5 md:gap-5'>
                    <div className='book'>

                    

                    <ul className='hardcover_front'>
                      <li>
                        <div className="coverDesign blue">
                          
                          <h1>MYP 2</h1>
                        </div>
                      </li>
                      <li></li>
                    </ul>

                 

                    <ul className='page'>
                      <li></li>
                      <li>
                        <Link className="btn" href="/lesson">Lessons</Link>
                      </li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>

                    

                    <ul className='hardcover_back'>
                      <li></li>
                      <li></li>
                    </ul>
                    <ul className='book_spine'>
                      <li></li>
                      <li></li>
                    </ul>
                    </div>
                    <div className='ml-20 lg:ml-0 mb-10 flex flex-col justify-center  gap-2'>
                    <p className='flex'><MdOutlineScience className='mr-2'/>Science</p>
                    <p className='flex'><FaPlus className='mr-2' />Mathematics (Standard)</p>
                  
                    </div>
                    </div>
                   
                    </div> 

                    <div className='flex flex-col lg:flex-row gap-1 md:gap-10'>
                   <div className='flex flex-col md:flex-row gap-10 md:gap-5'>
                    <div className='book'>

                  

                    <ul className='hardcover_front'>
                      <li>
                        <div className="coverDesign yellow">
                          
                          <h1>MYP 3,MYP 4,& MYP 5</h1>
                          
                        </div>
                      </li>
                      <li></li>
                    </ul>

                   

                    <ul className='page'>
                      <li></li>
                      <li>
                        <Link className="btn" href="/lesson">Lessons</Link>
                      </li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>

                   

                    <ul className='hardcover_back'>
                      <li></li>
                      <li></li>
                    </ul>
                    <ul className='book_spine'>
                      <li></li>
                      <li></li>
                    </ul>
                    </div>
                    <div className='ml-20 lg:ml-0 mb-10 flex flex-col justify-center  gap-2'>
                    <p className='flex'><MdOutlineScience className='mr-2'/>Science</p>
                    <p className='flex'><FaPlus className='mr-2'/>Mathematics (Standard & extended)</p>
                    </div>
                    </div>

                   <div className='flex flex-col md:flex-row gap-10 md:gap-5'>
                    <div className='book'>

                    

                    <ul className='hardcover_front'>
                      <li>
                        <div className="coverDesign blue">
                          
                          <h1>DP 1 & DP 2</h1>
                        </div>
                      </li>
                      <li></li>
                    </ul>

                   

                    <ul className='page'>
                      <li></li>
                      <li>
                        <Link className="btn" href="/lesson">Lessons  </Link>
                      </li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>

                    

                    <ul className='hardcover_back'>
                      <li></li>
                      <li></li>
                    </ul>
                    <ul className='book_spine'>
                      <li></li>
                      <li></li>
                    </ul>
                    </div>
                    <div className='ml-20 lg:ml-0 mb-10 flex flex-col justify-center  gap-2'>
                  
                    <p className='flex'><FaPlus className='mr-2'/> Math AA/AI , HL/SL</p>
                      <p className='flex'><FaMagnet className='mr-2'/>Physics HL/SL</p>
                      <p className='flex'><FaHeartPulse className='mr-2'/> Biology HL/SL</p>
                      
                    </div>
                    </div>
                   
                    </div>    
                    
                       
                    
                </div>



                </div>
               


                {/* <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="fixed bottom-8 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 z-50"
    aria-label="Scroll to top"
  >
   <IoMdArrowRoundUp className='text-2xl' />
  </button> */}
            </section>
        </div>
    )
}



