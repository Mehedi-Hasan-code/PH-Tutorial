import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const SignUp = () => {
  const { signUpWithEmailPassword } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...rest } = Object.fromEntries(formData.entries());

    // create user in the firebase
    signUpWithEmailPassword(email, password)
      .then((result) => {
        console.log(result.user);
        // save profile info in the db

        const userInfo = {
          email,
          ...rest,
          creationTime: result.user.metadata?.creationTime,
          lastSignInTime: result.user.metadata?.lastSignInTime,
        };

        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="grow flex justify-center my-6 items-center w-11/12 mx-auto">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center">Register</h1>
          <form onSubmit={handleSubmit} className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter Your Name"
              required
            />
            <label className="label">Address</label>
            <input
              type="text"
              name="address"
              className="input"
              placeholder="Enter Your Address"
              required
            />
            <label className="label">Phone Number</label>
            <input
              type="text"
              name="phone"
              className="input"
              placeholder="Enter Your Phone Number"
              required
            />
            {/* photo url */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Enter Your Photo URL"
              required
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter Your Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Enter Your Password"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            {/* social register */}
          </form>
          <div>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px w-full dark:bg-gray-300"></div>
              <span className="text-sm px-3 dark:text-gray-600">
                Register with social accounts
              </span>
              <div className="flex-1 h-px w-full dark:bg-gray-300"></div>
            </div>
            {/* google */}
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
              Already have an account ?{' '}
              <Link className="text-blue-500" to={'/login'}>
                Login
              </Link>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
