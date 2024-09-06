import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
   
  export function SelectSize({size}:{size:number[]}) {
    return (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Die Größe auswählen" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>

             {(size?.length > 0) ?
              	size.map((s,i) => <SelectItem key={i} value={`${s}`}> {s} </SelectItem> ) 
                :<>
                <SelectItem value="42">43</SelectItem>
                <SelectItem value="42">42</SelectItem>
                <SelectItem value="41">41</SelectItem>
                <SelectItem value="40">40</SelectItem>
                <SelectItem value="39">39</SelectItem>
                <SelectItem value="38">38</SelectItem>
                </>
              } 


          </SelectGroup>
        </SelectContent>
      </Select>
    )
  }

  export function SelectBrand() {
    return (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Die Marke auswählen" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="nike">Nike</SelectItem>
            <SelectItem value="puma">Puma</SelectItem>
            <SelectItem value="nb">New Balance</SelectItem>
            <SelectItem value="adidas">Adidas</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  }
