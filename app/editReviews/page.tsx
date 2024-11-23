

// "use client";

// import React, { useEffect, useState } from 'react';
// import supabase from '@/components/supabaceClient';
// import { useRouter } from 'next/navigation';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPen } from '@fortawesome/free-solid-svg-icons';

// const EditReview: React.FC = () => {
//   const [name, setName] = useState('');
//   const [subject, setSubject] = useState('');
//   const [category, setCategory] = useState('');
//   const [batch, setBatch] = useState('');  
//   const [feedback, setFeedback] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);
//   const [editingReviewId, setEditingReviewId] = useState<string | null>(null);
//   const [reviews, setReviews] = useState<any[]>([]);
//   const [studentReviews, setStudentReviews] = useState<any[]>([]);
//   const [draggedItemId, setDraggedItemId] = useState<string | null>(null);
//   const [draggingOverIndex, setDraggingOverIndex] = useState<number | null>(null);
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [selectedSortOption, setSelectedSortOption] = useState<string | null>(null);
//   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
//   const [isSortOpen, setIsSortOpen] = useState(false);

//   const router = useRouter();

//   const handleSelectCategory = (option: string) => {
//     setCategory(option);
//     setSelectedCategory(option);
//     setIsCategoryOpen(false);
//   };

//   const handleSelectSortOption = (option: string) => {
//     setSelectedSortOption(option);
//     setIsSortOpen(false);
//     setSelectedSortOption(option);
//   };

//   const scrolltoHash = (element_id: string) => {
//     const element = document.getElementById(element_id);
//     element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const targetTable = category === 'Parent' ? 'reviews' : 'studentReview';

//     try {
//       if (editingReviewId) {
//         // Update existing review
//         const { error } = await supabase
//           .from(targetTable)
//           .update({ name, subject, category, batch, feedback })
//           .eq('id', editingReviewId);

//         if (error) throw new Error(error.message);
//         setSuccess('Review updated successfully!');
//       } else {
//         // Insert new review
//         const { error } = await supabase
//           .from(targetTable)
//           .insert([{ name, subject, category, batch, feedback }]);
        
//         if (error) throw new Error(error.message);
//         setSuccess('Review submitted successfully!');
//         router.push('/');
//       }

//       // Fetch updated data
//       await getData();
//     } catch (error) {
//       setError((error as Error).message);
//       setSuccess(null);
//     } finally {
//       // Reset form
//       resetForm();
//     }
//   };

//   const resetForm = () => {
//     setName('');
//     setSubject('');
//     setCategory('');
//     setBatch(''); 
//     setFeedback('');
//     setEditingReviewId(null);
//   };

//   const handleEdit = (review: any, isStudentReview: boolean) => {
//     setEditingReviewId(review.id);
//     setName(review.name);
//     setSubject(review.subject);
//     setCategory(review.category);
//     setBatch(review.batch || '');  
//     setFeedback(review.feedback);

//     setCategory(isStudentReview ? 'Student' : 'Parent');
//     scrolltoHash('form');
//   };

//   const options = ["Parent", "Student"];
//   const sortOptions = [
//     { label: "Sort by Position", value: "position" },
//     { label: "Sort Alphabetically", value: "alphabetical" }
//   ];

//   const getData = async () => {
//     try {
//       const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
//       if (sessionError) throw new Error(sessionError.message);
      
//       const sessionUser = sessionData.session?.user;

//       // Fetch parent reviews
//       const { data: reviewsData, error: reviewsError } = await supabase
//         .from("reviews")
//         .select("*")
//         .order('position',{ ascending: true });

//       if (reviewsError) throw new Error(reviewsError.message);
//       if (!reviewsData) throw new Error('Data not found');

//       // Fetch student reviews
//       const { data: studentReviewsData, error: studentReviewsError } = await supabase
//         .from("studentReview")
//         .select("*")
//         .order('position', { ascending: true });

//       if (studentReviewsError) throw new Error(studentReviewsError.message);

//       let sortedReviews = reviewsData;
//       let sortedStudentReviews = studentReviewsData;

//       if (selectedSortOption === 'alphabetical') {
//         sortedReviews.sort((a, b) => a.name.localeCompare(b.name));
//         sortedStudentReviews.sort((a, b) => a.name.localeCompare(b.name));
//       } else {
//         // Default to sorting by position
//         sortedReviews.sort((a, b) => a.position - b.position);
//         sortedStudentReviews.sort((a, b) => a.position - b.position);
//       }
//       setReviews(sortedReviews);
//       setStudentReviews(sortedStudentReviews || []);
//     } catch (error) {
//       setError((error as Error).message);
//     }
//   };

