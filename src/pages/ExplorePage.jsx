import React from "react"

import { AppHeader } from "../cmps/AppHeader.jsx"
import { AppFooter } from "../cmps/AppFooter.jsx"
// import { PageHeader } from "../cmps/explore/PageHeader.jsx"
import { BreadCrumb } from "../cmps/BreadCrumb.jsx"
// import { SecondaryNav } from '../cmps/SecondaryNav.jsx'
import { GigFilter } from "../cmps/GigFilter.jsx"
import { GigList } from "../cmps/GigList.jsx"
import { GigIndex } from "./GigIndex.jsx"
import { FilterBar } from "../cmps/FilterBar.jsx"

export function ExplorePage() {
    return (
        <main className="explore-page">
            <BreadCrumb
                path={['Graphics & Design']}
                title="Logo Design"
                subtitle="Stand out from the crowd with a logo that fits your brand personality."
            />
            <FilterBar />
            {/* <GigList /> */}
            <GigIndex />
        </main>
    )
}

