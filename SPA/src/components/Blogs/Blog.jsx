import React from "react";
import { FaBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleBookmark, handleMarkAsRead }) => {
  return (
    <div className="flex">
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <p>
            {blog.body}
          </p>
          <div className="card-actions justify-between">
            <button onClick= {() => handleBookmark(blog)} className="btn btn-primary">Bookmark 
            <FaBookmark />
            </button>
            <button onClick={() => handleMarkAsRead(blog)} className="btn btn-primary">Mark as read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
