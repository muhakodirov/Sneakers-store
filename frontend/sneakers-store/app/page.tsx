"use client"
import { CarouselComponent } from "@/components/schadcn_components/Carousel-component";
import { Roboto, Rochester } from 'next/font/google'


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


export default function Home() {
  return (
    <>
      <div className="lg:hidden items-center font-light text-sm text-center mt-12">
        <q className=" rounded-sm ">
          welcome to <b> S&S </b> store :)
        </q> <br />
        <i> founded by Kadirov </i>
      </div>

      <div className="block text-center lg:justify-center mt-40 lg:mt-36">
        <p className={`${roboto.className} text-xl lg:text-3xl mb-4 lg:mb-10`}>
          <b> BESTSELLERS </b> 😍
        </p>
        <CarouselComponent />
      </div>
    </>
  )
}
