import React from 'react'
import DiamondIcon from '../../../public/img/icons/DiamondIcon.svg'
import DiamondIcon2 from '../../../public/img/icons/DiamondIcon2.svg'

const iconsByLevel = {
    1: [DiamondIcon, DiamondIcon2, DiamondIcon2],
    2: [DiamondIcon, DiamondIcon, DiamondIcon2],
    3: [DiamondIcon, DiamondIcon, DiamondIcon]
}
export function RatingLevel({ level }) {
    const ratingClass =
        level === 3 ? 'rating-high'
            : level === 2 ? 'rating-mid'
                : 'rating-low'

    const text = level === 3 ? 'Top Rated' : `Level ${level}`
    const icons = iconsByLevel[level] || iconsByLevel[1]


    return <span className={`gig-preview__rating-level ${ratingClass}`}>
        <span className='gig-preview__level-text'>{text}</span>
        {icons.map((src, i) => (
            <img
                key={i}
                src={src}
                alt=''
                className='gig-preview__level-icon'
            />
        ))}
    </span>
}