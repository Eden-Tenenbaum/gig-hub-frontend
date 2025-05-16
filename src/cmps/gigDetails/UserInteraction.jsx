import { useState } from 'react'

import HeartIcon from '../../../public/img/icons/HeartIcon.svg'
import HeartIconRed from '../../../public/img/icons/HeartIconRed.svg'

export function UserInteraction({ plan }) {

  const [isSaved, setIsSaved] = useState(false)

  function toggleSave() {
    setIsSaved(prev => !prev)
  }

  return (
    <aside className="user-interaction grid">
      <article className="interaction-bar">
        <div className={`heart-wrapper grid ${isSaved && 'saved'}`}>
          <img src={isSaved ? HeartIconRed : HeartIcon} alt="Save" className="heart-icon" onClick={toggleSave} />
          <span className="tooltip fs14">Save to list</span>
        </div>
      </article>
      <article className="purchase-modal">
        <section className="offer flex space-between">
          <p className="capitalize">offer</p>
          <p className="fs20">{plan.price}$</p>
        </section>
        <section className="content">
          <span className="content-text">{plan.content}</span>
          <section className="way-of-work flex fs14">
            <section className="delivery-time">{plan.deliveryDay}-day delivery</section>
            <section className="revisions">{plan.revisions} Revision{plan.revisions !== 1 && 's'}</section>
          </section>
          <ul className="whats-included">
            {plan.includes.map((criteria, idx) => {
              <li key={idx}>{criteria}</li>
            })}
          </ul>
          <button className="order-request">Request to order</button>
        </section>
      </article>
    </aside>
  )
}