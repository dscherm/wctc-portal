# plan.md — wctc

Task queue for Ralph Loop. JSON blocks in triple-backtick fences.
Only ONE task per iteration. Mark `"passes": true` when complete.
Source of truth for requirements: `spec.md`.

---

### Phase 0: Verify Setup

```json
{
  "category": "setup",
  "priority": 1,
  "description": "Scaffold Vite+React, install deps, confirm dev/build run clean",
  "steps": [
    "package.json, vite.config.js, index.html in place",
    "npm install succeeds",
    "npm run build produces dist/ with no errors"
  ],
  "passes": true
}
```

### Phase 1: App shell & theme

```json
{
  "category": "feature",
  "priority": 2,
  "description": "React Router app shell, Layout, theme tokens, swappable Logo component",
  "steps": [
    "src/main.jsx + App.jsx with BrowserRouter and all routes",
    "theme.css with WCTC red/blue/yellow/green color tokens",
    "Logo.jsx: coded multicolor SVG/CSS wordmark, swappable",
    "Layout.jsx: header + footer + side nav"
  ],
  "passes": true
}
```

### Phase 2: Content data layer (placeholder scaffold)

```json
{
  "category": "feature",
  "priority": 3,
  "description": "Structured placeholder data for programs, resources, and site info with TODO markers",
  "steps": [
    "src/data/site.js (name, contact, mission/vision)",
    "src/data/programs.js (7 programs, all 6 sections each, TODO markers)",
    "src/data/resources.js (counselor, leadership, graduation, sequences)"
  ],
  "passes": true
}
```

### Phase 3: Homepage hub-and-spoke

```json
{
  "category": "feature",
  "priority": 4,
  "description": "Literal radial hub-and-spoke on >=900px, collapse to card grid + resources list below 900px",
  "steps": [
    "HubSpoke.jsx: central Logo (links /about), 7 ProgramNodes radial with connectors",
    "ResourcesPanel.jsx docked right (desktop) / list (mobile)",
    "Responsive: radial >=900px, vertical card grid <900px",
    "All 7 nodes link to /programs/:slug; logo links /about"
  ],
  "passes": true
}
```

### Phase 4: Program page template + 7 pages

```json
{
  "category": "feature",
  "priority": 5,
  "description": "ProgramPage template driven by data; renders all 6 required sections",
  "steps": [
    "ProgramPage.jsx route /programs/:slug",
    "Sections: overview, TeacherCard(s), CourseSequence, certifications, careers, student work",
    "All 7 program slugs resolve and render placeholder content"
  ],
  "passes": true
}
```

### Phase 5: Resource & About pages

```json
{
  "category": "feature",
  "priority": 6,
  "description": "About, School Counselor, Leadership, Graduation Requirements, Program Sequences pages",
  "steps": [
    "About: overview, mission/vision, contact, important resources",
    "Counselor: contact, grad reqs, course selection, academic + college/career planning",
    "Leadership: program info, opportunities, events/activities",
    "Graduation: credits, required courses, expectations, family planning resources",
    "ProgramSequences: visual roadmap freshman->senior for all programs"
  ],
  "passes": true
}
```

### Phase 6: Verify & document

```json
{
  "category": "verification",
  "priority": 7,
  "description": "Validate all acceptance criteria from spec.md",
  "steps": [
    "npm run build clean; npm run preview serves",
    "All routes resolve; logo->about; nodes->programs",
    "Mobile collapse verified at <900px",
    "All TODO placeholders visibly marked; alt text + keyboard nav present"
  ],
  "passes": true
}
```

---

# Part 2 — Authenticated In-Place Content Editing

Source of truth: `.claude/.ralph-spec.md` → "Part 2 — Authenticated In-Place
Content Editing". Ordered so security rules (Phase 11) land before edit writes
(Phases 12–13) are exposed. Do not deploy edit mode to a live Firebase project
until Phase 11 rules are in place.

### Phase 7: Firebase project & SDK wiring

```json
{
  "category": "setup",
  "priority": 8,
  "description": "Add Firebase SDK + app init (Auth/Firestore/Storage) via env; app still renders the static view version when Firebase is unconfigured/offline",
  "steps": [
    "Add firebase dependency; src/firebase.js inits app, auth, firestore, storage from VITE_FIREBASE_* env vars",
    "Expose isFirebaseConfigured flag; if config missing, app renders read-only view version (no crash)",
    ".env.example with VITE_FIREBASE_* keys; real .env gitignored",
    "DEPLOY.md: list Firebase products to enable (Email/Password Auth, Firestore, Storage)"
  ],
  "passes": false
}
```

### Phase 8: Content store + seed + read-with-fallback

