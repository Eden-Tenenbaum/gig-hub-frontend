import { Stars } from "../Stars";

export function ReviewStatistics({ reviews }) {
    
    
    return <article className="review-statistics grid flow-column">
        <section className="numbers-info grid">
            <section className="reviews-num">141 reviews for this Gig</section>
            <section className="graph-container grid">
                <span className="stars-num active">5 Stars</span><span className="graph"></span><span className="review-count">(133)</span>
                <span className="stars-num active">4 Stars</span><span className="graph"></span><span className="review-count">(8)</span>
                <span className="stars-num">3 Stars</span><span className="graph"></span><span className="review-count">(0)</span>
                <span className="stars-num">2 Stars</span><span className="graph"></span><span className="review-count">(0)</span>
                <span className="stars-num">1 Star </span><span className="graph"></span><span className="review-count">(0)</span>
            </section>
        </section>
        <section className="stars-info grid">
            <Stars rating={4.9} showStars={true} reviewCount={{isReview: true}} />
            <section className="breakdown grid">
                <h4>Rating Breakdown</h4>
                <section>Seller communication level<Stars rating={4.9} reviewCount={{isReview: true}}/></section>
                <section>Quality of delivery<Stars rating={4.9} reviewCount={{isReview: true}}/></section>
                <section>Value of delivery<Stars rating={4.9} reviewCount={{isReview: true}}/></section>
            </section>
        </section>
    </article>
}