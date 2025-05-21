import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { loadGigs, addGig, updateGig, removeGig, addGigMsg } from '../store/actions/gig.actions'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { GigList } from '../cmps/GigList'


export function GigIndex() {
    const [searchParams] = useSearchParams()
    // const [filterBy, setFilterBy] = useState(gigService.getDefaultFilter())
    // const gigs = useSelector(storeState => storeState.gigModule.gigs)

    function reloadCurrentFilter() {
        const filterBy = {}
        searchParams.forEach((value, key) => {
            filterBy[key] = value
        })
        loadGigs(filterBy)
    }

    // Added query params when passing down a category as a state from homepage
    useEffect(() => {
        reloadCurrentFilter()
    }, [searchParams])

    const gigs = useSelector(state => state.gigModule.gigs)

    async function onRemoveGig(gigId) {
        try {
            await removeGig(gigId)
            showSuccessMsg('Gig removed')
            reloadCurrentFilter()
        } catch (err) {
            showErrorMsg('Cannot remove gig')
        }
    }

    async function onAddGig() {
        try {
            await addGig()
            showSuccessMsg(`Gig added`)
            reloadCurrentFilter()
        } catch (err) {
            showErrorMsg('Cannot add gig')
        }
    }

    async function onUpdateGig(gig) {
        try {
            await updateGig(gig)
            showSuccessMsg(`Gig updated`)
            reloadCurrentFilter()
        } catch (err) {
            showErrorMsg('Cannot update gig')
        }
    }

    return (
        <main className="gig-index">
            {/* <header>
                {userService.getLoggedinUser() && <button onClick={onAddGig}>Add a Gig</button>}
            </header>
            {/* <GigFilter filterBy={filterBy} setFilterBy={setFilterBy} /> */}
            <GigList
                gigs={gigs}
                onAddGig={onAddGig}
                onRemoveGig={onRemoveGig}
                onUpdateGig={onUpdateGig} />
        </main>
    )
}

