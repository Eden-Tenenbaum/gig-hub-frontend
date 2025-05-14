export function OverPromoVideo() {
    return (
        <section className='over-promo-video'>
                        <div className='main-over-promo-video-content'>
                            <div>
                                <p>Our freelancers</p>
                                <p>will take it from here</p>
                            </div>
                            <div className="searchbar-over-promo-video">
                                <input
                                    type='text'
                                    placeholder='Search for any service...'
        
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
    )
}