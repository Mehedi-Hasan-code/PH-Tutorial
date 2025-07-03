import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../services/Firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(true);

  // email password sign up
  const createUser = (email, password) => {
    setIsUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // email password sign in
  const signInUser = (email, password) => {
    setIsUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // updateUserProfile
  const updateUserProfile = profileInfo => {
    return updateProfile(auth.currentUser, profileInfo)
  }

  // sign out
  const signOutUser = () => {
    setIsUserLoading(true);
    return signOut(auth);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsUserLoading(false);
      console.log(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    isUserLoading,
    createUser,
    signInUser,
    signOutUser,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
