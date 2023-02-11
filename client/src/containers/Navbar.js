import React from 'react'
import Profile from '../components/Profile'
import Search from '../components/Search'
import { FaRegPaperPlane } from 'react-icons/fa'

const Navbar = () => {
  return (
    <header className=' border-b-2 border-gray-200 '>
      <div className=' mx-auto max-w-[1440px] px-3 py-4 flex justify-between items-center'>
        <div className='flex items-center gap-1 text-red-500'>
          <FaRegPaperPlane className='-rotate-[30deg] text-3xl   ' />
          <span className='text-xl font-bold '>Airbnb</span>
        </div>
        <Search />
        <Profile />
      </div>
    </header>
  )
}

export default Navbar