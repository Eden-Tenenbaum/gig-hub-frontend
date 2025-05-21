// import Error from '../../public/img/icons/purchase-icons/error.svg'

export function PurchaseErrorMessage({ message, isError }) {
    return (
        <div className={`error-container ${!isError ? 'hidden' : ''}`}>
            <span><img src={Error} className='error-icon'></img></span>
            <span className='error-message'>{message}</span>
        </div>
    )
}