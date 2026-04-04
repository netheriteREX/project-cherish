import './About.css'

// ── Image imports (about_images/ folder) ─────────────────────────────────────
import posterImg       from '../about_images/poster.png'
import impactImg       from '../about_images/impact.png'
import meetTheTeamImg  from '../about_images/meet_the_team.png'

// Leadership team photos
import varshiniImg from '../about_images/varshini.png'
import josheecaImg from '../about_images/josheeca.png'
import sahanaImg   from '../about_images/sahana.png'

// Coppell chapter photos
import ashiaImg    from '../about_images/ashia.png'
import satyaImg    from '../about_images/satya.png'
import yashithaImg from '../about_images/yashitha.png'
import harshiniImg from '../about_images/harshini.png'

// ── Team data ─────────────────────────────────────────────────────────────────

// Founding leadership team shown in the main "Meet the Team" section
const LEADERSHIP = [
  { name: 'Varshini Byreddy',   role: 'Co-founder & COO', img: varshiniImg },
  { name: 'Josheeca Ravindran', role: 'Co-founder & CEO', img: josheecaImg },
  { name: 'Sahana Prochava',    role: 'CIO',             img: sahanaImg   },
]

// Coppell chapter members shown in the section below leadership
const COPPELL_CHAPTER = [
  { name: 'Ashia Agarwal',      role: 'Vice President',    img: ashiaImg    },
  { name: 'Satya Magil',        role: 'Secretary',         img: satyaImg    },
  { name: 'Yashitha Chandra',   role: 'Treasurer',         img: yashithaImg },
  { name: 'Harshini Gadewerki', role: 'Marketing Manager', img: harshiniImg },
]

// ── Impact statistics ─────────────────────────────────────────────────────────
const IMPACT_STATS = [
  { value: '$10,000+', label: 'dollars raised'        },
  { value: '130+',     label: 'patients reached'      },
  { value: '100+',     label: 'care packages donated' },
  { value: '40+',      label: 'awareness events'      },
]

// ── Our Story ─────────────────────────────────────────────────────────────────
// Origin story of the foundation, told through three paragraphs and a
// highlighted mission statement at the bottom.
function OurStory() {
  return (
    <section className="our-story">
      <h2 className="story-heading">Our Story:</h2>

      <p>
        Project Cherish Foundation was born out of a deeply personal experience. In 2020, our
        co-founder, Varshini, was diagnosed with Ewing's sarcoma at just 12 years old. Due to the
        pandemic, Varshini experienced long stretches of isolation during her hospital stays. While
        her family was by her side, she noticed that many other pediatric cancer patients didn't have
        the same support. That realization sparked the start of the Project Cherish Foundation—with
        the simple mission of creating a community for these kids, reminding them they weren't alone
        in this fight.
      </p>

      <p>
        We started off by creating care packages specifically designed to provide comfort to
        pediatric cancer patients. These packages included plush blankets, cozy socks, silk
        pillowcase, and fun games—simple items that made a real difference during Varshini's
        treatment. Apart from our care package donations, we also held multiple donation drives and
        a blood drive to further support our cause.
      </p>

      <p>
        As we grew, we're taking Project Cherish Foundation in a new direction. We're focusing on
        creating scholarships for survivors and patients to continue their education, aiding families
        in need of financial assistance, and increasing our contributions to pediatric cancer
        research. At the same time, we remain dedicated to creating care packages for our amazing
        patients and spreading awareness about pediatric cancers.
      </p>

      {/* Highlighted mission statement at the bottom of the section */}
      <p className="mission-statement">
        Our mission remains the same: to unite our community to support pediatric cancer patients
        and their families and provide them with meaningful resources.
      </p>
    </section>
  )
}

// ── Poster Banner ─────────────────────────────────────────────────────────────
// Full-width photo used as a visual divider between the story and impact sections.
function PosterBanner() {
  return (
    <div className="poster-banner">
      <img src={posterImg} alt="Project Cherish Foundation" />
    </div>
  )
}

// ── Impact ────────────────────────────────────────────────────────────────────
// Section showing key statistics. The impact.png image acts as the section's
// decorative badge heading. Stats are displayed in a horizontal row.
function Impact() {
  return (
    <section className="impact-section">
      {/* Badge-style section heading image */}
      <img src={impactImg} alt="Impact" className="section-badge" />

      {/* Four stat tiles on a light yellow background */}
      <div className="stats-grid">
        {IMPACT_STATS.map(({ value, label }) => (
          <div key={label} className="stat-tile">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Team Card ─────────────────────────────────────────────────────────────────
// Reusable card used in both the Leadership and Coppell Chapter grids.
// Layout: photo → role (small gray) → name (bold).
// circular=true applies a round face-crop style (used for the chapter grid).
function TeamCard({ name, role, img, circular = false }) {
  return (
    <div className={`team-card${circular ? ' team-card--circular' : ''}`}>
      <img src={img} alt={name} />
      <p className="team-role">{role}</p>
      <p className="team-name">{name}</p>
    </div>
  )
}

// ── Meet the Team ─────────────────────────────────────────────────────────────
// Displays the founding leadership team. meet_the_team.png is used as the
// decorative section heading badge (same style as the impact badge).
function MeetTheTeam() {
  return (
    <section className="team-section">
      {/* Badge-style section heading image */}
      <img src={meetTheTeamImg} alt="Meet the Team" className="section-badge" />

      <div className="team-grid">
        {LEADERSHIP.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  )
}

// ── Coppell Chapter ───────────────────────────────────────────────────────────
// Displays the Coppell chapter members beneath the leadership team.
// The heading is styled with CSS to match the badge aesthetic of the other sections.
function CoppellChapter() {
  return (
    <section className="team-section">
      {/* Text-based badge styled to match the image badges above */}
      <div className="chapter-badge">Coppell Chapter</div>

      <div className="team-grid">
        {COPPELL_CHAPTER.map((member) => (
          <TeamCard key={member.name} {...member} circular />
        ))}
      </div>
    </section>
  )
}

// ── About page ────────────────────────────────────────────────────────────────
export default function About() {
  return (
    <>
      <OurStory />
      <PosterBanner />
      <Impact />
      <MeetTheTeam />
      <CoppellChapter />
    </>
  )
}
