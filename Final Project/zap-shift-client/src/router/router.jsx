import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import Auth from "../layouts/Auth";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Coverage from "../pages/Coverage/Coverage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'coverage',
        element: <Coverage />,
        loader: async () => fetch('warehouses.json')
      }
    ]
  },
  {
    path: '/',
    element: <Auth />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      }
    ]
  }
])