import React from "react"
import { AppHeader } from "../cmps/AppHeader.jsx"
import { AppFooter } from "../cmps/AppFooter.jsx"
import { GigFilter } from "../cmps/GigFilter.jsx"
import { GigList } from "../cmps/GigList.jsx"
import { GigIndex } from "./GigIndex.jsx"
import Breadcrumb from "../cmps/explore/Breadcrumb.jsx"

export function ExplorePage() {
    return (
        <main className="explore-page">
            <Breadcrumb
                path={['Graphics & Design']}
                title="Logo Design"
                subtitle="Stand out from the crowd with a logo that fits your brand personality."
            />
            <GigIndex />
            <AppFooter />
        </main>
    )
}

