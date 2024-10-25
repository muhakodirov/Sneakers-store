"use client"


import { createContext, ReactNode, useContext, useState } from "react";

const FilterContext = createContext<any>([])

export function FilterContextProvider({ children }: { children: ReactNode }) {
    const [brandFilter, setBrandFilter] = useState('')
    const [sizeFilter, setSizeFilter] = useState()
    const [selectedSize, setSelectedSize] = useState<number | null>(null)
    const [priceFilter, setPriceFilter] = useState()

    return (
        <FilterContext.Provider value={{ brandFilter, setBrandFilter, selectedSize, setSelectedSize, sizeFilter, setSizeFilter, priceFilter, setPriceFilter }}>
            {children}
        </FilterContext.Provider>
    )

}

export function useFilterContext() {
    return useContext(FilterContext);
}