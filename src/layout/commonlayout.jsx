import {Outlet} from "react-router-dom";
import Navbar from "../componants/shared/navbar";
import Footer from "../componants/shared/footer";
import Homepage from "../pages/homepage";

export default function CommonLayout(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>

    );

}
