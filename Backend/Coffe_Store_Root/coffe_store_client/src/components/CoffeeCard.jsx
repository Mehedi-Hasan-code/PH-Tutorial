import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, getDeletedCoffeeData }) => {
  const { _id, name, chef, price, photo } = coffee;

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              getDeletedCoffeeData(_id);
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };
  return (
    <div className="grid grid-cols-6 border bg-base-100 shadow-sm gap-6 max-w-7xl mx-auto">
      <figure className="border col-span-2">
        <img src={photo} alt="coffee image" className="rounded-xl" />
      </figure>
      <div className="col-span-3 flex justify-start items-center">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>Chef: {chef}</p>
          <p>Price: {price}</p>
        </div>
      </div>
      <div className="col-span-1 flex items-center">
        <div className="join join-vertical gap-2">
          <Link className="btn join-item" to={`/coffeeDetails/${_id}`}>
            View
          </Link>
          <Link to={`/updateCoffee/${_id}`} className="btn join-item">
            Edit
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn join-item">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
