import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

const Post = () => {
    const post = useLoaderData()
    const navigate = useNavigate()
    const handleGoHome = () => {
      navigate(-1)

    }
  return (
    <div>
      <h1>Post: {post.title}</h1>
      <button onClick={handleGoHome}>Go Back</button>
    </div>
  )
}

export default Post