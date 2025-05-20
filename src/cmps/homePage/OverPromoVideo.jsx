import MetaIcon from '../../../public/img/icons/over-promo-icons/meta.svg'
import GoogleIcon from '../../../public/img/icons/over-promo-icons/google.svg'
import NetflixIcon from '../../../public/img/icons/over-promo-icons/netflix.svg'
import PGIcon from '../../../public/img/icons/over-promo-icons/p&g.svg'
import PayPalIcon from '../../../public/img/icons/over-promo-icons/paypal.svg'
import PayoneerIcon from '../../../public/img/icons/over-promo-icons/payoneer.svg'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { MagnifyingGlassIcon } from '../SvgHub'

export function OverPromoVideo() {
    const [input, setInput] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    function handleSearch(ev) {
        ev.preventDefault()

        if (input) {
            searchParams.set('title', input)
            searchParams.set('subCategory', input)
        } else {
            searchParams.delete('title')
            searchParams.delete('subCategory')
        }

        navigate(`/gig?${searchParams.toString()}`)
    }

    return (
        <section className='over-promo-video'>
            <div className='main-over-promo-video-content'>
                <div>
                    <p>Our freelancers</p>
                    <p>will take it from here</p>
                </div>
                <form onSubmit={handleSearch}>
                    <div className="searchbar-over-promo-video">
                        <input
                            type='text'
                            placeholder='Search for any service...'
                            value={input}
                            onChange={(ev) => setInput(ev.target.value)}
                        />
                        <button type='submit' className='promo-video-search-bar-btn'>
                            <MagnifyingGlassIcon />
                        </button>
                    </div>
                </form>
                <div className='over-video-filter-btns'>
                    <div><a>website development </a><span><i className="fa-solid fa-arrow-right"></i></span></div>
                    <div><a>architecture & interior design </a><span><i className="fa-solid fa-arrow-right"></i></span></div>
                    <div><a>UGC videos </a><span><i className="fa-solid fa-arrow-right"></i></span></div>
                    <div><a>video editing </a><span><i className="fa-solid fa-arrow-right"></i></span></div>
                </div>
            </div>
            <div className='trusted-by'>
                Trusted by:
                <span><img src={MetaIcon} /></span>
                <span><img src={GoogleIcon} /></span>
                <span><img src={NetflixIcon} /></span>
                <span><img src={PGIcon} /></span>
                <span><img src={PayPalIcon} /></span>
                <span><img src={PayoneerIcon} /></span>
            </div>
        </section>
    )
}