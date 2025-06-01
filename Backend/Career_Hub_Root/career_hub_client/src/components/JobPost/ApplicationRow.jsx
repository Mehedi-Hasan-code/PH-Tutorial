import axios from 'axios';
import React from 'react';

const ApplicationRow = ({ application, index }) => {
  const handleChange = (e, applicationId) => {
    console.log(e.target.value);
    axios.put(`${import.meta.env.VITE_IP}/applications/${applicationId}`, {status : e.target.value})
      .then(res => console.log(res.data))
        .catch(err => console.log(err))
  }
  return (
    <tr>
      <th>
        <label>{index + 1}</label>
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
            <div className="font-bold">{application.email}</div>
            <div className="text-sm opacity-50">applicant</div>
          </div>
        </div>
      </td>
      <td>
        aff
        <br />
        <span>aff</span>
      </td>

      <th>
        <select onChange={(e) => handleChange(e, application._id)} defaultValue={application.status || 'Choose Status'} className="select">
          <option disabled={true}>Choose Status</option>
          <option>InterView</option>
          <option>Reject</option>
          <option>Hired</option>
        </select>
      </th>
    </tr>
  );
};

export default ApplicationRow;
