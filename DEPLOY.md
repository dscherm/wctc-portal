# Deploying the WCTC Portal to Firebase Hosting

The site is a static React + Vite SPA. Local development uses the Vite dev server;
production is a static `dist/` folder served by Firebase Hosting with SPA rewrites.

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
```

## Production build (local preview)

```bash
npm run build      # outputs static site to dist/
npm run preview    # serve the built dist/ locally to verify
```

## Firebase handoff (one-time)

1. Install the Firebase CLI (once, globally):
   ```bash
   npm install -g firebase-tools
   ```
2. Log in:
   ```bash
   firebase login
   ```
3. Point the project at your Firebase project — edit `.firebaserc` and replace
   `REPLACE_WITH_FIREBASE_PROJECT_ID` with your real Firebase project id
   (or run `firebase use --add` and pick it interactively).

## Deploy

```bash
npm run build
firebase deploy --only hosting
```

`firebase.json` is already configured:
- `public: "dist"` — serves the Vite build output
- SPA `rewrites` — every route falls back to `/index.html` so client-side
  routing (React Router) works on deep links / refreshes
- long-lived cache headers on hashed `js`/`css` assets

## Notes
- No backend, database, or auth — Hosting alone is sufficient.
- Swap the coded logo for an official asset by replacing `src/components/Logo.jsx`
  (or dropping `public/assets/logo.svg` and pointing the component at it).
- Page content lives in `src/data/` — edit those files to replace the `TODO`
  placeholder content with real program/teacher/course information.
