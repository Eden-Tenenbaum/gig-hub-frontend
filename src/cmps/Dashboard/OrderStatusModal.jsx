import { orderService } from '../../services/order/order.service.local'

export function OrderStatusModal({ order, closeOrderStatusModal, updateOrderStatus }) {
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
                <div className="modal">
                    <div className="modal-actions">
                        <button onClick={() => {
                            closeOrderStatusModal()
                            handleStatusChange('CANCELED')
                        }}>Cancel</button>
                        <button onClick={() => {
                            closeOrderStatusModal()
                            handleStatusChange('CONFIRMED')
                        }}>Confirm</button>
                    </div>
                </div>
            </div>
        </>
    )
}