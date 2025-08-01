import React from 'react';
import useAuthContext from '../hooks/useAuthContext';
import useUserRole from '../hooks/useUserRole';
import { Navigate } from 'react-router';

const AdminRoute = ({ children }) => {
  const { user, isUserLoading } = useAuthContext();
  const { role, roleLoading } = useUserRole();

  if (isUserLoading || roleLoading) {
    return <p>Loading ...</p>;
  }

  if (!user || role !== 'admin') {
    return <Navigate to="/forbidden" />;
  }

  return children;
};

export default AdminRoute;
