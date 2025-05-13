import { useLoaderData } from 'react-router-dom';

const Update = () => {
  const user = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    const updatedUser = { name, email };

    fetch(`http://localhost:3000/${user._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(`updated user data: ${data}`));
  };
  return (
    <div>
      <form onSubmit={handleUpdate} className="fieldset">
        <input
          defaultValue={user.name}
          className="border p-2 rounded"
          placeholder="Name"
          type="text"
          name="name"
        />
        <br />
        <input
          defaultValue={user.email}
          className="border p-2 rounded"
          placeholder="Email"
          type="email"
          name="email"
        />
        <br />
        <input className="btn" type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default Update;
