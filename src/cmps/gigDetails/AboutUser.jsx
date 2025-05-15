import { Stars } from '../../cmps/Stars'
import { MiniUser } from './MiniUser'

export function AboutUser({ gig }) {
    return <article className="about-user">
        <MiniUser gig={gig} scale={1.5} fs={16} showStars={true} />
        <section className="user-stats grid">
            <article className="from">
                loc
            </article>
            <article className="member-since">
                createdAt
            </article>
            <article className="response-time">
                n hours
            </article>
            <article className="last-delivery">
                about n hours
            </article>
            <article className="languages">
                English (tooltip- if native or basic)
            </article>
            
            <article className="user-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio impedit corrupti nam quia facilis fugiat corporis nesciunt ad veritatis nisi autem laudantium nobis, neque minus natus culpa exercitationem id nulla!
                ---pull from the user service once it's functional
            </article>
        </section>
    </article>
}