import { useSelector } from 'react-redux'
import { Logo } from './SvgHub'

export function AppFooter() {
	const count = useSelector(storeState => storeState.userModule.count)

	return (
		<footer className="app-footer">
			<div>
				<Logo />
				<p>&copy; Diverr international Ltd. 2025</p>
			</div>

			{/* {import.meta.env.VITE_LOCAL ? 
                <span className="local-services">Local Services</span> : 
                <span className="remote-services">Remote Services</span>} */}
		</footer>
	)
}