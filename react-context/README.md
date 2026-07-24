# React-Context & Global State

**Italiano:**
Raccolta di 3 esercizi pratici sull'utilizzo della **Context API** di React. Lo scopo è imparare a gestire stati globali evitando il "prop drilling", passando dati e funzioni direttamente ai componenti tramite `Provider` e `useContext`. Implementati con **Bootstrap 5**.

**English:**
Collection of 3 practical exercises on using the React **Context API**. The goal is to learn how to manage global states avoiding "prop drilling", passing data and functions directly to components via `Provider` and `useContext`. Implemented with **Bootstrap 5**.

---

## Elenco Esercizi (Italiano)

Ogni cartella rappresenta un progetto React + Vite indipendente e configurato, corredato da un proprio `README.md` con traccia in italiano/inglese e pseudocodice indentato (Reasoning).

| # | Cartella | Funzionalità | Concetti Chiave |
| :---: | :--- | :--- | :--- |
| **1** | [`01-digital-traffic-light`](./01-digital-traffic-light) | Semaforo Digitale | `createContext`, aggiornamento stato globale da componenti figli |
| **2** | [`02-wedding-guests-manager`](./02-wedding-guests-manager) | Gestionale Invitati | Stato globale complesso (array di oggetti), reduce sul contesto |
| **3** | [`03-audio-volume-controller`](./03-audio-volume-controller) | Controllo Volume Audio | Limiti numerici di stato globale (0-100), progress bar dinamica |

## Exercises Overview (English)

Each folder represents a standalone, configured React + Vite project, complete with its own `README.md` featuring Italian/English specifications and indented pseudocode (Reasoning).

| # | Folder | Feature | Key Concepts |
| :---: | :--- | :--- | :--- |
| **1** | [`01-digital-traffic-light`](./01-digital-traffic-light) | Digital Traffic Light | `createContext`, global state update from child components |
| **2** | [`02-wedding-guests-manager`](./02-wedding-guests-manager) | Wedding Guests Manager | Complex global state (array of objects), reduce on context |
| **3** | [`03-audio-volume-controller`](./03-audio-volume-controller) | Audio Volume Controller | Global state numeric limits (0-100), dynamic progress bar |

---

## Come eseguire i progetti / How to Run Locally

**Italiano:**
Per avviare qualsiasi esercizio:
1. Entra nella cartella desiderata (es. `cd 01-digital-traffic-light`)
2. Installa le dipendenze con `pnpm install` (oppure `npm install`)
3. Avvia il server di sviluppo con `pnpm dev` (oppure `npm run dev`)

**English:**
To run any exercise locally:
1. Navigate to the desired folder (e.g., `cd 01-digital-traffic-light`)
2. Install dependencies with `pnpm install` (or `npm install`)
3. Start the development server with `pnpm dev` (or `npm run dev`)
