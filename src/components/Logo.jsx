import './Logo.css'

/*
 * WCTC wordmark — recreated in code (per spec) so there is no asset dependency.
 *
 * SWAP LATER: to use an official logo, drop the file at public/assets/logo.svg
 * and replace the <span> block below with:
 *   <img src="/assets/logo.svg" alt="WCTC" className="logo__img" />
 * Nothing else in the app needs to change.
 *
 * Each letter is colored from the brand palette: W=blue, C=red, T=yellow, C=green.
 */
const LETTERS = [
  { ch: 'W', color: 'var(--wctc-blue)' },
  { ch: 'C', color: 'var(--wctc-red)' },
  { ch: 'T', color: 'var(--wctc-yellow)' },
  { ch: 'C', color: 'var(--wctc-green)' },
]

export default function Logo({ size = 'md', title = 'WCTC' }) {
  return (
    <span className={`logo logo--${size}`} role="img" aria-label={title}>
      {LETTERS.map((l, i) => (
        <span key={i} className="logo__letter" style={{ color: l.color }} aria-hidden="true">
          {l.ch}
        </span>
      ))}
    </span>
  )
}
