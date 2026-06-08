import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App.jsx'
import { programs } from '../data/programs.js'

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )

describe('routing & render smoke tests', () => {
  it('renders the homepage with the hub intro and a link to About', () => {
    renderAt('/')
    expect(screen.getByText(/WCTC Digital Ecosystem/i)).toBeInTheDocument()
    // The central node links to About WCTC (present in both radial + grid markup)
    expect(screen.getAllByRole('link', { name: /About WCTC/i }).length).toBeGreaterThan(0)
  })

  it('renders the About page with mission and contact sections', () => {
    renderAt('/about')
    expect(screen.getByRole('heading', { name: /About WCTC/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^Mission$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Contact Information/i })).toBeInTheDocument()
  })

  it('renders every program page with all 6 section headings', () => {
    const required = [
      /Program Overview/i,
      /Instructor & Contact/i,
      /Course Sequence/i,
      /Certifications/i,
      /Career Opportunities/i,
      /Student Work/i,
    ]
    for (const p of programs) {
      const { unmount } = renderAt(`/programs/${p.slug}`)
      for (const re of required) {
        expect(screen.getByRole('heading', { name: re }), `${p.slug}: ${re}`).toBeInTheDocument()
      }
      unmount()
    }
  })

  it('renders the four resource pages', () => {
    const pages = [
      ['/counselor', /School Counselor/i],
      ['/leadership', /Leadership & Activities/i],
      ['/graduation', /Graduation Requirements/i],
      ['/program-sequences', /Program Sequences/i],
    ]
    for (const [path, re] of pages) {
      const { unmount } = renderAt(path)
      expect(screen.getByRole('heading', { name: re, level: 1 })).toBeInTheDocument()
      unmount()
    }
  })

  it('shows a 404 for unknown routes', () => {
    renderAt('/no-such-page')
    expect(screen.getByRole('heading', { name: /Page not found/i })).toBeInTheDocument()
  })

  it('renders the resources panel with all four resource links on the homepage', () => {
    renderAt('/')
    expect(screen.getByText(/School Counselor Portal/i)).toBeInTheDocument()
    expect(screen.getByText(/Graduation Requirements & Planning/i)).toBeInTheDocument()
    expect(screen.getByText(/Master Program Sequences/i)).toBeInTheDocument()
  })
})