//   const handleDragStart = (e: React.DragEvent, itemId: string) => {
//     e.dataTransfer.setData("text/plain", itemId);
//     setDraggedItemId(itemId);
//   };

//   const handleDragOver = (e: React.DragEvent, index: number) => {
//     e.preventDefault();
//     setDraggingOverIndex(index);
//   };

//   const handleDrop = async (e: React.DragEvent, dropIndex: number, reviewType: string) => {
//     e.preventDefault();
//     if (draggedItemId && draggingOverIndex !== null) {
//       const updatedReviews = reviewType === 'parent' ? [...reviews] : [...studentReviews];
//       const draggedIndex = updatedReviews.findIndex(review => review.id === draggedItemId);
//       const draggedItem = updatedReviews[draggedIndex];
//       updatedReviews.splice(draggedIndex, 1);
//       updatedReviews.splice(dropIndex, 0, draggedItem);
//       updatedReviews.forEach((review, index) => review.position = index + 1);

//       if (reviewType === 'parent') {
//         setReviews(updatedReviews);
//       } else {
//         setStudentReviews(updatedReviews);
//       }
      
//       setDraggingOverIndex(null);

//       const updates = updatedReviews.map((review) =>
//         supabase.from(reviewType === 'parent' ? 'reviews' : 'studentReview').update({ position: review.position }).eq('id', review.id)
//       );
//       try {
//         await Promise.all(updates);
//         setSuccess('Reviews reordered successfully!');
//         getData();
//       } catch (error) {
//         setError('Error updating review positions.');
//       }
//     }
//   };
//   const handleDrop1 = async (e: React.DragEvent, dropIndex: number, reviewType: string) => {
//     e.preventDefault();
//     if (draggedItemId && draggingOverIndex !== null) {
//       const updatedReviews = reviewType === 'student' ? [...reviews] : [...studentReviews];
//       const draggedIndex = updatedReviews.findIndex(review => review.id === draggedItemId);
//       const draggedItem = updatedReviews[draggedIndex];
//       updatedReviews.splice(draggedIndex, 1);
//       updatedReviews.splice(dropIndex, 0, draggedItem);
//       updatedReviews.forEach((review, index) => review.position = index + 1);

//       if (reviewType === 'student') {
//         setReviews(updatedReviews);
//       } else {
//         setStudentReviews(updatedReviews);
//       }
      
//       setDraggingOverIndex(null);

//       const updates = updatedReviews.map((review) =>
//         supabase.from(reviewType === 'student' ? 'studentReview' : 'reviews').update({ position: review.position }).eq('id', review.id)
//       );
//       try {
//         await Promise.all(updates);
//         setSuccess('Reviews reordered successfully!');
//         getData();
//       } catch (error) {
//         setError('Error updating review positions.');
//       }
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, [selectedSortOption]);

//   return (
//     <div className='bg-gradient-to-r from-blue-100 to-blue-50'>
//       <div className="container mx-auto p-4 md:p-6 lg:p-8 rounded-lg">
//         <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-black font-bold my-4 md:my-5">
//           {editingReviewId ? 'Edit Review' : 'Submit a Review'}
//         </h1>

//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         {success && <p className="text-green-500 mb-4">{success}</p>}

//         <form onSubmit={handleSubmit} id='form' className="space-y-4" >
//           <div>
//             <label htmlFor="name" className="block text-sm md:text-base lg:text-lg font-semibold text-black mb-2">Name</label>
//             <input
//               id="name"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md text-black"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="subject" className="block text-sm md:text-base lg:text-lg font-semibold text-black mb-2">Subject</label>
//             <input
//               id="subject"
//               type="text"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md text-black"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="category" className="block text-sm md:text-base lg:text-lg font-semibold text-black mb-2">Category</label>
//             <div className="relative w-full">
//               {/* Dropdown button */}
//               <button
//                 type="button"
//                 className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md text-black flex justify-between items-center"
//                 onClick={() => {
//                   setIsCategoryOpen(!isCategoryOpen);
//                   setIsSortOpen(false); 
//                 }}
//               >
//                 {category || "Select Category"}
//                 <svg
//                   className={`w-4 h-4 transition-transform transform ${
//                     isCategoryOpen ? "rotate-180" : "rotate-0"
//                   }`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>

