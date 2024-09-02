import Link from "next/link";
import ProductCard from "../ProductCard";
//server-comp
function delay(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
const array = [1,2,3,4, 5, 6, 7, 8, 9]
export default async function ListOfProducts() {
// await delay(4000)
  return (
    <div className="rounded-md border bg-card text-card-foreground shadow-sm mx-3">
          <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex flex-col lg:flex-row justify-between p-6 col-span-1 lg:row-span-3 flex-wrap gap-12 text-2xl font-semibold leading-none tracking-tight">
                    {array.map(el => <Link href='/'> 
                         <ProductCard />
                         </Link>
                        )}
              </div>
          </div>
      </div>
  )
}
