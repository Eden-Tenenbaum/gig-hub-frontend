import { HeaderPurchase } from './HeaderPurchase'
import { HeaderProfile } from './HeaderProfile'

export function AlternateHeader({ isPurchasing, isProfile, user, isUserModal }) {
    return (
        <>
            {isPurchasing && <HeaderPurchase user={user} />}              
            {/* {isProfile && <HeaderProfile />}   */}
        </>
    )
}