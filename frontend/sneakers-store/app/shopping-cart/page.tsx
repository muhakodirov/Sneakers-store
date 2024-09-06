import CartLists from "@/components/CartLists";
import Rechnung from "@/components/Rechnung";

export default function SalePage() {
  return (
    <div className="mt-20">
        <div className="block lg:flex gap-20 "> 
            <div className=" basis-2/3">
                <p className="text-4xl font-bold"> Warenkorb</p>
              <div className="mt-14">
                <CartLists />
              </div>
            

            </div>
            <div className=" text-center basis-1/3">
              <Rechnung />
            </div>
        </div>
    </div>
  )
}
