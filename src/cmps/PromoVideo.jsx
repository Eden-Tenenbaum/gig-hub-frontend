import promoVideo from '../../public/fiverr-vid.mp4'

export function PromoVideo() {
    return (
        <section className='promo-video'>
            <video autoPlay muted loop>
                <source src={promoVideo} type="video/mp4" />
            </video>
            <section className='over-promo-video'>
                <div className='main-over-promo-video-content'>
                    <p>Our freelancers will take it from here</p>
                    <input
                        type='text'
                        placeholder='Search for any service'
                    />
                    <button>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <div className='over-video-filter-btns'>
                        <button>website development <span><i className="fa-solid fa-arrow-right"></i></span></button>
                        <button>architecture & interior design <span><i className="fa-solid fa-arrow-right"></i></span></button>
                        <button>UGC videos <span><i className="fa-solid fa-arrow-right"></i></span></button>
                        <button>video editing <span><i className="fa-solid fa-arrow-right"></i></span></button>
                    </div>
                </div>
            </section>
        </section>
    )
}