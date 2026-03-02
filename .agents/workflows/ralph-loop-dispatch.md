---
description: Utility to send tasks to Jules CLI and wait for completion
---
This utility workflow triggers the Jules CLI to start working on the task determined in the sync phase.

### Jules CLI Knowledge Base
Do NOT search the internet for Jules CLI documentation. Use these exact commands instead:
- **Create session**: `jules remote new --session "<task_description>"` (Starts a new task)
- **List sessions**: `jules remote list --session` (Lists active/past sessions to check status and IDs)
- **Pull session**: `jules remote pull --session <session_id>` (Pulls the code from a completed session)


1. Retrieve the task description formulated in the `ralph-loop-sync` step.
2. Formulate the precise terminal command to start a new Jules session.
   - Example: `jules remote new --session "<TASK_DESCRIPTION>"`
3. If necessary, capture the `session_id` returned by the command (or use `jules remote list --session` to find the latest active session).
4. Monitor the status of the session. This may involve periodically checking the session status using Jules CLI commands until it is marked as completed or failed.
