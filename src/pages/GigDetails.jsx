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
import { ImgCarousel } from '../cmps/gigDetails/ImgCarousel'

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

  if (!gig._id) return
  return (
    <section className="gig-details grid">
      <UserInteraction plan={gig.purchasePlan} />
      <section className="gig-info grid">
        <BreadCrumb path={['back to list']} />
        <h2 className="fs28">{gig.title}</h2>
        <MiniUser gig={gig} showStars={true} />
        <ImgCarousel gig={gig} />
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