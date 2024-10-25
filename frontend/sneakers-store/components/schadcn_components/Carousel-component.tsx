"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'


type DATA = {
  _id: number
  name: string,
  price: number,
  description: string,
  category: string,
  imageUrl: string,
}


export default function CarouselComponent({data}:{data:DATA[]}) {
  const [currentIndex, setCurrentIndex] = useState(0)
console.log(data)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length)
  }
  const currentItem = data[currentIndex]
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto px-4 sm:px-0">
      <div className="relative bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="aspect-square relative overflow-hidden rounded-lg">
          <Link href={`api/bestsellers/${data[currentIndex]._id}`}>
            <Image
              src={data[currentIndex].imageUrl}
              alt={data[currentIndex].name}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-500"
            />
          </Link>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1 sm:p-2 shadow-md hover:bg-white transition-colors"
          aria-label="Previous item"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1 sm:p-2 shadow-md hover:bg-white transition-colors"
          aria-label="Next item"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
        </button>
      </div>
      <div className="mt-4 sm:mt-6 text-center">
  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{currentItem?.name}</h3>
  <p className="mt-1 text-sm sm:text-base text-gray-600">{currentItem?.description}</p>
  <p className="mt-2 text-lg sm:text-xl font-bold text-gray-900">${currentItem?.price.toFixed(2)}</p>
  <div className="mt-2 text-sm sm:text-base text-gray-500">
    {currentIndex + 1} / {data.length}
  </div>
</div>
    </div>
  )
}
