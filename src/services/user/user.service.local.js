import { storageService } from '../async-storage.service'
import buyerPfp from '../../../public/img/profile.pictures/buyer-pfp.jpg'
import sellerPfp from '../../../public/img/profile.pictures/seller-pfp.jpg'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update,
    getLoggedinUser,
    saveLoggedinUser,
    addOrderToBuyer,
    addOrderToSeller,
}

async function getUsers() {
    const users = await storageService.query('user')
    return users.map(user => {
        delete user.password
        return user
    })
}

async function getById(userId) {
    return await storageService.get('user', userId)
}

function remove(userId) {
    return storageService.remove('user', userId)
}

async function update({ _id, score }) {
    const user = await storageService.get('user', _id)
    user.score = score
    await storageService.put('user', user)

    // When admin updates other user's details, do not update loggedinUser
    const loggedinUser = getLoggedinUser()
    if (loggedinUser._id === user._id) saveLoggedinUser(user)
    return user
}

async function login(userCred) {
    const users = await storageService.query('user')
    // const user = users.find(user => user.username === userCred.username &&
    //     user.password === userCred.password) skipping cred until advice about modal
    const user = users[0]

    if (user) return saveLoggedinUser(user)
    else throw new Error('Invalid credentials')
}

async function signup(userCred) {
    if (!userCred.imgUrl) userCred.imgUrl = buyerPfp
    userCred.score = 10000

    const user = await storageService.post('user', userCred)
    return saveLoggedinUser(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function saveLoggedinUser(user) {
    user = {
        _id: user._id,
        fullname: user.fullname,
        imgUrl: user.imgUrl,
        isAdmin: user.isAdmin,
        location: user.location
    }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

async function addOrderToBuyer(buyerId, orderId) {
    const user = await getById(buyerId)
    user.ordersMade = user.ordersMade || []
    user.ordersMade.push(orderId)
    return await storageService.put('user', user)
}

async function addOrderToSeller(sellerId, orderId) {
    const user = await getById(sellerId)
    user.ordersReceived = user.ordersReceived || []
    user.ordersReceived.push(orderId)
    return await storageService.put('user', user)
}

// To quickly create an admin user, uncomment the next line
// _createAdmin()
async function _createAdmin() {
    if (user.length) return
    const user = 
        {
            _id: 'u101',
            fullname: 'Yonatan Keren',
            imgUrl: buyerPfp,
            username: 'yonatan',
            password: 'password',
            isAdmin: false,
            level: 'basic',
            gigs: [],
            ordersMade: [],
            ordersReceived: [],
            likedGigIds: [],
            location: 'israel',
        }
    const newUser = await storageService.post('user', user)
    console.log('newUser: ', newUser)
}

// To quickly create an admin user, uncomment the next line
// _createSeller()
async function _createSeller() {
    if (user.length) return
    const user = 
        {
            _id: 'u102',
            fullname: 'Eden Tenenbaum',
            imgUrl: sellerPfp,
            username: 'eden',
            password: 'password',
            isAdmin: false,
            level: 'basic',
            gigs: [],
            ordersMade: [],
            ordersReceived: [],
            likedGigIds: [],
            location: 'israel',
        }
    const newUser = await storageService.post('user', user)
    console.log('newUser: ', newUser)
}