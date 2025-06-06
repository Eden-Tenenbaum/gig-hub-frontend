import { PurchaseCheckmarkIcon } from "../SvgHub"

export function HeaderPurchase() {
    return (
        <section className="header-nav-purchase">
            <ul>
                <li>
                    <span><PurchaseCheckmarkIcon /></span>
                    <a>Order Details</a>
                    <a className="svg-placeholder">{`>`}</a>
                </li>
                <li>
                    <span>2</span>
                    <a>Confirm & Pay</a>
                </li>
            </ul>
        </section>
    )
}