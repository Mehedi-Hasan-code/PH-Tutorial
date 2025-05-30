import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';
import Apply from '../pages/Apply';
import Details from '../pages/Details';
import MyApplications from '../pages/MyApplications';
import AddJobs from '../pages/AddJobs';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'signin',
        Component: SignIn
      },
      {
        path: 'details/:id',
        Component: Details,
        loader: ({params}) => fetch(`${import.meta.env.VITE_IP}/jobs/${params.id}`)
      },
      {
        path: 'apply/:id',
        Component: Apply
      },
      {
        path: '/my-applications',
        Component: MyApplications
      },
      {
        path: 'add-job',
        Component: AddJobs
      }
    ],
  },
]);
