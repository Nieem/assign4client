import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import   jsondata from "../assets/book-data.json";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 import { useLoaderData } from 'react-router-dom';

const BookDetailspage = () => {
  const courses = useLoaderData();
  console.log(courses);
    // const [bookdetails,setbookdetail]=useState([]);
    // const bookID= useParams();
    // console.log(bookID);

    const notify = () => 
      {
        courses?.map((course)=> (
        //console.log(book.bookID);
        toast(course.title+', '+course.price+" has Successfully Added to the Wise List")));

      }

    // const getBookById=()=>{
    //     const loadData=[...jsondata];
    //     const filterdata=loadData.filter(b=>b.bookId==bookID.bookId);
    //     setbookdetail(filterdata);
    //     //console.log(loadData);
    //     console.log(bookdetails);
    // }

   

// useEffect(()=>{
// getBookById();
// },[])

    return (
        <div className='my-5'>
           {/* {console.log(bookdetails)} */}
           {
            courses?.map((course)=> (
             
                //  <div className="card card-compact bg-base-100  shadow-xl border-solid  border-2 border-x-gray-300 hover:border-x-red-500">
                //     <figure className="px-10 pt-10">
                //     <img
                //       src={book.image}
                //       alt="Shoes"
                //       className="rounded-xl h-40" />
                //   </figure>
                //   <div className="card-body items-center text-center">
                //     <h2 className="card-title">{book.bookName}</h2>
                //     <p>If a dog chews shoes whose shoes does he choose?</p>
                //     <div className="card-actions">
                //       <button className="btn btn-primary">Buy Now</button>
                //     </div>
                //   </div>
               // </div>



<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row px-7">
    <img
      src={course.img_url}
      className="w-full rounded-lg shadow-2xl lg:w-1/2" />
    <div>
      <h1 className="text-5xl font-bold">{course.title}</h1>
      <p className="py-6">
        <span className='font-bold'>Details:</span><span className='italic'> {course.details}</span> &nbsp;
        <span className='font-bold'>Lession:</span> <span>{course.lession}</span>&nbsp;
        <span className='font-bold'>student:</span> <span> {course.student}</span>&nbsp;
        <span className='font-bold'>duration:</span> <span> {course.duration}</span>&nbsp;
        <span className='font-bold'>price:</span> <span> {course.price}</span>&nbsp;
        <span className='font-bold'>author:</span> <span> {course.author}</span>&nbsp;
        <span className='font-bold'>level:</span> <span> {course.level}</span>&nbsp;
        <span className='font-bold'>Rating:</span> <span> {course.ratings}</span>&nbsp;
      </p>
      <button className="btn btn-primary" onClick={notify}>Wise to Read</button>
      <button className="btn btn-accent ms-2" onClick={notify}>Add to Cart</button>
      <ToastContainer/>
    </div>
  </div>
</div>

                
            
))}
        </div>
    );
};

export default BookDetailspage;