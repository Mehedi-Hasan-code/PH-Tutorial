import React from "react";
import { Link, NavLink, Outlet, useNavigation } from "react-router-dom";

const Navbar = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <nav className="navbar">
        <h1 className="navbar__logo">My Website</h1>
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/products"
            >
              Products
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/users"
            >
              Users
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/posts"
            >
              Posts
            </NavLink>
          </li>
        </ul>
        <button>Get started</button>
      </nav>
      <div className="Outlet">
        <aside>
          <ul>
            <li>link1</li>
            <li>link2</li>
            <li>link3</li>
            <li>link4</li>
            <li>link5</li>
          </ul>
        </aside>
        {isNavigating ? <h1>Loading ....</h1> : <Outlet />}
      </div>
    </div>
  );
};

export default Navbar;
