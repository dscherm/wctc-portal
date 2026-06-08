import { Link } from 'react-router-dom'

// Shared layout for section-based resource pages (Counselor, Leadership, Graduation).
export default function ResourcePageView({ resource }) {
  return (
    <article className="page">
      <p className="breadcrumb">
        <Link to="/">Home</Link> / {resource.title}
      </p>
      <header className="program__header">
        <span className="program__icon" aria-hidden="true">
          {resource.icon}
        </span>
        <div>
          <h1>{resource.title}</h1>
          {resource.lede && <p className="page__lede">{resource.lede}</p>}
        </div>
      </header>

      {resource.sections.map((s, i) => (
        <section className="section" key={i}>
          <h2>{s.heading}</h2>
          {s.body && <p>{s.body}</p>}
          {s.items && (
            <ul className="program__list">
              {s.items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </article>
  )
}
