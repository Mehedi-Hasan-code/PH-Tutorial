import React, { use } from 'react';

const ApplicationList = ({ MyApplicationsPromise }) => {
  // Let the use() hook operate without interference
  // If the promise is pending, this will suspend to the nearest Suspense boundary
  // If the promise rejects, this will throw to the nearest Error boundary
  const MyApplications = use(MyApplicationsPromise);
  
  // This code only runs when the promise has successfully resolved
  // Handle the successful case with data validation
  if (!MyApplications || !Array.isArray(MyApplications) || MyApplications.length === 0) {
    return (
      <div className="applications-container">
        <h2>My Applications</h2>
        <p>No applications found. Start applying to see your applications here!</p>
      </div>
    );
  }

  return (
    <div className="applications-container">
      <h2>My Applications</h2>
      {MyApplications.map((application, index) => (
        <div key={application.id || `application-${index}`} className="application-item">
          <h3>{application.jobTitle || 'Untitled Position'}</h3>
          <p>Status: {application.status || 'Pending'}</p>
        </div>
      ))}
    </div>
  );
};

export default ApplicationList;