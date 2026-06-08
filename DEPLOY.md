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

## Automated deploy (GitHub Actions)

A workflow at `.github/workflows/firebase-deploy.yml` builds and deploys on every push
to `master`. It is **dormant until configured** — the build job always runs, but the
deploy job is guarded and skips cleanly until you add the deploy secret. Nothing fails
in the meantime.

To activate it once your Firebase account exists:

1. **Create the Firebase project** and set its id in `.firebaserc` (replace
   `REPLACE_WITH_FIREBASE_PROJECT_ID`).
2. **Generate a service-account key:**
   Firebase console → ⚙ Project settings → **Service accounts** →
   **Generate new private key** → downloads a JSON file.
3. **Add it as a GitHub repo secret:**
   GitHub repo → **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `FIREBASE_SERVICE_ACCOUNT`
   - Value: paste the **entire contents** of the downloaded JSON file
4. **Set the project id in the workflow:** edit `.github/workflows/firebase-deploy.yml`
   and replace the `FIREBASE_PROJECT_ID` env value to match `.firebaserc`.

Push to `master` (or use **Actions → Deploy to Firebase Hosting → Run workflow**) and the
deploy job will run.

### Handoff checklist (when you get the new Firebase account)
- [ ] `firebase login` with the correct account
- [ ] `firebase use --add` → updates `.firebaserc` with the real project id
- [ ] Manual deploy works: `npm run build && firebase deploy --only hosting`
- [ ] (Optional, for CI) `FIREBASE_SERVICE_ACCOUNT` secret added to GitHub
- [ ] (Optional, for CI) `FIREBASE_PROJECT_ID` set in the workflow file

## Notes
- No backend, database, or auth — Hosting alone is sufficient.
- Swap the coded logo for an official asset by replacing `src/components/Logo.jsx`
  (or dropping `public/assets/logo.svg` and pointing the component at it).
- Page content lives in `src/data/` — edit those files to replace the `TODO`
  placeholder content with real program/teacher/course information.
