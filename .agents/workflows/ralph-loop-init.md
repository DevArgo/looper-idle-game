---
description: Utility to initialize the Ralph Loop base documents
---
This utility workflow ensures that the necessary files for the Ralph Loop exist in the project, and initializes the repository.

1. Check if the directory is a git repository (e.g., check for `.git` folder). If not, initialize it using `git init`.
2. Check if a GitHub remote repository is configured (use `git remote -v`). If there is no remote:
   - Use the `mcp_github-mcp-server_create_repository` tool to create a new remote repository (e.g., named after the project folder).
   - Add it as `origin` using `git remote add origin <repo_url>`.
   - Ensure an initial commit is pushed to initialize the remote link.
3. Create a `docs` directory if it doesn't already exist.
3. Check if `docs/prd.md` (Product Requirement Document) exists. If not, create it with a basic template containing:
   - Project Goal
   - Objectives
   - Acceptance Criteria
4. Check if `docs/progress.md` exists. If not, create it with an initial status indicating the start of the project.
