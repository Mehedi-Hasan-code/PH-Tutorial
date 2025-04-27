import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

const UserDetails = () => {
    const userObj = useLoaderData()
    const navigate = useNavigate()
    const handleBack = () => navigate('/users')
  return (
    <div>
        <h1>User Details</h1>
        <h1>User Name: {userObj.name}</h1>
        <h1>User Email: {userObj.email}</h1>
        <h2>Address</h2>
        <p>City: {userObj.address.city}</p>
        <p>Website: {userObj.website}</p>
        <button onClick={handleBack}>Back</button>
    </div>
  )
}

export default UserDetails