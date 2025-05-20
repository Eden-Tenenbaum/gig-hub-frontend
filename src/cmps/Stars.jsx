import { StarIcon } from './SvgHub'

export function Stars({ rating, showStars = false, reviewCount = { isReview: false, underline: false, link: false }, starProps = {} }) {

  const movesToReviews = () => {
    if (!reviewCount.link) return

    if (location.hash === '#reviews') history.replaceState(null, '', location.pathname + location.search);

    location.hash = '#reviews';
  }

  return (
    <section className="stars-display">
      {showStars && (
        <span className="stars">
          {[...Array(Math.round(rating))].map((_, idx) => <StarIcon key={idx} {...starProps} />)}
        </span>
      )}
      <span className="rating-num stars">
        {!showStars && <StarIcon {...starProps} />}
        {rating}
      </span>
      {!reviewCount.isReview &&
        <span className="review-count" onClick={movesToReviews}>
          {'('}<span className={reviewCount.underline && 'underline'}>19</span>{')'}
        </span>
      }
    </section>
  )
}