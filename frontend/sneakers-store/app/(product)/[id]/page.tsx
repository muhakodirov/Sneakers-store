import { CarouselComponent } from "@/components/schadcn_components/Carousel-component"
import { SelectSize } from "@/components/schadcn_components/Select"

type DATA = {
    _id: string,
    name: string,
    size: number[],
    price: number,
    description: string,
    category: string,
    men: boolean,
    women: boolean,
    imageUrl: string,
    stock: number,
    __v: number
  }

async function getProductById(id:string) {
    const res = await fetch(`http://localhost:3000/api/products/${id}`)
    if (!res.ok) {
        throw new Error('Error!');
    }
    const data = await res.json()
    return data
}

export default async function SinglePage({params}:{params: {id:string}}) {
    const {data}:{data:DATA} = await getProductById(params.id) 


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
                            <button className="w-44 hover:bg-green-700 transition h-12 border rounded-lg bg-green-500"> <span className="text-lg text-white font-bold"> In den Warenkorb </span> </button>
                            <button className="w-36 hover:bg-gray-300 transition h-12 border rounded-lg bg-gray-100">
                            <span className="text-lg text-black font-bold text-center"> Ich mag es ❤ </span>
                            </button>
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
