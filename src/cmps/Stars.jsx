import { StarIcon } from '../services/svg.service'

export function Stars({ rating, showStars = false }) {
  const stars = Array(Math.round(rating)).fill()
  return (
    <section className="stars-display">
      {showStars && (
        <span className="stars">
          {stars.map((_, idx) => <StarIcon key={idx} />)}
        </span>
      )}
      <span className="rating-num stars">
        {!showStars && <StarIcon />} {rating}
      </span>
    </section>
  )
}