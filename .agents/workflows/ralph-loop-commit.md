---
description: Utility to commit changes for the Ralph Loop
---
This utility workflow commits the changes made during a successful Ralph Loop iteration.

1. Review the changes utilizing standard Git commands (e.g., `git status`, `git diff`).
2. Stage all modifications (e.g., `git add .`).
3. Create a commit with a descriptive message based on the recent changes documented in `docs/progress.md`. For example: `git commit -m "Ralph Loop: Completed task - <short description>"`
4. If a remote repository exists, push the changes to avoid data loss.
