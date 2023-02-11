import React from 'react'
import { TbWorld } from 'react-icons/tb'
import { HiBars3 } from 'react-icons/hi2'
import profileImage from '../assets/svg/profile.svg'

const Profile = () => {
    return (
        <div className='flex items-center gap-5'>
            <a className='text-sm cursor-pointer'>Airbnb your home</a>
            <TbWorld className='text-xl' />
            <div className='flex items-center border-[2px] rounded-full gap-2 px-2 py-1 cursor-pointer hover:shadow-md shadow-gray-600'>
                <HiBars3 className='text-lg' />
                <img src={profileImage} className='w-7' />
            </div>
        </div>
    )
}

export default Profile