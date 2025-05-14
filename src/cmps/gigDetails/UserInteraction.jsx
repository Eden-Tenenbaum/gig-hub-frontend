import { useState } from 'react'

import HeartIcon from '../../../public/img/icons/HeartIcon.svg'
import HeartIconRed from '../../../public/img/icons/HeartIconRed.svg'

export function UserInteraction({ gig }) {
  
  const [isSaved, setIsSaved] = useState(false)

  function toggleSave() {
    setIsSaved(prev => !prev)
  }

  return (
    <aside className="user-interaction grid">
      <article className="interaction-bar">
        <div className={`heart-wrapper ${isSaved ? 'saved' : ''}`}>
          <span className="tooltip fs14">Save to list</span>
          <img src={isSaved ? HeartIconRed : HeartIcon} alt="Save" className="heart-icon" />
        </div>
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
  )
}