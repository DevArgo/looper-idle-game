# Product Requirement Document (PRD): IT Idle Game

## Project Goal
Create a simple, functional idle/incremental web game themed around the IT world, using HTML, CSS, and Vanilla JavaScript. The game should be built iteratively.

## Objectives to be completed in order:

### Phase 1: Core Mechanics (Manual Clicking)
- Create an `index.html` and a `main.js` file.
- The UI should have a button labeled "Write Code".
- Clicking the button increases a resource called "Lines of Code" (LoC) by 1.
- Display the current amount of LoC on the screen.

### Phase 2: Automation (Upgrades)
- Add a new section for upgrades in the UI.
- Add an upgrade to buy a "Junior Developer".
- The Junior Developer costs 10 LoC.
- When purchased, the Junior Developer automatically generates 1 LoC every second.
- The UI must show how many Junior Developers the player owns, and update the total LoC cost appropriately after purchase (e.g. exponential or linear increase).

### Phase 3: Styling and Polish
- Create a `style.css` file and link it.
- Apply a "Hacker/IT" theme (e.g., dark background, green monospace text).
- Improve the layout so the game looks presentable (centered content, distinct sections for clicking and upgrades).

## Acceptance Criteria
- All 3 phases are implemented in the codebase.
- The game can be played by opening `index.html` in a web browser.
- There are no visible console errors.
