'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { FaStar } from 'react-icons/fa'

type Review = {
  id: number
  avatar: string
  name: string
  date: string
  comment: string
  rating: number
  ratingValue: string
  foodImage: string
}

const reviews: Review[] = [
  {
    id: 1,
    avatar: '/avatar1.jpg',
    name: 'Jons Sena',
    date: '2 days ago',
    comment: 'Amazing service and the food was super fresh! I would love to have more next time and taste other meals.',
    rating: 5,
    ratingValue: '5.0',
    foodImage: '/meal-4.png'
  },
  {
    id: 2,
    avatar: '/avatar2.jpg',
    name: 'Sofia',
    date: '2 days ago',
    comment: 'Fast delivery and hot meals. I will surely order again because the food tasted heavenly.',
    rating: 4,
    ratingValue: '4.5',
    foodImage: '/meal-5.png'
  },
  {
    id: 3,
    avatar: '/avatar3.jpg',
    name: 'Anandreansyah',
    date: '2 days ago',
    comment: 'Great flavors and portion size was generous. Loved every bite of it.',
    rating: 4,
    ratingValue: '4.0',
    foodImage: '/meal-3.png'
  },
  {
    id: 4,
    avatar: '/avatar4.jpg',
    name: 'Carlos Diaz',
    date: '3 days ago',
    comment: 'Loved the dessert and the hospitality. Highly recommend this place.',
    rating: 5,
    ratingValue: '5.0',
    foodImage: '/meal-1.png'
  },
  {
    id: 5,
    avatar: '/avatar5.jpg',
    name: 'Amara Obi',
    date: 'Yesterday',
    comment: 'Quick service and well-packed food.',
    rating: 4,
    ratingValue: '4.2',
    foodImage: '/meal-2.png'
  }
]

export default function CustomerReview() {
  const [startIndex, setStartIndex] = useState(0)

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % reviews.length)
  }

  const visibleReviews = [
    reviews[startIndex],
    reviews[(startIndex + 1) % reviews.length],
    reviews[(startIndex + 2) % reviews.length]
  ]

  return (
    <div>
      <div className="flex flex-row items-center justify-between mx-8 mt-8">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Customer Reviews</h1>
          <p className="text-lg text-gray-400">See what our customers are saying</p>
        </div>
        <div className="flex flex-row gap-2">
          <button onClick={handlePrev}>
            <IoIosArrowBack className="text-4xl p-2 text-[#00B074] bg-white rounded-xl shadow" />
          </button>
          <button onClick={handleNext}>
            <IoIosArrowForward className="text-4xl p-2 text-[#00B074] bg-white rounded-xl shadow" />
          </button>
        </div>
      </div>

      <div className="flex overflow-hidden no-scrollbar gap-6 mx-8 mt-6 my-8">
        {visibleReviews.map((review) => (
          <div
            key={review.id}
            className="flex bg-white shadow-xl rounded-xl overflow-hidden w-[320px] md:w-[360px] flex-shrink-0"
          >
            {/* Left section */}
            <div className="px-5 py-2 flex-1 flex flex-col justify-between space-y-4">
              <div className="flex items-center gap-4">
                <Image
                  src={review.avatar}
                  alt="avatar"
                  width={48}
                  height={48}
                  className="rounded-full w-16 h-16 object-cover "
                />
                <div>
                  <h2 className="text-lg font-semibold">{review.name}</h2>
                  <p className="text-sm text-gray-400">{review.date}</p>
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>

              <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-[16px] ${
                      i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">{review.ratingValue}</span>
              </div>
            </div>

            {/* Right image */}
            <div className="w-40 h-40">
              <Image
                src={review.foodImage}
                alt="Food"
                width={160}
                height={160}
                className="w-full h-full object-cover text-center"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
