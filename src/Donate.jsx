import './Donate.css'

// ── Donate page ───────────────────────────────────────────────────────────────
// Two sections: a hero introducing the ask, and a "where donations go" section.
// Both sections share the same centered layout and gold Caveat typography.
export default function Donate() {
  return (
    <>
      {/* ── Hero ── */}
      {/* Yellow bars are decorative accent blocks positioned on each side */}
      <section className="donate-hero">
        <div className="donate-bar donate-bar--left" />
        <div className="donate-hero-content">

          <h1 className="donate-heading">Donate Now!</h1>

          <h2 className="donate-subheading">
            Help us make a difference in the lives of pediatric cancer patients by donating today!
          </h2>

          <p>
            Your <strong>donation</strong> to Project Cherish Foundation directly supports our
            mission to{' '}
            <strong>be a part of the change in the fight against childhood cancer.</strong> Every
            contribution brings us closer to a world where cancer is defeated.{' '}
            <strong>Your support is essential.</strong> Be part of the change.
          </p>

        </div>
        <div className="donate-bar donate-bar--right" />
      </section>

      {/* ── Where donations go ── */}
      <section className="donate-impact">

        <h2 className="donate-heading donate-heading--impact">Where do your donations go?</h2>

        <p>
          Your donation to Project Cherish Foundation fuels a wide range of essential initiatives.
          Whether it's{' '}
          <strong>
            advancing cancer research, providing direct support to families in need, or funding our
            ongoing and future projects,
          </strong>{' '}
          your generosity makes a tangible impact. The success of our past initiatives has only been
          possible because of the unwavering support and generous donations from individuals like
          you.{' '}
          <strong>
            Your continued support is crucial to sustaining our mission and driving future success.
          </strong>{' '}
          Thank you for making a real difference—consider donating today to help us reach even
          greater milestones!
        </p>

        {/* PayPal donation button */}
        <a
          className="donate-btn"
          href="https://www.paypal.com/donate/?hosted_button_id=6ETJ3EGALCV5E"
          target="_blank"
          rel="noreferrer"
        >
          Donate Now
        </a>

      </section>
    </>
  )
}
