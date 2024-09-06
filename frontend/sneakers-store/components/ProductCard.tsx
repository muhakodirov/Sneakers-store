import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type PROPS = {
  id: string
  name: string,
  price: number,
  imageUrl: string,
  category: string
}

export default function ProductCard({id, category, name, price, imageUrl}: PROPS) {
  return (
    <div>
    <div className=" overflow-hidden rounded-md w-52 h-52 border content-center bg-card text-card-foreground hover:shadow-lg transition ">
          <div className="">
            <Link href={`/${id}`}>
              <Image
                className="rounded-md ltransition-transform duration-300 ease-in-out hover:scale-110"
                src="/image.webp" //imageUrl
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </Link>
          </div>
    </div>
    <div className='text-left text-[14px] mt-2 font-normal text-slate-600'>
          <b className=''> {category?.toUpperCase()} {name} </b> <br />
         <span className='text-[18px] text-green-900 font-bold'> {price} € </span> <br />
    </div>

    </div>
  )
}
