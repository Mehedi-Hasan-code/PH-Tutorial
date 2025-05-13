import React from 'react';
import { useState } from 'react';
import { use } from 'react';
import { Link } from 'react-router-dom';

const Users = ({ usersPromise }) => {
  const initialUsers = use(usersPromise);
  const [users, setUsers] = useState(initialUsers || []);
  console.log(users);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    const newUser = { name, email };

    // create user in db

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(`data after creating user in the db`, data);
        if (data.insertedId) {
          alert('user added successfully');
          e.target.reset();
          newUser._id = data.insertedId;
          setUsers((pre) => [...pre, newUser]);
        }
      });
  };
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remainingUsers = users.filter((user) => user._id !== id);
          setUsers(remainingUsers);
        }
      });
  };
  return (
    <div>
      <div>
        {users.map((user) => (
          <div
            key={user._id}
            className="flex items-center gap-4 justify-between border space-y-2 my-4
          rounded-2xl p-4"
          >
            <div className="w-full">
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
            <p onClick={() => handleDelete(user._id)} className="btn">
              X
            </p>
            <Link to={`/users/${user._id}`} className='btn'>
              Details
            </Link>
            <Link to={`users/update/${user._id}`} className='btn'>
              Update
            </Link>
            <br />
          </div>
        ))}
      </div>
      <div>
        <form onSubmit={handleSubmit} className="space-y-2 my-4">
          <input
            className="border p-1 rounded"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <br />
          <input
            className="border p-1 rounded"
            type="text"
            name="email"
            placeholder="Enter your email"
          />
          <br />
          <input className="btn" type="submit" value="Add User" />
        </form>
      </div>
    </div>
  );
};

export default Users;
