import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  return (
     <div className="grow flex justify-center items-center my-6 w-11/12 mx-auto">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl text-center font-bold my-2">Login</h1>
          <form className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-center mt-2">{errorMessage}</p>
            )}
            <button className="btn btn-neutral mt-4">
              {loading ? <Loader /> : "Login"}
            </button>
          </form>

          {/* social login */}

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px w-full dark:bg-gray-300"></div>
            <span className="text-sm px-3 dark:text-gray-600">
              Login with social accounts
            </span>
            <div className="flex-1 h-px w-full dark:bg-gray-300"></div>
          </div>
          <div className="flex justify-center">
            {/* google */}
            <button
              aria-label="Log in with Google"
              className="p-3 cursor-pointer hover:bg-gray-200 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
          </div>
          <p className="my-2 text-center">
            Don't have an account ?{" "}
            <Link className="text-blue-500" to={"/register"}>
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn