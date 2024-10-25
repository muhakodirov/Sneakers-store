import ListOfProducts, { SHOES } from "@/components/sale-components/ListOfProducts";
import Sidebar from "@/components/sale-components/Sidebar";
import { Suspense } from "react";
import Loading from "./loading";
import { Roboto } from "next/font/google";
import { getProducts, getProductsByQuery } from '@/action/sale/get-products'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default async function SalePage({ searchParams }: { searchParams: any }) {
  const queryBrand = searchParams.brand
  const querySize = searchParams.size
  const { data } = (queryBrand || querySize)
    ? await getProductsByQuery(queryBrand, querySize)
    : await getProducts();

  return (
    <div className=" text-center justify-center content-center">
      <p className={`${roboto.className} mt-24 text-3xl lg:text-5xl text-red-700`}>
        SALE
      </p>

      <div className="block lg:flex mt-16 justify-center">
        <div className="w-auto lg:w-1/3">
          <Sidebar page='/sale' />
        </div>
        <div className="w-auto lg:w-2/3">
          <Suspense fallback={<Loading />}>
            <ListOfProducts shoes={data} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
