

// "use client";

// import React, { useEffect, useState } from 'react';
// import supabase from '@/components/supabaceClient';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { IoMdArrowRoundForward } from "react-icons/io";
// import Link from 'next/link';


// const  Parentreview: React.FC = () => {
//   const [reviews, setReviews] = useState<any[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       once: true,
//     });
//   }, []);

//   useEffect(() => {
//     const getdata = async () => {
//       const { data: reviewsData, error: reviewsError } = await supabase.from('reviews').select('*').order('position', { ascending: true });
//       if (reviewsError) {
//         setError('Something went wrong.');
//       } else {
//         setReviews(reviewsData || []);
//       }
//     };

//     getdata();
//   }, []);

//   return (
//     <div className='bg-gradient-to-r from-blue-100 to-blue-50 overflow-hidden'>
//       <div className="p-6 rounded-lg container mx-auto">
//       <h1 className="text-5xl md:text-6xl text-center font-bold mb-10 text-black">Parent <br /><span className='text-blue-600'>Testimonials</span></h1>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <ul className="space-y-6 flex flex-col justify-center items-center">
//           {reviews.map((review,index) => (
//             <li
//               key={review.id}
//               data-aos={`${index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'}`}
//               className={`${index % 2 === 0 ? 'chat-start' : 'chat-end'} chat transition-transform transform w-full md:w-1/2`}
//             >
//               <div className="chat-bubble p-4 bg-white flex flex-col space-y-2 ">
//                 <span className="text-lg font-semibold text-blue-500">{review.name}</span>
//                 <span className="text-sm text-gray-600">{review.category}</span>
//                 <span className="text-sm text-gray-600">{review.subject}</span>
//                 <span className="text-xs text-gray-500">{review.batch}</span>
//                 <p className="text-sm text-gray-700">{review.feedback}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className='px-4 py-20'>
//   <div className='container mx-auto bg-opacity-80 rounded-lg p-6'>
//     <div className='flex flex-col gap-6'>
//       <div className="container mx-auto flex justify-center items-center " >
//         <Link href={"/reviews/studentsreview"} className='text-center text-black text-2xl font-bold border-2-blue-500 bg-white p-5 rounded-2xl hover:bg-blue-500 group-hover:text-white transition-colors duration-300 group'>
//           <button className="flex items-center gap-2">
//             Students <span className='text-blue-600 group-hover:text-white'>Testimonials</span> 
//             <IoMdArrowRoundForward className="group-hover:text-white" />
//           </button>
//         </Link>
//       </div>
//     </div>
//   </div>
// </div>
//     </div>
//   );
// };

// export default Parentreview;



// "use client";

// import React, { useEffect, useState } from 'react';
// import supabase from '@/components/supabaceClient';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { IoMdArrowRoundForward } from "react-icons/io";
// import Link from 'next/link';

// const Parentreview: React.FC = () => {
//   const [reviews, setReviews] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       once: true,
//     });
//   }, []);

//   useEffect(() => {
//     const getdata = async () => {
//       setLoading(true); // Start loading
//       const { data: reviewsData, error: reviewsError } = await supabase
//         .from('reviews')
//         .select('*')
//         .order('position', { ascending: true });

//       if (reviewsError) {
//         setError('Something went wrong.');
//       } else {
//         setReviews(reviewsData || []);
//       }
//       setLoading(false); // Stop loading once data is fetched
//     };

//     getdata();
//   }, []);

//   return (
//     <div className='bg-gradient-to-r from-blue-100 to-blue-50 overflow-hidden'>
//       <div className="p-6 rounded-lg container mx-auto">
//         <h1 className="text-5xl md:text-6xl text-center font-bold mb-10 text-black">
//           Parent <br />
//           <span className='text-blue-600'>Testimonials</span>
//         </h1>
//         {loading ? (
//           <div className="flex justify-center items-center py-10">
//             <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
//           </div>
//         ) : error ? (
//           <p className="text-red-500 mb-4">{error}</p>
//         ) : (
//           <ul className="space-y-6 flex flex-col justify-center items-center">
//             {reviews.map((review, index) => (
//               <li
//                 key={review.id}
//                 data-aos={`${index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'}`}
//                 className={`${index % 2 === 0 ? 'chat-start' : 'chat-end'} chat transition-transform transform w-full md:w-1/2`}
//               >
//                 <div className="chat-bubble p-4 bg-white flex flex-col space-y-2">
//                   <span className="text-lg font-semibold text-blue-500">{review.name}</span>
//                   <span className="text-sm text-gray-600">{review.category}</span>
//                   <span className="text-sm text-gray-600">{review.subject}</span>
//                   <span className="text-xs text-gray-500">{review.batch}</span>
//                   <p className="text-sm text-gray-700">{review.feedback}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//       <div className='px-4 py-20'>
//         <div className='container mx-auto bg-opacity-80 rounded-lg p-6'>
//           <div className='flex flex-col gap-6'>
//             <div className="container mx-auto flex justify-center items-center">
//               <Link href="/reviews/studentsreview" className='text-center text-black text-2xl font-bold border-2-blue-500 bg-white p-5 rounded-2xl hover:bg-blue-500 group-hover:text-white transition-colors duration-300 group'>
//                 <button className="flex items-center gap-2">
//                   Students <span className='text-blue-600 group-hover:text-white'>Testimonials</span>
//                   <IoMdArrowRoundForward className="group-hover:text-white" />
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Parentreview;



