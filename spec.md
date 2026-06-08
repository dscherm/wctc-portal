# WCTC Website Portal — Specification

## Metadata
- **Interview ID:** wctc-portal-2026-06-08
- **Rounds:** 5
- **Final Ambiguity Score:** 16%
- **Type:** greenfield
- **Generated:** 2026-06-08
- **Threshold:** 20%
- **Status:** PASSED
- **Source materials:** `docs/WCTC Website Layout.pdf` (2 pages), `docs/WCTC_Digital_Ecosystem_Website_Blueprint.png` (+ annotated copy)

## Clarity Breakdown
| Dimension | Score | Weight | Weighted |
|-----------|-------|--------|----------|
| Goal Clarity | 0.92 | 0.40 | 0.368 |
| Constraint Clarity | 0.80 | 0.30 | 0.240 |
| Success Criteria | 0.78 | 0.30 | 0.234 |
| **Total Clarity** | | | **0.842** |
| **Ambiguity** | | | **0.158 (16%)** |

---

## Goal
Build a visually engaging, easy-to-navigate **informational web portal** for WCTC's CTE programs. The homepage is a **literal hub-and-spoke** layout: a central multicolor "WCTC" logo (links to *About WCTC*) surrounded by 7 program nodes (each links to a dedicated program page), plus a docked **Administrative & Student Resources** panel. The site lets students, parents, and community members quickly learn about programs, staff, graduation requirements, and student opportunities. Built as a **React + Vite** SPA, run locally now, and structured for a clean handoff to **Firebase Hosting**.

## Constraints
- **Stack:** React + Vite (SPA), React Router for client-side routing.
- **Routing/hosting:** Static build (`dist/`) deployable to Firebase Hosting; SPA rewrites (`** → /index.html`).
- **Content (this build):** **Placeholder scaffold** — every page is structurally complete with realistic placeholder text, placeholder images, and explicit `TODO: replace` markers. No real teacher data/photos required yet.
- **Homepage layout:** Literal radial hub-and-spoke on desktop/tablet (≥900px). **Collapses to a vertical card grid + resources list under 900px** for mobile usability.
- **Logo:** Recreated in code as a swappable SVG/CSS wordmark (red/blue/yellow/green), isolated in a `<Logo>` component so an official `/assets/logo.svg` can replace it in one change.
- **Branding palette:** red, blue, yellow, green (Google-style multicolor) drawn from the logo; defined as CSS custom properties / theme tokens.
- **Content maintainability:** Page content lives in structured data files (`src/data/*.js|json`), not hard-coded in JSX, so non-developers can later edit content and it's a clean path toward a CMS.
- **Accessibility:** Semantic HTML, alt text on images, keyboard-navigable nodes/links, sufficient color contrast.

## Non-Goals
- No real/authentic teacher photos, names, course lists, or student work in this build (placeholders only).
- No backend, database, authentication, or login/portal accounts.
- No CMS integration in this build (data-file structure only, as a future on-ramp).
- No actual Firebase deployment in this build — config is prepared and committed, deploy happens at handoff.
- No pan/zoom canvas or radial-on-mobile; mobile uses the card-grid fallback.
- No Next.js / SSR / server functions.

## Acceptance Criteria
- [ ] `npm install && npm run dev` serves the site locally with no errors.
- [ ] `npm run build` produces a static `dist/` with no errors; `npm run preview` serves it.
- [ ] **Homepage** renders the literal hub-and-spoke at ≥900px: central WCTC wordmark, 7 program nodes radiating around it with connector lines, resources panel docked on the right.
- [ ] Central WCTC logo links to `/about`.
- [ ] Each of the 7 program nodes links to its program page; all 7 routes resolve.
- [ ] Below 900px the homepage collapses to a vertical card grid (programs) + a resources list; everything is tappable and readable.
- [ ] All 4 resource pages (Counselor, Leadership, Graduation Requirements, Program Sequences) exist and are reachable from the resources panel.
- [ ] Every program page contains all 6 required sections (overview, teacher info, course sequence, certifications, careers, student work) with placeholder content + visible `TODO` markers.
- [ ] About page contains overview, mission/vision, contact info, and important school resources.
- [ ] Logo, branding colors, and content are sourced from swappable components/data files (verified by changing one data value and seeing it reflected).
- [ ] Site is keyboard-navigable; images have alt text.
- [ ] `firebase.json` + `.firebaserc` present and configured for static `dist/` + SPA rewrites (not yet deployed).

## Assumptions Exposed & Resolved
| Assumption | Challenge | Resolution |
|------------|-----------|------------|
| "Just build it" implies a tech stack | Which stack fits local-now → Firebase-later? | React + Vite SPA, static deploy |
| Real content is available | Where does teacher/course/student data come from? | Placeholder scaffold with `TODO` markers |
| Blueprint = final design | How literal should the homepage be? | Literal hub-and-spoke (desktop) |
| Literal layout works on phones (Contrarian) | A radial hub is unusable on a phone | Collapse to card grid + resources list <900px |
| An official logo file exists (Simplifier) | Do we have the asset, or recreate it? | Recreate as swappable coded SVG wordmark |

