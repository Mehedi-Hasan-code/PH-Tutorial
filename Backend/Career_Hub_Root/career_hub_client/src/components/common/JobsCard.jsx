import React from 'react';
import { useNavigate } from 'react-router-dom';
import Details from '../../pages/Details';

const JobsCard = ({job}) => {
  console.log(job);
  const navigate = useNavigate()
  return (
    <div className="card bg-base-100 w-96 shadow-sm border py-6">
      <figure>
        <img
          src={job.company_logo}
          alt="company_logo"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job.title}</h2>
        <p>
        {job.description}
        </p>
        <div className="card-actions justify-end">
          <button onClick={() => navigate(`/details/${job._id}`)} className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
