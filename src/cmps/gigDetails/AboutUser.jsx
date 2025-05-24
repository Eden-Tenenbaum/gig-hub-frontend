
export function AboutUser({ user }) {
    return <article className="about-user">
        <section className="user-stats grid">
            <article className="from grid">
                <span className="label">From</span>
                <span className="value">Israel</span>
            </article>
            <article className="member-since grid">
                <span className="label">Member since</span>
                <span className="value">2024</span>
            </article>
            <article className="response-time grid">
                <span className="label">Avg. response time</span>
                <span className="value">6 hours</span>
            </article>
            <article className="last-delivery grid">
                <span className="label">Last delivery</span>
                <span className="value">about 2 hours</span>
            </article>
            <article className="languages grid">
                <span className="label">Languages</span>
                <span className="value">English, Hebrew</span>
                <span className="tooltip grid fs14">
                    <p>Seller speaks:</p>
                    <ul className="lang-list capitalize">
                        <li>english (fluent)</li>
                        <li>hebrew (native)</li>
                    </ul>
                </span>
            </article>
        </section>
        <article className="user-description">
            Logo designer, more specialized in company logos design field, 4 years of experience working with people around social media.
        </article>
    </article>
}