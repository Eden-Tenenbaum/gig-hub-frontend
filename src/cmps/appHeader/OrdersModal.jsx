import { useState, useEffect, useRef } from "react"
import { orderService } from '../../services/order/order.service.local'

export function OrdersModal({ user, onClose }) {
    const [orders, setOrders] = useState([])
    const modalRef = useRef()

    useEffect(() => {
        loadOrders()
    }, [])

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [onClose])

    function loadOrders() {
        orderService.queryConfirmed()
            .then(setOrders)
            .catch(console.error)
    }

    return (
        <>
            <ul ref={modalRef} className="orders-modal">
                {orders.map(order => (
                    <li key={order._id} className="user-order">
                        <img src={order.gig.imgUrl} alt="Gig preview" />
                        <div className="order-text">
                            <p>{order.gig.title}</p>
                            <p className={
                                order.status === 'CANCELED'
                                    ? 'status-canceled'
                                    : order.status === 'CONFIRMED'
                                    ? 'status-confirmed'
                                    : 'status-pending'
                            }>
                                {order.status}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="tip"></div>
        </>
    )
}