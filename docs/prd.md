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

---

## Phase 4: UI & UX Foundation
L'obiettivo di questa fase è rinnovare l'estetica del gioco e implementare le funzionalità di base per l'esperienza utente.

### Obiettivi:
- **Design & Layout:** Passare a un'estetica "Terminal/Synthwave" (Retrowave) e implementare un CSS Grid Layout (Dashboard responsiva).
- **Elementi Visuali:** Introdurre bottoni neumorfici e icone vettoriali custom al posto del solo testo.
- **Feedback:** Aggiungere animazioni al click ("+1 Loc" fluttuanti) e notifiche Toast per eventi di gioco.
- **QoL (Quality of Life):** Implementare Hotkeys (spazio/invio per cliccare) e Tooltips dettagliati per gli upgrade.
- **Salvataggio:** Implementare il salvataggio/caricamento automatico tramite `localStorage`.

## Phase 5: Core Systems & Projects
Introduzione di un vero scopo per i LoC generati tramite il sistema dei Progetti.

### Obiettivi:
- **Sistema di Progetti:** Creare una nuova UI "Projects" dove spendere LoC per sbloccare Progetti base (Sito Vetrina, Blog, App Calcolatrice).
- **Progresso Visivo:** Inserire una Barra di Progresso Dinamica per tracciare il completamento dei Progetti.
- **Statistiche:** Creare una Dashboard (Pannello) per mostrare statistiche dettagliate (LoC/s, Click totali, Tempo).
- **Progressione UI:** Nascondere il pannello Progetti finché il giocatore non raggiunge i primi 100 LoC.

## Phase 6: Content Expansion & Events
Ampliamento degli strumenti a disposizione del giocatore e introduzione di dinamismo.

### Obiettivi:
- **Nuovi Upgrades Click:** Tastiera a Membrana, Meccanica, Ergonomica.
- **Nuovi Upgrades Passivi:** Mid-Level Dev, Senior Dev, Tech Lead.
- **Tecnologie & Server (Moltiplicatori):** Copilot, StackOverflow, Cloud Hosting, ecc.
- **Eventi Casuali:** Implementare il motore per eventi randomici (Bug in Produzione, Crunch Time, Ispirazione Notturna).
- **Progetti Tier Avanzato:** Aggiungere progetti di Tier 2 (SaaS) e Tier 3 (OS, AGI).

## Phase 7: Prestige & Final Polish
Introdurre la meccanica di rinascita (Prestige) e rifinire l'esperienza utente generale.

### Obiettivi:
- **Sistema di Refactoring (Prestige):** Permettere il reset di LoC e Devs in cambio di moltiplicatori permanenti.
- **Upgrades di Prestigio:** Sbloccabili solo con la valuta del refactoring (Microservizi, Clean Code).
- **Finiture Visuali:** Aggiungere il Particle Background e Milestone Feedback visivi per i traguardi.
- **Funzionalità Extra:** Implementare l'Offline Progress, Dark/Light Mode Toggle, Modalità "Focus" e News Ticker.

## Acceptance Criteria Fasi 4-7
- Ogni fase deve essere completata e testata ("giocabile" e senza errori in console) prima di passare alla successiva.
- Il layout finale deve ospitare tutti i nuovi componenti (Projects, Events, Stats, Prestige) mantenendo un design coerente.
- Il gioco salva lo stato tra sessioni multiple di gioco.
