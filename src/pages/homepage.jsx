import React from 'react';
import Bookspage from './coursepage';
import Navbar from '../componants/shared/navbar';
import Banner from '../componants/banner';
import Footer from '../componants/shared/footer';
import { useLoaderData } from 'react-router-dom';
import SingleBook from '../componants/shared/singlecourse';
import ProductrelatedImage from './productRelatedImages';
import p1 from '../../src/assets/java.webp'
import Contactus from './contactus';
import Aboutus from './aboutus';

const Homepage = () => {
    const courses = useLoaderData();
     console.log(courses);


     
    return (
       <>
       
       <Banner/>
       <ProductrelatedImage/>
       
      <Contactus/>
    
      <Aboutus/>

       
       </>
    );
};

export default Homepage;