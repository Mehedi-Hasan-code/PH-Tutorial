import React from 'react'
import useAuthContext from '../hooks/useAuthContext';
import useUserRole from '../hooks/useUserRole';

const RiderRoute = ({children}) => {
  const { user, isUserLoading } = useAuthContext();
  const { role, roleLoading } = useUserRole();

  if (isUserLoading || roleLoading) {
    return <p>Loading ...</p>;
  }

  if (!user || role !== 'rider') {
    return <Navigate to="/forbidden" />;
  }

  return children;
};

export default RiderRoute