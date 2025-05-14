import WebsiteDevelopment from '../../public/img/website-development.webp'

export function PopularServices() {
    return (
        <section className="homepage-popular-services">
            <p>Popular services</p>
            <section>
                <div className="popular-service-card">
                    <a>
                        <p>Website Development</p>
                        <img src={WebsiteDevelopment} />
                    </a>
                </div>
                <div className="popular-service-card">
                    <a>
                        <p>Video Editing</p>
                        <img src={WebsiteDevelopment} />
                    </a>
                </div>
                <div className="popular-service-card">
                    <a>
                        <p>Software Development</p>
                        <img src={WebsiteDevelopment} />
                    </a>
                </div>
                <div className="popular-service-card">
                    <a>
                        <p>SEO</p>
                        <img src={WebsiteDevelopment} />
                    </a>
                </div>
                <div className="popular-service-card">
                    <a>
                        <p>Architecture & Interior Design</p>
                        <img src={WebsiteDevelopment} />
                    </a>
                </div>
                <div className="popular-service-card">
                    <a>
                        <p>Book Design</p>
                        <img src={WebsiteDevelopment} />
                    </a>
                </div>
            </section>
        </section>
    )
}