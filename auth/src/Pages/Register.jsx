import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Components/Context/AuthContext";

const Register = () => {
  const {createUser} = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMessage('')
    setSuccessMessage('')


    // const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // firebase auth
    createUser(email, password)
      .then((userCredential) => {
        setSuccessMessage('Success')
        console.log(userCredential);
      })
      .catch((err) => setErrorMessage(err.message));
  };
  return (
    <div className="hero bg-base-200 my-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </form>
            {
                errorMessage && <p className="text-red-500">{errorMessage}</p>
            }
            {
                successMessage && <p className="text-green-500">{successMessage}</p>
            }
            <p>
              Already have an account ?
              <Link className="text-blue-500 ml-1" to="/login">
                Login Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