```json
{
  "category": "feature",
  "priority": 9,
  "description": "Move content to Firestore (programs/{slug}, pages/{pageId}); seed from src/data/*; components read via a content provider with static fallback",
  "steps": [
    "Firestore schema: programs/{slug} docs + pages/{pageId} docs (about, counselor, leadership, graduation, program-sequences, home)",
    "Idempotent seed script tools/seed-firestore.mjs pushes src/data/* into Firestore",
    "ContentProvider/useContent: read live from Firestore, fall back to static src/data/* when offline or unconfigured",
    "Refactor HubSpoke, ProgramPage, About, resource pages, Home to consume useContent instead of importing data directly",
    "Tests: provider returns seed data as fallback; shapes still satisfy existing data tests"
  ],
  "passes": false
}
```

### Phase 9: Authentication (login / logout)

```json
{
  "category": "feature",
  "priority": 10,
  "description": "Username/password login mapped to Firebase Auth; auth context with role + programSlug from custom claims; session persistence; login UI",
  "steps": [
    "AuthProvider context: currentUser, role, programSlug, login(username, password), logout()",
    "Username->email mapping: bare username + fixed domain (e.g. automotive -> automotive@edit.wctc.local)",
    "Login route/modal: username + password form, error handling, return to originating page",
    "Session persists across refresh (Firebase persistence); logout returns browser to view version"
  ],
  "passes": false
}
```

### Phase 10: Account provisioning + custom claims

```json
{
  "category": "security",
  "priority": 11,
  "description": "Admin-run script to create the 1 admin + per-program accounts and set role/programSlug custom claims",
  "steps": [
    "tools/provision-accounts.mjs (Firebase Admin SDK): create admin (role=admin) + one account per program slug (role=program, programSlug=slug)",
    "Passwords from config/env; convention wctc<Program><Year>; rotatable by re-running",
    "Service-account key handling documented and gitignored (never committed)",
    "Verify role + programSlug custom claims appear in the client ID token after login; document provisioning + rotation in DEPLOY.md"
  ],
  "passes": false
}
```

### Phase 11: Security rules (public read / role-scoped write)

```json
{
  "category": "security",
  "priority": 12,
  "description": "Author and test firestore.rules + storage.rules: public read; program editor writes only its own program doc; admin writes everything. MUST precede exposing edit writes.",
  "steps": [
    "firestore.rules: read all; write programs/{slug} if admin OR (role==program AND token.programSlug==slug); write pages/* only if admin",
    "storage.rules: read all images; write under programs/{slug}/* and pages/* with same role checks + size/type limits",
    "Wire rules + emulator config into firebase.json; commit firestore.rules and storage.rules",
    "Emulator tests: program editor cannot write another program or any pages/* doc; admin can; public cannot write anything"
  ],
  "passes": false
}
```

### Phase 12: In-place edit mode (text)

```json
{
  "category": "feature",
  "priority": 13,
  "description": "Edit toggle for authorized editors; inline-editable scoped text fields; save to Firestore; cancel discards. Visitors always see the view version.",
  "steps": [
    "Edit toggle visible only when the logged-in user has rights to the current page (program editor -> own page; admin -> any page)",
    "Inline editable text for the scoped fields per the spec's editable-scope table (program pages, About, menu/resource pages, Home)",
    "Save writes changed fields to the matching Firestore doc with error handling; Cancel reverts unsaved edits",
    "Logged-out/unauthorized users see no edit affordances; view version is byte-identical to Part 1 render"
  ],
  "passes": false
}
```

### Phase 13: Image editing (Firebase Storage)

```json
{
  "category": "feature",
  "priority": 14,
  "description": "Replace editable images via upload to Firebase Storage; persist the new URL in Firestore",
  "steps": [
    "Image-replace control in edit mode for badge/hero, teacher photos, student-work images, and page images",
    "Upload to a Storage path keyed by program/page; enforce size/type client-side (rules enforce server-side)",
    "On success write the new download URL into the Firestore doc; image updates for all visitors",
    "Replacing a TODO/placeholder image works end-to-end"
  ],
  "passes": false
}
```

### Phase 14: Verify, test & document Part 2

```json
{
  "category": "verification",
  "priority": 15,
  "description": "Validate all Part 2 acceptance criteria; run mandatory post-task validation; update docs",
  "steps": [
    "Every Part 2 acceptance criterion passes, including negative role checks (rule-rejected writes)",
    "npm test green incl. content-fallback + rules-emulator tests; npm run build clean; deploy works against live Firebase",
    "Run post-task validation strategies (contract/mutation/property/e2e) and document results",
    "README + DEPLOY.md updated: Firebase products, env vars, seeding, account provisioning, rules deploy"
  ],
  "passes": false
}
```
