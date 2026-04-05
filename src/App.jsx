import { useState } from 'react'
import { HashRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Donate from './Donate'
import GetInvolved from './GetInvolved'
import homeLogo from '../home.png'

// ── Navigation link definitions ───────────────────────────────────────────────
// internal: true  → renders a React Router <NavLink> (client-side navigation)
// internal: false → renders a plain <a> (external site)
const NAV_LINKS = [
  { to: '/about',       label: 'About',       internal: true },
  { to: '/projects',    label: 'Projects',    internal: true },
  { to: '/donate',      label: 'Donate',      internal: true },
  { to: '/get-involved',label: 'Get Involved',internal: true },
]

// ── Header ────────────────────────────────────────────────────────────────────
// Sticky navigation bar shared across all pages.
// On mobile, nav links collapse behind a hamburger toggle button.
function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-inner">

        {/* Logo + site name → both navigate to the home page */}
        <Link to="/" className="logo-link" onClick={() => setMenuOpen(false)}>
          <img src={homeLogo} alt="Project Cherish Foundation Logo" className="logo" />
          <span className="site-title">Project Cherish Foundation</span>
        </Link>

        {/* Hamburger button – only visible on small screens */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Nav links – nav--open class reveals them on mobile */}
        <nav className={`nav${menuOpen ? ' nav--open' : ''}`}>
          {NAV_LINKS.map(({ to, label, internal }) =>
            internal ? (
              // NavLink automatically applies nav-link--active when the route matches
              <NavLink
                key={label}
                to={to}
                className={({ isActive }) => 'nav-link' + (isActive ? ' nav-link--active' : '')}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ) : (
              <a key={label} href={to} className="nav-link">
                {label}
              </a>
            )
          )}
        </nav>

      </div>
    </header>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
// Shared footer with logo, legal text, and social media icons.
function Footer() {
  return (
    <footer className="footer">

      {/* Left: logo + site name + 501(c)(3) legal text */}
      <div className="footer-brand">
        <Link to="/">
          <img src={homeLogo} alt="Project Cherish Foundation Logo" className="logo" />
        </Link>
        <div>
          <Link to="/" className="site-title">Project Cherish Foundation</Link>
          <p className="legal">
            Project Cherish Foundation is a Texas nonprofit organization exempt from federal income
            tax under Section 501(c)(3) of the Internal Revenue Code.
            <br />
            Federal Identification Number (EIN): 85-3088431
          </p>
        </div>
      </div>

      {/* Right: Facebook and Instagram icon links */}
      <div className="social-links">
        <a href="https://www.facebook.com/ProjectCherishFoundation" aria-label="Facebook">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z" />
          </svg>
        </a>
        <a href="https://www.instagram.com/project.cherish" aria-label="Instagram">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.671.31.42.163.72.358 1.035.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.949.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.671-.163.42-.358.72-.673 1.035-.315.315-.615.51-1.035.673-.317.123-.794.27-1.671.31-.949.043-1.233.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.671-.31-.42-.163-.72-.358-1.035-.673-.315-.315-.51-.615-.673-1.035-.123-.317-.27-.794-.31-1.671C4.631 14.688 4.622 14.403 4.622 12s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.671.163-.42.358-.72.673-1.035.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31C9.312 4.631 9.597 4.622 12 4.622M12 3C9.556 3 9.249 3.01 8.289 3.054c-.958.044-1.612.196-2.185.418-.592.23-1.094.538-1.594 1.038-.5.5-.808 1.002-1.038 1.594C3.25 6.677 3.098 7.331 3.054 8.289 3.01 9.249 3 9.556 3 12c0 2.444.01 2.751.054 3.711.044.958.196 1.612.418 2.185.23.592.538 1.094 1.038 1.594.5.5 1.002.808 1.594 1.038.572.222 1.227.375 2.185.418C9.249 20.99 9.556 21 12 21s2.751-.01 3.711-.054c.958-.044 1.612-.196 2.185-.418.592-.23 1.094-.538 1.594-1.038.5-.5.808-1.002 1.038-1.594.222-.572.375-1.227.418-2.185C20.99 14.751 21 14.444 21 12s-.01-2.751-.054-3.711c-.044-.958-.196-1.612-.418-2.185-.23-.592-.538-1.094-1.038-1.594-.5-.5-1.002-.808-1.594-1.038-.572-.222-1.227-.375-2.185-.418C14.751 3.01 14.444 3 12 3zm0 4.378c-2.552 0-4.622 2.069-4.622 4.622S9.448 16.622 12 16.622 16.622 14.552 16.622 12 14.552 7.378 12 7.378zM12 15c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.804-8.884c-.596 0-1.08.484-1.08 1.08s.484 1.08 1.08 1.08c.596 0 1.08-.484 1.08-1.08s-.484-1.08-1.08-1.08z" />
          </svg>
        </a>
      </div>

    </footer>
  )
}

// ── App root ──────────────────────────────────────────────────────────────────
// Wraps the entire app in a BrowserRouter so any component can use
// React Router hooks. Header and Footer are shared across all routes.
export default function App() {
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/"         element={<Home />}     />
          <Route path="/about"    element={<About />}    />
          <Route path="/projects" element={<Projects />} />
          <Route path="/donate"       element={<Donate />}      />
          <Route path="/get-involved" element={<GetInvolved />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}
