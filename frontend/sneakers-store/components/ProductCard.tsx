"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type PROPS = {
  id: string
  name: string,
  price: number,
  imageUrl: string,
  category: string
}

export default function ProductCard({ id, category, name, price, imageUrl }: PROPS) {
  return (
    <div className="flex flex-col w-full max-w-sm mx-auto">
      <div className="overflow-hidden rounded-md aspect-square border bg-card text-card-foreground hover:shadow-lg transition">
        <Link href={`/${id}`}>
          <div className="relative w-full h-full">
            <Image
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              src="/image.webp"
              layout="fill"
              alt={`${category} ${name}`}
            />
          </div>
        </Link>
      </div>
      <div className='mt-2 text-left'>
        <h3 className='text-sm sm:text-base font-semibold text-slate-800'>
          {category?.toUpperCase()} {name}
        </h3>
        <p className='text-md sm:text-xl text-green-900 font-bold mt-1'>
          {price} €
        </p>
      </div>
    </div>
  )
}
