import { VontelleVideo } from '../cmps/homePage/VontelleVideo'
import { OverPromoVideo } from '../cmps/homePage/OverPromoVideo'
import { HomePageCategories } from '../cmps/homePage/HomePageCategories'
import { PopularServices } from '../cmps/homePage/PopularServices'
import { MidHomePageAd } from '../cmps/homePage/MidHomePageAd'
import { BottomHomePageAd } from '../cmps/homePage/BottomHomePageAd'



export function HomePage() {
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

