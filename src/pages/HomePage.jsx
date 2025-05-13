import WebsiteDevelopment from '../../public/img/website-development.webp'

const fiverrMainCategories = [
    { name: "Programming & Tech", id: "programming-tech" },
    { name: "Graphics & Design", id: "graphics-design" },
    { name: "Digital Marketing", id: "digital-marketing" },
    { name: "Writing & Translation", id: "writing-translation" },
    { name: "Video & Animation", id: "video-animation" },
    { name: "AI Services", id: "ai-services" },
    { name: "Music & Audio", id: "music-audio" },
    { name: "Business", id: "business" },
    { name: "Consulting", id: "consulting" },
    // { name: "Finance", id: "finance" },
    // { name: "Personal Growth", id: "personal-growth" },
    // { name: "Data", id: "data" },
    // { name: "Photography", id: "photography" }
];

export function HomePage() {
    return (
        <section>
            <section className='over-promo-video'>
                <div className='main-over-promo-video-content'>
                    <div>
                        <p>Our freelancers</p>
                        <p>will take it from here</p>
                    </div>
                    <div className="searchbar-over-promo-video">
                        <input
                            type='text'
                            placeholder='Search for any service'

                        />
                        <button className='promo-video-search-bar-btn'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>

                    <div className='over-video-filter-btns'>
                        <div><a>website development </a><span><i className="fa-solid fa-arrow-right"></i></span></div>
                        <div><a>architecture & interior design </a><span><i className="fa-solid fa-arrow-right"></i></span></div>
                        <div><a>UGC videos </a><span><i className="fa-solid fa-arrow-right"></i></span></div>
                        <div><a>video editing </a><span><i className="fa-solid fa-arrow-right"></i></span></div>
                    </div>
                </div>
                <div className='trusted-by'>
                    Trusted by:
                    <span>Meta icon</span>
                    <span>Google icon</span>
                    <span>Netflix icon</span>
                    <span>Proctor & Gamble icon</span>
                    <span>Paypal icon</span>
                    <span>Payoneer icon</span>
                </div>
            </section>
            <section className="homepage-categories">
                {fiverrMainCategories.map(category =>
                    <div key={category.id}>
                        <a>{category.name}</a>
                    </div>
                )}
            </section>
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
            <section className='mid-homepage-join-ad'>
                <p>Make it all happen with freelancers</p>
                <ul>
                    <li>
                        <a>icon</a>
                        <p>Access a pool of top talent across 700 categories</p>
                    </li>
                    <li>
                        <a>icon</a>
                        <p>Enjoy a simple, easy-to-use matching experience</p>
                    </li>
                    <li>
                        <a>icon</a>
                        <p>Get quality work done quickly and within budget</p>
                    </li>
                    <li>
                        <a>icon</a>
                        <p>Only pay when you're happy</p>
                    </li>
                </ul>
            </section>
        </section >
    )
}

