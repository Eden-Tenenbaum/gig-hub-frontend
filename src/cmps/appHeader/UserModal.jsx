import { useNavigate } from "react-router"

export function UserModal({ user, onLogout, toggleUserMenu }) {
    const navigate = useNavigate()

    return (
        <>
        <ul className="user-modal">
            <li onClick={() => {
                navigate(`/user/${user._id}`)
                toggleUserMenu()
                }}>Profile</li>
            <li onClick={() => {
                navigate('/seller')
                toggleUserMenu()
                }}>Dashboard</li>
            <li onClick={() => onLogout()}>Logout</li>
        </ul>
        <div className="tip"></div>
        </>
    )
}