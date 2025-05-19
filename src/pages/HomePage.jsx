import { VontelleVideo } from '../cmps/homePage/VontelleVideo'
import { OverPromoVideo } from '../cmps/homePage/OverPromoVideo'
import { HomePageCategories } from '../cmps/homePage/HomePageCategories'
import { PopularServices } from '../cmps/homePage/PopularServices'
import { MidHomePageAd } from '../cmps/homePage/MidHomePageAd'
import { BottomHomePageAd } from '../cmps/homePage/BottomHomePageAd'
import { useEffect, useRef } from 'react'



export function HomePage() {
    
    const isSearchbarVisible = useRef(null)
    const isCategoriesVisible = useRef(null)
    
    useEffect(() => {
        if (window.location.pathname !== '/') return
        const searchbar = document.querySelector('.searchbar-over-promo-video')
        const category = document.querySelector('.homepage-category')

        if (!searchbar || !category) return

        const observer = new IntersectionObserver(onObserved, {
            rootMargin: "-80.8px 0px 0px",
        })

        function onObserved(entries) {
            entries.forEach((entry) => {
                const isVisible = entry.isIntersecting

                if (entry.target === searchbar && isSearchbarVisible.current !== isVisible) {
                    isSearchbarVisible.current = isVisible
                    console.log(isSearchbarVisible.current)
                    window.dispatchEvent(
                        new CustomEvent('homeSearchbarChanged', {
                            detail: { isVisible }
                        })
                    )
                }

                if (entry.target === category && isCategoriesVisible.current !== isVisible) {
                    isCategoriesVisible.current = isVisible
                    console.log(isCategoriesVisible.current)
                    window.dispatchEvent(
                        new CustomEvent('homeCategoryChanged', {
                            detail: { isVisible }
                        })
                    )
                }
            })
        }

        observer.observe(searchbar)
        observer.observe(category)

        return () => {
            observer.unobserve(searchbar)
            observer.unobserve(category)
        }
    }, [])

    return (
        <section className='home-page'>
            <OverPromoVideo />
            <HomePageCategories />
            <PopularServices />
            <VontelleVideo />
            <MidHomePageAd />
            <BottomHomePageAd />
        </section >
    )
}

