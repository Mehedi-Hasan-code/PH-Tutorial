const AddCoffee = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());
    console.log(coffeeData);
    // send data to the db
    fetch('http://localhost:3000/coffees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())

      .then(data => {
        console.log('after adding coffee to db', data);
      })
  };
  return (
    <div className="w-11/12 mx-auto">
      <div className="my-20">
        <h3 className="text-xl my-10">Back to home</h3>
        <div className="space-y-6">
          <h1 className="text-4xl text-center">Add New Coffee</h1>
          <p className="text-center max-w-[60ch] mx-auto">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleClick}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border rounded-2xl overflow-hidden my-20 p-10">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Enter Your Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Chef</label>
              <input
                name="chef"
                type="text"
                className="input w-full"
                placeholder="Enter Coffee Chef"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Price</label>
              <input
                name="price"
                type="text"
                className="input w-full"
                placeholder="Enter Your Coffee Price"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Taste</label>
              <input
                name="taste"
                type="text"
                className="input w-full"
                placeholder="Enter Coffee Taste"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Category</label>
              <input
                name="category"
                type="text"
                className="input w-full"
                placeholder="Enter Your Coffee Category"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Details</label>
              <input
                name="details"
                type="text"
                className="input w-full"
                placeholder="Enter Coffee Details"
              />
            </fieldset>
            <fieldset className="col-span-full fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Photo</label>
              <input
                name="photo"
                type="text"
                className="input w-full"
                placeholder="Enter Photo URL"
              />
            </fieldset>
            <button type="submit" className="btn col-span-full">Add Coffee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
