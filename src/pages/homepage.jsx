import React from 'react';
import Bookspage from './coursepage';
import Navbar from '../componants/shared/navbar';
import Banner from '../componants/banner';
import Footer from '../componants/shared/footer';
import { useLoaderData } from 'react-router-dom';
import SingleBook from '../componants/shared/singlecourse';
const Homepage = () => {
    const courses = useLoaderData();
     console.log(courses);
    return (
       <>
       
       <Banner/>
       {/* <Bookspage/> */}

       <div className='container my-12 relative p-7'>
        <div className=' justify-center grid grid-cols-1 gap-2  lg:grid-cols-3 md:grid-cols-2'>
           { courses.map((course) => ( 
                        <SingleBook key={course.course_id} course={course}/>

                    )) 

                }
        </div>
        </div>
       
       </>
    );
};

export default Homepage;