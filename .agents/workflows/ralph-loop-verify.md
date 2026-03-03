---
description: Utility to pull results, verify them, and update the loop state
---

This utility workflow handles the results of a completed Jules CLI session.

### Jules CLI Knowledge Base
Do NOT search the internet for Jules CLI documentation. Use these exact commands instead:
- **Pull session**: `jules remote pull --session <session_id>` (Pulls the code from a completed session)
- **List sessions**: `jules remote list --session` (Lists active/past sessions to check status and IDs)

0. You can find the session_id in `docs/progress.md`.
1. Execute `jules remote pull --session <SESSION_ID>` to download the generated code and changes from the completed session.
2. Review the downloaded changes to verify that development is progressing. This is a basic check to ensure files were modified, created, or that the requested task was generally addressed.
3. Analyze the results of the check:
   - **If Progress is Confirmed:**
     - Update `docs/progress.md` to mark the task as complete and describe what was done.
     - Execute the `/ralph-loop-commit` workflow to save the progress.
     - Check `docs/prd.md` to see if all project objectives are met.
       - If all objectives are met, use `/ralph-loop-stop` to terminate the loop.
       - If objectives remain, prepare to loop again.
   - **If No Progress or Errors Occurred:**
     - Analyze why the session might have failed to produce useful changes.
     - Update `docs/progress.md` with details about the issue to inform the next iteration.
     - Prepare to loop again so the agent can attempt to address the issue.