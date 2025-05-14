import { Stars } from '../../cmps/Stars'
import { MiniUser } from './MiniUser'

export function AboutUser({ gig }) {
    return <article className="about-user">
        <MiniUser gig={gig} scale={1.5} fs={16}/>
        <article className="user-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio impedit corrupti nam quia facilis fugiat corporis nesciunt ad veritatis nisi autem laudantium nobis, neque minus natus culpa exercitationem id nulla!
        </article>
    </article>
}