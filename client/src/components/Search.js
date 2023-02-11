import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
    return (
        <div className=' flex items-center border-2 px-2 text-sm rounded-full'>
            <button className='border-r-2 px-4 py-1'>
                Anywhere
            </button>
            <button className='border-r-2 px-4 py-1 '>
                Any week
            </button>
            <button className='flex gap-4 items-center px-2 py-2'>
                <span className='block' >Add guests</span> <span className='bg-red-500 p-2 rounded-full text-white'><FiSearch className='text-md' /></span>
            </button>
        </div>
    )
}

export default Search