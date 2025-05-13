import { Stars } from '../../cmps/Stars'

export function MiniUser({ gig }) {
    return <article className="mini-user flex">
        <section className="img-container square-ratio">
            <img src={gig.owner.imgUrl} alt="img" />
        </section>
        <section>
            <p className="fullname">{gig.owner.fullname}</p>
            <Stars rating={gig.rating} showStars={true} />
        </section>
    </article>
}