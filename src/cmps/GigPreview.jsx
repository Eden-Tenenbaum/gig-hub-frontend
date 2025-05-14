import { Link } from 'react-router-dom'

export function GigPreview({ gig }) {
    return <article className="gig-preview">
        <header>
            <Link className='gig-preview__title' to={`/gig/${gig._id}`}>{gig.title}</Link>
        </header>
        <img className="gig-preview__img" src={gig.imageUrl} />

        <p>Price: <span>{gig.price.toLocaleString()} $</span></p>
        {gig.owner && <p>Owner: <span>{gig.owner.fullname}</span></p>}
        <p className='gig-preview__desc'>{gig.description}</p>

    </article>
}