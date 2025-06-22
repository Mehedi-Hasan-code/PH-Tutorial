import React from 'react';

const SignUp = () => {
  return (
    <div className="w-full h-full flex items-center">
      <div className="card-body flex justify-center items-center lg:items-end">
        <fieldset className="fieldset w-full max-w-md">
          <label className="label">Email</label>
          <input type="email" className="input  w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  );
};

export default SignUp;
