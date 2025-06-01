import React from 'react';
import { Link } from 'react-router-dom';

const JobRow = ({job, index}) => {
  const {title, location, company, description, applicationDeadline} = job
  return (
    <tr>
      <th>
        <label>
          {index+1}
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{company}</div>
            <div className="text-sm opacity-50">{location}</div>
          </div>
        </div>
      </td>
      <td>
        {title}
        <br />
        <span>
          {description}
        </span>
      </td>
      <td>{applicationDeadline}</td>
      <th>
        <Link to={`/applications/${job._id}`} className='btn'>View Applications</Link>
      </th>
    </tr>
  );
};

export default JobRow;
