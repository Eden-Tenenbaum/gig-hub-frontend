import { mockGigs } from '../services/gig/mockGigs'
import { userService } from '../services/user'
import { GigPreview } from './GigPreview'

export function GigList({ gigs, onRemoveGig, onUpdateGig }) {

    function shouldShowActionBtns(gig) {
        const user = userService.getLoggedinUser()


        if (!user) return false
        if (user.isAdmin) return true
        return gig.owner?._id === user._id
    }

    return <section>
        <ul className="gig-list">
            {gigs.map(gig => (
                <li key={gig._id}>
                    <GigPreview gig={gig} />
                    {userService.getLoggedinUser()?.isAdmin && (
                        <div className='action'>
                            <button onClick={() => onUpdateGig(gig)}>Edit</button>
                            <button onClick={() => onRemoveGig(gig._id)}>Delete</button>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    </section>
}