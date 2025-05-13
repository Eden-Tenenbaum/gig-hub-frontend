import React from "react"
import HomeIconUrl from '../../public/img/HomeIcon3.svg'
import { Link } from "react-router-dom"


export function BreadCrumb({ path, title, subtitle, infoLink }) {
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