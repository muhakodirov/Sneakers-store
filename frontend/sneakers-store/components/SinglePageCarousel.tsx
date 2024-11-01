"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export function SinglePageCarouselComponent({ imgUrl }: { imgUrl?: string }): React.JSX.Element {
  return (
    <Carousel className="max-w-xs lg:max-w-lg mx-auto lg:mx-0 md:float-none lg:float-right">
      <CarouselContent>
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 sm:p-4 lg:p-6">
                  <Image
                    className="rounded-lg w-full h-full object-cover"
                    src={(imgUrl?.includes('amazon')) ? '/image.webp' : imgUrl as string}
                    width={500}
                    height={500}
                    alt="Product image"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  )
}
