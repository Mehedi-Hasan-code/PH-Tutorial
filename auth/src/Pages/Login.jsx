import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Components/Context/AuthContext";

const Login = () => {
  const {signInUser} = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
  const handleLogIn = e => {
    e.preventDefault()
    const email = e.target.email.value 
    const password = e.target.password.value
    // login
    signInUser(email, password)
      .then(() => {
        setSuccessMessage('Login successful')
      })
      .catch(err => {
        setErrorMessage(err.message)
      })

  }
  return (
    <div className="hero bg-base-200 my-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogIn} className="fieldset">
              <label className="label">Email</label>
              <input name="email" type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input name="password" type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            {
                errorMessage && <p className="text-red-500">{errorMessage}</p>
            }
            {
                successMessage && <p className="text-green-500">{successMessage}</p>
            }
            <p>Don't have an account ? <Link className="text-blue-500" to="/register">Register Now</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
