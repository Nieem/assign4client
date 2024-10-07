import React from 'react';
import ownerimage from "../assets/owner.jpg"
const Aboutus = () => {
    return (
        <>
        <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-900">About Us</h2>
 <div className="card card-side bg-base-100 shadow-xl">
    
  <figure>
    <img
      src={ownerimage}
      alt="Movie"  className='rounded-full h-40 ps-10'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Md: Raysul Hasan</h2>
    <p>Upazila ICT Officer,Kalihati,Tangail</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View more</button>
    </div>
  </div>
</div>
</>
    );
};

export default Aboutus;