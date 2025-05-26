import React, { useState } from 'react'

import { ArrowIcon, CheckmarkIcon, ClockIcon, HeartIcon, LoopIcon } from '../SvgHub'

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
        <div className={`heart-wrapper grid flow-column fs14 ${isSaved && 'saved'}`}>
          <HeartIcon className="heart-icon" fill={isSaved ? '#f74040' : '#b5b6ba'} onClick={toggleSave} />
          <span className="tooltip">Save to list</span>
          <span className="saved-count">115</span>
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
              <section className="delivery-time flex"><ClockIcon />
                {activePlan === 1 && '4-day delivery'}
                {activePlan === 1.5 && `${plan.deliveryDay}-day delivery`}
                {activePlan === 2 && '2-day delivery'}
              </section>
              <section className="revisions flex"><LoopIcon /> {plan.revisions * (2 * activePlan - 1)} Revision{plan.revisions !== 1 && 's'}</section>
            </section>
            <ul className="whats-included grid">
              {plan.includes.map((criteria, idx) => (
                <React.Fragment key={idx}>
                  <CheckmarkIcon fill={idx <= activePlan ? '#222325' : '#dadbdd'} />
                  <li className="fs14">{criteria}</li>
                </React.Fragment>
              ))}
            </ul>
            <button className="order-request" onClick={() => onPurchase(activePlan)}>Continue<ArrowIcon /></button>
          </section>
        </article>
      </article>
    </aside>
  )
}