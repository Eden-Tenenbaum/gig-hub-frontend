import StarIcon from '../../public/img/icons/StarIcon.svg'

export function Stars({ rating, showStars = false }) {
  const stars = Array(Math.round(rating)).fill()
  return (
    <section className="stars-display">
      {showStars && (
        <span className="stars">
          {stars.map(() => (
            <img src={StarIcon} alt="" />
          ))}
        </span>
      )}
      <span className="rating-num stars">
        {!showStars && <img src={StarIcon} alt="" />} {rating}
      </span>
    </section>
  )
}