import React, { useContext } from 'react';
import { AuthContext } from '../context/Auth/AuthContext';

const useAuthContext = () => {
  const authInfo = useContext(AuthContext);
  return authInfo;
};

export default useAuthContext;
