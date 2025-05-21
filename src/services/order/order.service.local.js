import { storageService } from '../async-storage.service'
import { utilService } from '../util.service'
import { userService } from '../user'
import { showSuccessMsg, showErrorMsg } from '../event-bus.service'


const POSSIBLE_STORAGE_KEY = 'possible_order'
const CONFIRMED_STORAGE_KEY = 'confirmed_order'

export const orderService = {
	query,
	getById,
	add,
	save,
	remove,
	confirmOrder,
	addConfirmed,
	queryConfirmed,
}

// possible orders

function query() {
	return storageService.query(POSSIBLE_STORAGE_KEY)
}

function getById(orderId) {
	return storageService.get(POSSIBLE_STORAGE_KEY, orderId)
}

async function add(order) {
	return await storageService.post(POSSIBLE_STORAGE_KEY, order)
}

async function save(order) {
	return await storageService.put(POSSIBLE_STORAGE_KEY, order)
}

async function remove(orderId) {
	return await storageService.remove(POSSIBLE_STORAGE_KEY, orderId)
}

// confirm orders

function queryConfirmed() {
	return storageService.query(CONFIRMED_STORAGE_KEY)
}

async function addConfirmed(order) {
	return await storageService.post(CONFIRMED_STORAGE_KEY, order)
}

async function confirmOrder(orderId, buyerId) {
	const possibleOrders = await storageService.query(POSSIBLE_STORAGE_KEY)

	const orderToConfirm = possibleOrders.find(order => order._id === orderId)
	if (!orderToConfirm) showErrorMsg('Failed to create order')

	const confirmedOrder = {
		...orderToConfirm,
		_id: utilService.makeId(),
		buyer: buyerId,
		status: 'IN REVISION',
		createdAt: Date.now()
	}

	await addConfirmed(confirmedOrder)
	return confirmedOrder
}