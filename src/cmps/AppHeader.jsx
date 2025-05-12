import { Link, NavLink } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/actions/user.actions'
import { useEffect, useState } from 'react'
import { Categories } from './Categories'

export function AppHeader() { //get logged in status from home page
	const location = useLocation()
	const user = useSelector(storeState => storeState.userModule.user)
	const navigate = useNavigate()
	const [showSearchBar, SetShowSearchBar] = useState(true)
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

	function toggleLoggedIn(status) { //another band-aid function until log in status is set up
		if (status === true) {
			setLoggedIn(false)
			SetShowSearchBar(false)
			return
		}
		if (status === false) {
			setLoggedIn(true)
			SetShowSearchBar(true)
			return
		}
	}

	return (
		<>
			<div className='header-row-wrapper'>
				<div className="app-header full">
					<NavLink to="/" className="logo">
						Diverr<span>.</span>
					</NavLink>

					<div className='header-search-bar'>
						{showSearchBar &&
							<>
								<input
									type='text'
									placeholder='What service are you looking for today?'
								/>
								<button>
									<i className="fa-solid fa-magnifying-glass"></i>
								</button>
							</>}
					</div>
					<ul>
						<NavLink to="about">Upgrade to Pro</NavLink>
						<div className='header-btns'>
							<button><i className="far fa-bell"></i></button>
							<button><i className="far fa-envelope"></i></button>
							<button><i className="far fa-heart"></i></button>
						</div>
						<NavLink to="chat">Chat</NavLink>
						<NavLink to="review">Review</NavLink>

						<div className='login-bandaid'>
							<button onClick={() => toggleLoggedIn(loggedIn)}>Join</button>
							<span className={`login-circle ${loggedIn ? 'active' : ''}`}><i className="fa-solid fa-circle"></i></span>
						</div>
					</ul>
				</div>
			</div>
			<div className='categories-row-wrapper'>
				<Categories />
			</div>
		</>
	)
}
