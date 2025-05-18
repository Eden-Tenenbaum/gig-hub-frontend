export function HeaderNavLoggedOut({ toggleLoginModal }) {
    return (
        <nav className='header-nav-logged-out'>
            <ul>
                <li>
                    <div className='header-become-a-seller'>Become a Seller</div>
                </li>
                <li>
                    <div className='header-try-diverr-go'>Try Diverr Go</div>
                </li>
                <li>
                    <div className='header-sign-in' onClick={() => toggleLoginModal()}>Sign in</div>
                </li>
                <li>
                    <div className='login-bandaid'>
                        <button className='header-join-btn'>Join</button>
                    </div>
                </li>
            </ul>
        </nav >
    )
}