import { Link } from 'react-router-dom'
import './ResourcesPanel.css'

// Administrative & Student Resources — the docked side menu from the blueprint.
const resourceLinks = [
  {
    to: '/counselor',
    icon: '🧑‍🏫',
    title: 'School Counselor Portal',
    blurb: 'Counselor contact, academic planning, college/career resources',
  },
  {
    to: '/graduation',
    icon: '🎓',
    title: 'Graduation Requirements & Planning',
    blurb: 'Credit guide, required courses, family planning resources',
  },
  {
    to: '/leadership',
    icon: '📣',
    title: 'Leadership & Activities',
    blurb: 'Leadership program, student opportunities, school events',
  },
  {
    to: '/program-sequences',
    icon: '🗺️',
    title: 'Master Program Sequences',
    blurb: 'Visual roadmap: freshman to senior year (all programs)',
  },
]

export default function ResourcesPanel() {
  return (
    <aside className="resources" aria-label="Administrative and Student Resources">
      <h2 className="resources__title">Administrative &amp; Student Resources</h2>
      <ul className="resources__list">
        {resourceLinks.map((r) => (
          <li key={r.to}>
            <Link to={r.to} className="resources__item">
              <span className="resources__icon" aria-hidden="true">
                {r.icon}
              </span>
              <span>
                <span className="resources__item-title">{r.title}</span>
                <span className="resources__item-blurb">{r.blurb}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
