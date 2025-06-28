'use client'

import React, { useState } from 'react'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts'
import { FiMoreVertical } from 'react-icons/fi'

function lightenColor(hex: string, percent: number) {
  const num = parseInt(hex.replace('#', ''), 16)
  const amt = Math.round(2.55 * percent)
  const R = (num >> 16) + amt
  const G = ((num >> 8) & 0x00ff) + amt
  const B = (num & 0x0000ff) + amt
  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  )
}

type ChartMetric = {
  title: string
  value: number
  color: string
}

const pieMetrics: ChartMetric[] = [
  { title: 'Total Orders', value: 81, color: '#FF5B5B' },
  { title: 'Customer Growth', value: 22, color: '#34D399' },
  { title: 'Total Revenue', value: 62, color: '#3B82F6' }
]

export default function PieChartCard() {
  const [showValue, setShowValue] = useState(true)

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 flex flex-col w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
        <h2 className="text-lg font-semibold text-black">Pie Chart</h2>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <label className="flex items-center space-x-1">
            <input type="checkbox" className="accent-blue-500" defaultChecked />
            <span>Chart</span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              type="checkbox"
              className="accent-blue-500"
              checked={showValue}
              onChange={() => setShowValue(!showValue)}
            />
            <span>Show Value</span>
          </label>
          <FiMoreVertical className="text-xl cursor-pointer" />
        </div>
      </div>

      {/* Pie Charts Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {pieMetrics.map((metric, idx) => {
          const lightColor = lightenColor(metric.color, 55)
          const chartData = [
            { name: metric.title, value: metric.value, color: metric.color },
            { name: 'Remaining', value: 100 - metric.value, color: lightColor }
          ]

          return (
            <div
              key={idx}
              className="flex flex-col items-center"
            >
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={38}
                    outerRadius={65}
                    paddingAngle={3}
                    stroke="none"
                  >
                    {chartData.map((entry, i) => (
                      <Cell key={`cell-${i}`} fill={entry.color} />
                    ))}
                    {/* Conditional value label */}
                    {showValue && (
                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-base font-semibold fill-gray-800"
                      >
                        {metric.value}%
                      </text>
                    )}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-600 mt-1 text-center">
                {metric.title}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

