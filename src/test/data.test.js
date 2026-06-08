import { describe, it, expect } from 'vitest'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { programs, getProgram } from '../data/programs.js'
import { counselor, leadership, graduation } from '../data/resources.js'
import { site } from '../data/site.js'

// 10 real WACTC programs (from woonsocketschools.com) + 2 project extras.
const EXPECTED_SLUGS = [
  'automotive',
  'computer-science',
  'digital-media',
  'biotechnology',
  'construction',
  'graphic-design',
  'hospitality',
  'child-studies',
  'culinary-arts',
  'health-careers',
  'criminal-justice',
  'business',
]

// Programs mirrored from the live WACTC site carry a real badge image.
const REAL_SITE_SLUGS = EXPECTED_SLUGS.filter(
  (s) => s !== 'criminal-justice' && s !== 'business',
)

describe('programs data', () => {
  it('has exactly the expected programs', () => {
    expect(programs).toHaveLength(EXPECTED_SLUGS.length)
    expect(programs.map((p) => p.slug).sort()).toEqual([...EXPECTED_SLUGS].sort())
  })

  it('every real WACTC program has a badge image that exists in /public', () => {
    for (const slug of REAL_SITE_SLUGS) {
      const p = getProgram(slug)
      expect(p.badge, `${slug} badge`).toMatch(/^\/assets\/programs\/.+\.jpg$/)
      const filePath = join(process.cwd(), 'public', p.badge)
      expect(existsSync(filePath), `${slug} badge file missing: ${p.badge}`).toBe(true)
    }
  })

  it('has unique slugs', () => {
    const slugs = programs.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('each program has all 6 required content sections', () => {
    for (const p of programs) {
      expect(p.name, `${p.slug} name`).toBeTruthy()
      expect(p.tagline, `${p.slug} tagline`).toBeTruthy()
      expect(p.overview, `${p.slug} overview`).toBeTruthy()
      expect(p.teachers.length, `${p.slug} teachers`).toBeGreaterThan(0)
      expect(p.sequence.length, `${p.slug} sequence`).toBe(4) // freshman -> senior
      expect(p.certifications.length, `${p.slug} certifications`).toBeGreaterThan(0)
      expect(p.careers.length, `${p.slug} careers`).toBeGreaterThan(0)
      expect(p.studentWork.length, `${p.slug} studentWork`).toBeGreaterThan(0)
    }
  })

  it('every teacher has contact fields', () => {
    for (const p of programs) {
      for (const t of p.teachers) {
        expect(t.name).toBeTruthy()
        expect(t.email).toBeTruthy()
        expect(t.phone).toBeTruthy()
      }
    }
  })

  it('course sequences cover all four grade levels', () => {
    const grades = ['Freshman', 'Sophomore', 'Junior', 'Senior']
    for (const p of programs) {
      expect(p.sequence.map((y) => y.grade)).toEqual(grades)
    }
  })

  it('getProgram resolves a known slug and rejects an unknown one', () => {
    expect(getProgram('automotive')).toBeTruthy()
    expect(getProgram('does-not-exist')).toBeUndefined()
  })
})

describe('resource pages data', () => {
  it.each([
    ['counselor', counselor],
    ['leadership', leadership],
    ['graduation', graduation],
  ])('%s has a title and at least one section', (_name, resource) => {
    expect(resource.title).toBeTruthy()
    expect(resource.sections.length).toBeGreaterThan(0)
    for (const s of resource.sections) {
      expect(s.heading).toBeTruthy()
    }
  })
})

describe('site data', () => {
  it('exposes mission, vision, contact, and resource links', () => {
    expect(site.about.mission).toBeTruthy()
    expect(site.about.vision).toBeTruthy()
    expect(site.about.overview).toBeTruthy()
    expect(site.contact.email).toBeTruthy()
    expect(site.about.resources.length).toBeGreaterThan(0)
  })
})
