import React from 'react';
import Bookspage from './bookspage';
import Navbar from '../componants/shared/navbar';
import Banner from '../componants/banner';
import Footer from '../componants/shared/footer';

const Homepage = () => {
    return (
       <>
       
       <Banner/>
       <Bookspage/>
       
       </>
    );
};

export default Homepage;