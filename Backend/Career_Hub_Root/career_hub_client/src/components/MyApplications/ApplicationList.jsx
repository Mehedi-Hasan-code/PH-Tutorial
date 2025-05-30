import React, { use } from 'react';
import ApplicationRow from './ApplicationRow';

const ApplicationList = ({ MyApplicationsPromise }) => {
  const MyApplications = use(MyApplicationsPromise);
  console.log(MyApplications);
  if (
    !MyApplications ||
    !Array.isArray(MyApplications) ||
    MyApplications.length === 0
  ) {
    return (
      <div className="applications-container">
        <h2>My Applications</h2>
        <p>
          No applications found. Start applying to see your applications here!
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                #
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {MyApplications.map((application, index) => <ApplicationRow key={application._id} application = {application} index = {index} /> )}
          
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationList;
