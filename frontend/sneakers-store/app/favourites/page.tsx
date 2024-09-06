import ListOfProducts from "@/components/sale-components/ListOfProducts";
import { Suspense } from "react";
import Loading from "./loading";

export default function SalePage() {
  return (
    <div className="block lg:flex justify-between mt-10 lg:mt-20">
        <div className="text-left mb-4 lg:mb-0 text-lg lg:text-4xl text-red-700 font-bold">
          <p>Favoriten:</p>
        </div>
        <div className="float-right w-2/3">
            <Suspense fallback={<Loading />}>
                <ListOfProducts />
            </Suspense>
        </div>
    </div>
  )
}
