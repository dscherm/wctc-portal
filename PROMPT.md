# PROMPT.md — wctc

## Context

@.ralph/pending_tasks.md
@.ralph/recent_activity.md
@.ralph/memories.md
@.ralph/gate_failure.md
@.ralph/human_note.md
@CLAUDE.md

## Your Task — 8-Phase Sequence

Follow these phases in order. ONE task per iteration.

### Phase 1: Orient

- If `.ralph/localization.md` exists, read it FIRST — it identifies the most likely files and functions for the current task. Start your investigation there.
- Read pending tasks (above). Your task is the FIRST one listed.
- Read lesson warnings injected below pending tasks. Apply them proactively.
- Read recent activity to understand what was just completed.
- Read memories for cross-iteration context.
- **If gate_failure.md is non-empty, FIX THE GATE FAILURE before starting any new task.**
- If `.ralph/remote_gate_result.md` exists with status: fail, treat it as a gate failure.
- If human_note.md has content, follow those instructions.

### Phase 2: Search

- Before writing any code, search the codebase for existing implementations.
- Do not duplicate code that already exists. Extend or modify it instead.
- Use subagents for parallel codebase searches when helpful.

### Phase 3: Implement

- Follow the task's `steps` array from pending_tasks.md.
- Full implementations only — no placeholders, no stubs, no TODOs.
- After editing any file, verify it parses correctly before proceeding.
- If the task cannot be completed, signal BLOCKED (see Phase 8).

### Phase 4: Verify

- Run targeted tests for the modules you changed:
  ```
  npx vitest run src/ -v
  ```
- If you touched shared code, run the full test suite.

### Phase 5: Record

- Add an entry to `activity.md`:
  ```
  ## YYYY-MM-DD - Task N: Brief Title

  **Goal:** What was being accomplished

  **Changes Made:**
  - `file.py`: Description of change (specific values)

  **Verification:**
  - `test command` -- N passed, 0 failures

  **Status:** COMPLETE
  ```
- If you learned something non-obvious, add it to `.ralph/memories.md`.
- If you discovered new issues, add them as new JSON task blocks at the end of `plan.md`.

### Phase 6: Mark — CRITICAL

**YOU MUST DO THIS.** In `plan.md`, find the JSON block for the task you completed.
Change `"passes": false` to `"passes": true`.

**If you skip this step, the next iteration will re-attempt the same task.**
This is the #1 cause of wasted iterations. VERIFY plan.md is updated before committing.

### Phase 7: Commit

- Stage specific files by name. **NEVER use `git add -A` or `git add .`.**
- Commit with: `type: brief description`
- **NEVER push to remote.**

### Phase 8: Signal

- If ALL pending tasks are done: output `<promise>COMPLETE</promise>`
- If you cannot proceed: output `<promise>BLOCKED</promise>`
- If you completed work but aren't confident: output `<promise>NEEDS_REVIEW</promise>`
- Otherwise: output nothing (the harness will start the next iteration).

## Rules

- **ONE task per iteration. Only one.**
- Fix gate failures before new work.
- No placeholders, stubs, or TODOs.
- Expertise focus: full-stack

## Prior Knowledge (from 359 observations across 8 similar projects)

- File `CardDeck.tsx` has a 67% failure rate in similar projects.
- File `FilterForm.tsx` has a 67% failure rate in similar projects.
- File `share.test.ts` has a 50% failure rate in similar projects.
- File `generator.test.ts` has a 50% failure rate in similar projects.
- File `illustration-mapping.test.ts` has a 50% failure rate in similar projects.
