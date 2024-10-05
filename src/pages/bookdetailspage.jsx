import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import   jsondata from "../assets/book-data.json";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetailspage = () => {
    const [bookdetails,setbookdetail]=useState([]);
    const bookID= useParams();
    console.log(bookID);

    const notify = () => 
      {
        bookdetails?.map((book)=> (
        //console.log(book.bookID);
        toast(book.bookId+', '+book.bookName+" has Successfully Added to the Wise List")));

      }

    const getBookById=()=>{
        const loadData=[...jsondata];
        const filterdata=loadData.filter(b=>b.bookId==bookID.bookId);
        setbookdetail(filterdata);
        //console.log(loadData);
        console.log(bookdetails);
    }

   

useEffect(()=>{
getBookById();
},[])

    return (
        <div className='my-5'>
           {console.log(bookdetails)}
           {
            bookdetails?.map((book)=> (
             
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
      src={book.image}
      className="w-full rounded-lg shadow-2xl lg:w-1/2" />
    <div>
      <h1 className="text-5xl font-bold">{book.bookName}</h1>
      <p className="py-6">
        <span className='font-bold'>Author:</span><span className='italic'> {book.author}</span> &nbsp;
        <span className='font-bold'>Category:</span> <span>{book.category}</span>&nbsp;
        <span className='font-bold'>Review:</span> <span> {book.review}</span>&nbsp;
        <span className='font-bold'>Tages:</span> <span> {book.tags}</span>&nbsp;
        <span className='font-bold'>Total Page:</span> <span> {book.totalPages}</span>&nbsp;
        <span className='font-bold'>Publisher:</span> <span> {book.publisher}</span>&nbsp;
        <span className='font-bold'>Year of Publishing:</span> <span> {book.yearOfPublishing}</span>&nbsp;
        <span className='font-bold'>Rating:</span> <span> {book.rating}</span>&nbsp;
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