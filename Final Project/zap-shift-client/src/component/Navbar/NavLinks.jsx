import React from 'react';
import { NavLink } from 'react-router';

const NavLinks = () => {
  return (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink>About Us</NavLink>
      </li>
      <li>
        <NavLink to='/coverage'>Coverage</NavLink>
      </li>
    </>
  );
};

export default NavLinks;
