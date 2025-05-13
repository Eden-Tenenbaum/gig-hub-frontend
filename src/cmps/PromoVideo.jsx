import promoVideo from '../../public/fiverr-vid.mp4'

export function PromoVideo() {
    return (
        <section className='promo-video'>
            <video autoPlay muted loop>
                <source src={promoVideo} type="video/mp4" />
            </video>
        </section>
    )
}