import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { loadGig, addGigMsg } from '../store/actions/gig.actions'

import { ReviewList } from '../cmps/ReviewList'

import { mockGigs } from '../services/gig/mockGigs'

import { UserInteraction } from '../cmps/gigDetails/UserInteraction'
import { BreadCrumb } from '../cmps/BreadCrumb'
import { MiniUser } from '../cmps/gigDetails/MiniUser'
import { AboutUser } from '../cmps/gigDetails/AboutUser'

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
      <UserInteraction gig={gig} />
      <section className="gig-info grid">
        <BreadCrumb path={['back to list']} />
        <h2>{gig.title}</h2>
        <MiniUser gig={gig} showStars={true}/>
        <article className="img-carousel">
          <img src={gig.imgUrl} alt="img" />
        </article>
        <article className="description">{gig.description}</article>
        <AboutUser gig={gig} />
        <section className="reviews grid">
          <article className="review-statistics">stats</article>
          <ReviewList />
        </section>
      </section>
    </section>
  )
}