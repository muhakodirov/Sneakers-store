"use client"
import Image from 'next/image'
import React from 'react'

export default function CartLists() {

  return (
    <div>
        <div className='relative  flex rounded'>
        <Image
            className='rounded-lg'
            src="/image.webp"
            width={150}
            height={150}
            alt="Picture of the author"
        />
        <div className=' flex flex-col ml-9 text-xl text-left'>
            <p className='font-bold text-3xl'>Name of Product</p>
            <div className=' mt-14' >
                <p>Größe:</p>
                <p>Menge:</p>
                <div className='absolute bottom-0 end-0'>
                    <div className='absolute end-0 bottom-16'>
                    <button className='border text-sm text-left bg-red-500 text-white hover:bg-red-700 transition rounded-lg px-1 h-12'> Aus dem Warenkorb enternen </button>
                    </div>
                    <button className='  hover:bg-green-700 w-10 transition h-10 border rounded-lg bg-green-500'>
                    <span className="text-lg text-white font-bold"> + </span>
                    </button>
                        <span className='mx-4'> 3 </span>
                    <button  className=' hover:bg-green-700 w-10 transition h-10 border rounded-lg bg-green-500'>
                    <span className="text-lg text-white font-bold"> - </span>
                    </button>
                </div>


            </div>
        </div>
        </div>   
    </div>
  )
}
