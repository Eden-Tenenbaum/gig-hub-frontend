import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { loadGig, addGigMsg } from '../store/actions/gig.actions'

import { ReviewList } from '../cmps/ReviewList'

import { mockGigs } from '../services/gig/mockGigs'
import { Stars } from '../cmps/Stars'

export function GigDetails() {

  const { gigId } = useParams()
  const [gig, setGig] = useState({})

  useEffect(() => {
    loadGig(gigId)
  }, [gigId])

  function loadGig(gigId) {
    const findGig = mockGigs.find(g => g._id === gigId)
    setGig(findGig)
  }

  async function onAddGigMsg(gigId) {
    try {
      await addGigMsg(gigId, 'bla bla ' + parseInt(Math.random() * 10))
      showSuccessMsg(`Gig msg added`)
    } catch (err) {
      showErrorMsg('Cannot add gig msg')
    }

  }
  if (!gig._id) return
  return (
    <section className="gig-details grid">
      <aside className="user-interaction grid">
        <article className="interaction-bar">
          ♥
        </article>
        <article className="purchase-modal">
          <section className="flex space-between">
            <p className="caps">offer</p>
            <p className="caps">{gig.price}$</p>
          </section>
          <section className="content">
            1 logo design option with Jpeg, PNG files and 3 revisions (No mascot or complex work)
            <section className="way-of-work flex">
              <section className="delivary-time">2-day delivery</section>
              <section className="revisions">3 Revisions</section>
            </section>
            {/* <ul className="whats-included">
              <li>1 concept included</li>
              <li>Logo transparency</li>
              <li>Vector file</li>
              <li>Printable file</li>
              <li>Include 3D mockup</li>
              <li>Include source file</li>
            </ul> */}
            <button className="order-request">Request to order</button>
          </section>
        </article>
      </aside>
      <section className="gig-info grid">
        <nav className="breadcrumbs flex">
          <Link to="/">Home</Link>
          <Link to="/gig">Back to list</Link>
        </nav>
        <h1>{gig.title}</h1>
        <article className="mini-user flex">
          <section className="img-container square-ratio">
            <img src={gig.owner.imgUrl} alt="img" />
          </section>
          <section>
            <p className="fullname">{gig.owner.fullname}</p>
            <Stars rating={gig.rating} showStars={true} />
          </section>
        </article>
        <article className="img-carousel">
          <img src={gig.imgUrl} alt="img" />
        </article>
        <article className="description">{gig.description}</article>
        <article className="about-user">
          <article className="mini-user flex" style={{ '--scale': 1.5 }}>
            <section className="img-container square-ratio">
              <img src={gig.owner.imgUrl} alt="img" />
            </section>
            <section>
              <p className="fullname">{gig.owner.fullname}</p>
              <Stars rating={gig.rating} />
            </section>
          </article>
          <article className="user-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio impedit corrupti nam quia facilis fugiat corporis nesciunt ad veritatis nisi autem laudantium nobis, neque minus natus culpa exercitationem id nulla!
          </article>
        </article>
        <section className="reviews grid">
          <article className="review-statistics">stats</article>
          <ReviewList />
        </section>
      </section>
    </section>
  )
}