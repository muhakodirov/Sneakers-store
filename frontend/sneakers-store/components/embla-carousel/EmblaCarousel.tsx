import React, { useCallback, useEffect, useState } from 'react'
import './embla.css'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import Link from 'next/link'
import Image from 'next/image'
// import {
//     NextButton,
//     PrevButton,
//     usePrevNextButtons
// } from './Arrows'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: true })
    ])
    const [isPlaying, setIsPlaying] = useState(true)

    // const {
    //     prevBtnDisabled,
    //     nextBtnDisabled,
    //     onPrevButtonClick,
    //     onNextButtonClick
    // } = usePrevNextButtons(emblaApi)

    const onButtonAutoplayClick = useCallback(
        (callback: () => void) => {
            const autoScroll = emblaApi?.plugins()?.autoScroll
            if (!autoScroll) return

            const resetOrStop =
                autoScroll.options.stopOnInteraction === true
                    ? autoScroll.reset
                    : autoScroll.stop

            resetOrStop()
            callback()
        },
        [emblaApi]
    )

    const toggleAutoplay = useCallback(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll
        if (!autoScroll) return

        const playOrStop = autoScroll.isPlaying()
            ? autoScroll.stop
            : autoScroll.play
        playOrStop()
    }, [emblaApi])

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
                    {slides.map((index) => (
                        
                        <div className="embla__slide" key={index}>
                                 <div className="embla__slide__number">
                                        <Image
                                              className='rounded-full'
                                              src="/image.webp"
                                              width={500}
                                              height={500}
                                              alt="Picture of the author"
                                            />
                                 </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel
