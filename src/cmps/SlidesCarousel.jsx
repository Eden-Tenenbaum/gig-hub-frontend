import React, { useState, useEffect, useRef } from "react"
import NextIcon from '../../public/img/icons/NextIcon.svg'
import PrevIcon from '../../public/img/icons/PrevIcon.svg'

export function SlidesCarousel({ slides = [] }) {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const containerRef = useRef(null)

    useEffect(() => {
        if (current >= length) setCurrent(0)
    }, [length, current])

    if (length === 0) return null
    if (length === 1) {
        const { src, alt = '' } = slides[0]
        return (
            <div className="single-slide">
                <img src={src} />
            </div>
        )
    }

    const nextSlide = () => {
        const c = containerRef.current
        c.classList.add('dir-next')
        c.classList.remove('dir-prev')
        setCurrent(i => (i === length - 1 ? 0 : i + 1))
    }

    const prevSlide = () => {
        const c = containerRef.current
        c.classList.add('dir-prev')
        c.classList.remove('dir-next')
        setCurrent(i => (i === 0 ? length - 1 : i - 1))
    }

    const goToSlide = idx => setCurrent(idx)

    return <div className="slideshow-container" ref={containerRef}>
        <div
            className="slides"
            style={{ transform: `translateX(-${current * 100}%)` }}
        >
            {slides.map((slide, idx) => (
                <div className="slide" key={idx}>
                    <img src={slide.src} />
                </div>
            ))}
        </div>

        {current > 0 && (
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
        )}
        {current < length - 1 && (
            <button
                className="next"
                onClick={e => {
                    e.preventDefault()
                    e.stopPropagation()
                    nextSlide()
                }}
            >
                <img className='next-icon' src={NextIcon} />
            </button>
        )}
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