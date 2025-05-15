import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import Home from '../components/Home';
import AddCoffee from '../components/AddCoffee';
import UpdateCoffee from '../components/UpdateCoffee';
import CoffeeDetails from '../components/CoffeeDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        loader: async () => fetch('http://localhost:3000/coffees'),
        Component: Home,
      },
      {
        path: 'addCoffee',
        Component: AddCoffee,
      },
      {
        path: '/coffeeDetails/:id',
        loader: async ({params}) => fetch(`http://localhost:3000/coffee/${params.id}`),
        Component: CoffeeDetails,
      },

      {
        path: 'updateCoffee/:id',
        loader: async ({params}) => fetch(`http://localhost:3000/coffee/${params.id}`) ,
        Component: UpdateCoffee,
      },
    ],
  },
]);
