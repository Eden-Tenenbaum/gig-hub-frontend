import Flag from "react-world-flags"
import countries from "world-countries"
import { Stars } from "./Stars"

export function ReviewPreview({ review }) {
    const { reviewer, rating, comment } = review

    return <article className="review-preview grid"> 
        <section className="reviewer flex">
            <section className="img-container square-ratio circle">
                <img src={reviewer.imgUrl} alt="img" />
            </section>
            <section className="user-container grid">
                <section className="fullname">{reviewer.fullname}</section>
                <section className="country grid flow-column fs12">
                    <Flag code={countries.find(c => c.name.common === reviewer.loc).cca2} width={16} />
                    <span className="name">{reviewer.loc}</span>
                </section>
            </section>
        </section>
        <section className="rating-info grid flow-column align-center">
            <Stars rating={rating} showStars={true} reviewCount={{ isReview: true }} starProps={{ viewBox: '0 0 16 15', width: '15', height: '15' }} />
            <span className="separator circle"></span>
            <span className="time-ago fs12">19 hours ago</span>
        </section>
        <section className="review-txt">{comment}</section>
        <section className="completed-gig-info flex">
            <section className="price-range grid">
                <span className="fs14">Up to ₪200</span>
                <span className="fs12">Price</span>
            </section>
            <section className="line"></section>
            <section className="price-range grid">
                <span className="fs14">4 days</span>
                <span className="fs12">Duration</span>
            </section>
        </section>
    </article>
}