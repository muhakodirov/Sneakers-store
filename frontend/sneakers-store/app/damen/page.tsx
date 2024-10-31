import ListOfProducts from "@/components/sale-components/ListOfProducts";
import Sidebar from "@/components/sale-components/Sidebar";
import { Suspense, useEffect } from "react";
import Loading from "./loading";
import { Roboto } from "next/font/google";
import { useFilterContext } from "@/context/filterContext";
import { getProducts, getProductsByQuery } from '@/action/damen/get-products'
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})



export default async function DamenPage({ searchParams }: { searchParams: any }) {
  const queryBrand = searchParams.brand
  const querySize = searchParams.size
  const { data } = (queryBrand || querySize)
    ? await getProductsByQuery(queryBrand, querySize)
    : await getProducts();

  return (
    <div className=" text-center justify-center content-center">
      <p className={`${roboto.className} mt-24 text-3xl lg:text-5xl text-red-700`}>
        DAMEN
      </p>
      <div className="lg:flex mt-16 justify-center">
        <div className="lg:w-1/3">
          <Sidebar page='/damen' />
        </div>
        <div className="lg:w-2/3">
          <Suspense fallback={<Loading />}>
            <ListOfProducts shoes={data} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
