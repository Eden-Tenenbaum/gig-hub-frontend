import { useState, useEffect, useRef } from "react"
import { CaretLeftIcon, CaretRightIcon } from "./SvgHub"

export function SlidesCarousel({ slides = [] }) {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const containerRef = useRef(null)

    useEffect(() => {
        if (current >= length) setCurrent(0)
    }, [length, current])

    if (!length) return 
    if (length === 1) {
        const { src } = slides[0]
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

    const handleClick = (e, isNext = true) => {
        e.preventDefault()
        e.stopPropagation()
        isNext ? nextSlide() : prevSlide()
    }

    const goToSlide = idx => setCurrent(idx)

    return <div className="slideshow-container" ref={containerRef}>
        <div className="slides" style={{ transform: `translateX(-${current * 100}%)` }} >
            {slides.map((slide, idx) => 
                <div className="slide" key={idx}><img src={slide.src} /></div>
            )}
        </div>

        {current > 0 && (
            <button type="button" className="prev grid place-center" onClick={e => handleClick(e, false)} >
                <CaretLeftIcon />
            </button>
        )}
        {current < length - 1 && (
            <button className="next grid place-center" onClick={handleClick} >
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