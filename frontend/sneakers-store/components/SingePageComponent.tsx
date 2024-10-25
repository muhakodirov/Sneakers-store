"use client"
import { useShopContext } from "@/context/shopContext"
import { SHOES } from "./sale-components/ListOfProducts"
import {SinglePageCarouselComponent } from "./SinglePageCarousel"
import { BESTSELLERSDATA } from "@/app/api/bestsellers/[id]/page"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useFilterContext } from "@/context/filterContext"

export default function SingePageComponent({data}:{data: SHOES|BESTSELLERSDATA}) {
    const {favorites, addToCart, addToFavs, removeFromFavs} = useShopContext()
    const {selectedSize, setSelectedSize} = useFilterContext()
    const sizes = [37,38, 39, 40, 41, 42, 43, 44]

    return (
        <div>
            <div className="flex justify-evenly my-28 gap-14">
                <div className="relative w-1/3">
                   <div className=" ">
                        <p className="font-bold text-5xl mb-14">
                            {data?.category.toUpperCase()} {data?.name}
                        </p>
                          
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">Größe</h2>
                        <div className="flex border flex-wrap gap-2">
                        {sizes.map((size) => (
                            <Button
                            key={size}
                            variant={selectedSize === size ? "default" : "outline"}
                            onClick={() => setSelectedSize(size)}
                            className="w-12 h-12"
                            >
                            {size}
                            </Button>
                        ))}
                        </div>
                    </div>
                        <span className="font-extralight text-green-700">  Verfügbar  </span>
                   </div>
                        <div className="absolute bottom-0 flex gap-10 mt-auto">
                            <button onClick={() => addToCart(data, selectedSize)} className="w-44 hover:bg-green-700 transition h-12 border rounded-lg bg-green-500"> <span className="text-lg text-white font-bold"> In den Warenkorb </span> </button>
                           
                                {favorites?.find((el: SHOES) => el._id.includes(data._id))
                                    ? <button onClick={() => removeFromFavs(data._id)} className="w-36 hover:bg-gray-300 transition h-12 border rounded-lg bg-gray-100">
                                        <span className="text-lg text-black font-bold text-center">Gefällt nicht 😒 </span>
                                      </button>
                                    : <button onClick={() => addToFavs(data)} className="w-36 hover:bg-gray-300 transition h-12 border rounded-lg bg-gray-100">
                                        <span className="text-lg text-black font-bold text-center"> Ich mag es  ❤ </span>
                                      </button> }
                        </div>
                </div>
                <div className="">
                    <SinglePageCarouselComponent imgUrl={data.imageUrl}/>
                </div>
            </div>   
            <hr className="mx-auto w-1/3 my-20" />
                <div className="text-center">
                    <span className="text-4xl">Was die andere Leute darüber denken?</span>
                </div>
            </div>
  )
}
