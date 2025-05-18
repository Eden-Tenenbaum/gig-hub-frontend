import { useState } from 'react'

import {HeartIcon} from '../../services/svg.service'

export function UserInteraction({ plan, onPurchase }) {
  const [isSaved, setIsSaved] = useState(false)
  const [activePlan, setActivePlan] = useState(1)

  function toggleSave() {
    setIsSaved(prev => !prev)
  }

  function activatePlan(plan) {
    setActivePlan(plan)
  }

  return (
    <aside className="user-interaction grid">
      <article className="interaction-bar">
        <div className={`heart-wrapper grid ${isSaved && 'saved'}`}>
          <HeartIcon className="heart-icon" isSaved={isSaved} onClick={toggleSave} />
          <span className="tooltip fs14">Save to list</span>
        </div>
      </article>
      <article className="purchase-modal">
        <section className="plan-buttons flex space-between">
          <span className={activePlan === 1 ? 'active' : undefined} onClick={() => activatePlan(1)}>Basic</span>
          <span className={activePlan === 1.5 ? 'active' : undefined} onClick={() => activatePlan(1.5)}>Standard</span>
          <span className={activePlan === 2 ? 'active' : undefined} onClick={() => activatePlan(2)}>Premium</span>
        </section>
        <article className="plan">
          <section className="offer flex space-between">
            <p className="capitalize">
              {activePlan === 1 && 'silver'}
              {activePlan === 1.5 && 'gold'}
              {activePlan === 2 && 'platinum'}
            </p>
            <p className="fs20">{plan.price * activePlan}$</p>
          </section>
          <section className="content">
            <span className="content-text">{plan.content}</span>
            <section className="way-of-work flex fs14">
              <section className="delivery-time">{plan.deliveryDay}-day delivery</section>
              <section className="revisions">{plan.revisions * (2 * activePlan - 1)} Revision{plan.revisions !== 1 && 's'}</section>
            </section>
            <ul className="whats-included">
              {plan.includes.map((criteria, idx) => {
                return <li className={`fs14 ${idx <= activePlan && 'active'}`} key={idx}>{criteria}</li>
              })}
            </ul>
            <button className="order-request" onClick={() => onPurchase()}>Continue<span></span></button>
          </section>
        </article>
      </article>
    </aside>
  )
}