# wctc

<!-- ralph-universal: auto-injected context -->
@.claude/.ralph-lessons.md
@.claude/.ralph-spec.md
@.claude/.ralph-pending-reviews.md
@.claude/.ralph-handoff.md
@.claude/.ralph-precompact.md
@.claude/.ralph-human-requests.md
@.claude/.ralph-scope.md
@.claude/.ralph-bridge-resume.md
@.claude/.ralph-bootstrap-needed.md

## Ralph Loop

This project uses the Universal Ralph Loop at `~/unpossible-ralph/` (GitHub: dscherm/unpossible-ralph).

```bash
~/unpossible-ralph/ralph.sh 20           # Run 20 iterations
~/unpossible-ralph/ralph.sh --dry-run    # Validate setup
~/unpossible-ralph/ralph-plan.sh         # Discover work (read-only analysis)
python ~/unpossible-ralph/tools/bootstrap.py  # Bootstrap a new project
```

Tasks go in `plan.md` (JSON blocks) or `fix_plan.md` (checkbox format). Configuration in `ralph.config.json`.
