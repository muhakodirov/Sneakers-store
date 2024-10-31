"use client"
import NothingFound from "@/components/NoDatas";
import ProductCard from "@/components/ProductCard";
import { useShopContext } from "@/context/shopContext";


export default function FavouritesPage() {
  const { favorites } = useShopContext()
  console.log(favorites)

  if (favorites.length <= 0) {
    return <div className="mt-16 lg:mt-20 w-full lg:w-2/3 mx-auto">
      <NothingFound msg="Keine Favoriten" />
    </div>
  }

  return (
    <div className="block space-y-8 lg:space-y-0 lg:flex mt-20 justify-center">
      <p className="lg:w-1/3 font-bold lg:text-4xl text-2xl text-red-600"> Favoriten </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 ">
        {favorites.map((favProduct: any) => (
          <ProductCard
            key={favProduct._id}
            id={favProduct._id}
            category={favProduct.category}
            name={favProduct.name}
            price={favProduct.price}
            imageUrl={favProduct.imageUrl}
          />
        ))}
      </div>


    </div>
  )
}
