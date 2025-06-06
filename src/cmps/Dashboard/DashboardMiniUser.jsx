export function DashboardMiniUser({ user }) {
    const displayUsername = user.fullname.slice(0, user.fullname.indexOf(' ')) + user._id

    return (
        <div className="dashboard-mini-user">
            {/* <div className='user-btn'> */}
                {user && (
                    <span
                        className='header-user-options-btn'>
                        <img src={user.imgUrl} alt={user.fullname}></img>
                    </span>
                )}
            {/* </div> */}
            <a>
                <p>{user.fullname}</p>
                <p>@{displayUsername}</p>
            </a>
            <button>View profile</button>
        </div>
    )
}