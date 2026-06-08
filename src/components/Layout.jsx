import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'
import { site } from '../data/site.js'
import './Layout.css'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/counselor', label: 'Counselor' },
  { to: '/graduation', label: 'Graduation' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/program-sequences', label: 'Program Sequences' },
]

export default function Layout({ children }) {
  return (
    <div className="layout">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="container site-header__inner">
          <Link to="/" className="site-header__brand" aria-label={`${site.name} home`}>
            <Logo size="sm" />
            <span className="site-header__tagline">{site.tagline}</span>
          </Link>

          <nav className="site-nav" aria-label="Primary">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  'site-nav__link' + (isActive ? ' site-nav__link--active' : '')
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="main" className="site-main">
        {children}
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div>
            <Logo size="sm" />
            <p className="site-footer__line">{site.fullName}</p>
          </div>
          <div className="site-footer__contact">
            <p>{site.contact.address}</p>
            <p>{site.contact.phone}</p>
            <p>{site.contact.email}</p>
          </div>
        </div>
        <p className="site-footer__note">
          Placeholder site — content marked “TODO” will be replaced with real
          program information.
        </p>
      </footer>
    </div>
  )
}
