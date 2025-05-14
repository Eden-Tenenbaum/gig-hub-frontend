import { VontelleVideo } from '../cmps/VontelleVideo'
import { OverPromoVideo } from '../cmps/OverPromoVideo'
import { HomePageCategories } from '../cmps/HomePageCategories'
import { PopularServices } from '../cmps/PopularServices'
import { MidHomePageAd } from '../cmps/MidHomePageAd'
import { BottomHomePageAd } from '../cmps/BottomHomePageAd'



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

