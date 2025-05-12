import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { loadGig, addGigMsg } from '../store/actions/gig.actions'

import { AppHeader } from '../cmps/AppHeader'
import { ReviewList } from '../cmps/ReviewList'
import { AppFooter } from '../cmps/AppFooter'

export function GigDetails() {

  const { gigId } = useParams()
  const gig = useSelector(storeState => storeState.gigModule.gig)

  useEffect(() => {
    loadGig(gigId)
  }, [gigId])

  async function onAddGigMsg(gigId) {
    try {
      await addGigMsg(gigId, 'bla bla ' + parseInt(Math.random() * 10))
      showSuccessMsg(`Gig msg added`)
    } catch (err) {
      showErrorMsg('Cannot add gig msg')
    }

  }

  return (
    <section className="gig-details">
      <aside>
        <article className="interaction-bar">
          Add to Favorites ♥
        </article>
        <article className="purchase-modal">
          buy
        </article>
      </aside>
      <section className="gig-info">
        <nav className="breadcrumbs">
          <Link to="/">Home</Link>
          <Link to="/gig">Back to list</Link>
        </nav>
        <h1>Gig Title</h1>
        <article className="mini-user">mini user</article>
        <article className="img-carousel">img</article>
        <article className="about-section">about</article>
        <article className="about-user">user</article>
        <section className="reviews">
          <article className="review-statistics">stats</article>
          <ReviewList />
        </section>
      </section>
    </section>
  )
}