import { useState, useEffect } from "react"
import { CaretLeftIcon, CaretRightIcon } from "./SvgHub"

export function SlidesCarousel({ slides = [] }) {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    useEffect(() => {
        if (current >= length) setCurrent(0)
    }, [length, current])

    const nextSlide = () => setCurrent(i => (i === length - 1 ? 0 : i + 1))

    const prevSlide = () => setCurrent(i => (i === 0 ? length - 1 : i - 1))

    const goToNeighbor = (e, isNext = true) => {
        e.preventDefault()
        e.stopPropagation()
        isNext ? nextSlide() : prevSlide()
    }

    const goToSlide = idx => setCurrent(idx)

    if (!length) return
    if (length === 1) return <div className="single-slide"><img src={slides[0]} alt="img" /></div>
    
    return <div className="slideshow-container">
        <div className="slides" style={{ transform: `translateX(-${current * 100}%)` }} >
            {slides.map((slide, idx) =>
                <div className="slide" key={idx}><img src={slide.src} /></div>
            )}
        </div>

        {current > 0 && (
            <button type="button" className="prev grid place-center" onClick={e => goToNeighbor(e, false)} >
                <CaretLeftIcon />
            </button>
        )}
        {current < length - 1 && (
            <button className="next grid place-center" onClick={goToNeighbor} >
                <CaretRightIcon />
            </button>
        )}
        <div className="dots-container">
            {slides.map((_, idx) => (
                <span key={idx} className={idx === current ? 'dot circle active' : 'dot circle'} onClick={() => goToSlide(idx)} />
            ))}
        </div>
    </div >
}