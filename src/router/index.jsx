import {createBrowserRouter, Navigate,NavLink, Route, Routes} from "react-router-dom";
import CommonLayout from "../layout/commonlayout";
import Bookspage from "../pages/bookspage";
import BookDetailspage from "../pages/bookdetailspage";
import Homepage from "../pages/homepage";
import { ROUTES } from "../routes";
import NotFoundPage from "../pages/notfound-404";
import Faqpage from "../pages/faq";
import About from "../pages/about";
import Blog from "../pages/blog";

const router=createBrowserRouter([
    {
        
        path:`${ROUTES.HOME}`,
        element:<CommonLayout/>, 
        //errorElement:<NotFoundPage/>, 
        children:[
            {
                path:`${ROUTES.HOME}`,
                element:<Homepage/>  
   
           } ,
            {
             path:`${ROUTES.BOOKS}`, 
             element:<Bookspage/>  

        } ,

        {
            path:`${ROUTES.SINGLE_BOOKS.STATIC}`,
            element:<BookDetailspage/>  

       } ,
       {
        path:"/faq",
        element:<Faqpage/>
       },
       {
        path:"/about",
        element:<About/>
       },
       {
        path:"/blog",
        element:<Blog/>
       },
        {   path:"*",
            element:<NotFoundPage/>,

        }
      
    ],
   
      

    }
]);
{/* <Routes>
<Route path="*" exact element={<NotFoundPage/>} />
</Routes> */}

export default router;
 