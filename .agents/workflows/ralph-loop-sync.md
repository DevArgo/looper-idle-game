---
description: Utility to synchronize state and determine the next task for the Ralph Loop
---

This utility workflow analyzes the current state of the project to formulate the next prompt for the Jules CLI.

1. Read the contents of `docs/prd.md` to understand the overall project goals and requirements.
2. Read the contents of `docs/progress.md` to review what has been completed, what the current status is, and if there are any errors from the previous loop iteration.
3. Based on the PRD, the progress history, and any recent test failures, formulate a clear and concise task description (prompt) for the next iteration of the AI agent.
4. Temporarily save this task description so it can be used by the `ralph-loop-dispatch` workflow.