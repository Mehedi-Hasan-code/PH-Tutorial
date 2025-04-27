import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const [bookmarked, setBookmarked] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleMarkAsRead = (blog) => {
    setReadingTime(readingTime + blog.id)
    handleRemoveFromBookMark(blog.id)
  }

  const handleRemoveFromBookMark = (id) => {
   let newBookmark = bookmarked.filter(pre => pre.id !== id)
   setBookmarked(newBookmark)
  }

  const handleBookmark = (blog) => {
    setBookmarked([...bookmarked, blog])
  };
  return (
    <>
      <Navbar />

      <div className="main-container flex text-center">
        <div className="left w-[70%]">
          <h1></h1>
          <Blogs handleBookmark = {handleBookmark} handleMarkAsRead = {handleMarkAsRead} />
        </div>
        <div className="right w-[30%]">
          <h1>Reading time: {readingTime} </h1>
          <h1>Bookmarked Count: {bookmarked.length} </h1>
          {bookmarked.map(blog => (<p className="bg-red-500 rounded-4xl my-4 mx-1 p-2" key={blog.id}>{blog.title}</p>))}
        </div>
      </div>
    </>
  );
}

export default App;
