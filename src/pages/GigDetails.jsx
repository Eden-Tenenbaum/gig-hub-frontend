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
        <h2 className="title fs28">{gig.title}</h2>
        <MiniUser gig={gig} showStars={true} />
        <ImgCarousel gig={gig} />
        <article className="description">
          <h2 className="fs20">About this gig</h2>
          {gig.description}
        </article>
        <article className="description">
          <h2 className="fs20">Get to know {gig.owner.fullname}</h2>
          <MiniUser gig={gig} scale={1.5} fs={16} showStars={true} includeUserMsg={true} />
          <button className="contact">Contact me</button>
          <AboutUser />
        </article>
        <section className="reviews grid">
          <article className="review-statistics">stats</article>
          <ReviewList />
        </section>
      </section>
    </section>
  )
}