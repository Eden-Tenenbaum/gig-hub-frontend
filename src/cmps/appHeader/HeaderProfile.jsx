import heartIcon from '../../../public/img/heart-icon.png'
import envelopeIcon from '../../../public/img/envelope-icon.png'
import bellIcon from '../../../public/img/bell-icon.png'
import { UserModal } from './UserModal'

export function HeaderProfile({ user, isUserModal }) {
    return (
        <section className='header-profile-wrapper'>
            <div>Dashboard</div>
            <div>
                <ul>
                    <li>
                        <button className='header-btn'>
                            <img src={bellIcon} />
                        </button>
                    </li>
                    <li>
                        <button className='header-btn'>
                            <img src={envelopeIcon} />
                        </button>
                    </li>
                    <li>
                        <button className='header-btn'>
                            <img src={heartIcon} />
                        </button>
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
            </div>
        </section>
    )
}