import React from 'react'
import { useLoaderData } from 'react-router-dom'

const UserDetails = () => {
  const user = useLoaderData()
  console.log(user);
  return (
    <div>UserDetails</div>
  )
}

export default UserDetails