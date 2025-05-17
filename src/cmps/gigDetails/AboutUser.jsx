import { Stars } from '../../cmps/Stars'
import { MiniUser } from './MiniUser'

export function AboutUser({ user }) {
    return <article className="about-user">
        <section className="user-stats grid">
            <article className="from grid">
                <span className="label">From</span><span className="value">loc</span>
            </article>
            <article className="member-since grid">
                <span className="label">Member since</span><span className="value">createdAt</span>
            </article>
            <article className="response-time grid">
                <span className="label">Avg. response time</span><span className="value">n hours</span>
            </article>
            <article className="last-delivery grid">
                <span className="label">Last delivery</span><span className="value">about n hours</span>
            </article>
            <article className="languages grid">
                <span className="label">Languages</span><span className="value">English (tooltip- if native or basic)</span>
            </article>
        </section>
        <article className="user-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio impedit corrupti nam quia facilis fugiat corporis nesciunt ad veritatis nisi autem laudantium nobis, neque minus natus culpa exercitationem id nulla!
            ---pull from the user service once it's functional
        </article>
    </article>
}