//               {isCategoryOpen && (
//                 <ul className="absolute z-10 w-full  bg-white border border-gray-300 rounded-md mt-1">
//                   {options.map((option) => (
//                     <li
//                       key={option}
//                       className="px-3 py-2 text-black hover:bg-gray-100 cursor-pointer"
//                       onClick={() => handleSelectCategory(option)}
//                     >
//                       {option}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>
//           <div>
//             <label htmlFor="batch" className="block text-sm md:text-base lg:text-lg font-semibold text-black mb-2">Batch</label>
//             <input
//               id="batch"
//               type="text"
//               value={batch}
//               onChange={(e) => setBatch(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md text-black"
//             />
//           </div>
//           <div>
//             <label htmlFor="feedback" className="block text-sm md:text-base lg:text-lg font-semibold text-black mb-2">Feedback</label>
//             <textarea
//               id="feedback"
//               value={feedback}
//               onChange={(e) => setFeedback(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md text-black"
//               rows={4}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//           >
//             {editingReviewId ? 'Update Review' : 'Submit Review'}
//           </button>
//         </form>

//         <div className="mt-8">
//           <h2 className="text-xl font-semibold text-black mb-4">Reviews</h2>
//           <div className="relative">
//             {/* Sort dropdown */}
//             <button
//               type="button"
//               className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md text-black flex justify-between items-center"
//               onClick={() => {
//                 setIsSortOpen(!isSortOpen);
//                 setIsCategoryOpen(false); 
//               }}
//             >
//               {selectedSortOption ? sortOptions.find(option => option.value === selectedSortOption)?.label : "Sort Options"}
//               <svg
//                 className={`w-4 h-4 transition-transform transform ${
//                   isSortOpen ? "rotate-180" : "rotate-0"
//                 }`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </button>

//             {isSortOpen && (
//               <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1">
//                 {sortOptions.map((option) => (
//                   <li
//                     key={option.value}
//                     className="px-3 py-2 text-black hover:bg-gray-100 cursor-pointer"
//                     onClick={() => handleSelectSortOption(option.value)}
//                   >
//                     {option.label}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           <div className='flex flex-col md:flex-row justify-between '>
//           {/* Parent Reviews */}
//           <div className='flex flex-col w-full md:w-1/2 p-5 md:p-10'>
//           <h2 className="text-3xl text-black font-bold mt-8 text-center">Parent Reviews</h2>
//           <ul className="mt-4 space-y-4">
//             {reviews.map((review, index) => (
//               <li
//                 key={review.id}
//                 className={`bg-white p-4 shadow-md rounded-md ${draggingOverIndex === index ? 'border-2 border-blue-400' : ''}`}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, review.id)}
//                 onDragOver={(e) => handleDragOver(e, index)}
//                 onDrop={(e) => handleDrop(e, index, 'parent')}
//               >
//                 <p className="font-bold text-blue-600 text-xl">{review.name}</p>
//                 <p className="text-sm text-gray-600">{review.subject}</p>
//                 <p className="text-sm text-gray-600">{review.batch}</p>
//                 <p className="mt-2">{review.feedback}</p>
//                 <button
//                   onClick={() => handleEdit(review, false)}
//                   className="mt-3 text-blue-500 hover:text-blue-600 flex items-center"
//                 >
//                   <FontAwesomeIcon icon={faPen} className="mr-2" />
//                   Edit
//                 </button>
//               </li>
//             ))}
//           </ul>
//           </div>

//           {/* Student Reviews */}

//           <div className='flex flex-col w-full md:w-1/2 p-5 md:p-10'>
//           <h2 className="text-3xl text-black font-bold mt-8 text-center">Student1 Reviews</h2>
//           <ul className="mt-4 space-y-4">
//             {studentReviews.map((review, index) => (
//               <li
//                 key={review.id}
//                 className={`bg-white p-4 shadow-md rounded-md ${draggingOverIndex === index ? 'border-2 border-blue-400' : ''}`}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, review.id)}
//                 onDragOver={(e) => handleDragOver(e, index)}
//                 onDrop={(e) => handleDrop1(e, index, 'student')}
//               >
//                 <p className="font-bold text-blue-600 text-xl">{review.name}</p>
//                 <p className="text-sm text-gray-600">{review.subject}</p>
//                 <p className="text-sm text-gray-600">{review.batch}</p>
//                 <p className="mt-2">{review.feedback}</p>
//                 <button
//                   onClick={() => handleEdit(review, false)}
//                   className="mt-3 text-blue-500 hover:text-blue-600 flex items-center"
//                 >
//                   <FontAwesomeIcon icon={faPen} className="mr-2" />
//                   Edit
//                 </button>
//               </li>
//             ))}
//           </ul>
//           </div>
         

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditReview;




