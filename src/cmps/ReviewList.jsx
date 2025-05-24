import { userService } from '../services/user'

import { ReviewPreview } from './ReviewPreview.jsx'

export function ReviewList({ reviews }) {

    return (
        <ul className="review-list grid">
            {reviews.map((review, i) =>
            <>
            
                <li key={i}>
                    <ReviewPreview review={review} />
                </li>
                {/* <li key={i+1}>
                    <ReviewPreview review={review} />
                </li> */}
            </>
            )}
        </ul>
    )
}