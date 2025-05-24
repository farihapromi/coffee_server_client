import React from 'react'

const AddCoffee = () => {
    const handleAddCoffee=e=>{
        e.preventDefault()
        const form=e.target
        const name = form.name.value;
  const quantity = form.quantity.value;
  const supplier = form.supplier.value;
  const chef = form.chef.value;
  const taste = form.taste.value;
  const category = form.category.value;
  const details = form.details.value;
  const photo = form.photo.value;

  const newCoffee = {
    name,
    quantity,
    supplier,
    chef,
    taste,
    category,
    details,
    photo,
  };
  console.log(newCoffee)

  //send data to server
  fetch('http://localhost:5000/coffee',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(newCoffee)

  })
  .then(res=>res.json)
  .then(data=>{
    console.log(data)
  })
  .catch(error=>console.log(error))

    }
  return (
    <div className='bg-[#F4F3F0] p-8 md:p-16 m-6 md:m-20'>
        <h2 className='text-center p-4 m-4 text-2xl font-bold'>Add Coffee</h2>
        <p className='p-4 m-4 text-xl'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
      <form onSubmit={handleAddCoffee}>
  <div className="flex gap-4 ">
    <div className="form-control md:w-1/2 ml-4 ">
      <label className="label">
        <span className="label-text">Coffee Name</span>
      </label>
      <label className="input-group">
        <input
          type="text"
          name="name"
          className="input input-bordered w-full"
          placeholder="Coffee Name"
        />
      </label>
    </div>

    <div className="form-control md:w-1/2">
      <label className="label">
        <span className="label-text">Available Quantity</span>
      </label>
      <label className="input-group">
        <input
          type="text"
          name="quantity"
          className="input input-bordered w-full"
          placeholder="Available Quantity"
        />
      </label>
    </div>
  </div>

  <div className="flex gap-4 mt-4">
    <div className="form-control md:w-1/2">
      <label className="label">
        <span className="label-text">Supplier</span>
      </label>
      <label className="input-group">
        <input
          type="text"
          name="supplier"
          className="input input-bordered w-full"
          placeholder="Supplier Name"
        />
      </label>
    </div>

    <div className="form-control md:w-1/2">
      <label className="label">
        <span className="label-text">Chef</span>
      </label>
      <label className="input-group">
        <input
          type="text"
          name="chef"
          className="input input-bordered w-full"
          placeholder="Chef Name"
        />
      </label>
    </div>
  </div>

  <div className="flex gap-4 mt-4">
    <div className="form-control md:w-1/2">
      <label className="label">
        <span className="label-text">Taste</span>
      </label>
      <label className="input-group">
        <input
          type="text"
          name="taste"
          className="input input-bordered w-full"
          placeholder="Taste"
        />
      </label>
    </div>

    <div className="form-control md:w-1/2">
      <label className="label">
        <span className="label-text">Category</span>
      </label>
      <label className="input-group">
        <input
          type="text"
          name="category"
          className="input input-bordered w-full"
          placeholder="Category"
        />
      </label>
    </div>
  </div>

  <div className="form-control mt-4">
    <label className="label">
      <span className="label-text">Details</span>
    </label>
    <label className="input-group">
      <input
        type="text"
        name="details"
        className="input input-bordered w-full"
        placeholder="Details"
      />
    </label>
  </div>

  <div className="form-control mt-4">
    <label className="label">
      <span className="label-text">Photo URL</span>
    </label>
    <label className="input-group">
      <input
        type="text"
        name="photo"
        className="input input-bordered w-full"
        placeholder="Photo URL"
      />
    </label>
  </div>

  <button
    type="submit"
    className="mt-6 btn bg-[#D2B48C] text-white w-full"
  
  >
    Add Coffee
  </button>
</form>

      
    </div>
  )
}

export default AddCoffee
