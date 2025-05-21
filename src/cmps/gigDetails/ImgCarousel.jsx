import { SlidesCarousel } from "../SlidesCarousel";

export function ImgCarousel({ gig }) {
    return <article className="img-carousel grid place-center">
        <SlidesCarousel slides={gig.imgUrl} />
        <section className="thumbnails">
            <ul className="thumbnails-list flex">
                {gig.imgUrl.map(img =>
                    <li key={img} className="grid place-center"><img src={img.src} alt="img" /></li>
                )}
            </ul>
        </section>
    </article>
}