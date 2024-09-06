"use client"
import EmblaCarousel from "@/components/embla-carousel/EmblaCarousel";
import { CarouselComponent } from "@/components/schadcn_components/Carousel-component";
import { Roboto, Rochester } from 'next/font/google'
import { EmblaOptionsType } from 'embla-carousel'
import { HomeCard } from "@/components/HomeCard";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 6
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <>
      <div className="lg:max-w-4xl lg:mx-auto ">
        <div className=" text-left mt-20">
          <p className={`${roboto.className} mb-8 text-md lg:text-2xl`}>Brands</p>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
        <div className=" mt-40 lg:mt-52">
          <p className={`${roboto.className} mb-8 text-left text-md lg:text-2xl`}>
            Bestsellers
          </p>
          <CarouselComponent />
        </div>
        <div className="flex flex-col text-center gap-8 items-center space-y-8 lg:space-y-0  lg:flex-row my-52 justify-center">
          <HomeCard title = "Herren" url="/herren"/>
          <HomeCard title = "Damen"  url="/damen"/>
        </div>
      </div>
    </>
  )
}
