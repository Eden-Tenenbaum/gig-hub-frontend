export function Stars({ rating, showStars = false }) {

  return (
    <section className="stars-display">
      {showStars && (
        <span className="stars">
          {'★'.repeat(Math.round(rating) - 1)}
        </span>
      )}
      <span className="rating-number">
        ★ {rating.toFixed(1)}
      </span>
    </section>
  )
}