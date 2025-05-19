import { useEffect, useState } from 'react'
import { orderService } from "../../services/order/order.service.local"
import { utilService } from '../../services/util.service'

export function DashboardOrderList({ user }) {
    const [orders, setOrders] = useState([])

    function generateTimeLeft() {
        const timeLeft = utilService.getRandomIntInclusive(3, 7) - utilService.getRandomIntInclusive(0, 10)
        if (timeLeft < 0) {
            return (
                <p className='late-on-delivery'>{Math.abs(timeLeft)} days late</p>
            )
        } else {
            return (
                <p className='not-late-on-delivery'>{timeLeft} days left</p>
            )
        }
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
                    <a> - 6</a> {/* Active orders */}
                    <a>($725)</a> {/* Total orders cost */}
                </p>
                <span className="order-list-dropdown-filter">Active orders (6)
                    <span className="dropdown-icon">^</span> {/* Swap for svg */}
                </span>
                {/* Active orders/completed/canceled */}
            </div>
            <div className="order-list-wrapper">
                <ul>
                    {orders.map(order =>
                        <li key={order._id} className="dashboard-order">
                            <span>{order.buyer}</span>
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
                                <p>{order.status}</p>
                            </span>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}