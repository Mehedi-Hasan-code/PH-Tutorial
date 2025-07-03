import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home/Home';
import Root from '../layouts/Root';
import Auth from '../layouts/Auth';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Coverage from '../pages/Coverage/Coverage';
import SendParcel from '../pages/SendParcel/SendParcel';
import Dashboard from '../layouts/Dashboard';
import MyParcels from '../pages/Dashboard/MyParcels/Myparcels';
import Payment from '../pages/Dashboard/Payment/Payment';
import TrackParcel from '../pages/Dashboard/TrackParcel/TrackParcel';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'coverage',
        element: <Coverage />,
        loader: async () => fetch('warehouses.json'),
      },
      {
        path: 'send-parcel',
        element: <SendParcel />,
        loader: async () => fetch('warehouses.json'),
      },
    ],
  },
  {
    path: '/',
    element: <Auth />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'my-parcels',
        element: <MyParcels />,
      },
      {
        path: 'payment/:id',
        element: <Payment />,
      },
      {
        path: 'track',
        element: <TrackParcel />
      }
    ],
  },
]);
