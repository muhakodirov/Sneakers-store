"use client"
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useFilterContext } from "@/context/filterContext"
import { useEffect } from "react"

export function SelectSize({ size, pageType }: { size?: number[], pageType?: string }) {
  const { setSizeFilter, sizeFilter, brandFilter } = useFilterContext();
  const router = useRouter();

  useEffect(() => {
    if (sizeFilter === 'delete') {
      setSizeFilter('');
      if (brandFilter) {
        router.push(`${pageType}?brand=${brandFilter}`);
      } else {
        pageType && router.push(pageType);
      }
    } else if (sizeFilter && !brandFilter) {
      router.push(`${pageType}?size=${encodeURIComponent(sizeFilter)}`);
    } else if (sizeFilter && brandFilter) {
      router.push(`${pageType}?brand=${encodeURIComponent(brandFilter)}&size=${encodeURIComponent(sizeFilter)}`);
    }
  }, [sizeFilter, brandFilter, router, pageType, setSizeFilter]);

  return (
    <Select value={sizeFilter} onValueChange={setSizeFilter}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Die Größe auswählen" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="delete">Reset</SelectItem>
          <SelectItem value="43">43</SelectItem>
          <SelectItem value="42">42</SelectItem>
          <SelectItem value="41">41</SelectItem>
          <SelectItem value="40">40</SelectItem>
          <SelectItem value="39">39</SelectItem>
          <SelectItem value="38">38</SelectItem>
          <SelectItem value="37">37</SelectItem>
          <SelectItem value="36">36</SelectItem>
          <SelectItem value="35">35</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}



export function SelectBrand({ pageType }: { pageType: string }) {
  const { setBrandFilter, brandFilter, sizeFilter } = useFilterContext();
  const router = useRouter();

  useEffect(() => {
    if (brandFilter === 'delete') {
      setBrandFilter('');
      if (sizeFilter) {
        router.push(`${pageType}?size=${sizeFilter}`);
      } else {
        router.push(pageType);
      }
    } else if (brandFilter && !sizeFilter) {
      router.push(`${pageType}?brand=${encodeURIComponent(brandFilter)}`);
    } else if (brandFilter && sizeFilter) {
      router.push(`${pageType}?brand=${encodeURIComponent(brandFilter)}&size=${encodeURIComponent(sizeFilter)}`);
    }
  }, [brandFilter, sizeFilter, router, pageType, setBrandFilter]);

  return (
    <Select value={brandFilter} onValueChange={setBrandFilter}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Die Marke auswählen" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="delete">Reset</SelectItem>
          <SelectItem value="nike">Nike</SelectItem>
          <SelectItem value="puma">Puma</SelectItem>
          <SelectItem value="new-balance">New Balance</SelectItem>
          <SelectItem value="adidas">Adidas</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