"use client";

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const EditReview: React.FC = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('');
  const [batch, setBatch] = useState('');
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [editingReviewId, setEditingReviewId] = useState<string | null>(null);
  const [reviews, setReviews] = useState<any[]>([]); // Parent reviews
  const [studentReviews, setStudentReviews] = useState<any[]>([]); // Student reviews

  // Fetch the reviews data
  const fetchData = async () => {
    try {
      const responseParent = await fetch('/data/parentReviews.json');
      const dataParent = await responseParent.json();
      setReviews(dataParent.parentReviews || []);

      const responseStudent = await fetch('/data/studentReviews.json');
      const dataStudent = await responseStudent.json();
      setStudentReviews(dataStudent.studentReviews || []);
    } catch (error) {
      setError('Failed to load data');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Submit form handling
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const targetTable = category === 'Parent' ? 'reviews' : 'studentReview';

    try {
      // Save data logic goes here. Example:
      const response = await fetch(`/api/saveReview`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, subject, category, batch, feedback }),
      });
      const data = await response.json();
      setSuccess(data.message || 'Review submitted successfully.');
    } catch (error) {
      setError('Failed to save review');
    }

    // Optionally reset form
    resetForm();
  };

  // Reset form
  const resetForm = () => {
    setName('');
    setSubject('');
    setCategory('');
    setBatch('');
    setFeedback('');
    setEditingReviewId(null);
  };

  const handleEdit = (review: any, isStudentReview: boolean) => {
    setEditingReviewId(review.id);
    setName(review.name);
    setSubject(review.subject);
    setCategory(review.category);
    setBatch(review.batch || '');
    setFeedback(review.feedback);
  };

  const options = ['Parent', 'Student'];

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="container mx-auto p-4 md:p-6 lg:p-8 rounded-lg">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-black font-bold my-4 md:my-5">
          {editingReviewId ? 'Edit Review' : 'Submit a Review'}
        </h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        <form onSubmit={handleSubmit} id="form" className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm md:text-base lg:text-lg font-semibold text-black mb-2">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm md:text-base lg:text-lg font-semibold text-black mb-2">Subject</label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm md:text-base lg:text-lg font-semibold text-black mb-2">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md text-black"
              required
            >
              <option value="">Select Category</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="batch" className="block text-sm md:text-base lg:text-lg font-semibold text-black mb-2">Batch</label>
            <input
              id="batch"
              type="text"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="feedback" className="block text-sm md:text-base lg:text-lg font-semibold text-black mb-2">Feedback</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md text-black"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            {editingReviewId ? 'Update Review' : 'Submit Review'}
          </button>
        </form>

        {/* Render Parent Reviews */}
        <div className="mt-8">
          <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">Parent Reviews</h2>
          {reviews.length === 0 ? (
            <p>No reviews available</p>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="border p-4 mb-2 rounded-lg shadow-md bg-white">
                <h3 className="font-bold text-lg text-blue-600">{review.name}</h3>
                <p>{review.feedback}</p>
                <button onClick={() => handleEdit(review, false)} className="text-blue-500">
                  <FontAwesomeIcon icon={faPen} /> Edit
                </button>
              </div>
            ))
          )}
        </div>

        {/* Render Student Reviews */}
        <div className="mt-8">
          <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">Student Reviews</h2>
          {studentReviews.length === 0 ? (
            <p>No reviews available</p>
          ) : (
            studentReviews.map((review) => (
              <div key={review.id} className="border p-4 mb-2 rounded-lg shadow-md bg-white">
                <h3 className="font-bold text-lg text-blue-600">{review.name}</h3>
                <p>{review.feedback}</p>
                <button onClick={() => handleEdit(review, true)} className="text-blue-500">
                  <FontAwesomeIcon icon={faPen} /> Edit
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>  
  );
};

export default EditReview;

