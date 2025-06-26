import React from 'react';
import MapComponent from './MapComponent';
import { useLoaderData } from 'react-router';

const Coverage = () => {
  const warehouses = useLoaderData();
  console.log(warehouses);
  return (
    <div>
      <MapComponent warehouses = {warehouses} />
    </div>
  );
};

export default Coverage;
