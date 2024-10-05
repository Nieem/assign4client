import React from 'react';
import { useState,useEffect } from 'react';
 import axios from 'axios';
 import jsondata from '../assets/book-data.json' 
import SingleBook from '../componants/shared/singlebook';

const  Bookspage = () => {
    const [bookList, setBookList] = useState([]); 
    const getAllBooks= async ()=>{
       // const data = await axios.get("../assets/book-data.json"); 
       const loadData=[...jsondata];
       console.log(loadData);
        setBookList(loadData); 
    }
    useEffect(() => { 
        getAllBooks();  
      }, []); 


    return (
        <div className='container my-12 relative p-7'>
        <div className=' justify-center grid grid-cols-1 gap-2  lg:grid-cols-3 md:grid-cols-2'>
           { bookList.map((book) => ( 
                        <SingleBook key={book.bookId} book={book}/>

                    )) 

                }
        </div>
        </div>
    );
};
export default Bookspage;