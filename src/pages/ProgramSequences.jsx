import { Link } from 'react-router-dom'
import { programs } from '../data/programs.js'
import { programSequences } from '../data/resources.js'
import CourseSequence from '../components/CourseSequence.jsx'

export default function ProgramSequences() {
  return (
    <article className="page">
      <p className="breadcrumb">
        <Link to="/">Home</Link> / {programSequences.title}
      </p>
      <header className="program__header">
        <span className="program__icon" aria-hidden="true">
          {programSequences.icon}
        </span>
        <div>
          <h1>{programSequences.title}</h1>
          <p className="page__lede">{programSequences.lede}</p>
        </div>
      </header>

      {programs.map((p) => (
        <section className="section" key={p.slug}>
          <h2>
            <span aria-hidden="true" style={{ marginRight: 8 }}>
              {p.icon}
            </span>
            <Link to={`/programs/${p.slug}`}>{p.name}</Link>
          </h2>
          <CourseSequence sequence={p.sequence} />
        </section>
      ))}
    </article>
  )
}
