import React from 'react';
import { NavLink } from 'react-router';

const NavLinks = () => {
  return (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>About Us</NavLink>
      </li>
    </>
  );
};

export default NavLinks;
