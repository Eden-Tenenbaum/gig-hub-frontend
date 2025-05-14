export function ImgCarousel({ gig }) {
    return <article className="img-carousel">
        <section className="img-container-carousel">
            <img src={gig.imageUrl} alt="img" />
        </section>
        <section className="thumbnails">
        </section>
    </article>
}