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
    const sizeFilter = selectedSize.map((el: any) => el.productId === id && el.size)

    return (
        <div className="mb-4">
            <div className="flex items-center bg-white shadow-sm rounded-lg overflow-hidden">
                <Link href={`/${id}`} className="w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0">
                    <Image
                        className="w-full h-full object-cover"
                        src="/image.webp"
                        width={500}
                        height={500}
                        alt={`${category} ${name}`}
                    />
                </Link>
                <div className="flex-1 p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div className="mb-3 sm:mb-0">
                        <h3 className="font-bold text-base sm:text-lg">{category?.toUpperCase()} {name}</h3>
                        <p className="text-sm text-gray-600">Größe: {sizeFilter}</p>
                    </div>
                    <div className="flex sm:flex-row sm:items-center gap-3">
                        <div className="flex items-center">
                            <button
                                disabled={countFiltered.count == 1}
                                onClick={() => decrement(id)}
                                className="disabled:cursor-not-allowed disabled:bg-slate-400  w-6 lg:w-8 h-6 lg:h-8 flex items-center justify-center border rounded-l bg-gray-100 hover:bg-gray-200 transition"
                                aria-label="Decrease quantity"
                            >
                                <span className="text-sm font-bold">-</span>
                            </button>
                            <span className="w-6 lg:w-8 h-6 lg:h-8 flex items-center justify-center border-t border-b bg-white text-sm">
                                {countFiltered?.count}
                            </span>
                            <button
                                disabled={countFiltered.count == 15}
                                onClick={() => increment(id)}
                                className="disabled:cursor-not-allowed disabled:bg-slate-400 w-6 lg:w-8 h-6 lg:h-8 flex items-center justify-center border rounded-r bg-gray-100 hover:bg-gray-200 transition"
                                aria-label="Increase quantity"
                            >
                                <span className="text-sm font-bold">+</span>
                            </button>
                        </div>
                        <button
                            onClick={() => removeFromCart(id)}
                            className="text-sm bg-red-500 text-white hover:bg-red-600 transition rounded px-2 lg:px-3 py-1 lg:py-2"
                        >
                            Entfernen
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
