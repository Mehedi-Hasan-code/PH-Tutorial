import Lottie from 'lottie-react';
import React from 'react';
import registerAnimation from '../assets/register.json'
const Register = () => {
  return (
    <div className="hero bg-base-200 grow">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie style={{width: '200px'}} animationData={registerAnimation} loop = {true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <h1 className='text-3xl text-center font-bold mb-6'>Register Now !</h1>
              <label className="label">Email</label>
              <input type="email" className="input w-full" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input w-full"  placeholder="Password" />
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
