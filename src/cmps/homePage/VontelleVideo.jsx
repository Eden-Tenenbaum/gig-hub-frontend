import vontelleVideo from '../../../public/vontelle-vid.mp4'

export function VontelleVideo() {
    return (
        <section className='diverr-success'>
            <p>What success on Diverr looks like</p>
            <p>Vontélle Eyewear turns to Diverr freelancers to bring their vision to life.</p>
            <div className='vontelle-video'>
                <video controls autoPlay muted loop>
                    <source src={vontelleVideo} type="video/mp4" />
                </video>
            </div>
        </section>
    )
}