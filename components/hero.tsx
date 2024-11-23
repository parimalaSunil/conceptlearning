"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import supabase from './supabaceClient';
import Link from 'next/link';
import { IoMdArrowRoundForward } from "react-icons/io";

const Hero = () => {


  const [studentReviews, setStudentReviews] = useState<any[]>([]);
  const [reviews, setReviews] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);



    const HeroSection=[
      {img:'/hero3.png',title:'Progress Monitoring',des:'We regularly monitor student progress through practice tests. This helps identify areas for improvement and ensures that students stay on track with their studies.'},
      {img:'/heroimg4.png',title:'Student Support',des:'Our platform is designed to be a space where students can freely ask questions and get the support they need. We believe that every student is capable of success with the right guidance.'},
      {img:'/heroimg5.png',title:'Student Success',des:'Our classes have been instrumental in helping students develop the skills and knowledge they need to perform well academically and gain admission to their desired universities.'}
    ]


  
  // useEffect(() => {
  //   const getData = async () => {
  //     // Fetch session
  //     const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
  //     if (sessionError) {
  //       setError(sessionError.message);
  //       return;
  //     }

  //     // Fetch user info
  //     const user = sessionData.session?.user;
  //     setUserEmail(user?.email || null);

  //     // Fetch reviews
  //     const { data: reviewsData, error: reviewsError } = await supabase.from("reviews").select("*");
  //     // Fetch student reviews
  //     const { data: studentReviewsData, error: studentReviewsError } = await supabase.from("studentReview").select("*");

  //     if (reviewsError || studentReviewsError) {
  //       setError(reviewsError?.message || studentReviewsError?.message || null);
  //     } else {
  //       setReviews(reviewsData || []);
  //       setStudentReviews(studentReviewsData || []);
  //     }
  //   };

  //   getData();
  // }, []);


  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className='bg-gradient-to-r from-blue-100 to-blue-50 overflow-hidden'>

<div className="flex flex-col gap-5">


  <div className="container mx-auto flex flex-col p-3 md:p-10 justify-center ">
    <div className='p-3 md:px-20'>
      <h1 data-aos="fade-down" className="text-5xl md:text-6xl text-black font-bold text-left ">
        Empowering <span className='text-blue-700 font-bold'>IB  MYP</span> & <span className='text-blue-700 font-bold'>DP</span> <br /> Success for Over 7 Years
      </h1>
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center p-3 md:px-20 '>
    <div  className="flex flex-col  gap-10 md:w-1/2 text-center md:text-start">
      
      <p data-aos="fade-up" className="text-black leading-8 text-justify">
      Concept learning is a trusted name among parents and students over the past seven years. Knowing exactly what is needed by IB MYP and IB DP students is focused during the lessons.
      </p>
      <p data-aos="fade-up" className="text-black leading-8 text-justify">
      The lessons take care of the students personal way of learning and plan the agenda for both MYP and DP students. MYP subjects taken are Math standard and extended, Sciences, DP subjects covered are Math AA/AI HL/SL, Physics HL/SL and Biology HL/SL along with DP IA’s.
      </p>
      <p data-aos="fade-up" className="text-black leading-8 text-justify">
      Student’s progress is monitored by regular practice tests. It’s a platform for the students enquiries and questions.</p>
      <p data-aos="fade-up" className="text-black leading-8 text-justify">
      Every Student is capable, they just need a steered direction. The classes have assisted and helped in overall development of the students to perform and get into their desired universities.
      </p>
    </div>
    <div  className="w-full md:w-1/2">
      <Image data-aos="fade-left"
        src="/heroimg1.png"
        alt="heroimage"
        width={1000}
        height={1000}
        className="w-full h-full object-cover"
      />
    </div>
    </div>
  </div>

  <div className="container mx-auto flex flex-col gap-10 p-10 justify-center items-center ">
    <h1 className="text-5xl md:text-3xl text-black text-center font-bold">Subjects Offered</h1>
    <div className="flex flex-col md:flex-row gap-10 ">
      <div className=" bg-blue-500 text-white flex flex-col gap-3 p-5 w-full md:w-[300px] rounded-xl hover:scale-105 items-center  md:items-start text-center md:text-start justify-between">
        <h1 className=" text-xl font-bold">MYP Subjects</h1>
        <p>Math (Standard and Extended), Sciences</p>
        <Link href={"/lesson"}>
  <button className=" bg-white text-black p-2 rounded-lg transition duration-300  hover:text-white hover:bg-black ">
    Discover Lesson
  </button>
