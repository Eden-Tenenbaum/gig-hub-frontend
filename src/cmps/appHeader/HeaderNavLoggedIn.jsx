import heartIcon from '../../../public/img/heart-icon.png'
import envelopeIcon from '../../../public/img/envelope-icon.png'
import bellIcon from '../../../public/img/bell-icon.png'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { UserModal } from './UserModal'

export function HeaderNavLoggedIn({ user, onLogout }) {
    const [isUserModal, setIsUserModal] = useState(false)

    function toggleUserMenu() {
        setIsUserModal(prev => !prev)
    }

    return (
        <nav className='header-nav-logged-in'>
            <ul>
                <li>
                    <button className='upgrade-to-pro'>Upgrade to Pro</button>
                </li>
                <li>
                    <button className='header-btn' onClick={() => toggleUserMenu()}>
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
                    <div className='user-btn'>
                        {user && (
                            <span
                                className='header-user-options-btn'
                                onClick={() => {
                                    onLogout()
                                }}>
                                <img src={user.imgUrl} alt={user.fullname.slice(0, 1)}></img>
                            </span>
                        )}
                        {isUserModal && <UserModal />}
                    </div>
                </li>
            </ul>
        </nav>
    )
}