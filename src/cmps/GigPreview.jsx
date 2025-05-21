import { Link } from 'react-router-dom'
import { Stars } from './Stars.jsx'
// import { MiniUser } from './MiniUser'
import { useState } from 'react'
import { RatingLevel } from '../cmps/RatingLevel.jsx'
import { SlidesCarousel } from './SlidesCarousel.jsx'


export function GigPreview({ gig }) {
    const [isHovering, setIsHovering] = useState(false)

    function onMouseEnter() {
        setIsHovering(true)
    }

    function onMouseLeave() {
        setIsHovering(false)
    }

    return <article className="gig-preview">
        {/* <Link to={`/gig/${gig._id}`}
            onMouseEnter={() => onMouseEnter()}
            onMouseLeave={() => onMouseLeave()}
        > */}
        {/* <img
                className="gig-preview__img"
                src={gig.imgUrl} */}
        <SlidesCarousel slides={gig.imgUrl} />
        {/* </Link> */}

        {/* <Link className={`gig-preview__desc ${isHovering ? 'hovered' : ''}`} to={`/gig/${gig._id}`}>
            <img src={gig.imageUrl} />
        </Link>
         */}

        <div className="gig-preview__author">
            <img
                className="gig-preview__author-avatar"
                src={gig.owner.imgUrl}
                alt={gig.owner.fullname}
            />
            <span className="gig-preview__author-name">
                {gig.owner.fullname}
            </span>
            <RatingLevel level={gig.owner.level} />
        </div>

        <Link
            className={`gig-preview__desc ${isHovering ? 'hovered' : ''}`}
            to={`/gig/${gig._id}`}
            onMouseEnter={() => onMouseEnter()}
            onMouseLeave={() => onMouseLeave()}
        >
            {gig.description}
        </Link>

        <Stars rating={gig.rating} starProps={{ viewBox: '0 2 16 16', width: '15', height: '20' }} />
        
        <Link
            to={`/gig/${gig._id}`}
            onMouseEnter={() => onMouseEnter()}
            onMouseLeave={() => onMouseLeave()}
        >
            <p className='gig-preview__price-label'
            > From
                <span className='gig-preview__price'>
                    ${gig.purchasePlan.price.toLocaleString()}</span>
            </p>
        </Link>
    </article>
}