</Link>
      </div>

      <div className="bg-blue-500 text-white flex flex-col gap-3 p-5 w-full md:w-[300px] rounded-xl hover:scale-105 items-center  md:items-start text-center md:text-start justify-between">
        <h1 className="text-xl font-bold">DP Internal Assessments</h1>
        <p>Support and  guidance</p>
        <Link href={"/lesson"}>
  <button className=" bg-white text-black p-2 rounded-lg transition duration-300  hover:text-white hover:bg-black">
    Discover Lesson
  </button>
</Link>
      </div>
      <div className="bg-blue-500 text-white flex flex-col gap-3 p-5 w-full md:w-[300px] rounded-xl hover:scale-105 items-center  md:items-start text-center md:text-start justify-between">
        <h1 className=" text-xl font-bold">DP Subjects</h1>
        <p>Math AA/AI HL/SL, Physics HL/SL, Biology HL/SL</p>
        <Link href={"/lesson"}>
  <button className=" bg-white text-black p-2 rounded-lg transition duration-300  hover:text-white hover:bg-black">
    Discover Lesson
  </button>
</Link>
      </div>
    </div>
  </div>

  <div className="mb-20 bg-whitey bg-orange-400 text-white p-5 lg:p-20">
    <div className="container mx-auto flex flex-col lg:flex-row p-1 lg:p-14 justify-center items-end">
    <div  className="w-full md:w-1/2">
      <Image data-aos="fade-right"
        src="/heroimg22.png"
        alt="heroimage"
        width={1000}
        height={1000}
        className="w-full h-full object-cover"
      />
    </div>
    <div  className="flex flex-col p-2 lg:p-10 gap-5   lg:w-1/3">
      <h1 data-aos="fade-down" className="text-4xl text-center md:text-left  font-bold">
      Personalized Learning
      </h1>
      <p data-aos="fade-up" className=" leading-8 text-justify">
      Our lessons cater to each student’s unique learning style, with carefully planned agendas for both MYP and DP students.
          We offer personalized instruction in MYP Math (Standard and Extended) and Sciences, as well as DP subjects including
          Math AA/AI HL/SL, Physics HL/SL, Biology HL/SL, and support for DP Internal Assessments (IA’s).
      </p>
    </div>
    
  </div>
  </div>


<div className='container mx-auto flex flex-col gap-20 p-5'>
  <h1 className='text-6xl font-bold text-center text-black'>Our Key Features</h1>
  {HeroSection.map((item,index) => (
    <div key={item.title}  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-center gap-5 items-end`}>
      <div className="w-full lg:w-1/3 h-auto">
        <Image
          data-aos="fade-up-right"
          src={item.img}
          alt={item.title} 
          width={1000}
          height={1000}
          className="w-[450px] h-[300px] object-cover"
        />
      </div>
      <div className="flex flex-col w-full lg:w-1/3 justify-center gap-5">
        <h1 data-aos="fade-down" className="text-2xl text-black text-center font-bold">
          {item.title}
        </h1>
        <p data-aos="fade-up" className="text-black leading-8 text-justify md:text-center">
          {item.des}
        </p>
      </div>
    </div>
  ))}
</div>

</div>






{/* review section */}

<div className='px-4 py-20'>
        <div className='container mx-auto bg-opacity-80 rounded-lg p-6'>
          <div className='flex flex-col gap-6'>
            <div className="container mx-auto flex justify-center items-center">
              <Link href="/reviews/ParentReview" className='text-center text-black text-2xl font-bold border-2-blue-500 bg-white p-5 rounded-2xl hover:bg-blue-500 group-hover:text-white transition-colors duration-300 group'>
                <button className="flex items-center gap-2">
                  Parent <span className='text-blue-600 group-hover:text-white'>Testimonials</span> 
                  <IoMdArrowRoundForward className="group-hover:text-white" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>







    </section>
  );
}

export default Hero;
