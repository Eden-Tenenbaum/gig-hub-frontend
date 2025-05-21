import React from 'react'
import { Routes, Route } from 'react-router'
import { useLocation, useParams } from 'react-router-dom';

import { HomePage } from './pages/HomePage'
import { ExplorePage } from './pages/ExplorePage.jsx'
import { GigIndex } from './pages/GigIndex'
import { GigDetails } from './pages/GigDetails'
import { Purchase } from './pages/Purchase'
import { UserDetails } from './pages/UserDetails'
import { Dashboard } from './pages/Dashboard'

import { AppHeader } from './cmps/AppHeader'
import { PromoVideo } from './cmps/homePage/PromoVideo'
import { AppFooter } from './cmps/AppFooter'
import { UserMsg } from './cmps/UserMsg'


export function RootCmp() {
    const { title, category } = useParams()
    const location = useLocation()
    const isHomePage = location.pathname === '/'

    return (
        <div className="main-container">
            <div className={`app-header-wrapper full ${isHomePage ? 'sticky' : ''}`}>
                <AppHeader />
            </div>
            {isHomePage && <PromoVideo />}
            <UserMsg />
            <main>
                <Routes>
                    <Route path="" element={<HomePage />} />
                    <Route path="gig" element={<ExplorePage />} />
                    <Route path="gig/:gigId" element={<GigDetails />} />
                    <Route path="user/:id" element={<UserDetails />} />
                    <Route path="purchase" element={<Purchase />} />
                    <Route path="seller" element={<Dashboard />} />
                </Routes>
            </main>
            <AppFooter />
        </div>

    )
}


