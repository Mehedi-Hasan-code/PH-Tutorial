import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const usersData = useLoaderData();
  return (
    <div>
      <h1>This is users page</h1>
      <>
        {usersData.map((userObj) => (
          <div
            style={{
              border: "1px solid red",
              padding: "1rem 2rem",
              marginBottom: "1rem",
              borderRadius: "32px",
            }}
            key={userObj.id}
          >
            <h3>
              {userObj.id} : {userObj.name}
            </h3>
            <p>Email: {userObj.email}</p>

            <Link to={`/users/${userObj.id}`}>
              <button
                style={{
                  padding: "12px 24px",
                  borderRadius: "32px",
                  border: "none",
                }}
              >
                Show details
              </button>
            </Link>
          </div>
        ))}
      </>
    </div>
  );
};

export default Users;
