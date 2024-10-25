"use client"
import React, { useEffect, useState } from 'react'
import './embla.css'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import Image from 'next/image'

const brands=[
    {name:'Adidas', img:'/brands/adidas.png'},
    {name:'Nike', img:'/brands/nike.png'},
    {name:'NikeJordan', img:'/brands/nikejordan.png'},
    {name:'Puma', img:'/brands/puma.png'},
    {name:'NB', img:'/brands/nb.png'},
    {name:'UA', img:'/brands/ua.png'},
]

type PropType = {
    slides?: number[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: true })
    ])
    const [isPlaying, setIsPlaying] = useState(true)

    useEffect(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll
        if (!autoScroll) return

        setIsPlaying(autoScroll.isPlaying())
        emblaApi
            .on('autoScroll:play', () => setIsPlaying(true))
            .on('autoScroll:stop', () => setIsPlaying(false))
            .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
    }, [emblaApi])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                
                <div className="embla__container">
                    {brands.map((el, index) => (
                        <div className="embla__slide" key={index}>
                                 <div className="embla__slide__number">
                                    <Image className="rounded-lg"
                                        src={el.img}
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"/>
                                 </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel
