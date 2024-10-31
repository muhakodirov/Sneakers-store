"use client"
import CartLists from "@/components/CartLists";
import Rechnung from "@/components/Rechnung";
import { useShopContext } from "@/context/shopContext";
import NothingFound from "@/components/NoDatas";

export default function CartPage() {
  const { productsInCart } = useShopContext()
  return (
    <div className="p-2 mt-16 lg:mt-20">
      <div className="flex flex-col lg:flex-row">
        <div className="m-0 lg:mx-auto lg:w-2/3">
          {productsInCart.length <= 0 ? (
            <NothingFound msg="Warenkorb ist leer" />
          ) : (
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">Warenkorb</p>
          )}
          <div className="mt-6 sm:mt-10 lg:mt-14">
            {productsInCart.map((product: any) => (
              <CartLists
                key={product._id}
                id={product._id}
                category={product.category}
                name={product.name}
                size={product.size}
              />
            ))}
          </div>
        </div>
        <div className={`mt-8 lg:mt-0 w-full lg:w-1/3 ${productsInCart.length <= 0 && 'hidden'}`}>
          <Rechnung />
        </div>
      </div>
    </div>
  )
}
