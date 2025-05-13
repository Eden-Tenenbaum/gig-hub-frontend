import { Stars } from '../../cmps/Stars'

export function AboutUser({ gig }) {
    return <article className="about-user">
        <article className="mini-user flex" style={{ '--scale': 1.5 }}>
            <section className="img-container square-ratio">
                <img src={gig.owner.imgUrl} alt="img" />
            </section>
            <section>
                <p className="fullname">{gig.owner.fullname}</p>
                <Stars rating={gig.rating} />
            </section>
        </article>
        <article className="user-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio impedit corrupti nam quia facilis fugiat corporis nesciunt ad veritatis nisi autem laudantium nobis, neque minus natus culpa exercitationem id nulla!
        </article>
    </article>
}