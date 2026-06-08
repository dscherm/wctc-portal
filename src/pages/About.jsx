import { Link } from 'react-router-dom'
import Logo from '../components/Logo.jsx'
import { site } from '../data/site.js'

export default function About() {
  return (
    <article className="page">
      <p className="breadcrumb">
        <Link to="/">Home</Link> / About WCTC
      </p>

      <header style={{ textAlign: 'center', marginBottom: '8px' }}>
        <Logo size="lg" />
        <h1>About WCTC</h1>
        <p className="page__lede" style={{ margin: '0 auto' }}>
          {site.fullName}
        </p>
      </header>

      <section className="section">
        <h2>Overview</h2>
        <p>{site.about.overview}</p>
      </section>

      <section className="section">
        <h2>Mission</h2>
        <p>{site.about.mission}</p>
        <h2 style={{ marginTop: '20px' }}>Vision</h2>
        <p>{site.about.vision}</p>
      </section>

      <section className="section">
        <h2>Contact Information</h2>
        <ul className="program__list">
          <li>
            <strong>Address:</strong> {site.contact.address}
          </li>
          <li>
            <strong>Phone:</strong> {site.contact.phone}
          </li>
          <li>
            <strong>Email:</strong> {site.contact.email}
          </li>
          <li>
            <strong>Hours:</strong> {site.contact.hours}
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Important School Resources</h2>
        <ul className="program__list">
          {site.about.resources.map((r) => (
            <li key={r.to}>
              <Link to={r.to}>{r.label}</Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
