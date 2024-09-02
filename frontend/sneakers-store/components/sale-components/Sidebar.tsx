"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SelectBrand, SelectSize } from "../schadcn_components/Select"

export default function Sidebar() {
  return (
    <div className="fixed w-[20%] rounded-md border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-12">
              <div className="grid w-[90%] max-w-sm mx-auto justify-center text-left gap-3">
               <SelectBrand />
               <SelectSize />
                <hr /> 
                <Label htmlFor="price">Price (€)</Label>
                <Input type="number" id="price" placeholder="Geben sie den Betrag ein" />
              </div>
      </div>
      </div>
  )
}
