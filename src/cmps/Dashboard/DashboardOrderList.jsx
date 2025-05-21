import { useEffect, useState } from 'react'
import { orderService } from "../../services/order/order.service.local"
import { utilService } from '../../services/util.service'
import { CaretDownIcon } from '../SvgHub'

export function DashboardOrderList({ user }) {
    const [orders, setOrders] = useState([])
    var possibleEarnings = 0
    orders.forEach(order => possibleEarnings += order.gig.price)

    function generateTimeLeft() {
        const timeLeft = 3 - utilService.getRandomIntInclusive(0, 4)
        if (timeLeft < 0) {
            return (
                <p className='late-on-delivery'>{Math.abs(timeLeft)} days late</p>
            )
        } else {
            return (
                <p className='not-late-on-delivery'>{timeLeft} days</p>
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
                    <a> - {orders.length}</a>
                    <a> $({possibleEarnings})</a>
                </p>
                <span className="order-list-dropdown-filter">Active orders (6)
                    <CaretDownIcon />
                </span>
                {/* Active orders/completed/canceled */}
            </div>
            <div className="order-list-wrapper">
                <ul>
                    {orders.map(order =>
                        <li key={order._id} className="dashboard-order">
                            <span><img src={order.gig.imgUrl} /></span>
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