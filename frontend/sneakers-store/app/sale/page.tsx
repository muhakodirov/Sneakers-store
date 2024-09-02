import ListOfProducts from "@/components/sale-components/ListOfProducts";
import Sidebar from "@/components/sale-components/Sidebar";
import { Suspense } from "react";
import Loading from "./loading";

export default function SalePage() {
  return (
    <div className=" text-center justify-center content-center">
        <div className="lg:flex mt-24 justify-center">
            <div className="lg:w-1/3">
                <Sidebar />
            </div>
            <div className="lg:w-2/3">
            <Suspense fallback={<Loading />}>
                <ListOfProducts />
            </Suspense>
            </div>
        </div>
    </div>
  )
}
