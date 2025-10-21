import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='w-full h-[100px] bg-blue-500 text-white flex justify-around items-center'>
        <h1 className='text-2xl font-bold'>MyApp</h1>
        <div className='hover:underline text-2xl font-semibold'>Products</div>
        <div className='hover:underline text-2xl font-semibold'>Home</div>
      </div>
    </div>
  )
}

export default Navbar
