"use client"
import { SHOES } from "@/components/sale-components/ListOfProducts";
import { createContext, ReactNode, useContext, useState } from "react";
import { useToast } from "@/hooks/use-toast"


const ShopContext = createContext<any>([]);

// type ValueProps = {
//     productsInCart: SHOES[],
//     addToCart: (product: SHOES) => void,
//     removeFromCart: (productId: SHOES["_id"]) => void
// }

export function ShopContextProvider({ children }: { children: ReactNode }) {
    const [favorites, setFavorites] = useState<SHOES[]>([]);
    const [productsInCart, setProductsInCart] = useState<SHOES[]>([]);
    const [count, setCount] = useState<any>([]);
    const { toast } = useToast()
    const addToCart = (product: SHOES, size: number | null) => {
        if (productsInCart.includes(product)) {
            return (
                toast({
                    title: "Das Produkt ist schon da!",
                    description: "Du hast es schon in dem Korb hinzugefügt 😊",
                  })
            )
        } else if (size == null) {
                toast({
                    title: "Wählen Sie erstmal die Größe!",
                    variant: "destructive",
                })
        } else {
            setProductsInCart((prevProducts) => [...prevProducts, product])
        }
    }

    const removeFromCart = (productId: SHOES["_id"]) => {
        const newProducts = productsInCart.filter(product => product._id !== productId)
        setProductsInCart(newProducts)
    }

    const addToFavs = (product: SHOES) => {
        setFavorites((preFavsProducts) => [...preFavsProducts, product])
    }

    const removeFromFavs = (productId: SHOES["_id"]) => {

        const newProducts = favorites.filter(favsProduct => favsProduct._id !== productId)
        setFavorites(newProducts)
    }

    const increment = (id: SHOES["_id"]) => {
        setCount((prevCounts: any) => {
            const existingCount = prevCounts.find((item: any) => item.id === id);

            if (existingCount) {
                return prevCounts.map((item: any) =>
                    item.id === id ? { ...item, count: item.count + 1 } : item
                );
            } else {
                return [...prevCounts, { id: id, count: 1 }];
            }
        });
    };
    const decrement = (id: SHOES["_id"]) => {
        setCount((prevCounts: any) => {
            const existingCount = prevCounts.find((item: any) => item.id === id);

            if (existingCount) {
                return prevCounts.map((item: any) =>
                    item.id === id ? { ...item, count: item.count - 1 } : item
                );
            } else {
                return [...prevCounts, { id: id, count: 1 }];
            }
        });
    };

    return (
        <ShopContext.Provider value={{ productsInCart, addToCart, removeFromCart, favorites, addToFavs, removeFromFavs, increment, decrement, count }}>
            {children}
        </ShopContext.Provider>
    )


}

export function useShopContext() {
    return useContext(ShopContext);
}