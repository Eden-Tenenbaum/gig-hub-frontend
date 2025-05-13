import { StarIcon } from '../assets/svgs/StarIcon'

export function Stars({ rating, showStars = false }) {
  const stars = Array(Math.round(rating) - 1).fill()
  return (
    <section className="stars-display">
      {showStars && (
        <span className="stars">
          {stars.map((_, idx) => (
            <StarIcon key={idx} />
          ))}
        </span>
      )}
      <span className="rating-number">
        <StarIcon /> {rating.toFixed(1)}
      </span>
    </section>
  )
}