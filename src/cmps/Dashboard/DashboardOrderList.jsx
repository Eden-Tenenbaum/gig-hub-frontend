import { useEffect, useState } from 'react'
import { orderService } from "../../services/order/order.service.local"
import { utilService } from '../../services/util.service'
import { CaretDownIcon, ClockIcon } from '../SvgHub'
import { OrderStatusModal } from './OrderStatusModal'

export function DashboardOrderList({ user }) {
    const [orders, setOrders] = useState([])
    const [openModalOrderId, setOpenModalOrderId] = useState(null)
    var possibleEarnings = 0
    orders.forEach(order => possibleEarnings += order.gig.price)

    useEffect(() => {
        loadOrders()
    }, [])
    
    function loadOrders() {
        orderService.queryConfirmed()
        .then(setOrders)
        .catch(console.error)
    }

    function updateOrderStatus(orderId, newStatus) {
        orderService.getConfirmedById(orderId)
            .then(order => {
                const updatedOrder = { ...order, status: newStatus }
                return orderService.saveConfirmed(updatedOrder)
            })
            .then(savedOrder => {
                setOrders(prevOrders =>
                    prevOrders.map(order =>
                        order._id === savedOrder._id ? savedOrder : order
                    )
                )
            })
            .catch(err => {
                console.error('Failed to update order status:', err)
            })
    }

    function generateTimeLeft() {
        const timeLeft = 3 - utilService.getRandomIntInclusive(0, 4)
        if (timeLeft < 0) {
            return (
                <p className='late-on-delivery'><ClockIcon />{Math.abs(timeLeft)} days late</p>
            )
        } else {
            return (
                <p className='not-late-on-delivery'>{timeLeft} days</p>
            )
        }
    }

    function openOrderStatusModal(orderId) {
        setOpenModalOrderId(orderId)
    }
    
    function closeOrderStatusModal() {
        setOpenModalOrderId(null)
    }

    useEffect(() => {
        orderService.queryConfirmed().then(orders => {
            setOrders(orders)
        }).catch(err => {
            console.error('Failed to load orders:', err)
        })
    }, [])

    return (
        <div className="dashboard-orders">
            <p className="dashboard-welcome-message">Welcome, {user.fullname}</p>
            <div className="active-orders">
                <p>Active orders
                    <a> - {orders.length}</a>
                    <a> $({possibleEarnings})</a>
                </p>
                <span className="order-list-dropdown-filter">All orders ({orders.length})
                    <CaretDownIcon />
                </span>
                {/* Active orders/completed/canceled */}
            </div>
            <div className="order-list-wrapper">
                <ul>
                    {orders.map(order =>
                        <li key={order._id} className="dashboard-order">
                            <span>
                                <img src={order.gig.imgUrl} />
                                <img src={user.imgUrl} />
                                <p>{user.fullname}</p>
                            </span>
                            <span>
                                <p>Price</p>
                                <p>${order.gig.price}</p>
                            </span>
                            <span>
                                <p>Delivery Time</p>
                                {generateTimeLeft()}
                            </span>
                            <span>
                                <p>Status</p>
                                <p 
                                className={
                                    order.status === 'CANCELED'
                                      ? 'status-canceled'
                                      : order.status === 'CONFIRMED'
                                      ? 'status-confirmed'
                                      : 'status-pending'
                                  }
                                onClick={() => openOrderStatusModal(order._id)
                                }>{order.status}</p>
                                {openModalOrderId === order._id && (
                                    <OrderStatusModal 
                                    order={order}
                                    closeOrderStatusModal={closeOrderStatusModal}
                                    updateOrderStatus={updateOrderStatus}
                                    />
                                )}
                            </span>
                            <span>
                                <p>View</p>
                            </span>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}