import { useParams, Link } from 'react-router-dom'
import { getProgram } from '../data/programs.js'
import TeacherCard from './TeacherCard.jsx'
import CourseSequence from './CourseSequence.jsx'
import NotFound from '../pages/NotFound.jsx'
import './ProgramPage.css'

export default function ProgramPage() {
  const { slug } = useParams()
  const program = getProgram(slug)

  if (!program) return <NotFound />

  return (
    <article className="page program">
      <p className="breadcrumb">
        <Link to="/">Home</Link> / {program.name}
      </p>

      <header className="program__header">
        <span className="program__icon" style={{ borderColor: program.color }} aria-hidden="true">
          {program.icon}
        </span>
        <div>
          <h1>{program.name}</h1>
          <p className="page__lede">{program.tagline}</p>
        </div>
      </header>

      {/* 1. Program overview */}
      <section className="section">
        <h2>Program Overview</h2>
        <p>{program.overview}</p>
      </section>

      {/* 2. Teacher photo(s) and contact information */}
      <section className="section">
        <h2>Instructor &amp; Contact</h2>
        <div className="program__teachers">
          {program.teachers.map((t, i) => (
            <TeacherCard key={i} teacher={t} />
          ))}
        </div>
      </section>

      {/* 3. Course sequence / program pathway */}
      <section className="section">
        <h2>Course Sequence &amp; Pathway</h2>
        <CourseSequence sequence={program.sequence} />
      </section>

      {/* 4. Certifications or credentials offered */}
      <section className="section">
        <h2>Certifications &amp; Credentials</h2>
        <ul className="program__list">
          {program.certifications.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </section>

      {/* 5. Career opportunities */}
      <section className="section">
        <h2>Career Opportunities</h2>
        <ul className="program__list">
          {program.careers.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </section>

      {/* 6. Student projects / accomplishments / work */}
      <section className="section">
        <h2>Student Work &amp; Accomplishments</h2>
        <div className="program__work">
          {program.studentWork.map((w, i) => (
            <div className="card program__work-item" key={i}>
              <div className="placeholder-img" role="img" aria-label="Student work placeholder">
                <span className="todo">TODO: add image</span>
              </div>
              <h3>{w.title}</h3>
              <p>{w.description}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}