## Technical Context (Greenfield)
**Project layout (target):**
```
wctc/
  index.html
  package.json
  vite.config.js
  firebase.json            # hosting: public=dist, SPA rewrites
  .firebaserc              # placeholder project id
  public/
    assets/                # logo.svg (future), program icons, placeholder images
  src/
    main.jsx
    App.jsx                # Router + Layout
    routes.jsx
    theme.css              # WCTC color tokens (red/blue/yellow/green)
    components/
      Logo.jsx             # swappable SVG wordmark
      Layout.jsx           # header/footer + side nav
      HubSpoke.jsx         # radial (desktop) / grid (mobile)
      ProgramNode.jsx
      ResourcesPanel.jsx
      TeacherCard.jsx
      CourseSequence.jsx
      ProgramPage.jsx      # shared template, driven by data
    data/
      programs.js          # 7 programs, all fields (placeholder)
      resources.js         # counselor/leadership/grad/sequences content
      site.js              # school name, contact, mission/vision
    pages/
      Home.jsx
      About.jsx
      Counselor.jsx
      Leadership.jsx
      Graduation.jsx
      ProgramSequences.jsx
```

**Routes:**
| Path | Page |
|------|------|
| `/` | Home (hub-and-spoke) |
| `/about` | About WCTC (logo target) |
| `/programs/:slug` | Program page (7 slugs) |
| `/counselor` | School Counselor |
| `/leadership` | Leadership |
| `/graduation` | Graduation Requirements |
| `/program-sequences` | Program Sequences |

**Program slugs:** `video-production`, `child-studies`, `automotive`, `construction`, `criminal-justice`, `business`, `biotechnology`.

### Per-page content requirements (from PDF + blueprint)
**About WCTC** — overview; mission & vision; contact information; important school resources.

**Each Program page** — program overview; teacher photo(s) + contact info; course sequence / program pathway; certifications or credentials offered; career opportunities; student projects/accomplishments/examples of work. *(Blueprint subtitles per program, e.g. Criminal Justice → "Law Enforcement, Legal Studies, Career Pathways"; Business → "Entrepreneurship, Marketing, Business Tech"; etc. — used as placeholder taglines.)*

**School Counselor** — counselor info + contact; graduation requirements; course selection info; academic planning resources; college & career planning resources.

**Leadership** — leadership program info; student leadership opportunities; events & activities.

**Graduation Requirements** — credit requirements; required courses; graduation expectations; planning resources for students & families.

**Program Sequences** — recommended course sequence per CTE program, visual roadmap freshman → senior year (all programs).

### Firebase handoff (prepared, not executed)
- `firebase.json`: `{ "hosting": { "public": "dist", "ignore": [...], "rewrites": [{ "source": "**", "destination": "/index.html" }] } }`
- `.firebaserc`: placeholder `default` project id (replace at handoff).
- Build: `npm run build` → `dist/`. Deploy (at handoff): `firebase login && firebase deploy --only hosting`.
- A short `DEPLOY.md` documents the handoff steps.

## Ontology (Key Entities)
| Entity | Type | Fields | Relationships |
|--------|------|--------|---------------|
| Program | core domain | slug, name, tagline, overview, certifications[], careers[], studentWork[] | has many Teachers, has one CourseSequence |
| Teacher | core domain | name, photo, email, phone, bio | belongs to Program |
| CourseSequence | core domain | program, years[{grade, courses[]}] | belongs to Program |
| Certification | supporting | name, issuer | belongs to Program |
| CareerPath | supporting | title, description | belongs to Program |
| StudentWork | supporting | title, media, description | belongs to Program |
| ResourcePage | core domain | slug, title, sections[] | (Counselor / Leadership / Graduation / Sequences) |

## Ontology Convergence
| Round | Entity Count | New | Changed | Stable | Stability Ratio |
|-------|-------------|-----|---------|--------|----------------|
| 1 | 7 | 7 | - | - | N/A |
| 2 | 7 | 0 | 0 | 7 | 100% |
| 3 | 7 | 0 | 0 | 7 | 100% |
| 4 | 7 | 0 | 0 | 7 | 100% |
| 5 | 7 | 0 | 0 | 7 | 100% |

The domain model was stable from round 1 — the PDF defined a clean, fixed entity set. Interview effort went into **constraints and design intent**, not entity discovery.

## Interview Transcript
<details>
<summary>Full Q&A (5 rounds)</summary>

### Round 1 — Targeting: Constraint Clarity
**Q:** What technology stack should the WCTC portal be built on?
**A:** React + Vite (SPA → static `dist/` → Firebase Hosting with rewrites).
**Ambiguity:** 39%

### Round 2 — Targeting: Success Criteria
**Q:** Where does the actual page content come from for this first build?
**A:** Placeholder scaffold — structurally complete, real info marked `TODO`.
**Ambiguity:** 31%

### Round 3 — Targeting: Goal Clarity
**Q:** How literally should the homepage reproduce the blueprint's hub-and-spoke?
**A:** Literal hub-and-spoke.
**Ambiguity:** 27%

### Round 4 — Contrarian Mode — Targeting: Constraint Clarity
**Q:** A radial hub may be unusable on a phone — what should happen on mobile?
**A:** Collapse to a card grid + resources list (literal radial on desktop/tablet).
**Ambiguity:** 20%

### Round 5 — Simplifier Mode — Targeting: Goal Clarity
**Q:** Do you have a real logo file, or should the wordmark be recreated in code?
**A:** Recreate as a swappable CSS/SVG wordmark.
**Ambiguity:** 16% ✅
</details>
