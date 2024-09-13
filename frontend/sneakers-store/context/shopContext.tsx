"use client"
import { SHOES } from "@/components/sale-components/ListOfProducts";
import { createContext, ReactNode, useContext, useState } from "react";

const ShopContext = createContext<any>([]);

// type ValueProps = {
//     productsInCart: SHOES[],
//     addToCart: (product: SHOES) => void,
//     removeFromCart: (productId: SHOES["_id"]) => void
// }

export function ShopContextProvider({children}:{children:ReactNode}){
    const [favorites, setFavorites] = useState<SHOES[]>([]);
    const [productsInCart, setProductsInCart] = useState<SHOES[]>([]);
    const [count, setCount] = useState<number>(1);

    const addToCart = (product: SHOES) => {
        setProductsInCart((prevProducts)=>[...prevProducts, product])
    }

    const removeFromCart = (productId:SHOES["_id"]) => {
        const newProducts = productsInCart.filter(product => product._id !== productId)
        setProductsInCart(newProducts)
    }

    const addToFavs = (product:SHOES) => {
        setFavorites((preFavsProducts) => [...preFavsProducts, product])
    }

    const removeFromFavs = (productId:SHOES["_id"]) => {

        const newProducts = favorites.filter(favsProduct => favsProduct._id !== productId)
        setFavorites(newProducts)
    }

    const increment = () => {
        setCount((prevCount) => prevCount + 1)
    }
    const decrement = () => {
        setCount((prevCount) => prevCount - 1)
    }

    return (
        <ShopContext.Provider value={{productsInCart, addToCart, removeFromCart, favorites, addToFavs, removeFromFavs, increment, decrement, count}}>
                {children}
        </ShopContext.Provider>
    )


}

export function useShopContext() {
    return useContext(ShopContext);
}