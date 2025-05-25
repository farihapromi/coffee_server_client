import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'
import Footer from './components/Footer'

function App() {
  const loadedCoffees=useLoaderData()
  const[coffees,setCoffees]=useState(loadedCoffees)


  return (
  <div className=' m-20'>

<h2 className='text-6xl my-20 text-purple-600 text-center'>Coffee shop</h2>
<div className='grid md:grid-cols-2 gap-4'>
  {
    coffees.map(coffee=>
    <CoffeeCard key={coffee._id} 
    coffee={coffee}
    coffees={coffees}
    setCoffees={setCoffees}
    />)
  }
  </div>
 

  </div>
 
  )
}

export default App
