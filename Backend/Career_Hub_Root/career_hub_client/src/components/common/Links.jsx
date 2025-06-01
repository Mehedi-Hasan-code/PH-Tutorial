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
        <>
        <li>
          <NavLink to='/my-applications'>My Applications</NavLink>
        </li>
        <li>
          <NavLink to='/add-job'>Add jobs</NavLink>
        </li>
        <li>
          <NavLink to={`/job-posts?email=${user.email}`}>Job posts</NavLink>
        </li>
        <li>
          <button onClick={handleLogOut}>Log out</button>
        </li>
        </>
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
