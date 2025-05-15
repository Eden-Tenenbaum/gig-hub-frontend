import Lock from '../../public/img/icons/purchase-icons/lock.svg'
import { PurchaseErrorMessage } from './PurchaseErrorMessage.jsx'

export function PayFormContainer() {

    function inputError() {
        return 'An input error occured.'
    }

    return (
        <div className="pay-form-container">
            <form className="diverr-pay-form">
                <div className="card-info">
                    <label className="card-number">
                        <span>Card number</span>
                        <div className='card-number-input-wrapper'>
                            <span>card</span>
                            <input
                                placeholder='1111 2222 3333 4444'
                                type="text"
                                maxLength="19"
                            ></input>
                            <span><img src={Lock}></img></span>
                        </div>
                        <PurchaseErrorMessage message={inputError()} />
                    </label>
                    <div className='exp-cvv'>
                        <label className="expiration-date">
                            <span>Expiration date</span>
                            <div className='exp-date-input-wrapper'>
                                <input placeholder='MM / YY' type='text'></input>
                            </div>
                            <PurchaseErrorMessage message={inputError()} />
                        </label>
                        <label className="security-code">
                            <span>Security code</span>
                            <div className='security-code-input-wrapper'>
                                <input placeholder='123' type='text'></input>
                            </div>
                            <PurchaseErrorMessage message={inputError()} />
                        </label>
                    </div>
                    <div className='cardholder-info'>
                        <label className="cardholder-name">
                            <span>Cardholder's name</span>
                            <div className='cardholder-name-input-wrapper'>
                                <input
                                    placeholder=''
                                    type="text"
                                ></input>
                            </div>
                            <p>As written on card</p>
                            <PurchaseErrorMessage message={inputError()} />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    )
}