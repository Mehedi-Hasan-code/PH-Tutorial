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
import BeARider from '../pages/BeARider/BeARider';
import PendingRiders from '../pages/Dashboard/PendingRiders/PendingRiders';
import ActiveRiders from '../pages/Dashboard/ActiveRiders/ActiveRiders';
import MakeAdmin from '../pages/Dashboard/PendingRiders/MakeAdmin';
import Forbidden from '../pages/Forbidden/Forbidden';
import AdminRoute from './AdminRoute';
import AssignRider from '../pages/Dashboard/AssignRider/AssignRider';
import PendingDeliveries from '../pages/Dashboard/PendingDeliveries/PendingDeliveries';
import RiderRoute from './RiderRoute';
import CompletedDeliveries from '../pages/Dashboard/CompletedDeliveries/CompletedDeliveries';

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
        path: 'be-a-rider',
        element: <BeARider />,
        loader: () => fetch('./warehouses.json'),
      },
      {
        path: 'send-parcel',
        element: <SendParcel />,
        loader: async () => fetch('warehouses.json'),
      },
      {
        path: 'forbidden',
        element: <Forbidden />,
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
        element: <TrackParcel />,
      },
      {
        path: 'pending-riders',
        element: <PendingRiders />,
      },
      {
        path: 'active-riders',
        element: <ActiveRiders />,
      },
      {
        path: 'pending-deliveries',
        element: (
          <RiderRoute>
            <PendingDeliveries />
          </RiderRoute>
        ),
      },
      {
        path: 'completed-deliveries',
        element: (
          <RiderRoute>
            <CompletedDeliveries />
          </RiderRoute>
        ),
      },
      {
        path: 'make-admin',
        element: (
          <AdminRoute>
            <MakeAdmin />
          </AdminRoute>
        ),
      },
      {
        path: 'assign-rider',
        element: <AssignRider />,
      },
    ],
  },
]);
