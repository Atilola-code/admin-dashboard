'use client'

import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import { FiDownload } from 'react-icons/fi'

const data = [
  { day: 'Sunday', orders: 230 },
  { day: 'Monday', orders: 340 },
  { day: 'Tuesday', orders: 120 },
  { day: 'Wednesday', orders: 456 },
  { day: 'Thursday', orders: 300 },
  { day: 'Friday', orders: 250 },
  { day: 'Saturday', orders: 390 }
]

export default function OrderChart() {
  return (
    <div className="bg-white shadow-xl rounded-xl p-6 flex flex-col h-[300px] w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-black">Chart Order</h2>
          <p className="text-sm text-gray-400">
            Weekly order overview
          </p>
        </div>
        <button className="flex items-center border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-lg text-sm hover:bg-blue-50">
          <FiDownload className="mr-2" />
          Save Report
        </button>
      </div>

      {/* Chart */}
      <div className="w-full flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="day" tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '12px'
              }}
              labelStyle={{ fontWeight: 'bold' }}
              formatter={(value: number) => [`${value} Orders`]}
            />
            <Line
              type="monotone"
              dataKey="orders"
              stroke="#2D9CDB"
              strokeWidth={3}
              fill="#E6F4FA"
              dot={{ fill: '#2D9CDB', stroke: '#fff', strokeWidth: 2, r: 6 }}
              activeDot={{
                r: 10,
                fill: '#2D9CDB',
                stroke: '#fff',
                strokeWidth: 3
              }}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
