import { PurchaseErrorMessage } from './PurchaseErrorMessage.jsx'
import { useState } from 'react'

import { CreditCardIcon, LockIcon } from '../SvgHub'

export function PayFormContainer({ user }) {

    const [isError, setIsError] = useState(false) //future use

    function inputError() {
        return 'An input error occured.'
    }

    function handleChange(input, condition) {
        if (condition === 'no numbers') {
            const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
            numbers.forEach(num => {
                if (input.includes(num)) {
                    setIsError(true)
                } else {
                    setIsError(false)
                }
            })
        }
    }

    return (
        <div className="pay-form-container">
            <form className="diverr-pay-form">
                <div className="card-info">
                    <label className="card-number">
                        <span>Card number</span>
                        <div className='card-number-input-wrapper'>
                            <span><CreditCardIcon /></span>
                            <input
                                placeholder='1234 5678 9012 3456'
                                type="text"
                                maxLength="19"
                                value={'7364 1827 2567 1527'}
                            ></input>
                            <span><LockIcon /></span>
                        </div>
                        <PurchaseErrorMessage message={inputError()} isError={isError}/>
                    </label>
                    <div className='exp-cvv'>
                        <label className="expiration-date">
                            <span>Expiration date</span>
                            <div className='exp-date-input-wrapper'>
                                <input placeholder='MM / YY' type='text' value={'05 / 30'}></input>
                            </div>
                            <PurchaseErrorMessage message={inputError()} isError={isError}/>
                        </label>
                        <label className="security-code">
                            <span>Security code</span>
                            <div className='security-code-input-wrapper'>
                                <input placeholder='123' type='text' value={'923'}></input>
                            </div>
                            <PurchaseErrorMessage message={inputError()} isError={isError}/>
                        </label>
                    </div>
                    <div className='cardholder-info'>
                        <label className="cardholder-name">
                            <span>Cardholder's name</span>
                            <div className='cardholder-name-input-wrapper'>
                                <input
                                    placeholder=''
                                    type="text"
                                    value={'John Smith'}
                                    onChange={ev => handleChange(ev.target.value, 'no numbers')}
                                ></input>
                            </div>
                            {!isError ?
                                <p>As written on card</p>
                                :
                                <PurchaseErrorMessage message={inputError} />
                            }
                        </label>
                        <div className='card-display-name-wrapper'>
                            <label className="card-display-name">
                                <span>Card display name <span>(Optional)</span></span>
                                <div className='card-display-name-input-wrapper'>
                                    <input
                                        placeholder='e.g. Marketing card, Legal team card...'
                                        type="text"
                                        value={'Marketing Card'}
                                        onChange={ev => handleChange(ev.target.value, 'no numbers')}
                                    ></input>
                                </div>
                                {!isError ?
                                    <p>14/30</p>
                                    :
                                    <PurchaseErrorMessage message={inputError} />
                                }
                            </label>
                        </div>
                        <div className='save-card'>
                            <span className='checkbox-row'>
                                <span className='checkbox'></span>
                                <label>Save this card for future payments</label>
                                <span className='more-info'> ? </span>
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}