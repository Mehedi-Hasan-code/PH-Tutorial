import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = () => {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
};

export default Links;
