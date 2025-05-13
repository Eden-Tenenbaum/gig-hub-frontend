export function UserInteraction({ gig }) {
  return (
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
  )
}