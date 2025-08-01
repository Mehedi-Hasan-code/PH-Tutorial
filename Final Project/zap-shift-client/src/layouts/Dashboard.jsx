import React from 'react';
import { NavLink, Outlet } from 'react-router';
import ProFastLogo from '../component/common/ProFastLogo';
import useUserRole from '../hooks/useUserRole';
const Dashboard = () => {
  const { role, roleLoading } = useUserRole();
  console.log(role);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">Dashboard</div>
        </div>
        {/* Page content here */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <ProFastLogo />
          <li>
            <NavLink to="/dashboard">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-parcels">My Parcels</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/track">Track a parcel</NavLink>
          </li>
          {!roleLoading && role === 'rider' && (
            <>
              <li>
                <NavLink to="/dashboard/pending-deliveries">
                  Pending Deliveries
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/completed-deliveries">
                  Completed Deliveries
                </NavLink>
              </li>
            </>
          )}
          {!roleLoading && role === 'admin' && (
            <>
              <li>
                <NavLink to="/dashboard/pending-riders">Pending Riders</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/active-riders">Active Riders</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/make-admin">Make Admin</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/assign-rider">Assign Rider</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
