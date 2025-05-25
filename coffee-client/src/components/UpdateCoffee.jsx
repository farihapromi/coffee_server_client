import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
  const navigate=useNavigate()
  const coffee = useLoaderData();
  const {
    _id,
    name,
    quantity,
    supplier,
    chef,
    taste,
    category,
    details,
    photo,
  } = coffee;

  const handleUpdateCoffee = e => {
    e.preventDefault();
    const form = e.target;
    const updatedCoffee = {
      name: form.name.value,
      quantity: form.quantity.value,
      supplier: form.supplier.value,
      chef: form.chef.value,
      taste: form.taste.value,
      category: form.category.value,
      details: form.details.value,
      photo: form.photo.value,
    };

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then(res => res.json())
      .then(data => {
  if (data.modifiedCount > 0) {
    Swal.fire({
      title: 'Success!',
      text: 'Coffee updated successfully',
      icon: 'success',
      confirmButtonText: 'Cool',
    }).then(() => {
      navigate('/'); // Navigate to homepage after alert is confirmed
    });
  }
});
  };

  return (
    <div className='bg-[#F4F3F0] p-8 md:p-16 m-6 md:m-20'>
      <h2 className='text-center p-4 m-4 text-2xl font-bold'>Update Coffee: {name}</h2>
      <form onSubmit={handleUpdateCoffee}>
        <div className='flex gap-4'>
          <div className='form-control md:w-1/2 ml-4'>
            <label className='label'>
              <span className='label-text'>Coffee Name</span>
            </label>
            <input
              type='text'
              name='name'
              className='input input-bordered w-full'
              defaultValue={name}
              placeholder='Coffee Name'
            />
          </div>

          <div className='form-control md:w-1/2'>
            <label className='label'>
              <span className='label-text'>Available Quantity</span>
            </label>
            <input
              type='text'
              name='quantity'
              className='input input-bordered w-full'
              defaultValue={quantity}
              placeholder='Available Quantity'
            />
          </div>
        </div>

        <div className='flex gap-4 mt-4'>
          <div className='form-control md:w-1/2'>
            <label className='label'>
              <span className='label-text'>Supplier</span>
            </label>
            <input
              type='text'
              name='supplier'
              className='input input-bordered w-full'
              defaultValue={supplier}
              placeholder='Supplier Name'
            />
          </div>

          <div className='form-control md:w-1/2'>
            <label className='label'>
              <span className='label-text'>Chef</span>
            </label>
            <input
              type='text'
              name='chef'
              className='input input-bordered w-full'
              defaultValue={chef}
              placeholder='Chef Name'
            />
          </div>
        </div>

        <div className='flex gap-4 mt-4'>
          <div className='form-control md:w-1/2'>
            <label className='label'>
              <span className='label-text'>Taste</span>
            </label>
            <input
              type='text'
              name='taste'
              className='input input-bordered w-full'
              defaultValue={taste}
              placeholder='Taste'
            />
          </div>

          <div className='form-control md:w-1/2'>
            <label className='label'>
              <span className='label-text'>Category</span>
            </label>
            <input
              type='text'
              name='category'
              className='input input-bordered w-full'
              defaultValue={category}
              placeholder='Category'
            />
          </div>
        </div>

        <div className='form-control mt-4'>
          <label className='label'>
            <span className='label-text'>Details</span>
          </label>
          <input
            type='text'
            name='details'
            className='input input-bordered w-full'
            defaultValue={details}
            placeholder='Details'
          />
        </div>

        <div className='form-control mt-4'>
          <label className='label'>
            <span className='label-text'>Photo URL</span>
          </label>
          <input
            type='text'
            name='photo'
            className='input input-bordered w-full'
            defaultValue={photo}
            placeholder='Photo URL'
          />
        </div>

        <button
          type='submit'
          className='mt-6 btn bg-[#D2B48C] text-white w-full'
        >
          Update Coffee
        </button>
      </form>
    </div>
  );
};

export default UpdateCoffee;
