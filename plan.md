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
