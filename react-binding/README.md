# React-Binding & Two-Way Interactivity

**Italiano:**
Raccolta completa dei 15 esercizi su **Two-Way Data Binding**, gestione reattiva degli eventi (`onChange`, `onClick`), filtri istantanei e interattività avanzata in React, implementati con interfaccia moderna semplificata tramite **Bootstrap 5** e verificati con **Oxlint**.

> [!NOTE]
> **Aggiornamento Nomenclatura:** Tutte le cartelle degli esercizi sono state rinominate con descrittori funzionali in inglese (`00-kebab-case`) e i componenti interni sono stati alleggeriti e semplificati.

**English:**
Comprehensive collection of 15 exercises covering **Two-Way Data Binding**, reactive event handling (`onChange`, `onClick`), instant filters, and advanced interactivity in React, styled with **Bootstrap 5** and verified with **Oxlint**.

> [!NOTE]
> **Naming Update:** All exercise directories have been renamed using English functional descriptors (`00-kebab-case`), and internal components have been streamlined and simplified.

---

---

## Come eseguire i progetti / How to Run Locally

**Italiano:**
Per avviare o verificare qualsiasi esercizio:

1. Entra nella cartella desiderata (es. `cd 01-realtime-text-echo`)
2. Installa le dipendenze con `pnpm install` (oppure `npm install`)
3. Avvia il server di sviluppo con `pnpm dev` (oppure `npm run dev`)
4. Verifica il linter con `pnpm oxlint`

**English:**
To run or lint any exercise locally:

1. Navigate to the desired folder (e.g., `cd 01-realtime-text-echo`)
2. Install dependencies with `pnpm install` (or `npm install`)
3. Start the development server with `pnpm dev` (or `npm run dev`)
4. Run linter checks with `pnpm oxlint`

## Elenco Esercizi (Italiano)

Ogni cartella rappresenta un progetto React + Vite indipendente e configurato, corredato da un proprio `README.md` con traccia in italiano/inglese e pseudocodice indentato (Reasoning).

| # | Cartella | Funzionalità | Concetti Chiave |
| :---: | :--- | :--- | :--- |
| **1** | [`01-realtime-text-echo`](./01-realtime-text-echo) | Eco del Testo | `useState`, `event.target.value`, two-way data binding |
| **2** | [`02-character-counter`](./02-character-counter) | Conta Caratteri | Calcolo della lunghezza della stringa (`text.length`) in tempo reale |
| **3** | [`03-instant-name-filter`](./03-instant-name-filter) | Filtro Istantaneo | `.filter()` e `.includes()` guidati dall'input dell'utente |
| **4** | [`04-live-h1-update`](./04-live-h1-update) | Aggiornamento H1 | Sostituzione reattiva del contenuto del titolo ad ogni digitazione |
| **5** | [`05-fullname-merger`](./05-fullname-merger) | Unione Nomi | Combinazione di due stati di input distinti (nome + cognome) |
| **6** | [`06-checkbox-submit-unlock`](./06-checkbox-submit-unlock) | Sblocco Pulsante | `event.target.checked` per abilitare condizionalmente un pulsante |
| **7** | [`07-dynamic-style-toggle`](./07-dynamic-style-toggle) | Stili Dinamici | Array di classi condizionali (`fw-bold`, `fst-italic`, `text-decoration-underline`) |
| **8** | [`08-text-alignment-selector`](./08-text-alignment-selector) | Allineamento Testo | `<select>` reattivo per variare classi Bootstrap (`text-start`, `text-center`) |
| **9** | [`09-background-color-picker`](./09-background-color-picker) | Selettore Colore | Input `<input type="color">` per modificare dinamicamente lo stile di un contenitore |
| **10** | [`10-font-size-resizer`](./10-font-size-resizer) | Ridimensionamento Font | Controllo numerico/range per aggiornare la proprietà CSS `fontSize` |
| **11** | [`11-language-greeting-selector`](./11-language-greeting-selector) | Selettore Saluto | Selezione lingua da tendina con mapping su oggetto di messaggi di benvenuto |
| **12** | [`12-list-attribute-filter`](./12-list-attribute-filter) | Filtro per Attributo | Filtraggio combinato di array di oggetti (es. per categoria/ruolo) |
| **13** | [`13-currency-price-converter`](./13-currency-price-converter) | Convertitore di Valuta | Calcolo matematico in tempo reale basato su un tasso di cambio selezionato |
| **14** | [`14-textarea-remaining-chars`](./14-textarea-remaining-chars) | Caratteri Rimanenti | Sottrazione del conteggio caratteri da un limite massimo consentito |
| **15** | [`15-textarea-length-warnings`](./15-textarea-length-warnings) | Avvisi Lunghezza | Rendering condizionale di avvisi visivi al superamento di soglie intermedie |

## Exercises Overview (English)

Each folder represents a standalone, configured React + Vite project, complete with its own `README.md` featuring Italian/English specifications and indented pseudocode (Reasoning).

| # | Folder | Feature | Key Concepts |
| :---: | :--- | :--- | :--- |
| **1** | [`01-realtime-text-echo`](./01-realtime-text-echo) | Real-time Text Echo | `useState`, `event.target.value`, two-way data binding |
| **2** | [`02-character-counter`](./02-character-counter) | Character Counter | Calcolo della lunghezza della stringa (`text.length`) in tempo reale |
| **3** | [`03-instant-name-filter`](./03-instant-name-filter) | Instant Name Filter | `.filter()` e `.includes()` guidati dall'input dell'utente |
| **4** | [`04-live-h1-update`](./04-live-h1-update) | Live H1 Update | Sostituzione reattiva del contenuto del titolo ad ogni digitazione |
| **5** | [`05-fullname-merger`](./05-fullname-merger) | Full Name Merger | Combinazione di due stati di input distinti (nome + cognome) |
| **6** | [`06-checkbox-submit-unlock`](./06-checkbox-submit-unlock) | Checkbox Submit Unlock | `event.target.checked` per abilitare condizionalmente un pulsante |
| **7** | [`07-dynamic-style-toggle`](./07-dynamic-style-toggle) | Dynamic Style Toggle | Array di classi condizionali (`fw-bold`, `fst-italic`, `text-decoration-underline`) |
| **8** | [`08-text-alignment-selector`](./08-text-alignment-selector) | Text Alignment | `<select>` reattivo per variare classi Bootstrap (`text-start`, `text-center`) |
| **9** | [`09-background-color-picker`](./09-background-color-picker) | Background Color Picker | Input `<input type="color">` per modificare dinamicamente lo stile di un contenitore |
| **10** | [`10-font-size-resizer`](./10-font-size-resizer) | Font Size Resizer | Controllo numerico/range per aggiornare la proprietà CSS `fontSize` |
| **11** | [`11-language-greeting-selector`](./11-language-greeting-selector) | Language Greeting Selector | Selezione lingua da tendina con mapping su oggetto di messaggi di benvenuto |
| **12** | [`12-list-attribute-filter`](./12-list-attribute-filter) | List Attribute Filter | Filtraggio combinato di array di oggetti (es. per categoria/ruolo) |
| **13** | [`13-currency-price-converter`](./13-currency-price-converter) | Currency Price Converter | Calcolo matematico in tempo reale basato su un tasso di cambio selezionato |
| **14** | [`14-textarea-remaining-chars`](./14-textarea-remaining-chars) | Remaining Characters | Sottrazione del conteggio caratteri da un limite massimo consentito |
| **15** | [`15-textarea-length-warnings`](./15-textarea-length-warnings) | Textarea Length Warnings | Rendering condizionale di avvisi visivi al superamento di soglie intermedie |
