import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setErrorMessage("");
    setSuccess('');
    const isChecked = e.target.checkbox.checked;
    if (isChecked === false) {
      setErrorMessage("Please accept the terms and condition");
      return;
    }
    // Create User
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        sendEmailVerification(auth.currentUser)
          .then(() => {
            setSuccess('User has created successfully');
          })
          .catch((err) => setErrorMessage(err.message));
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };
  return (
    <div className="flex justify-center my-10">
      <div className="border p-10 rounded-2xl  space-y-4">
        <h1 className="font-extrabold text-3xl">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              name="email"
              placeholder="mail@site.com"
              required
            />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
          <br />
          <div className="relative">
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type={showPassword ? "password" : "text"}
                name="password"
                required
                placeholder="Password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
            </label>
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-[50%] -translate-y-[50%] right-3"
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </div>
          </div>
          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />
            At least one number <br />
            At least one lowercase letter <br />
            At least one uppercase letter
          </p>
          <br />
          <div className="flex justify-center items-center gap-4">
            <input
              name="checkbox"
              type="checkbox"
              className="checkbox checkbox-sm"
            />
            <p>Accept the terms and conditions</p>
          </div>
          <br />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {success && (
          <p className="text-green-500">{success}</p>
        )}
        <p>
          Already have an account ?{" "}
          <Link className="text-blue-500" to="/SignIn">
            Sign In
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignUp;
