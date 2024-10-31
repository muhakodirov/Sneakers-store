"use client"


import { SHOES } from "@/components/sale-components/ListOfProducts";
import { createContext, ReactNode, useContext, useState } from "react";

const FilterContext = createContext<any>([])

export function FilterContextProvider({ children }: { children: ReactNode }) {
    const [brandFilter, setBrandFilter] = useState('')
    const [sizeFilter, setSizeFilter] = useState()
    const [selectedSize, setSelectedSize] = useState<{ productId: string, size: number }[]>([]);
    const [priceFilter, setPriceFilter] = useState()
    const [onStock, setOnStock] = useState(null)



    const handleSizeSelect = (data: any, size: number) => {
        setSelectedSize((prevSelectedSize) => {
            const existingProduct = prevSelectedSize.find((el) => el.productId === data._id);
            if (existingProduct) {
                return prevSelectedSize.map((el) =>
                    el.productId === data._id ? { ...el, size: size } : el
                );
            } else {
                return [...prevSelectedSize, { productId: data._id, size: size }];
            }
        })
        const onStock = data.size?.find((el: any) => parseInt(el) === size)
        setOnStock(onStock)
    };

    const deleteSizeSelect = (id: string) => {
        const newObject = selectedSize.filter(el => el.productId !== id)
        setSelectedSize(newObject)
    }

    console.log(selectedSize)

    return (
        <FilterContext.Provider value={{ onStock, brandFilter, setBrandFilter, selectedSize, deleteSizeSelect, handleSizeSelect, sizeFilter, setSizeFilter, priceFilter, setPriceFilter }}>
            {children}
        </FilterContext.Provider>
    )

}

export function useFilterContext() {
    return useContext(FilterContext);
}