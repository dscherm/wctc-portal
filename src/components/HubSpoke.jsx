import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import ProgramNode from './ProgramNode.jsx'
import ResourcesPanel from './ResourcesPanel.jsx'
import { programs } from '../data/programs.js'
import './HubSpoke.css'

// Pre-compute radial coordinates (percent of stage) for each program node.
// Distribute evenly around a circle, starting at the top (-90deg).
const RADIUS = 39 // percent from center
const nodePositions = programs.map((p, i) => {
  const angle = (-90 + i * (360 / programs.length)) * (Math.PI / 180)
  return {
    ...p,
    cx: 50 + RADIUS * Math.cos(angle),
    cy: 50 + RADIUS * Math.sin(angle),
  }
})

export default function HubSpoke() {
  return (
    <div className="hub">
      <div className="hub__stage" aria-hidden="false">
        {/* ---------- Desktop / tablet: literal radial hub-and-spoke ---------- */}
        <div className="hub__radial" role="navigation" aria-label="Programs (radial)">
          {/* Connector lines from the central node out to each program */}
          <svg className="hub__connectors" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {nodePositions.map((n) => (
              <line
                key={n.slug}
                x1="50"
                y1="50"
                x2={n.cx}
                y2={n.cy}
                stroke="var(--line)"
                strokeWidth="0.4"
                strokeDasharray="1.4 1.4"
              />
            ))}
          </svg>

          {/* Central WCTC identity node -> About WCTC */}
          <Link to="/about" className="hub__center" aria-label="About WCTC">
            <Logo size="xl" />
            <span className="hub__center-caption">About WCTC</span>
          </Link>

          {/* Program nodes radiating around the center */}
          {nodePositions.map((n) => (
            <ProgramNode key={n.slug} program={n} style={{ left: `${n.cx}%`, top: `${n.cy}%` }} />
          ))}
        </div>

        {/* ---------- Mobile: collapse to a card grid ---------- */}
        <div className="hub__grid">
          <Link to="/about" className="hub__grid-center">
            <Logo size="lg" />
            <span>About WCTC →</span>
          </Link>
          <ul className="hub__cards">
            {programs.map((p) => (
              <li key={p.slug}>
                <Link to={`/programs/${p.slug}`} className="program-card">
                  <span className="program-card__icon" style={{ borderColor: p.color }} aria-hidden="true">
                    {p.badge ? (
                      <img className="program-card__img" src={p.badge} alt="" />
                    ) : (
                      p.icon
                    )}
                  </span>
                  <span className="program-card__text">
                    <span className="program-card__name">{p.name}</span>
                    <span className="program-card__tag">{p.tagline}</span>
                  </span>
                  <span className="program-card__chev" aria-hidden="true">›</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Administrative & Student Resources — docked right (desktop) / list (mobile) */}
      <ResourcesPanel />
    </div>
  )
}
