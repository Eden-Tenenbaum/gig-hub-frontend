import { Link, NavLink } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/actions/user.actions'
import { useEffect, useState } from 'react'
import { Categories } from './appHeader/Categories'
import { HeaderSearchbar } from './appHeader/HeaderSearchbar'
import { HeaderNavLoggedIn } from './appHeader/HeaderNavLoggedIn'
import { HeaderNavLoggedOut } from './appHeader/HeaderNavLoggedOut'
import { AlternateHeader } from './appHeader/AlternateHeader'
import { userService } from '../services/user/user.service.local'
import { Login } from './Login'
import { Logo } from './SvgHub'

export function AppHeader() {
	const location = useLocation()
	const user = useSelector(storeState => storeState.userModule.user)
	const navigate = useNavigate()
	const [showSearchBar, SetShowSearchBar] = useState(true)
	const [showCategories, SetShowCategories] = useState(true)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [isLoggingIn, setIsLoggingIn] = useState(false)
	const isPurchasing = location.pathname.includes('/purchase')
	const isProfile = location.pathname.includes('/user')
	const isSeller = location.pathname.includes('/seller')

	useEffect(() => {
		function handleSearchbarChange(event) {
			SetShowSearchBar(!event.detail.isVisible)
		}

		function handleCategoryChange(event) {
			SetShowCategories(!event.detail.isVisible)
		}

		window.addEventListener('homeSearchbarChanged', handleSearchbarChange)
		window.addEventListener('homeCategoryChanged', handleCategoryChange)

		return () => {
			window.removeEventListener('homeSearchbarChanged', handleSearchbarChange)
			window.removeEventListener('homeCategoryChanged', handleCategoryChange)
		}
	}, [])

	useEffect(() => { //prevent scrolling while in login modal
		if (isLoggingIn) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}

		return () => {
			document.body.style.overflow = ''
		}
	}, [isLoggingIn])

	useEffect(() => {
		if (location.pathname === '/') return
		SetShowSearchBar(!isPurchasing && !isSeller)
		SetShowCategories(!isPurchasing && !isSeller)
	}, [location.pathname])

	function toggleLoginModal() {
		setIsLoggingIn(prev => !prev)
	}

	async function onLogout() {
		try {
			await logout()
			setIsLoggedIn(false)
			navigate('/')
			showSuccessMsg(`Bye now`)
		} catch (err) {
			showErrorMsg('Cannot logout')
		}

	}

	return (
		<>
			<div className='header-row-wrapper full '>
				<div className="app-header ">
						<NavLink to="/" className="logo">
							<Logo />
						</NavLink>

					<HeaderSearchbar showSearchBar={showSearchBar} />

					{(isPurchasing) ?
						<AlternateHeader
							isPurchasing={isPurchasing}
							isProfile={isProfile}
							user={user}
						/>
						:
						<>
							{isLoggedIn ?
								<HeaderNavLoggedIn
									setIsLoggedIn={setIsLoggedIn}
									user={user}
									onLogout={onLogout}
									isSeller={isSeller}
								/>
								:
								<HeaderNavLoggedOut
									toggleLoginModal={toggleLoginModal}
								/>}
						</>
					}
				</div>
			</div>
			{!isPurchasing &&
				<div className='categories-row-wrapper'>
					{showCategories && <Categories />}
				</div>}
			{isLoggingIn && <Login toggleLoginModal={toggleLoginModal} setIsLoggedIn={setIsLoggedIn} />}
		</>
	)
}
