import './GetInvolved.css'
import volunteerBadge from '../get_involved_images/image.png'

// ── Volunteer role definitions ─────────────────────────────────────────────────
// Each entry is rendered as a bullet in the "positions available" list.
const ROLES = [
  { title: 'Blog Writer',           desc: 'Write blog posts on our blog page to let people know of updates.' },
  { title: 'Fundraising Volunteer', desc: 'Help out with fundraiser events.' },
  { title: 'Website Developer',     desc: 'Help design and edit the website.' },
]

// ── Get Involved page ─────────────────────────────────────────────────────────
// Two-column layout: decorative volunteer badge on the left, body text on the right.
export default function GetInvolved() {
  return (
    <section className="get-involved">

      {/* ── Left: volunteer badge image ── */}
      <img src={volunteerBadge} alt="Become a Volunteer" className="volunteer-badge" />

      {/* ── Right: text content ── */}
      <div className="volunteer-content">

        {/* Why volunteer */}
        <p>
          Volunteers are the heart of Project Cherish, as many of our events and projects
          couldn't be accomplished without them. By volunteering, not only do you make an
          impact on kids with pediatric cancer, you also gain volunteer hours that can count
          towards getting the{' '}
          <strong>Presidential Volunteer Service Award.</strong>
        </p>

        {/* Positions available */}
        <p>
          Aside from regular volunteering, there are also different positions you can be in,
          which nets you more volunteer hours:
        </p>

        <ul className="roles-list">
          {ROLES.map(({ title, desc }) => (
            <li key={title}>
              <strong>{title}:</strong> {desc}
            </li>
          ))}
        </ul>

        {/* Call to action */}
        <p>Interested in applying? Click the Google Form below to sign up!</p>

        <a
          className="form-link"
          href="https://forms.gle/LUSvqzP196XyKtZu7"
          target="_blank"
          rel="noreferrer"
        >
          https://forms.gle/LUSvqzP196XyKtZu7
        </a>

      </div>
    </section>
  )
}
