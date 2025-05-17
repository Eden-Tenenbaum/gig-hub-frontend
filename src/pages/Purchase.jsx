import { useNavigate, useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { orderService } from '../services/order/order.service.local.js'

import { PayFormContainer } from '../cmps//purchasePage/PayFormContainer'
import { PurchaseConfirmation } from '../cmps/purchasePage/PurchaseConfirmation.jsx'

export function Purchase() {
    const navigate = useNavigate()
    const [order, setOrder] = useState(null)
    const [searchParams] = useSearchParams()
    const paymentSessionID = searchParams.get('paymentSessionID')
    
    useEffect(() => {
        if (!paymentSessionID) return
        orderService.getById(paymentSessionID).then(setOrder)
      }, [paymentSessionID])
    
      if (!order) return <p>Loading order...</p>

    return (
        <section className="purchase-wrapper">
            <div className="purchase-information-page">
                <article className="payment-information">
                    <header>Payment Options</header>
                    <div className="payment-methods">
                        <span className="credit-card-circle"></span>
                        <a>Credit & Debit Cards</a>
                        {/* <rect>visa</rect>
                        <rect>mastercard</rect>
                        <rect>??</rect>
                        <rect>discover</rect>
                        <rect>jcb</rect> */}
                    </div>
                    <PayFormContainer />
                </article>
                <section className="billing-information"></section>
            </div>
            <PurchaseConfirmation order={order}/>     
        </section >
    )
}