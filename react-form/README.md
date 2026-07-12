# React-Form & Interactive Form Handling

**Italiano:**
Raccolta completa dei 7 esercizi sulla gestione avanzata dei moduli (**Forms**) in React, validazione degli input, calcolo preventivi, prenotazioni e liste interattive. Tutti gli esercizi sono formattati con **Bootstrap 5** per un'interfaccia moderna e verificati tramite linter **Oxlint**.

> [!NOTE]
> **Aggiornamento Nomenclatura:** Tutte le cartelle degli esercizi sono state create con descrittori funzionali in inglese (`00-kebab-case`) e i componenti interni sono focalizzati ed essenziali.

**English:**
Comprehensive collection of 7 exercises covering advanced **Form handling** in React, input validation, quote calculations, reservation workflows, and interactive lists. Styled with **Bootstrap 5** and verified with **Oxlint**.

> [!NOTE]
> **Naming Update:** All exercise directories have been created using English functional descriptors (`00-kebab-case`), and internal components are focused and concise.

---

## Elenco Esercizi / Exercises Overview

Ogni cartella rappresenta un progetto React + Vite indipendente e configurato, corredato da un proprio `README.md` con traccia in italiano/inglese e pseudocodice indentato (Reasoning). / Each folder represents a standalone, configured React + Vite project, complete with its own `README.md` featuring Italian/English specifications and indented pseudocode (Reasoning).

| # | Cartella / Folder | Funzionalità / Feature | Concetti Chiave / Key Concepts |
| :---: | :--- | :--- | :--- |
| **1** | [`01-newsletter-subscription`](./01-newsletter-subscription) | Iscrizione Newsletter / Newsletter Subscription | Form di iscrizione con rendering condizionale dopo l'invio |
| **2** | [`02-promo-code-validator`](./02-promo-code-validator) | Validatore Codice Promo / Promo Code Validator | Controllo di codici sconto (`SCONTO10`, `PROMO20`) in oggetto costante |
| **3** | [`03-feedback-rating-form`](./03-feedback-rating-form) | Form Recensioni & Voto / Feedback Rating Form | Radio button da 1 a 5 stelle e risposta dinamica personalizzata |
| **4** | [`04-quote-calculator`](./04-quote-calculator) | Calcolo Preventivo / Quote Calculator | Moltiplicazione ore × tariffa e aggiunta automatica di sovrapprezzo per soglia >40h |
| **5** | [`05-table-reservation-form`](./05-table-reservation-form) | Prenotazione Tavolo / Table Reservation Form | Input multipli (`text`, `number`, `datetime-local`) con riepilogo dati di conferma |
| **6** | [`06-guest-list-manager`](./06-guest-list-manager) | Lista Invitati / Guest List Manager | Suddivisione lista in "Arrivati" e "Attesi" con toggle della proprietà booleana `present` |
| **7** | [`07-phone-book`](./07-phone-book) | Rubrica Telefonica / Phone Book | Aggiunta di nuovi contatti (`id`, `name`, `phone`) e cancellazione mirata con `.filter()` |

---

## Come eseguire i progetti / How to Run Locally

**Italiano:**
Per avviare o verificare qualsiasi esercizio:

1. Entra nella cartella desiderata (es. `cd 01-newsletter-subscription`)
2. Installa le dipendenze con `pnpm install` (oppure `npm install`)
3. Avvia il server di sviluppo con `pnpm dev` (oppure `npm run dev`)
4. Verifica il linter con `pnpm oxlint`

**English:**
To run or lint any exercise locally:

1. Navigate to the desired folder (e.g., `cd 01-newsletter-subscription`)
2. Install dependencies with `pnpm install` (or `npm install`)
3. Start the development server with `pnpm dev` (or `npm run dev`)
4. Run linter checks with `pnpm oxlint`
