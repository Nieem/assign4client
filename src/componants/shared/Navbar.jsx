import React from 'react';
import logo from "../../assets/navlogo.jpg";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
   <div className="navbar  bg-sky-950 top-0 text-white z-20" id="nabbarhide -z-10">
  
<div className="navbar-start">
    <img src={logo} alt="Logo" className="w-14"/>
    <Link to="/">
    <span className="text-2xl font-bold ml-2">Brothers Book House</span>
    </Link>
  </div>
  
   
  

  <div id="navbtnId" className="navbar-center hidden lg:flex md:flex">
    <ul className="menu menu-horizontal px-1">
     <li><Link className="navbtn hover:bg-red-700" to="/"> Home</Link></li>
        <li><Link className="navbtn hover:bg-red-700" to="/about"> About</Link></li>
        <li><Link className="navbtn hover:bg-red-700" to="/blog"> Blog</Link></li>
         <li><Link className="navbtn hover:bg-red-700" to="/faq"> FAQ</Link></li>
    </ul>
  </div>

 {/* humbege menu  */}
 <div className='navbar-end hidden lg:flex md:flex gap-5'>
 <li><a id="chicken" className="ml-20navbtn hover:bg-red-700" href="#mainpart">Buy Book</a></li>
 <li><a id="beef" className="navbtn hover:bg-red-700" href="#mainpart">Sign In</a></li>
 </div>
<div className=" navbar-end lg:hidden md:hidden">

<div className="dropdown">
<div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
<svg
xmlns="http://www.w3.org/2000/svg"
className="h-5 w-5"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor">
<path
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="2"
  d="M4 6h16M4 12h16M4 18h7" />
</svg>
</div>

<ul
tabIndex="0"
className="menu menu-sm dropdown-content z-30 bg-slate-800 rounded-box -translate-x-20  mt-3 w-32 p-2 shadow hover:bg-slate-400">
<li><a id="potato"  className="hover:bg-red-700" href="#mainpart">Home</a></li>
<li><a id="soup"  className="hover:bg-red-700" href="#mainpart">About</a></li>
<li><a id="chicken"  className="hover:bg-red-700" href="#mainpart">Blog</a></li>
<li><a id="beef"  className="hover:bg-red-700" href="#mainpart">FAQ</a></li>
<li><a id="chicken"  className="hover:bg-red-700" href="#mainpart">Buy Book</a></li>
<li><a id="beef"  className="hover:bg-red-700" href="#mainpart">Sign in</a></li>
</ul>

</div>
</div>

{/* <!-- end humberg --> */}
</div>
{/* <!-- Navbar end --> */}
{/* <!-- banner start --> */}
</>
    
    );
};

export default Navbar;