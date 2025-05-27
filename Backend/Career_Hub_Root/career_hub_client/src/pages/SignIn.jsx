import React, { useContext } from 'react';
import signInAnimation from '../assets/signIn.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../context/AuthContext';
const SignIn = () => {
  const {signIn} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    
    signIn(email, password)
      .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);

    })
      .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
    
  };
  return (
    <div className="hero bg-base-200 grow">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: '200px' }}
            animationData={signInAnimation}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset">
              <h1 className="text-3xl text-center font-bold mb-6">
                Sign In Now
              </h1>
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                name="email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
                name="password"
              />
              <button className="btn btn-neutral mt-4">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
