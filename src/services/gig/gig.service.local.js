
import { storageService } from '../async-storage.service'
import { makeId } from '../util.service'
import { userService } from '../user'
import { mockGigs } from './mockGigs.js'

const STORAGE_KEY = 'gig'

export const gigService = {
    query,
    getById,
    save,
    remove,
    addGigMsg
}
window.cs = gigService


async function query(filterBy = { txt: '', minPrice: 0, sortField: '', sortDir: 1 }) {
    const useLocal = import.meta.env.VITE_LOCAL === 'true'
    let gigs = useLocal ? [...mockGigs] : await storageService.query(STORAGE_KEY)
    const { txt, minPrice, sortField, sortDir } = filterBy

    if (txt) {
        const regex = new RegExp(txt, 'i')
        gigs = gigs.filter(gig => regex.test(gig.title) || regex.test(gig.description))
    }
    if (minPrice) {
        gigs = gigs.filter(gig => gig.price >= minPrice)
    }
    if (sortField) {
        const dir = +sortDir
        gigs.sort((a, b) => {
            if (sortField === 'title') return a.title.localeCompare(b.title) * dir
            if (sortField === 'price') return (a.price - b.price) * dir
            return 0
        })
    }
    return gigs.map(({ _id, title, price, owner }) => ({ _id, title, price, owner }))
}

function getById(gigId) {
    return storageService.get(STORAGE_KEY, gigId)
}

async function remove(gigId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, gigId)
}

async function save(gig) {
    if (gig._id) {
        const gigToSave = { _id: gig._id, price: gig.price }
        return await storageService.put(STORAGE_KEY, gigToSave)
    } else {
        const gigToSave = {
            title: gig.title,
            price: gig.price,
            // Later, owner is set by the backend
            owner: userService.getLoggedinUser(),
            msgs: []
        }
        return await storageService.post(STORAGE_KEY, gigToSave)
    }
}

async function addGigMsg(gigId, txt) {
    // Later, this is all done by the backend
    const gig = await getById(gigId)
    const msg = { id: makeId(), by: userService.getLoggedinUser(), txt }
    gig.msgs.push(msg)
    await storageService.put(STORAGE_KEY, gig)
    return msg
}