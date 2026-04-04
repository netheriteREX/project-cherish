import { useState } from 'react'
import './Projects.css'

// ── Image imports (project_images/ folder) ────────────────────────────────────

import pastProjectsImg from '../project_images/past_projects.png'

// Blood Drive @ the Irving Arts Center
import bloodDrive1 from '../project_images/blood_drive1.png'
import bloodDrive2 from '../project_images/blood_drive2.png'
import bloodDrive3 from '../project_images/blood_drive3.png'
import bloodDrive4 from '../project_images/blood_drive4.png'

// Thanksgiving Care Packages
import packages1 from '../project_images/packages1.png'
import packages2 from '../project_images/packages2.png'
import packages3 from '../project_images/packages3.png'

// Card Making Social @ Coppell High School
import cards1 from '../project_images/cards1.png'
import cards2 from '../project_images/cards2.png'
import cards3 from '../project_images/cards3.png'
import cards4 from '../project_images/cards4.png'

// Valentines Day Care Packages with the CHS9 Leo Club
import leoClub1 from '../project_images/leo_club1.png'
import leoClub2 from '../project_images/leo_club2.png'
import leoClub3 from '../project_images/leo_club3.png'
import leoClub4 from '../project_images/leo_club4.png'

// Coppell iLead + Project Cherish
import iLead1 from '../project_images/iLead1.png'
import iLead2 from '../project_images/iLead2.png'
import iLead3 from '../project_images/iLead3.png'

// Coppell Chapter Memories
import memory1 from '../project_images/memory1.png'
import memory2 from '../project_images/memory2.png'
import memory3 from '../project_images/memory3.png'
import memory4 from '../project_images/memory4.png'

// ── Project data ──────────────────────────────────────────────────────────────
// Each entry drives one ProjectSection. Images are shown in a carousel.
// description is null for sections that have no caption text.
const PROJECTS = [
  {
    title: 'Blood Drive @ the Irving Arts Center',
    description: 'We collected 30 units of blood which helped up to 89 patients!',
    images: [bloodDrive1, bloodDrive2, bloodDrive3, bloodDrive4],
  },
  {
    title: 'Thanksgiving Care Packages',
    description:
      "We created 40 Thanksgiving themed care packages to go to patients at the Dallas Children's Hospital! Thank you to our volunteers!",
    images: [packages1, packages2, packages3],
  },
  {
    title: 'Card Making Social @ Coppell High School',
    description:
      'We had a blast eating amazing food and making amazing-er cards for patients! Thank you to the 30+ members in attendance!',
    images: [cards1, cards2, cards3, cards4],
  },
  {
    title: 'Valentines Day Care Packages with the CHS9 Leo Club',
    description:
      'We collaborated with the CHS9 Leo Club to make over 40 valentines day care packages filled with goodies for patients!',
    images: [leoClub1, leoClub2, leoClub3, leoClub4],
  },
  {
    title: 'Coppell iLead + Project Cherish',
    description:
      "For iLead's 2024 service project, members created 48 care packages and cards for the Dallas Children's Hospital! Thank you iLeaders and mentors!",
    images: [iLead1, iLead2, iLead3],
  },
  {
    title: 'Coppell Chapter Memories',
    description: null,
    images: [memory1, memory2, memory3, memory4],
  },
]

// ── Carousel ──────────────────────────────────────────────────────────────────
// Shows up to 3 images at a time. Prev/next arrows shift the visible window
// by one image. Dot indicators show total positions and highlight the current one.
function Carousel({ images }) {
  const [index, setIndex] = useState(0)

  // How many images are visible at once
  const VISIBLE = 3
  // Maximum valid starting index
  const max = Math.max(0, images.length - VISIBLE)

  const prev = () => setIndex((i) => Math.max(0, i - 1))
  const next = () => setIndex((i) => Math.min(max, i + 1))

  return (
    <div className="carousel-wrap">

      {/* ── Slide row ── */}
      <div className="carousel-row">
        <button
          className="carousel-btn"
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous"
        >
          ‹
        </button>

        {/* Visible image strip — sliced from the full images array */}
        <div className="carousel-track">
          {images.slice(index, index + VISIBLE).map((src, i) => (
            <img key={index + i} src={src} alt={`Photo ${index + i + 1}`} />
          ))}
        </div>

        <button
          className="carousel-btn"
          onClick={next}
          disabled={index >= max}
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* ── Dot indicators ── */}
      {/* One dot per possible starting position; clicking a dot jumps there */}
      <div className="carousel-dots">
        {Array.from({ length: max + 1 }).map((_, i) => (
          <button
            key={i}
            className={`dot${i === index ? ' dot--active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to position ${i + 1}`}
          />
        ))}
      </div>

    </div>
  )
}

// ── Project Section ───────────────────────────────────────────────────────────
// One titled block per notable event. The title uses the Caveat handwritten
// font in gold, matching the reference design.
function ProjectSection({ title, description, images }) {
  return (
    <section className="project-section">
      <h2 className="project-title">{title}</h2>
      {description && <p className="project-desc">{description}</p>}
      <Carousel images={images} />
    </section>
  )
}

// ── Projects page ─────────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <>
      {/* Past Projects badge image — used as the page's section header */}
      <div className="past-projects-header">
        <img src={pastProjectsImg} alt="Past Projects" />
      </div>

      {/* One section per project entry */}
      {PROJECTS.map((project) => (
        <ProjectSection key={project.title} {...project} />
      ))}
    </>
  )
}
