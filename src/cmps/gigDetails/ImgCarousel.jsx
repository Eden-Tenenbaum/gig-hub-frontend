export function ImgCarousel({ gig }) {
    return <article className="img-carousel grid place-center">
        <section className="img-container-carousel grid place-center">
            <img src={gig.imgUrl} alt="img" />
        </section>
        <section className="thumbnails">
            <ul className="thumbnails-list">
                <li className="grid place-center"><img src={gig.imgUrl} alt="img" /></li>
            </ul>
        </section>
    </article>
}