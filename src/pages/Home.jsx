import HubSpoke from '../components/HubSpoke.jsx'
import './Home.css'

export default function Home() {
  return (
    <div className="home container">
      <section className="home__intro">
        <h1 className="home__title">WCTC Digital Ecosystem</h1>
        <p className="home__sub">
          Explore our Career &amp; Technical Education programs. Select the{' '}
          <strong>WCTC</strong> logo to learn about our mission, choose a program
          to see its pathway, or use the resources panel for counseling,
          graduation, leadership, and program sequences.
        </p>
      </section>

      <HubSpoke />
    </div>
  )
}
