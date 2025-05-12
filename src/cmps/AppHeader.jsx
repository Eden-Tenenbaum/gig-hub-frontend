import { Link, NavLink } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/actions/user.actions'
import { useEffect, useState } from 'react'

export function AppHeader() { //get logged in status from home page
	const location = useLocation()
	const user = useSelector(storeState => storeState.userModule.user)
	const navigate = useNavigate()
	const [showSearchBar, SetShowSearchBar] = useState(false)
	const [loggedIn, setLoggedIn] = useState(true) // band aid function, 
	// should get logged in state from another cmp

	async function onLogout() {
		try {
			await logout()
			navigate('/')
			showSuccessMsg(`Bye now`)
		} catch (err) {
			showErrorMsg('Cannot logout')
		}
	}

	function toggleLoggedIn(status){ //another band-aid function until log in status is set up
		if(status === true){ 
			setLoggedIn(false)
			SetShowSearchBar(false)
			return
		}
		if(status === false){
			setLoggedIn(true)
			SetShowSearchBar(true)
			return
		}
	}

	return (
		<header className="app-header full">
			<nav>
				<NavLink to="/" className="logo">
					Diverr.
				</NavLink>
				{showSearchBar &&
					<div>
						<input type='text' placeholder='What service are you looking for today?' />
					</div>}
				<NavLink to="about">About</NavLink>
				<NavLink to="gig">Gigs</NavLink>
				<NavLink to="chat">Chat</NavLink>
				<NavLink to="review">Review</NavLink>

				{user?.isAdmin && <NavLink to="/admin">Admin</NavLink>}

				<div className='login-bandaid'>
					<button onClick={() => toggleLoggedIn(loggedIn)}>Join</button>
					<span className={`login-circle ${loggedIn ? 'active' : ''}`}><i className="fa-solid fa-circle"></i></span>
				</div>

			</nav>
		</header>
	)
}
