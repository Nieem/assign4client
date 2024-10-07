import React from 'react';

const Contactus = () => {
    return (
       <div className="hero bg-base-200 min-h-screen">        
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact  Us!</h1>
      <p className="py-6">
        Email: contact@bdit
        Phone: 0955778899
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Reg no:</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">Details:</span>
          </label>
          <input type="textarea" placeholder="type your text" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Contactus;