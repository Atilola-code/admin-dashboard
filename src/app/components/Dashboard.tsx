import React from 'react'
import { FiCalendar } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

export default function Dashboard() {
  return (
    <div>
      <main>
        <div className='flex flex-row items-center justify-between mx-8 mt-6'>
        <div>
        <h1 className='text-2xl font-semibold font-sans mb-2'>Dashboard</h1>
        <p className='text-lg text-gray-400'>Hi, Samantha. Welcome back to Sedap Admin</p>
        </div>
       <div className='px-8 py-2 shadow-2xl bg-white rounded-xl flex flex-col items-start'>
        <div className='flex flex-row items-center  '>
            <FiCalendar className='text-4xl p-2 text-[#2D9CDB] bg-blue-200 rounded-xl mr-4'/><p className='text-[#3E4954]'>Filter Period </p><IoIosArrowDown className='text-[#B9BBBD] ml-10 mt-4 text-2xl'/>
        </div>
            <p className='text-sm text-[#3E4954] mt-3 '>17 April 2020 - 21 May 2020</p>
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
