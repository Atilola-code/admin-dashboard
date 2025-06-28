'use client'

import React, { useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid
} from 'recharts'
import { FiMoreVertical } from 'react-icons/fi'

type RevenueData = {
  month: string
  revenue2020: number
  revenue2021: number
}

const data: RevenueData[] = [
  { month: 'Jan', revenue2020: 10000, revenue2021: 14000 },
  { month: 'Feb', revenue2020: 12000, revenue2021: 18000 },
  { month: 'Mar', revenue2020: 15000, revenue2021: 20000 },
  { month: 'Apr', revenue2020: 20000, revenue2021: 24000 },
  { month: 'May', revenue2020: 25000, revenue2021: 26000 },
  { month: 'Jun', revenue2020: 28000, revenue2021: 32000 },
  { month: 'Jul', revenue2020: 30000, revenue2021: 34000 },
  { month: 'Aug', revenue2020: 32000, revenue2021: 35000 },
  { month: 'Sep', revenue2020: 35000, revenue2021: 37000 },
  { month: 'Oct', revenue2020: 37000, revenue2021: 40000 },
  { month: 'Nov', revenue2020: 39000, revenue2021: 41000 },
  { month: 'Dec', revenue2020: 40000, revenue2021: 42000 }
]

export default function RevenueChart() {
  const [selectedYear, setSelectedYear] = useState<'2020' | '2021'>('2020')

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 flex-wrap">
        <h2 className="text-lg font-semibold text-black">Total Revenue</h2>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <label className="flex items-center space-x-1 cursor-pointer">
            <input
              type="radio"
              name="year"
              value="2020"
              checked={selectedYear === '2020'}
              onChange={() => setSelectedYear('2020')}
              className="accent-blue-500"
            />
            <span>2020</span>
          </label>
          <label className="flex items-center space-x-1 cursor-pointer">
            <input
              type="radio"
              name="year"
              value="2021"
              checked={selectedYear === '2021'}
              onChange={() => setSelectedYear('2021')}
              className="accent-red-500"
            />
            <span>2021</span>
          </label>
          <FiMoreVertical className="text-xl cursor-pointer" />
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="0 0" vertical={false} />
            <YAxis
              domain={[0, 40000]}
              ticks={[10000, 20000, 30000, 40000]}
              tickFormatter={(value) => `$${value / 1000}k`}
              tick={{ fontSize: 12 }}
            />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '12px'
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`]}
            />
            <Line
              type="monotone"
              dataKey="revenue2020"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{
                fill: '#3B82F6',
                stroke: '#fff',
                strokeWidth: 2,
                r: 5
              }}
            />
            <Line
              type="monotone"
              dataKey="revenue2021"
              stroke="#FF5B5B"
              strokeWidth={3}
              dot={{
                fill: '#FF5B5B',
                stroke: '#fff',
                strokeWidth: 2,
                r: 5
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}
