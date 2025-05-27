import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Links = () => {
  const { user, logOut, setLoading, setUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => setUser(null))
      .finally(() => setLoading(false));
  };
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      {user ? (
        <li>
          <button onClick={handleLogOut}>Log out</button>
        </li>
      ) : (
        <>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/signin">Sign In</NavLink>
          </li>
        </>
      )}
    </>
  );
};

export default Links;
