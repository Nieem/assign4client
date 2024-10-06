import {createBrowserRouter, Navigate,NavLink, Route, Routes} from "react-router-dom";
import CommonLayout from "../layout/commonlayout";
import Bookspage from "../pages/coursepage";
import BookDetailspage from "../pages/coursedetailspage";
import Homepage from "../pages/homepage";
import { ROUTES } from "../routes";
import NotFoundPage from "../pages/notfound-404";
import Faqpage from "../pages/faq";
import About from "../pages/about";
import Blog from "../pages/blog";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./privateroutes";

const router=createBrowserRouter([
    {
        
        path:`${ROUTES.HOME}`,
        element:<CommonLayout/>, 
        //errorElement:<NotFoundPage/>, 
        children:[
            {
                path:`${ROUTES.HOME}`,
                element:<Homepage/>  ,
                loader: () =>
                    // fetch(`http://localhost:5000/courseDetails`),
                 fetch(`https://assign4server.vercel.app/courseDetails`),
   
           } ,
            {
             path:`${ROUTES.COURSES}`, 
             
             element:(<PrivateRoute>
                <Bookspage/> 
             </PrivateRoute>),
             loader: () =>
                // fetch(`http://localhost:5000/courseDetails`),
             fetch(`https://assign4server.vercel.app/courseDetails`),
          } ,

        {
            path:`${ROUTES.SINGLE_COURSES.STATIC}`,
            element:(<PrivateRoute>
            <BookDetailspage/>
            </PrivateRoute>) ,
            loader: ({params}) =>
                // fetch(`http://localhost:5000/courseDetails`),
             fetch(`https://assign4server.vercel.app/courseDetails/${params.courseId}`),

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

        },
        {
            path:"/register",
            element:<Register/>
          },
          {
            path:"/login",
            element:<Login/>
          }

      
    ],
   
     

    }
]);
{/* <Routes>
<Route path="*" exact element={<NotFoundPage/>} />
</Routes> */}

export default router;
 