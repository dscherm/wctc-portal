# WCTC Portal

A visually engaging, easy-to-navigate informational web portal for **WCTC's CTE programs**.
The homepage is a literal **hub-and-spoke** layout — a central multicolor WCTC wordmark
surrounded by 7 program nodes — that collapses to a mobile-friendly card grid under 900px.

Built as a **React + Vite** single-page app, structured for a clean handoff to **Firebase Hosting**.

> **Status:** placeholder scaffold. Every page is structurally complete with realistic
> placeholder text/images and explicit `TODO: replace` markers. No real teacher data,
> photos, or course lists are committed yet.

---

## Quick start (local)

```bash
npm install
npm run dev        # http://localhost:5173
```

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Produce a static production build in `dist/` |
| `npm run preview` | Serve the built `dist/` locally to verify the production bundle |
| `npm test` | Run the Vitest suite (data integrity + route render smoke tests) |
| `npm run test:watch` | Run tests in watch mode |

---

## How it's organized

```
src/
  components/   Logo, Layout, HubSpoke, ProgramNode, ResourcesPanel, ProgramPage, …
  data/         programs.js · resources.js · site.js   ← all page content lives here
  pages/        Home, About, Counselor, Leadership, Graduation, ProgramSequences
  routes.jsx    Route table (7 program slugs + resource pages)
  theme.css     WCTC color tokens (red / blue / yellow / green)
```

Two things are deliberately swappable so non-developers can take over later:

- **Content** lives in `src/data/*.js`, not hard-coded in JSX. Edit those files to replace
  the `TODO` placeholders with real program / teacher / course information.
- **The logo** is isolated in `src/components/Logo.jsx`. Drop an official `public/assets/logo.svg`
  and point the component at it to swap the wordmark in one change.

### Routes

| Path | Page |
|------|------|
| `/` | Home (hub-and-spoke) |
| `/about` | About WCTC (the central logo links here) |
| `/programs/:slug` | Program page — `video-production`, `child-studies`, `automotive`, `construction`, `criminal-justice`, `business`, `biotechnology` |
| `/counselor` | School Counselor |
| `/leadership` | Leadership |
| `/graduation` | Graduation Requirements |
| `/program-sequences` | Program Sequences |

---

## Deploying to Firebase Hosting

The production build is a static `dist/` folder served by Firebase Hosting with SPA rewrites
(so deep links and refreshes resolve through React Router). The config (`firebase.json`,
`.firebaserc`) is committed but **not yet pointed at a live project**.

When you have your Firebase account ready, follow **[DEPLOY.md](./DEPLOY.md)** — it covers both
the manual `firebase deploy` path and the automated GitHub Actions path.

```bash
# the short version, once your Firebase project exists:
npm install -g firebase-tools
firebase login
firebase use --add            # pick your project → updates .firebaserc
npm run build
firebase deploy --only hosting
```

---

## Tech

React 18 · Vite 5 · React Router 6 · Vitest. No backend, database, or authentication —
Firebase Hosting alone serves the whole site.
