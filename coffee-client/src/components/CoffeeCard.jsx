import React from 'react'
import { BsEye } from "react-icons/bs";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2'

const CoffeeCard = ({coffee}) => {
     const {
        _id,
    name,
    quantity,
    supplier,
    chef,
    taste,
    category,
    details,
    photo
  } = coffee;
  const handleDelete=(_id)=>{
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    // 
    fetch(`http://localhost:5000/coffee/${_id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.deletedCount>0){
             Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
        }
    })
    .catch(error=>console.log(error))
  }
});
  }

  return (
  <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src={photo}
      alt="Movie" />
  </figure>
  <div className="flex justify-between w-full p-4">
    <div>
         <h2 className="card-title">Name: {name}</h2>
    <p>{quantity}</p>
    <p>{supplier}</p>
    <p>{chef}</p>

    </div>
   
    <div className="card-actions justify-end">
     <div className="flex flex-col gap-2">
  <button className="btn btn-sm bg-[#C1B086] hover:bg-[#b39e75] text-white">
    <BsEye className="text-xl" />
  </button>
  <button className="btn btn-sm bg-[#3E3E3E] hover:bg-[#2c2c2c] text-white">
    <FaPen className="text-sm" />
  </button>
  <button className="btn btn-sm bg-[#DB504A] hover:bg-red-700 text-white"
  onClick={()=>handleDelete(_id)}
  >
    <FaTrashAlt className="text-sm" />
  </button>
</div>
    </div>
  </div>
</div>
  )
}

export default CoffeeCard
