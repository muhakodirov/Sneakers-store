"use client"

import { useSearchParams } from "next/navigation"

export default function BrandPage({params}:{params: {brand:string}}) {
    const searchBrand = useSearchParams()
    console.log(searchBrand)
    return (
    <div>{params.brand} Page </div>
  )
}
