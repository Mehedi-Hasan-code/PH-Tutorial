import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Posts = () => {
  const posts = useLoaderData();
  return <div>
    {posts.map(
        post => (
            <div key={post.id} style={{border: '1px solid yellow', margin: '10px 0px', borderRadius: '1rem', padding: '1rem'}}>
                <h4>{post.title}</h4>
                <Link to={`/posts/${post.id}`}><button>Show more</button></Link>
            </div>
        )
        )}
    </div>;
};

export default Posts;
