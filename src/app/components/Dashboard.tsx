import React from 'react'
import { FiCalendar } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

export default function Dashboard() {
  return (
    <div>
      <main>
        <div className='flex flex-row items-center justify-between md:mx-8 mx-4 md:mt-6 mt-4'>
        <div>
        <h1 className='md:text-2xl text-lg font-semibold font-sans mb-2'>Dashboard</h1>
        <p className='md:text-lg text-sm text-gray-400'>Hi, Samantha. <span className='md:block hidden'> Welcome back to Sedap Admin</span></p>
        </div>
       <div className='md:px-8 px-4 py-2 shadow-2xl bg-white rounded-xl flex flex-col items-start'>
        <div className='flex flex-row items-center  '>
            <FiCalendar className='md:text-4xl text-3xl p-2 text-[#2D9CDB] bg-blue-200 rounded-xl mr-4'/><p className='text-[#3E4954]'>Filter Period </p><IoIosArrowDown className='text-[#B9BBBD] ml-10 mt-4 text-2xl'/>
        </div>
            <p className='text-sm text-[#3E4954] mt-3 md:block hidden '>17 April 2020 - 21 May 2020</p>
       </div>
        </div>
        <div>
            <div>

            </div>
        </div>
      </main>
    </div>
  )
}
