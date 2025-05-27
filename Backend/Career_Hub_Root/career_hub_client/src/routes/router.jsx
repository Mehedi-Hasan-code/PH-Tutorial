import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';

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
      }
    ],
  },
]);
