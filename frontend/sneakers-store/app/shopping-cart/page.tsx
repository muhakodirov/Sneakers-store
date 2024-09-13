"use client"
import CartLists from "@/components/CartLists";
import Rechnung from "@/components/Rechnung";
import { useShopContext } from "@/context/shopContext";

export default function CartPage() {
  const {removeFromCart, productsInCart} = useShopContext()
  return (
    <div className="mt-20">
        <div className="block lg:flex gap-20 "> 
            <div className=" basis-2/3">
                {productsInCart.length <= 0 ? <p className="text-4xl font-bold"> Warenkorb ist leer :(</p> : <p className="text-4xl font-bold"> Warenkorb </p>}
              <div className="mt-14">
                {productsInCart.map((product: any) => <CartLists id={product._id} category={product.category} name={product.name} size={product.size} />)}
              </div>
            </div>
            <div className=" text-center basis-1/3">
              <Rechnung />
            </div>
        </div>
    </div>
  )
}
