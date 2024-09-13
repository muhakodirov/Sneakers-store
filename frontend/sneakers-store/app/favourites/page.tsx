"use client"
import ListOfProducts, { SHOES } from "@/components/sale-components/ListOfProducts";
import { useShopContext } from "@/context/shopContext";


export default function FavouritesPage() {
  const {favorites} = useShopContext()
  console.log(favorites)
  
  return (
    <div className="block lg:flex justify-between mt-10 lg:mt-20">
        <div className="text-left mb-4 lg:mb-0 text-lg lg:text-4xl text-red-700 font-bold">
        {favorites.length <= 0 ? <p className="text-4xl font-bold"> Kein Favoriten :(</p> : <p className="text-4xl font-bold"> Favoriten </p>}
        </div>
        <div className="float-right w-2/3 flex flex-wrap">
          {favorites.map((favProduct) => <ListOfProducts shoes={[favProduct]} />)}
        </div>
    </div>
  )
}
