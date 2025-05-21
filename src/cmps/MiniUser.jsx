import { RatingLevel } from './RatingLevel'
import { Stars } from './Stars'

export function MiniUser({ gig, scale = 1, showStars = false, fs = 18, includeUserMsg = false, reviewCount }) {
    return <article className="mini-user flex" style={{ '--scale': scale }}>
        <section className="img-container square-ratio">
            <img src={gig.owner.imgUrl} alt="img" />
        </section>
        <section>
            <p className={`fullname flex fs${fs} ${includeUserMsg && 'ium'}`}>
                {gig.owner.fullname}
                {!includeUserMsg && <RatingLevel className="fs14" level={gig.owner.level} />}
            </p>
            {includeUserMsg && <p className="msg">this is a user msg</p>}
            <span className="info-svg flex">
                <Stars rating={gig.rating} showStars={showStars} reviewCount={reviewCount} starProps={includeUserMsg && { viewBox: '0 0 16 15', width: '15', height: '15' }} />
                {includeUserMsg &&
                    <>
                        <span className="line"></span>
                        <RatingLevel level={gig.owner.level} />
                    </>
                }
            </span>
        </section>
    </article>
}