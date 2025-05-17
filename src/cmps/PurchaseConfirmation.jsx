import { orderService } from "../services/order/order.service.local"
import { useNavigate } from "react-router"

export function PurchaseConfirmation({ order }) {
    const orderTotal = order.vat + order.gig.price + order.serviceFee
    const navigate = useNavigate()

    function FinalizePurchase() {
        orderService.confirmOrder(order._id, '1234')
        navigate('/gig')
    }

    return (
        <div className="purchase-confirmation-page">
            <section className="order-details-wrapper">
                <span className="order-gig-header">
                    <span className="order-gig-image">
                        <img src={order.gig.imgUrl} alt="" />
                    </span>
                    <span className="order-gig-title">
                        <p>{order.gig.title}</p>
                    </span>
                </span>
                <span className="order-gig-general">
                    <span className="package-pricing">
                        <span>BASIC PACKAGE</span>
                        <div>${order.gig.price}</div>
                    </span>
                    {/* <span className="purchase-package-details"></span> maybe apply later*/}
                </span>
            </section>
            <div className="order-summary-wrapper">
                <div className="service-fee">
                    <div>
                        <span>Service fee</span>
                        <span className='more-info'> ? </span>
                    </div>
                    <span>${order.serviceFee.toFixed(2)}</span>
                </div>
                <div className="vat">
                    <div>
                        <span>VAT</span>
                        <span className='more-info'> ? </span>
                    </div>
                    <span>${order.vat.toFixed(2)}</span>
                </div>
                <div className="order-conclusion">
                    <div>
                        <span>Order total</span>
                        <span>${orderTotal.toFixed(2)}</span>
                    </div>
                    <div>
                        <span>You'll Pay</span>
                        <span>${orderTotal.toFixed(2)}</span>
                    </div>
                    <div>
                        <span>Total delivery time</span>
                        <span>{order.gig.deliveryTime}</span>
                    </div>
                    <button onClick={() => FinalizePurchase()}>Pay in USD</button>
                    <div className="secure-payment">
                        <span></span>
                        <span>Secure SSL payment</span>
                    </div>
                </div>
            </div>
        </div>
    )
}