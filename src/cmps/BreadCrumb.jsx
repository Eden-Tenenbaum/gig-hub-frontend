import React from "react"
import { HouseIcon } from "./SvgHub"
import { Link } from "react-router-dom"


export function BreadCrumb({ path, infoLink }) {
    return (
        <div className="breadcrumb-container">
            <ul className="breadcrumb">
                <li className="crumb">
                    <Link to="/">
                        <HouseIcon />
                    </Link>
                </li>
                {path.map((seg, i) => (
                    <React.Fragment key={i}>
                        <li className="slash">/</li>
                        <li className="crumb">
                            {i < path.length - 1
                                ? <Link to="#">{seg}</Link>
                                : <span>{seg}</span>
                            }
                        </li>
                    </React.Fragment>
                ))}
            </ul>

        </div >
    )
}