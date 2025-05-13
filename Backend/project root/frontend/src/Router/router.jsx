import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import App from '../App';
import UserDetails from '../components/UserDetails';
import Update from '../components/Update';
export let router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path: 'users/:id',
        Component: UserDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/users/${params.id}`),
      },
      {
        path: 'users/update/:id',
        Component: Update,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/users/${params.id}`),
      },
    ],
  },
]);
