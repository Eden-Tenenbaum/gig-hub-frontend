import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { loadGigs, addGig, updateGig, removeGig, addGigMsg } from '../store/actions/gig.actions'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { gigService } from '../services/gig'
import { userService } from '../services/user'
import { GigList } from '../cmps/GigList'
import { GigFilter } from '../cmps/GigFilter'
import { mockGigs } from '../services/gig/mockGigs'


export function GigIndex() {
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()
    const [filterBy, setFilterBy] = useState(gigService.getDefaultFilter())
    // const gigs = useSelector(storeState => storeState.gigModule.gigs)
    const gigs = mockGigs


    // Added query params when passing down a category as a state from homepage
    useEffect(() => {
        const homepageCategory = location.state?.category.id
        if (homepageCategory && !searchParams.get('category')) {
            const params = {}
            searchParams.forEach((value, key) => {
                params[key] = value
            })
            params.category = homepageCategory
            setSearchParams(params)
        }
    }, [location.state, searchParams, setSearchParams])

    useEffect(() => {
        const newFilterBy = { ...gigService.getDefaultFilter() }
        searchParams.forEach((value, key) => {
            newFilterBy[key] = value
        })
        setFilterBy(newFilterBy)
    }, [searchParams])

    useEffect(() => {
        loadGigs(filterBy)
    }, [filterBy])

    async function onRemoveGig(gigId) {
        try {
            await removeGig(gigId)
            showSuccessMsg('Gig removed')
        } catch (err) {
            showErrorMsg('Cannot remove gig')
        }
    }

    async function onAddGig() {
        const gig = gigService.getEmptyGig()
        gig.title = prompt('Title?', 'Some Title')
        try {
            const savedGig = await addGig(gig)
            showSuccessMsg(`Gig added (id: ${savedGig._id})`)
        } catch (err) {
            showErrorMsg('Cannot add gig')
        }
    }

    async function onUpdateGig(gig) {
        const price = +prompt('New price?', gig.price) || 0
        if (price === 0 || price === gig.price) return

        const gigToSave = { ...gig, price }
        try {
            const savedGig = await updateGig(gigToSave)
            showSuccessMsg(`Gig updated, new price: ${savedGig.price}`)
        } catch (err) {
            showErrorMsg('Cannot update gig')
        }
    }

    return (
        <main className="gig-index">
            {/* <header>
                {userService.getLoggedinUser() && <button onClick={onAddGig}>Add a Gig</button>}
            </header> */}
            {/* <GigFilter filterBy={filterBy} setFilterBy={setFilterBy} /> */}
            <GigList
                gigs={gigs}
                onRemoveGig={onRemoveGig}
                onUpdateGig={onUpdateGig} />
        </main>
    )
}