"use client"

import { SHOES } from "@/components/sale-components/ListOfProducts";
import { createContext, ReactNode, useContext, useState } from "react";

const FilterContext = createContext<any>([])

export function FilterContextProvider({ children }: { children: ReactNode }) {
    const [brandFilter, setBrandFilter] = useState('')
    const [sizeFilter, setSizeFilter] = useState()
    const [priceFilter, setPriceFilter] = useState()

    return (
        <FilterContext.Provider value={{ brandFilter, setBrandFilter, sizeFilter, setSizeFilter, priceFilter, setPriceFilter }}>
            {children}
        </FilterContext.Provider>
    )

}

export function useFilterContext() {
    return useContext(FilterContext);
}