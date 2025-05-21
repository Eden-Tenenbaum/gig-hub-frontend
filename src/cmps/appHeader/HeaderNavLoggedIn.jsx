// import heartIcon from '../../../public/img/heart-icon.png'
// import envelopeIcon from '../../../public/img/envelope-icon.png'
// import bellIcon from '../../../public/img/bell-icon.png'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { UserModal } from './UserModal'
import { HeaderHeartIcon, HeaderBellIcon, HeaderEnvelopeIcon } from '../SvgHub'

export function HeaderNavLoggedIn({ user, onLogout, isSeller }) {
    const [isUserModal, setIsUserModal] = useState(false)

    function toggleUserMenu() {
        setIsUserModal(prev => !prev)
    }

    return (
        <nav className='header-nav-logged-in'>
            <ul>
                <li>
                    {!isSeller && <button className='upgrade-to-pro'>Upgrade to Pro</button>}
                </li>
                <li>
                    <button className='header-btn'>
                        <HeaderBellIcon />
                    </button>
                </li>
                <li>
                    <button className='header-btn'>
                        <HeaderEnvelopeIcon />
                    </button>
                </li>
                <li>
                    <button className='header-btn'>
                        <HeaderHeartIcon />
                    </button>
                </li>
                {!isSeller && <li>
                    <div className='header-orders' onClick={() => toggleOrdersModal()}>Orders</div>
                </li>}
                {!isSeller && <li>
                    <div className='header-try-diverr-go'>Try Diverr Go</div>
                </li>}
                <li className={`${isSeller ? 'nopad' : ''}`}>
                    <div className='user-btn'>
                        {user && (
                            <span
                                className='header-user-options-btn'
                                onClick={() => {
                                    toggleUserMenu()
                                }}>
                                <img src={user.imgUrl} alt={user.fullname.slice(0, 1)}></img>
                            </span>
                        )}
                        {isUserModal && <UserModal onLogout={onLogout} user={user} toggleUserMenu={toggleUserMenu} />}
                    </div>
                </li>
            </ul>
        </nav>
    )
}