import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useSearchParams } from 'react-router-dom';

const fiverrMainCategories = [
    { name: "Graphics & Design", id: "graphics-design" },
    { name: "Programming & Tech", id: "programming-tech" },
    { name: "Digital Marketing", id: "digital-marketing" },
    { name: "Video & Animation", id: "video-animation" },
    { name: "Writing & Translation", id: "writing-translation" },
    { name: "Music & Audio", id: "music-audio" },
    { name: "Business", id: "business" },
    { name: "Finance", id: "finance" },
    { name: "AI Services", id: "ai-services" },
    // { name: "Personal Growth", id: "personal-growth" },
    // { name: "Consulting", id: "consulting" },
    // { name: "Data", id: "data" },
    // { name: "Photography", id: "photography" }
]

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        slidesToSlide: 6 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
}

export function Categories() {
    const [searchParams] = useSearchParams();
    const current = searchParams.get('category') || '';
    return (
        <section className="categories-menu-package">
            <ul>
                {fiverrMainCategories.map(({ name, id }) => (
                    <li key={id}>
                        <Link
                            to={`/gig?category=${id}`}
                            className={current === id ? 'active' : ''}
                        >
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </section >
    )
}
