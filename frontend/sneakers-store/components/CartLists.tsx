"use client"
import Image from 'next/image'
import React from 'react'
import { useShopContext } from "@/context/shopContext";
import Link from 'next/link';
import { useFilterContext } from '@/context/filterContext';

export default function CartLists({ category, id, name, size }: { id: string, name: string, size: number[], category: string }) {
    const { increment, decrement, count, removeFromCart } = useShopContext()
    const { selectedSize } = useFilterContext()
    const countFiltered = count.find((count: any) => count.id === id) || { count: 1 };

    return (
        <div>
            <div className='relative  flex rounded mb-16'>
                <Link href={`/${id}`}>
                    <Image
                        className='rounded-lg'
                        src="/image.webp"
                        width={150}
                        height={150}
                        alt="Picture of the author"
                    />
                </Link>


                <div className=' flex flex-col ml-9 text-xl text-left'>
                    <p className='font-bold text-3xl'>{category?.toUpperCase()} {name}</p>
                    <div className=' mt-14' >
                        <p>Größe: {selectedSize} </p>
                        <p>Menge: {countFiltered?.count} </p>
                        <div className='absolute bottom-0 end-0'>
                            <div className='absolute end-0 bottom-16'>
                                <button onClick={() => removeFromCart(id)} className='border text-sm text-left bg-red-500 text-white hover:bg-red-700 transition rounded-lg px-1 h-12'> Aus dem Warenkorb enternen </button>
                            </div>
                            <button className='  hover:bg-green-700 w-10 transition h-10 border rounded-lg bg-green-500'>
                                <span onClick={() => increment(id)} className="text-lg text-white font-bold"> + </span>
                            </button>
                            <span className='mx-4'> {countFiltered?.count} </span>
                            <button onClick={() => decrement(id)} className=' hover:bg-green-700 w-10 transition h-10 border rounded-lg bg-green-500'>
                                <span className="text-lg text-white font-bold"> - </span>
                            </button>
                        </div>


                    </div>
                </div>
            </div>

        </div >
    )
}
