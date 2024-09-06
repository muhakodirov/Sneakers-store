import Sidebar from "@/components/sale-components/Sidebar";
import { Suspense } from "react";
import Loading from "./loading";
import ListOfProducts from "@/components/sale-components/ListOfProducts";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

async function getProducts() {
  "use server"
  const res = await fetch("http://localhost:3000/herren/get-products", {cache: "force-cache"})
  const data = await res.json()
  return data
}

export default async function HerrenPage() {
const {data} = await getProducts()
  return (
    <div className=" text-center justify-center content-center">
          <p className={`${roboto.className} mt-24 text-5xl text-red-700`}>
          HERREN
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
