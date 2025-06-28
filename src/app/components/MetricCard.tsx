import React from 'react'

import { FaArrowUp } from "react-icons/fa";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { MdFreeCancellation } from "react-icons/md";
import { RiFileList3Fill } from "react-icons/ri";
import { IoBagCheckSharp } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa6";



type Metric = {
  value: string | number
  label: string
  change: string
   icon: React.ReactNode
   iconBg: string
    iconArrow?: React.ReactNode
   font: string

}

const metrics: Metric[] = [
  {
    value: 75,
    label: 'Total Orders',
    change: '4%',
    icon: <RiFileList3Fill className='text-green-600 p-2 text-5xl rounded-full'/>,
    iconArrow: <FaArrowUp className='p-2 bg-green-200 rounded-full text-green-500 text-3xl'/>,
    iconBg:  'bg-green-100',
     font: "poppins"
   
  },
  {
    value: 357,
    label: 'Total Delivered',
    change: '4%',
    icon: <BsFillBoxSeamFill className='text-green-600 p-2 text-5xl rounded-full'/>,
    iconArrow:<FaArrowUp className='p-2 bg-green-200 rounded-full text-green-500 text-3xl'/>,
    iconBg:  'bg-green-100',
     font: "poppins"
  },
  {
    value: 65,
    label: 'Total Canceled',
    change: '25%',
    icon: <MdFreeCancellation className='text-green-600 p-2 text-5xl rounded-full'/>,
    iconArrow: <FaArrowDown className='p-2 bg-red-200 rounded-full text-red-500 text-3xl'/>,
    iconBg:  'bg-green-100',
     font: "poppins"
    
  },
  {
    value: '$128',
    label: 'Total Revenue',
    change: '12%',
    icon: <IoBagCheckSharp className='text-green-600 p-2 text-5xl rounded-full'/>,
     iconArrow: <FaArrowDown className='p-2 bg-red-200 rounded-full text-red-500 text-3xl'/>,
    iconBg:  'bg-green-100',
    font: "poppins"
  },
]

export default function MetricCard() {
  return (
    <div className='mx-8 mt-6'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 '>
        {metrics.map((metric, index) => (
      <div key={index} className='flex flex-row items-center justify-between rounded-xl text-center shadow-2xl p-4 bg-white'>
        <div className={`p-2 rounded-full mb-4 ml-2 ${metric.iconBg}`}>
            {metric.icon}
        </div>
        <div className='flex flex-col items-center justify-center text-center mr-2'>
            <h2 className='text-2xl font-bold'>{metric.value}</h2>
            <p className='text-lg font-extralight text-black'>{metric.label}</p>
            <div className='flex flex-row items-center justify-center space-x-2 mt-2'>
                <span>{metric.iconArrow}</span>
                <span className='text-gray-500 text-sm'>{metric.change}</span>
                <span className='text-gray-500 text-sm'>(30days)</span>
        </div>
            </div>
        </div>
        ))}
      
        </div>
    </div>
  )
}
