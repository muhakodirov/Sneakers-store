
import EmblaCarousel from "@/components/embla-carousel/EmblaCarousel";
import CarouselComponent from "@/components/schadcn_components/Carousel-component";
import { Roboto, Rochester } from 'next/font/google'
import { EmblaOptionsType } from 'embla-carousel'
import { HomeCard } from "@/components/HomeCard";
import { getProducts } from "@/action/bestsellers/get-products"

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const OPTIONS: EmblaOptionsType = { loop: true }

export default async function Home() {
  const { data } = await getProducts()

  return (
    <>
      <div className="lg:max-w-4xl lg:mx-auto ">
        <div className=" text-left mt-20">
          <p className={`${roboto.className} mb-8 text-md lg:text-2xl`}>Brands</p>
          <EmblaCarousel options={OPTIONS} />
        </div>
        <div className=" mt-40 lg:mt-52">
          <p className={`${roboto.className} mb-12 text-left text-md lg:text-2xl`}>
            Bestsellers
          </p>
          <CarouselComponent data={data} />
        </div>
        <hr className="mt-44" />
        <div className="flex flex-col text-center gap-8 items-center space-y-8 lg:space-y-0  lg:flex-row my-52 justify-center">
          <HomeCard title="Herren" url="/herren" />
          <HomeCard title="Damen" url="/damen" />
        </div>
      </div>
    </>
  )
}
