import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page" style={{ textAlign: 'center' }}>
      <h1>Page not found</h1>
      <p className="page__lede" style={{ margin: '0 auto 20px' }}>
        Sorry, we couldn’t find that page.
      </p>
      <Link className="btn" to="/">
        Back to home
      </Link>
    </div>
  )
}
