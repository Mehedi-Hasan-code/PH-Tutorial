import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ handleBookmark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl">Total: {blogs.length}</h1>
      <div className="grid grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} handleMarkAsRead={handleMarkAsRead} handleBookmark={handleBookmark} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
