import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <>
      <li>
        <NavLink to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/SignIn">SignIn</NavLink>
      </li>
      <li>
        <NavLink to="/SignUp">SignUp</NavLink>
      </li>
    </>
  );
};

export default Links;
