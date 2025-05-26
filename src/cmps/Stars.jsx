import { EmptyStarIcon, HalfStarIcon, StarIcon } from './SvgHub'

export function Stars({ rating, showStars = false, reviewCount = { isReview: false, underline: false, link: false }, starProps = {} }) {

  const movesToReviews = () => {
    if (!reviewCount.link) return

    if (location.hash === '#reviews') history.replaceState(null, '', location.pathname + location.search)

    location.hash = '#reviews'
  }

  const roundToHalf = Math.round(rating * 2) / 2
  const fullStars = Math.floor(roundToHalf)
  const hasHalf = roundToHalf % 1 !== 0
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0)

  return (
    <section className="stars-display flex">
      {showStars ? (
        <span className="stars">
          {[...Array(fullStars)].map((_, i) => <StarIcon key={`full-${i}`} {...starProps} />)}
          {hasHalf && <HalfStarIcon {...starProps} />}
          {[...Array(emptyStars)].map((_, i) => <EmptyStarIcon key={`empty-${i}`} {...starProps} />)}
          <span className="rating-num stars">{rating}</span>
        </span>
      ) : (
        <span className="rating-num stars">
          <StarIcon {...starProps} />
          {rating}
        </span>
      )}
      
      {!reviewCount.isReview && (
        <span className="review-count" onClick={movesToReviews}>
          {'('}<span className={reviewCount.underline ? 'underline' : ''}>1109</span>{')'}
        </span>
      )}
    </section>
  )
}