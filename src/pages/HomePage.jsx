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
            <div className="homepage-categories">
                {fiverrMainCategories.map(category =>
                    <div key={category.id}>
                        <a>{category.name}</a>
                    </div>
                )}
            </div>
            <div className="homepage-popular-services">
                <p>Popular services</p>
                <div className="popular-service-card">
                    <a>
                        <p>Website Development</p>
                        <img src={WebsiteDevelopment}/>
                    </a>
                </div>
            </div>
        </section >
    )
}

