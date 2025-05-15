import { PayFormContainer } from '../cmps/PayFromContainer.jsx'

export function Purchase() {
    return (
        <section className="purchase-wrapper">
            <div className="purchase-information-page">
                <article className="payment-information">
                    <header>Payment Options</header>
                    <div className="payment-methods">
                        <span className="credit-card-circle"></span>
                        <a>Credit & Debit Cards</a>
                        <rect>visa</rect>
                        <rect>mastercard</rect>
                        <rect>??</rect>
                        <rect>discover</rect>
                        <rect>jcb</rect>
                    </div>
                    <PayFormContainer />
                </article>
                <section className="billing-information"></section>
            </div>
            <div className="purchase-confirmation-page">
                <div>filler content</div>
            </div>
        </section >
    )
}