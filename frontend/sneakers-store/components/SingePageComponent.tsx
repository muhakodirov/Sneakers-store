"use client"
import { useShopContext } from "@/context/shopContext"
import { SHOES } from "./sale-components/ListOfProducts"
import { CarouselComponent } from "./schadcn_components/Carousel-component"
import { SelectSize } from "./schadcn_components/Select"

export default function SingePageComponent({data}:{data: SHOES}) {
    const {favorites, addToCart, addToFavs, removeFromFavs} = useShopContext()
    return (
        <div>
            <div className="flex justify-evenly my-28 gap-14">
                <div className="relative w-1/3">
                   <div className=" ">
                        <p className="font-bold text-5xl mb-14">
                            {data?.category.toUpperCase()} {data?.name}
                        </p>
                        <SelectSize size={data?.size}/>
                        <span className="font-extralight text-green-700"> {data?.stock > 0 ? 'Verfügbar' : 'Nicht Verfügbar'} </span>
                   </div>
                        <div className="absolute bottom-0 flex gap-10 mt-auto">
                            <button onClick={() => addToCart(data)} className="w-44 hover:bg-green-700 transition h-12 border rounded-lg bg-green-500"> <span className="text-lg text-white font-bold"> In den Warenkorb </span> </button>
                           
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
                    <CarouselComponent />
                </div>
            </div>   
            <hr className="mx-auto w-1/3 my-20" />
                <div className="text-center">
                    <span className="text-4xl">Was die andere Leute darüber denken?</span>
                </div>
            </div>
  )
}
