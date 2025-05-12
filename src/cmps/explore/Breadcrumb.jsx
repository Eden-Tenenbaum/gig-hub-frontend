import React from "react"
import HomeIconUrl from '../../assets/icons/HomeIcon3.svg'
import { Link } from "react-router-dom"
import '/Users/eden/Desktop/gig-hub-frontend/gig-hub-frontend/src/assets/styles/cmps/Breadcrumb.scss'

export default function Breadcrumb({ path, title, subtitle, infoLink }) {
    return (
        <div className="breadcrumb-container">
            <ul className="breadcrumb">
                <li className="crumb">
                    <Link to="/">
                        <img src={HomeIconUrl} alt="Home" className="icon" />
                    </Link>
                </li>
                {path.map((seg, i) => (
                    <React.Fragment key={i}>
                        <li className="separator">/</li>
                        <li className="crumb">
                            {i < path.length - 1
                                ? <Link to="#">{seg}</Link>
                                : <span>{seg}</span>
                            }
                        </li>
                    </React.Fragment>
                ))}
            </ul>
            <h1 className="page-title">{title}</h1>

            {subtitle && (
                <p className="page-subtitle">
                    {subtitle}

                </p>
            )}
        </div >
    )
}