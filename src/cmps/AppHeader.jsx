import { Link, NavLink } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/actions/user.actions'
import { useEffect, useState } from 'react'
import { Categories } from './Categories'
import { HeaderSearchbar } from './HeaderSearchbar'
import { HeaderNavLoggedIn } from './HeaderNavLoggedIn'
import { HeaderNavLoggedOut } from './HeaderNavLoggedOut'

export function AppHeader({ isSticky }) { //get logged in status from home page
	const location = useLocation()
	const user = useSelector(storeState => storeState.userModule.user)
	const navigate = useNavigate()
	const [showSearchBar, SetShowSearchBar] = useState(false)
	const [isLoggedIn, setIsLoggedIn] = useState(false) // band aid function, 
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
			setIsLoggedIn(false)
			SetShowSearchBar(false)
			return
		}
		if (status === false) {
			setIsLoggedIn(true)
			SetShowSearchBar(true)
			return
		}
	}

	return (
		<>
			<div className='header-row-wrapper full '>
				<div className="app-header ">
					<NavLink to="/" className="logo">
						Diverr<span>.</span>
					</NavLink>

					<HeaderSearchbar showSearchBar={showSearchBar} />
					{isLoggedIn ?
						<HeaderNavLoggedIn
							isLoggedIn={isLoggedIn}
							toggleLoggedIn={toggleLoggedIn}
						/>
						:
						<HeaderNavLoggedOut
							isLoggedIn={isLoggedIn}
							toggleLoggedIn={toggleLoggedIn}
						/>}
				</div>
			</div>
			{/* <div className='categories-row-wrapper'>
				<Categories />
			</div> */}
		</>
	)
}
