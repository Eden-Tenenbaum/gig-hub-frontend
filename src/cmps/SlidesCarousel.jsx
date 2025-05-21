import React, { useState, useEffect } from "react"
import NextIcon from '../../public/img/icons/NextIcon.svg'
import PrevIcon from '../../public/img/icons/PrevIcon.svg'

export function SlidesCarousel({ slides = [] }) {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    // console.log("slides:", slides)
    useEffect(() => {
        if (current >= length) {
            setCurrent(0)
        }
    }, [length, current])

    if (length === 0) return null

    if (length === 1) {
        const { src, alt = '' } = slides[0]
        return (
            <div className="single-slide">
                <img src={src} alt={alt} />
            </div>
        )
    }

    const nextSlide = () =>
        setCurrent(prev => (prev === length - 1 ? 0 : prev + 1))
    const prevSlide = () =>
        setCurrent(prev => (prev === 0 ? length - 1 : prev - 1))
    const goToSlide = (idx) => setCurrent(idx)

    return <div className="slideshow-container">
        {slides.map((slide, idx) => (
            <div
                key={idx}
                className={idx === current ? "slide active" : "slide"}
            >
                {idx === current && <img src={slide.src} />}
            </div>
        ))}
        <button
            type="button"
            className="prev"
            onClick={e => {
                e.preventDefault()
                e.stopPropagation()
                prevSlide()
            }}
        >
            <img className="prev-icon" src={PrevIcon} alt="Previous slide" />
        </button>
        <button
            className="next"
            onClick={e => {
                e.preventDefault()
                e.stopPropagation()
                nextSlide()
            }}
        >
            <img className='next-icon' src={NextIcon} /></button>

        <div className="dots-container">
            {slides.map((_, idx) => (
                <span
                    key={idx}
                    className={idx === current ? "dot active" : "dot"}
                    onClick={() => goToSlide(idx)}
                />
            ))}
        </div>
    </div >
}