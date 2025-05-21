import { Link } from 'react-router-dom'
import { RatingLevel } from '../cmps/RatingLevel.jsx'
import StarIcon from '../../public/img/icons/StarIcon.svg'
import { useState } from 'react'
import { SlidesCarousel } from './SlidesCarousel.jsx'
// import { MiniUser } from './MiniUser'


export function GigPreview({ gig = {} }) {
    const [isHovering, setIsHovering] = useState(false)
    const slides = Array.isArray(gig.imgUrl) ? gig.imgUrl : []

    const avatarUrl = gig.owner?.imgUrl || '/fallback-avatar.png'
    const authorName = gig.owner?.fullname || 'Unknown'
    const authorLevel = gig.owner?.level || 1

    const previewText =
        typeof gig.description === 'string'
            ? gig.description
            : `${gig.title}`
    const price = gig.purchasePlan?.price || 0

    function onMouseEnter() {
        setIsHovering(true)
    }

    function onMouseLeave() {
        setIsHovering(false)
    }

    return <article className="gig-preview">
        <SlidesCarousel slides={slides} />

        <div className="gig-preview__author">
            <img
                className="gig-preview__author-avatar"
                src={avatarUrl}
                alt={authorName}
            />
            <span className="gig-preview__author-name">
                {authorName}
            </span>
            <RatingLevel level={authorLevel} />
        </div>

        <Link to={`/gig/${gig._id}`}
            className="gig-preview__desc" >
            {previewText}
        </Link>

        <div className="gig-preview__rating">
            <img
                src={StarIcon}
                alt="star"
                className="gig-preview__rating-icon"
            />
            <span className='gig-preview__rating-number'>
                {gig.rating ?? 'N/A'}
            </span>
        </div>

        <Link
            to={`/gig/${gig._id}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <p className='gig-preview__price-label'
            > From
                <span className='gig-preview__price'>
                    ${price.toLocaleString()}
                </span>
            </p>
        </Link>
    </article>
}
