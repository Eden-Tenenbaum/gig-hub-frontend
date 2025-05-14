import { Stars } from '../../cmps/Stars'

export function MiniUser({ gig, scale = 1, showStars = false, fs = 18}) {
    return <article className="mini-user flex" style={{ '--scale': scale }}>
        <section className="img-container square-ratio">
            <img src={gig.owner.imgUrl} alt="img" />
        </section>
        <section>
            <p className={`fullname fs${fs}`}>{gig.owner.fullname}</p>
            <Stars rating={gig.rating} showStars={showStars} />
        </section>
    </article>
}