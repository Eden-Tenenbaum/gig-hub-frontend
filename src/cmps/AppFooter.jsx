import { useSelector } from 'react-redux'
import { Logo } from './SvgHub'
import { TikTokIcon, InstagramIcon, LinkedInIcon, FacebookIcon, PinterestIcon, XIcon } from './SvgHub'

export function AppFooter() {
	const count = useSelector(storeState => storeState.userModule.count)

	return (
		<footer className="app-footer">
			<div>
				<Logo />
				<p>&copy; Diverr international Ltd. 2025</p>
			</div>
			<ul className='footer-link-list'>
				<li>
					<a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
						<svg><TikTokIcon /></svg>
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
						<svg><InstagramIcon /></svg>
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
						<svg><LinkedInIcon /></svg>
					</a>
				</li>
				<li>
					<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
						<svg><FacebookIcon /></svg>
					</a>
				</li>
				<li>
					<a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
						<svg><PinterestIcon /></svg>
					</a>
				</li>
				<li>
					<a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
						<svg><XIcon /></svg>
					</a>
				</li>
			</ul>
		</footer>
	)
}