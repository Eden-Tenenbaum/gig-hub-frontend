import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { loadUser } from '../store/actions/user.actions'
import { store } from '../store/store'
import { showSuccessMsg } from '../services/event-bus.service'
import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from '../services/socket.service'

import { LocationPinIcon, ProfileIcon, LanguagesIcon, ClockIcon, ArrowIcon } from '../cmps/SvgHub'

export function UserDetails() {
const params = useParams()
  
  const user = useSelector(storeState => storeState.userModule.watchedUser)

  useEffect(() => {
    loadUser(params.id)

    socketService.emit(SOCKET_EMIT_USER_WATCH, params.id)
    socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

    return () => {
      socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    }

  }, [params.id])

  function onUserUpdate(user) {
    showSuccessMsg(`This user ${user.fullname} just got updated from socket`)
    store.dispatch({ type: 'SET_WATCHED_USER', user })
  }

  return (
    <section className="user-profile">
      <div className='profile-page-left-side'>
        {user &&
          <div className='profile-mini-user'>
            <div className='picture-name'>
              <img src={user.imgUrl} style={{ width: '120px' }} />
              <p>{user.fullname}</p>
              <p>@{user.username}{user._id}</p>
            </div>
            <div className='location-join-date'>
              <div>
                <svg><LocationPinIcon /></svg>
                <p>Located in Israel</p>
              </div>
              <div>
                <svg><ProfileIcon /></svg>
                <p>Joined in May 2025</p>
              </div>
            </div>
            <div className='profile-languages'>
              <div>
                <svg></svg>
                <p>Hebrew (Fluent)</p>
              </div>
              <div>
                <svg></svg>
                <p>English (Fluent)</p>
              </div>
            </div>
            <div className='preferred-hours'>
              <div>
                <svg><ClockIcon /></svg>
                <p>Preferred working hours</p>
              </div>
            </div>
          </div>
        }
        <button>
          <p>Explore Diverr</p>
          <svg><ArrowIcon /></svg>
        </button>
      </div>
    </section>
  )
}