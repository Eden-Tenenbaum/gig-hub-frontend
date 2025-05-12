import React from 'react'
import { Routes, Route } from 'react-router'

import { HomePage } from './pages/HomePage'
import { Explore } from './pages/Explore.jsx'
import { GigIndex } from './pages/GigIndex'

import { GigDetails } from './pages/GigDetails'
import { Purchase } from './pages/Purchase'
import { UserDetails } from './pages/UserDetails'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { UserMsg } from './cmps/UserMsg'


export function RootCmp() {
    return (
        <div className="main-container">
            <AppHeader />
            <UserMsg />

            <main>
                <Routes>
                    <Route path="" element={<HomePage />} />
                    <Route path="explore" element={<Explore />} />
                    <Route path="gig" element={<GigIndex />} />
                    <Route path="gig/:gigId" element={<GigDetails />} />
                    <Route path="user/:id" element={<UserDetails />} />
                    <Route path="gig/:gigId/buy" element={<Purchase />} />
                </Routes>
            </main>
            <AppFooter />
        </div>

    )
}


