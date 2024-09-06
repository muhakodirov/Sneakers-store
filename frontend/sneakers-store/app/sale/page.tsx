import ListOfProducts from "@/components/sale-components/ListOfProducts";
import Sidebar from "@/components/sale-components/Sidebar";
import { Suspense } from "react";
import Loading from "./loading";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

async function getInSaleProducts() {
  "use server"
  const res = await fetch("http://localhost:3000/sale/get-insale-products", {cache: "no-cache"})
  const data = await res.json()
  return data
}

 export default async function SalePage() {
  const {data} = await getInSaleProducts()
  return (
    <div className=" text-center justify-center content-center">
        <p className={`${roboto.className} mt-24 text-5xl text-red-700`}>
          SALE
        </p>

        <div className="lg:flex mt-16 justify-center">
            <div className="lg:w-1/3">
                <Sidebar />
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
