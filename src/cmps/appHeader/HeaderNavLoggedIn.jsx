import { useNavigate } from 'react-router'
import { useState } from 'react'
import { UserModal } from './UserModal'
import { HeaderHeartIcon, HeaderBellIcon, HeaderEnvelopeIcon } from '../SvgHub'
import { OrdersModal } from './OrdersModal'

export function HeaderNavLoggedIn({ user, onLogout, isSeller }) {
    const [isUserModal, setIsUserModal] = useState(false)
    const [isOrdersList, setIsOrdersList] = useState(false)

    function toggleUserMenu() {
        setIsUserModal(prev => !prev)
    }

    function toggleOrdersList() {
        setIsOrdersList(prev => !prev)
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
                    <div className='header-orders' onClick={() => toggleOrdersList()}>
                        Orders
                        {isOrdersList && <OrdersModal user={user} onClose={() => setIsOrdersList(false)}/>}
                        </div>
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