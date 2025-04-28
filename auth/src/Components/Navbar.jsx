import React, { useContext } from "react";
import Links from "./Links";
import { AuthContext } from "./Context/AuthContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("Sign out successful"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Links />
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Links />
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-2">
            <span>{user.email || "User"}</span>
            <button onClick={handleSignOut} className="btn">
              <NavLink to="/login">Sign Out</NavLink>
            </button>
          </div>
        ) : (
          <button className="btn">
            <NavLink to="/register">Register</NavLink>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;