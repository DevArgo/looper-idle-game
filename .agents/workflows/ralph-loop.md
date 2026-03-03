---
description: Start and orchestrate the Ralph Loop AI agent process
---

This workflow orchestrates the entire cycle using Jules CLI, forming a Ralph Loop. It relies on several utility workflows to handle specific steps.

### Important: Files to Reference
Before starting, always ensure you are aware of the following key documents (read them if necessary):
- **`docs/prd.md`**: The Product Requirement Document. Read this to understand the main goals and requirements.
- **`docs/progress.md`**: The Progress Tracker. Read this to know the current iteration state, successes from the previous loop, and error logs.
- Use only **`.agents/workflows/ralph-loop-*`** workflows to do the work.


0. Check if this is the first run and initialize if necessary:
/ralph-loop-init

1. Read the current project state, PRD, and progress to determine the next task:
/ralph-loop-sync

2. Dispatch the new task to Jules CLI and wait for completion:
/ralph-loop-dispatch

3. Pull the results, verify them, and decide whether to merge, loop again, or stop:
/ralph-loop-verify

4. If the loop should continue based on the verification step, re-run this workflow:
/ralph-loop