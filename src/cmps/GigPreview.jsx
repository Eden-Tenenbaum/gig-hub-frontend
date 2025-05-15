import { Link } from 'react-router-dom'
import StarIcon from '../../public/img/icons/StarIcon.svg'

export function GigPreview({ gig }) {
    return <article className="gig-preview">
        <Link to={`/gig/${gig._id}`}><img className="gig-preview__img" src={gig.imageUrl} /></Link>
        {gig.owner && <p className='gig-preview__name'>Ad by
            <span className='gig-preview__owner'>{gig.owner.fullname}</span>
        </p>}
        <Link className='gig-preview__desc' to={`/gig/${gig._id}`}>
            {gig.description}
        </Link>
        <div className='gig-preview__rating__container'>
            <img className='gig-preview__icon' src={StarIcon} alt="" />
            <div className='gig-preview__rating__number' >{gig.rating}</div>
        </div>
        <Link to={`/gig/${gig._id}`}>
            <p className='gig-preview__price__label'>From:
                <span className='gig-preview__price'>${gig.price.toLocaleString()}</span>
            </p>
        </Link>
    </article>
}
