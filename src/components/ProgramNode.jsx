import { Link } from 'react-router-dom'

// A single program node in the radial hub. Positioned absolutely by the parent
// (via the `style` prop with left/top percentages); translated to center on the point.
export default function ProgramNode({ program, style }) {
  return (
    <Link
      to={`/programs/${program.slug}`}
      className="hub__node"
      style={style}
      aria-label={`${program.name} — ${program.tagline}`}
    >
      <span className="hub__node-circle" style={{ borderColor: program.color }}>
        {program.badge ? (
          <img className="hub__node-img" src={program.badge} alt="" />
        ) : (
          <span className="hub__node-icon" aria-hidden="true">
            {program.icon}
          </span>
        )}
      </span>
      <span className="hub__node-label">{program.name}</span>
    </Link>
  )
}
