import MetaIcon from '../../../public/img/icons/over-promo-icons/meta.svg' 
import GoogleIcon from '../../../public/img/icons/over-promo-icons/google.svg' 
import NetflixIcon from '../../../public/img/icons/over-promo-icons/netflix.svg' 
import PGIcon from '../../../public/img/icons/over-promo-icons/p&g.svg' 
import PayPalIcon from '../../../public/img/icons/over-promo-icons/paypal.svg' 
import PayoneerIcon from '../../../public/img/icons/over-promo-icons/payoneer.svg' 

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
                            <span><img src={MetaIcon}/></span>
                            <span><img src={GoogleIcon}/></span>
                            <span><img src={NetflixIcon}/></span>
                            <span><img src={PGIcon}/></span>
                            <span><img src={PayPalIcon}/></span>
                            <span><img src={PayoneerIcon}/></span>
                        </div>
                    </section>
    )
}