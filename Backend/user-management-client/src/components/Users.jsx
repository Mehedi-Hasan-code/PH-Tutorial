import React, { use, useState } from 'react'

const Users = ({usersPromise}) => {
  const initialUsers = use(usersPromise)
  const [users, setUsers] = useState(initialUsers)
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value ;
    const email = e.target.email.value ;

    const user = {name, email}
    
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => setUsers((pre) => [...pre, data]))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' name='name' />
        <br />
        <input type="text" placeholder='Enter your email' name='email' />
        <br />
        <button type='submit'>Submit</button>
      </form>
      <div>
        {
          users.map(user => <p key={user.id}>{user.name}: {user.email}</p>)
        }
      </div>
    </div>
  )
}

export default Users