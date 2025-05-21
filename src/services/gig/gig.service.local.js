
import { storageService } from '../async-storage.service'
import { makeId } from '../util.service'
import { userService } from '../user'
import { mockGigs2 } from './mockGigs2'

const STORAGE_KEY = 'gigs'

export const gigService = {
    query,
    getById,
    save,
    remove,
    addGigMsg,
    getDefaultFilter
};

async function query(filterBy = getDefaultFilter()) {
    let gigs = await storageService.query(STORAGE_KEY)
    
    if (!gigs || !gigs.length) {
        gigs = mockGigs2
        localStorage.setItem(STORAGE_KEY, JSON.stringify(gigs))
    }

    if (filterBy.category) {
        gigs = gigs.filter(gig => gig.category === filterBy.category)
    }
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        gigs = gigs.filter(
            gig => regex.test(gig.title) || regex.test(gig.description)
        )
    }
    if (filterBy.minPrice) {
        gigs = gigs.filter(gig => gig.price >= filterBy.minPrice)
    }
    if (filterBy.minRating) {
        gigs = gigs.filter(gig => gig.rating >= filterBy.minRating)

    }
    // const sortKey = filterBy.sortField || filterBy.sortBy
    // if (sortKey) {
    //     const dir = filterBy.sortDir === 'desc' ? -1 : 1
    //     gigs.sort((a, b) => {
    //         const aVal = a[sortKey]
    //         const bVal = b[sortKey]
    //         if (typeof aVal === 'number' && typeof bVal === 'number') return (aVal - bVal) * dir
    //         if (typeof aVal === 'string' && typeof bVal === 'string') return aVal.localeCompare(bVal) * dir
    //         return 0
    //     })
    // }
    return gigs
}

function getById(gigId) {
    return storageService.get(STORAGE_KEY, gigId)
}

async function remove(gigId) {
    await storageService.remove(STORAGE_KEY, gigId)
}

async function save(gig) {
    let savedGig
    if (gig._id) {
        const gigToSave = {
            _id: gig._id,
            title: gig.title,
            price: gig.price,
            category: gig.category
        }
        savedGig = await storageService.put(STORAGE_KEY, gigToSave)
    } else {
        const newGig = {
            ...gig,
            _id: makeId(),
            owner: userService.getLoggedinUser(),
            title: gig.title,
            price: gig.price,
            // Later, owner is set by the backend
            msgs: []
        }
        savedGig = await storageService.post(STORAGE_KEY, newGig)
    }
    return savedGig
}

async function addGigMsg(gigId, txt) {
    // Later, this is all done by the backend
    const gig = await getById(gigId)
    if (!gig.msgs) gig.msgs = []
    const msg = { id: makeId(), by: userService.getLoggedinUser(), txt }
    gig.msgs.push(msg)
    await storageService.put(STORAGE_KEY, gig)
    return msg
}

function getDefaultFilter() {
    return {
        txt: '',
        minPrice: 0,
        maxPrice: Infinity,
        category: '',
        minRating: 0,
        deliveryDay: null,
        sellerId: '',
        sortBy: 'rating', //rating/price/deliveryday etc...
        sortField: '',
        // sortDir: 'desc'
    }
}
// storageService.post(STORAGE_KEY, mockGigs)
