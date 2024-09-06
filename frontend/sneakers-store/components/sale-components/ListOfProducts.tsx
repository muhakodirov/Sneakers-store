import Link from "next/link";
import ProductCard from "../ProductCard";
//server-comp

type SHOES = {

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

export default async function ListOfProducts({shoes}:{shoes: SHOES[]}) {
  return (
    <div className="rounded-md border bg-card text-card-foreground shadow-sm mx-3">
          <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex flex-col lg:flex-row justify-evenly p-6 col-span-1 lg:row-span-3 flex-wrap gap-12 text-2xl font-semibold leading-none tracking-tight">
                    {shoes?.map(shoe => <ProductCard
                                                id={shoe._id}
                                                category={shoe.category}
                                                name={shoe.name}
                                                price={shoe.price}
                                                imageUrl={shoe.imageUrl}/>)  }
                    
                   
              </div>
          </div>
      </div>
  )
}
