import { useState } from 'react'

// Images now live in the home_images/ folder at the project root
import missionImg from '../home_images/mission.png'
import valuesImg  from '../home_images/values.png'
import contactImg from '../home_images/contact.png'

// ── Values accordion data ─────────────────────────────────────────────────────
// Each entry is rendered as a native <details> element (no JS state needed).
const VALUES = [
  {
    title: 'Cherish',
    text: 'We honor and cherish every moment and milestone in the lives of the children and families we support, celebrating their courage and resilience.',
  },
  {
    title: 'Student Leadership',
    text: 'As a student-led organization, we cultivate student leadership by engaging and empowering young people to take active roles in advocacy, fundraising, and volunteer efforts.',
  },
  {
    title: 'Awareness',
    text: 'The first step towards solving any issue is raising awareness. We dedicate ourselves to raising awareness about pediatric cancer, educating the public, and advocating for increased support and resources to combat this disease.',
  },
  {
    title: 'Community',
    text: 'We foster a sense of community, ensuring that no child or family faces their battle alone. Through our events, programs, and outreach efforts, we build a network of support and solidarity.',
  },
]

// ── Hero ──────────────────────────────────────────────────────────────────────
// Large centered headline with the organization's tagline and an inspiring quote.
function Hero() {
  return (
    <section className="hero">
      <h1>Together for Kids, Together Against Cancer</h1>
      <blockquote>
        <p>
          "There is no power for change greater than a community discovering what it cares about."
        </p>
        <cite>— Margret J. Wheatly</cite>
      </blockquote>
    </section>
  )
}

// ── Mission ───────────────────────────────────────────────────────────────────
// Two-column layout: mission photo on the left, mission statement on the right.
function Mission() {
  return (
    <section className="mission">
      <img src={missionImg} alt="Our Mission" />
      <p>
        Project Cherish Foundation is dedicated to uniting our community to support pediatric cancer
        patients and their families through fundraising, spreading awareness, and contributing to
        advancements in research.
      </p>
    </section>
  )
}

// ── Values ────────────────────────────────────────────────────────────────────
// Expandable accordion of core organizational values, with a photo on the right.
// Uses the native <details>/<summary> elements for zero-JS interactivity.
function Values() {
  return (
    <section className="values">
      <div className="values-list">
        {VALUES.map(({ title, text }) => (
          <details key={title} className="value-item">
            <summary>{title}</summary>
            <p>{text}</p>
          </details>
        ))}
      </div>
      <img src={valuesImg} alt="Our Values" />
    </section>
  )
}

// ── Contact ───────────────────────────────────────────────────────────────────
// Two-column layout: photo on the left, contact form on the right.
// Controlled form with local state; shows a thank-you message on submit.
function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact">
      <img src={contactImg} alt="Contact Us" />
      <div className="contact-form-wrap">
        {submitted ? (
          <p className="success-msg">Thank you! We'll be in touch soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="name-row">
              <input
                name="firstName"
                placeholder="First *"
                required
                value={form.firstName}
                onChange={handleChange}
              />
              <input
                name="lastName"
                placeholder="Last *"
                required
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
            <input
              name="email"
              type="email"
              placeholder="Email *"
              required
              value={form.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Comment or Message"
              value={form.message}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </section>
  )
}

// ── Home page ─────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Values />
      <Contact />
    </>
  )
}
