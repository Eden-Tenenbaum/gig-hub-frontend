import Categories from '../../public/joinAd/categories.svg'
import Matching from '../../public/joinAd/matching.svg'
import Quickly from '../../public/joinAd/quickly.svg'
import Happy from '../../public/joinAd/happy.svg'

export function MidHomePageAd() {
    return (
        <section className='mid-homepage-join-ad'>
            <h1>Make it all happen with freelancers</h1>
            <ul>
                <li>
                    <img src={Categories} />
                    <p>Access a pool of top talent across 700 categories</p>
                </li>
                <li>
                    <img src={Matching} />
                    <p>Enjoy a simple, easy-to-use matching experience</p>
                </li>
                <li>
                    <img src={Quickly} />
                    <p>Get quality work done quickly and within budget</p>
                </li>
                <li>
                    <img src={Happy} />
                    <p>Only pay when you're happy</p>
                </li>
            </ul>
            <div>
                <button>Join now</button>
            </div>
        </section>
    )
}