"use client";

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoMdArrowRoundForward } from "react-icons/io";
import Link from 'next/link';

const Parentreview: React.FC = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [tabData, setTabData] = useState<{ [key: string]: any[] }>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        console.log("Fetching data from Google Sheets...");
        const sheetId = '1_XgwtS7vj6DguQUFVORWk5CeU4aHpYHD97O3Lj2XmAY';
        const gid = [
          { name: 'ParentReviews', gid: '0' },
        ];
        const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&gid=${gid}`;
  
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data from Google Sheets");
        }
  
        const rawText = await response.text();
        console.log("Raw Response Text:", rawText);
  
        const parseGoogleSheetsResponse = (rawText: string) => {
          try {
            const jsonString = rawText.substring(47).slice(0, -2);
            const json = JSON.parse(jsonString);
            return json;
          } catch (error) {
            console.error("Error parsing Google Sheets response:", error);
            return null;
          }
        };
        const jsonData = parseGoogleSheetsResponse(rawText);
        console.log("Parsed JSON:", jsonData);
  
        if (jsonData) {
          // Extract rows from the parsed JSON
          const rows =
            jsonData?.table?.rows?.map((row: any) =>
              row?.c?.reduce((acc: any, cell: any, index: number) => {
                const headers = ['id', 'name', 'category', 'subject', 'batch', 'feedback'];
                acc[headers[index] || `field_${index}`] = cell?.v || '';
                return acc;
              }, {})
            ) || [];
  
          console.log("Processed Rows:", rows);
          setReviews(rows);
        }
      } catch (err) {
        console.error("Error in fetching Google Sheets data:", err);
        setError("Something went wrong while fetching data.");
      } finally {
        setLoading(false);
      }
    };
  
    getData();
  }, []);
  
//   const sheetId = '1_XgwtS7vj6DguQUFVORWk5CeU4aHpYHD97O3Lj2XmAY';
// const tabs = [
//   { name: 'ParentReviews', gid: '0' },
// ];


//   const fetchTabData = async (gid: string) => {
//     const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&gid=${gid}`;
//     const response = await fetch(url);
//     const rawText = await response.text();

//     const jsonString = rawText.substring(47).slice(0, -2);
//     const json = JSON.parse(jsonString);

//     // Process rows into a usable format
//     const rows = json?.table?.rows?.map((row: { c: { v: any }[] }) =>
//       row?.c?.map((cell: { v: any }) => cell?.v || '')
//     );
//     console.log("Fetched rows:", rows);

//     return rows;
//   };

//   const fetchAllTabs = async () => {
//     const allData: { [key: string]: any[] } = {};
//     for (const tab of tabs) {
//       const data = await fetchTabData(tab.gid);
//       allData[tab.name] = data;
//     }
//     return allData;
//   };

//   useEffect(() => {
//     const loadData = async () => {
//       setLoading(true);
//       try {
//         const data = await fetchAllTabs();
//         setTabData(data);
//         console.log('Fetched data from all tabs:', data);
//         return data;
//       } catch (err) {
//         console.error('Error fetching data:', err);
//         setError('Failed to fetch data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     getData();
//   }, []);

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-50 overflow-hidden">
      <div className="p-6 rounded-lg container mx-auto">
        <h1 className="text-5xl md:text-6xl text-center font-bold mb-10 text-black">
          Parent <br />
          <span className="text-blue-600">Testimonials</span>
        </h1>

        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          </div>
        ) : error ? (
          <p className="text-red-500 mb-4">{error}</p>
        ) : (
          <ul className="space-y-6 flex flex-col justify-center items-center">
            {reviews.map((review, index) => (
              <li
                key={review.id || index}
                data-aos={`${index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'}`}
                className={`chat ${index % 2 === 0 ? 'chat-start' : 'chat-end'} transition-transform transform w-full md:w-1/2`}
              >
                <div className="chat-bubble p-4 bg-white flex flex-col space-y-2">
                  <span className="text-lg font-semibold text-blue-500">{review.name}</span>
                  <span className="text-sm text-gray-600">{review.category}</span>
                  <span className="text-sm text-gray-600">{review.subject}</span>
                  <span className="text-xs text-gray-500">{review.batch}</span>
                  <p className="text-sm text-gray-700">{review.feedback}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="px-4 py-20">
        <div className="container mx-auto bg-opacity-80 rounded-lg p-6">
          <div className="flex flex-col gap-6">
            <div className="container mx-auto flex justify-center items-center">
              <Link href="/reviews/studentsreview" legacyBehavior>
                <a className="text-center text-black text-2xl font-bold border-2 border-blue-500 bg-white p-5 rounded-2xl hover:bg-blue-500 group-hover:text-white transition-colors duration-300 group">
                  <button className="flex items-center gap-2">
                    Students <span className="text-blue-600 group-hover:text-white">Testimonials</span>
                    <IoMdArrowRoundForward className="group-hover:text-white" />
                  </button>
                </a>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parentreview;
