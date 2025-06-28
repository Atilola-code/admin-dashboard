import React from 'react'
import { RiNotification2Line } from "react-icons/ri";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { GoGift } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

import Image from 'next/image';



export default function SearchBar() {
  return (
    <div>
        <header className='flex items-center justify-between m-8'>
       <div className='flex flex-row items-center w-1/2 justify-between relative'>
        <input type="text" placeholder='Search here' className='w-full p-3 bg-white shadow-2xl rounded-lg text-black focus:outline-none focus:ring-1' />
                <IoSearchOutline className='ml-3 text-2xl text-gray-600 absolute right-3 top-1/2 transform -translate-y-3'/>
            </div>

            <div className=''>
        <span className='flex items-center space-x-4 '>
        <RiNotification2Line className='text-5xl text-[#2D9CDB] p-3 bg-blue-200 rounded-2xl'/>
        <IoChatboxEllipsesOutline className='text-5xl text-[#2D9CDB] p-3 bg-blue-200 rounded-2xl'/>
        <GoGift className='text-5xl p-3 text-[#5E6C93] bg-gray-300 rounded-2xl'/>
        <IoSettingsOutline  className='text-5xl p-3 text-[#FF5B5B] bg-red-200 rounded-2xl'/>
        </span> 
            </div>
        
            {/* page separator */}
            <div className='w-px h-10 bg-gray-300 mx-6'></div>

        <div className='flex items-center flex-row space-x-3'>
            <p className='text-sm text-gray-500'>Hello, <span className='font-semibold text-lg text-[#464255]'>Samantha</span></p>
            <Image src={"/samantha.jpg"} alt='Admin headshot image' width={48} height={48} className='rounded-full w-16 h-16 object-cover border-4 bg-white'/>
        </div>

        </header>
    </div>
  )
}
