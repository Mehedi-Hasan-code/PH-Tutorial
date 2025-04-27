import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Navbar from "./Components/Navbar.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Products from "./Pages/Products.jsx";
import Footer from "./Components/Footer.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Users from "./Pages/Users.jsx";
import UserDetails from "./Components/UserDetails.jsx";
import Posts from "./Pages/Posts.jsx";
import Post from "./Post.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />

        <Footer />
      </>
    ),
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "products", Component: Products },
      {
        path: "users",
        loader: async () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "users/:userId",
        Component: UserDetails,
        loader: async ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      },
      {
        path: "posts",
        Component: Posts,
        loader: async () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "posts/:postId",
        Component: Post,
        loader: async ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },
    ],
  },
  { path: "*", Component: NotFound },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
