import { Stars } from './Stars'

export function MiniUser({ gig, scale = 1, showStars = false, fs = 18, includeUserMsg = false}) {
    return <article className="mini-user flex" style={{ '--scale': scale }}>
        <section className="img-container square-ratio">
            <img src={gig.owner.imgUrl} alt="img" />
        </section>
        <section>
            <p className={`fullname fs${fs} ${includeUserMsg && 'ium'}`}>{gig.owner.fullname}</p>
            {includeUserMsg && <p className="msg">this is a user msg</p>}
            <Stars rating={gig.rating} showStars={showStars} starProps={includeUserMsg && { viewBox: '0 0 16 15', width: '15', height: '15' }} />
        </section>
    </article>
}