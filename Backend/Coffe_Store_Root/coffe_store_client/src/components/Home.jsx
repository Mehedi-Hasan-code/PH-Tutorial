import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';
import { useState } from 'react';
const Home = () => {

  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees || [])
  const getDeletedCoffeeData = (id) => {
      const newCoffees = coffees.filter(coffee => coffee._id !== id)
      setCoffees(newCoffees)
  }

  return (
    <div>
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee._id} coffee={coffee} getDeletedCoffeeData = {getDeletedCoffeeData} />
      ))}
    </div>
  );
};

export default Home;
