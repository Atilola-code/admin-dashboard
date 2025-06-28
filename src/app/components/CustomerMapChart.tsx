'use client'

import React, { useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell
} from 'recharts'
import { FiMoreVertical } from 'react-icons/fi'

type BarData = {
  label: string
  value: number
  color: string
}

const data: BarData[] = [
  { label: 'Sun', value: 60, color: '#FF5B5B' },
  { label: 'Sun', value: 80, color: '#F7C604' },
  { label: 'Sun', value: 40, color: '#FF5B5B' },
  { label: 'Sun', value: 65, color: '#F7C604' },
  { label: 'Sun', value: 60, color: '#FF5B5B' },
  { label: 'Sun', value: 20, color: '#F7C604' },
  { label: 'Sun', value: 60, color: '#FF5B5B' },
]

export default function CustomerMapChart() {
  const [selectedWeek, setSelectedWeek] = useState('Week 1')

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <h2 className="text-lg font-semibold text-black">Customer Map</h2>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <select
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(e.target.value)}
            className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none"
          >
            <option value="Week 1">Week 1</option>
            <option value="Week 2">Week 2</option>
            <option value="Week 3">Week 3</option>
          </select>
          <FiMoreVertical className="text-xl cursor-pointer" />
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <YAxis
              domain={[0, 80]}
              ticks={[0, 20, 40, 60, 80]}
              tick={{ fontSize: 12 }}
            />
            <XAxis dataKey="label" tick={{ fontSize: 11 }} />
            <Tooltip
              contentStyle={{
                borderRadius: '4px',
                border: '1px solid #ccc',
                fontSize: '12px'
              }}
              formatter={(value: number) => [`${value} Customers`]}
            />
            <Bar dataKey="value" barSize={24} radius={[8, 8, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

