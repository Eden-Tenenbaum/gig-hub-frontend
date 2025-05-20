import { DiamondIcon } from "./SvgHub"

export function RatingLevel({ level }) {

    return <span className={`gig-preview__rating-level rating-${level} fs14 flex`}>
        <span className='gig-preview__level-text'>
            {level === 3 ? 'Top Rated' : `Level ${level}`}
        </span>
        {[...Array(3)].map((_, i) => (
            <DiamondIcon key={i} fill={i < level ? '#222325' : '#e4e5e7'} />
        ))}
    </span>
}