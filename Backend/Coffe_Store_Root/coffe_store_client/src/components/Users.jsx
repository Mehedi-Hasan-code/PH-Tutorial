import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
  
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(data => {
        if(data.acknowledged) {
          const remainingUsers = users.filter(user => user._id !== id)
          setUsers(remainingUsers)
        }
      })
  }

  return (
    <div>
      <h1>Users : {users.length}</h1>
      {/* users table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.address}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <div className="join join-vertical">
                    <button className="btn join-item">View</button>
                    <button className="btn join-item">Edit</button>
                    <button onClick={() => handleDelete(user._id)} className="btn join-item">Delete</button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
