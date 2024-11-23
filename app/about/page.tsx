import React from 'react'
import Image from 'next/image'


export default function About() {
    return (
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center lg:justify-between items-center">
                    {/* Profile Section */}
                    <div className="w-full md:w-1/2 lg:w-1/3 p-1 md:p-4 flex flex-col items-center text-center lg:text-left">
                        <div className="relative">
                            <Image 
                                width={250} 
                                height={250} 
                                alt="Parimala Kirangi" 
                                className="rounded-full mb-4 border-4 border-blue-300 shadow-lg transform transition-transform hover:scale-105 hover:border-blue-400" 
                                src="/parimala.jpg" 
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Parimala Kirangi</h3>
                        <p className="text-sm text-blue-500 font-semibold mt-2">FOUNDER</p>
                        <p className="text-sm text-gray-700 mt-4">Bachelor of Electrical and Electronics Engineering (BE),<br /> Master’s in Power Electronics (MTech)</p>
                        {/* <p className="text-sm text-gray-700">Master’s in Power Electronics (MTech, 2005)</p> */}
                    </div>

                    {/* Introduction Section */}
                    <div className="w-full md:w-1/2 lg:w-2/3 p-4 mt-8 lg:mt-0">
                        <div className=" p-3 md:p-8 rounded-lg  transition-shadow text-justify md:text-start">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Hello!</h2>
                            <p className="text-base text-gray-700 mb-4 leading-relaxed">
                            As a registered private tutor with over seven years of experience in the MYP and DP programs, I have observed that many students struggle with the demands of the IB curriculum, particularly its emphasis on research-based learning. The abundance of freely available online information often leaves them overwhelmed and confused. My tutoring approach addresses this by helping students stay focused, simplifying complex concepts, and guiding them on both what to study and how to study. My classes blend enthusiasm with structured learning, enabling students to reflect and respond effectively. Witnessing their progress and eventual success in securing university placements is deeply rewarding.
                            </p>
                            <p className="text-base text-gray-700 mb-4 leading-relaxed">
                            In addition to my tutoring, I have over 17 years of experience as an academic professional, having served as an Assistant Professor at prestigious engineering institutions in India. My career has been fulfilling, inspiring me daily as I work with bright undergraduate and postgraduate students at technical universities and IB schools.
                            </p>
                            <p className="text-base text-gray-700 mb-4 leading-relaxed">
                            Beyond teaching, I have also served as a Counselor and Mentor, supporting students in their personality development and guiding them through their final year Bachelor's and Master's thesis submissions with careful attention to detail.
                            </p>
                            {/* <p className="text-base text-gray-700 leading-relaxed">
                            I have also got an opportunity to help students with their personality development as their Counselor and Mentor along with training the students of being extremely thorough and careful as their project/research Guide during final year Bachelor’s and Master’s thesis submissions.
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
            
           
        </div>
        
    )
}
