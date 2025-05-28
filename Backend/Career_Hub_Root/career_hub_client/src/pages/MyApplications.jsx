import React, { Suspense, useContext, useMemo } from 'react'
import Stats from '../components/MyApplications/Stats'
import ApplicationList from '../components/MyApplications/ApplicationList'
import {AuthContext} from '../context/AuthContext'

// Move the promise creation function outside the component
const createMyApplicationsPromise = (email) => {
  return fetch(`${import.meta.env.VITE_IP}/applications?email=${email}`)
    .then(res => {
      // Add error handling for HTTP errors
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    });
};

const MyApplications = () => {
  const {user} = useContext(AuthContext);
  
  // Use useMemo to create the promise only when the email changes
  const applicationsPromise = useMemo(() => {
    if (!user?.email) {
      // Return a resolved promise with empty array if no email
      return Promise.resolve([]);
    }
    return createMyApplicationsPromise(user.email);
  }, [user?.email]); // Only recreate when email changes

  return (
    <div>
      <Stats />
      <Suspense fallback={<div>Loading applications...</div>}>
        <ApplicationList MyApplicationsPromise={applicationsPromise} />
      </Suspense>
    </div>
  );
};

export default MyApplications;