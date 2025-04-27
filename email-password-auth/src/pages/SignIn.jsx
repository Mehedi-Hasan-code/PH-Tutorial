import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    const email = e.target.email.value 
    const password = e.target.password.value
    setErrorMessage('')
    setSuccessMessage('')
    // login using firebase

    signInWithEmailAndPassword(auth, email, password)
      .then(userDetails => {
        console.log(userDetails);
        setSuccessMessage('Login successful')
      })
      .catch(err => {
        setErrorMessage(err.message)
      })
  }
  return (
    <div className="flex justify-center m-4">
      <div className="bg-base-200 border rounded-2xl sm:p-10">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mt-10">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}  className="fieldset">
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-2">Login</button>
            </form>
            {
              errorMessage && <p className="text-red-500">{errorMessage}</p>
            }
            {
              successMessage && <p className="text-green-500">{successMessage}</p>
            }
            <p>Don't have an account ? <Link className="text-blue-500" to="/SignUp">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignIn;
