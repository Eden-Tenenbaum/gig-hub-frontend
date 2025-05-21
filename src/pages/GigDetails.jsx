import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { loadGig, addGigMsg } from '../store/actions/gig.actions'
import { utilService } from '../services/util.service'
import { orderService } from '../services/order/order.service.local'

import { ReviewList } from '../cmps/ReviewList'

import { mockGigs2 } from '../services/gig/mockGigs2'

import { UserInteraction } from '../cmps/gigDetails/UserInteraction'
import { BreadCrumb } from '../cmps/BreadCrumb'
import { MiniUser } from '../cmps/MiniUser'
import { AboutUser } from '../cmps/gigDetails/AboutUser'
import { ImgCarousel } from '../cmps/gigDetails/ImgCarousel'

export function GigDetails() {
  const navigate = useNavigate()
  const { gigId } = useParams()
  const [gig, setGig] = useState({})

  useEffect(() => {
    loadGig(gigId)
  }, [gigId])

  function loadGig(gigId) {
    const findGig = mockGigs2.find(g => g._id === gigId)
    setGig(findGig)
  }

  // purchase flow - start - yonatan (creating order obj)
  async function onPurchase(activePlan) {
    var selectedPackage = ''
    if (activePlan === 1) {
      selectedPackage = 'BASIC'
    }
    if (activePlan === 1.5) {
      selectedPackage = 'STANDARD'
    }
    if (activePlan === 2) {
      selectedPackage = 'PREMIUM'
    }


    const gigToBuy = {
      _id: gig._id,
      title: gig.title,
      imgUrl: gig.imgUrl[0].src, 
      price: gig.purchasePlan.price * activePlan,
      deliveryTime: gig.purchasePlan.deliveryDay,
      package: selectedPackage,
    }

    const serviceFee = (utilService.getRandomIntInclusive(5, 20) * gigToBuy.price) / 100

    const newOrder = {
      _id: utilService.makeId(),
      // buyer: loggedInUser._id,
      seller: gig.owner._id,
      gig: gigToBuy,
      status: 'pending',
      serviceFee: serviceFee,
      vat: (serviceFee + gig.purchasePlan.price) * 0.18

    }
    try {
      await orderService.add(newOrder)
      navigate(`/purchase?paymentSessionID=${newOrder._id}`)
    } catch (err) {
      showErrorMsg('Failed to create order')
      console.error(err)
    }
  }
  //purchase flow - end

  if (!gig._id) return
  return (
    <section className="gig-details grid">
      <UserInteraction plan={gig.purchasePlan} onPurchase={onPurchase}/>
      <section className="gig-info grid">
        <BreadCrumb path={['back to list']} />
        <h2 className="title fs28">{gig.title}</h2>
        <MiniUser gig={gig} showStars={true} reviewCount={{ underline: true, link: true }} />
        <ImgCarousel gig={gig} />
        <article className="description">
          <h2 className="fs20">About this gig</h2>
          {gig.description}
        </article>
        <article className="description">
          <h2 className="fs20">Get to know {gig.owner.fullname}</h2>
          <MiniUser gig={gig} scale={1.5} fs={16} showStars={true} includeUserMsg={true} reviewCount={{ underline: true }} />
          <button className="contact">Contact me</button>
          <AboutUser />
        </article>
        <section id="reviews" className="reviews grid">
          <h2 className="fs20">Reviews</h2>
          <article className="review-statistics">stats + sort + search</article>
          <ReviewList reviews={gig.reviews} />
        </section>
      </section>
    </section>
  )
}