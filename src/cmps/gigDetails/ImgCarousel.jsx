export function ImgCarousel({ gig }) {
    return <article className="img-carousel grid place-center">
        <section className="img-container-carousel grid place-center">
            <img src={gig.imgUrl[0].src} alt="img" />
        </section>
        <section className="thumbnails">
            <ul className="thumbnails-list flex">
                {gig.imgUrl.map(img => 
                    <li key={img} className="grid place-center"><img src={img.src} alt="img" /></li>
                )}
            </ul>
        </section>
    </article>
}