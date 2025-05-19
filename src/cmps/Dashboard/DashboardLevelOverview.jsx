import StarIcon from '../../../public/img/icons/StarIcon.svg'

export function DashboardLevelOverview({ user }) {
    return (
        <section className="dashboard-level-overview">
            <a>Level overview</a>
            <section className="dashboard-level-details">
                <div>
                    <p>My level</p>
                    <p>Level 2</p>  {/* demo data */}

                </div>
                <div>
                    <p>Success score</p>
                    <p>9</p>  {/* demo data */}
                </div>
                <div>
                    <p>Rating</p>
                    <p>
                                <img
                                    src={StarIcon}
                                    alt="star"
                                    className="gig-preview__rating-icon"
                                /> 4.9   
                    </p>  {/* demo data */}
                </div>
                <div>
                    <p>Response rate</p>
                    <p>100%</p>  {/* demo data */}
                </div>
            </section>
            <button>View progress</button> {/* remove? */}         
        </section>
    )
}