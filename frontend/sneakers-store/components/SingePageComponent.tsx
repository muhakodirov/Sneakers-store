"use client"
import { useShopContext } from "@/context/shopContext"
import { SHOES } from "./sale-components/ListOfProducts"
import { SinglePageCarouselComponent } from "./SinglePageCarousel"
import { BESTSELLERSDATA } from "@/app/api/bestsellers/[id]/page"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useFilterContext } from "@/context/filterContext"

export default function SingePageComponent({ data }: { data: SHOES | BESTSELLERSDATA }) {
    const { favorites, addToCart, addToFavs, removeFromFavs } = useShopContext()
    const { selectedSize, handleSizeSelect, onStock } = useFilterContext()
    const sizes = [37, 38, 39, 40, 41, 42, 43, 44]
    console.log(onStock)
    const size = selectedSize.find((el: any) => el.productId === data._id && el.size)

    return (
        <div className="p-2 lg:px-4 mt-20">
            <div className="relative flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-8 lg:gap-14">
                <div className="w-full lg:w-1/2 xl:w-1/3">
                    <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-6 lg:mb-14">
                        {data?.category.toUpperCase()} {data?.name}
                    </h1>

                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">Größe</h2>
                        <div className="flex flex-wrap gap-2">
                            {sizes.map((size) => {
                                const isSelected = selectedSize.find((el: any) => el.productId === data._id && el.size === size);
                                return (
                                    <Button
                                        key={size}
                                        variant={isSelected ? "default" : "outline"}
                                        onClick={() => handleSizeSelect(data, size)}
                                        className="w-12 h-12"
                                    >
                                        {size}
                                    </Button>
                                );
                            })}
                        </div>
                    </div>
                    <span className="font-extralight text-green-700">
                        {size ? (
                            onStock ? (
                                'Verfügbar'
                            ) : (
                                <span className="text-red-600">Nicht verfügbar</span>
                            )
                        ) : (
                            'Wählen Sie bitte die Größe'
                        )}
                    </span>

                    <div className="static lg:absolute bottom-0 justify-center  mt-6 mb-10 flex gap-3">
                        <button onClick={() => addToCart(data, size, onStock)} className="w-44 hover:bg-green-700 transition h-12 border rounded-lg bg-green-500"> <span className="text-lg text-white font-bold"> In den Warenkorb </span> </button>

                        {favorites?.find((el: SHOES) => el._id.includes(data._id))
                            ? <button onClick={() => removeFromFavs(data._id)} className="w-36 hover:bg-gray-300 transition h-12 border rounded-lg bg-gray-100">
                                <span className="text-lg text-black font-bold text-center">Gefällt nicht 😒 </span>
                            </button>
                            : <button onClick={() => addToFavs(data)} className="w-36 hover:bg-gray-300 transition h-12 border rounded-lg bg-gray-100">
                                <span className="text-lg text-black font-bold text-center"> Ich mag es  ❤ </span>
                            </button>}
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <SinglePageCarouselComponent imgUrl={data.imageUrl} />
                </div>
            </div>

            <hr className="my-10 lg:my-20" />

            <div className="text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl">Was die andere Leute darüber denken?</h2>
            </div>
        </div>
    )
}
