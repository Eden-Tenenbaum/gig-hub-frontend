import React from "react"

import { AppHeader } from "../cmps/AppHeader.jsx"
import { AppFooter } from "../cmps/AppFooter.jsx"
// import { PageHeader } from "../cmps/explore/PageHeader.jsx"
import { BreadCrumb } from "../cmps/BreadCrumb.jsx"
import { GigFilter } from "../cmps/GigFilter.jsx"
import { GigList } from "../cmps/GigList.jsx"
import { GigIndex } from "./GigIndex.jsx"
import { FilterBar } from "../cmps/FilterBar.jsx"
import { PopularServices } from "../cmps/homePage/PopularServices.jsx"
import { SlidesCarousel } from "../cmps/SlidesCarousel.jsx"
import { useSearchParams } from "react-router-dom"
import { utilService } from "../services/util.service.js"

export function ExplorePage() {
    const [searchParams] = useSearchParams()
    const categoryId = searchParams.get('category') || '';
    const category = utilService.capitalizeWords((categoryId.replace('-', ' ')))

    return (
        <main className="explore-page">
            <div className="explore-pag__sub__header" >
                {category &&
                    <>
                        <BreadCrumb
                            path={[category]}
                            title={category}
                            subtitle="Stand out from the crowd with a logo that fits your brand personality."
                        />
                        <h1 className="explore-page__title">{category}</h1>
                    </>
                }
                <p className="explore-page__subtitle"></p>
            </div>
            <FilterBar />
            <GigIndex categoryId={categoryId}/>
        </main>
    )
}

