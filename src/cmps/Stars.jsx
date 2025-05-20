import { StarIcon } from './SvgHub'

export function Stars({ rating, showStars = false, starProps = {} }) {
  const stars = Array(Math.round(rating)).fill()
  return (
    <section className="stars-display">
      {showStars && (
        <span className="stars">
          {stars.map((_, idx) => <StarIcon key={idx} {...starProps} />)}
        </span>
      )}
      <span className="rating-num stars">
        {!showStars && <StarIcon {...starProps} />} {rating}
      </span>
    </section>
  )
}