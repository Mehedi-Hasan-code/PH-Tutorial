import React, { useContext } from "react";
import { AuthContext } from "../Components/Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading)
    return <span className="loading loading-infinity loading-xl"></span>;
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login" />;
  }
};

export default PrivateRoutes;
