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
  
  export function SinglePageCarouselComponent({imgUrl}:{imgUrl?:string}): React.JSX.Element {
    return (
      <Carousel className="w-full max-w-80 mx-auto lg:max-w-md">
        <CarouselContent>
          {Array.from({ length: 9 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                      className="rounded-lg"
                      src={(imgUrl?.includes('amazon')) ? '/image.webp' : imgUrl}
                      width={500}
                      height={500}
                      alt="Some pictures"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
  }
  