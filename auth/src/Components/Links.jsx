import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";

const Links = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/orders">Orders</NavLink>
          </li>
        </>
      )}
    </>
  );
};

export default Links;
