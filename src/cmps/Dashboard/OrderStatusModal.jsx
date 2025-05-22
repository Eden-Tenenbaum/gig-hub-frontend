import { useEffect, useRef } from 'react'
import { orderService } from '../../services/order/order.service.local'

export function OrderStatusModal({ order, closeOrderStatusModal, updateOrderStatus }) {
    const modalRef = useRef()

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeOrderStatusModal()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [closeOrderStatusModal])

    async function handleStatusChange(newStatus) {
        try {
            updateOrderStatus(order._id, newStatus)
            closeOrderStatusModal()
        } catch (err) {
            console.error('Failed to update order status:', err)
        }
    }

    return (
        <>
            <div className="order-status-modal">
                <div className="modal" ref={modalRef}>
                    <div className="modal-actions">
                        <button onClick={() => handleStatusChange('CONFIRMED')}>Confirm</button>
                        <button onClick={() => handleStatusChange('CANCELED')}>Cancel</button>
                    </div>
                </div>
                <div className='tip'></div>
            </div>
        </>
    )
}
