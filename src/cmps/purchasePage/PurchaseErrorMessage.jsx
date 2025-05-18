// import Error from '../../public/img/icons/purchase-icons/error.svg'

export function PurchaseErrorMessage({ message }) {
    return (
        <div className='error-container'>
            <span><img src={Error} className='error-icon'></img></span>
            <span className='error-message'>{message}</span>
        </div>
    )
}