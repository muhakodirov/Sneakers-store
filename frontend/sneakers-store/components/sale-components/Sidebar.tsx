"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SelectBrand, SelectSize } from "../schadcn_components/Select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { Button } from "../ui/button"
import { FilterIcon } from "lucide-react"
import { useFilterContext } from "@/context/filterContext"

export default function Sidebar({ page }: { page: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const { brandFilter, sizeFilter } = useFilterContext()
  const FilterContent = () => (
    <div className="flex flex-col space-y-4">
      <SelectBrand pageType={page} />
      <SelectSize pageType={page} />
      <hr className="my-4" />
      <Label htmlFor="price">Price (€)</Label>
      <Input type="number" id="price" placeholder="Geben sie den Betrag ein" />
    </div>
  )


  return (
    <>
      {/*Desktop*/}
      <div className="hidden lg:block fixed w-[20%] top-36">
        <div className="flex flex-col space-y-1.5 p-12">
          <div className=" mx-auto justify-center text-left gap-3">
            <FilterContent />
          </div>
        </div>
      </div>

      {/*Mobile*/}
      <div className="lg:hidden relative">
        {(brandFilter || sizeFilter) &&
          <div className="absolute -top-4 right-[100px] z-10">
            <span> 🔴 </span>
          </div>
        }
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-auto bg-slate-100 border hover:bg-slate-200 transition font-bold rounded-md mb-8 h-8">
              <span className="p-3"> Die Produkte ausfiltern </span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <FilterContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
