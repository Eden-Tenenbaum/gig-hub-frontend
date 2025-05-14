import heartIcon from '../../public/img/heart-icon.png'
import envelopeIcon from '../../public/img/envelope-icon.png'
import bellIcon from '../../public/img/bell-icon.png'
import { useNavigate } from 'react-router'

export function HeaderNavLoggedIn({ isLoggedIn, toggleLoggedIn }) {
    const navigate = useNavigate()

    return (
        <nav className='header-nav-logged-in'>
            <ul>
                <li>
                    <button className='upgrade-to-pro'>Upgrade to Pro</button>
                </li>
                <li>
                    <button className='header-btn'>
                        {/* <i className="far fa-bell"></i>
									<span></span> */}
                        <img src={bellIcon} />
                    </button>
                </li>
                <li>
                    <button className='header-btn'>
                        {/* <i className="far fa-envelope"></i> */}
                        <img src={envelopeIcon} />
                    </button>
                </li>
                <li>
                    <button className='header-btn'>
                        {/* <i className="far fa-heart"></i> */}
                        <img src={heartIcon} />
                    </button>
                </li>
                <li>
                    <div className='header-orders'>Orders</div>
                </li>
                <li>
                    <div className='header-try-diverr-go'>Try Diverr Go</div>
                </li>
                <li>
                    <div className='login-bandaid'>
                        <button
                            className='header-user-options-btn'
                            onClick={() => {
                                toggleLoggedIn(isLoggedIn)
                                navigate('/')
                            }}>
                            U
                        </button>
                    </div>
                </li>
            </ul>
        </nav>
    )
}